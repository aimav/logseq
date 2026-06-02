goog.provide('frontend.components.plugins');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.plugins !== 'undefined') && (typeof frontend.components.plugins.PER_PAGE_SIZE !== 'undefined')){
} else {
frontend.components.plugins.PER_PAGE_SIZE = (15);
}
frontend.components.plugins._STAR_dirties_toggle_items = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.components.plugins.clear_dirties_states_BANG_ = (function frontend$components$plugins$clear_dirties_states_BANG_(){
return cljs.core.reset_BANG_(frontend.components.plugins._STAR_dirties_toggle_items,cljs.core.PersistentArrayMap.EMPTY);
});
frontend.components.plugins.installed_themes = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var _STAR_cursor = new cljs.core.Keyword("frontend.components.plugins","cursor","frontend.components.plugins/cursor",-841365704).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_themes = new cljs.core.Keyword("frontend.components.plugins","themes","frontend.components.plugins/themes",607722898).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",{'tabIndex':(-1),'className':"cp__themes-installed"},[(function (){var attrs110491 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"themes","themes",-702786642)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs110491))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-4","text-2xl","p-1"], null)], null),attrs110491], 0))):{'className':"mb-4 text-2xl p-1"}),((cljs.core.map_QMARK_(attrs110491))?null:[daiquiri.interpreter.interpret(attrs110491)]));
})(),daiquiri.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
var current_selected_QMARK_ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(opt);
var group_first_QMARK_ = new cljs.core.Keyword(null,"group-first","group-first",1023924108).cljs$core$IFn$_invoke$arity$1(opt);
var plg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(opt)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opt))].join('')], null),(cljs.core.truth_((function (){var and__5041__auto__ = group_first_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0));
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.my-2","hr.my-2",930024796)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.flex.px-3.py-1.5.rounded-sm.justify-between","div.it.flex.px-3.py-1.5.rounded-sm.justify-between",1407568914),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-selected","is-selected",-334199992),current_selected_QMARK_,new cljs.core.Keyword(null,"is-active","is-active",-1424968720),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(_STAR_cursor))], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
LSPluginCore.selectTheme(cljs_bean.core.__GT_js(opt));

return frontend.state.close_modal_BANG_();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.text-xs","div.flex.items-center.text-xs",505827359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-60","div.opacity-60",-1650446509),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plg);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "Logseq";
}
})())," \u2022"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name.ml-1","div.name.ml-1",1330505409),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opt)], null)], null),(cljs.core.truth_((function (){var or__5043__auto__ = group_first_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return current_selected_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),(cljs.core.truth_(group_first_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-60","small.opacity-60",1913667792),new cljs.core.Keyword(null,"group-desc","group-desc",-883642045).cljs$core$IFn$_invoke$arity$1(opt)], null):null),(cljs.core.truth_(current_selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.inline-flex.ml-1.opacity-60","small.inline-flex.ml-1.opacity-60",1954839558),frontend.ui.icon("check")], null):null)], null):null)], null)], null);
}),cljs.core.deref(_STAR_themes)))]);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("frontend.components.plugins","themes","frontend.components.plugins/themes",607722898)),rum.core.local.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword("frontend.components.plugins","cursor","frontend.components.plugins/cursor",-841365704)),rum.core.local.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword("frontend.components.plugins","total","frontend.components.plugins/total",1120620758)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var _STAR_themes = new cljs.core.Keyword("frontend.components.plugins","themes","frontend.components.plugins/themes",607722898).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_cursor = new cljs.core.Keyword("frontend.components.plugins","cursor","frontend.components.plugins/cursor",-841365704).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_total = new cljs.core.Keyword("frontend.components.plugins","total","frontend.components.plugins/total",1120620758).cljs$core$IFn$_invoke$arity$1(state);
var mode = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var all_themes = frontend.state.sub(new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197));
var themes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__110488_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__110488_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__110487_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p1__110487_SHARP_),mode);
}),all_themes));
var no_mode_themes = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opt,new cljs.core.Keyword(null,"group-first","group-first",1023924108),(idx === (0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group-desc","group-desc",-883642045),(((idx === (0)))?"light & dark themes":null)], 0));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__110490_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__110490_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__110489_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p1__110489_SHARP_),null);
}),all_themes)));
var selected = frontend.state.sub(new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220));
var themes__$1 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,opt){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(opt),selected);
if(selected_QMARK_){
cljs.core.reset_BANG_(_STAR_cursor,(idx + (1)));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opt,new cljs.core.Keyword(null,"mode","mode",654403691),mode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),selected_QMARK_], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(themes,no_mode_themes));
var themes__$2 = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Default",clojure.string.capitalize(mode),"Theme"], null)),new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"description","description",-1428560544),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Logseq default",mode,"theme."], null)),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"selected","selected",574897764),(selected == null),new cljs.core.Keyword(null,"group-first","group-first",1023924108),true,new cljs.core.Keyword(null,"group-desc","group-desc",-883642045),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode)," themes"].join('')], null),themes__$1);
cljs.core.reset_BANG_(_STAR_themes,themes__$2);

cljs.core.reset_BANG_(_STAR_total,cljs.core.count(themes__$2));

return state;
})], null),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
var _STAR_cursor = new cljs.core.Keyword("frontend.components.plugins","cursor","frontend.components.plugins/cursor",-841365704).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_total = new cljs.core.Keyword("frontend.components.plugins","total","frontend.components.plugins/total",1120620758).cljs$core$IFn$_invoke$arity$1(state);
var target = rum.core.dom_node(state);
target.focus();

return frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentArrayMap(null, 3, [(38),(function (_e){
return cljs.core.reset_BANG_(_STAR_cursor,(((cljs.core.deref(_STAR_cursor) === (0)))?(cljs.core.deref(_STAR_total) - (1)):(cljs.core.deref(_STAR_cursor) - (1))));
}),(40),(function (_e){
return cljs.core.reset_BANG_(_STAR_cursor,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cursor),(cljs.core.deref(_STAR_total) - (1))))?(0):(cljs.core.deref(_STAR_cursor) + (1))));
}),(13),(function (){
var temp__5804__auto__ = target.querySelector(".is-active");
if(cljs.core.truth_(temp__5804__auto__)){
var active = temp__5804__auto__;
return active.click();
} else {
return null;
}
})], null));
}))], null),"frontend.components.plugins/installed-themes");
frontend.components.plugins.unpacked_plugin_loader = rum.core.lazy_build(rum.core.build_defc,(function (unpacked_pkg_path){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var err_handle = (function (e){
var G__110494_110785 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((e["name"]));
var G__110494_110786__$1 = (((G__110494_110785 instanceof cljs.core.Keyword))?G__110494_110785.fqn:null);
switch (G__110494_110786__$1) {
case "IllegalPluginPackageError":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Illegal Logseq plugin package.",new cljs.core.Keyword(null,"error","error",-978969032));

break;
case "ExistedImportedPluginPackageError":
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Existed plugin package (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message),")."].join(''),new cljs.core.Keyword(null,"error","error",-978969032));

break;
default:

}

return frontend.handler.plugin.reset_unpacked_state();
});
var reg_handle = (function (){
return frontend.handler.plugin.reset_unpacked_state();
});
if(cljs.core.truth_(unpacked_pkg_path)){
var G__110495_110788 = LSPluginCore;
G__110495_110788.once("error",err_handle);

G__110495_110788.once("registered",reg_handle);

G__110495_110788.register(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),unpacked_pkg_path], null)));

} else {
}

return (function (){
var G__110496 = LSPluginCore;
G__110496.off("error",err_handle);

G__110496.off("registered",reg_handle);

return G__110496;
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [unpacked_pkg_path], null));

if(cljs.core.truth_(unpacked_pkg_path)){
return daiquiri.core.create_element("strong",{'className':"inline-flex px-3"},["Loading ..."]);
} else {
return null;
}
}),null,"frontend.components.plugins/unpacked-plugin-loader");
frontend.components.plugins.category_tabs = rum.core.lazy_build(rum.core.build_defc,(function (t,total_nums,category,on_action){
var attrs110497 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("puzzle"),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717)) : t.call(null,new cljs.core.Keyword(null,"plugins","plugins",1900073717))),((cljs.core.vector_QMARK_(total_nums))?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(total_nums)),")"].join(''):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_action.cljs$core$IFn$_invoke$arity$1 ? on_action.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"plugins","plugins",1900073717)) : on_action.call(null,new cljs.core.Keyword(null,"plugins","plugins",1900073717)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"plugins","plugins",1900073717)))?"active":"")], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110497))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["secondary-tabs","categories","flex"], null)], null),attrs110497], 0))):{'className':"secondary-tabs categories flex"}),((cljs.core.map_QMARK_(attrs110497))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("palette"),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : t.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642))),((cljs.core.vector_QMARK_(total_nums))?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(total_nums)),")"].join(''):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_action.cljs$core$IFn$_invoke$arity$1 ? on_action.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : on_action.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"themes","themes",-702786642)))?"active":"")], 0)))]:[daiquiri.interpreter.interpret(attrs110497),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("palette"),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : t.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642))),((cljs.core.vector_QMARK_(total_nums))?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(total_nums)),")"].join(''):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_action.cljs$core$IFn$_invoke$arity$1 ? on_action.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes","themes",-702786642)) : on_action.call(null,new cljs.core.Keyword(null,"themes","themes",-702786642)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"themes","themes",-702786642)))?"active":"")], 0)))]));
}),null,"frontend.components.plugins/category-tabs");
frontend.components.plugins.local_markdown_display = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__110498 = frontend.state.sub(new cljs.core.Keyword("plugin","active-readme","plugin/active-readme",-677043988));
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110498,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110498,(1),null);
return daiquiri.core.create_element("div",{'onClick':(function (e){
var temp__5804__auto__ = e.target;
if(cljs.core.truth_(temp__5804__auto__)){
var target = temp__5804__auto__;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(target.nodeName),"a")) && ((!(clojure.string.blank_QMARK_(target.getAttribute("href"))))))){
apis.openExternal(target.getAttribute("href"));

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
}),'className':"cp__plugins-details"},[daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"repository","repository",1489835364).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
var temp__5804__auto____$1 = ((typeof repo === 'string')?repo:new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo));
if(cljs.core.truth_(temp__5804__auto____$1)){
var repo__$1 = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.rounded-md.bg-base-3","div.p-4.rounded-md.bg-base-3",1387249382),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),repo__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),frontend.components.svg.github.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(25),new cljs.core.Keyword(null,"height","height",1025178622),(25)], null))], null),repo__$1], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
})()),daiquiri.core.create_element("div",{'style':{'minHeight':"60vw",'maxWidth':(900)},'dangerouslySetInnerHTML':{'__html':content},'className':"p-1 bg-transparent border-none ls-block"},[])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.plugins/local-markdown-display");
frontend.components.plugins.remote_readme_display = rum.core.lazy_build(rum.core.build_defc,(function (repo,_content){
var src = ["lsp://logseq.com/marketplace.html?repo=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)].join('');
return daiquiri.core.create_element("iframe",{'src':src,'className':"lsp-frame-readme"},[]);
}),null,"frontend.components.plugins/remote-readme-display");
frontend.components.plugins.security_warning = (function frontend$components$plugins$security_warning(){
return frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-md","p.text-md",1545148825),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","security-warning","plugin/security-warning",555257415)], 0))], null));
});
frontend.components.plugins.card_ctls_of_market = rum.core.lazy_build(rum.core.build_defc,(function (item,stat,installed_QMARK_,installing_or_updating_QMARK_){
return daiquiri.core.create_element("div",{'className':"ctl"},[daiquiri.core.create_element("ul",{'className':"l flex items-center"},[(function (){var attrs110501 = frontend.components.svg.star.cljs$core$IFn$_invoke$arity$1((16));
return daiquiri.core.create_element("li",((cljs.core.map_QMARK_(attrs110501))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","text-sm","items-center","pr-3"], null)], null),attrs110501], 0))):{'className':"flex text-sm items-center pr-3"}),((cljs.core.map_QMARK_(attrs110501))?[(function (){var attrs110502 = new cljs.core.Keyword(null,"stargazers_count","stargazers_count",-984649909).cljs$core$IFn$_invoke$arity$1(stat);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110502))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs110502], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs110502))?null:[daiquiri.interpreter.interpret(attrs110502)]));
})()]:[daiquiri.interpreter.interpret(attrs110501),(function (){var attrs110503 = new cljs.core.Keyword(null,"stargazers_count","stargazers_count",-984649909).cljs$core$IFn$_invoke$arity$1(stat);
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110503))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs110503], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs110503))?null:[daiquiri.interpreter.interpret(attrs110503)]));
})()]));
})(),daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = stat;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"total_downloads","total_downloads",-1370933259).cljs$core$IFn$_invoke$arity$1(stat);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var downloads = temp__5804__auto__;
if(cljs.core.truth_((function (){var and__5041__auto__ = downloads;
if(cljs.core.truth_(and__5041__auto__)){
return (downloads > (0));
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.text-sm.items-center.pr-3","li.flex.text-sm.items-center.pr-3",1837860767),frontend.components.svg.cloud_down.cljs$core$IFn$_invoke$arity$1((16)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1","span.pl-1",-1236384439),downloads], null)], null);
} else {
return null;
}
} else {
return null;
}
})())]),daiquiri.core.create_element("div",{'className':"r flex items-center"},[daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.common.plugin.install_marketplace_plugin(item);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5043__auto__ = installed_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return installing_or_updating_QMARK_;
}
})(),new cljs.core.Keyword(null,"installing","installing",506071602),installing_or_updating_QMARK_], null)], null))], null))},[(cljs.core.truth_(installed_QMARK_)?daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0))):(cljs.core.truth_(installing_or_updating_QMARK_)?daiquiri.core.create_element("span",{'className':"flex items-center"},[(function (){var attrs110504 = frontend.components.svg.loading;
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs110504))?daiquiri.interpreter.element_attributes(attrs110504):null),((cljs.core.map_QMARK_(attrs110504))?null:[daiquiri.interpreter.interpret(attrs110504)]));
})(),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581)], 0)))]):daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","install","plugin/install",-432957003)], 0)))))])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/card-ctls-of-market");
frontend.components.plugins.card_ctls_of_installed = rum.core.lazy_build(rum.core.build_defc,(function (id,name,url,sponsors,unpacked_QMARK_,disabled_QMARK_,installing_or_updating_QMARK_,has_other_pending_QMARK_,new_version,item){
return daiquiri.core.create_element("div",{'className':"ctl"},[daiquiri.core.create_element("div",{'className':"l"},[daiquiri.core.create_element("div",{'className':"de"},[(function (){var attrs110506 = frontend.ui.icon("settings");
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110506))?daiquiri.interpreter.element_attributes(attrs110506):null),((cljs.core.map_QMARK_(attrs110506))?null:[daiquiri.interpreter.interpret(attrs110506)]));
})(),daiquiri.core.create_element("ul",{'className':"menu-list"},[daiquiri.core.create_element("li",{'onClick':(function (){
return frontend.handler.plugin.open_plugin_settings_BANG_.cljs$core$IFn$_invoke$arity$2(id,false);
})},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-settings","plugin/open-settings",755186792)], 0)))]),daiquiri.core.create_element("li",{'onClick':(function (){
return apis.openPath(url);
})},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-package","plugin/open-package",-735283330)], 0)))]),daiquiri.core.create_element("li",{'onClick':(function (){
var confirm_fn = frontend.ui.make_confirm_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","delete-alert","plugin/delete-alert",918910734),name], 0)),new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),(function (_,p__110507){
var map__110508 = p__110507;
var map__110508__$1 = cljs.core.__destructure_map(map__110508);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110508__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

frontend.handler.common.plugin.unregister_plugin(id);

return frontend.handler.plugin_config.remove_plugin(id);
})], null));
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2(confirm_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
})},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","uninstall","plugin/uninstall",233071235)], 0)))])])]),((cljs.core.seq(sponsors))?daiquiri.core.create_element("div",{'className':"de sponsors"},[(function (){var attrs110509 = frontend.ui.icon("coffee");
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110509))?daiquiri.interpreter.element_attributes(attrs110509):null),((cljs.core.map_QMARK_(attrs110509))?null:[daiquiri.interpreter.interpret(attrs110509)]));
})(),daiquiri.core.create_element("ul",{'className':"menu-list"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__110510(s__110511){
return (new cljs.core.LazySeq(null,(function (){
var s__110511__$1 = s__110511;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110511__$1);
if(temp__5804__auto__){
var s__110511__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110511__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110511__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110513 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110512 = (0);
while(true){
if((i__110512 < size__5519__auto__)){
var link = cljs.core._nth(c__5518__auto__,i__110512);
cljs.core.chunk_append(b__110513,daiquiri.core.create_element("li",{'key':link},[daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[(function (){var attrs110514 = link;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110514))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs110514], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs110514))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link"))]:[daiquiri.interpreter.interpret(attrs110514),daiquiri.interpreter.interpret(frontend.ui.icon("external-link"))]));
})()])]));

var G__110789 = (i__110512 + (1));
i__110512 = G__110789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110513),frontend$components$plugins$iter__110510(cljs.core.chunk_rest(s__110511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110513),null);
}
} else {
var link = cljs.core.first(s__110511__$2);
return cljs.core.cons(daiquiri.core.create_element("li",{'key':link},[daiquiri.core.create_element("a",{'href':link,'target':"_blank"},[(function (){var attrs110514 = link;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110514))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs110514], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs110514))?[daiquiri.interpreter.interpret(frontend.ui.icon("external-link"))]:[daiquiri.interpreter.interpret(attrs110514),daiquiri.interpreter.interpret(frontend.ui.icon("external-link"))]));
})()])]),frontend$components$plugins$iter__110510(cljs.core.rest(s__110511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sponsors);
})())])]):null)]),(function (){var attrs110505 = (cljs.core.truth_((function (){var and__5041__auto__ = unpacked_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn","a.btn",-2143027730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,"reload",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
})], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","reload","plugin/reload",-389898430)], 0))], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110505))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r","flex","items-center"], null)], null),attrs110505], 0))):{'className':"r flex items-center"}),((cljs.core.map_QMARK_(attrs110505))?[((cljs.core.not(unpacked_QMARK_))?daiquiri.core.create_element("div",{'className':"updates-actions"},[daiquiri.core.create_element("a",{'onClick':(function (){
if(cljs.core.truth_(has_other_pending_QMARK_)){
return null;
} else {
return frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),cljs.core.not(new_version)),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));
}));
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),installing_or_updating_QMARK_], null)], null))], null))},[(cljs.core.truth_(installing_or_updating_QMARK_)?daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updating","plugin/updating",1642276684)], 0))):(cljs.core.truth_(new_version)?(function (){var attrs110515 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update","plugin/update",2040056703)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110515))?daiquiri.interpreter.element_attributes(attrs110515):null),((cljs.core.map_QMARK_(attrs110515))?[" \uD83D\uDC49 ",daiquiri.interpreter.interpret(new_version)]:[daiquiri.interpreter.interpret(attrs110515)," \uD83D\uDC49 ",daiquiri.interpreter.interpret(new_version)]));
})():daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-update","plugin/check-update",1581546124)], 0)))))])]):null),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(cljs.core.not(disabled_QMARK_),(function (){
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,(cljs.core.truth_(disabled_QMARK_)?"enable":"disable"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.plugins._STAR_dirties_toggle_items),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)) == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.plugins._STAR_dirties_toggle_items,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id),cljs.core.not(disabled_QMARK_));
} else {
return null;
}
}),true))]:[daiquiri.interpreter.interpret(attrs110505),((cljs.core.not(unpacked_QMARK_))?daiquiri.core.create_element("div",{'className':"updates-actions"},[daiquiri.core.create_element("a",{'onClick':(function (){
if(cljs.core.truth_(has_other_pending_QMARK_)){
return null;
} else {
return frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),cljs.core.not(new_version)),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));
}));
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),installing_or_updating_QMARK_], null)], null))], null))},[(cljs.core.truth_(installing_or_updating_QMARK_)?daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updating","plugin/updating",1642276684)], 0))):(cljs.core.truth_(new_version)?(function (){var attrs110516 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update","plugin/update",2040056703)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110516))?daiquiri.interpreter.element_attributes(attrs110516):null),((cljs.core.map_QMARK_(attrs110516))?[" \uD83D\uDC49 ",daiquiri.interpreter.interpret(new_version)]:[daiquiri.interpreter.interpret(attrs110516)," \uD83D\uDC49 ",daiquiri.interpreter.interpret(new_version)]));
})():daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-update","plugin/check-update",1581546124)], 0)))))])]):null),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(cljs.core.not(disabled_QMARK_),(function (){
cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(LSPluginCore,(cljs.core.truth_(disabled_QMARK_)?"enable":"disable"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.plugins._STAR_dirties_toggle_items),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)) == null)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.plugins._STAR_dirties_toggle_items,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id),cljs.core.not(disabled_QMARK_));
} else {
return null;
}
}),true))]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/card-ctls-of-installed");
frontend.components.plugins.get_open_plugin_readme_handler = (function frontend$components$plugins$get_open_plugin_readme_handler(url,item,repo){
return (function (){
return frontend.handler.plugin.open_readme_BANG_(url,item,(cljs.core.truth_(repo)?frontend.components.plugins.remote_readme_display:frontend.components.plugins.local_markdown_display));
});
});
frontend.components.plugins.plugin_item_card = rum.core.lazy_build(rum.core.build_defc,(function (t,p__110517,disabled_QMARK_,market_QMARK_,_STAR_search_key,has_other_pending_QMARK_,installing_or_updating_QMARK_,installed_QMARK_,stat,coming_update){
var map__110518 = p__110517;
var map__110518__$1 = cljs.core.__destructure_map(map__110518);
var item = map__110518__$1;
var sponsors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"sponsors","sponsors",-2122570439));
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"version","version",425292698));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"title","title",636505583));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var iir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"iir","iir",-231680811));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110518__$1,new cljs.core.Keyword(null,"url","url",276297046));
var name__$1 = (function (){var or__5043__auto__ = title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = name;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "Untitled";
}
}
})();
var unpacked_QMARK_ = cljs.core.not(iir);
var new_version = frontend.state.coming_update_new_version_QMARK_(coming_update);
return daiquiri.core.create_element("div",{'key':["lsp-card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__plugins-item-card",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"market","market",-1425134471),market_QMARK_,new cljs.core.Keyword(null,"installed","installed",553977691),installed_QMARK_,new cljs.core.Keyword(null,"updating","updating",1454028951),installing_or_updating_QMARK_,new cljs.core.Keyword(null,"has-new-version","has-new-version",1406719631),new_version], null)], null))], null))},[daiquiri.core.create_element("div",{'onClick':frontend.components.plugins.get_open_plugin_readme_handler(url,item,repo),'className':"l link-block cursor-pointer"},[(cljs.core.truth_((function (){var and__5041__auto__ = icon;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("img",{'src':(cljs.core.truth_(market_QMARK_)?frontend.handler.plugin.pkg_asset(id,icon):icon),'className':"icon"},[]):daiquiri.interpreter.interpret(frontend.components.svg.folder)),((((cljs.core.not(market_QMARK_)) && (unpacked_QMARK_)))?(function (){var attrs110519 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)) : t.call(null,new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110519))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","text-xs","text-error","pt-2"], null)], null),attrs110519], 0))):{'className':"flex justify-center text-xs text-error pt-2"}),((cljs.core.map_QMARK_(attrs110519))?null:[daiquiri.interpreter.interpret(attrs110519)]));
})():null)]),daiquiri.core.create_element("div",{'className':"r"},[daiquiri.core.create_element("h3",{'className':"head text-xl font-bold pt-1 5"},[daiquiri.core.create_element("span",{'onClick':frontend.components.plugins.get_open_plugin_readme_handler(url,item,repo),'className':"l link-block cursor-pointer"},[daiquiri.interpreter.interpret(name__$1)]),((cljs.core.not(market_QMARK_))?(function (){var attrs110521 = version;
return daiquiri.core.create_element("sup",((cljs.core.map_QMARK_(attrs110521))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inline-block","px-1","text-xs","opacity-50"], null)], null),attrs110521], 0))):{'className':"inline-block px-1 text-xs opacity-50"}),((cljs.core.map_QMARK_(attrs110521))?null:[daiquiri.interpreter.interpret(attrs110521)]));
})():null)]),daiquiri.core.create_element("div",{'className':"desc text-xs opacity-70"},[(function (){var attrs110522 = description;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs110522))?daiquiri.interpreter.element_attributes(attrs110522):null),((cljs.core.map_QMARK_(attrs110522))?null:[daiquiri.interpreter.interpret(attrs110522)]));
})()]),daiquiri.core.create_element("div",{'className':"flag"},[daiquiri.core.create_element("p",{'className':"text-xs pr-2 flex justify-between"},[daiquiri.core.create_element("small",{'onClick':(function (){
var temp__5804__auto__ = document.querySelector(".cp__plugins-page .search-ctls input");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
cljs.core.reset_BANG_(_STAR_search_key,["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(author)].join(''));

return el.select();
} else {
return null;
}
})},[daiquiri.interpreter.interpret(author)]),daiquiri.core.create_element("small",{'onClick':(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Copied!",new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.util.copy_to_clipboard_BANG_(id);
})},[["ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')])])]),(function (){var attrs110520 = (cljs.core.truth_(repo)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex","a.flex",-995526906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),frontend.handler.plugin.gh_repo_url(repo)], null),frontend.components.svg.github.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16)], null))], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110520))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flag","is-top","opacity-50"], null)], null),attrs110520], 0))):{'className':"flag is-top opacity-50"}),((cljs.core.map_QMARK_(attrs110520))?null:[daiquiri.interpreter.interpret(attrs110520)]));
})(),(cljs.core.truth_(market_QMARK_)?frontend.components.plugins.card_ctls_of_market(item,stat,installed_QMARK_,installing_or_updating_QMARK_):frontend.components.plugins.card_ctls_of_installed(id,name__$1,url,sponsors,unpacked_QMARK_,disabled_QMARK_,installing_or_updating_QMARK_,has_other_pending_QMARK_,new_version,item))])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/plugin-item-card");
frontend.components.plugins.panel_tab_search = rum.core.lazy_build(rum.core.build_defc,(function (search_key,_STAR_search_key,_STAR_search_ref){
return daiquiri.core.create_element("div",{'className':"search-ctls"},[(function (){var attrs110524 = frontend.ui.icon("search");
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs110524))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["absolute","s1"], null)], null),attrs110524], 0))):{'className':"absolute s1"}),((cljs.core.map_QMARK_(attrs110524))?null:[daiquiri.interpreter.interpret(attrs110524)]));
})(),((clojure.string.blank_QMARK_(search_key))?null:daiquiri.core.create_element("small",{'onClick':(function (){
var temp__5804__auto__ = rum.core.deref(_STAR_search_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var target = temp__5804__auto__;
cljs.core.reset_BANG_(_STAR_search_key,null);

return target.focus();
} else {
return null;
}
}),'className':"absolute s2"},[daiquiri.interpreter.interpret(frontend.ui.icon("x"))])),daiquiri.core.create_element("input",{'placeholder':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","search-plugin","plugin/search-plugin",-764896238)], 0)),'ref':_STAR_search_ref,'autoFocus':true,'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),e.keyCode)){
frontend.util.stop(e);

if(clojure.string.blank_QMARK_(search_key)){
var G__110525 = document.querySelector(".cp__plugins-page");
if((G__110525 == null)){
return null;
} else {
return G__110525.focus();
}
} else {
return cljs.core.reset_BANG_(_STAR_search_key,null);
}
} else {
return null;
}
}),'onChange':rum.core.mark_sync_update((function (p1__110523_SHARP_){
var target = p1__110523_SHARP_.target;
return cljs.core.reset_BANG_(_STAR_search_key,(function (){var G__110526 = target.value;
if((G__110526 == null)){
return null;
} else {
return clojure.string.triml(G__110526);
}
})());
})),'value':(function (){var or__5043__auto__ = search_key;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})(),'className':"form-input is-small"},[])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/panel-tab-search");
frontend.components.plugins.panel_tab_developer = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","contribute","plugin/contribute",1070040335)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/marketplace",new cljs.core.Keyword(null,"class","class",-2030961996),"contribute",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0)));
}),null,"frontend.components.plugins/panel-tab-developer");
frontend.components.plugins.user_proxy_settings_panel = rum.core.lazy_build(rum.core.build_defc,(function (p__110530){
var map__110531 = p__110530;
var map__110531__$1 = cljs.core.__destructure_map(map__110531);
var agent_opts = map__110531__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110531__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110531__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var type__$1 = (function (){var or__5043__auto__ = cljs.core.not_empty(type);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.not_empty(protocol);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "system";
}
}
})();
var vec__110532 = rum.core.use_state(agent_opts);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110532,(0),null);
var set_opts_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110532,(1),null);
var vec__110535 = rum.core.use_state(false);
var testing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110535,(0),null);
var set_testing_QMARK__BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110535,(1),null);
var _STAR_test_input = rum.core.create_ref();
var disabled_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(opts),"system")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(opts),"direct")));
return daiquiri.core.create_element("div",{'className':"cp__settings-network-proxy-panel"},[(function (){var attrs110538 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","network-proxy","settings-page/network-proxy",-895413144)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs110538))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-2","text-2xl","font-bold"], null)], null),attrs110538], 0))):{'className':"mb-2 text-2xl font-bold"}),((cljs.core.map_QMARK_(attrs110538))?null:[daiquiri.interpreter.interpret(attrs110538)]));
})(),daiquiri.core.create_element("div",{'className':"p-2"},[daiquiri.core.create_element("p",null,[daiquiri.core.create_element("label",null,[(function (){var attrs110542 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348)], 0));
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110542))?daiquiri.interpreter.element_attributes(attrs110542):null),((cljs.core.map_QMARK_(attrs110542))?null:[daiquiri.interpreter.interpret(attrs110542)]));
})(),frontend.ui.select(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"System",new cljs.core.Keyword(null,"value","value",305978217),"system",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"system")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Direct",new cljs.core.Keyword(null,"value","value",305978217),"direct",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"direct")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"HTTP",new cljs.core.Keyword(null,"value","value",305978217),"http",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"http")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"SOCKS5",new cljs.core.Keyword(null,"value","value",305978217),"socks5",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"socks5")], null)], null),(function (_e,value){
var G__110544 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"type","type",1174270348),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"protocol","protocol",652470118),value], 0));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__110544) : set_opts_BANG_.call(null,G__110544));
}))])]),daiquiri.core.create_element("p",{'className':"flex"},[daiquiri.core.create_element("label",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pr-4",((disabled_QMARK_)?"opacity-50":null)], null))},[(function (){var attrs110545 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"host","host",-1558485167)], 0));
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110545))?daiquiri.interpreter.element_attributes(attrs110545):null),((cljs.core.map_QMARK_(attrs110545))?null:[daiquiri.interpreter.interpret(attrs110545)]));
})(),daiquiri.core.create_element("input",{'value':new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts),'disabled':disabled_QMARK_,'onChange':rum.core.mark_sync_update((function (p1__110527_SHARP_){
var G__110546 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"host","host",-1558485167),frontend.util.trim_safe(frontend.util.evalue(p1__110527_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__110546) : set_opts_BANG_.call(null,G__110546));
})),'className':"form-input is-small"},[])]),daiquiri.core.create_element("label",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((disabled_QMARK_)?"opacity-50":null)], null))},[(function (){var attrs110547 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"port","port",1534937262)], 0));
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110547))?daiquiri.interpreter.element_attributes(attrs110547):null),((cljs.core.map_QMARK_(attrs110547))?null:[daiquiri.interpreter.interpret(attrs110547)]));
})(),daiquiri.core.create_element("input",{'value':new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(opts),'type':"number",'min':(1),'max':(65535),'disabled':disabled_QMARK_,'onChange':rum.core.mark_sync_update((function (p1__110528_SHARP_){
var G__110548 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"port","port",1534937262),frontend.util.trim_safe(frontend.util.evalue(p1__110528_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__110548) : set_opts_BANG_.call(null,G__110548));
})),'className':"form-input is-small"},[])])]),daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("p",{'className':"flex items-center space-x-2"},[daiquiri.core.create_element("span",{'className':"w-60"},[daiquiri.core.create_element("input",{'ref':_STAR_test_input,'list':"proxy-test-url-datalist",'type':"url",'placeholder':"https://",'onChange':rum.core.mark_sync_update((function (p1__110529_SHARP_){
var G__110551 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"test","test",577538877),frontend.util.trim_safe(frontend.util.evalue(p1__110529_SHARP_)));
return (set_opts_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_opts_BANG_.cljs$core$IFn$_invoke$arity$1(G__110551) : set_opts_BANG_.call(null,G__110551));
})),'value':new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(opts),'className':"form-input is-small"},[]),daiquiri.core.create_element("datalist",{'id':"proxy-test-url-datalist"},[daiquiri.core.create_element("option",null,["https://api.logseq.com/logseq/version"]),daiquiri.core.create_element("option",null,["https://logseq-connectivity-testing-prod.s3.us-east-1.amazonaws.com/logseq-connectivity-testing"]),daiquiri.core.create_element("option",null,["https://www.google.com"]),daiquiri.core.create_element("option",null,["https://s3.amazonaws.com"]),daiquiri.core.create_element("option",null,["https://clients3.google.com/generate_204"])])]),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(testing_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("Testing"):"Test URL"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var val = frontend.util.trim_safe(rum.core.deref(_STAR_test_input).value);
if(((cljs.core.not(testing_QMARK_)) && ((!(clojure.string.blank_QMARK_(val)))))){
(set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_testing_QMARK__BANG_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"testProxyUrl","testProxyUrl",-814931268),val,opts], 0)),(function (result){
return promesa.protocols._promise(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
})),(function (p__110554){
var map__110555 = p__110554;
var map__110555__$1 = cljs.core.__destructure_map(map__110555);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110555__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var response_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110555__$1,new cljs.core.Keyword(null,"response-ms","response-ms",-265710367));
frontend.handler.notification.clear_BANG_(new cljs.core.Keyword(null,"proxy-net-check","proxy-net-check",344482008));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Success! Status ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response_ms),"ms."].join(''),new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"proxy-net-check","proxy-net-check",344482008));
})),(function (){
return (set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_testing_QMARK__BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_testing_QMARK__BANG_.call(null,false));
}));
} else {
return null;
}
})], 0)))]),(function (){var attrs110541 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save","save",1850079149)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"setProxy","setProxy",777692671),opts], 0)),(function (_){
return promesa.protocols._promise((function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null),opts);

return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"https-proxy-panel","https-proxy-panel",-1589308406));
})()
);
}));
}));
})], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs110541))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-2"], null)], null),attrs110541], 0))):{'className':"pt-2"}),((cljs.core.map_QMARK_(attrs110541))?null:[daiquiri.interpreter.interpret(attrs110541)]));
})()])]);
}),null,"frontend.components.plugins/user-proxy-settings-panel");
frontend.components.plugins.auto_check_for_updates_control = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__110556 = rum.core.use_state(frontend.handler.plugin.get_enabled_auto_check_for_updates_QMARK_());
var enabled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110556,(0),null);
var set_enabled_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110556,(1),null);
var text = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","auto-check-for-updates","plugin/auto-check-for-updates",1128838222)], 0));
return daiquiri.core.create_element("div",{'onClick':(function (){
var t = cljs.core.not(enabled);
(set_enabled_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_enabled_BANG_.cljs$core$IFn$_invoke$arity$1(t) : set_enabled_BANG_.call(null,t));

frontend.handler.plugin.set_enabled_auto_check_for_updates(t);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.pl-1","strong.pl-1",384034726),((t)?"ON":"OFF")], null),"!"], null),((t)?new cljs.core.Keyword(null,"success","success",1890645906):new cljs.core.Keyword(null,"info","info",-317069002)));
}),'className':"flex items-center justify-between px-4 py-2"},[(function (){var attrs110559 = text;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110559))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pr-3","opacity-80"], null)], null),attrs110559], 0))):{'className':"pr-3 opacity-80"}),((cljs.core.map_QMARK_(attrs110559))?null:[daiquiri.interpreter.interpret(attrs110559)]));
})(),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled,(function (){
return cljs.core.List.EMPTY;
}),true))]);
}),null,"frontend.components.plugins/auto-check-for-updates-control");
frontend.components.plugins.panel_control_tabs = rum.core.lazy_build(rum.core.build_defc,(function (search_key,_STAR_search_key,category,_STAR_category,sort_by,_STAR_sort_by,filter_by,_STAR_filter_by,total_nums,selected_unpacked_pkg,market_QMARK_,develop_mode_QMARK_,reload_market_fn,agent_opts){
var _STAR_search_ref = rum.core.create_ref();
return daiquiri.core.create_element("div",{'className':"pb-3 flex justify-between control-tabs relative"},[daiquiri.core.create_element("div",{'className':"flex items-center l"},[frontend.components.plugins.category_tabs(frontend.context.i18n.t,total_nums,category,(function (p1__110560_SHARP_){
return cljs.core.reset_BANG_(_STAR_category,p1__110560_SHARP_);
})),(cljs.core.truth_((function (){var and__5041__auto__ = develop_mode_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(market_QMARK_);
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("div",null,[frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","unpacked-tips","plugin/unpacked-tips",-460131094)], 0))], null),new cljs.core.Keyword(null,"arrow","arrow",1071351425),true], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","load-unpacked","plugin/load-unpacked",507641009)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"upload",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"class","class",-2030961996),"load-unpacked",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.plugin.load_unpacked_plugin], null)], 0))),frontend.components.plugins.unpacked_plugin_loader(selected_unpacked_pkg)]):null)]),(function (){var attrs110563 = (function (){var temp__5804__auto__ = frontend.state.http_proxy_enabled_or_val_QMARK_();
if(cljs.core.truth_(temp__5804__auto__)){
var proxy_val = temp__5804__auto__;
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.text-indigo-500","span.flex.items-center.text-indigo-500",1098756579),frontend.ui.icon("world-download"),proxy_val], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),agent_opts], null));
})], 0));
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110563))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","r"], null)], null),attrs110563], 0))):{'className':"flex items-center r"}),((cljs.core.map_QMARK_(attrs110563))?[frontend.components.plugins.panel_tab_search(search_key,_STAR_search_key,_STAR_search_ref),(function (){var aim_icon = (function (p1__110561_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_by,p1__110561_SHARP_)){
return "check";
} else {
return "circle";
}
});
return frontend.ui.dropdown_with_links((function (p__110566){
var map__110567 = p__110566;
var map__110567__$1 = cljs.core.__destructure_map(map__110567);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110567__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("filter"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),filter_by))?null:"picked "),"sort-or-filter-by"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], 0));
}),(cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"installed","installed",553977691));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"installed","installed",553977691)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","not-installed","plugin/not-installed",177167620)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"not-installed","not-installed",1160178735));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"not-installed","not-installed",1160178735)))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"enabled","enabled",1195909756)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disabled","plugin/disabled",-644208599)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"disabled","disabled",-1529784218)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"unpacked","unpacked",828895838));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"unpacked","unpacked",828895838)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update-available","plugin/update-available",-1277547790)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"update-available","update-available",-283010019));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"update-available","update-available",-283010019)))], null)], null)),null);
})(),(cljs.core.truth_(market_QMARK_)?frontend.ui.dropdown_with_links((function (p__110570){
var map__110571 = p__110570;
var map__110571__$1 = cljs.core.__destructure_map(map__110571);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110571__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("arrows-sort"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"downloads","downloads",-513600190),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),sort_by))?null:"picked "),"sort-or-filter-by"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], 0));
}),(function (){var aim_icon = (function (p1__110562_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_by,p1__110562_SHARP_)){
return "check";
} else {
return "circle";
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","downloads","plugin/downloads",622437555)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"downloads","downloads",-513600190));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"downloads","downloads",-513600190)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","stars","plugin/stars",-1508522616)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"stars","stars",-556837771));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"stars","stars",-556837771)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","title","plugin/title",1789469082),"A - Z"], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"letters","letters",2098125298));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"letters","letters",2098125298)))], null)], null);
})(),cljs.core.PersistentArrayMap.EMPTY):null),frontend.ui.dropdown_with_links((function (p__110574){
var map__110575 = p__110574;
var map__110575__$1 = cljs.core.__destructure_map(map__110575);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110575__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("dots-vertical"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"more-do",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","refresh-lists","plugin/refresh-lists",-968393268)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (reload_market_fn.cljs$core$IFn$_invoke$arity$0 ? reload_market_fn.cljs$core$IFn$_invoke$arity$0() : reload_market_fn.call(null));
})], null)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-all-updates","plugin/check-all-updates",1407600189)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.user_check_enabled_for_updates_BANG_(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugins","plugins",1900073717),category));
})], null)], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("world"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","network-proxy","settings-page/network-proxy",-895413144)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),agent_opts], null));
})], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("arrow-down-circle"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-file","menu-title","plugin.install-from-file/menu-title",1329038520)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.plugin_config.open_replace_plugins_modal], null)], null)], null),(cljs.core.truth_(frontend.state.developer_mode_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("file-code"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-preferences","plugin/open-preferences",-453136863)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.protocols._promise(apis.openPath([cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"/preferences.json"].join('')));
}));
}));
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.whitespace-nowrap.gap-1","span.flex.items-center.whitespace-nowrap.gap-1",-1439858223),frontend.ui.icon("bug"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-logseq-dir","plugin/open-logseq-dir",2030587800)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"~/.logseq"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.protocols._promise(apis.openPath(root));
}));
}));
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hr","hr",1377740067),true,new cljs.core.Keyword(null,"key","key",-1516042587),"dropdown-more"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.components.plugins.auto_check_for_updates_control(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-padding?","no-padding?",1618158522),true], null)], null)], null)], 0)),cljs.core.PersistentArrayMap.EMPTY),frontend.components.plugins.panel_tab_developer()]:[daiquiri.interpreter.interpret(attrs110563),frontend.components.plugins.panel_tab_search(search_key,_STAR_search_key,_STAR_search_ref),(function (){var aim_icon = (function (p1__110561_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_by,p1__110561_SHARP_)){
return "check";
} else {
return "circle";
}
});
return frontend.ui.dropdown_with_links((function (p__110578){
var map__110579 = p__110578;
var map__110579__$1 = cljs.core.__destructure_map(map__110579);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110579__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("filter"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),filter_by))?null:"picked "),"sort-or-filter-by"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], 0));
}),(cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"installed","installed",553977691));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"installed","installed",553977691)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","not-installed","plugin/not-installed",177167620)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"not-installed","not-installed",1160178735));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"not-installed","not-installed",1160178735)))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all","plugin/all",-235519199)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"default","default",-1987822328));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"default","default",-1987822328)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"enabled","enabled",1195909756)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","disabled","plugin/disabled",-644208599)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"disabled","disabled",-1529784218)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","unpacked","plugin/unpacked",-80516789)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"unpacked","unpacked",828895838));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"unpacked","unpacked",828895838)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update-available","plugin/update-available",-1277547790)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_filter_by,new cljs.core.Keyword(null,"update-available","update-available",-283010019));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"update-available","update-available",-283010019)))], null)], null)),null);
})(),(cljs.core.truth_(market_QMARK_)?frontend.ui.dropdown_with_links((function (p__110582){
var map__110583 = p__110582;
var map__110583__$1 = cljs.core.__destructure_map(map__110583);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110583__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("arrows-sort"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"downloads","downloads",-513600190),null,new cljs.core.Keyword(null,"default","default",-1987822328),null], null), null),sort_by))?null:"picked "),"sort-or-filter-by"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], 0));
}),(function (){var aim_icon = (function (p1__110562_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_by,p1__110562_SHARP_)){
return "check";
} else {
return "circle";
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","downloads","plugin/downloads",622437555)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"downloads","downloads",-513600190));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"downloads","downloads",-513600190)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","stars","plugin/stars",-1508522616)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"stars","stars",-556837771));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"stars","stars",-556837771)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","title","plugin/title",1789469082),"A - Z"], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_sort_by,new cljs.core.Keyword(null,"letters","letters",2098125298));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(aim_icon(new cljs.core.Keyword(null,"letters","letters",2098125298)))], null)], null);
})(),cljs.core.PersistentArrayMap.EMPTY):null),frontend.ui.dropdown_with_links((function (p__110586){
var map__110587 = p__110586;
var map__110587__$1 = cljs.core.__destructure_map(map__110587);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110587__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("dots-vertical"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"more-do",new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], 0));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(market_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","refresh-lists","plugin/refresh-lists",-968393268)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (reload_market_fn.cljs$core$IFn$_invoke$arity$0 ? reload_market_fn.cljs$core$IFn$_invoke$arity$0() : reload_market_fn.call(null));
})], null)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("rotate-clockwise"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","check-all-updates","plugin/check-all-updates",1407600189)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.user_check_enabled_for_updates_BANG_(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugins","plugins",1900073717),category));
})], null)], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("world"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","network-proxy","settings-page/network-proxy",-895413144)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),agent_opts], null));
})], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("arrow-down-circle"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-file","menu-title","plugin.install-from-file/menu-title",1329038520)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.plugin_config.open_replace_plugins_modal], null)], null)], null),(cljs.core.truth_(frontend.state.developer_mode_QMARK_())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),frontend.ui.icon("file-code"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-preferences","plugin/open-preferences",-453136863)], 0))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.protocols._promise(apis.openPath([cljs.core.str.cljs$core$IFn$_invoke$arity$1(root),"/preferences.json"].join('')));
}));
}));
})], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.whitespace-nowrap.gap-1","span.flex.items-center.whitespace-nowrap.gap-1",-1439858223),frontend.ui.icon("bug"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","open-logseq-dir","plugin/open-logseq-dir",2030587800)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"~/.logseq"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.get_ls_dotdir_root(),(function (root){
return promesa.protocols._promise(apis.openPath(root));
}));
}));
})], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hr","hr",1377740067),true,new cljs.core.Keyword(null,"key","key",-1516042587),"dropdown-more"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.components.plugins.auto_check_for_updates_control(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-padding?","no-padding?",1618158522),true], null)], null)], null)], 0)),cljs.core.PersistentArrayMap.EMPTY),frontend.components.plugins.panel_tab_developer()]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/panel-control-tabs");
frontend.components.plugins.plugin_items_list_mixins = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (s){
var temp__5804__auto___110790 = rum.core.dom_node(s);
if(cljs.core.truth_(temp__5804__auto___110790)){
var el_110791 = temp__5804__auto___110790;
var temp__5804__auto___110792__$1 = el_110791.querySelector(".cp__plugins-item-lists");
if(cljs.core.truth_(temp__5804__auto___110792__$1)){
var el_list_110793 = temp__5804__auto___110792__$1;
var temp__5804__auto___110794__$2 = el_110791.querySelector(".control-tabs").classList;
if(cljs.core.truth_(temp__5804__auto___110794__$2)){
var cls_110795 = temp__5804__auto___110794__$2;
el_list_110793.addEventListener("scroll",(function (){
if((el_list_110793.scrollTop > (1))){
return cls_110795.add("scrolled");
} else {
return cls_110795.remove("scrolled");
}
}));
} else {
}
} else {
}
} else {
}

return s;
})], null);
frontend.components.plugins.lazy_items_loader = rum.core.lazy_build(rum.core.build_defc,(function (load_more_BANG_){
var inViewState = (function (){var G__110588 = ({"threshold": (0)});
return (frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1 ? frontend.ui.useInView.cljs$core$IFn$_invoke$arity$1(G__110588) : frontend.ui.useInView.call(null,G__110588));
})();
var in_view_QMARK_ = inViewState.inView;
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return (load_more_BANG_.cljs$core$IFn$_invoke$arity$0 ? load_more_BANG_.cljs$core$IFn$_invoke$arity$0() : load_more_BANG_.call(null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in_view_QMARK_], null));

return daiquiri.core.create_element("div",{'ref':inViewState.ref},[daiquiri.core.create_element("p",{'className':"py-1 text-center opacity-0"},[(cljs.core.truth_(inViewState.inView)?"\u00B7":null)])]);
}),null,"frontend.components.plugins/lazy-items-loader");
frontend.components.plugins.marketplace_plugins = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var _STAR_list_node_ref = rum.core.create_ref();
var pkgs = frontend.state.sub(new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798));
var stats = frontend.state.sub(new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730));
var installed_plugins = frontend.state.sub(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034));
var installing = frontend.state.sub(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581));
var online_QMARK_ = frontend.state.sub(new cljs.core.Keyword("network","online?","network/online?",1306822774));
var develop_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878));
var agent_opts = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
var _STAR_search_key = new cljs.core.Keyword("frontend.components.plugins","search-key","frontend.components.plugins/search-key",1754546424).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_category = new cljs.core.Keyword("frontend.components.plugins","category","frontend.components.plugins/category",1292709236).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_sort_by = new cljs.core.Keyword("frontend.components.plugins","sort-by","frontend.components.plugins/sort-by",1336057821).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_filter_by = new cljs.core.Keyword("frontend.components.plugins","filter-by","frontend.components.plugins/filter-by",-1578178539).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_cached_query_flag = new cljs.core.Keyword("frontend.components.plugins","cached-query-flag","frontend.components.plugins/cached-query-flag",-1516213499).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_current_page = new cljs.core.Keyword("frontend.components.plugins","current-page","frontend.components.plugins/current-page",1720536456).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_fetching = new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_error = new cljs.core.Keyword("frontend.components.plugins","error","frontend.components.plugins/error",1422088124).cljs$core$IFn$_invoke$arity$1(state);
var theme_plugins = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__110590_SHARP_){
return new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__110590_SHARP_);
}),pkgs);
var normal_plugins = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__110591_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__110591_SHARP_));
}),pkgs);
var filtered_pkgs = ((cljs.core.seq(pkgs))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_category),new cljs.core.Keyword(null,"themes","themes",-702786642)))?theme_plugins:normal_plugins):null);
var total_nums = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(normal_plugins),cljs.core.count(theme_plugins)], null);
var filtered_pkgs__$1 = ((((cljs.core.seq(filtered_pkgs)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(_STAR_filter_by)))))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__110592_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"installed","installed",553977691),cljs.core.deref(_STAR_filter_by)))?cljs.core.identity:cljs.core.not),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.contains_QMARK_(installed_plugins,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__110592_SHARP_)))], null));
}),filtered_pkgs):filtered_pkgs);
var filtered_pkgs__$2 = (((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_search_key)))))?(function (){var temp__5802__auto__ = (function (){var and__5041__auto__ = clojure.string.starts_with_QMARK_(cljs.core.deref(_STAR_search_key),"@");
if(and__5041__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_search_key),(1));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var author = temp__5802__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__110593_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(author,new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(p1__110593_SHARP_));
}),filtered_pkgs__$1);
} else {
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(filtered_pkgs__$1,cljs.core.deref(_STAR_search_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),(30),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"title","title",636505583)], 0));
}
})():filtered_pkgs__$1);
var filtered_pkgs__$3 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__110594_SHARP_){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__110594_SHARP_)));
if(cljs.core.truth_(temp__5802__auto__)){
var stat = temp__5802__auto__;
var downloads = new cljs.core.Keyword(null,"total_downloads","total_downloads",-1370933259).cljs$core$IFn$_invoke$arity$1(stat);
var stars = new cljs.core.Keyword(null,"stargazers_count","stargazers_count",-984649909).cljs$core$IFn$_invoke$arity$1(stat);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__110594_SHARP_,new cljs.core.Keyword(null,"stat","stat",-1370599836),stat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stars","stars",-556837771),stars,new cljs.core.Keyword(null,"downloads","downloads",-513600190),downloads], 0));
} else {
return p1__110594_SHARP_;
}
}),filtered_pkgs__$2);
var sorted_plugins = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__110599 = cljs.core.deref(_STAR_sort_by);
var G__110599__$1 = (((G__110599 instanceof cljs.core.Keyword))?G__110599.fqn:null);
switch (G__110599__$1) {
case "letters":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__110595_SHARP_){
return frontend.util.safe_lower_case((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__110595_SHARP_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__110595_SHARP_);
}
})());
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(_STAR_sort_by),(function (p1__110597_SHARP_,p2__110596_SHARP_){
return cljs.core.compare(p2__110596_SHARP_,p1__110597_SHARP_);
})], null);

}
})(),filtered_pkgs__$3));
var fn_query_flag = (function (){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__110598_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(p1__110598_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_STAR_filter_by,_STAR_sort_by,_STAR_search_key,_STAR_category], null)));
});
var str_query_flag = fn_query_flag();
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(str_query_flag,cljs.core.deref(_STAR_cached_query_flag)))?(function (){
var temp__5804__auto___110797 = rum.core.deref(_STAR_list_node_ref);
if(cljs.core.truth_(temp__5804__auto___110797)){
var list_cnt_110798 = temp__5804__auto___110797;
(list_cnt_110798.scrollTop = (0));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_page,(1));
})()
:null);
var ___$1 = cljs.core.reset_BANG_(_STAR_cached_query_flag,str_query_flag);
var page_total_items = cljs.core.count(sorted_plugins);
var sorted_plugins__$1 = (((!((page_total_items > frontend.components.plugins.PER_PAGE_SIZE))))?sorted_plugins:cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(_STAR_current_page) * frontend.components.plugins.PER_PAGE_SIZE),sorted_plugins));
var load_more_pages_BANG_ = (function (){
if((page_total_items > frontend.components.plugins.PER_PAGE_SIZE)){
if(((frontend.components.plugins.PER_PAGE_SIZE * cljs.core.deref(_STAR_current_page)) < page_total_items)){
return cljs.core.reset_BANG_(_STAR_current_page,(cljs.core.deref(_STAR_current_page) + (1)));
} else {
return null;
}
} else {
return null;
}
});
return daiquiri.core.create_element("div",{'className':"cp__plugins-marketplace"},[frontend.components.plugins.panel_control_tabs(cljs.core.deref(_STAR_search_key),_STAR_search_key,cljs.core.deref(_STAR_category),_STAR_category,cljs.core.deref(_STAR_sort_by),_STAR_sort_by,cljs.core.deref(_STAR_filter_by),_STAR_filter_by,total_nums,null,true,develop_mode_QMARK_,new cljs.core.Keyword("frontend.components.plugins","reload","frontend.components.plugins/reload",-1021433549).cljs$core$IFn$_invoke$arity$1(state),agent_opts),((cljs.core.not(online_QMARK_))?(function (){var attrs110600 = frontend.components.svg.offline.cljs$core$IFn$_invoke$arity$1((30));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs110600))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","pt-20","opacity-50"], null)], null),attrs110600], 0))):{'className':"flex justify-center pt-20 opacity-50"}),((cljs.core.map_QMARK_(attrs110600))?null:[daiquiri.interpreter.interpret(attrs110600)]));
})():(cljs.core.truth_(cljs.core.deref(_STAR_fetching))?(function (){var attrs110601 = frontend.components.svg.loading;
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs110601))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","py-20"], null)], null),attrs110601], 0))):{'className':"flex justify-center py-20"}),((cljs.core.map_QMARK_(attrs110601))?null:[daiquiri.interpreter.interpret(attrs110601)]));
})():(cljs.core.truth_(cljs.core.deref(_STAR_error))?(function (){var attrs110602 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","remote-error","plugin/remote-error",-1070592042)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs110602))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-center","pt-20","opacity-50"], null)], null),attrs110602], 0))):{'className':"flex justify-center pt-20 opacity-50"}),((cljs.core.map_QMARK_(attrs110602))?[daiquiri.interpreter.interpret(cljs.core.deref(_STAR_error).message)]:[daiquiri.interpreter.interpret(attrs110602),daiquiri.interpreter.interpret(cljs.core.deref(_STAR_error).message)]));
})():daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__plugins-marketplace-cnt",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-installing","has-installing",853601088),cljs.core.boolean$(installing)], null)], null))], null))},[daiquiri.core.create_element("div",{'ref':_STAR_list_node_ref,'className':"cp__plugins-item-lists"},[daiquiri.core.create_element("div",{'className':"cp__plugins-item-lists-inner"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__110603(s__110604){
return (new cljs.core.LazySeq(null,(function (){
var s__110604__$1 = s__110604;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110604__$1);
if(temp__5804__auto__){
var s__110604__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110604__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110604__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110606 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110605 = (0);
while(true){
if((i__110605 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__110605);
cljs.core.chunk_append(b__110606,rum.core.with_key((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
var stat = new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(item);
return frontend.components.plugins.plugin_item_card(frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),true,_STAR_search_key,installing,(function (){var and__5041__auto__ = installing;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(installing)),pid);
} else {
return and__5041__auto__;
}
})(),cljs.core.contains_QMARK_(installed_plugins,pid),stat,null);
})(),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)));

var G__110799 = (i__110605 + (1));
i__110605 = G__110799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110606),frontend$components$plugins$iter__110603(cljs.core.chunk_rest(s__110604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110606),null);
}
} else {
var item = cljs.core.first(s__110604__$2);
return cljs.core.cons(rum.core.with_key((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
var stat = new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(item);
return frontend.components.plugins.plugin_item_card(frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),true,_STAR_search_key,installing,(function (){var and__5041__auto__ = installing;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(installing)),pid);
} else {
return and__5041__auto__;
}
})(),cljs.core.contains_QMARK_(installed_plugins,pid),stat,null);
})(),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),frontend$components$plugins$iter__110603(cljs.core.rest(s__110604__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sorted_plugins__$1);
})())]),((cljs.core.seq(sorted_plugins__$1))?frontend.components.plugins.lazy_items_loader(load_more_pages_BANG_):null)])])
)))]);
}),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,frontend.components.plugins.plugin_items_list_mixins,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025)),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.plugins","search-key","frontend.components.plugins/search-key",1754546424)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword("frontend.components.plugins","category","frontend.components.plugins/category",1292709236)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"downloads","downloads",-513600190),new cljs.core.Keyword("frontend.components.plugins","sort-by","frontend.components.plugins/sort-by",1336057821)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("frontend.components.plugins","filter-by","frontend.components.plugins/filter-by",-1578178539)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.plugins","error","frontend.components.plugins/error",1422088124)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.plugins","cached-query-flag","frontend.components.plugins/cached-query-flag",-1516213499)),rum.core.local.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("frontend.components.plugins","current-page","frontend.components.plugins/current-page",1720536456)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (s){
var reload_fn = (function (force_refresh_QMARK_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025).cljs$core$IFn$_invoke$arity$1(s)))){
return null;
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025).cljs$core$IFn$_invoke$arity$1(s),true);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.plugins","error","frontend.components.plugins/error",1422088124).cljs$core$IFn$_invoke$arity$1(s),null);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.plugin.load_marketplace_plugins(force_refresh_QMARK_),(function (){
return frontend.handler.plugin.load_marketplace_stats(false);
})),(function (p1__110589_SHARP_){
console.error(p1__110589_SHARP_);

return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.plugins","error","frontend.components.plugins/error",1422088124).cljs$core$IFn$_invoke$arity$1(s),p1__110589_SHARP_);
})),(function (){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.plugins","fetching","frontend.components.plugins/fetching",-330343025).cljs$core$IFn$_invoke$arity$1(s),false);
}));
}
});
reload_fn(false);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword("frontend.components.plugins","reload","frontend.components.plugins/reload",-1021433549),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reload_fn,true));
})], null)], null),"frontend.components.plugins/marketplace-plugins");
frontend.components.plugins.installed_plugins = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var _STAR_list_node_ref = rum.core.create_ref();
var installed_plugins = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034)], null));
var installed_plugins__$1 = cljs.core.vals(installed_plugins);
var updating = frontend.state.sub(new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581));
var develop_mode_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878));
var selected_unpacked_pkg = frontend.state.sub(new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185));
var coming_updates = frontend.state.sub(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263));
var agent_opts = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
var _STAR_filter_by = new cljs.core.Keyword("frontend.components.plugins","filter-by","frontend.components.plugins/filter-by",-1578178539).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_sort_by = new cljs.core.Keyword("frontend.components.plugins","sort-by","frontend.components.plugins/sort-by",1336057821).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_search_key = new cljs.core.Keyword("frontend.components.plugins","search-key","frontend.components.plugins/search-key",1754546424).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_category = new cljs.core.Keyword("frontend.components.plugins","category","frontend.components.plugins/category",1292709236).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_cached_query_flag = new cljs.core.Keyword("frontend.components.plugins","cached-query-flag","frontend.components.plugins/cached-query-flag",-1516213499).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_current_page = new cljs.core.Keyword("frontend.components.plugins","current-page","frontend.components.plugins/current-page",1720536456).cljs$core$IFn$_invoke$arity$1(state);
var default_filter_by_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(_STAR_filter_by));
var theme_plugins = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__110607_SHARP_){
return new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__110607_SHARP_);
}),installed_plugins__$1);
var normal_plugins = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__110608_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__110608_SHARP_));
}),installed_plugins__$1);
var filtered_plugins = ((cljs.core.seq(installed_plugins__$1))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_category),new cljs.core.Keyword(null,"themes","themes",-702786642)))?theme_plugins:normal_plugins):null);
var total_nums = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(normal_plugins),cljs.core.count(theme_plugins)], null);
var filtered_plugins__$1 = (((!(default_filter_by_QMARK_)))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (it){
var disabled = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(it,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null));
var G__110614 = cljs.core.deref(_STAR_filter_by);
var G__110614__$1 = (((G__110614 instanceof cljs.core.Keyword))?G__110614.fqn:null);
switch (G__110614__$1) {
case "enabled":
return cljs.core.not(disabled);

break;
case "disabled":
return disabled;

break;
case "unpacked":
return cljs.core.not(new cljs.core.Keyword(null,"iir","iir",-231680811).cljs$core$IFn$_invoke$arity$1(it));

break;
case "update-available":
return frontend.state.plugin_update_available_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it));

break;
default:
return true;

}
}),filtered_plugins):filtered_plugins);
var filtered_plugins__$2 = (((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_search_key)))))?(function (){var temp__5802__auto__ = (function (){var and__5041__auto__ = clojure.string.starts_with_QMARK_(cljs.core.deref(_STAR_search_key),"@");
if(and__5041__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_search_key),(1));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var author = temp__5802__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__110609_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(author,new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(p1__110609_SHARP_));
}),filtered_plugins__$1);
} else {
return frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(filtered_plugins__$1,cljs.core.deref(_STAR_search_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),(30),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"name","name",1843675177)], 0));
}
})():filtered_plugins__$1);
var sorted_plugins = ((default_filter_by_QMARK_)?cljs.core.flatten((function (p1__110612_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__110612_SHARP_,(0),(function (coll){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iir","iir",-231680811),coll);
}));
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__110611_SHARP_,p2__110610_SHARP_){
var disabled_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p2__110610_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null));
var old_dirty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.components.plugins._STAR_dirties_toggle_items),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__110610_SHARP_)));
var k = (cljs.core.truth_(((cljs.core.boolean_QMARK_(old_dirty))?(!(old_dirty)):disabled_QMARK_))?(1):(0));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__110611_SHARP_,k,cljs.core.conj,p2__110610_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),filtered_plugins__$2))):(function (){
frontend.components.plugins.clear_dirties_states_BANG_();

return filtered_plugins__$2;
})()
);
var fn_query_flag = (function (){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__110613_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(p1__110613_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_STAR_filter_by,_STAR_sort_by,_STAR_search_key,_STAR_category], null)));
});
var str_query_flag = fn_query_flag();
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(str_query_flag,cljs.core.deref(_STAR_cached_query_flag)))?(function (){
var temp__5804__auto___110801 = rum.core.deref(_STAR_list_node_ref);
if(cljs.core.truth_(temp__5804__auto___110801)){
var list_cnt_110802 = temp__5804__auto___110801;
(list_cnt_110802.scrollTop = (0));
} else {
}

return cljs.core.reset_BANG_(_STAR_current_page,(1));
})()
:null);
var ___$1 = cljs.core.reset_BANG_(_STAR_cached_query_flag,str_query_flag);
var page_total_items = cljs.core.count(sorted_plugins);
var sorted_plugins__$1 = (((!((page_total_items > frontend.components.plugins.PER_PAGE_SIZE))))?sorted_plugins:cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(_STAR_current_page) * frontend.components.plugins.PER_PAGE_SIZE),sorted_plugins));
var load_more_pages_BANG_ = (function (){
if((page_total_items > frontend.components.plugins.PER_PAGE_SIZE)){
if(((frontend.components.plugins.PER_PAGE_SIZE * cljs.core.deref(_STAR_current_page)) < page_total_items)){
return cljs.core.reset_BANG_(_STAR_current_page,(cljs.core.deref(_STAR_current_page) + (1)));
} else {
return null;
}
} else {
return null;
}
});
return daiquiri.core.create_element("div",{'className':"cp__plugins-installed"},[frontend.components.plugins.panel_control_tabs(cljs.core.deref(_STAR_search_key),_STAR_search_key,cljs.core.deref(_STAR_category),_STAR_category,cljs.core.deref(_STAR_sort_by),_STAR_sort_by,cljs.core.deref(_STAR_filter_by),_STAR_filter_by,total_nums,selected_unpacked_pkg,false,develop_mode_QMARK_,null,agent_opts),daiquiri.core.create_element("div",{'ref':_STAR_list_node_ref,'className':"cp__plugins-item-lists pb-6"},[daiquiri.core.create_element("div",{'className':"cp__plugins-item-lists-inner"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__110615(s__110616){
return (new cljs.core.LazySeq(null,(function (){
var s__110616__$1 = s__110616;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110616__$1);
if(temp__5804__auto__){
var s__110616__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110616__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110616__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110618 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110617 = (0);
while(true){
if((i__110617 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__110617);
cljs.core.chunk_append(b__110618,rum.core.with_key((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
return frontend.components.plugins.plugin_item_card(frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),false,_STAR_search_key,updating,(function (){var and__5041__auto__ = updating;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(updating)),pid);
} else {
return and__5041__auto__;
}
})(),true,null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coming_updates,pid));
})(),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)));

var G__110803 = (i__110617 + (1));
i__110617 = G__110803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110618),frontend$components$plugins$iter__110615(cljs.core.chunk_rest(s__110616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110618),null);
}
} else {
var item = cljs.core.first(s__110616__$2);
return cljs.core.cons(rum.core.with_key((function (){var pid = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
return frontend.components.plugins.plugin_item_card(frontend.context.i18n.t,item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)),false,_STAR_search_key,updating,(function (){var and__5041__auto__ = updating;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(updating)),pid);
} else {
return and__5041__auto__;
}
})(),true,null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coming_updates,pid));
})(),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),frontend$components$plugins$iter__110615(cljs.core.rest(s__110616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(sorted_plugins__$1);
})())]),((cljs.core.seq(sorted_plugins__$1))?frontend.components.plugins.lazy_items_loader(load_more_pages_BANG_):null)])]);
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,frontend.components.plugins.plugin_items_list_mixins,rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.plugins","search-key","frontend.components.plugins/search-key",1754546424)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("frontend.components.plugins","filter-by","frontend.components.plugins/filter-by",-1578178539)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("frontend.components.plugins","sort-by","frontend.components.plugins/sort-by",1336057821)),rum.core.local.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword("frontend.components.plugins","category","frontend.components.plugins/category",1292709236)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.plugins","cached-query-flag","frontend.components.plugins/cached-query-flag",-1516213499)),rum.core.local.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("frontend.components.plugins","current-page","frontend.components.plugins/current-page",1720536456))], null),"frontend.components.plugins/installed-plugins");
frontend.components.plugins.waiting_coming_updates = rum.core.lazy_build(rum.core.build_defcs,(function (_s){
var _ = frontend.state.sub(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263));
var downloading_QMARK_ = frontend.state.sub(new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608));
var unchecked = frontend.state.sub(new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111));
var updates = frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0();
return daiquiri.core.create_element("div",{'className':"cp__plugins-waiting-updates"},[(function (){var attrs110619 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","found-n-updates","plugin/found-n-updates",-1766578685),cljs.core.count(updates)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs110619))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-4","text-2xl","p-1"], null)], null),attrs110619], 0))):{'className':"mb-4 text-2xl p-1"}),((cljs.core.map_QMARK_(attrs110619))?null:[daiquiri.interpreter.interpret(attrs110619)]));
})(),((cljs.core.seq(updates))?daiquiri.core.create_element("ul",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(downloading_QMARK_)?"downloading":null)], null))},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__110621(s__110622){
return (new cljs.core.LazySeq(null,(function (){
var s__110622__$1 = s__110622;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110622__$1);
if(temp__5804__auto__){
var s__110622__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110622__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110622__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110624 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110623 = (0);
while(true){
if((i__110623 < size__5519__auto__)){
var it = cljs.core._nth(c__5518__auto__,i__110623);
var k = ["lsp-it-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))].join('');
var c_QMARK_ = (!(cljs.core.contains_QMARK_(unchecked,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))));
var notes = frontend.util.trim_safe(new cljs.core.Keyword(null,"latest-notes","latest-notes",-368663386).cljs$core$IFn$_invoke$arity$1(it));
cljs.core.chunk_append(b__110624,daiquiri.core.create_element("li",{'key':k,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center",((c_QMARK_)?"checked":null)], null))},[daiquiri.core.create_element("label",{'className':"flex-1",'htmlFor':k},[daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"checked","checked",-50955819),c_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__110623,k,c_QMARK_,notes,it,c__5518__auto__,size__5519__auto__,b__110624,s__110622__$2,temp__5804__auto__,_,downloading_QMARK_,unchecked,updates){
return (function (e){
if(cljs.core.truth_(downloading_QMARK_)){
return null;
} else {
return frontend.state.set_unchecked_update(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it),cljs.core.not(frontend.util.echecked_QMARK_(e)));
}
});})(i__110623,k,c_QMARK_,notes,it,c__5518__auto__,size__5519__auto__,b__110624,s__110622__$2,temp__5804__auto__,_,downloading_QMARK_,unchecked,updates))
], null))),(function (){var attrs110626 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(it);
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110626))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-3"], null)], null),attrs110626], 0))):{'className':"px-3"}),((cljs.core.map_QMARK_(attrs110626))?[daiquiri.core.create_element("sup",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it))].join('')])]:[daiquiri.interpreter.interpret(attrs110626),daiquiri.core.create_element("sup",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it))].join('')])]));
})()]),(function (){var attrs110625 = ((clojure.string.blank_QMARK_(notes))?null:frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),notes], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-30.hover:opacity-80","span.opacity-30.hover:opacity-80",825778773),frontend.ui.icon("info-circle")], null)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110625))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-4"], null)], null),attrs110625], 0))):{'className':"px-4"}),((cljs.core.map_QMARK_(attrs110625))?null:[daiquiri.interpreter.interpret(attrs110625)]));
})()]));

var G__110804 = (i__110623 + (1));
i__110623 = G__110804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110624),frontend$components$plugins$iter__110621(cljs.core.chunk_rest(s__110622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110624),null);
}
} else {
var it = cljs.core.first(s__110622__$2);
var k = ["lsp-it-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))].join('');
var c_QMARK_ = (!(cljs.core.contains_QMARK_(unchecked,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))));
var notes = frontend.util.trim_safe(new cljs.core.Keyword(null,"latest-notes","latest-notes",-368663386).cljs$core$IFn$_invoke$arity$1(it));
return cljs.core.cons(daiquiri.core.create_element("li",{'key':k,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center",((c_QMARK_)?"checked":null)], null))},[daiquiri.core.create_element("label",{'className':"flex-1",'htmlFor':k},[daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"checked","checked",-50955819),c_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (k,c_QMARK_,notes,it,s__110622__$2,temp__5804__auto__,_,downloading_QMARK_,unchecked,updates){
return (function (e){
if(cljs.core.truth_(downloading_QMARK_)){
return null;
} else {
return frontend.state.set_unchecked_update(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it),cljs.core.not(frontend.util.echecked_QMARK_(e)));
}
});})(k,c_QMARK_,notes,it,s__110622__$2,temp__5804__auto__,_,downloading_QMARK_,unchecked,updates))
], null))),(function (){var attrs110626 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(it);
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110626))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-3"], null)], null),attrs110626], 0))):{'className':"px-3"}),((cljs.core.map_QMARK_(attrs110626))?[daiquiri.core.create_element("sup",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it))].join('')])]:[daiquiri.interpreter.interpret(attrs110626),daiquiri.core.create_element("sup",null,[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))," \uD83D\uDC49 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(it))].join('')])]));
})()]),(function (){var attrs110625 = ((clojure.string.blank_QMARK_(notes))?null:frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),notes], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-30.hover:opacity-80","span.opacity-30.hover:opacity-80",825778773),frontend.ui.icon("info-circle")], null)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110625))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-4"], null)], null),attrs110625], 0))):{'className':"px-4"}),((cljs.core.map_QMARK_(attrs110625))?null:[daiquiri.interpreter.interpret(attrs110625)]));
})()]),frontend$components$plugins$iter__110621(cljs.core.rest(s__110622__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(updates);
})())]):daiquiri.core.create_element("div",{'className':"py-4"},[daiquiri.core.create_element("strong",{'className':"text-4xl"},[["\uD83C\uDF89 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","all-updated","plugin/all-updated",5666680)], 0)))].join('')])])),((cljs.core.seq(updates))?(function (){var attrs110620 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(downloading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-downloading","plugin/updates-downloading",1242309586)], 0)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("download"),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","update-all-selected","plugin/update-all-selected",-306619318)], 0))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(downloading_QMARK_)){
return null;
} else {
frontend.handler.plugin.open_updates_downloading();

var temp__5802__auto__ = frontend.state.get_next_selected_coming_update();
if(cljs.core.truth_(temp__5802__auto__)){
var n = temp__5802__auto__;
return frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),false),(function (e){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));
}));
} else {
return frontend.handler.plugin.close_updates_downloading();
}
}
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5043__auto__ = downloading_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((cljs.core.seq(unchecked)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(unchecked),cljs.core.count(updates))));
}
})()], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110620))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-5","flex","justify-end"], null)], null),attrs110620], 0))):{'className':"pt-5 flex justify-end"}),((cljs.core.map_QMARK_(attrs110620))?null:[daiquiri.interpreter.interpret(attrs110620)]));
})():null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (s){
frontend.state.reset_unchecked_update();

return s;
})], null)], null),"frontend.components.plugins/waiting-coming-updates");
frontend.components.plugins.plugins_from_file = rum.core.lazy_build(rum.core.build_defc,(function (plugins){
return daiquiri.core.create_element("div",{'className':"cp__plugins-fom-file"},[(function (){var attrs110627 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-file","title","plugin.install-from-file/title",1282492345)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs110627))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-4","text-2xl","p-1"], null)], null),attrs110627], 0))):{'className':"mb-4 text-2xl p-1"}),((cljs.core.map_QMARK_(attrs110627))?null:[daiquiri.interpreter.interpret(attrs110627)]));
})(),((cljs.core.seq(plugins))?daiquiri.core.create_element("div",null,[(function (){var attrs110628 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-file","notice","plugin.install-from-file/notice",-1800784446)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110628))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-2","text-xl"], null)], null),attrs110628], 0))):{'className':"mb-2 text-xl"}),((cljs.core.map_QMARK_(attrs110628))?null:[daiquiri.interpreter.interpret(attrs110628)]));
})(),daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__110630(s__110631){
return (new cljs.core.LazySeq(null,(function (){
var s__110631__$1 = s__110631;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110631__$1);
if(temp__5804__auto__){
var s__110631__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110631__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110631__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110633 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110632 = (0);
while(true){
if((i__110632 < size__5519__auto__)){
var it = cljs.core._nth(c__5518__auto__,i__110632);
var k = ["lsp-it-",cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))].join('');
cljs.core.chunk_append(b__110633,daiquiri.core.create_element("li",{'key':k,'className':"flex items-center"},[daiquiri.core.create_element("label",{'className':"flex-1",'htmlFor':k},[daiquiri.core.create_element("strong",{'className':"px-3"},[[cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))].join('')])])]));

var G__110805 = (i__110632 + (1));
i__110632 = G__110805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110633),frontend$components$plugins$iter__110630(cljs.core.chunk_rest(s__110631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110633),null);
}
} else {
var it = cljs.core.first(s__110631__$2);
var k = ["lsp-it-",cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))].join('');
return cljs.core.cons(daiquiri.core.create_element("li",{'key':k,'className':"flex items-center"},[daiquiri.core.create_element("label",{'className':"flex-1",'htmlFor':k},[daiquiri.core.create_element("strong",{'className':"px-3"},[[cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(it))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(it))].join('')])])]),frontend$components$plugins$iter__110630(cljs.core.rest(s__110631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"install","install",-655751038).cljs$core$IFn$_invoke$arity$1(plugins));
})())]),(function (){var attrs110629 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","install","plugin/install",-432957003)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.handler.plugin_config.replace_plugins(plugins);

return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1("ls-plugins-from-file-modal");
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110629))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-5"], null)], null),attrs110629], 0))):{'className':"pt-5"}),((cljs.core.map_QMARK_(attrs110629))?null:[daiquiri.interpreter.interpret(attrs110629)]));
})()]):daiquiri.core.create_element("div",{'className':"py-4"},[daiquiri.core.create_element("strong",{'className':"text-xl"},[["\uD83C\uDF89 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin.install-from-file","success","plugin.install-from-file/success",1513078116)], 0)))].join('')])]))]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.plugins/plugins-from-file");
frontend.components.plugins.open_select_theme_BANG_ = (function frontend$components$plugins$open_select_theme_BANG_(){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.plugins.installed_themes);
});
frontend.components.plugins.hook_ui_slot = rum.core.lazy_build(rum.core.build_defc,(function() {
var G__110806 = null;
var G__110806__2 = (function (type,payload){
return daiquiri.interpreter.interpret((function (){var G__110640 = type;
var G__110641 = payload;
var G__110642 = null;
var G__110643 = (function (p1__110634_SHARP_){
return frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$3(type,p1__110634_SHARP_,null);
});
return (frontend.components.plugins.hook_ui_slot.cljs$core$IFn$_invoke$arity$4 ? frontend.components.plugins.hook_ui_slot.cljs$core$IFn$_invoke$arity$4(G__110640,G__110641,G__110642,G__110643) : frontend.components.plugins.hook_ui_slot.call(null,G__110640,G__110641,G__110642,G__110643));
})());
});
var G__110806__4 = (function (type,payload,opts,callback){
var rs = frontend.util.rand_str((8));
var id = ["slot__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rs)].join('');
var _STAR_el_ref = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var timer = setTimeout((function (){
var G__110644 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"slot","slot",240229571),id,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__110644) : callback.call(null,G__110644));
}),(50));
return (function (){
return clearTimeout(timer);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el = rum.core.deref(_STAR_el_ref);
return (function (){
var temp__5804__auto__ = cljs.core.seq(el.querySelectorAll("[data-injected-ui]"));
if(temp__5804__auto__){
var uis = temp__5804__auto__;
var seq__110645 = cljs.core.seq(uis);
var chunk__110646 = null;
var count__110647 = (0);
var i__110648 = (0);
while(true){
if((i__110648 < count__110647)){
var el__$1 = chunk__110646.cljs$core$IIndexed$_nth$arity$2(null,i__110648);
var temp__5804__auto___110807__$1 = el__$1.dataset.injectedUi;
if(cljs.core.truth_(temp__5804__auto___110807__$1)){
var id_110808__$1 = temp__5804__auto___110807__$1;
LSPluginCore._forceCleanInjectedUI(id_110808__$1);
} else {
}


var G__110809 = seq__110645;
var G__110810 = chunk__110646;
var G__110811 = count__110647;
var G__110812 = (i__110648 + (1));
seq__110645 = G__110809;
chunk__110646 = G__110810;
count__110647 = G__110811;
i__110648 = G__110812;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__110645);
if(temp__5804__auto____$1){
var seq__110645__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__110645__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__110645__$1);
var G__110813 = cljs.core.chunk_rest(seq__110645__$1);
var G__110814 = c__5565__auto__;
var G__110815 = cljs.core.count(c__5565__auto__);
var G__110816 = (0);
seq__110645 = G__110813;
chunk__110646 = G__110814;
count__110647 = G__110815;
i__110648 = G__110816;
continue;
} else {
var el__$1 = cljs.core.first(seq__110645__$1);
var temp__5804__auto___110817__$2 = el__$1.dataset.injectedUi;
if(cljs.core.truth_(temp__5804__auto___110817__$2)){
var id_110818__$1 = temp__5804__auto___110817__$2;
LSPluginCore._forceCleanInjectedUI(id_110818__$1);
} else {
}


var G__110819 = cljs.core.next(seq__110645__$1);
var G__110820 = null;
var G__110821 = (0);
var G__110822 = (0);
seq__110645 = G__110819;
chunk__110646 = G__110820;
count__110647 = G__110821;
i__110648 = G__110822;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
}),cljs.core.PersistentVector.EMPTY);

var attrs110635 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_ref,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (e){
return frontend.util.stop_propagation(e);
})], null)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110635))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lsp-hook-ui-slot"], null)], null),attrs110635], 0))):{'className':"lsp-hook-ui-slot"}),((cljs.core.map_QMARK_(attrs110635))?null:[daiquiri.interpreter.interpret(attrs110635)]));
});
G__110806 = function(type,payload,opts,callback){
switch(arguments.length){
case 2:
return G__110806__2.call(this,type,payload);
case 4:
return G__110806__4.call(this,type,payload,opts,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__110806.cljs$core$IFn$_invoke$arity$2 = G__110806__2;
G__110806.cljs$core$IFn$_invoke$arity$4 = G__110806__4;
return G__110806;
})()
,null,"frontend.components.plugins/hook-ui-slot");
frontend.components.plugins.hook_block_slot = rum.core.lazy_build(rum.core.build_defc,(function (type,block){
return frontend.components.plugins.hook_ui_slot(type,cljs.core.PersistentArrayMap.EMPTY,null,(function (p1__110649_SHARP_){
return frontend.handler.plugin.hook_plugin_block_slot(block,p1__110649_SHARP_);
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.plugins/hook-block-slot");
frontend.components.plugins.ui_item_renderer = rum.core.lazy_build(rum.core.build_defc,(function (pid,type,p__110653){
var map__110654 = p__110653;
var map__110654__$1 = cljs.core.__destructure_map(map__110654);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110654__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var template = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110654__$1,new cljs.core.Keyword(null,"template","template",-702405684));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110654__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var _STAR_el = rum.core.use_ref(null);
var uni = (function (p1__110650_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"injected-ui-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__110650_SHARP_)].join('');
});
var pl = LSPluginCore.registeredPlugins.get(cljs.core.name(pid));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = rum.core.deref(_STAR_el);
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return LSPlugin.pluginHelpers.setupInjectedUI.call(pl,({"slot": el.id, "key": key, "template": template}),({}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [template], null));

if((!((pl == null)))){
return daiquiri.core.create_element("div",{'id':uni([cljs.core.name(key),"-",cljs.core.name(pid)].join('')),'title':key,'ref':_STAR_el,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uni(cljs.core.name(type))], null))},[]);
} else {
return daiquiri.core.create_element(daiquiri.core.fragment,null,null);
}
}),null,"frontend.components.plugins/ui-item-renderer");
frontend.components.plugins.toolbar_plugins_manager_list = rum.core.lazy_build(rum.core.build_defc,(function (updates_coming,items){
var badge_updates_QMARK_ = ((cljs.core.not(frontend.handler.plugin.get_auto_checking_QMARK_())) && (cljs.core.seq(frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$1(updates_coming))));
return frontend.ui.dropdown_with_links((function (p__110671){
var map__110672 = p__110671;
var map__110672__$1 = cljs.core.__destructure_map(map__110672);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110672__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar-plugins-manager","div.toolbar-plugins-manager",210163041),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.relative","a.button.relative",-1539006574),frontend.ui.icon("puzzle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)),((badge_updates_QMARK_)?frontend.ui.point("bg-red-600.top-1.right-1.absolute",(4),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(2),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(2)], null)], null)):null)], null)], null);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__110673(s__110674){
return (new cljs.core.LazySeq(null,(function (){
var s__110674__$1 = s__110674;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110674__$1);
if(temp__5804__auto__){
var s__110674__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110674__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110674__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110676 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110675 = (0);
while(true){
if((i__110675 < size__5519__auto__)){
var vec__110677 = cljs.core._nth(c__5518__auto__,i__110675);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110677,(0),null);
var map__110680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110677,(1),null);
var map__110680__$1 = cljs.core.__destructure_map(map__110680);
var opts = map__110680__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110680__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pinned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110680__$1,new cljs.core.Keyword(null,"pinned?","pinned?",440024168));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110677,(2),null);
var pkey = [cljs.core.name(pid),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
cljs.core.chunk_append(b__110676,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),key,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.item-wrap","div.flex.items-center.item-wrap",-1430672609),frontend.components.plugins.ui_item_renderer(pid,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"pl-",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),["pl-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], 0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"2px"], null)], null),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pin.flex.items-center.opacity-60","span.pin.flex.items-center.opacity-60",1509350049),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pinned","pinned",-1216085339),pinned_QMARK_], null)], null))], null),frontend.ui.icon((cljs.core.truth_(pinned_QMARK_)?"pinned":"pin"))], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__110675,pkey,vec__110677,_,map__110680,map__110680__$1,opts,key,pinned_QMARK_,pid,c__5518__auto__,size__5519__auto__,b__110676,s__110674__$2,temp__5804__auto__,badge_updates_QMARK_){
return (function (e){
var target_110823 = e.target;
var user_btn_QMARK__110824 = cljs.core.boolean$(target_110823.closest("div[data-injected-ui]"));
if(user_btn_QMARK__110824){
} else {
frontend.handler.plugin.op_pinned_toolbar_item_BANG_(pkey,(cljs.core.truth_(pinned_QMARK_)?new cljs.core.Keyword(null,"remove","remove",-131428414):new cljs.core.Keyword(null,"add","add",235287739)));
}

return false;
});})(i__110675,pkey,vec__110677,_,map__110680,map__110680__$1,opts,key,pinned_QMARK_,pid,c__5518__auto__,size__5519__auto__,b__110676,s__110674__$2,temp__5804__auto__,badge_updates_QMARK_))
], null)], null));

var G__110825 = (i__110675 + (1));
i__110675 = G__110825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110676),frontend$components$plugins$iter__110673(cljs.core.chunk_rest(s__110674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110676),null);
}
} else {
var vec__110681 = cljs.core.first(s__110674__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110681,(0),null);
var map__110684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110681,(1),null);
var map__110684__$1 = cljs.core.__destructure_map(map__110684);
var opts = map__110684__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110684__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pinned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110684__$1,new cljs.core.Keyword(null,"pinned?","pinned?",440024168));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110681,(2),null);
var pkey = [cljs.core.name(pid),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),key,new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.item-wrap","div.flex.items-center.item-wrap",-1430672609),frontend.components.plugins.ui_item_renderer(pid,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"pl-",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),["pl-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], 0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"2px"], null)], null),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pin.flex.items-center.opacity-60","span.pin.flex.items-center.opacity-60",1509350049),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pinned","pinned",-1216085339),pinned_QMARK_], null)], null))], null),frontend.ui.icon((cljs.core.truth_(pinned_QMARK_)?"pinned":"pin"))], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pkey,vec__110681,_,map__110684,map__110684__$1,opts,key,pinned_QMARK_,pid,s__110674__$2,temp__5804__auto__,badge_updates_QMARK_){
return (function (e){
var target_110826 = e.target;
var user_btn_QMARK__110827 = cljs.core.boolean$(target_110826.closest("div[data-injected-ui]"));
if(user_btn_QMARK__110827){
} else {
frontend.handler.plugin.op_pinned_toolbar_item_BANG_(pkey,(cljs.core.truth_(pinned_QMARK_)?new cljs.core.Keyword(null,"remove","remove",-131428414):new cljs.core.Keyword(null,"add","add",235287739)));
}

return false;
});})(pkey,vec__110681,_,map__110684,map__110684__$1,opts,key,pinned_QMARK_,pid,s__110674__$2,temp__5804__auto__,badge_updates_QMARK_))
], null)], null),frontend$components$plugins$iter__110673(cljs.core.rest(s__110674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(items);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"plugins","plugins",1900073717)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.goto_plugins_dashboard_BANG_();
}),new cljs.core.Keyword(null,"class","class",-2030961996),"extra-item mt-2"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("apps")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings","settings",1556144875)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.plugin.goto_plugins_settings_BANG_();
}),new cljs.core.Keyword(null,"class","class",-2030961996),"extra-item"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("adjustments")], null),((badge_updates_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.space-x-5.leading-none","div.flex.items-center.space-x-5.leading-none",1217724633),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","found-updates","plugin/found-updates",1914242130)], 0))], null),frontend.ui.point("bg-red-700",(5),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(2)], null)], null))], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (frontend.components.plugins.open_waiting_updates_modal_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.components.plugins.open_waiting_updates_modal_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.components.plugins.open_waiting_updates_modal_BANG_.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"extra-item"], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("download")], null):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hr","hr",1377740067),true,new cljs.core.Keyword(null,"key","key",-1516042587),"dropdown-more"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.components.plugins.auto_check_for_updates_control(),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-padding?","no-padding?",1618158522),true], null)], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-class","trigger-class",1251717016),"toolbar-plugins-manager-trigger"], null));
}),null,"frontend.components.plugins/toolbar-plugins-manager-list");
frontend.components.plugins.header_ui_items_list_wrap = rum.core.lazy_build(rum.core.build_defc,(function (children){
var _STAR_wrap_el = rum.core.use_ref(null);
var vec__110689 = frontend.rum.use_atom(frontend.handler.ui._STAR_right_sidebar_resized_at);
var right_sidebar_resized = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110689,(0),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = rum.core.deref(_STAR_wrap_el);
if(cljs.core.truth_(temp__5804__auto__)){
var wrap_el = temp__5804__auto__;
var temp__5804__auto____$1 = wrap_el.closest(".cp__header");
if(cljs.core.truth_(temp__5804__auto____$1)){
var header_el = temp__5804__auto____$1;
var header_l = header_el.querySelector("* > .l");
var header_r = header_el.querySelector("* > .r");
var set_max_width_BANG_ = (function (p1__110688_SHARP_){
if(typeof p1__110688_SHARP_ === 'number'){
return (wrap_el.style.maxWidth = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__110688_SHARP_),"px"].join(''));
} else {
return null;
}
});
var calc_wrap_max_width = (function (){
var width_l = header_l.offsetWidth;
var width_t = document.querySelector("#main-content-container").offsetWidth;
var children__$1 = cljs.core.to_array(header_r.children);
var width_c_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,e){
if(cljs.core.truth_((function (){var G__110692 = e;
var G__110692__$1 = (((G__110692 == null))?null:G__110692.classList);
var G__110692__$2 = (((G__110692__$1 == null))?null:G__110692__$1.contains("ui-items-container"));
if((G__110692__$2 == null)){
return null;
} else {
return cljs.core.not(G__110692__$2);
}
})())){
return (acc + (function (){var or__5043__auto__ = e.offsetWidth;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})());
} else {
return null;
}
}),(0),children__$1);
var temp__5804__auto____$2 = (function (){var and__5041__auto__ = typeof width_t === 'number';
if(and__5041__auto__){
if(cljs.core.not(frontend.state.get_left_sidebar_open_QMARK_())){
return (width_t - width_l);
} else {
return width_t;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$2)){
var width_t__$1 = temp__5804__auto____$2;
return set_max_width_BANG_((function (){var x__5128__auto__ = ((width_t__$1 - width_c_SINGLEQUOTE_) - (100));
var y__5129__auto__ = (76);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})());
} else {
return null;
}
});
window.addEventListener("resize",calc_wrap_max_width);

setTimeout(calc_wrap_max_width,(16));

return (function (){
return window.removeEventListener("resize",calc_wrap_max_width);
});
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_sidebar_resized], null));

return daiquiri.core.create_element("div",{'ref':_STAR_wrap_el,'className':"list-wrap"},[daiquiri.interpreter.interpret(children)]);
}),null,"frontend.components.plugins/header-ui-items-list-wrap");
/**
 * type of :toolbar, :pagebar
 */
frontend.components.plugins.hook_ui_items = rum.core.lazy_build(rum.core.build_defcs,(function (_state,type){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868)], null)))){
var toolbar_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),type);
var pinned_items = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","preferences","plugin/preferences",668527388),new cljs.core.Keyword(null,"pinnedToolbarItems","pinnedToolbarItems",889309943)], null));
var pinned_items__$1 = (function (){var and__5041__auto__ = cljs.core.sequential_QMARK_(pinned_items);
if(and__5041__auto__){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,pinned_items);
} else {
return and__5041__auto__;
}
})();
var items = frontend.state.get_plugins_ui_items_with_type(type);
var items__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__110693_SHARP_){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__110693_SHARP_));
}),items);
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.seq(items__$1);
if(and__5041__auto__){
if(toolbar_QMARK_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__110694_SHARP_){
return cljs.core.assoc_in(p1__110694_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"pinned?","pinned?",440024168)], null),(function (){var vec__110712 = p1__110694_SHARP_;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110712,(0),null);
var map__110715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110712,(1),null);
var map__110715__$1 = cljs.core.__destructure_map(map__110715);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110715__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110712,(2),null);
var pkey = [cljs.core.name(pid),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
return cljs.core.contains_QMARK_(pinned_items__$1,pkey);
})());
}),items__$1);
} else {
return items__$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var items__$2 = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-items-container","div.ui-items-container",1212408615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-type","data-type",-326421468),cljs.core.name(type)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.plugins.header_ui_items_list_wrap((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__110716(s__110717){
return (new cljs.core.LazySeq(null,(function (){
var s__110717__$1 = s__110717;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__110717__$1);
if(temp__5804__auto____$1){
var s__110717__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__110717__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110717__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110719 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110718 = (0);
while(true){
if((i__110718 < size__5519__auto__)){
var vec__110720 = cljs.core._nth(c__5518__auto__,i__110718);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110720,(0),null);
var map__110723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110720,(1),null);
var map__110723__$1 = cljs.core.__destructure_map(map__110723);
var opts = map__110723__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110723__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pinned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110723__$1,new cljs.core.Keyword(null,"pinned?","pinned?",440024168));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110720,(2),null);
cljs.core.chunk_append(b__110719,(cljs.core.truth_((function (){var or__5043__auto__ = (!(toolbar_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (!(cljs.core.set_QMARK_(pinned_items__$1)));
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
return pinned_QMARK_;
}
}
})())?rum.core.with_key(frontend.components.plugins.ui_item_renderer(pid,type,opts),key):null));

var G__110828 = (i__110718 + (1));
i__110718 = G__110828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110719),frontend$components$plugins$iter__110716(cljs.core.chunk_rest(s__110717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110719),null);
}
} else {
var vec__110724 = cljs.core.first(s__110717__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110724,(0),null);
var map__110727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110724,(1),null);
var map__110727__$1 = cljs.core.__destructure_map(map__110727);
var opts = map__110727__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110727__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pinned_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110727__$1,new cljs.core.Keyword(null,"pinned?","pinned?",440024168));
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110724,(2),null);
return cljs.core.cons((cljs.core.truth_((function (){var or__5043__auto__ = (!(toolbar_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (!(cljs.core.set_QMARK_(pinned_items__$1)));
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
return pinned_QMARK_;
}
}
})())?rum.core.with_key(frontend.components.plugins.ui_item_renderer(pid,type,opts),key):null),frontend$components$plugins$iter__110716(cljs.core.rest(s__110717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(items__$2);
})()),((toolbar_QMARK_)?(function (){var updates_coming = frontend.state.sub(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263));
return frontend.components.plugins.toolbar_plugins_manager_list(updates_coming,items__$2);
})():null)], null)], null);
} else {
return null;
}
})());
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (){
return cljs.core.identity("plugin-hook-items");
})], null)], null),"frontend.components.plugins/hook-ui-items");
frontend.components.plugins.hook_ui_fenced_code = rum.core.lazy_build(rum.core.build_defc,(function (block,content,p__110730){
var map__110731 = p__110730;
var map__110731__$1 = cljs.core.__destructure_map(map__110731);
var _opts = map__110731__$1;
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110731__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110731__$1,new cljs.core.Keyword(null,"edit","edit",-1641834166));
var vec__110732 = rum.core.use_state(content);
var content1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110732,(0),null);
var set_content1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110732,(1),null);
var vec__110735 = rum.core.use_state(clojure.string.blank_QMARK_(content));
var editor_active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110735,(0),null);
var set_editor_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110735,(1),null);
var _STAR_cm = rum.core.use_ref(null);
var _STAR_el = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return (set_content1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_content1_BANG_.cljs$core$IFn$_invoke$arity$1(content) : set_content1_BANG_.call(null,content));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var G__110738_110829 = rum.core.deref(_STAR_el);
var G__110738_110830__$1 = (((G__110738_110829 == null))?null:G__110738_110829.closest(".ui-fenced-code-wrap"));
var G__110738_110831__$2 = (((G__110738_110830__$1 == null))?null:G__110738_110830__$1.classList);
if((G__110738_110831__$2 == null)){
} else {
(function (p1__110728_SHARP_){
if(cljs.core.truth_(editor_active_QMARK_)){
return p1__110728_SHARP_.add("is-active");
} else {
return p1__110728_SHARP_.remove("is-active");
}
})(G__110738_110831__$2);
}

var temp__5804__auto__ = rum.core.deref(_STAR_cm);
if(cljs.core.truth_(temp__5804__auto__)){
var cm = temp__5804__auto__;
cm.refresh();

cm.focus();

return cm.setCursor(cm.lineCount(),cljs.core.count(cm.getLine(cm.lastLine())));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [editor_active_QMARK_], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var t = setTimeout((function (){
var temp__5804__auto__ = (function (){var G__110739 = rum.core.deref(_STAR_el);
var G__110739__$1 = (((G__110739 == null))?null:G__110739.closest(".ui-fenced-code-wrap"));
var G__110739__$2 = (((G__110739__$1 == null))?null:G__110739__$1.querySelector(".CodeMirror"));
if((G__110739__$2 == null)){
return null;
} else {
return G__110739__$2.CodeMirror;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var cm = temp__5804__auto__;
rum.core.set_ref_BANG_(_STAR_cm,cm);

var G__110740 = cm;
G__110740.on("change",(function (){
var G__110741 = cm;
var G__110741__$1 = (((G__110741 == null))?null:G__110741.getDoc());
var G__110741__$2 = (((G__110741__$1 == null))?null:G__110741__$1.getValue());
if((G__110741__$2 == null)){
return null;
} else {
return (set_content1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_content1_BANG_.cljs$core$IFn$_invoke$arity$1(G__110741__$2) : set_content1_BANG_.call(null,G__110741__$2));
}
}));

return G__110740;
} else {
return null;
}
}),(1000));
return (function (){
return clearTimeout(t);
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'onMouseDown':(function (e){
if(edit === false){
return frontend.util.stop(e);
} else {
return null;
}
}),'ref':_STAR_el,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-fenced-code-result",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"not-edit","not-edit",-1875881710),edit === false], null)], null))], null))},[daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("span",{'onMouseDown':(function (p1__110729_SHARP_){
return frontend.util.stop(p1__110729_SHARP_);
}),'className':"actions"},[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("square-toggle-horizontal",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__110743 = cljs.core.not(editor_active_QMARK_);
return (set_editor_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editor_active_BANG_.cljs$core$IFn$_invoke$arity$1(G__110743) : set_editor_active_BANG_.call(null,G__110743));
})], 0))),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.ui.icon("source-code",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__110747 = block;
var G__110748 = cljs.core.count(content1);
var G__110749 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__110747,G__110748,G__110749) : frontend.handler.editor.edit_block_BANG_.call(null,G__110747,G__110748,G__110749));
})], 0)))]),((cljs.core.fn_QMARK_(render))?React.createElement(render,({"content": content1})):null)])]);
}),null,"frontend.components.plugins/hook-ui-fenced-code");
frontend.components.plugins.plugins_page = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__110750 = rum.core.use_state(new cljs.core.Keyword(null,"installed","installed",553977691));
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110750,(0),null);
var set_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110750,(1),null);
var market_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,new cljs.core.Keyword(null,"marketplace","marketplace",236355452));
var _STAR_el_ref = rum.core.create_ref();
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

return (function (){
return frontend.components.plugins.clear_dirties_states_BANG_();
});
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.components.plugins.clear_dirties_states_BANG_();
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [market_QMARK_], null));

return daiquiri.core.create_element("div",{'ref':_STAR_el_ref,'tabIndex':"-1",'className':"cp__plugins-page"},[(function (){var attrs110753 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"plugins","plugins",1900073717)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs110753))?daiquiri.interpreter.element_attributes(attrs110753):null),((cljs.core.map_QMARK_(attrs110753))?null:[daiquiri.interpreter.interpret(attrs110753)]));
})(),daiquiri.interpreter.interpret(frontend.components.plugins.security_warning()),daiquiri.core.create_element("hr",{'className':"my-4"},null),daiquiri.core.create_element("div",{'className':"tabs flex items-center justify-center"},[(function (){var attrs110757 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.it","span.it",1011288927),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","installed","plugin/installed",-431253936)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"installed","installed",553977691)) : set_active_BANG_.call(null,new cljs.core.Keyword(null,"installed","installed",553977691)));
}),new cljs.core.Keyword(null,"intent","intent",-390846953),(((!(market_QMARK_)))?"":"link")], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110757))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabs-inner","flex","items-center"], null)], null),attrs110757], 0))):{'className':"tabs-inner flex items-center"}),((cljs.core.map_QMARK_(attrs110757))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mk","span.mk",-317106419),frontend.components.svg.apps.cljs$core$IFn$_invoke$arity$1((16)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","marketplace","plugin/marketplace",-1095225687)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"marketplace","marketplace",236355452)) : set_active_BANG_.call(null,new cljs.core.Keyword(null,"marketplace","marketplace",236355452)));
}),new cljs.core.Keyword(null,"intent","intent",-390846953),((market_QMARK_)?"":"link")], 0)))]:[daiquiri.interpreter.interpret(attrs110757),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mk","span.mk",-317106419),frontend.components.svg.apps.cljs$core$IFn$_invoke$arity$1((16)),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","marketplace","plugin/marketplace",-1095225687)], 0))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"marketplace","marketplace",236355452)) : set_active_BANG_.call(null,new cljs.core.Keyword(null,"marketplace","marketplace",236355452)));
}),new cljs.core.Keyword(null,"intent","intent",-390846953),((market_QMARK_)?"":"link")], 0)))]));
})()]),(function (){var attrs110756 = ((market_QMARK_)?frontend.components.plugins.marketplace_plugins():frontend.components.plugins.installed_plugins());
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs110756))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panels"], null)], null),attrs110756], 0))):{'className':"panels"}),((cljs.core.map_QMARK_(attrs110756))?null:[daiquiri.interpreter.interpret(attrs110756)]));
})()]);
}),null,"frontend.components.plugins/plugins-page");
frontend.components.plugins._STAR_updates_sub_content_timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.plugins._STAR_updates_sub_content = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.plugins.set_updates_sub_content_BANG_ = (function frontend$components$plugins$set_updates_sub_content_BANG_(content,duration){
cljs.core.reset_BANG_(frontend.components.plugins._STAR_updates_sub_content,content);

if((duration > (0))){
var G__110758_110832 = cljs.core.deref(frontend.components.plugins._STAR_updates_sub_content_timer);
if((G__110758_110832 == null)){
} else {
clearTimeout(G__110758_110832);
}

return cljs.core.reset_BANG_(frontend.components.plugins._STAR_updates_sub_content_timer,setTimeout((function (){
return cljs.core.reset_BANG_(frontend.components.plugins._STAR_updates_sub_content,null);
}),duration));
} else {
return null;
}
});
frontend.components.plugins.updates_notifications_impl = rum.core.lazy_build(rum.core.build_defc,(function (check_pending_QMARK_,auto_checking_QMARK_,online_QMARK_){
var vec__110761 = rum.core.use_state(null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110761,(0),null);
var set_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110761,(1),null);
var vec__110764 = frontend.rum.use_atom(frontend.components.plugins._STAR_updates_sub_content);
var sub_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110764,(0),null);
var _set_sub_content_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110764,(1),null);
var notify_BANG_ = (function (content,status){
if(cljs.core.truth_(auto_checking_QMARK_)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","list-of-updates","plugin/list-of-updates",1463733048)], 0)),content], 0));
} else {
var cb = (function (){
return frontend.handler.plugin.cancel_user_checking_BANG_();
});
try{var G__110769 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content,status,false,uid,null,cb);
return (set_uid.cljs$core$IFn$_invoke$arity$1 ? set_uid.cljs$core$IFn$_invoke$arity$1(G__110769) : set_uid.call(null,G__110769));
}catch (e110767){if((e110767 instanceof Error)){
var _ = e110767;
var G__110768 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(content,status,false,null,null,cb);
return (set_uid.cljs$core$IFn$_invoke$arity$1 ? set_uid.cljs$core$IFn$_invoke$arity$1(G__110768) : set_uid.call(null,G__110768));
} else {
throw e110767;

}
}}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(check_pending_QMARK_)){
return notify_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","checking-for-updates","plugin/checking-for-updates",1789948483)], 0))], null),(cljs.core.truth_(sub_content)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.opacity-60","p.opacity-60",441728988),sub_content], null):null)], null),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(""));
} else {
if(cljs.core.truth_(uid)){
return frontend.handler.notification.clear_BANG_(uid);
} else {
return null;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [check_pending_QMARK_,sub_content], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(online_QMARK_)){
var last_updates = frontend.storage.get(new cljs.core.Keyword(null,"lsp-last-auto-updates","lsp-last-auto-updates",1901307330));
if((((!(last_updates === false))) && (((last_updates === true) || ((((!(typeof last_updates === 'number'))) || (((Date.now() - last_updates) > ((((60) * (60)) * (12)) * (1000)))))))))){
return setTimeout((function (){
frontend.handler.plugin.auto_check_enabled_for_updates_BANG_();

return frontend.storage.set(new cljs.core.Keyword(null,"lsp-last-auto-updates","lsp-last-auto-updates",1901307330),Date.now());
}));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [online_QMARK_], null));

return daiquiri.core.create_element(daiquiri.core.fragment,null,null);
}),null,"frontend.components.plugins/updates-notifications-impl");
frontend.components.plugins.updates_notifications = rum.core.lazy_build(rum.core.build_defcs,(function (_){
var updates_pending = frontend.state.sub(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256));
var online_QMARK_ = frontend.state.sub(new cljs.core.Keyword("network","online?","network/online?",1306822774));
var auto_checking_QMARK_ = frontend.state.sub(new cljs.core.Keyword("plugin","updates-auto-checking?","plugin/updates-auto-checking?",1617323181));
var check_pending_QMARK_ = cljs.core.boolean$(cljs.core.seq(updates_pending));
return frontend.components.plugins.updates_notifications_impl(check_pending_QMARK_,auto_checking_QMARK_,online_QMARK_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.plugins/updates-notifications");
frontend.components.plugins.focused_settings_content = rum.core.lazy_build(rum.core.build_defcs,(function (_state,title){
var _STAR_cache = new cljs.core.Keyword("frontend.components.plugins","cache","frontend.components.plugins/cache",366972046).cljs$core$IFn$_invoke$arity$1(_state);
var focused = frontend.state.sub(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137));
var nav_QMARK_ = frontend.state.sub(new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808));
var _ = frontend.state.sub(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034));
var ___$1 = setTimeout((function (){
return cljs.core.reset_BANG_(_STAR_cache,focused);
}),(100));
return daiquiri.core.create_element("div",{'className':"cp__plugins-settings cp__settings-main"},[daiquiri.core.create_element("header",null,[(function (){var attrs110770 = frontend.ui.icon("puzzle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(22)], null));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs110770))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs110770], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs110770))?[(function (){var attrs110771 = (function (){var or__5043__auto__ = title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings-of-plugins","settings-of-plugins",-1896805353)], 0));
}
})();
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110771))?daiquiri.interpreter.element_attributes(attrs110771):null),((cljs.core.map_QMARK_(attrs110771))?null:[daiquiri.interpreter.interpret(attrs110771)]));
})()]:[daiquiri.interpreter.interpret(attrs110770),(function (){var attrs110772 = (function (){var or__5043__auto__ = title;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings-of-plugins","settings-of-plugins",-1896805353)], 0));
}
})();
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110772))?daiquiri.interpreter.element_attributes(attrs110772):null),((cljs.core.map_QMARK_(attrs110772))?null:[daiquiri.interpreter.interpret(attrs110772)]));
})()]));
})()]),daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__settings-inner","md:flex",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-aside","no-aside",71744870),cljs.core.not(nav_QMARK_)], null)], null))], null))},[(cljs.core.truth_(nav_QMARK_)?daiquiri.core.create_element("aside",{'style':{'minWidth':"10rem"},'className':"md:w-64"},[(function (){var plugins = frontend.handler.plugin.get_enabled_plugins_if_setting_schema();
return daiquiri.core.create_element("ul",{'className':"settings-plugin-list"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins$iter__110773(s__110774){
return (new cljs.core.LazySeq(null,(function (){
var s__110774__$1 = s__110774;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110774__$1);
if(temp__5804__auto__){
var s__110774__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110774__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110774__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110776 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110775 = (0);
while(true){
if((i__110775 < size__5519__auto__)){
var map__110777 = cljs.core._nth(c__5518__auto__,i__110775);
var map__110777__$1 = cljs.core.__destructure_map(map__110777);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110777__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110777__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110777__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110777__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
cljs.core.chunk_append(b__110776,daiquiri.core.create_element("li",{'key':id,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focused)], null)], null))], null))},[daiquiri.core.create_element("a",{'data-id':id,'onClick':((function (i__110775,map__110777,map__110777__$1,id,name,title__$1,icon,c__5518__auto__,size__5519__auto__,b__110776,s__110774__$2,temp__5804__auto__,plugins,_STAR_cache,focused,nav_QMARK_,_,___$1){
return (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),id);
});})(i__110775,map__110777,map__110777__$1,id,name,title__$1,icon,c__5518__auto__,size__5519__auto__,b__110776,s__110774__$2,temp__5804__auto__,plugins,_STAR_cache,focused,nav_QMARK_,_,___$1))
,'className':"flex items-center settings-plugin-item"},[(cljs.core.truth_((function (){var and__5041__auto__ = icon;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("img",{'src':icon,'className':"icon"},[]):daiquiri.interpreter.interpret(frontend.components.svg.folder)),(function (){var attrs110778 = (function (){var or__5043__auto__ = title__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110778))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs110778], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs110778))?null:[daiquiri.interpreter.interpret(attrs110778)]));
})()])]));

var G__110833 = (i__110775 + (1));
i__110775 = G__110833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110776),frontend$components$plugins$iter__110773(cljs.core.chunk_rest(s__110774__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110776),null);
}
} else {
var map__110779 = cljs.core.first(s__110774__$2);
var map__110779__$1 = cljs.core.__destructure_map(map__110779);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110779__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110779__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110779__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return cljs.core.cons(daiquiri.core.create_element("li",{'key':id,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,focused)], null)], null))], null))},[daiquiri.core.create_element("a",{'data-id':id,'onClick':((function (map__110779,map__110779__$1,id,name,title__$1,icon,s__110774__$2,temp__5804__auto__,plugins,_STAR_cache,focused,nav_QMARK_,_,___$1){
return (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),id);
});})(map__110779,map__110779__$1,id,name,title__$1,icon,s__110774__$2,temp__5804__auto__,plugins,_STAR_cache,focused,nav_QMARK_,_,___$1))
,'className':"flex items-center settings-plugin-item"},[(cljs.core.truth_((function (){var and__5041__auto__ = icon;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(icon)));
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("img",{'src':icon,'className':"icon"},[]):daiquiri.interpreter.interpret(frontend.components.svg.folder)),(function (){var attrs110778 = (function (){var or__5043__auto__ = title__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return name;
}
})();
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110778))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1"], null)], null),attrs110778], 0))):{'className':"flex-1"}),((cljs.core.map_QMARK_(attrs110778))?null:[daiquiri.interpreter.interpret(attrs110778)]));
})()])]),frontend$components$plugins$iter__110773(cljs.core.rest(s__110774__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(plugins);
})())]);
})()]):null),daiquiri.core.create_element("article",null,[daiquiri.core.create_element("div",{'data-id':focused,'className':"panel-wrap"},[daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = focused;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cache),focused);
if(and__5041__auto____$1){
return frontend.handler.plugin.get_plugin_inst(focused);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pl = temp__5804__auto__;
return frontend.ui.catch_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.warning.text-lg.mt-5","p.warning.text-lg.mt-5",-1216205355),"Settings schema Error!"], null),frontend.components.plugins_settings.settings_container(cljs_bean.core.__GT_clj(pl.settingsSchema),pl));
} else {
return null;
}
})())])])])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137)),new cljs.core.Keyword("frontend.components.plugins","cache","frontend.components.plugins/cache",366972046))], null),"frontend.components.plugins/focused-settings-content");
frontend.components.plugins.custom_js_installer = rum.core.lazy_build(rum.core.build_defc,(function (p__110780){
var map__110781 = p__110780;
var map__110781__$1 = cljs.core.__destructure_map(map__110781);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110781__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110781__$1,new cljs.core.Keyword(null,"current-repo","current-repo",134812359));
var db_restoring_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110781__$1,new cljs.core.Keyword(null,"db-restoring?","db-restoring?",-1548628664));
var nfs_granted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110781__$1,new cljs.core.Keyword(null,"nfs-granted?","nfs-granted?",-649584328));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(db_restoring_QMARK_);
if(and__5041__auto__){
var or__5043__auto__ = (!(frontend.util.nfs_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return nfs_granted_QMARK_;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.ui.exec_js_if_exists__AMPERSAND__allowed_BANG_(t);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_repo,db_restoring_QMARK_,nfs_granted_QMARK_], null));

return null;
}),null,"frontend.components.plugins/custom-js-installer");
frontend.components.plugins.perf_tip_content = rum.core.lazy_build(rum.core.build_defc,(function (pid,name,url){
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("span",{'className':"block whitespace-normal"},["This plugin ",daiquiri.core.create_element("strong",{'className':"text-error"},["#",daiquiri.interpreter.interpret(name)])," takes too long to load, affecting the application startup time and\n     potentially causing other plugins to fail to load."]),daiquiri.core.create_element("path",{'className':"opacity-50"},[daiquiri.core.create_element("small",null,[(function (){var attrs110784 = frontend.ui.icon("folder");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs110784))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pr-1"], null)], null),attrs110784], 0))):{'className':"pr-1"}),((cljs.core.map_QMARK_(attrs110784))?null:[daiquiri.interpreter.interpret(attrs110784)]));
})(),daiquiri.interpreter.interpret(url)])]),(function (){var attrs110783 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Disable now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(LSPluginCore.disable(pid),(function (){
frontend.handler.notification.clear_BANG_(pid);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"The plugin ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-error","strong.text-error",443803578),"#",name], null)," is disabled."], null),new cljs.core.Keyword(null,"success","success",1890645906),true,null,(3000),null);
})),(function (p1__110782_SHARP_){
return console.error(p1__110782_SHARP_);
}));
})], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs110783))?daiquiri.interpreter.element_attributes(attrs110783):null),((cljs.core.map_QMARK_(attrs110783))?null:[daiquiri.interpreter.interpret(attrs110783)]));
})()]);
}),null,"frontend.components.plugins/perf-tip-content");
frontend.components.plugins.open_plugins_modal_BANG_ = (function frontend$components$plugins$open_plugins_modal_BANG_(){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_close_BANG_){
return frontend.components.plugins.plugins_page();
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"plugins-dashboard"], null));
});
frontend.components.plugins.open_waiting_updates_modal_BANG_ = (function frontend$components$plugins$open_waiting_updates_modal_BANG_(){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_close_BANG_){
return frontend.components.plugins.waiting_coming_updates();
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
});
frontend.components.plugins.open_plugins_from_file_modal_BANG_ = (function frontend$components$plugins$open_plugins_from_file_modal_BANG_(plugins){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_close_BANG_){
return frontend.components.plugins.plugins_from_file(plugins);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"id","id",-1388402092),"ls-plugins-from-file-modal"], null));
});
frontend.components.plugins.open_focused_settings_modal_BANG_ = (function frontend$components$plugins$open_focused_settings_modal_BANG_(title){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_close_BANG_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-modal.of-plugins","div.settings-modal.of-plugins",-1980465429),frontend.components.plugins.focused_settings_content(title)], null);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center?","center?",-323116631),false,new cljs.core.Keyword(null,"label","label",1718410804),"plugin-settings-modal",new cljs.core.Keyword(null,"id","id",-1388402092),"ls-focused-settings-modal"], null));
});

//# sourceMappingURL=frontend.components.plugins.js.map
