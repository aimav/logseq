goog.provide('frontend.components.onboarding.setups');
goog.scope(function(){
  frontend.components.onboarding.setups.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.onboarding.setups.DEVICE = (cljs.core.truth_(frontend.util.mobile_QMARK_())?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-phone","on-boarding/section-phone",1414555305)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-computer","on-boarding/section-computer",-1602628908)], 0)));
frontend.components.onboarding.setups.setups_container = rum.core.lazy_build(rum.core.build_defc,(function (flag,content){
var attrs118541 = (function (){var picker_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,new cljs.core.Keyword(null,"picker","picker",-659389603));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-card.flex.flex-col.items-center","div.inner-card.flex.flex-col.items-center",-382934969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xl","h1.text-xl",-128714254),((picker_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.ui.icon("heart",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(30)], null))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","main-title","on-boarding/main-title",447379554)], 0))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.gap-1","span.flex.items-center.gap-1",-111995724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.ui.icon("file-import",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(30)], null))], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","importing-main-title","on-boarding/importing-main-title",1584243379)], 0))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.opacity-60","h2.opacity-60",722697867),((picker_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","main-desc","on-boarding/main-desc",-196246424)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","importing-main-desc","on-boarding/importing-main-desc",1354121402)], 0)))], null),content], null);
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118541))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__onboarding-setups","flex","flex-1"], null)], null),attrs118541], 0))):{'className':"cp__onboarding-setups flex flex-1"}),((cljs.core.map_QMARK_(attrs118541))?null:[daiquiri.interpreter.interpret(attrs118541)]));
}),null,"frontend.components.onboarding.setups/setups-container");
frontend.components.onboarding.setups.mobile_intro = rum.core.lazy_build(rum.core.build_defc,(function (){
var attrs118542 = (cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4","div.px-4",472594622),"You can save them in your local storage, and use Logseq Sync or any third-party sync service to keep your notes sync with other devices. ","If you prefer to use Dropbox to sync your notes, you can use ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://play.google.com/store/apps/details?id=com.ttxapps.dropsync",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Dropsync"], null),". Or you can use ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"FolderSync"], null),"."], null):null
);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118542))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mobile-intro"], null)], null),attrs118542], 0))):{'className':"mobile-intro"}),((cljs.core.map_QMARK_(attrs118542))?null:[daiquiri.interpreter.interpret(attrs118542)]));
}),null,"frontend.components.onboarding.setups/mobile-intro");
frontend.components.onboarding.setups.picker = rum.core.lazy_build(rum.core.build_defcs,(function (_state,onboarding_and_home_QMARK_){
var parsing_QMARK_ = frontend.state.sub(new cljs.core.Keyword("repo","parsing-files?","repo/parsing-files?",638499640));
var _ = frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var native_ios_QMARK_ = frontend.mobile.util.native_ios_QMARK_();
var native_icloud_QMARK_ = (!(clojure.string.blank_QMARK_(frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mobile","container-urls","mobile/container-urls",149073836),new cljs.core.Keyword(null,"iCloudContainerUrl","iCloudContainerUrl",-812046927)], null)))));
var logged_QMARK_ = frontend.handler.user.logged_in_QMARK_();
return frontend.components.onboarding.setups.setups_container(new cljs.core.Keyword(null,"picker","picker",-659389603),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.flex.w-full","article.flex.w-full",-583239126),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.a.","section.a.",-1291280575),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(native_ios_QMARK_);
} else {
return and__5041__auto__;
}
})())?frontend.components.onboarding.setups.mobile_intro():null),(cljs.core.truth_(native_ios_QMARK_)?frontend.mobile.graph_picker.graph_picker_cp(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onboarding-and-home?","onboarding-and-home?",2124338635),onboarding_and_home_QMARK_,new cljs.core.Keyword(null,"logged?","logged?",-814149905),logged_QMARK_,new cljs.core.Keyword(null,"native-icloud?","native-icloud?",-1892335688),native_icloud_QMARK_], null)):(cljs.core.truth_((function (){var or__5043__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose.flex.flex-col.items-center","div.choose.flex.flex-col.items-center",1128023989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return (frontend.modules.shortcut.core.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.modules.shortcut.core.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.modules.shortcut.core.refresh_BANG_.call(null));
}));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.justify-center.flex-col","label.action-input.flex.items-center.justify-center.flex-col",1447564813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),parsing_QMARK_], null),(cljs.core.truth_(parsing_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(""):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-btn-title","on-boarding/section-btn-title",512946311)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-btn-desc","on-boarding/section-btn-desc",-39962068)], 0))], null)], null))], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-5","div.px-5",-583544500),frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),frontend.components.widgets.native_fs_api_alert())], null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.b.flex.items-center.flex-col","section.b.flex.items-center.flex-col",1416120845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flex","p.flex",818063624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.as-flex-center","i.as-flex-center",-901481825),frontend.ui.icon("zoom-question",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"22px"], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-1.flex.flex-col","span.flex-1.flex.flex-col",-1099101938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-title","on-boarding/section-title",1425887280)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-60","small.opacity-60",1913667792),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-desc","on-boarding/section-desc",-1973525043)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.pt-5.tracking-wide","p.text-sm.pt-5.tracking-wide",-717937375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-tip-1","on-boarding/section-tip-1",-315425430),frontend.components.onboarding.setups.DEVICE], 0)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-tip-2","on-boarding/section-tip-2",1005257951)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5520__auto__ = (function frontend$components$onboarding$setups$iter__118553(s__118554){
return (new cljs.core.LazySeq(null,(function (){
var s__118554__$1 = s__118554;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__118554__$1);
if(temp__5804__auto__){
var s__118554__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__118554__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__118554__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__118556 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__118555 = (0);
while(true){
if((i__118555 < size__5519__auto__)){
var vec__118557 = cljs.core._nth(c__5518__auto__,i__118555);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118557,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118557,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118557,(2),null);
cljs.core.chunk_append(b__118556,((cljs.core.not(title))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hr","li.hr",-431034643)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.as-flex-center","i.as-flex-center",-901481825),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((clojure.string.ends_with_QMARK_(label,".edn"))?"is-file":null)], null),(cljs.core.truth_(icon)?frontend.ui.icon(icon):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.uppercase","strong.uppercase",-1521442439),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-50","small.opacity-50",-519407779),label], null)], null)], null)));

var G__118569 = (i__118555 + (1));
i__118555 = G__118569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__118556),frontend$components$onboarding$setups$iter__118553(cljs.core.chunk_rest(s__118554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__118556),null);
}
} else {
var vec__118560 = cljs.core.first(s__118554__$2);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118560,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118560,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118560,(2),null);
return cljs.core.cons(((cljs.core.not(title))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hr","li.hr",-431034643)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.as-flex-center","i.as-flex-center",-901481825),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((clojure.string.ends_with_QMARK_(label,".edn"))?"is-file":null)], null),(cljs.core.truth_(icon)?frontend.ui.icon(icon):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.uppercase","strong.uppercase",-1521442439),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-50","small.opacity-50",-519407779),label], null)], null)], null)),frontend$components$onboarding$setups$iter__118553(cljs.core.rest(s__118554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-assets","on-boarding/section-assets",457990000)], 0)),"/assets","whiteboard"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-journals","on-boarding/section-journals",1122794000)], 0)),"/journals","calendar-plus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-pages","on-boarding/section-pages",1465856992)], 0)),"/pages","page"], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-app","on-boarding/section-app",542075747)], 0)),"/logseq","tool"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","section-config","on-boarding/section-config",-87591376)], 0)),"/logseq/config.edn"], null)], null));
})()], null)], null)], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.onboarding.setups/picker");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.onboarding !== 'undefined') && (typeof frontend.components.onboarding.setups !== 'undefined') && (typeof frontend.components.onboarding.setups._STAR_opml_imported_pages !== 'undefined')){
} else {
frontend.components.onboarding.setups._STAR_opml_imported_pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.onboarding.setups.finished_cb = (function frontend$components$onboarding$setups$finished_cb(){
frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Import finished!",new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
});
frontend.components.onboarding.setups.roam_import_handler = (function frontend$components$onboarding$setups$roam_import_handler(e){
var file = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.files));
var file_name = frontend.components.onboarding.setups.goog$module$goog$object.get(file,"name");
if(clojure.string.ends_with_QMARK_(file_name,".json")){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),new cljs.core.Keyword(null,"roam-json","roam-json",-1568267165));

var reader = (new FileReader());
(reader.onload = (function (e__$1){
var text = e__$1.target.result;
return frontend.handler.external.import_from_roam_json_BANG_(text,(function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),null);

return frontend.components.onboarding.setups.finished_cb();
}));
}));

return reader.readAsText(file);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please choose a JSON file.",new cljs.core.Keyword(null,"error","error",-978969032));
}
});
frontend.components.onboarding.setups.lsq_import_handler = (function frontend$components$onboarding$setups$lsq_import_handler(e){
var file = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.files));
var file_name = (function (){var G__118563 = frontend.components.onboarding.setups.goog$module$goog$object.get(file,"name");
if((G__118563 == null)){
return null;
} else {
return clojure.string.lower_case(G__118563);
}
})();
var edn_QMARK_ = clojure.string.ends_with_QMARK_(file_name,".edn");
var json_QMARK_ = clojure.string.ends_with_QMARK_(file_name,".json");
if(((edn_QMARK_) || (json_QMARK_))){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),new cljs.core.Keyword(null,"logseq","logseq",-928939893));

var reader = (new FileReader());
var import_f = ((edn_QMARK_)?frontend.handler.external.import_from_edn_BANG_:frontend.handler.external.import_from_json_BANG_);
(reader.onload = (function (e__$1){
var text = e__$1.target.result;
var G__118564 = text;
var G__118565 = (function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),null);

return frontend.components.onboarding.setups.finished_cb();
});
return (import_f.cljs$core$IFn$_invoke$arity$2 ? import_f.cljs$core$IFn$_invoke$arity$2(G__118564,G__118565) : import_f.call(null,G__118564,G__118565));
}));

return reader.readAsText(file);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please choose an EDN or a JSON file.",new cljs.core.Keyword(null,"error","error",-978969032));
}
});
frontend.components.onboarding.setups.opml_import_handler = (function frontend$components$onboarding$setups$opml_import_handler(e){
var file = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.files));
var file_name = frontend.components.onboarding.setups.goog$module$goog$object.get(file,"name");
if(clojure.string.ends_with_QMARK_(file_name,".opml")){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),new cljs.core.Keyword(null,"opml","opml",2114938640));

var reader = (new FileReader());
(reader.onload = (function (e__$1){
var text = e__$1.target.result;
return frontend.handler.external.import_from_opml_BANG_(text,(function (pages){
cljs.core.reset_BANG_(frontend.components.onboarding.setups._STAR_opml_imported_pages,pages);

frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),null);

return frontend.components.onboarding.setups.finished_cb();
}));
}));

return reader.readAsText(file);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please choose a OPML file.",new cljs.core.Keyword(null,"error","error",-978969032));
}
});
frontend.components.onboarding.setups.importer = rum.core.lazy_build(rum.core.build_defc,(function (p__118566){
var map__118567 = p__118566;
var map__118567__$1 = cljs.core.__destructure_map(map__118567);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118567__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("graph","importing","graph/importing",1647644617)))){
var map__118568 = frontend.state.sub(new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559));
var map__118568__$1 = cljs.core.__destructure_map(map__118568);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118568__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118568__$1,new cljs.core.Keyword(null,"current-idx","current-idx",1734114444));
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118568__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var left_label = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.font-bold","div.flex.flex-row.font-bold",2116828028),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"importing","importing",1809174267)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hidden.md:flex.flex-row","div.hidden.md:flex.flex-row",-212067351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),": "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-ellipsis-wrapper","div.text-ellipsis-wrapper",-595927398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(300)], null)], null),current_page], null)], null)], null);
var width = Math.round(((current_idx / total).toFixed((2)) * (100)));
var process__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = total;
if(cljs.core.truth_(and__5041__auto__)){
return current_idx;
} else {
return and__5041__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_idx),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)].join(''):null);
return frontend.ui.progress_bar_with_label(width,left_label,process__$1);
} else {
return frontend.components.onboarding.setups.setups_container(new cljs.core.Keyword(null,"importer","importer",570599349),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.flex.flex-col.items-center.importer.py-16.px-8","article.flex.flex-col.items-center.importer.py-16.px-8",-2146491748),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.c.text-center","section.c.text-center",-454472767),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","importing-title","on-boarding/importing-title",-1283880808)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","importing-desc","on-boarding/importing-desc",-621015801)], 0))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.d.md:flex","section.d.md:flex",-2133533522),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),frontend.components.svg.roam_research.cljs$core$IFn$_invoke$arity$1((28))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"RoamResearch"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","importing-roam-desc","on-boarding/importing-roam-desc",1169369167)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-roam",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),frontend.components.onboarding.setups.roam_import_handler], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),frontend.components.svg.logo.cljs$core$IFn$_invoke$arity$1((28))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"EDN / JSON"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","importing-lsq-desc","on-boarding/importing-lsq-desc",-138732868)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-lsq",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),frontend.components.onboarding.setups.lsq_import_handler], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),frontend.ui.icon("sitemap",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"26px"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"OPML"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","importing-opml-desc","on-boarding/importing-opml-desc",48865782)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-opml",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),frontend.components.onboarding.setups.opml_import_handler], null)], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("picker",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(query_params)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.e","section.e",-1594885824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
})], null),"Skip"], null)], null):null)], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.onboarding.setups/importer");

//# sourceMappingURL=frontend.components.onboarding.setups.js.map
