goog.provide('frontend.components.settings');
goog.scope(function(){
  frontend.components.settings.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.settings.toggle = (function frontend$components$settings$toggle(var_args){
var args__5772__auto__ = [];
var len__5766__auto___117316 = arguments.length;
var i__5767__auto___117317 = (0);
while(true){
if((i__5767__auto___117317 < len__5766__auto___117316)){
args__5772__auto__.push((arguments[i__5767__auto___117317]));

var G__117318 = (i__5767__auto___117317 + (1));
i__5767__auto___117317 = G__117318;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (label_for,name,state,on_toggle,p__117168){
var vec__117169 = p__117168;
var detail_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117169,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),label_for], null),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.sm:max-w-tss.sm:col-span-2","div.rounded-md.sm:max-w-tss.sm:col-span-2",-1315636593),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md","div.rounded-md",-395116423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"1rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(state,on_toggle,true),detail_text], null)], null)], null);
}));

(frontend.components.settings.toggle.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(frontend.components.settings.toggle.cljs$lang$applyTo = (function (seq117163){
var G__117164 = cljs.core.first(seq117163);
var seq117163__$1 = cljs.core.next(seq117163);
var G__117165 = cljs.core.first(seq117163__$1);
var seq117163__$2 = cljs.core.next(seq117163__$1);
var G__117166 = cljs.core.first(seq117163__$2);
var seq117163__$3 = cljs.core.next(seq117163__$2);
var G__117167 = cljs.core.first(seq117163__$3);
var seq117163__$4 = cljs.core.next(seq117163__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__117164,G__117165,G__117166,G__117167,seq117163__$4);
}));

frontend.components.settings.app_updater = rum.core.lazy_build(rum.core.build_defcs,(function (state,version){
var update_pending_QMARK_ = frontend.state.sub(new cljs.core.Keyword("electron","updater-pending?","electron/updater-pending?",-1675811595));
var map__117172 = frontend.state.sub(new cljs.core.Keyword("electron","updater","electron/updater",454456683));
var map__117172__$1 = cljs.core.__destructure_map(map__117172);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117172__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117172__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
return daiquiri.core.create_element("span",{'className':"cp__settings-app-updater"},[daiquiri.core.create_element("div",{'className':"ctls flex items-center"},[daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2 flex gap-4 items-center flex-wrap"},[(function (){var attrs117178 = (cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","check-for-updates","settings-page/check-for-updates",-915665420)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm mr-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/logseq/logseq/releases"], 0)):(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","check-for-updates","settings-page/check-for-updates",-915665420)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm mr-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://apps.apple.com/app/logseq/id1601013908"], 0)):(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(update_pending_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","checking","settings-page/checking",1127502507)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","check-for-updates","settings-page/check-for-updates",-915665420)], 0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm mr-1",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),update_pending_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return window.apis.checkForUpdates(false);
})], 0)):null
)));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117178))?daiquiri.interpreter.element_attributes(attrs117178):null),((cljs.core.map_QMARK_(attrs117178))?null:[daiquiri.interpreter.interpret(attrs117178)]));
})(),daiquiri.core.create_element("div",{'title':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","revision","settings-page/revision",339283629)], 0))),frontend.config.revision].join(''),'onClick':(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current Revision: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),["https://github.com/logseq/logseq/commit/",frontend.config.revision].join('')], null),frontend.config.revision], null)], null),new cljs.core.Keyword(null,"info","info",-317069002),false);
}),'className':"text-sm cursor"},[daiquiri.interpreter.interpret(version)]),daiquiri.core.create_element("a",{'target':"_blank",'href':"https://docs.logseq.com/#/page/changelog",'className':"text-sm fade-link underline inline"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","changelog","settings-page/changelog",-952629289)], 0)))])])]),(cljs.core.truth_((function (){var or__5043__auto__ = update_pending_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return clojure.string.blank_QMARK_(type);
}
})())?null:(function (){var attrs117177 = (function (){var G__117179 = type;
switch (G__117179) {
case "update-not-available":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","app-updated","settings-page/app-updated",-370351656)], 0))], null);

break;
case "update-available":
var map__117180 = payload;
var map__117180__$1 = cljs.core.__destructure_map(map__117180);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117180__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117180__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","update-available","settings-page/update-available",-941309384)], 0))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link","a.link",-619461443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
window.apis.openExternal(url);

return frontend.util.stop(e);
})], null),frontend.components.svg.external_link,name," \uD83C\uDF89"], null)], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","update-error-1","settings-page/update-error-1",150460179)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","update-error-2","settings-page/update-error-2",1459224149)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link","a.link",-619461443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
window.apis.openExternal("https://github.com/logseq/logseq/releases");

return frontend.util.stop(e);
})], null),frontend.components.svg.external_link," release channel"], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__117179)].join('')));

}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117177))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-state","text-sm"], null)], null),attrs117177], 0))):{'className':"update-state text-sm"}),((cljs.core.map_QMARK_(attrs117177))?null:[daiquiri.interpreter.interpret(attrs117177)]));
})())]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/app-updater");
frontend.components.settings.outdenting_hint = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'style':{'boxShadow':"0 4px 20px 4px rgba(0, 20, 60, .1), 0 4px 80px -8px rgba(0, 20, 60, .2)"},'className':"ui__modal-panel"},[daiquiri.core.create_element("div",{'style':{'margin':"12px",'maxWidth':"500px"}},[(function (){var attrs117181 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","preferred-outdenting-tip","settings-page/preferred-outdenting-tip",-1681275706)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117181))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs117181], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs117181))?[daiquiri.core.create_element("a",{'target':"_blank",'href':"https://discuss.logseq.com/t/whats-your-preferred-outdent-behavior-the-direct-one-or-the-logical-one/978",'className':"text-sm"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","preferred-outdenting-tip-more","settings-page/preferred-outdenting-tip-more",301475512)], 0)))])]:[daiquiri.interpreter.interpret(attrs117181),daiquiri.core.create_element("a",{'target':"_blank",'href':"https://discuss.logseq.com/t/whats-your-preferred-outdent-behavior-the-direct-one-or-the-logical-one/978",'className':"text-sm"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","preferred-outdenting-tip-more","settings-page/preferred-outdenting-tip-more",301475512)], 0)))])]));
})(),daiquiri.core.create_element("img",{'src':"https://discuss.logseq.com/uploads/default/original/1X/e8ea82f63a5e01f6d21b5da827927f538f3277b9.gif",'width':(500),'height':(500)},null)])]);
}),null,"frontend.components.settings/outdenting-hint");
frontend.components.settings.auto_expand_hint = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'style':{'boxShadow':"0 4px 20px 4px rgba(0, 20, 60, .1), 0 4px 80px -8px rgba(0, 20, 60, .2)"},'className':"ui__modal-panel"},[daiquiri.core.create_element("div",{'style':{'margin':"12px",'maxWidth':"500px"}},[(function (){var attrs117184 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","auto-expand-block-refs-tip","settings-page/auto-expand-block-refs-tip",356113505)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117184))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs117184], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs117184))?null:[daiquiri.interpreter.interpret(attrs117184)]));
})(),daiquiri.core.create_element("img",{'src':"https://user-images.githubusercontent.com/28241963/225818326-118deda9-9d1e-477d-b0ce-771ca0bcd976.gif",'width':(500),'height':(500)},null)])]);
}),null,"frontend.components.settings/auto-expand-hint");
frontend.components.settings.row_with_button_action = (function frontend$components$settings$row_with_button_action(p__117187){
var map__117188 = p__117187;
var map__117188__$1 = cljs.core.__destructure_map(map__117188);
var stretch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117188__$1,new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var _for = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117188__$1,new cljs.core.Keyword(null,"-for","-for",-490432963));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117188__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var left_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117188__$1,new cljs.core.Keyword(null,"left-label","left-label",-1662718913));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117188__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117188__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var button_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117188__$1,new cljs.core.Keyword(null,"button-label","button-label",-1402542935));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__117188__$1,new cljs.core.Keyword(null,"center?","center?",-323116631),true);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117188__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117188__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4","div.it.sm:grid.sm:grid-cols-3.sm:gap-4",-1107683600),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(center_QMARK_)?"sm:items-center":"sm:items-start")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),_for], null),left_label], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs.text-gray-10","div.text-xs.text-gray-10",317949892),description], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2.flex.items-center","div.mt-1.sm:mt-0.sm:col-span-2.flex.items-center",232187274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"0.5rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(stretch)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null):null)], null),(cljs.core.truth_(action)?action:(function (){var G__117189 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as-child","as-child",1364710342),(!(clojure.string.blank_QMARK_(href))),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null);
var G__117190 = ((clojure.string.blank_QMARK_(href))?button_label:(function (){var G__117191 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null);
var G__117192 = button_label;
return (logseq.shui.ui.link.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.link.cljs$core$IFn$_invoke$arity$2(G__117191,G__117192) : logseq.shui.ui.link.call(null,G__117191,G__117192));
})());
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__117189,G__117190) : logseq.shui.ui.button.call(null,G__117189,G__117190));
})())], null),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.flex","div.text-sm.flex",-1550635209),desc], null))], null)], null);
});
frontend.components.settings.edit_config_edn = (function frontend$components$settings$edit_config_edn(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","custom-configuration","settings-page/custom-configuration",1579321198)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","edit-config-edn","settings-page/edit-config-edn",-945931569)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_repo_config_path()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_settings_modal_BANG_,new cljs.core.Keyword(null,"-for","-for",-490432963),"config_edn"], null));
});
frontend.components.settings.edit_global_config_edn = (function frontend$components$settings$edit_global_config_edn(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","custom-global-configuration","settings-page/custom-global-configuration",880442968)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","edit-global-config-edn","settings-page/edit-global-config-edn",-570818390)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.handler.global_config.global_config_path()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_settings_modal_BANG_,new cljs.core.Keyword(null,"-for","-for",-490432963),"global_config_edn"], null));
});
frontend.components.settings.edit_custom_css = (function frontend$components$settings$edit_custom_css(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","custom-theme","settings-page/custom-theme",-1859779920)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","edit-custom-css","settings-page/edit-custom-css",-612557961)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_settings_modal_BANG_,new cljs.core.Keyword(null,"-for","-for",-490432963),"customize_css"], null));
});
frontend.components.settings.edit_export_css = (function frontend$components$settings$edit_export_css(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","export-theme","settings-page/export-theme",-522644991)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","edit-export-css","settings-page/edit-export-css",1335541441)], 0)),new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0()], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.ui.toggle_settings_modal_BANG_,new cljs.core.Keyword(null,"-for","-for",-490432963),"export_css"], null));
});
frontend.components.settings.show_brackets_row = (function frontend$components$settings$show_brackets_row(t,show_brackets_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"show_brackets"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","show-brackets","settings-page/show-brackets",369525621)) : t.call(null,new cljs.core.Keyword("settings-page","show-brackets","settings-page/show-brackets",369525621)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-md.sm:max-w-xs","div.rounded-md.sm:max-w-xs",-1969074733),frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(show_brackets_QMARK_,frontend.handler.config.toggle_ui_show_brackets_BANG_,true)], null)], null),((cljs.core.not((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),frontend.ui.render_keyboard_shortcut(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-brackets","ui/toggle-brackets",297620244)))], null):null)], null);
});
frontend.components.settings.switch_spell_check_row = rum.core.lazy_build(rum.core.build_defcs,(function (state,t){
var enabled_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968)], null));
return daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center"},[(function (){var attrs117193 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","spell-checker","settings-page/spell-checker",234247295)) : t.call(null,new cljs.core.Keyword("settings-page","spell-checker","settings-page/spell-checker",234247295)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs117193))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","text-sm","font-medium","leading-5","opacity-70"], null)], null),attrs117193], 0))):{'className':"block text-sm font-medium leading-5 opacity-70"}),((cljs.core.map_QMARK_(attrs117193))?null:[daiquiri.interpreter.interpret(attrs117193)]));
})(),daiquiri.core.create_element("div",null,[(function (){var attrs117194 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled_QMARK_,(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968)], null),cljs.core.not(enabled_QMARK_));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),cljs.core.not(enabled_QMARK_)], 0)),(function (){
if(cljs.core.truth_(confirm((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relaunch-confirm-to-work","relaunch-confirm-to-work",-672675357)) : t.call(null,new cljs.core.Keyword(null,"relaunch-confirm-to-work","relaunch-confirm-to-work",-672675357)))))){
return logseq.api.relaunch();
} else {
return null;
}
}));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117194))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs117194], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs117194))?null:[daiquiri.interpreter.interpret(attrs117194)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/switch-spell-check-row");
frontend.components.settings.switch_git_auto_commit_row = rum.core.lazy_build(rum.core.build_defcs,(function (state,t){
var enabled_QMARK_ = frontend.state.get_git_auto_commit_enabled_QMARK_();
return daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center"},[(function (){var attrs117195 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","git-switcher-label","settings-page/git-switcher-label",404759182)) : t.call(null,new cljs.core.Keyword("settings-page","git-switcher-label","settings-page/git-switcher-label",404759182)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs117195))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","text-sm","font-medium","leading-5","opacity-70"], null)], null),attrs117195], 0))):{'className':"block text-sm font-medium leading-5 opacity-70"}),((cljs.core.map_QMARK_(attrs117195))?null:[daiquiri.interpreter.interpret(attrs117195)]));
})(),daiquiri.core.create_element("div",null,[(function (){var attrs117196 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled_QMARK_,(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","disable-auto-commit?","git/disable-auto-commit?",1374476539)], null),enabled_QMARK_);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword("git","disable-auto-commit?","git/disable-auto-commit?",1374476539),enabled_QMARK_], 0)),(function (___37148__auto__){
return promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"setGitAutoCommit","setGitAutoCommit",1394010060)], 0)));
}));
}));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117196))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs117196], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs117196))?null:[daiquiri.interpreter.interpret(attrs117196)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/switch-git-auto-commit-row");
frontend.components.settings.switch_git_commit_on_close_row = rum.core.lazy_build(rum.core.build_defcs,(function (state,t){
var enabled_QMARK_ = frontend.state.get_git_commit_on_close_enabled_QMARK_();
return daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center"},[(function (){var attrs117197 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","git-commit-on-close","settings-page/git-commit-on-close",274889554)) : t.call(null,new cljs.core.Keyword("settings-page","git-commit-on-close","settings-page/git-commit-on-close",274889554)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs117197))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","text-sm","font-medium","leading-5","opacity-70"], null)], null),attrs117197], 0))):{'className':"block text-sm font-medium leading-5 opacity-70"}),((cljs.core.map_QMARK_(attrs117197))?null:[daiquiri.interpreter.interpret(attrs117197)]));
})(),daiquiri.core.create_element("div",null,[(function (){var attrs117198 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled_QMARK_,(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","commit-on-close?","git/commit-on-close?",398720116)], null),cljs.core.not(enabled_QMARK_));

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword("git","commit-on-close?","git/commit-on-close?",398720116),cljs.core.not(enabled_QMARK_)], 0));
}),true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117198))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-md","sm:max-w-xs"], null)], null),attrs117198], 0))):{'className':"rounded-md sm:max-w-xs"}),((cljs.core.map_QMARK_(attrs117198))?null:[daiquiri.interpreter.interpret(attrs117198)]));
})()])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/switch-git-commit-on-close-row");
frontend.components.settings.git_auto_commit_seconds = rum.core.lazy_build(rum.core.build_defcs,(function (state,t){
var secs = (function (){var or__5043__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","auto-commit-seconds","git/auto-commit-seconds",1991447826)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (60);
}
})();
return daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center"},[(function (){var attrs117199 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","git-commit-delay","settings-page/git-commit-delay",-724346800)) : t.call(null,new cljs.core.Keyword("settings-page","git-commit-delay","settings-page/git-commit-delay",-724346800)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs117199))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","text-sm","font-medium","leading-5","opacity-70"], null)], null),attrs117199], 0))):{'className':"block text-sm font-medium leading-5 opacity-70"}),((cljs.core.map_QMARK_(attrs117199))?null:[daiquiri.interpreter.interpret(attrs117199)]));
})(),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md sm:max-w-xs"},[daiquiri.core.create_element("input",{'id':"home-default-page",'defaultValue':secs,'onBlur':(function (event){
var value = frontend.util.safe_parse_int(frontend.util.evalue(event));
if(((typeof value === 'number') && (((((0) < value)) && ((value < ((86400) + (1)))))))){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","auto-commit-seconds","git/auto-commit-seconds",1991447826)], null),value),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword("git","auto-commit-seconds","git/auto-commit-seconds",1991447826),value], 0)),(function (___37148__auto____$1){
return promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"setGitAutoCommit","setGitAutoCommit",1394010060)], 0)));
}));
}));
}));
} else {
var temp__5804__auto__ = frontend.components.settings.goog$module$goog$object.get(event,"target");
if(cljs.core.truth_(temp__5804__auto__)){
var elem = temp__5804__auto__;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Invalid value! Must be a number between 1 and 86400"], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),true);

return frontend.components.settings.goog$module$goog$object.set(elem,"value",secs);
} else {
return null;
}
}
}),'className':"form-input is-small transition duration-150 ease-in-out"},[])])])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/git-auto-commit-seconds");
frontend.components.settings.app_auto_update_row = rum.core.lazy_build(rum.core.build_defc,(function (t){
var enabled_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"auto-update","auto-update",-1471446628)], null));
var enabled_QMARK___$1 = (((enabled_QMARK_ == null))?true:enabled_QMARK_);
return daiquiri.interpreter.interpret(frontend.components.settings.toggle("usage-diagnostics",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","auto-updater","settings-page/auto-updater",542727320)) : t.call(null,new cljs.core.Keyword("settings-page","auto-updater","settings-page/auto-updater",542727320))),enabled_QMARK___$1,(function (){
var G__117203 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword(null,"auto-update","auto-update",-1471446628),cljs.core.not(enabled_QMARK___$1)], 0));
var fexpr__117202 = frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"auto-update","auto-update",-1471446628)], null),cljs.core.not(enabled_QMARK___$1));
return (fexpr__117202.cljs$core$IFn$_invoke$arity$1 ? fexpr__117202.cljs$core$IFn$_invoke$arity$1(G__117203) : fexpr__117202.call(null,G__117203));
})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/app-auto-update-row");
frontend.components.settings.language_row = (function frontend$components$settings$language_row(t,preferred_language){
var on_change = (function (e){
var lang_code = frontend.util.evalue(e);
frontend.state.set_preferred_language_BANG_(lang_code);

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
});
var action = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.is-small","select.form-select.is-small",1007249743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),preferred_language,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),(function (){var iter__5520__auto__ = (function frontend$components$settings$language_row_$_iter__117204(s__117205){
return (new cljs.core.LazySeq(null,(function (){
var s__117205__$1 = s__117205;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117205__$1);
if(temp__5804__auto__){
var s__117205__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117205__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117205__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117207 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117206 = (0);
while(true){
if((i__117206 < size__5519__auto__)){
var language = cljs.core._nth(c__5518__auto__,i__117206);
cljs.core.chunk_append(b__117207,(function (){var lang_code = cljs.core.name(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(language));
var lang_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(language);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),lang_code,new cljs.core.Keyword(null,"value","value",305978217),lang_code], null),lang_label], null);
})());

var G__117320 = (i__117206 + (1));
i__117206 = G__117320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117207),frontend$components$settings$language_row_$_iter__117204(cljs.core.chunk_rest(s__117205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117207),null);
}
} else {
var language = cljs.core.first(s__117205__$2);
return cljs.core.cons((function (){var lang_code = cljs.core.name(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(language));
var lang_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(language);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),lang_code,new cljs.core.Keyword(null,"value","value",305978217),lang_code], null),lang_label], null);
})(),frontend$components$settings$language_row_$_iter__117204(cljs.core.rest(s__117205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.dicts.languages);
})()], null);
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"language","language",-1591107564)) : t.call(null,new cljs.core.Keyword(null,"language","language",-1591107564))),new cljs.core.Keyword(null,"-for","-for",-490432963),"preferred_language",new cljs.core.Keyword(null,"action","action",-811238024),action], null));
});
frontend.components.settings.theme_modes_row = (function frontend$components$settings$theme_modes_row(t,switch_theme,system_theme_QMARK_,dark_QMARK_){
var color_accent = frontend.state.sub(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984));
var pick_theme = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.theme-modes-options","ul.theme-modes-options",-873847962),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.state.use_theme_mode_BANG_,"light"),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core.not(system_theme_QMARK_)) && (cljs.core.not(dark_QMARK_)))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mode-light","i.mode-light",2081173027),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(color_accent)?"radix":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","theme-light","settings-page/theme-light",1503129825)) : t.call(null,new cljs.core.Keyword("settings-page","theme-light","settings-page/theme-light",1503129825)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.state.use_theme_mode_BANG_,"dark"),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),(function (){var and__5041__auto__ = cljs.core.not(system_theme_QMARK_);
if(and__5041__auto__){
return dark_QMARK_;
} else {
return and__5041__auto__;
}
})()], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mode-dark","i.mode-dark",733780794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(color_accent)?"radix":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","theme-dark","settings-page/theme-dark",690383413)) : t.call(null,new cljs.core.Keyword("settings-page","theme-dark","settings-page/theme-dark",690383413)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.state.use_theme_mode_BANG_,"system"),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),system_theme_QMARK_], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mode-system","i.mode-system",411983973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(color_accent)?"radix":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","theme-system","settings-page/theme-system",2128147838)) : t.call(null,new cljs.core.Keyword("settings-page","theme-system","settings-page/theme-system",2128147838)))], null)], null)], null);
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(function (){var G__117208 = new cljs.core.Keyword("right-side-bar","switch-theme","right-side-bar/switch-theme",-247650664);
var G__117209 = clojure.string.capitalize(switch_theme);
return (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(G__117208,G__117209) : t.call(null,G__117208,G__117209));
})(),new cljs.core.Keyword(null,"-for","-for",-490432963),"toggle_theme",new cljs.core.Keyword(null,"action","action",-811238024),pick_theme,new cljs.core.Keyword(null,"desc","desc",2093485764),frontend.ui.render_keyboard_shortcut(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","toggle-theme","ui/toggle-theme",-91905800)))], null));
});
frontend.components.settings.accent_color_row = (function frontend$components$settings$accent_color_row(_in_modal_QMARK_){
var color_accent = frontend.state.sub(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984));
var pick_theme = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__accent-colors-list-wrap","div.cp__accent-colors-list-wrap",-1810587712),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(_in_modal_QMARK_)?"as-modal-picker":"")], null),(function (){var iter__5520__auto__ = (function frontend$components$settings$accent_color_row_$_iter__117210(s__117211){
return (new cljs.core.LazySeq(null,(function (){
var s__117211__$1 = s__117211;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117211__$1);
if(temp__5804__auto__){
var s__117211__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117211__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117211__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117213 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117212 = (0);
while(true){
if((i__117212 < size__5519__auto__)){
var color = cljs.core._nth(c__5518__auto__,i__117212);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,color_accent);
var none_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"none","none",1333468478));
cljs.core.chunk_append(b__117213,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(28)], null)], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),(function (){var G__117214 = color;
var G__117214__$1 = (((G__117214 instanceof cljs.core.Keyword))?G__117214.fqn:null);
switch (G__117214__$1) {
case "none":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"300px"], null)], null),"Cancel accent color. This is currently in beta stage and mainly used for compatibility with custom themes."], null);

break;
case "logseq":
return "Logseq classical color";

break;
default:
return [cljs.core.name(color)," color"].join('');

}
})(),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null)], null),(function (){var G__117215 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 px-1 rounded-full flex justify-center items-center transition ease-in duration-100 hover:cursor-pointer hover:opacity-100",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),(function (){var and__5041__auto__ = _in_modal_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return active_QMARK_;
} else {
return and__5041__auto__;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),frontend.colors.variable.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"09","09",-2019125985)),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),frontend.colors.variable.cljs$core$IFn$_invoke$arity$2(color,((active_QMARK_)?new cljs.core.Keyword(null,"07","07",-2092670845):new cljs.core.Keyword(null,"06","06",1040277546))),new cljs.core.Keyword(null,"outline-width","outline-width",-381531602),((active_QMARK_)?"4px":"1px"),new cljs.core.Keyword(null,"outline-style","outline-style",227043878),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"opacity","opacity",397153780),((active_QMARK_)?(1):0.5)], null),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__117212,active_QMARK_,none_QMARK_,color,c__5518__auto__,size__5519__auto__,b__117213,s__117211__$2,temp__5804__auto__,color_accent){
return (function (_e){
return frontend.state.set_color_accent_BANG_(color);
});})(i__117212,active_QMARK_,none_QMARK_,color,c__5518__auto__,size__5519__auto__,b__117213,s__117211__$2,temp__5804__auto__,color_accent))
], null);
var G__117216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((none_QMARK_)?"h-0.5 w-full bg-red-700":"w-2 h-2 rounded-full transition ease-in duration-100"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((!(none_QMARK_)))?["var(--rx-",cljs.core.name(color),"-07)"].join(''):""),new cljs.core.Keyword(null,"opacity","opacity",397153780),((((none_QMARK_) || (active_QMARK_)))?(1):(0))], null)], null)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__117215,G__117216) : logseq.shui.ui.button.call(null,G__117215,G__117216));
})())], null));

var G__117322 = (i__117212 + (1));
i__117212 = G__117322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117213),frontend$components$settings$accent_color_row_$_iter__117210(cljs.core.chunk_rest(s__117211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117213),null);
}
} else {
var color = cljs.core.first(s__117211__$2);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,color_accent);
var none_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"none","none",1333468478));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(28)], null)], null),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"html","html",-998796897),(function (){var G__117217 = color;
var G__117217__$1 = (((G__117217 instanceof cljs.core.Keyword))?G__117217.fqn:null);
switch (G__117217__$1) {
case "none":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"300px"], null)], null),"Cancel accent color. This is currently in beta stage and mainly used for compatibility with custom themes."], null);

break;
case "logseq":
return "Logseq classical color";

break;
default:
return [cljs.core.name(color)," color"].join('');

}
})(),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100)], null)], null),(function (){var G__117218 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 px-1 rounded-full flex justify-center items-center transition ease-in duration-100 hover:cursor-pointer hover:opacity-100",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),(function (){var and__5041__auto__ = _in_modal_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return active_QMARK_;
} else {
return and__5041__auto__;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),frontend.colors.variable.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"09","09",-2019125985)),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),frontend.colors.variable.cljs$core$IFn$_invoke$arity$2(color,((active_QMARK_)?new cljs.core.Keyword(null,"07","07",-2092670845):new cljs.core.Keyword(null,"06","06",1040277546))),new cljs.core.Keyword(null,"outline-width","outline-width",-381531602),((active_QMARK_)?"4px":"1px"),new cljs.core.Keyword(null,"outline-style","outline-style",227043878),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"opacity","opacity",397153780),((active_QMARK_)?(1):0.5)], null),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_QMARK_,none_QMARK_,color,s__117211__$2,temp__5804__auto__,color_accent){
return (function (_e){
return frontend.state.set_color_accent_BANG_(color);
});})(active_QMARK_,none_QMARK_,color,s__117211__$2,temp__5804__auto__,color_accent))
], null);
var G__117219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((none_QMARK_)?"h-0.5 w-full bg-red-700":"w-2 h-2 rounded-full transition ease-in duration-100"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((!(none_QMARK_)))?["var(--rx-",cljs.core.name(color),"-07)"].join(''):""),new cljs.core.Keyword(null,"opacity","opacity",397153780),((((none_QMARK_) || (active_QMARK_)))?(1):(0))], null)], null)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__117218,G__117219) : logseq.shui.ui.button.call(null,G__117218,G__117219));
})())], null),frontend$components$settings$accent_color_row_$_iter__117210(cljs.core.rest(s__117211__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"logseq","logseq",-928939893)], null),frontend.colors.color_list));
})()], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),"Accent color",new cljs.core.Keyword(null,"description","description",-1428560544),"Choosing an accent color may override any theme you have selected.",new cljs.core.Keyword(null,"-for","-for",-490432963),"toggle_radix_theme",new cljs.core.Keyword(null,"desc","desc",2093485764),(cljs.core.truth_(_in_modal_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-6","span.pl-6",-709977211),frontend.ui.render_keyboard_shortcut(frontend.modules.shortcut.data_helper.gen_shortcut_seq(new cljs.core.Keyword("ui","accent-colors-picker","ui/accent-colors-picker",2138703314)))], null)),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),cljs.core.boolean$(_in_modal_QMARK_),new cljs.core.Keyword(null,"action","action",-811238024),pick_theme], null))], null);
});
frontend.components.settings.modal_accent_colors_inner = rum.core.lazy_build(rum.core.build_defc,(function (){
var attrs117220 = frontend.components.settings.accent_color_row(true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117220))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__settings-accent-colors-modal-inner"], null)], null),attrs117220], 0))):{'className':"cp__settings-accent-colors-modal-inner"}),((cljs.core.map_QMARK_(attrs117220))?null:[daiquiri.interpreter.interpret(attrs117220)]));
}),null,"frontend.components.settings/modal-accent-colors-inner");
frontend.components.settings.file_format_row = (function frontend$components$settings$file_format_row(t,preferred_format){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"preferred_format"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","preferred-file-format","settings-page/preferred-file-format",-474760732)) : t.call(null,new cljs.core.Keyword("settings-page","preferred-file-format","settings-page/preferred-file-format",-474760732)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-lg.rounded-md","div.max-w-lg.rounded-md",-1164491035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.is-small","select.form-select.is-small",1007249743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(preferred_format),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var format = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(frontend.util.evalue(e)));
return frontend.handler.user.set_preferred_format_BANG_(format);
})], null),(function (){var iter__5520__auto__ = (function frontend$components$settings$file_format_row_$_iter__117221(s__117222){
return (new cljs.core.LazySeq(null,(function (){
var s__117222__$1 = s__117222;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117222__$1);
if(temp__5804__auto__){
var s__117222__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117222__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117222__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117224 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117223 = (0);
while(true){
if((i__117223 < size__5519__auto__)){
var format = cljs.core._nth(c__5518__auto__,i__117223);
cljs.core.chunk_append(b__117224,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),format,new cljs.core.Keyword(null,"value","value",305978217),format], null),clojure.string.capitalize(format)], null));

var G__117324 = (i__117223 + (1));
i__117223 = G__117324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117224),frontend$components$settings$file_format_row_$_iter__117221(cljs.core.chunk_rest(s__117222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117224),null);
}
} else {
var format = cljs.core.first(s__117222__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),format,new cljs.core.Keyword(null,"value","value",305978217),format], null),clojure.string.capitalize(format)], null),frontend$components$settings$file_format_row_$_iter__117221(cljs.core.rest(s__117222__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null)));
})()], null)], null)], null)], null);
});
frontend.components.settings.date_format_row = (function frontend$components$settings$date_format_row(t,preferred_date_format){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-:div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-:div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-596880729),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"custom_date_format"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","custom-date-format","settings-page/custom-date-format",1127600129)) : t.call(null,new cljs.core.Keyword("settings-page","custom-date-format","settings-page/custom-date-format",1127600129))),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","custom-date-format-warning","settings-page/custom-date-format-warning",855517727)) : t.call(null,new cljs.core.Keyword("settings-page","custom-date-format-warning","settings-page/custom-date-format-warning",855517727))),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover ml-2",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null),frontend.components.svg.info())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-lg.rounded-md","div.max-w-lg.rounded-md",-1164491035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.is-small","select.form-select.is-small",1007249743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),preferred_date_format,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var format = frontend.util.evalue(e);
if(clojure.string.blank_QMARK_(format)){
return null;
} else {
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("journal","page-title-format","journal/page-title-format",2033061997),format);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","custom-date-format-notification","settings-page/custom-date-format-notification",1192674718)) : t.call(null,new cljs.core.Keyword("settings-page","custom-date-format-notification","settings-page/custom-date-format-notification",1192674718)))], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

frontend.state.close_modal_BANG_();

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
}
})], null),(function (){var iter__5520__auto__ = (function frontend$components$settings$date_format_row_$_iter__117225(s__117226){
return (new cljs.core.LazySeq(null,(function (){
var s__117226__$1 = s__117226;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117226__$1);
if(temp__5804__auto__){
var s__117226__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117226__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117226__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117228 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117227 = (0);
while(true){
if((i__117227 < size__5519__auto__)){
var format = cljs.core._nth(c__5518__auto__,i__117227);
cljs.core.chunk_append(b__117228,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),format], null),format], null));

var G__117325 = (i__117227 + (1));
i__117227 = G__117325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117228),frontend$components$settings$date_format_row_$_iter__117225(cljs.core.chunk_rest(s__117226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117228),null);
}
} else {
var format = cljs.core.first(s__117226__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),format], null),format], null),frontend$components$settings$date_format_row_$_iter__117225(cljs.core.rest(s__117226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(frontend.date.journal_title_formatters()));
})()], null)], null)], null)], null);
});
frontend.components.settings.workflow_row = (function frontend$components$settings$workflow_row(t,preferred_workflow){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"preferred_workflow"], null),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","preferred-workflow","settings-page/preferred-workflow",-899500557)) : t.call(null,new cljs.core.Keyword("settings-page","preferred-workflow","settings-page/preferred-workflow",-899500557)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-lg.rounded-md","div.max-w-lg.rounded-md",-1164491035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-select.is-small","select.form-select.is-small",1007249743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(preferred_workflow),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return frontend.handler.user.set_preferred_workflow_BANG_((function (p1__117229_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__117229_SHARP_,new cljs.core.Keyword(null,"now","now",-1650525531))){
return new cljs.core.Keyword(null,"now","now",-1650525531);
} else {
return new cljs.core.Keyword(null,"todo","todo",-1046442570);
}
})(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(frontend.util.evalue(e)))));
})], null),(function (){var iter__5520__auto__ = (function frontend$components$settings$workflow_row_$_iter__117230(s__117231){
return (new cljs.core.LazySeq(null,(function (){
var s__117231__$1 = s__117231;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117231__$1);
if(temp__5804__auto__){
var s__117231__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117231__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117231__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117233 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117232 = (0);
while(true){
if((i__117232 < size__5519__auto__)){
var workflow = cljs.core._nth(c__5518__auto__,i__117232);
cljs.core.chunk_append(b__117233,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(workflow),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(workflow)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(workflow,new cljs.core.Keyword(null,"now","now",-1650525531)))?"NOW/LATER":"TODO/DOING")], null));

var G__117326 = (i__117232 + (1));
i__117232 = G__117326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117233),frontend$components$settings$workflow_row_$_iter__117230(cljs.core.chunk_rest(s__117231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117233),null);
}
} else {
var workflow = cljs.core.first(s__117231__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(workflow),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(workflow)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(workflow,new cljs.core.Keyword(null,"now","now",-1650525531)))?"NOW/LATER":"TODO/DOING")], null),frontend$components$settings$workflow_row_$_iter__117230(cljs.core.rest(s__117231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"todo","todo",-1046442570)], null));
})()], null)], null)], null)], null);
});
frontend.components.settings.outdenting_row = (function frontend$components$settings$outdenting_row(t,logical_outdenting_QMARK_){
return frontend.components.settings.toggle("preferred_outdenting",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","preferred-outdenting","settings-page/preferred-outdenting",-641736419)) : t.call(null,new cljs.core.Keyword("settings-page","preferred-outdenting","settings-page/preferred-outdenting",-641736419))),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),frontend.components.settings.outdenting_hint(),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover ml-2",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null),frontend.components.svg.info())], null),logical_outdenting_QMARK_,frontend.handler.config.toggle_logical_outdenting_BANG_);
});
frontend.components.settings.showing_full_blocks = (function frontend$components$settings$showing_full_blocks(t,show_full_blocks_QMARK_){
return frontend.components.settings.toggle("show_full_blocks",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","show-full-blocks","settings-page/show-full-blocks",1786638364)) : t.call(null,new cljs.core.Keyword("settings-page","show-full-blocks","settings-page/show-full-blocks",1786638364))),show_full_blocks_QMARK_,frontend.handler.config.toggle_show_full_blocks_BANG_);
});
frontend.components.settings.preferred_pasting_file = (function frontend$components$settings$preferred_pasting_file(t,preferred_pasting_file_QMARK_){
return frontend.components.settings.toggle("preferred_pasting_file",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","preferred-pasting-file","settings-page/preferred-pasting-file",-880533391)) : t.call(null,new cljs.core.Keyword("settings-page","preferred-pasting-file","settings-page/preferred-pasting-file",-880533391))),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","preferred-pasting-file-hint","settings-page/preferred-pasting-file-hint",-1430361970)) : t.call(null,new cljs.core.Keyword("settings-page","preferred-pasting-file-hint","settings-page/preferred-pasting-file-hint",-1430361970))),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover ml-2",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null),frontend.components.svg.info())], null),preferred_pasting_file_QMARK_,frontend.handler.config.toggle_preferred_pasting_file_BANG_);
});
frontend.components.settings.auto_expand_row = (function frontend$components$settings$auto_expand_row(t,auto_expand_block_refs_QMARK_){
return frontend.components.settings.toggle("auto_expand_block_refs",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","auto-expand-block-refs","settings-page/auto-expand-block-refs",-501557671)) : t.call(null,new cljs.core.Keyword("settings-page","auto-expand-block-refs","settings-page/auto-expand-block-refs",-501557671))),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),frontend.components.settings.auto_expand_hint(),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover ml-2",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null),frontend.components.svg.info())], null),auto_expand_block_refs_QMARK_,frontend.handler.config.toggle_auto_expand_block_refs_BANG_);
});
frontend.components.settings.tooltip_row = (function frontend$components$settings$tooltip_row(t,enable_tooltip_QMARK_){
return frontend.components.settings.toggle("enable_tooltip",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-tooltip","settings-page/enable-tooltip",1761325062)) : t.call(null,new cljs.core.Keyword("settings-page","enable-tooltip","settings-page/enable-tooltip",1761325062))),enable_tooltip_QMARK_,(function (){
return frontend.handler.config.toggle_ui_enable_tooltip_BANG_();
}));
});
frontend.components.settings.shortcut_tooltip_row = (function frontend$components$settings$shortcut_tooltip_row(t,enable_shortcut_tooltip_QMARK_){
return frontend.components.settings.toggle("enable_tooltip",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-shortcut-tooltip","settings-page/enable-shortcut-tooltip",1996032597)) : t.call(null,new cljs.core.Keyword("settings-page","enable-shortcut-tooltip","settings-page/enable-shortcut-tooltip",1996032597))),enable_shortcut_tooltip_QMARK_,(function (){
return frontend.state.toggle_shortcut_tooltip_BANG_();
}));
});
frontend.components.settings.timetracking_row = (function frontend$components$settings$timetracking_row(t,enable_timetracking_QMARK_){
return frontend.components.settings.toggle("enable_timetracking",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-timetracking","settings-page/enable-timetracking",-953831670)) : t.call(null,new cljs.core.Keyword("settings-page","enable-timetracking","settings-page/enable-timetracking",-953831670))),enable_timetracking_QMARK_,(function (){
var value = cljs.core.not(enable_timetracking_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("feature","enable-timetracking?","feature/enable-timetracking?",1612021873),value);
}));
});
frontend.components.settings.update_home_page = (function frontend$components$settings$update_home_page(event){
var value = frontend.util.evalue(event);
if(clojure.string.blank_QMARK_(value)){
var home = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.PersistentArrayMap.EMPTY);
var new_home = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(home,new cljs.core.Keyword(null,"page","page",849072397));
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"default-home","default-home",171104159),new_home);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Home default page updated successfully!",new cljs.core.Keyword(null,"success","success",1890645906));
} else {
if(cljs.core.truth_((frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : frontend.db.page_exists_QMARK_.call(null,value)))){
var home = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"default-home","default-home",171104159),cljs.core.PersistentArrayMap.EMPTY);
var new_home = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(home,new cljs.core.Keyword(null,"page","page",849072397),value);
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"default-home","default-home",171104159),new_home);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Home default page updated successfully!",new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["The page \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\" doesn't exist yet. Please create that page first, and then try again."].join(''),new cljs.core.Keyword(null,"warning","warning",-1685650671));

}
}
});
frontend.components.settings.journal_row = (function frontend$components$settings$journal_row(enable_journals_QMARK_){
return frontend.components.settings.toggle("enable_journals",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","enable-journals","settings-page/enable-journals",-1792981415)], 0)),enable_journals_QMARK_,(function (){
var value = cljs.core.not(enable_journals_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("feature","enable-journals?","feature/enable-journals?",1609498182),value);
}));
});
frontend.components.settings.enable_all_pages_public_row = (function frontend$components$settings$enable_all_pages_public_row(t,enable_all_pages_public_QMARK_){
return frontend.components.settings.toggle("all pages public",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","enable-all-pages-public","settings-page/enable-all-pages-public",-1352366581)) : t.call(null,new cljs.core.Keyword("settings-page","enable-all-pages-public","settings-page/enable-all-pages-public",-1352366581))),enable_all_pages_public_QMARK_,(function (){
var value = cljs.core.not(enable_all_pages_public_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("publishing","all-pages-public?","publishing/all-pages-public?",-386830034),value);
}));
});
frontend.components.settings.zotero_settings_row = (function frontend$components$settings$zotero_settings_row(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center","div.it.sm:grid.sm:grid-cols-3.sm:gap-4.sm:items-center",-761433112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.block.text-sm.font-medium.leading-5.opacity-70","label.block.text-sm.font-medium.leading-5.opacity-70",643274172),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"zotero_settings"], null),"Zotero"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1.sm:mt-0.sm:col-span-2","div.mt-1.sm:mt-0.sm:col-span-2",1617581337),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings","settings",1556144875)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_settings_BANG_();

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"zotero-setting","zotero-setting",-1619504499)], null));
})], 0))], null)], null)], null);
});
frontend.components.settings.auto_push_row = (function frontend$components$settings$auto_push_row(_t,current_repo,enable_git_auto_push_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = current_repo;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.starts_with_QMARK_(current_repo,"https://");
} else {
return and__5041__auto__;
}
})())){
return frontend.components.settings.toggle("enable_git_auto_push","Enable Git auto push",enable_git_auto_push_QMARK_,(function (){
var value = cljs.core.not(enable_git_auto_push_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"git-auto-push","git-auto-push",2144454612),value);
}));
} else {
return null;
}
});
frontend.components.settings.usage_diagnostics_row = (function frontend$components$settings$usage_diagnostics_row(t,instrument_disabled_QMARK_){
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("usage-diagnostics",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","disable-sentry","settings-page/disable-sentry",-1347031056)) : t.call(null,new cljs.core.Keyword("settings-page","disable-sentry","settings-page/disable-sentry",-1347031056))),cljs.core.not(instrument_disabled_QMARK_),(function (){
return frontend.modules.instrumentation.core.disable_instrument(cljs.core.not(instrument_disabled_QMARK_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50","span.text-sm.opacity-50",1991571125),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","disable-sentry-desc","settings-page/disable-sentry-desc",594327150)) : t.call(null,new cljs.core.Keyword("settings-page","disable-sentry-desc","settings-page/disable-sentry-desc",594327150)))], null)], 0));
});
frontend.components.settings.clear_cache_row = (function frontend$components$settings$clear_cache_row(t){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","clear-cache","settings-page/clear-cache",-1602321055)) : t.call(null,new cljs.core.Keyword("settings-page","clear-cache","settings-page/clear-cache",-1602321055))),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","clear","settings-page/clear",-685296810)) : t.call(null,new cljs.core.Keyword("settings-page","clear","settings-page/clear",-685296810))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","clear-cache!","graph/clear-cache!",788497707)], null));
}),new cljs.core.Keyword(null,"-for","-for",-490432963),"clear_cache"], null));
});
frontend.components.settings.version_row = (function frontend$components$settings$version_row(t,version){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","current-version","settings-page/current-version",724725196)) : t.call(null,new cljs.core.Keyword("settings-page","current-version","settings-page/current-version",724725196))),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.app_updater(version),new cljs.core.Keyword(null,"-for","-for",-490432963),"current-version"], null));
});
frontend.components.settings.developer_mode_row = (function frontend$components$settings$developer_mode_row(t,developer_mode_QMARK_){
return frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("developer_mode",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","developer-mode","settings-page/developer-mode",1909434761)) : t.call(null,new cljs.core.Keyword("settings-page","developer-mode","settings-page/developer-mode",1909434761))),developer_mode_QMARK_,(function (){
var mode = cljs.core.not(developer_mode_QMARK_);
return frontend.state.set_developer_mode_BANG_(mode);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.opacity-50","div.text-sm.opacity-50",829333122),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","developer-mode-desc","settings-page/developer-mode-desc",1029179391)) : t.call(null,new cljs.core.Keyword("settings-page","developer-mode-desc","settings-page/developer-mode-desc",1029179391)))], null)], 0));
});
frontend.components.settings.plugin_enabled_switcher = rum.core.lazy_build(rum.core.build_defc,(function (t){
var value = frontend.state.lsp_enabled_QMARK__or_theme();
var vec__117235 = rum.core.use_state(value);
var on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117235,(0),null);
var set_on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117235,(1),null);
var on_toggle = (function (){
var v = cljs.core.not(on_QMARK_);
(set_on_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_on_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : set_on_QMARK_.call(null,v));

return frontend.storage.set(new cljs.core.Keyword("frontend.spec.storage","lsp-core-enabled","frontend.spec.storage/lsp-core-enabled",-1474488934),v);
});
var attrs117234 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(on_QMARK_,on_toggle,true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117234))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","gap-2"], null)], null),attrs117234], 0))):{'className':"flex items-center gap-2"}),((cljs.core.map_QMARK_(attrs117234))?[((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(value),on_QMARK_))?daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)) : t.call(null,new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0))):null)]:[daiquiri.interpreter.interpret(attrs117234),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(value),on_QMARK_))?daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)) : t.call(null,new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0))):null)]));
}),null,"frontend.components.settings/plugin-enabled-switcher");
frontend.components.settings.http_server_enabled_switcher = rum.core.lazy_build(rum.core.build_defc,(function (t){
var vec__117239 = rum.core.use_state(cljs.core.boolean$(frontend.storage.get(new cljs.core.Keyword("frontend.spec.storage","http-server-enabled","frontend.spec.storage/http-server-enabled",-1753032348))));
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117239,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117239,(1),null);
var vec__117242 = rum.core.use_state(value);
var on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117242,(0),null);
var set_on_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117242,(1),null);
var on_toggle = (function (){
var v = cljs.core.not(on_QMARK_);
(set_on_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_on_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : set_on_QMARK_.call(null,v));

return frontend.storage.set(new cljs.core.Keyword("frontend.spec.storage","http-server-enabled","frontend.spec.storage/http-server-enabled",-1753032348),v);
});
var attrs117238 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(on_QMARK_,on_toggle,true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117238))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","gap-2"], null)], null),attrs117238], 0))):{'className':"flex items-center gap-2"}),((cljs.core.map_QMARK_(attrs117238))?[((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(value),on_QMARK_))?daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)) : t.call(null,new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0))):null)]:[daiquiri.interpreter.interpret(attrs117238),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(value),on_QMARK_))?daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071)) : t.call(null,new cljs.core.Keyword("plugin","restart","plugin/restart",-927945071))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return logseq.api.relaunch();
}),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0))):null)]));
}),null,"frontend.components.settings/http-server-enabled-switcher");
frontend.components.settings.flashcards_enabled_switcher = rum.core.lazy_build(rum.core.build_defc,(function (enable_flashcards_QMARK_){
return daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enable_flashcards_QMARK_,(function (){
var value = cljs.core.not(enable_flashcards_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("feature","enable-flashcards?","feature/enable-flashcards?",1572039243),value);
}),true));
}),null,"frontend.components.settings/flashcards-enabled-switcher");
frontend.components.settings.user_proxy_settings = rum.core.lazy_build(rum.core.build_defc,(function (p__117245){
var map__117246 = p__117245;
var map__117246__$1 = cljs.core.__destructure_map(map__117246);
var agent_opts = map__117246__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117246__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117246__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117246__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117246__$1,new cljs.core.Keyword(null,"port","port",1534937262));
return daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-1","span.pr-1",-524129241),(function (){var G__117248 = type;
switch (G__117248) {
case "system":
return "System Default";

break;
case "direct":
return "Direct";

break;
default:
var and__5041__auto__ = protocol;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = host;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = port;
if(cljs.core.truth_(and__5041__auto____$2)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}

}
})()], null),frontend.ui.icon("edit")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_){
return frontend.components.plugins.user_proxy_settings_panel(agent_opts);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"https-proxy-panel","https-proxy-panel",-1589308406),new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
})], 0)));
}),null,"frontend.components.settings/user-proxy-settings");
frontend.components.settings.plugin_system_switcher_row = (function frontend$components$settings$plugin_system_switcher_row(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","plugin-system","settings-page/plugin-system",-1976608350)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.plugin_enabled_switcher(frontend.context.i18n.t)], null));
});
frontend.components.settings.http_server_switcher_row = (function frontend$components$settings$http_server_switcher_row(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),"HTTP APIs server",new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.http_server_enabled_switcher(frontend.context.i18n.t)], null));
});
frontend.components.settings.flashcards_switcher_row = (function frontend$components$settings$flashcards_switcher_row(enable_flashcards_QMARK_){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","enable-flashcards","settings-page/enable-flashcards",-1402029773)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.flashcards_enabled_switcher(enable_flashcards_QMARK_)], null));
});
frontend.components.settings.https_user_agent_row = (function frontend$components$settings$https_user_agent_row(agent_opts){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","network-proxy","settings-page/network-proxy",-895413144)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.user_proxy_settings(agent_opts)], null));
});
frontend.components.settings.auto_chmod_row = rum.core.lazy_build(rum.core.build_defcs,(function (state,t){
var enabled_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("feature","enable-automatic-chmod?","feature/enable-automatic-chmod?",2038808000)], null))))?true:frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("feature","enable-automatic-chmod?","feature/enable-automatic-chmod?",2038808000)], null)));
return daiquiri.interpreter.interpret(frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("automatic-chmod",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","auto-chmod","settings-page/auto-chmod",-199383742)) : t.call(null,new cljs.core.Keyword("settings-page","auto-chmod","settings-page/auto-chmod",-199383742))),enabled_QMARK_,(function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("feature","enable-automatic-chmod?","feature/enable-automatic-chmod?",2038808000)], null),cljs.core.not(enabled_QMARK_));

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword("feature","enable-automatic-chmod?","feature/enable-automatic-chmod?",2038808000),cljs.core.not(enabled_QMARK_)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50","span.text-sm.opacity-50",1991571125),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","auto-chmod-desc","settings-page/auto-chmod-desc",-1233790095)) : t.call(null,new cljs.core.Keyword("settings-page","auto-chmod-desc","settings-page/auto-chmod-desc",-1233790095)))], null)], 0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/auto-chmod-row");
frontend.components.settings.filename_format_row = (function frontend$components$settings$filename_format_row(){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","filename-format","settings-page/filename-format",-500341543)], 0)),new cljs.core.Keyword(null,"button-label","button-label",-1402542935),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","edit-setting","settings-page/edit-setting",1240078369)], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (_){
return frontend.components.conversion.files_breaking_changed();
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"filename-format-panel","filename-format-panel",-424080600),new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
})], null));
});
frontend.components.settings.native_titlebar_row = rum.core.lazy_build(rum.core.build_defcs,(function (state,t){
var enabled_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("window","native-titlebar?","window/native-titlebar?",195665142)], null));
return daiquiri.interpreter.interpret(frontend.components.settings.toggle.cljs$core$IFn$_invoke$arity$variadic("native-titlebar",(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","native-titlebar","settings-page/native-titlebar",1581577646)) : t.call(null,new cljs.core.Keyword("settings-page","native-titlebar","settings-page/native-titlebar",1581577646))),enabled_QMARK_,(function (){
if(cljs.core.truth_(confirm((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relaunch-confirm-to-work","relaunch-confirm-to-work",-672675357)) : t.call(null,new cljs.core.Keyword(null,"relaunch-confirm-to-work","relaunch-confirm-to-work",-672675357)))))){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("window","native-titlebar?","window/native-titlebar?",195665142)], null),cljs.core.not(enabled_QMARK_));

electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350),new cljs.core.Keyword("window","native-titlebar?","window/native-titlebar?",195665142),cljs.core.not(enabled_QMARK_)], 0));

return logseq.api.relaunch();
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-sm.opacity-50","span.text-sm.opacity-50",1991571125),(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("settings-page","native-titlebar-desc","settings-page/native-titlebar-desc",162616922)) : t.call(null,new cljs.core.Keyword("settings-page","native-titlebar-desc","settings-page/native-titlebar-desc",162616922)))], null)], 0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/native-titlebar-row");
frontend.components.settings.settings_general = rum.core.lazy_build(rum.core.build_defcs,(function (_state,current_repo){
var preferred_language = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)], null));
var theme = frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
var dark_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dark",theme);
var show_radix_themes_QMARK_ = true;
var system_theme_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822));
var switch_theme = ((dark_QMARK_)?"light":"dark");
var attrs117249 = frontend.components.settings.version_row(frontend.context.i18n.t,frontend.version.version);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117249))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-wrap","is-general"], null)], null),attrs117249], 0))):{'className':"panel-wrap is-general"}),((cljs.core.map_QMARK_(attrs117249))?[daiquiri.interpreter.interpret(frontend.components.settings.language_row(frontend.context.i18n.t,preferred_language)),daiquiri.interpreter.interpret(frontend.components.settings.theme_modes_row(frontend.context.i18n.t,switch_theme,system_theme_QMARK_,dark_QMARK_)),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.util.mac_QMARK_);
} else {
return and__5041__auto__;
}
})())?frontend.components.settings.native_titlebar_row(frontend.context.i18n.t):null),((show_radix_themes_QMARK_)?daiquiri.interpreter.interpret(frontend.components.settings.accent_color_row(false)):null),(cljs.core.truth_(frontend.config.global_config_enabled_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.edit_global_config_edn()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_config_edn()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_custom_css()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_export_css()):null)]:[daiquiri.interpreter.interpret(attrs117249),daiquiri.interpreter.interpret(frontend.components.settings.language_row(frontend.context.i18n.t,preferred_language)),daiquiri.interpreter.interpret(frontend.components.settings.theme_modes_row(frontend.context.i18n.t,switch_theme,system_theme_QMARK_,dark_QMARK_)),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.util.mac_QMARK_);
} else {
return and__5041__auto__;
}
})())?frontend.components.settings.native_titlebar_row(frontend.context.i18n.t):null),((show_radix_themes_QMARK_)?daiquiri.interpreter.interpret(frontend.components.settings.accent_color_row(false)):null),(cljs.core.truth_(frontend.config.global_config_enabled_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.edit_global_config_edn()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_config_edn()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_custom_css()):null),(cljs.core.truth_(current_repo)?daiquiri.interpreter.interpret(frontend.components.settings.edit_export_css()):null)]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/settings-general");
frontend.components.settings.settings_editor = rum.core.lazy_build(rum.core.build_defcs,(function (_state,current_repo){
var preferred_format = frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
var preferred_date_format = frontend.state.get_date_formatter();
var preferred_workflow = frontend.state.get_preferred_workflow();
var enable_timetracking_QMARK_ = frontend.state.enable_timetracking_QMARK_();
var enable_all_pages_public_QMARK_ = frontend.state.all_pages_public_QMARK_();
var logical_outdenting_QMARK_ = frontend.state.logical_outdenting_QMARK_();
var show_full_blocks_QMARK_ = frontend.state.show_full_blocks_QMARK_();
var preferred_pasting_file_QMARK_ = frontend.state.preferred_pasting_file_QMARK_();
var auto_expand_block_refs_QMARK_ = frontend.state.auto_expand_block_refs_QMARK_();
var enable_tooltip_QMARK_ = frontend.state.enable_tooltip_QMARK_();
var enable_shortcut_tooltip_QMARK_ = frontend.state.sub(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086));
var show_brackets_QMARK_ = frontend.state.show_brackets_QMARK_();
var enable_git_auto_push_QMARK_ = frontend.state.enable_git_auto_push_QMARK_(current_repo);
var attrs117250 = frontend.components.settings.file_format_row(frontend.context.i18n.t,preferred_format);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117250))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-wrap","is-editor"], null)], null),attrs117250], 0))):{'className':"panel-wrap is-editor"}),((cljs.core.map_QMARK_(attrs117250))?[daiquiri.interpreter.interpret(frontend.components.settings.date_format_row(frontend.context.i18n.t,preferred_date_format)),daiquiri.interpreter.interpret(frontend.components.settings.workflow_row(frontend.context.i18n.t,preferred_workflow)),daiquiri.interpreter.interpret(frontend.components.settings.show_brackets_row(frontend.context.i18n.t,show_brackets_QMARK_)),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.switch_spell_check_row(frontend.context.i18n.t):null),daiquiri.interpreter.interpret(frontend.components.settings.outdenting_row(frontend.context.i18n.t,logical_outdenting_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.showing_full_blocks(frontend.context.i18n.t,show_full_blocks_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.preferred_pasting_file(frontend.context.i18n.t,preferred_pasting_file_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.auto_expand_row(frontend.context.i18n.t,auto_expand_block_refs_QMARK_)),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:daiquiri.interpreter.interpret(frontend.components.settings.shortcut_tooltip_row(frontend.context.i18n.t,enable_shortcut_tooltip_QMARK_))),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:daiquiri.interpreter.interpret(frontend.components.settings.tooltip_row(frontend.context.i18n.t,enable_tooltip_QMARK_))),daiquiri.interpreter.interpret(frontend.components.settings.timetracking_row(frontend.context.i18n.t,enable_timetracking_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.enable_all_pages_public_row(frontend.context.i18n.t,enable_all_pages_public_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.auto_push_row(frontend.context.i18n.t,current_repo,enable_git_auto_push_QMARK_))]:[daiquiri.interpreter.interpret(attrs117250),daiquiri.interpreter.interpret(frontend.components.settings.date_format_row(frontend.context.i18n.t,preferred_date_format)),daiquiri.interpreter.interpret(frontend.components.settings.workflow_row(frontend.context.i18n.t,preferred_workflow)),daiquiri.interpreter.interpret(frontend.components.settings.show_brackets_row(frontend.context.i18n.t,show_brackets_QMARK_)),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.switch_spell_check_row(frontend.context.i18n.t):null),daiquiri.interpreter.interpret(frontend.components.settings.outdenting_row(frontend.context.i18n.t,logical_outdenting_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.showing_full_blocks(frontend.context.i18n.t,show_full_blocks_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.preferred_pasting_file(frontend.context.i18n.t,preferred_pasting_file_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.auto_expand_row(frontend.context.i18n.t,auto_expand_block_refs_QMARK_)),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:daiquiri.interpreter.interpret(frontend.components.settings.shortcut_tooltip_row(frontend.context.i18n.t,enable_shortcut_tooltip_QMARK_))),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?null:daiquiri.interpreter.interpret(frontend.components.settings.tooltip_row(frontend.context.i18n.t,enable_tooltip_QMARK_))),daiquiri.interpreter.interpret(frontend.components.settings.timetracking_row(frontend.context.i18n.t,enable_timetracking_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.enable_all_pages_public_row(frontend.context.i18n.t,enable_all_pages_public_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.auto_push_row(frontend.context.i18n.t,current_repo,enable_git_auto_push_QMARK_))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/settings-editor");
frontend.components.settings.settings_git = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.core.create_element("div",{'className':"panel-wrap"},[daiquiri.core.create_element("div",{'className':"text-sm my-4"},[frontend.ui.admonition(new cljs.core.Keyword(null,"tip","tip",1221810860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","git-tip","settings-page/git-tip",-1231187294)], 0))], null)),(function (){var attrs117253 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","git-desc-1","settings-page/git-desc-1",1764142740)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117253))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","opacity-50","my-4"], null)], null),attrs117253], 0))):{'className':"text-sm opacity-50 my-4"}),((cljs.core.map_QMARK_(attrs117253))?null:[daiquiri.interpreter.interpret(attrs117253)]));
})(),daiquiri.core.create_element("br",null,null),daiquiri.core.create_element("br",null,null),(function (){var attrs117258 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","git-desc-2","settings-page/git-desc-2",438169741)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117258))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","opacity-50","my-4"], null)], null),attrs117258], 0))):{'className':"text-sm opacity-50 my-4"}),((cljs.core.map_QMARK_(attrs117258))?null:[daiquiri.interpreter.interpret(attrs117258)]));
})(),daiquiri.core.create_element("a",{'href':"https://git-scm.com/",'target':"_blank"},["Git"]),(function (){var attrs117261 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","git-desc-3","settings-page/git-desc-3",-1595310248)], 0));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117261))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","opacity-50","my-4"], null)], null),attrs117261], 0))):{'className':"text-sm opacity-50 my-4"}),((cljs.core.map_QMARK_(attrs117261))?null:[daiquiri.interpreter.interpret(attrs117261)]));
})()]),daiquiri.core.create_element("br",null,null),frontend.components.settings.switch_git_auto_commit_row(frontend.context.i18n.t),frontend.components.settings.switch_git_commit_on_close_row(frontend.context.i18n.t),frontend.components.settings.git_auto_commit_seconds(frontend.context.i18n.t)]);
}),null,"frontend.components.settings/settings-git");
frontend.components.settings.settings_advanced = rum.core.lazy_build(rum.core.build_defc,(function (current_repo){
var instrument_disabled_QMARK_ = frontend.state.sub(new cljs.core.Keyword("instrument","disabled?","instrument/disabled?",165654178));
var developer_mode_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878)], null));
var https_agent_opts = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
var attrs117262 = (cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.win32_QMARK_;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.electron_QMARK_();
} else {
return and__5041__auto__;
}
})())?frontend.components.settings.app_auto_update_row(frontend.context.i18n.t):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117262))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-wrap","is-advanced"], null)], null),attrs117262], 0))):{'className':"panel-wrap is-advanced"}),((cljs.core.map_QMARK_(attrs117262))?[daiquiri.interpreter.interpret(frontend.components.settings.usage_diagnostics_row(frontend.context.i18n.t,instrument_disabled_QMARK_)),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:daiquiri.interpreter.interpret(frontend.components.settings.developer_mode_row(frontend.context.i18n.t,developer_mode_QMARK_))),(cljs.core.truth_(frontend.util.electron_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.https_user_agent_row(https_agent_opts)):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.auto_chmod_row(frontend.context.i18n.t):null),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(current_repo)));
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.components.settings.filename_format_row()):null),daiquiri.interpreter.interpret(frontend.components.settings.clear_cache_row(frontend.context.i18n.t)),frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","clear-cache-warning","settings-page/clear-cache-warning",410812420)], 0))], null))]:[daiquiri.interpreter.interpret(attrs117262),daiquiri.interpreter.interpret(frontend.components.settings.usage_diagnostics_row(frontend.context.i18n.t,instrument_disabled_QMARK_)),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?null:daiquiri.interpreter.interpret(frontend.components.settings.developer_mode_row(frontend.context.i18n.t,developer_mode_QMARK_))),(cljs.core.truth_(frontend.util.electron_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.https_user_agent_row(https_agent_opts)):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.components.settings.auto_chmod_row(frontend.context.i18n.t):null),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(current_repo)));
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.components.settings.filename_format_row()):null),daiquiri.interpreter.interpret(frontend.components.settings.clear_cache_row(frontend.context.i18n.t)),frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","clear-cache-warning","settings-page/clear-cache-warning",410812420)], 0))], null))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/settings-advanced");
frontend.components.settings.sync_enabled_switcher = rum.core.lazy_build(rum.core.build_defc,(function (enabled_QMARK_){
return daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled_QMARK_,(function (){
return frontend.handler.file_sync.set_sync_enabled_BANG_(cljs.core.not(enabled_QMARK_));
}),true));
}),null,"frontend.components.settings/sync-enabled-switcher");
frontend.components.settings.sync_diff_merge_enabled_switcher = rum.core.lazy_build(rum.core.build_defc,(function (enabled_QMARK_){
return daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled_QMARK_,(function (){
return frontend.handler.file_sync.set_sync_diff_merge_enabled_BANG_(cljs.core.not(enabled_QMARK_));
}),true));
}),null,"frontend.components.settings/sync-diff-merge-enabled-switcher");
frontend.components.settings.sync_switcher_row = (function frontend$components$settings$sync_switcher_row(enabled_QMARK_){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync","settings-page/sync",-1241342933)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.sync_enabled_switcher(enabled_QMARK_)], null));
});
frontend.components.settings.sync_diff_merge_switcher_row = (function frontend$components$settings$sync_diff_merge_switcher_row(enabled_QMARK_){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-diff-merge","settings-page/sync-diff-merge",-128695381)], 0)))," (Experimental!)"].join(''),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.sync_diff_merge_enabled_switcher(enabled_QMARK_),new cljs.core.Keyword(null,"desc","desc",2093485764),frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-diff-merge-desc","settings-page/sync-diff-merge-desc",-959868849)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-diff-merge-warn","settings-page/sync-diff-merge-warn",1790952981)], 0))], null)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover ml-2",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null),frontend.components.svg.info())], null));
});
frontend.components.settings.whiteboards_enabled_switcher = rum.core.lazy_build(rum.core.build_defc,(function (enabled_QMARK_){
return daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(enabled_QMARK_,(function (){
var value = cljs.core.not(enabled_QMARK_);
return frontend.handler.config.set_config_BANG_(new cljs.core.Keyword("feature","enable-whiteboards?","feature/enable-whiteboards?",-52089888),value);
}),true));
}),null,"frontend.components.settings/whiteboards-enabled-switcher");
frontend.components.settings.whiteboards_switcher_row = (function frontend$components$settings$whiteboards_switcher_row(enabled_QMARK_){
return frontend.components.settings.row_with_button_action(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-label","left-label",-1662718913),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","enable-whiteboards","settings-page/enable-whiteboards",-739283258)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),frontend.components.settings.whiteboards_enabled_switcher(enabled_QMARK_)], null));
});
frontend.components.settings.settings_account_usage_description = rum.core.lazy_build(rum.core.build_defc,(function (pro_account_QMARK_,graph_usage){
var count_usage = cljs.core.count(graph_usage);
var count_limit = (cljs.core.truth_(pro_account_QMARK_)?(10):(1));
var count_percent = Math.round(((count_usage / count_limit) / 0.01));
var storage_usage = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"used-gbs","used-gbs",271660092),graph_usage));
var storage_usage_formatted = (((storage_usage === (0)))?"0.0":(((storage_usage < 0.01))?"Less than 0.01":goog.string.format("%.2f",storage_usage)
));
var default_storage_limit = (cljs.core.truth_(pro_account_QMARK_)?(10):0.05);
var storage_limit = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__117263_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(graph_usage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__117263_SHARP_,new cljs.core.Keyword(null,"limit-gbs","limit-gbs",-997314467)], null),default_storage_limit);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),count_limit)));
var storage_percent = ((storage_usage / storage_limit) / 0.01);
var storage_percent_formatted = goog.string.format("%.1f",storage_percent);
var attrs117264 = (cljs.core.truth_(pro_account_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),goog.string.format("%s of %s synced graphs ",count_usage,count_limit),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-white","strong.text-white",1320859471),goog.string.format("(%s%%)",count_percent)], null),", "], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117264))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs117264], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs117264))?[goog.string.format("%sGB of %sGB total storage ",storage_usage_formatted,storage_limit),daiquiri.core.create_element("strong",{'className':"text-white"},[goog.string.format("(%s%%)",storage_percent_formatted)])]:[daiquiri.interpreter.interpret(attrs117264),goog.string.format("%sGB of %sGB total storage ",storage_usage_formatted,storage_limit),daiquiri.core.create_element("strong",{'className':"text-white"},[goog.string.format("(%s%%)",storage_percent_formatted)])]));
}),null,"frontend.components.settings/settings-account-usage-description");
frontend.components.settings.settings_account_usage_graphs = rum.core.lazy_build(rum.core.build_defc,(function (_pro_account_QMARK_,graph_usage){
if(((0) < cljs.core.count(graph_usage))){
return daiquiri.core.create_element("div",{'style':{'gridTemplateColumns':["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(graph_usage)),", 1fr)"].join('')},'className':"grid gap-3"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$settings$iter__117265(s__117266){
return (new cljs.core.LazySeq(null,(function (){
var s__117266__$1 = s__117266;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117266__$1);
if(temp__5804__auto__){
var s__117266__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117266__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117266__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117268 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117267 = (0);
while(true){
if((i__117267 < size__5519__auto__)){
var map__117269 = cljs.core._nth(c__5518__auto__,i__117267);
var map__117269__$1 = cljs.core.__destructure_map(map__117269);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var used_percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117269__$1,new cljs.core.Keyword(null,"used-percent","used-percent",-1822070047));
var color = ((((100) <= used_percent))?"bg-red-500":"bg-blue-500");
cljs.core.chunk_append(b__117268,daiquiri.core.create_element("div",{'tooltip':name,'className':"rounded-full w-full h-2 bg-black/50"},[daiquiri.core.create_element("div",{'style':{'width':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(used_percent),"%"].join(''),'minWidth':"0.5rem",'maxWidth':"100%"},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-full","h-2",color], null))},[])]));

var G__117328 = (i__117267 + (1));
i__117267 = G__117328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117268),frontend$components$settings$iter__117265(cljs.core.chunk_rest(s__117266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117268),null);
}
} else {
var map__117270 = cljs.core.first(s__117266__$2);
var map__117270__$1 = cljs.core.__destructure_map(map__117270);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117270__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var used_percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117270__$1,new cljs.core.Keyword(null,"used-percent","used-percent",-1822070047));
var color = ((((100) <= used_percent))?"bg-red-500":"bg-blue-500");
return cljs.core.cons(daiquiri.core.create_element("div",{'tooltip':name,'className':"rounded-full w-full h-2 bg-black/50"},[daiquiri.core.create_element("div",{'style':{'width':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(used_percent),"%"].join(''),'minWidth':"0.5rem",'maxWidth':"100%"},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rounded-full","h-2",color], null))},[])]),frontend$components$settings$iter__117265(cljs.core.rest(s__117266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(graph_usage);
})())]);
} else {
return null;
}
}),null,"frontend.components.settings/settings-account-usage-graphs");
frontend.components.settings.settings_account = rum.core.lazy_build(rum.core.build_defc,(function (){
var current_graph_uuid = frontend.state.sub_current_file_sync_graph_uuid();
var graph_usage = frontend.state.get_remote_graph_usage();
var current_graph_is_remote_QMARK_ = (function (){var fexpr__117271 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uuid","uuid",-2145095719),graph_usage));
return (fexpr__117271.cljs$core$IFn$_invoke$arity$1 ? fexpr__117271.cljs$core$IFn$_invoke$arity$1(current_graph_uuid) : fexpr__117271.call(null,current_graph_uuid));
})();
var logged_in_QMARK_ = frontend.handler.user.logged_in_QMARK_();
var user_info = frontend.state.get_user_info();
var paid_user_QMARK_ = (function (){var G__117273 = new cljs.core.Keyword(null,"LemonStatus","LemonStatus",-1872117472).cljs$core$IFn$_invoke$arity$1(user_info);
var fexpr__117272 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cancelled",null,"on_trial",null,"active",null], null), null);
return (fexpr__117272.cljs$core$IFn$_invoke$arity$1 ? fexpr__117272.cljs$core$IFn$_invoke$arity$1(G__117273) : fexpr__117272.call(null,G__117273));
})();
var gift_user_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["pro",null], null), null),new cljs.core.Keyword(null,"UserGroups","UserGroups",1693861388).cljs$core$IFn$_invoke$arity$1(user_info));
var pro_account_QMARK_ = (function (){var or__5043__auto__ = paid_user_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return gift_user_QMARK_;
}
})();
var expiration_date = (function (){var G__117274 = user_info;
var G__117274__$1 = (((G__117274 == null))?null:new cljs.core.Keyword(null,"LemonEndsAt","LemonEndsAt",-914445868).cljs$core$IFn$_invoke$arity$1(G__117274));
if((G__117274__$1 == null)){
return null;
} else {
return frontend.date.parse_iso(G__117274__$1);
}
})();
var renewal_date = (function (){var G__117275 = user_info;
var G__117275__$1 = (((G__117275 == null))?null:new cljs.core.Keyword(null,"LemonRenewsAt","LemonRenewsAt",-398590396).cljs$core$IFn$_invoke$arity$1(G__117275));
if((G__117275__$1 == null)){
return null;
} else {
return frontend.date.parse_iso(G__117275__$1);
}
})();
var has_subscribed_QMARK_ = (!((new cljs.core.Keyword(null,"LemonStatus","LemonStatus",-1872117472).cljs$core$IFn$_invoke$arity$1(user_info) == null)));
return daiquiri.core.create_element("div",{'className':"panel-wrap is-features mb-8"},[(function (){var attrs117276 = ((logged_in_QMARK_)?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-3.gap-8.pt-2","div.grid.grid-cols-3.gap-8.pt-2",290782413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current plan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full bg-gray-500/10 rounded-lg p-4 flex flex-col gap-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-4.items-center","div.flex.gap-4.items-center",1354546562),(cljs.core.truth_(pro_account_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),"Pro"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),"Free"], null)),((has_subscribed_QMARK_)?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Manage plan",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"icon","icon",1679606541),"upload"], null)], 0)):((cljs.core.not(pro_account_QMARK_))?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Upgrade plan",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center",new cljs.core.Keyword(null,"icon","icon",1679606541),"upload",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.upgrade], null)], 0)):null
))], null),frontend.components.settings.settings_account_usage_graphs(pro_account_QMARK_,graph_usage),frontend.components.settings.settings_account_usage_description(pro_account_QMARK_,graph_usage),(cljs.core.truth_(current_graph_is_remote_QMARK_)?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Deactivate syncing",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"icon","icon",1679606541),"cloud-off"], null)], 0)):frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Activate syncing",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center",new cljs.core.Keyword(null,"background","background",-863952629),"blue",new cljs.core.Keyword(null,"icon","icon",1679606541),"cloud",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.components.file_sync.maybe_onboarding_show(new cljs.core.Keyword(null,"sync-initiate","sync-initiate",1636471756));
})], null)], 0)))], null)], null),((has_subscribed_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Billing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2.flex.flex-col.gap-4","div.col-span-2.flex.flex-col.gap-4",1390783784),(cljs.core.truth_((function (){var and__5041__auto__ = renewal_date;
if(cljs.core.truth_(and__5041__auto__)){
return (expiration_date == null);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),"Next billing date: ",frontend.date.get_locale_string(renewal_date)], null)], null):((((new Date()) < expiration_date))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),"Pro plan expires on: ",frontend.date.get_locale_string(expiration_date)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.font-semibold","strong.font-semibold",1691174885),"Pro plan expired on: ",frontend.date.get_locale_string(expiration_date)], null)], null)
)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Open invoices",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-8 p-1 justify-center",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"icon","icon",1679606541),"receipt"], null)], 0))], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Profile"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2.grid.grid-cols-2.gap-4","div.col-span-2.grid.grid-cols-2.gap-4",-701221645),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2.box-border","div.flex.flex-col.gap-2.box-border",-278902786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"basis-1/2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.font-semibold","label.text-sm.font-semibold",1064326551),"First name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border.px-2.py-1.box-border","input.rounded.border.px-2.py-1.box-border",1870923625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-blue-500 bg-black/25 w-full"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"basis-1/2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.font-semibold","label.text-sm.font-semibold",1064326551),"Last name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border.px-2.py-1.box-border","input.rounded.border.px-2.py-1.box-border",1870923625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-blue-500 bg-black/25 w-full"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.flex.flex-col.gap-2.col-span-2","div.flex-1.flex.flex-col.gap-2.col-span-2",-2141170604),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-sm.font-semibold","label.text-sm.font-semibold",1064326551),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.rounded.border.px-2.py-1.box-border","input.rounded.border.px-2.py-1.box-border",1870923625),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-blue-500 bg-black/25",new cljs.core.Keyword(null,"value","value",305978217),frontend.handler.user.email()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Authentication"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2.gap-4","div.grid.grid-cols-2.gap-4",-491431037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logout","logout",1418564329)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center w-full",new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"icon","icon",1679606541),"logout",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Reset password",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center w-full",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"icon","icon",1679606541),"key",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2","div.col-span-2",-228761363),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Delete Account",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 h-8 justify-center w-full",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"background","background",-863952629),"red"], null)], 0))], null)], null)], null)], null):(((!(logged_in_QMARK_)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-3.gap-8.pt-2","div.grid.grid-cols-3.gap-8.pt-2",290782413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Authentication"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2.flex.flex-wrap.gap-4","div.col-span-2.flex.flex-wrap.gap-4",1230706020),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.text-white","div.w-full.text-white",-488938165),"With a Logseq account, you can access cloud-based services like Logseq Sync and alpha/beta features."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Sign up",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 w-full text-center justify-center",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_settings_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538)], null));
})], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login","login",55217519)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"login",new cljs.core.Keyword(null,"class","class",-2030961996),"h-8 w-full text-center justify-center",new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_settings_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538)], null));
})], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3.flex.flex-col.gap-4","div.col-span-3.flex.flex-col.gap-4",157916243),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20 p-4 rounded-lg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.w-full.items-center","div.flex.w-full.items-center",802327045),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 text-lg"], null),"Discover the power of ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white/80"], null),"Logseq Sync"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 bg-gradient-to-r from-white/10 to-transparent p-3 rounded-lg flex items-center gap-2 px-5 ml-5"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-3.h-3.rounded-full.bg-green-500","div.w-3.h-3.rounded-full.bg-green-500",-1431849955)], null),"Synced"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.w-full.gap-4","div.flex.w-full.gap-4",-1379783377),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 bg-black/50 rounded-lg p-4 pt-10 relative flex flex-col gap-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.top-0.left-4.bg-gray-700.uppercase.px-2.py-1.rounded-b-lg.font-bold.text-xs","div.absolute.top-0.left-4.bg-gray-700.uppercase.px-2.py-1.rounded-b-lg.font-bold.text-xs",987025160),"Free"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-white.text-xl.font-normal","strong.text-white.text-xl.font-normal",1050344267),"$0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-white.font-bold","div.text-white.font-bold",1366308171),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-[2.5rem] "], null),"Get started with basic syncing"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-xs.list-none.m-0.flex.flex-col.gap-0.5","ul.text-xs.list-none.m-0.flex.flex-col.gap-0.5",-2115791392),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Unlimited unsynced graphs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"1 synced graph (up to 50MB, notes only)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"No asset syncing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Access to core Logseq features"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 bg-black/50 rounded-lg p-4 pt-10 relative flex flex-col gap-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.top-0.left-4.bg-blue-700.uppercase.px-2.py-1.rounded-b-lg.font-bold.text-xs","div.absolute.top-0.left-4.bg-blue-700.uppercase.px-2.py-1.rounded-b-lg.font-bold.text-xs",-1751797796),"Pro"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.text-white.text-xl.font-normal","strong.text-white.text-xl.font-normal",1050344267),"$10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.font-base","span.text-xs.font-base",2010205099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-0.5"], null),"/ month"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-white.font-bold","div.text-white.font-bold",1366308171),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-[2.5rem]"], null),"Unlock advanced syncing and more"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.text-xs.list-none.m-0.flex.flex-col.gap-0.5","ul.text-xs.list-none.m-0.flex.flex-col.gap-0.5",-2115791392),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Unlimited unsynced graphs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"10 synced graphs (up to 5GB each)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Sync assets up to 100MB per file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Early access to alpha/beta features"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Upcoming cloud-based features, including Logseq Publish"], null)], null)], null)], null)], null)], null):null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117276))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1","sm:mt-0","sm:col-span-2"], null)], null),attrs117276], 0))):{'className':"mt-1 sm:mt-0 sm:col-span-2"}),((cljs.core.map_QMARK_(attrs117276))?null:[daiquiri.interpreter.interpret(attrs117276)]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/settings-account");
frontend.components.settings.settings_features = rum.core.lazy_build(rum.core.build_defc,(function (){
var current_repo = frontend.state.get_current_repo();
var enable_journals_QMARK_ = frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1(current_repo);
var enable_flashcards_QMARK_ = frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1(current_repo);
var enable_sync_QMARK_ = frontend.state.enable_sync_QMARK_();
var enable_sync_diff_merge_QMARK_ = frontend.state.enable_sync_diff_merge_QMARK_();
var enable_whiteboards_QMARK_ = frontend.state.enable_whiteboards_QMARK_.cljs$core$IFn$_invoke$arity$1(current_repo);
var logged_in_QMARK_ = frontend.handler.user.logged_in_QMARK_();
var attrs117277 = frontend.components.settings.journal_row(enable_journals_QMARK_);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117277))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-wrap","is-features","mb-8"], null)], null),attrs117277], 0))):{'className':"panel-wrap is-features mb-8"}),((cljs.core.map_QMARK_(attrs117277))?[(((!(enable_journals_QMARK_)))?daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center"},[daiquiri.core.create_element("label",{'className':"block text-sm font-medium leading-5 opacity-70",'htmlFor':"default page"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","home-default-page","settings-page/home-default-page",-2049462828)], 0)))]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md sm:max-w-xs"},[daiquiri.core.create_element("input",{'id':"home-default-page",'defaultValue':frontend.state.sub_default_home_page(),'onBlur':frontend.components.settings.update_home_page,'onKeyPress':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return frontend.components.settings.update_home_page(e);
} else {
return null;
}
}),'className':"form-input is-small transition duration-150 ease-in-out"},[])])])]):null),daiquiri.interpreter.interpret(frontend.components.settings.whiteboards_switcher_row(enable_whiteboards_QMARK_)),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.feature_plugin_system_on_QMARK_;
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.components.settings.plugin_system_switcher_row()):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.http_server_switcher_row()):null),daiquiri.interpreter.interpret(frontend.components.settings.flashcards_switcher_row(enable_flashcards_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.zotero_settings_row()),((frontend.util.web_platform_QMARK_)?null:daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("hr",null,null),((logged_in_QMARK_)?(function (){var attrs117280 = frontend.handler.user.email();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117280))?daiquiri.interpreter.element_attributes(attrs117280):null),((cljs.core.map_QMARK_(attrs117280))?[(function (){var attrs117281 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logout","logout",1418564329)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1",new cljs.core.Keyword(null,"icon","icon",1679606541),"logout",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117281))?daiquiri.interpreter.element_attributes(attrs117281):null),((cljs.core.map_QMARK_(attrs117281))?null:[daiquiri.interpreter.interpret(attrs117281)]));
})()]:[daiquiri.interpreter.interpret(attrs117280),(function (){var attrs117282 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logout","logout",1418564329)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1",new cljs.core.Keyword(null,"icon","icon",1679606541),"logout",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117282))?daiquiri.interpreter.element_attributes(attrs117282):null),((cljs.core.map_QMARK_(attrs117282))?null:[daiquiri.interpreter.interpret(attrs117282)]));
})()]));
})():(function (){var attrs117283 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login","login",55217519)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1",new cljs.core.Keyword(null,"icon","icon",1679606541),"login",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_settings_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538)], null));
})], null)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117283))?daiquiri.interpreter.element_attributes(attrs117283):null),((cljs.core.map_QMARK_(attrs117283))?[(function (){var attrs117284 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","login-prompt","settings-page/login-prompt",794382699)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117284))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","opacity-50"], null)], null),attrs117284], 0))):{'className':"text-sm opacity-50"}),((cljs.core.map_QMARK_(attrs117284))?null:[daiquiri.interpreter.interpret(attrs117284)]));
})()]:[daiquiri.interpreter.interpret(attrs117283),(function (){var attrs117285 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","login-prompt","settings-page/login-prompt",794382699)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117285))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","opacity-50"], null)], null),attrs117285], 0))):{'className':"text-sm opacity-50"}),((cljs.core.map_QMARK_(attrs117285))?null:[daiquiri.interpreter.interpret(attrs117285)]));
})()]));
})())])),((frontend.util.web_platform_QMARK_)?null:daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center"},[(function (){var attrs117286 = frontend.ui.icon(((logged_in_QMARK_)?"lock-open":"lock"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-1"], null));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs117286))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","font-medium","leading-5","self-start","mt-1"], null)], null),attrs117286], 0))):{'className':"flex font-medium leading-5 self-start mt-1"}),((cljs.core.map_QMARK_(attrs117286))?[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","beta-features","settings-page/beta-features",-1456488418)], 0)))]:[daiquiri.interpreter.interpret(attrs117286),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","beta-features","settings-page/beta-features",-1456488418)], 0)))]));
})()]),daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-col","gap-4",(cljs.core.truth_(frontend.handler.user.alpha_or_beta_user_QMARK_)?null:"opacity-50 pointer-events-none cursor-not-allowed")], null))},[daiquiri.interpreter.interpret(frontend.components.settings.sync_switcher_row(enable_sync_QMARK_)),(cljs.core.truth_(enable_sync_QMARK_)?daiquiri.interpreter.interpret(frontend.components.settings.sync_diff_merge_switcher_row(enable_sync_diff_merge_QMARK_)):null),(function (){var attrs117287 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-1","settings-page/sync-desc-1",553194869)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117287))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs117287], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs117287))?[daiquiri.core.create_element("a",{'href':"https://blog.logseq.com/how-to-setup-and-use-logseq-sync/",'target':"_blank",'className':"mx-1"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-2","settings-page/sync-desc-2",-518718326)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-3","settings-page/sync-desc-3",1385541959)], 0)))]:[daiquiri.interpreter.interpret(attrs117287),daiquiri.core.create_element("a",{'href':"https://blog.logseq.com/how-to-setup-and-use-logseq-sync/",'target':"_blank",'className':"mx-1"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-2","settings-page/sync-desc-2",-518718326)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-3","settings-page/sync-desc-3",1385541959)], 0)))]));
})()])]))]:[daiquiri.interpreter.interpret(attrs117277),(((!(enable_journals_QMARK_)))?daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center"},[daiquiri.core.create_element("label",{'className':"block text-sm font-medium leading-5 opacity-70",'htmlFor':"default page"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","home-default-page","settings-page/home-default-page",-2049462828)], 0)))]),daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("div",{'className':"max-w-lg rounded-md sm:max-w-xs"},[daiquiri.core.create_element("input",{'id':"home-default-page",'defaultValue':frontend.state.sub_default_home_page(),'onBlur':frontend.components.settings.update_home_page,'onKeyPress':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",frontend.util.ekey(e))){
return frontend.components.settings.update_home_page(e);
} else {
return null;
}
}),'className':"form-input is-small transition duration-150 ease-in-out"},[])])])]):null),daiquiri.interpreter.interpret(frontend.components.settings.whiteboards_switcher_row(enable_whiteboards_QMARK_)),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.feature_plugin_system_on_QMARK_;
} else {
return and__5041__auto__;
}
})())?daiquiri.interpreter.interpret(frontend.components.settings.plugin_system_switcher_row()):null),(cljs.core.truth_(frontend.util.electron_QMARK_())?daiquiri.interpreter.interpret(frontend.components.settings.http_server_switcher_row()):null),daiquiri.interpreter.interpret(frontend.components.settings.flashcards_switcher_row(enable_flashcards_QMARK_)),daiquiri.interpreter.interpret(frontend.components.settings.zotero_settings_row()),((frontend.util.web_platform_QMARK_)?null:daiquiri.core.create_element("div",{'className':"mt-1 sm:mt-0 sm:col-span-2"},[daiquiri.core.create_element("hr",null,null),((logged_in_QMARK_)?(function (){var attrs117290 = frontend.handler.user.email();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117290))?daiquiri.interpreter.element_attributes(attrs117290):null),((cljs.core.map_QMARK_(attrs117290))?[(function (){var attrs117291 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logout","logout",1418564329)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1",new cljs.core.Keyword(null,"icon","icon",1679606541),"logout",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117291))?daiquiri.interpreter.element_attributes(attrs117291):null),((cljs.core.map_QMARK_(attrs117291))?null:[daiquiri.interpreter.interpret(attrs117291)]));
})()]:[daiquiri.interpreter.interpret(attrs117290),(function (){var attrs117292 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logout","logout",1418564329)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1",new cljs.core.Keyword(null,"icon","icon",1679606541),"logout",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.user.logout], null)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117292))?daiquiri.interpreter.element_attributes(attrs117292):null),((cljs.core.map_QMARK_(attrs117292))?null:[daiquiri.interpreter.interpret(attrs117292)]));
})()]));
})():(function (){var attrs117293 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"login","login",55217519)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-1",new cljs.core.Keyword(null,"icon","icon",1679606541),"login",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_settings_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","login","user/login",51503538)], null));
})], null)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117293))?daiquiri.interpreter.element_attributes(attrs117293):null),((cljs.core.map_QMARK_(attrs117293))?[(function (){var attrs117294 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","login-prompt","settings-page/login-prompt",794382699)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117294))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","opacity-50"], null)], null),attrs117294], 0))):{'className':"text-sm opacity-50"}),((cljs.core.map_QMARK_(attrs117294))?null:[daiquiri.interpreter.interpret(attrs117294)]));
})()]:[daiquiri.interpreter.interpret(attrs117293),(function (){var attrs117295 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","login-prompt","settings-page/login-prompt",794382699)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs117295))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","opacity-50"], null)], null),attrs117295], 0))):{'className':"text-sm opacity-50"}),((cljs.core.map_QMARK_(attrs117295))?null:[daiquiri.interpreter.interpret(attrs117295)]));
})()]));
})())])),((frontend.util.web_platform_QMARK_)?null:daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center"},[(function (){var attrs117296 = frontend.ui.icon(((logged_in_QMARK_)?"lock-open":"lock"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-1"], null));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs117296))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","font-medium","leading-5","self-start","mt-1"], null)], null),attrs117296], 0))):{'className':"flex font-medium leading-5 self-start mt-1"}),((cljs.core.map_QMARK_(attrs117296))?[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","beta-features","settings-page/beta-features",-1456488418)], 0)))]:[daiquiri.interpreter.interpret(attrs117296),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","beta-features","settings-page/beta-features",-1456488418)], 0)))]));
})()]),daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-col","gap-4",(cljs.core.truth_(frontend.handler.user.alpha_or_beta_user_QMARK_)?null:"opacity-50 pointer-events-none cursor-not-allowed")], null))},[daiquiri.interpreter.interpret(frontend.components.settings.sync_switcher_row(enable_sync_QMARK_)),(cljs.core.truth_(enable_sync_QMARK_)?daiquiri.interpreter.interpret(frontend.components.settings.sync_diff_merge_switcher_row(enable_sync_diff_merge_QMARK_)):null),(function (){var attrs117297 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-1","settings-page/sync-desc-1",553194869)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117297))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm"], null)], null),attrs117297], 0))):{'className':"text-sm"}),((cljs.core.map_QMARK_(attrs117297))?[daiquiri.core.create_element("a",{'href':"https://blog.logseq.com/how-to-setup-and-use-logseq-sync/",'target':"_blank",'className':"mx-1"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-2","settings-page/sync-desc-2",-518718326)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-3","settings-page/sync-desc-3",1385541959)], 0)))]:[daiquiri.interpreter.interpret(attrs117297),daiquiri.core.create_element("a",{'href':"https://blog.logseq.com/how-to-setup-and-use-logseq-sync/",'target':"_blank",'className':"mx-1"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-2","settings-page/sync-desc-2",-518718326)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","sync-desc-3","settings-page/sync-desc-3",1385541959)], 0)))]));
})()])]))]));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.settings/settings-features");
frontend.components.settings.DEFAULT_ACTIVE_TAB_STATE = ((frontend.config.ENABLE_SETTINGS_ACCOUNT_TAB)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account","account",718006320),new cljs.core.Keyword(null,"account","account",718006320)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"general","general",380803686)], null));
frontend.components.settings.settings_effect = rum.core.lazy_build(rum.core.build_defc,(function (active){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var active__$1 = (function (){var and__5041__auto__ = cljs.core.sequential_QMARK_(active);
if(and__5041__auto__){
return cljs.core.name(cljs.core.first(active));
} else {
return and__5041__auto__;
}
})();
var ds = document.body.dataset;
if(cljs.core.truth_(active__$1)){
(ds.settingsTab = active__$1);
} else {
delete ds["settingsTab"];
}

return (function (){
return delete ds["settingsTab"];
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [active], null));

return daiquiri.core.create_element(daiquiri.core.fragment,null,null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"frontend.components.settings/settings-effect");
frontend.components.settings.settings = rum.core.lazy_build(rum.core.build_defcs,(function (state,_active_tab){
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var _installed_plugins = frontend.state.sub(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034));
var plugins_of_settings = (function (){var and__5041__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(frontend.handler.plugin.get_enabled_plugins_if_setting_schema());
} else {
return and__5041__auto__;
}
})();
var _STAR_active = new cljs.core.Keyword("frontend.components.settings","active","frontend.components.settings/active",-1461390411).cljs$core$IFn$_invoke$arity$1(state);
return daiquiri.core.create_element("div",{'id':"settings",'className':"cp__settings-main"},[frontend.components.settings.settings_effect(cljs.core.deref(_STAR_active)),daiquiri.core.create_element("div",{'className':"cp__settings-inner min-h-[70dvh] max-h-[70dvh]"},[daiquiri.core.create_element("aside",{'style':{'minWidth':"10rem"},'className':"md:w-64"},[daiquiri.core.create_element("header",{'className':"cp__settings-header"},[(function (){var attrs117300 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings","settings",1556144875)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs117300))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__settings-modal-title"], null)], null),attrs117300], 0))):{'className':"cp__settings-modal-title"}),((cljs.core.map_QMARK_(attrs117300))?null:[daiquiri.interpreter.interpret(attrs117300)]));
})()]),daiquiri.core.create_element("ul",{'className':"settings-menu"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$settings$iter__117301(s__117302){
return (new cljs.core.LazySeq(null,(function (){
var s__117302__$1 = s__117302;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117302__$1);
if(temp__5804__auto__){
var s__117302__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117302__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117302__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117304 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117303 = (0);
while(true){
if((i__117303 < size__5519__auto__)){
var vec__117305 = cljs.core._nth(c__5518__auto__,i__117303);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117305,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117305,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117305,(2),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117305,(3),null);
cljs.core.chunk_append(b__117304,(cljs.core.truth_(label)?daiquiri.core.create_element("li",{'key':text,'data-id':id,'onClick':((function (i__117303,vec__117305,label,id,text,icon,c__5518__auto__,size__5519__auto__,b__117304,s__117302__$2,temp__5804__auto__,current_repo,_installed_plugins,plugins_of_settings,_STAR_active){
return (function (){
return cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,cljs.core.first(cljs.core.deref(_STAR_active))], null));
});})(i__117303,vec__117305,label,id,text,icon,c__5518__auto__,size__5519__auto__,b__117304,s__117302__$2,temp__5804__auto__,current_repo,_installed_plugins,plugins_of_settings,_STAR_active))
,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings-menu-item",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,cljs.core.first(cljs.core.deref(_STAR_active)))], null)], null))], null))},[(function (){var attrs117308 = icon;
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs117308))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","settings-menu-link"], null)], null),attrs117308], 0))):{'className':"flex items-center settings-menu-link"}),((cljs.core.map_QMARK_(attrs117308))?[(function (){var attrs117309 = text;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs117309))?daiquiri.interpreter.element_attributes(attrs117309):null),((cljs.core.map_QMARK_(attrs117309))?null:[daiquiri.interpreter.interpret(attrs117309)]));
})()]:[daiquiri.interpreter.interpret(attrs117308),(function (){var attrs117310 = text;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs117310))?daiquiri.interpreter.element_attributes(attrs117310):null),((cljs.core.map_QMARK_(attrs117310))?null:[daiquiri.interpreter.interpret(attrs117310)]));
})()]));
})()]):null));

var G__117329 = (i__117303 + (1));
i__117303 = G__117329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117304),frontend$components$settings$iter__117301(cljs.core.chunk_rest(s__117302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117304),null);
}
} else {
var vec__117311 = cljs.core.first(s__117302__$2);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117311,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117311,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117311,(2),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117311,(3),null);
return cljs.core.cons((cljs.core.truth_(label)?daiquiri.core.create_element("li",{'key':text,'data-id':id,'onClick':((function (vec__117311,label,id,text,icon,s__117302__$2,temp__5804__auto__,current_repo,_installed_plugins,plugins_of_settings,_STAR_active){
return (function (){
return cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,cljs.core.first(cljs.core.deref(_STAR_active))], null));
});})(vec__117311,label,id,text,icon,s__117302__$2,temp__5804__auto__,current_repo,_installed_plugins,plugins_of_settings,_STAR_active))
,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings-menu-item",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,cljs.core.first(cljs.core.deref(_STAR_active)))], null)], null))], null))},[(function (){var attrs117308 = icon;
return daiquiri.core.create_element("a",((cljs.core.map_QMARK_(attrs117308))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","settings-menu-link"], null)], null),attrs117308], 0))):{'className':"flex items-center settings-menu-link"}),((cljs.core.map_QMARK_(attrs117308))?[(function (){var attrs117309 = text;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs117309))?daiquiri.interpreter.element_attributes(attrs117309):null),((cljs.core.map_QMARK_(attrs117309))?null:[daiquiri.interpreter.interpret(attrs117309)]));
})()]:[daiquiri.interpreter.interpret(attrs117308),(function (){var attrs117310 = text;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs117310))?daiquiri.interpreter.element_attributes(attrs117310):null),((cljs.core.map_QMARK_(attrs117310))?null:[daiquiri.interpreter.interpret(attrs117310)]));
})()]));
})()]):null),frontend$components$settings$iter__117301(cljs.core.rest(s__117302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [((frontend.config.ENABLE_SETTINGS_ACCOUNT_TAB)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account","account",718006320),"account",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-account","settings-page/tab-account",489752642)], 0)),frontend.ui.icon("user-circle")], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general","general",380803686),"general",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-general","settings-page/tab-general",1840304513)], 0)),frontend.ui.icon("adjustments")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),"editor",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-editor","settings-page/tab-editor",-1772715324)], 0)),frontend.ui.icon("writing")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),"keymap",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-keymap","settings-page/tab-keymap",264389435)], 0)),frontend.ui.icon("keyboard")], null),(cljs.core.truth_(frontend.util.electron_QMARK_())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version-control","version-control",-170929403),"git",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-version-control","settings-page/tab-version-control",-65211424)], 0)),frontend.ui.icon("history")], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advanced","advanced",-451287892),"advanced",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-advanced","settings-page/tab-advanced",-1070820797)], 0)),frontend.ui.icon("bulb")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),"features",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","tab-features","settings-page/tab-features",-69488817)], 0)),frontend.ui.icon("app-feature")], null),(cljs.core.truth_(plugins_of_settings)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugins-setting","plugins-setting",-1797317643),"plugins",frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings-of-plugins","settings-of-plugins",-1896805353)], 0)),frontend.ui.icon("puzzle")], null):null)], null));
})())])]),daiquiri.core.create_element("article",null,[daiquiri.core.create_element("header",{'className':"cp__settings-header"},[(function (){var attrs117314 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["settings-page/tab-",cljs.core.name(cljs.core.first(cljs.core.deref(_STAR_active)))].join(''))], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs117314))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__settings-category-title"], null)], null),attrs117314], 0))):{'className':"cp__settings-category-title"}),((cljs.core.map_QMARK_(attrs117314))?null:[daiquiri.interpreter.interpret(attrs117314)]));
})()]),(function (){var G__117315 = cljs.core.first(cljs.core.deref(_STAR_active));
var G__117315__$1 = (((G__117315 instanceof cljs.core.Keyword))?G__117315.fqn:null);
switch (G__117315__$1) {
case "plugins-setting":
var label = cljs.core.second(cljs.core.deref(_STAR_active));
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(plugins_of_settings))], null));

cljs.core.reset_BANG_(_STAR_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,label], null));

return null;

break;
case "account":
return frontend.components.settings.settings_account();

break;
case "general":
return frontend.components.settings.settings_general(current_repo);

break;
case "editor":
return frontend.components.settings.settings_editor(current_repo);

break;
case "keymap":
return frontend.components.shortcut.shortcut_keymap_x();

break;
case "version-control":
return frontend.components.settings.settings_git();

break;
case "assets":
return frontend.components.assets.settings_content();

break;
case "advanced":
return frontend.components.settings.settings_advanced(current_repo);

break;
case "features":
return frontend.components.settings.settings_features();

break;
default:
return null;

}
})()])])]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.components.settings.DEFAULT_ACTIVE_TAB_STATE,new cljs.core.Keyword("frontend.components.settings","active","frontend.components.settings/active",-1461390411)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

return state;
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var active_tab_117331 = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var _STAR_active_117332 = new cljs.core.Keyword("frontend.components.settings","active","frontend.components.settings/active",-1461390411).cljs$core$IFn$_invoke$arity$1(state);
if((active_tab_117331 instanceof cljs.core.Keyword)){
cljs.core.reset_BANG_(_STAR_active_117332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_tab_117331,null], null));
} else {
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.close_settings_BANG_();

return state;
})], null),rum.core.reactive], null),"frontend.components.settings/settings");

//# sourceMappingURL=frontend.components.settings.js.map
