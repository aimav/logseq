goog.provide('frontend.state');
goog.scope(function(){
  frontend.state.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.state !== 'undefined')){
} else {
frontend.state.state = (function (){var document_mode_QMARK_ = (function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})();
var current_graph = (function (){var graph = frontend.storage.get(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
if(cljs.core.truth_(graph)){
electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setCurrentGraph",graph], 0));
} else {
}

return graph;
})();
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("whiteboard","onboarding-whiteboard?","whiteboard/onboarding-whiteboard?",-1925305248),new cljs.core.Keyword("ui","navigation-item-collapsed?","ui/navigation-item-collapsed?",-1247120960),new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984),new cljs.core.Keyword("ui","fullscreen?","ui/fullscreen?",-1171714336),new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448),new cljs.core.Keyword("feature","enable-sync-diff-merge?","feature/enable-sync-diff-merge?",-2042896608),new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),new cljs.core.Keyword("ui","root-component","ui/root-component",-1807033247),new cljs.core.Keyword("user","info","user/info",-345834271),new cljs.core.Keyword("feature","enable-sync?","feature/enable-sync?",-817494751),new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),new cljs.core.Keyword("reactive","query-dbs","reactive/query-dbs",1169865121),new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727),new cljs.core.Keyword("history","tx->editor-cursor","history/tx->editor-cursor",136259009),new cljs.core.Keyword("whiteboard","pending-tx-data","whiteboard/pending-tx-data",66525729),new cljs.core.Keyword("db","batch-txs","db/batch-txs",-1980845279),new cljs.core.Keyword("editor","op","editor/op",-441449246),new cljs.core.Keyword("pdf","block-highlight-colored?","pdf/block-highlight-colored?",1763046626),new cljs.core.Keyword("plugin","marketplace-stats","plugin/marketplace-stats",1801405730),new cljs.core.Keyword("mobile","show-tabbar?","mobile/show-tabbar?",925227298),new cljs.core.Keyword("graph","syncing?","graph/syncing?",-560055838),new cljs.core.Keyword("modal","subsets","modal/subsets",627467906),new cljs.core.Keyword("instrument","disabled?","instrument/disabled?",165654178),new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058),new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),new cljs.core.Keyword("plugin","installing","plugin/installing",-755703581),new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),new cljs.core.Keyword("search","mode","search/mode",1628111395),new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996),new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868),new cljs.core.Keyword("editor","action","editor/action",449993861),new cljs.core.Keyword("editor","block-op-type","editor/block-op-type",1578820069),new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword("ui","paths-scroll-positions","ui/paths-scroll-positions",1953998950),new cljs.core.Keyword("electron","server","electron/server",1484164422),new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),new cljs.core.Keyword("electron","auto-updater-downloaded","electron/auto-updater-downloaded",760067750),new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946),new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902),new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),new cljs.core.Keyword("file","writes","file/writes",-105376729),new cljs.core.Keyword("ui","viewport","ui/viewport",443348007),new cljs.core.Keyword("editor","document-mode?","editor/document-mode?",-2096420601),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("selection","mode","selection/mode",-800590329),new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233),new cljs.core.Keyword("file","rename-event-chan","file/rename-event-chan",-901857721),new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343),new cljs.core.Keyword("modal","id","modal/id",-1274892409),new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152),new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),new cljs.core.Keyword("document","mode?","document/mode?",-994203479),new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615),new cljs.core.Keyword("ui","scrolling?","ui/scrolling?",-365025943),new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),new cljs.core.Keyword("electron","window-maximized?","electron/window-maximized?",-1905378935),new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),new cljs.core.Keyword("mobile","actioned-block","mobile/actioned-block",347869705),new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),new cljs.core.Keyword("graph","importing","graph/importing",1647644617),new cljs.core.Keyword("srs","cards-due-count","srs/cards-due-count",950004746),new cljs.core.Keyword("pdf","system-win?","pdf/system-win?",-2028066550),new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878),new cljs.core.Keyword("history","page-only-mode?","history/page-only-mode?",1705879050),new cljs.core.Keyword("file-sync","set-remote-graph-password-result","file-sync/set-remote-graph-password-result",-1161271382),new cljs.core.Keyword("graph","parsing-state","graph/parsing-state",-1745487605),new cljs.core.Keyword("electron","updater","electron/updater",454456683),new cljs.core.Keyword(null,"today","today",945271563),new cljs.core.Keyword("search","result","search/result",443756363),new cljs.core.Keyword("plugin","active-readme","plugin/active-readme",-677043988),new cljs.core.Keyword("editor","latest-op","editor/latest-op",-1154519796),new cljs.core.Keyword("youtube","players","youtube/players",1844913740),new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020),new cljs.core.Keyword("mobile","container-urls","mobile/container-urls",149073836),new cljs.core.Keyword("plugin","selected-theme","plugin/selected-theme",-172679220),new cljs.core.Keyword("plugin","updates-auto-checking?","plugin/updates-auto-checking?",1617323181),new cljs.core.Keyword("pdf","ref-highlight","pdf/ref-highlight",-1374529267),new cljs.core.Keyword("file-sync","jstour-inst","file-sync/jstour-inst",-1545838291),new cljs.core.Keyword("view","components","view/components",-1071666675),new cljs.core.Keyword("ui","find-in-page","ui/find-in-page",-941396467),new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),new cljs.core.Keyword("editor","last-replace-ref-content-tx","editor/last-replace-ref-content-tx",831177325),new cljs.core.Keyword("editor","args","editor/args",208005741),new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),new cljs.core.Keyword("whiteboard","onboarding-tour?","whiteboard/onboarding-tour?",2082551629),new cljs.core.Keyword("encryption","graph-parsing?","encryption/graph-parsing?",1059330925),new cljs.core.Keyword("editor","block-dom-id","editor/block-dom-id",208740398),new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086),new cljs.core.Keyword("plugin","marketplace-pkgs","plugin/marketplace-pkgs",637462798),new cljs.core.Keyword("editor","skip-saving-current-block?","editor/skip-saving-current-block?",-2017906002),new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),new cljs.core.Keyword("plugin","selected-unpacked-pkg","plugin/selected-unpacked-pkg",-286319185),new cljs.core.Keyword(null,"route-match","route-match",-1450985937),new cljs.core.Keyword("selection","selected-all?","selection/selected-all?",208605839),new cljs.core.Keyword("mobile","show-recording-bar?","mobile/show-recording-bar?",-758548785),new cljs.core.Keyword("mobile","app-state-change","mobile/app-state-change",1316245423),new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529),new cljs.core.Keyword("custom-context-menu","position","custom-context-menu/position",666089423),new cljs.core.Keyword("plugin","indicator-text","plugin/indicator-text",-221282032),new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808),new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),new cljs.core.Keyword("srs","mode?","srs/mode?",-258295984),new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728),new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),new cljs.core.Keyword("selection","direction","selection/direction",1172907345),new cljs.core.Keyword("copy","export-block-text-other-options","copy/export-block-text-other-options",1053932178),new cljs.core.Keyword(null,"draw?","draw?",1765298547),new cljs.core.Keyword("mobile","show-toolbar?","mobile/show-toolbar?",-1615839821),new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869),new cljs.core.Keyword("editor","record-status","editor/record-status",-122164557),new cljs.core.Keyword("notification","content","notification/content",-436270189),new cljs.core.Keyword("ui","sidebar-width","ui/sidebar-width",929889300),new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180),new cljs.core.Keyword("nfs","refreshing?","nfs/refreshing?",-1285076588),new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612),new cljs.core.Keyword("editor","hidden-editors","editor/hidden-editors",254075860),new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),new cljs.core.Keyword("reactive","custom-queries","reactive/custom-queries",-213333931),new cljs.core.Keyword("editor","last-input-time","editor/last-input-time",-2008067915),new cljs.core.Keyword("electron","updater-pending?","electron/updater-pending?",-1675811595),new cljs.core.Keyword("editor","block","editor/block",1699377461),new cljs.core.Keyword("editor","draw-mode?","editor/draw-mode?",-1033068203),new cljs.core.Keyword("editor","content","editor/content",-756190443),new cljs.core.Keyword("network","online?","network/online?",1306822774),new cljs.core.Keyword("favorites","dragging","favorites/dragging",-470167178),new cljs.core.Keyword("notification","contents","notification/contents",-1760740618),new cljs.core.Keyword("file-sync","onboarding-state","file-sync/onboarding-state",-864081833),new cljs.core.Keyword("modal","close-backdrop?","modal/close-backdrop?",1915188727),new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151),new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111),new cljs.core.Keyword("modal","fullscreen?","modal/fullscreen?",-1344472297),new cljs.core.Keyword("modal","payload","modal/payload",249518903),new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696),new cljs.core.Keyword("whiteboard","last-persisted-at","whiteboard/last-persisted-at",-669908968),new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560),new cljs.core.Keyword("editor","action-data","editor/action-data",969703128),new cljs.core.Keyword("search","q","search/q",-553992135),new cljs.core.Keyword("db","last-transact-time","db/last-transact-time",1752337529),new cljs.core.Keyword("search","engines","search/engines",-1270836455),new cljs.core.Keyword("indexeddb","support?","indexeddb/support?",114020185),new cljs.core.Keyword("modal","dropdowns","modal/dropdowns",901161881),new cljs.core.Keyword("electron","window-fullscreen?","electron/window-fullscreen?",-499490630),new cljs.core.Keyword(null,"journals-length","journals-length",1463764186),new cljs.core.Keyword("db","persisted?","db/persisted?",-1110314694),new cljs.core.Keyword("handbook","route-chan","handbook/route-chan",1649058330),new cljs.core.Keyword("modal","show?","modal/show?",1441869594),new cljs.core.Keyword("repo","loading-files?","repo/loading-files?",196666138),new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),new cljs.core.Keyword("editor","on-paste?","editor/on-paste?",1852983579),new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677),new cljs.core.Keyword("pdf","auto-open-ctx-menu?","pdf/auto-open-ctx-menu?",-1579137381),new cljs.core.Keyword("system","events","system/events",-1178951588),new cljs.core.Keyword("notification","show?","notification/show?",2024447580),new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492),new cljs.core.Keyword("ui","file-component","ui/file-component",-1447074212),new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),new cljs.core.Keyword("plugin","preferences","plugin/preferences",668527388),new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235),new cljs.core.Keyword("modal","label","modal/label",-1776753955),new cljs.core.Keyword("plugin","installed-themes","plugin/installed-themes",1969555197),new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346),new cljs.core.Keyword("editor","in-composition?","editor/in-composition?",-259037730),new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.Keyword("command-palette","commands","command-palette/commands",-168367617),new cljs.core.Keyword("file","unlinked-dirs","file/unlinked-dirs",-1488422337),new cljs.core.Keyword("db","properties-changed-pages","db/properties-changed-pages",1375734367)],[(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword(null,"ls-onboarding-whiteboard?","ls-onboarding-whiteboard?",-1365895638));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})(),cljs.core.PersistentArrayMap.EMPTY,null,frontend.storage.get(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984)),false,null,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,true)(frontend.storage.get(new cljs.core.Keyword(null,"logseq-sync-diff-merge-enabled","logseq-sync-diff-merge-enabled",-846633784))),false,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"UserGroups","UserGroups",1693861388),frontend.storage.get(new cljs.core.Keyword(null,"user-groups","user-groups",-1264926454))], null),frontend.storage.get(new cljs.core.Keyword(null,"logseq-sync-enabled","logseq-sync-enabled",-1886165044)),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1000)),null,(function (){var or__5043__auto__ = frontend.storage.get("ls-pdf-hl-block-is-colored");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return true;
}
})(),null,false,false,cljs.core.PersistentVector.EMPTY,frontend.storage.get("instrument-disabled"),false,null,cljs.core.PersistentVector.EMPTY,null,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"light"], null),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"dark"], null)], null);
}
})(),null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,false,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var or__5043__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.util.win32_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return false;
}
}
})())(frontend.storage.get(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822))),null,false,null,cljs.core.PersistentArrayMap.EMPTY,(function (){var coercer = malli.core.coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epoch","epoch",1435633666),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null));
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((10000),cljs.core.map.cljs$core$IFn$_invoke$arity$1(coercer));
})(),cljs.core.PersistentArrayMap.EMPTY,document_mode_QMARK_,cljs.core.PersistentArrayMap.EMPTY,false,null,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loading","loading",-737050189),false,new cljs.core.Keyword(null,"graphs","graphs",-1584479112),null], null),false,null,cljs.core.PersistentVector.EMPTY,frontend.storage.get("refresh-token"),cljs.core.PersistentArrayMap.EMPTY,document_mode_QMARK_,null,false,false,false,cljs.core.PersistentArrayMap.EMPTY,null,null,current_graph,null,null,false,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.storage.get("developer-mode"),"true")) || (false)),false,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),null,null,false,null,null,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null,null,null,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword(null,"whiteboard-onboarding-tour?","whiteboard-onboarding-tour?",1650413719));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return false;
}
})(),false,null,((frontend.storage.get(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086)) === false)?false:true),null,false,cljs.core.PersistentArrayMap.EMPTY,null,null,false,false,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),(function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,true)(frontend.storage.get(new cljs.core.Keyword("frontend.spec.storage","lsp-core-enabled","frontend.spec.storage/lsp-core-enabled",-1474488934)));
} else {
return and__5041__auto__;
}
})(),null,null,true,false,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-graph-uuid","current-graph-uuid",359245938),null], null),cljs.core.boolean$(frontend.storage.get("ls-left-sidebar-open?")),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"down","down",1565245570),(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("copy","export-block-text-other-options","copy/export-block-text-other-options",1053932178));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),false,false,frontend.storage.get(new cljs.core.Keyword("ui","wide-mode","ui/wide-mode",2105536944)),cljs.core.List.EMPTY,null,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),"NONE",null,"40%",(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "dashes";
}
})(),null,false,cljs.core.PersistentHashSet.EMPTY,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "light";
}
})(),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1000)),null,false,null,false,cljs.core.PersistentArrayMap.EMPTY,true,null,cljs.core.PersistentArrayMap.EMPTY,(function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("file-sync","onboarding-state","file-sync/onboarding-state",-864081833));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),false], null);
}
})(),true,null,frontend.storage.get(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017)),null,cljs.core.PersistentHashSet.EMPTY,false,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,false,null,"",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,true,cljs.core.PersistentArrayMap.EMPTY,false,(3),cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1))),false,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,false,null,null,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,frontend.storage.get("ls-pdf-auto-open-ctx-menu")),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1000)),false,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,"",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY]));
})();
}
frontend.state.blocks_ast_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.state.add_block_ast_cache_BANG_ = (function frontend$state$add_block_ast_cache_BANG_(block_uuid,content,ast){
if(cljs.core.truth_((function (){var and__5041__auto__ = block_uuid;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = content;
if(cljs.core.truth_(and__5041__auto____$1)){
return ast;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var new_value = cljs.core.assoc_in(cljs.core.deref(frontend.state.blocks_ast_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid,content], null),ast);
var new_value__$1 = (((cljs.core.count(new_value) > (10000)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5000),new_value)):new_value);
return cljs.core.reset_BANG_(frontend.state.blocks_ast_cache,new_value__$1);
} else {
return null;
}
});
frontend.state.get_block_ast = (function frontend$state$get_block_ast(block_uuid,content){
if(cljs.core.truth_((function (){var and__5041__auto__ = block_uuid;
if(cljs.core.truth_(and__5041__auto__)){
return content;
} else {
return and__5041__auto__;
}
})())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.blocks_ast_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_uuid,content], null));
} else {
return null;
}
});
/**
 * Default config for a repo-specific, user config
 */
frontend.state.default_config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("feature","enable-search-remove-accents?","feature/enable-search-remove-accents?",1106083837),true,new cljs.core.Keyword(null,"default-arweave-gateway","default-arweave-gateway",1444581906),"https://arweave.net",new cljs.core.Keyword("ui","auto-expand-block-refs?","ui/auto-expand-block-refs?",-1188664588),true,new cljs.core.Keyword("file","name-format","file/name-format",1975432459),new cljs.core.Keyword(null,"legacy","legacy",1434943289)], null);


/**
 * Merges user configs in given orders. All values are overridden except for maps
 *   which are merged.
 */
frontend.state.merge_configs = (function frontend$state$merge_configs(var_args){
var args__5772__auto__ = [];
var len__5766__auto___68847 = arguments.length;
var i__5767__auto___68848 = (0);
while(true){
if((i__5767__auto___68848 < len__5766__auto___68847)){
args__5772__auto__.push((arguments[i__5767__auto___68848]));

var G__68849 = (i__5767__auto___68848 + (1));
i__5767__auto___68848 = G__68849;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return frontend.state.merge_configs.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(frontend.state.merge_configs.cljs$core$IFn$_invoke$arity$variadic = (function (configs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function frontend$state$merge_config(current,new$){
if(((cljs.core.map_QMARK_(current)) && (cljs.core.map_QMARK_(new$)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current,new$], 0));
} else {
return new$;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,configs));
}));

(frontend.state.merge_configs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.state.merge_configs.cljs$lang$applyTo = (function (seq68625){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68625));
}));

frontend.state.get_global_config = (function frontend$state$get_global_config(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("frontend.state","global-config","frontend.state/global-config",1533356)], null));
});
frontend.state.get_global_config_str_content = (function frontend$state$get_global_config_str_content(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("frontend.state","global-config-str-content","frontend.state/global-config-str-content",-1141146708)], null));
});
frontend.state.get_graph_config = (function frontend$state$get_graph_config(var_args){
var G__68627 = arguments.length;
switch (G__68627) {
case 0:
return frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo_url], null));
}));

(frontend.state.get_graph_config.cljs$lang$maxFixedArity = 1);

/**
 * User config for the given repo or current repo if none given. All config fetching
 * should be done through this fn in order to get global config and config defaults
 */
frontend.state.get_config = (function frontend$state$get_config(var_args){
var G__68629 = arguments.length;
switch (G__68629) {
case 0:
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_config.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return frontend.state.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.default_config,frontend.state.get_global_config(),frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1(repo_url)], 0));
}));

(frontend.state.get_config.cljs$lang$maxFixedArity = 1);

if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.publishing_QMARK_ !== 'undefined')){
} else {
frontend.state.publishing_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.state.publishing_enable_editing_QMARK_ = (function frontend$state$publishing_enable_editing_QMARK_(){
var and__5041__auto__ = cljs.core.deref(frontend.state.publishing_QMARK_);
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("publishing","enable-editing?","publishing/enable-editing?",-39045505).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
} else {
return and__5041__auto__;
}
});
frontend.state.enable_editing_QMARK_ = (function frontend$state$enable_editing_QMARK_(){
var or__5043__auto__ = cljs.core.not(cljs.core.deref(frontend.state.publishing_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("publishing","enable-editing?","publishing/enable-editing?",-39045505).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
}
});
frontend.state.get_arweave_gateway = (function frontend$state$get_arweave_gateway(){
return new cljs.core.Keyword("arweave","gateway","arweave/gateway",-473231712).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
if((typeof frontend !== 'undefined') && (typeof frontend.state !== 'undefined') && (typeof frontend.state.built_in_macros !== 'undefined')){
} else {
frontend.state.built_in_macros = new cljs.core.PersistentArrayMap(null, 1, ["img","[:img.$4 {:src \"$1\" :style {:width $2 :height $3}}]"], null);
}
frontend.state.get_macros = (function frontend$state$get_macros(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.built_in_macros,new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0())], 0));
});
frontend.state.set_assets_alias_enabled_BANG_ = (function frontend$state$set_assets_alias_enabled_BANG_(v){
var G__68630_68852 = new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727);
var G__68631_68853 = cljs.core.boolean$(v);
(frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(G__68630_68852,G__68631_68853) : frontend.state.set_state_BANG_.call(null,G__68630_68852,G__68631_68853));

return frontend.storage.set(new cljs.core.Keyword("assets","alias-enabled?","assets/alias-enabled?",-40753727),cljs.core.boolean$(v));
});
frontend.state.set_assets_alias_dirs_BANG_ = (function frontend$state$set_assets_alias_dirs_BANG_(dirs){
if(cljs.core.truth_(dirs)){
(frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020),dirs) : frontend.state.set_state_BANG_.call(null,new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020),dirs));

return frontend.storage.set(new cljs.core.Keyword("assets","alias-dirs","assets/alias-dirs",627599020),dirs);
} else {
return null;
}
});
frontend.state.get_custom_css_link = (function frontend$state$get_custom_css_link(){
return new cljs.core.Keyword(null,"custom-css-url","custom-css-url",442165452).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_custom_js_link = (function frontend$state$get_custom_js_link(){
return new cljs.core.Keyword(null,"custom-js-url","custom-js-url",1268122982).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_default_journal_template = (function frontend$state$get_default_journal_template(){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-templates","default-templates",1374700421),new cljs.core.Keyword(null,"journals","journals",-1915761091)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var template = temp__5804__auto__;
if(clojure.string.blank_QMARK_(template)){
return null;
} else {
return clojure.string.trim(template);
}
} else {
return null;
}
});
frontend.state.all_pages_public_QMARK_ = (function frontend$state$all_pages_public_QMARK_(){
var value = new cljs.core.Keyword("publishing","all-pages-public?","publishing/all-pages-public?",-386830034).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var value__$1 = (((!((value == null))))?value:new cljs.core.Keyword(null,"all-pages-public?","all-pages-public?",-1773298253).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()));
return value__$1 === true;
});
frontend.state.get_default_home = (function frontend$state$get_default_home(){
return new cljs.core.Keyword(null,"default-home","default-home",171104159).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.custom_home_page_QMARK_ = (function frontend$state$custom_home_page_QMARK_(){
return (!((new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(frontend.state.get_default_home()) == null)));
});
frontend.state.get_preferred_format = (function frontend$state$get_preferred_format(var_args){
var G__68633 = arguments.length;
switch (G__68633) {
case 0:
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo_url));
if(cljs.core.truth_(temp__5804__auto__)){
var fmt = temp__5804__auto__;
return clojure.string.lower_case(cljs.core.name(fmt));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"preferred_format","preferred_format",-751060128)], null),"markdown");
}
})());
}));

(frontend.state.get_preferred_format.cljs$lang$maxFixedArity = 1);

frontend.state.markdown_QMARK_ = (function frontend$state$markdown_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"markdown","markdown",1227225089));
});
frontend.state.get_pages_directory = (function frontend$state$get_pages_directory(){
var or__5043__auto__ = (function (){var temp__5804__auto__ = (frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null));
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return new cljs.core.Keyword(null,"pages-directory","pages-directory",-1705912407).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "pages";
}
});
frontend.state.get_journals_directory = (function frontend$state$get_journals_directory(){
var or__5043__auto__ = (function (){var temp__5804__auto__ = (frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null));
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return new cljs.core.Keyword(null,"journals-directory","journals-directory",1373812460).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "journals";
}
});
frontend.state.get_whiteboards_directory = (function frontend$state$get_whiteboards_directory(){
var or__5043__auto__ = (function (){var temp__5804__auto__ = (frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null));
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return new cljs.core.Keyword(null,"whiteboards-directory","whiteboards-directory",1994949079).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "whiteboards";
}
});
frontend.state.org_mode_file_link_QMARK_ = (function frontend$state$org_mode_file_link_QMARK_(repo){
return new cljs.core.Keyword("org-mode","insert-file-link?","org-mode/insert-file-link?",-1472433842).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
});
frontend.state.get_journal_file_name_format = (function frontend$state$get_journal_file_name_format(){
var temp__5804__auto__ = (frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null));
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return new cljs.core.Keyword("journal","file-name-format","journal/file-name-format",-18110349).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
} else {
return null;
}
});
frontend.state.get_preferred_workflow = (function frontend$state$get_preferred_workflow(){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"preferred-workflow","preferred-workflow",-1794663444).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5804__auto__)){
var workflow = temp__5804__auto__;
var workflow__$1 = cljs.core.name(workflow);
if(cljs.core.truth_(frontend.util.safe_re_find(/now|NOW/,workflow__$1))){
return new cljs.core.Keyword(null,"now","now",-1650525531);
} else {
return new cljs.core.Keyword(null,"todo","todo",-1046442570);
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"preferred_workflow","preferred_workflow",145480799)], null),new cljs.core.Keyword(null,"now","now",-1650525531));
}
})());
});
frontend.state.get_preferred_todo = (function frontend$state$get_preferred_todo(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_preferred_workflow(),new cljs.core.Keyword(null,"now","now",-1650525531))){
return "LATER";
} else {
return "TODO";
}
});
frontend.state.get_filename_format = (function frontend$state$get_filename_format(var_args){
var G__68635 = arguments.length;
switch (G__68635) {
case 0:
return frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return new cljs.core.Keyword("file","name-format","file/name-format",1975432459).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$1(repo));
}));

(frontend.state.get_filename_format.cljs$lang$maxFixedArity = 1);

frontend.state.get_date_formatter = (function frontend$state$get_date_formatter(){
return logseq.graph_parser.config.get_date_formatter(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.shortcuts = (function frontend$state$shortcuts(){
return new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_commands = (function frontend$state$get_commands(){
return new cljs.core.Keyword(null,"commands","commands",161008658).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.get_scheduled_future_days = (function frontend$state$get_scheduled_future_days(){
var days = new cljs.core.Keyword("scheduled","future-days","scheduled/future-days",-104348029).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
var or__5043__auto__ = ((cljs.core.int_QMARK_(days))?days:null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (7);
}
});
frontend.state.get_start_of_week = (function frontend$state$get_start_of_week(){
var or__5043__auto__ = new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824)], null));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return (6);
}
}
});
frontend.state.get_ref_open_blocks_level = (function frontend$state$get_ref_open_blocks_level(){
var or__5043__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword("ref","default-open-blocks-level","ref/default-open-blocks-level",-51352945).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5804__auto__)){
var value = temp__5804__auto__;
if(cljs.core.integer_QMARK_(value)){
return value;
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (2);
}
});
frontend.state.get_linked_references_collapsed_threshold = (function frontend$state$get_linked_references_collapsed_threshold(){
var or__5043__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword("ref","linked-references-collapsed-threshold","ref/linked-references-collapsed-threshold",-693553743).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(temp__5804__auto__)){
var value = temp__5804__auto__;
if(cljs.core.integer_QMARK_(value)){
return value;
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (100);
}
});
frontend.state.get_export_bullet_indentation = (function frontend$state$get_export_bullet_indentation(){
var G__68636 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("export","bullet-indentation","export/bullet-indentation",-647274253),new cljs.core.Keyword(null,"tab","tab",-559583621));
var G__68636__$1 = (((G__68636 instanceof cljs.core.Keyword))?G__68636.fqn:null);
switch (G__68636__$1) {
case "eight-spaces":
return "        ";

break;
case "four-spaces":
return "    ";

break;
case "two-spaces":
return "  ";

break;
case "tab":
return "\t";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68636__$1)].join('')));

}
});
frontend.state.enable_search_remove_accents_QMARK_ = (function frontend$state$enable_search_remove_accents_QMARK_(){
return new cljs.core.Keyword("feature","enable-search-remove-accents?","feature/enable-search-remove-accents?",1106083837).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});
/**
 * Creates a rum cursor, https://github.com/tonsky/rum#cursors, for use in rum components.
 * Similar to re-frame subscriptions
 */
frontend.state.sub = (function frontend$state$sub(ks){
if(cljs.core.coll_QMARK_(ks)){
return frontend.util.react(rum.core.cursor_in(frontend.state.state,ks));
} else {
return frontend.util.react(rum.core.cursor(frontend.state.state,ks));
}
});
/**
 * Sub equivalent to get-config which should handle all sub user-config access
 */
frontend.state.sub_config = (function frontend$state$sub_config(var_args){
var G__68638 = arguments.length;
switch (G__68638) {
case 0:
return frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.sub_config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.sub_config.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$1 = (function (repo){
var config = frontend.state.sub(new cljs.core.Keyword(null,"config","config",994861415));
return frontend.state.merge_configs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.default_config,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword("frontend.state","global-config","frontend.state/global-config",1533356)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,repo)], 0));
}));

(frontend.state.sub_config.cljs$lang$maxFixedArity = 1);

frontend.state.enable_grammarly_QMARK_ = (function frontend$state$enable_grammarly_QMARK_(){
return new cljs.core.Keyword("feature","enable-grammarly?","feature/enable-grammarly?",816531392).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0()) === true;
});
frontend.state.scheduled_deadlines_disabled_QMARK_ = (function frontend$state$scheduled_deadlines_disabled_QMARK_(){
return new cljs.core.Keyword("feature","disable-scheduled-and-deadline-query?","feature/disable-scheduled-and-deadline-query?",-1605937327).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0()) === true;
});
frontend.state.enable_timetracking_QMARK_ = (function frontend$state$enable_timetracking_QMARK_(){
return (!(new cljs.core.Keyword("feature","enable-timetracking?","feature/enable-timetracking?",1612021873).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0()) === false));
});
frontend.state.enable_fold_button_right_QMARK_ = (function frontend$state$enable_fold_button_right_QMARK_(){
var _ = frontend.state.sub(new cljs.core.Keyword("ui","viewport","ui/viewport",443348007));
var and__5041__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.sm_breakpoint_QMARK_();
} else {
return and__5041__auto__;
}
});
frontend.state.enable_journals_QMARK_ = (function frontend$state$enable_journals_QMARK_(var_args){
var G__68640 = arguments.length;
switch (G__68640) {
case 0:
return frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.enable_journals_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return (!(new cljs.core.Keyword("feature","enable-journals?","feature/enable-journals?",1609498182).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$1(repo)) === false));
}));

(frontend.state.enable_journals_QMARK_.cljs$lang$maxFixedArity = 1);

frontend.state.enable_flashcards_QMARK_ = (function frontend$state$enable_flashcards_QMARK_(var_args){
var G__68642 = arguments.length;
switch (G__68642) {
case 0:
return frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.enable_flashcards_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return (!(new cljs.core.Keyword("feature","enable-flashcards?","feature/enable-flashcards?",1572039243).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$1(repo)) === false));
}));

(frontend.state.enable_flashcards_QMARK_.cljs$lang$maxFixedArity = 1);

frontend.state.enable_sync_QMARK_ = (function frontend$state$enable_sync_QMARK_(){
return frontend.state.sub(new cljs.core.Keyword("feature","enable-sync?","feature/enable-sync?",-817494751));
});
frontend.state.enable_sync_diff_merge_QMARK_ = (function frontend$state$enable_sync_diff_merge_QMARK_(){
return frontend.state.sub(new cljs.core.Keyword("feature","enable-sync-diff-merge?","feature/enable-sync-diff-merge?",-2042896608));
});
frontend.state.enable_whiteboards_QMARK_ = (function frontend$state$enable_whiteboards_QMARK_(var_args){
var G__68644 = arguments.length;
switch (G__68644) {
case 0:
return frontend.state.enable_whiteboards_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.enable_whiteboards_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.enable_whiteboards_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.enable_whiteboards_QMARK_.cljs$core$IFn$_invoke$arity$1((frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0 ? frontend.state.get_current_repo.cljs$core$IFn$_invoke$arity$0() : frontend.state.get_current_repo.call(null)));
}));

(frontend.state.enable_whiteboards_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return (!(new cljs.core.Keyword("feature","enable-whiteboards?","feature/enable-whiteboards?",-52089888).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$1(repo)) === false));
}));

(frontend.state.enable_whiteboards_QMARK_.cljs$lang$maxFixedArity = 1);

frontend.state.enable_git_auto_push_QMARK_ = (function frontend$state$enable_git_auto_push_QMARK_(repo){
return (!(new cljs.core.Keyword(null,"git-auto-push","git-auto-push",2144454612).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$1(repo)) === false));
});
frontend.state.enable_block_timestamps_QMARK_ = (function frontend$state$enable_block_timestamps_QMARK_(){
return new cljs.core.Keyword("feature","enable-block-timestamps?","feature/enable-block-timestamps?",155290768).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0()) === true;
});
frontend.state.graph_settings = (function frontend$state$graph_settings(){
return new cljs.core.Keyword("graph","settings","graph/settings",1067459097).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.graph_forcesettings = (function frontend$state$graph_forcesettings(){
return new cljs.core.Keyword("graph","forcesettings","graph/forcesettings",-17461404).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.show_brackets_QMARK_ = (function frontend$state$show_brackets_QMARK_(){
return (!(new cljs.core.Keyword("ui","show-brackets?","ui/show-brackets?",659790606).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0()) === false));
});
frontend.state.sub_default_home_page = (function frontend$state$sub_default_home_page(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-home","default-home",171104159),new cljs.core.Keyword(null,"page","page",849072397)], null),"");
});
frontend.state.sub_edit_content = (function frontend$state$sub_edit_content(id){
return frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),id], null));
});
frontend.state.get_selected_block_ids = (function frontend$state$get_selected_block_ids(blocks){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__68645_SHARP_){
var temp__5804__auto__ = dommy.core.attr(p1__68645_SHARP_,"blockid");
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return cljs.core.uuid(id);
} else {
return null;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks)));
});
frontend.state.sub_block_selected_QMARK_ = (function frontend$state$sub_block_selected_QMARK_(container_id,block_uuid){
return rum.core.react((function (){var G__68646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.state.state], null);
var G__68647 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.state","select-block","frontend.state/select-block",-1440556385),container_id,block_uuid], null);
var G__68648 = (function (state){
return cljs.core.contains_QMARK_(cljs.core.set(frontend.state.get_selected_block_ids(new cljs.core.Keyword("selection","blocks","selection/blocks",638970019).cljs$core$IFn$_invoke$arity$1(state))),block_uuid);
});
return (rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3 ? rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3(G__68646,G__68647,G__68648) : rum.core.derived_atom.call(null,G__68646,G__68647,G__68648));
})());
});
frontend.state.block_content_max_length = (function frontend$state$block_content_max_length(repo){
var or__5043__auto__ = new cljs.core.Keyword("block","content-max-length","block/content-max-length",1087086620).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$1(repo));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (10000);
}
});
frontend.state.mobile_QMARK_ = (function frontend$state$mobile_QMARK_(){
var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
});
frontend.state.enable_tooltip_QMARK_ = (function frontend$state$enable_tooltip_QMARK_(){
if(cljs.core.truth_(frontend.state.mobile_QMARK_())){
return false;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("ui","enable-tooltip?","ui/enable-tooltip?",1082007831),true);
}
});
frontend.state.show_command_doc_QMARK_ = (function frontend$state$show_command_doc_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("ui","show-command-doc?","ui/show-command-doc?",-23052835),true);
});
frontend.state.logical_outdenting_QMARK_ = (function frontend$state$logical_outdenting_QMARK_(){
return new cljs.core.Keyword("editor","logical-outdenting?","editor/logical-outdenting?",-234289706).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.show_full_blocks_QMARK_ = (function frontend$state$show_full_blocks_QMARK_(){
return new cljs.core.Keyword("ui","show-full-blocks?","ui/show-full-blocks?",-87079885).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.preferred_pasting_file_QMARK_ = (function frontend$state$preferred_pasting_file_QMARK_(){
return new cljs.core.Keyword("editor","preferred-pasting-file?","editor/preferred-pasting-file?",-1242172921).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.auto_expand_block_refs_QMARK_ = (function frontend$state$auto_expand_block_refs_QMARK_(){
return new cljs.core.Keyword("ui","auto-expand-block-refs?","ui/auto-expand-block-refs?",-1188664588).cljs$core$IFn$_invoke$arity$1(frontend.state.sub_config.cljs$core$IFn$_invoke$arity$0());
});
frontend.state.doc_mode_enter_for_new_line_QMARK_ = (function frontend$state$doc_mode_enter_for_new_line_QMARK_(){
var and__5041__auto__ = (frontend.state.document_mode_QMARK_.cljs$core$IFn$_invoke$arity$0 ? frontend.state.document_mode_QMARK_.cljs$core$IFn$_invoke$arity$0() : frontend.state.document_mode_QMARK_.call(null));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(new cljs.core.Keyword("shortcut","doc-mode-enter-for-new-block?","shortcut/doc-mode-enter-for-new-block?",936132327).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()));
} else {
return and__5041__auto__;
}
});
frontend.state.user_groups = (function frontend$state$user_groups(){
return cljs.core.set(frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","info","user/info",-345834271),new cljs.core.Keyword(null,"UserGroups","UserGroups",1693861388)], null)));
});
frontend.state.set_state_BANG_ = (function frontend$state$set_state_BANG_(path,value){
if(cljs.core.vector_QMARK_(path)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,path,value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,path,value);
}

return null;
});
frontend.state.update_state_BANG_ = (function frontend$state$update_state_BANG_(path,f){
if(cljs.core.vector_QMARK_(path)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update_in,path,f);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update,path,f);
}

return null;
});
frontend.state.get_route_match = (function frontend$state$get_route_match(){
return new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_current_route = (function frontend$state$get_current_route(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
frontend.state.home_QMARK_ = (function frontend$state$home_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"home","home",-74557309),frontend.state.get_current_route());
});
frontend.state.whiteboard_dashboard_QMARK_ = (function frontend$state$whiteboard_dashboard_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654),frontend.state.get_current_route());
});
frontend.state.setups_picker_QMARK_ = (function frontend$state$setups_picker_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo-add","repo-add",458734484),frontend.state.get_current_route());
});
frontend.state.get_current_page = (function frontend$state$get_current_page(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),frontend.state.get_current_route())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));
} else {
return null;
}
});
frontend.state.whiteboard_route_QMARK_ = (function frontend$state$whiteboard_route_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928),frontend.state.get_current_route());
});
frontend.state.get_current_whiteboard = (function frontend$state$get_current_whiteboard(){
if(frontend.state.whiteboard_route_QMARK_()){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"name","name",1843675177)], null));
} else {
return null;
}
});
frontend.state.route_has_p_QMARK_ = (function frontend$state$route_has_p_QMARK_(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_route_match(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"p","p",151049309)], null));
});
/**
 * Returns the current repo URL, or else open demo graph
 */
frontend.state.get_current_repo = (function frontend$state$get_current_repo(){
var or__5043__auto__ = new cljs.core.Keyword("git","current-repo","git/current-repo",107438825).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "local";
}
});
frontend.state.get_remote_graphs = (function frontend$state$get_remote_graphs(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null));
});
frontend.state.get_remote_graph_info_by_uuid = (function frontend$state$get_remote_graph_info_by_uuid(uuid){
var temp__5804__auto__ = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null)));
if(temp__5804__auto__){
var graphs = temp__5804__auto__;
return cljs.core.some((function (p1__68649_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__68649_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))){
return p1__68649_SHARP_;
} else {
return null;
}
}),graphs);
} else {
return null;
}
});
frontend.state.get_remote_graph_usage = (function frontend$state$get_remote_graph_usage(){
var temp__5804__auto__ = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null)));
if(temp__5804__auto__){
var graphs = temp__5804__auto__;
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68651_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68651_SHARP_,new cljs.core.Keyword(null,"free-gbs","free-gbs",712147194),(new cljs.core.Keyword(null,"limit-gbs","limit-gbs",-997314467).cljs$core$IFn$_invoke$arity$1(p1__68651_SHARP_) - new cljs.core.Keyword(null,"used-gbs","used-gbs",271660092).cljs$core$IFn$_invoke$arity$1(p1__68651_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68650_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"used-gbs","used-gbs",271660092),new cljs.core.Keyword(null,"limit-gbs","limit-gbs",-997314467),new cljs.core.Keyword(null,"used-percent","used-percent",-1822070047)],[new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__68650_SHARP_),new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(p1__68650_SHARP_),(((new cljs.core.Keyword(null,"GraphStorageUsage","GraphStorageUsage",-947283204).cljs$core$IFn$_invoke$arity$1(p1__68650_SHARP_) / (1024)) / (1024)) / (1024)),(((new cljs.core.Keyword(null,"GraphStorageLimit","GraphStorageLimit",-862725344).cljs$core$IFn$_invoke$arity$1(p1__68650_SHARP_) / (1024)) / (1024)) / (1024)),((new cljs.core.Keyword(null,"GraphStorageUsage","GraphStorageUsage",-947283204).cljs$core$IFn$_invoke$arity$1(p1__68650_SHARP_) / new cljs.core.Keyword(null,"GraphStorageLimit","GraphStorageLimit",-862725344).cljs$core$IFn$_invoke$arity$1(p1__68650_SHARP_)) / 0.01)]);
}),graphs)));
} else {
return null;
}
});
frontend.state.delete_remote_graph_BANG_ = (function frontend$state$delete_remote_graph_BANG_(repo){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null),(function (repos){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68652_SHARP_){
var and__5041__auto__ = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__68652_SHARP_);
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(repo),new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__68652_SHARP_));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),repos);
}));
});
frontend.state.add_remote_graph_BANG_ = (function frontend$state$add_remote_graph_BANG_(repo){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null),(function (repos){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(repos,repo));
}));
});
frontend.state.get_repos = (function frontend$state$get_repos(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
});
frontend.state.set_repos_BANG_ = (function frontend$state$set_repos_BANG_(repos){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null),repos);
});
frontend.state.add_repo_BANG_ = (function frontend$state$add_repo_BANG_(repo){
if((!(clojure.string.blank_QMARK_(repo)))){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null),(function (repos){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(repos,repo));
}));
} else {
return null;
}
});
frontend.state.set_current_repo_BANG_ = (function frontend$state$set_current_repo_BANG_(repo){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),repo);

if(cljs.core.truth_(repo)){
frontend.storage.set(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),repo);
} else {
frontend.storage.remove(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
}

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setCurrentGraph",repo], 0));
});
frontend.state.set_preferred_format_BANG_ = (function frontend$state$set_preferred_format_BANG_(format){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"preferred_format","preferred_format",-751060128)], null),cljs.core.name(format));
});
frontend.state.set_preferred_workflow_BANG_ = (function frontend$state$set_preferred_workflow_BANG_(workflow){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"preferred_workflow","preferred_workflow",145480799)], null),cljs.core.name(workflow));
});
frontend.state.set_preferred_language_BANG_ = (function frontend$state$set_preferred_language_BANG_(language){
frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),cljs.core.name(language));

return frontend.storage.set(new cljs.core.Keyword(null,"preferred-language","preferred-language",-1247855017),cljs.core.name(language));
});
frontend.state.delete_repo_BANG_ = (function frontend$state$delete_repo_BANG_(repo){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null),(function (repos){
return frontend.util.distinct_by(new cljs.core.Keyword(null,"url","url",276297046),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68653_SHARP_){
var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__68653_SHARP_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(repo);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__68653_SHARP_);
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(repo),new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__68653_SHARP_));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
}),repos));
}));
});
frontend.state.set_timestamp_block_BANG_ = (function frontend$state$set_timestamp_block_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),value);
});
frontend.state.get_timestamp_block = (function frontend$state$get_timestamp_block(){
return new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_edit_content_BANG_ = (function frontend$state$set_edit_content_BANG_(var_args){
var G__68655 = arguments.length;
switch (G__68655) {
case 2:
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (input_id,value){
return frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3(input_id,value,true);
}));

(frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (input_id,value,set_input_value_QMARK_){
if(cljs.core.truth_(input_id)){
if(cljs.core.truth_(set_input_value_QMARK_)){
var temp__5804__auto___68862 = goog.dom.getElement(input_id);
if(cljs.core.truth_(temp__5804__auto___68862)){
var input_68863 = temp__5804__auto___68862;
frontend.util.set_change_value(input_68863,value);
} else {
}
} else {
}

return frontend.state.update_state_BANG_(new cljs.core.Keyword("editor","content","editor/content",-756190443),(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,input_id,value);
}));
} else {
return null;
}
}));

(frontend.state.set_edit_content_BANG_.cljs$lang$maxFixedArity = 3);

frontend.state.get_edit_input_id = (function frontend$state$get_edit_input_id(){
return cljs.core.ffirst(new cljs.core.Keyword("editor","editing?","editor/editing?",807325417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
});
frontend.state.get_input = (function frontend$state$get_input(){
var temp__5804__auto__ = frontend.state.get_edit_input_id();
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return goog.dom.getElement(id);
} else {
return null;
}
});
frontend.state.editing_QMARK_ = (function frontend$state$editing_QMARK_(){
var input = frontend.state.get_input();
var and__5041__auto__ = input;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,document.activeElement);
} else {
return and__5041__auto__;
}
});
frontend.state.get_edit_content = (function frontend$state$get_edit_content(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("editor","content","editor/content",-756190443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),frontend.state.get_edit_input_id());
});
frontend.state.get_cursor_range = (function frontend$state$get_cursor_range(){
return new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_cursor_range_BANG_ = (function frontend$state$set_cursor_range_BANG_(range){
return frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),range);
});
frontend.state.set_search_mode_BANG_ = (function frontend$state$set_search_mode_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","mode","search/mode",1628111395),value);
});
frontend.state.set_editor_action_BANG_ = (function frontend$state$set_editor_action_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","action","editor/action",449993861),value);
});
frontend.state.set_editor_action_data_BANG_ = (function frontend$state$set_editor_action_data_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","action-data","editor/action-data",969703128),value);
});
frontend.state.get_editor_action = (function frontend$state$get_editor_action(){
return new cljs.core.Keyword("editor","action","editor/action",449993861).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_editor_action_data = (function frontend$state$get_editor_action_data(){
return new cljs.core.Keyword("editor","action-data","editor/action-data",969703128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_editor_show_page_search_QMARK_ = (function frontend$state$get_editor_show_page_search_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_action(),new cljs.core.Keyword(null,"page-search","page-search",1842925280));
});
frontend.state.get_editor_show_page_search_hashtag_QMARK_ = (function frontend$state$get_editor_show_page_search_hashtag_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_action(),new cljs.core.Keyword(null,"page-search-hashtag","page-search-hashtag",1121040573));
});
frontend.state.get_editor_show_block_search_QMARK_ = (function frontend$state$get_editor_show_block_search_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_action(),new cljs.core.Keyword(null,"block-search","block-search",-897517253));
});
frontend.state.set_editor_show_input_BANG_ = (function frontend$state$set_editor_show_input_BANG_(value){
if(cljs.core.truth_(value)){
frontend.state.set_editor_action_data_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.state.get_editor_action_data(),new cljs.core.Keyword(null,"options","options",99638489),value));

return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"input","input",556931961));
} else {
frontend.state.set_editor_action_BANG_(null);

return frontend.state.set_editor_action_data_BANG_(null);
}
});
frontend.state.get_editor_show_input = (function frontend$state$get_editor_show_input(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_editor_action(),new cljs.core.Keyword(null,"input","input",556931961))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","action-data","editor/action-data",969703128));
} else {
return null;
}
});
frontend.state.set_editor_show_commands_BANG_ = (function frontend$state$set_editor_show_commands_BANG_(){
if(cljs.core.truth_(frontend.state.get_editor_action())){
return null;
} else {
return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"commands","commands",161008658));
}
});
frontend.state.set_editor_show_block_commands_BANG_ = (function frontend$state$set_editor_show_block_commands_BANG_(){
if(cljs.core.truth_(frontend.state.get_editor_action())){
return null;
} else {
return frontend.state.set_editor_action_BANG_(new cljs.core.Keyword(null,"block-commands","block-commands",-1186238497));
}
});
frontend.state.clear_editor_action_BANG_ = (function frontend$state$clear_editor_action_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("editor","action","editor/action",449993861),null);
}));
});
frontend.state.set_edit_input_id_BANG_ = (function frontend$state$set_edit_input_id_BANG_(input_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update,new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),(function (_m){
var and__5041__auto__ = input_id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([input_id,true]);
} else {
return and__5041__auto__;
}
}));
});
frontend.state.get_edit_pos = (function frontend$state$get_edit_pos(){
var temp__5804__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5804__auto__)){
var input = temp__5804__auto__;
return frontend.util.get_selection_start(input);
} else {
return null;
}
});
frontend.state.get_selection_start_block = (function frontend$state$get_selection_start_block(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492));
});
frontend.state.set_selection_start_block_BANG_ = (function frontend$state$set_selection_start_block_BANG_(start_block){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492),start_block);
});
frontend.state.set_selection_blocks_BANG_ = (function frontend$state$set_selection_blocks_BANG_(var_args){
var G__68657 = arguments.length;
switch (G__68657) {
case 1:
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,new cljs.core.Keyword(null,"down","down",1565245570));
}));

(frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (blocks,direction){
if(cljs.core.seq(blocks)){
var blocks__$1 = cljs.core.vec(frontend.util.sort_by_height(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),blocks__$1,new cljs.core.Keyword("selection","direction","selection/direction",1172907345),direction], 0));
} else {
return null;
}
}));

(frontend.state.set_selection_blocks_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.into_selection_mode_BANG_ = (function frontend$state$into_selection_mode_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),true);
});
frontend.state.clear_selection_BANG_ = (function frontend$state$clear_selection_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),null,new cljs.core.Keyword("selection","direction","selection/direction",1172907345),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword("selection","start-block","selection/start-block",-832131492),null,new cljs.core.Keyword("selection","selected-all?","selection/selected-all?",208605839),false], 0));
});
frontend.state.get_selection_blocks = (function frontend$state$get_selection_blocks(){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.Keyword("selection","blocks","selection/blocks",638970019).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
});
frontend.state.get_selection_block_ids = (function frontend$state$get_selection_block_ids(){
return frontend.state.get_selected_block_ids(frontend.state.get_selection_blocks());
});
frontend.state.get_selection_start_block_or_first = (function frontend$state$get_selection_start_block_or_first(){
var or__5043__auto__ = frontend.state.get_selection_start_block();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__68658 = cljs.core.first(frontend.state.get_selection_blocks());
if((G__68658 == null)){
return null;
} else {
return frontend.state.goog$module$goog$object.get(G__68658,"id");
}
}
});
frontend.state.in_selection_mode_QMARK_ = (function frontend$state$in_selection_mode_QMARK_(){
return new cljs.core.Keyword("selection","mode","selection/mode",-800590329).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
/**
 * True sense of selection mode with valid selected block
 */
frontend.state.selection_QMARK_ = (function frontend$state$selection_QMARK_(){
var and__5041__auto__ = frontend.state.in_selection_mode_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.seq(frontend.state.get_selection_blocks());
} else {
return and__5041__auto__;
}
});
frontend.state.conj_selection_block_BANG_ = (function frontend$state$conj_selection_block_BANG_(block_or_blocks,direction){
var selection_blocks = frontend.state.get_selection_blocks();
var blocks = cljs.core.vec(frontend.util.sort_by_height(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(((cljs.core.sequential_QMARK_(block_or_blocks))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,selection_blocks,block_or_blocks):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selection_blocks,block_or_blocks)))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),blocks,new cljs.core.Keyword("selection","direction","selection/direction",1172907345),direction], 0));
});
frontend.state.drop_selection_block_BANG_ = (function frontend$state$drop_selection_block_BANG_(block){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),cljs.core.vec(frontend.util.sort_by_height(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68659_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block,p1__68659_SHARP_);
}),frontend.state.get_selection_blocks())))], 0));
});
frontend.state.drop_last_selection_block_BANG_ = (function frontend$state$drop_last_selection_block_BANG_(){
var direction = new cljs.core.Keyword("selection","direction","selection/direction",1172907345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var up_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113));
var blocks = new cljs.core.Keyword("selection","blocks","selection/blocks",638970019).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var last_block = ((up_QMARK_)?cljs.core.first(blocks):cljs.core.peek(cljs.core.vec(blocks)));
var blocks_SINGLEQUOTE_ = cljs.core.vec(frontend.util.sort_by_height(((up_QMARK_)?cljs.core.rest(blocks):cljs.core.pop(cljs.core.vec(blocks)))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("selection","mode","selection/mode",-800590329),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("selection","blocks","selection/blocks",638970019),blocks_SINGLEQUOTE_], 0));

return last_block;
});
frontend.state.get_selection_direction = (function frontend$state$get_selection_direction(){
return new cljs.core.Keyword("selection","direction","selection/direction",1172907345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.show_custom_context_menu_BANG_ = (function frontend$state$show_custom_context_menu_BANG_(links,position){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677),links,new cljs.core.Keyword("custom-context-menu","position","custom-context-menu/position",666089423),position], 0));
});
frontend.state.hide_custom_context_menu_BANG_ = (function frontend$state$hide_custom_context_menu_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("custom-context-menu","show?","custom-context-menu/show?",2074408902),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("custom-context-menu","links","custom-context-menu/links",-1197608677),null,new cljs.core.Keyword("custom-context-menu","position","custom-context-menu/position",666089423),null], 0));
});
frontend.state.toggle_navigation_item_collapsed_BANG_ = (function frontend$state$toggle_navigation_item_collapsed_BANG_(item){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","navigation-item-collapsed?","ui/navigation-item-collapsed?",-1247120960),item], null),cljs.core.not);
});
frontend.state.toggle_sidebar_open_QMARK__BANG_ = (function frontend$state$toggle_sidebar_open_QMARK__BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update,new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),cljs.core.not);
});
frontend.state.open_right_sidebar_BANG_ = (function frontend$state$open_right_sidebar_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),true);
});
frontend.state.hide_right_sidebar_BANG_ = (function frontend$state$hide_right_sidebar_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),false);
});
frontend.state.sidebar_add_block_BANG_ = (function frontend$state$sidebar_add_block_BANG_(repo,db_id,block_type){
if((!(frontend.util.sm_breakpoint_QMARK_()))){
if(cljs.core.truth_(db_id)){
frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,db_id,block_type], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68660_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__68660_SHARP_),db_id);
}),blocks)));
}));

frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null),false);

frontend.state.open_right_sidebar_BANG_();

var temp__5804__auto__ = goog.dom.getElementByClass("sidebar-item-list");
if(cljs.core.truth_(temp__5804__auto__)){
var elem = temp__5804__auto__;
return frontend.util.scroll_to.cljs$core$IFn$_invoke$arity$2(elem,(0));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.state.sidebar_move_block_BANG_ = (function frontend$state$sidebar_move_block_BANG_(from,to){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
var to__$1 = (((from > to))?(to + (1)):to);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,from)){
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,from);
var blocks__$1 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__68661_SHARP_,p2__68662_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__68661_SHARP_,from)){
return p2__68662_SHARP_;
} else {
return null;
}
}),blocks);
var vec__68663 = cljs.core.split_at(to__$1,blocks__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68663,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68663,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));
} else {
return blocks;
}
}));
});
frontend.state.sidebar_remove_block_BANG_ = (function frontend$state$sidebar_remove_block_BANG_(idx){
frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
if(typeof idx === 'string'){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68666_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__68666_SHARP_),idx);
}),blocks);
} else {
return frontend.util.drop_nth(idx,blocks);
}
}));

if(cljs.core.empty_QMARK_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return frontend.state.hide_right_sidebar_BANG_();
} else {
return null;
}
});
frontend.state.sidebar_remove_rest_BANG_ = (function frontend$state$sidebar_remove_rest_BANG_(db_id){
frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68667_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__68667_SHARP_),db_id);
}),blocks);
}));

return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null),false);
});
frontend.state.sidebar_replace_block_BANG_ = (function frontend$state$sidebar_replace_block_BANG_(old_sidebar_key,new_sidebar_key){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),(function (blocks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68668_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__68668_SHARP_,old_sidebar_key)){
return new_sidebar_key;
} else {
return p1__68668_SHARP_;
}
}),blocks);
}));
});
frontend.state.sidebar_block_exists_QMARK_ = (function frontend$state$sidebar_block_exists_QMARK_(idx){
return cljs.core.some((function (p1__68669_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__68669_SHARP_),idx);
}),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
});
frontend.state.clear_sidebar_blocks_BANG_ = (function frontend$state$clear_sidebar_blocks_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),cljs.core.List.EMPTY);
});
frontend.state.sidebar_block_toggle_collapse_BANG_ = (function frontend$state$sidebar_block_toggle_collapse_BANG_(db_id){
if(cljs.core.truth_(db_id)){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),db_id], null),cljs.core.not);
} else {
return null;
}
});
frontend.state.sidebar_block_collapse_rest_BANG_ = (function frontend$state$sidebar_block_collapse_rest_BANG_(db_id){
var items = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))),db_id);
var seq__68670 = cljs.core.seq(items);
var chunk__68671 = null;
var count__68672 = (0);
var i__68673 = (0);
while(true){
if((i__68673 < count__68672)){
var item = chunk__68671.cljs$core$IIndexed$_nth$arity$2(null,i__68673);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),item], null),true);


var G__68865 = seq__68670;
var G__68866 = chunk__68671;
var G__68867 = count__68672;
var G__68868 = (i__68673 + (1));
seq__68670 = G__68865;
chunk__68671 = G__68866;
count__68672 = G__68867;
i__68673 = G__68868;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__68670);
if(temp__5804__auto__){
var seq__68670__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68670__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__68670__$1);
var G__68869 = cljs.core.chunk_rest(seq__68670__$1);
var G__68870 = c__5565__auto__;
var G__68871 = cljs.core.count(c__5565__auto__);
var G__68872 = (0);
seq__68670 = G__68869;
chunk__68671 = G__68870;
count__68672 = G__68871;
i__68673 = G__68872;
continue;
} else {
var item = cljs.core.first(seq__68670__$1);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),item], null),true);


var G__68873 = cljs.core.next(seq__68670__$1);
var G__68874 = null;
var G__68875 = (0);
var G__68876 = (0);
seq__68670 = G__68873;
chunk__68671 = G__68874;
count__68672 = G__68875;
i__68673 = G__68876;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.state.sidebar_block_set_collapsed_all_BANG_ = (function frontend$state$sidebar_block_set_collapsed_all_BANG_(collapsed_QMARK_){
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
var seq__68674 = cljs.core.seq(items);
var chunk__68675 = null;
var count__68676 = (0);
var i__68677 = (0);
while(true){
if((i__68677 < count__68676)){
var item = chunk__68675.cljs$core$IIndexed$_nth$arity$2(null,i__68677);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),item], null),collapsed_QMARK_);


var G__68877 = seq__68674;
var G__68878 = chunk__68675;
var G__68879 = count__68676;
var G__68880 = (i__68677 + (1));
seq__68674 = G__68877;
chunk__68675 = G__68878;
count__68676 = G__68879;
i__68677 = G__68880;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__68674);
if(temp__5804__auto__){
var seq__68674__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68674__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__68674__$1);
var G__68881 = cljs.core.chunk_rest(seq__68674__$1);
var G__68882 = c__5565__auto__;
var G__68883 = cljs.core.count(c__5565__auto__);
var G__68884 = (0);
seq__68674 = G__68881;
chunk__68675 = G__68882;
count__68676 = G__68883;
i__68677 = G__68884;
continue;
} else {
var item = cljs.core.first(seq__68674__$1);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),item], null),collapsed_QMARK_);


var G__68885 = cljs.core.next(seq__68674__$1);
var G__68886 = null;
var G__68887 = (0);
var G__68888 = (0);
seq__68674 = G__68885;
chunk__68675 = G__68886;
count__68676 = G__68887;
i__68677 = G__68888;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.state.get_edit_block = (function frontend$state$get_edit_block(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("editor","block","editor/block",1699377461));
});
frontend.state.get_current_edit_block_and_position = (function frontend$state$get_current_edit_block_and_position(){
var edit_input_id = frontend.state.get_edit_input_id();
var edit_block = frontend.state.get_edit_block();
var block_element = (cljs.core.truth_(edit_input_id)?goog.dom.getElement(clojure.string.replace(edit_input_id,"edit-block","ls-block")):null);
var container = (cljs.core.truth_(block_element)?frontend.util.get_block_container(block_element):null);
if(cljs.core.truth_(container)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last-edit-block","last-edit-block",-940369316),edit_block,new cljs.core.Keyword(null,"container","container",-1736937707),frontend.state.goog$module$goog$object.get(container,"id"),new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var or__5043__auto__ = frontend.util.cursor.pos(goog.dom.getElement(edit_input_id));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.count(new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(edit_block));
}
})()], null);
} else {
return null;
}
});
frontend.state.clear_edit_BANG_ = (function frontend$state$clear_edit_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),null,new cljs.core.Keyword("editor","block","editor/block",1699377461),null,new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),null,new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),null], null));
});
frontend.state.into_code_editor_mode_BANG_ = (function frontend$state$into_code_editor_mode_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),null,new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),null,new cljs.core.Keyword("editor","code-mode?","editor/code-mode?",1404453234),true], null));
});
frontend.state.set_editor_last_pos_BANG_ = (function frontend$state$set_editor_last_pos_BANG_(new_pos){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())], null),new_pos);
});
frontend.state.clear_editor_last_pos_BANG_ = (function frontend$state$clear_editor_last_pos_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),null);
});
frontend.state.get_editor_last_pos = (function frontend$state$get_editor_last_pos(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())], null));
});
frontend.state.set_block_content_and_last_pos_BANG_ = (function frontend$state$set_block_content_and_last_pos_BANG_(edit_input_id,content,new_pos){
if(cljs.core.truth_(edit_input_id)){
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(edit_input_id,content);

return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-saved-cursor","editor/last-saved-cursor",-284040435),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block())], null),new_pos);
} else {
return null;
}
});
frontend.state.set_theme_mode_BANG_ = (function frontend$state$set_theme_mode_BANG_(mode){
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"light")){
frontend.util.set_theme_light();
} else {
frontend.util.set_theme_dark();
}
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),mode);

return frontend.storage.set(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),mode);
});
frontend.state.sync_system_theme_BANG_ = (function frontend$state$sync_system_theme_BANG_(){
var system_dark_QMARK_ = window.matchMedia("(prefers-color-scheme: dark)").matches;
frontend.state.set_theme_mode_BANG_((cljs.core.truth_(system_dark_QMARK_)?"dark":"light"));

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),true);

return frontend.storage.set(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),true);
});
frontend.state.use_theme_mode_BANG_ = (function frontend$state$use_theme_mode_BANG_(theme_mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme_mode,"system")){
return frontend.state.sync_system_theme_BANG_();
} else {
frontend.state.set_theme_mode_BANG_(theme_mode);

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),false);

return frontend.storage.set(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822),false);
}
});
frontend.state.toggle_theme = (function frontend$state$toggle_theme(theme){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,"dark")){
return "light";
} else {
return "dark";
}
});
frontend.state.toggle_theme_BANG_ = (function frontend$state$toggle_theme_BANG_(){
return frontend.state.use_theme_mode_BANG_(frontend.state.toggle_theme(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
});
frontend.state.set_custom_theme_BANG_ = (function frontend$state$set_custom_theme_BANG_(var_args){
var G__68679 = arguments.length;
switch (G__68679) {
case 1:
return frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (custom_theme){
return frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2(null,custom_theme);
}));

(frontend.state.set_custom_theme_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (mode,theme){
frontend.state.set_state_BANG_((cljs.core.truth_(mode)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(mode)], null):new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347)),theme);

return frontend.storage.set(new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347),new cljs.core.Keyword("ui","custom-theme","ui/custom-theme",1944833347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
}));

(frontend.state.set_custom_theme_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Restore mobile theme setting from local storage
 */
frontend.state.restore_mobile_theme_BANG_ = (function frontend$state$restore_mobile_theme_BANG_(){
var mode = (function (){var or__5043__auto__ = frontend.storage.get(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "light";
}
})();
var system_theme_QMARK_ = frontend.storage.get(new cljs.core.Keyword("ui","system-theme?","ui/system-theme?",1330390822));
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(system_theme_QMARK_);
if(and__5041__auto__){
return frontend.mobile.util.native_platform_QMARK_();
} else {
return and__5041__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"light")){
return frontend.util.set_theme_light();
} else {
return frontend.util.set_theme_dark();
}
} else {
return null;
}
});
frontend.state.set_editing_block_dom_id_BANG_ = (function frontend$state$set_editing_block_dom_id_BANG_(block_dom_id){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","block-dom-id","editor/block-dom-id",208740398),block_dom_id);
});
frontend.state.get_editing_block_dom_id = (function frontend$state$get_editing_block_dom_id(){
return new cljs.core.Keyword("editor","block-dom-id","editor/block-dom-id",208740398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_root_component_BANG_ = (function frontend$state$set_root_component_BANG_(component){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","root-component","ui/root-component",-1807033247),component);
});
frontend.state.get_root_component = (function frontend$state$get_root_component(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("ui","root-component","ui/root-component",-1807033247));
});
frontend.state.load_app_user_cfgs = (function frontend$state$load_app_user_cfgs(var_args){
var G__68681 = arguments.length;
switch (G__68681) {
case 0:
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.state.load_app_user_cfgs.cljs$core$IFn$_invoke$arity$1 = (function (refresh_QMARK_){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var or__5043__auto__ = refresh_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)) == null);
}
})())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"userAppCfgs","userAppCfgs",-1274935350)], 0)):new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))),(function (cfgs){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core.object_QMARK_(cfgs))?cljs_bean.core.__GT_clj(cfgs):cfgs),(function (cfgs__$1){
return promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),cfgs__$1));
}));
}));
}));
} else {
return null;
}
}));

(frontend.state.load_app_user_cfgs.cljs$lang$maxFixedArity = 1);

frontend.state.setup_electron_updater_BANG_ = (function frontend$state$setup_electron_updater_BANG_(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.apis.setUpdatesCallback((function (_,args){
var data = cljs_bean.core.__GT_clj(args);
var pending_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),"completed");
frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","updater-pending?","electron/updater-pending?",-1675811595),pending_QMARK_);

if(pending_QMARK_){
frontend.state.set_state_BANG_(new cljs.core.Keyword("electron","updater","electron/updater",454456683),data);
} else {
}

return null;
}));
} else {
return null;
}
});
frontend.state.set_file_component_BANG_ = (function frontend$state$set_file_component_BANG_(component){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","file-component","ui/file-component",-1447074212),component);
});
frontend.state.clear_file_component_BANG_ = (function frontend$state$clear_file_component_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","file-component","ui/file-component",-1447074212),null);
});
frontend.state.set_journals_length_BANG_ = (function frontend$state$set_journals_length_BANG_(value){
if(cljs.core.truth_(value)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"journals-length","journals-length",1463764186),value);
} else {
return null;
}
});
frontend.state.save_scroll_position_BANG_ = (function frontend$state$save_scroll_position_BANG_(var_args){
var G__68683 = arguments.length;
switch (G__68683) {
case 1:
return frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$2(value,window.location.hash);
}));

(frontend.state.save_scroll_position_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,path){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","paths-scroll-positions","ui/paths-scroll-positions",1953998950),path], null),value);
}));

(frontend.state.save_scroll_position_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.get_saved_scroll_position = (function frontend$state$get_saved_scroll_position(var_args){
var G__68685 = arguments.length;
switch (G__68685) {
case 0:
return frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$1(window.location.hash);
}));

(frontend.state.get_saved_scroll_position.cljs$core$IFn$_invoke$arity$1 = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","paths-scroll-positions","ui/paths-scroll-positions",1953998950),path], null),(0));
}));

(frontend.state.get_saved_scroll_position.cljs$lang$maxFixedArity = 1);

frontend.state.set_today_BANG_ = (function frontend$state$set_today_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword(null,"today","today",945271563),value);
});
frontend.state.get_me = (function frontend$state$get_me(){
return new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_db_restoring_BANG_ = (function frontend$state$set_db_restoring_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("db","restoring?","db/restoring?",-1653366233),value);
});
frontend.state.set_indexedb_support_BANG_ = (function frontend$state$set_indexedb_support_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("indexeddb","support?","indexeddb/support?",114020185),value);
});
frontend.state.modal_opened_QMARK_ = (function frontend$state$modal_opened_QMARK_(){
return new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_sub_modals = (function frontend$state$get_sub_modals(){
return new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_sub_modal_BANG_ = (function frontend$state$set_sub_modal_BANG_(var_args){
var G__68690 = arguments.length;
switch (G__68690) {
case 1:
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (panel_content){
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2(panel_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),true], null));
}));

(frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (panel_content,p__68691){
var map__68692 = p__68691;
var map__68692__$1 = cljs.core.__destructure_map(map__68692);
var opts = map__68692__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68692__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68692__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68692__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var close_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68692__$1,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726));
var close_backdrop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68692__$1,new cljs.core.Keyword(null,"close-backdrop?","close-backdrop?",2081649802));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68692__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68692__$1,new cljs.core.Keyword(null,"center?","center?",-323116631));
if(cljs.core.not(frontend.state.modal_opened_QMARK_())){
return (frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(panel_content,opts) : frontend.state.set_modal_BANG_.call(null,panel_content,opts));
} else {
var modals = new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var idx = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__68687_SHARP_,p2__68686_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(p2__68686_SHARP_),id)){
return p1__68687_SHARP_;
} else {
return null;
}
}),modals));
} else {
return and__5041__auto__;
}
})();
var input = medley.core.filter_vals((function (p1__68688_SHARP_){
return (!((p1__68688_SHARP_ == null)));
}),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("modal","id","modal/id",-1274892409),id,new cljs.core.Keyword("modal","label","modal/label",-1776753955),(cljs.core.truth_(label)?cljs.core.name(label):""),new cljs.core.Keyword("modal","class","modal/class",-1928981561),(cljs.core.truth_(center_QMARK_)?"as-center":""),new cljs.core.Keyword("modal","payload","modal/payload",249518903),payload,new cljs.core.Keyword("modal","show?","modal/show?",1441869594),((cljs.core.boolean_QMARK_(show_QMARK_))?show_QMARK_:true),new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448),panel_content,new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151),close_btn_QMARK_,new cljs.core.Keyword("modal","close-backdrop?","modal/close-backdrop?",1915188727),((cljs.core.boolean_QMARK_(close_backdrop_QMARK_))?close_backdrop_QMARK_:true)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","subsets","modal/subsets",627467906),(function (){var or__5043__auto__ = idx;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.count(modals);
}
})()], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));

return new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
}
}));

(frontend.state.set_sub_modal_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.close_sub_modal_BANG_ = (function frontend$state$close_sub_modal_BANG_(var_args){
var G__68696 = arguments.length;
switch (G__68696) {
case 0:
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (all_QMARK__a_id){
if(all_QMARK__a_id === true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("modal","subsets","modal/subsets",627467906),cljs.core.PersistentVector.EMPTY);
} else {
var id_68895 = all_QMARK__a_id;
var mid_68896 = new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var modals_68897 = new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_((function (){var and__5041__auto__ = id_68895;
if(cljs.core.truth_(and__5041__auto__)){
return (((!(clojure.string.blank_QMARK_(mid_68896)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id_68895,mid_68896)));
} else {
return and__5041__auto__;
}
})())){
(frontend.state.close_modal_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.state.close_modal_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.state.close_modal_BANG_.call(null));
} else {
var temp__5804__auto___68898 = (cljs.core.truth_(id_68895)?cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__68694_SHARP_,p2__68693_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(p2__68693_SHARP_),id_68895)){
return p1__68694_SHARP_;
} else {
return null;
}
}),modals_68897)):(cljs.core.count(modals_68897) - (1)));
if(cljs.core.truth_(temp__5804__auto___68898)){
var idx_68899 = temp__5804__auto___68898;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("modal","subsets","modal/subsets",627467906),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(idx_68899,modals_68897)));
} else {
}
}
}

return new cljs.core.Keyword("modal","subsets","modal/subsets",627467906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
}));

(frontend.state.close_sub_modal_BANG_.cljs$lang$maxFixedArity = 1);

frontend.state.set_modal_BANG_ = (function frontend$state$set_modal_BANG_(var_args){
var G__68698 = arguments.length;
switch (G__68698) {
case 1:
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (modal_panel_content){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(modal_panel_content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),false,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),true], null));
}));

(frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (modal_panel_content,p__68699){
var map__68700 = p__68699;
var map__68700__$1 = cljs.core.__destructure_map(map__68700);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68700__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68700__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68700__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var fullscreen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68700__$1,new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820));
var close_btn_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68700__$1,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726));
var close_backdrop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68700__$1,new cljs.core.Keyword(null,"close-backdrop?","close-backdrop?",2081649802));
var center_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68700__$1,new cljs.core.Keyword(null,"center?","center?",-323116631));
var panel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68700__$1,new cljs.core.Keyword(null,"panel?","panel?",-1698806907));
var opened_QMARK__68901 = frontend.state.modal_opened_QMARK_();
if(cljs.core.truth_(opened_QMARK__68901)){
(frontend.state.close_modal_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.state.close_modal_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.state.close_modal_BANG_.call(null));
} else {
}

if(cljs.core.seq(frontend.state.get_sub_modals())){
frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(true);
} else {
}

var c__34483__auto___68902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_68730){
var state_val_68731 = (state_68730[(1)]);
if((state_val_68731 === (7))){
var state_68730__$1 = state_68730;
var statearr_68732_68903 = state_68730__$1;
(statearr_68732_68903[(2)] = "");

(statearr_68732_68903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (1))){
var state_68730__$1 = state_68730;
if(cljs.core.truth_(opened_QMARK__68901)){
var statearr_68733_68904 = state_68730__$1;
(statearr_68733_68904[(1)] = (2));

} else {
var statearr_68734_68905 = state_68730__$1;
(statearr_68734_68905[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (4))){
var inst_68707 = (state_68730[(2)]);
var state_68730__$1 = (function (){var statearr_68735 = state_68730;
(statearr_68735[(7)] = inst_68707);

return statearr_68735;
})();
if(cljs.core.truth_(label)){
var statearr_68736_68906 = state_68730__$1;
(statearr_68736_68906[(1)] = (6));

} else {
var statearr_68737_68907 = state_68730__$1;
(statearr_68737_68907[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (15))){
var state_68730__$1 = state_68730;
var statearr_68738_68908 = state_68730__$1;
(statearr_68738_68908[(2)] = close_backdrop_QMARK_);

(statearr_68738_68908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (13))){
var state_68730__$1 = state_68730;
var statearr_68739_68909 = state_68730__$1;
(statearr_68739_68909[(2)] = true);

(statearr_68739_68909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (6))){
var inst_68709 = cljs.core.name(label);
var state_68730__$1 = state_68730;
var statearr_68740_68910 = state_68730__$1;
(statearr_68740_68910[(2)] = inst_68709);

(statearr_68740_68910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (17))){
var inst_68712 = (state_68730[(8)]);
var inst_68716 = (state_68730[(9)]);
var inst_68717 = (state_68730[(10)]);
var inst_68722 = (state_68730[(11)]);
var inst_68727 = (state_68730[(2)]);
var inst_68728 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("modal","id","modal/id",-1274892409),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("modal","label","modal/label",-1776753955),inst_68712,new cljs.core.Keyword("modal","class","modal/class",-1928981561),inst_68716,new cljs.core.Keyword("modal","show?","modal/show?",1441869594),inst_68717,new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448),modal_panel_content,new cljs.core.Keyword("modal","payload","modal/payload",249518903),payload,new cljs.core.Keyword("modal","fullscreen?","modal/fullscreen?",-1344472297),fullscreen_QMARK_,new cljs.core.Keyword("modal","panel?","modal/panel?",-1725289388),inst_68722,new cljs.core.Keyword("modal","close-btn?","modal/close-btn?",433048151),close_btn_QMARK_,new cljs.core.Keyword("modal","close-backdrop?","modal/close-backdrop?",1915188727),inst_68727], 0));
var state_68730__$1 = state_68730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68730__$1,inst_68728);
} else {
if((state_val_68731 === (3))){
var state_68730__$1 = state_68730;
var statearr_68741_68911 = state_68730__$1;
(statearr_68741_68911[(2)] = null);

(statearr_68741_68911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (12))){
var state_68730__$1 = state_68730;
var statearr_68742_68912 = state_68730__$1;
(statearr_68742_68912[(2)] = panel_QMARK_);

(statearr_68742_68912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (2))){
var inst_68702 = cljs.core.async.timeout((100));
var state_68730__$1 = state_68730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68730__$1,(5),inst_68702);
} else {
if((state_val_68731 === (11))){
var inst_68716 = (state_68730[(2)]);
var inst_68717 = cljs.core.boolean$(modal_panel_content);
var inst_68718 = cljs.core.boolean_QMARK_(panel_QMARK_);
var state_68730__$1 = (function (){var statearr_68743 = state_68730;
(statearr_68743[(9)] = inst_68716);

(statearr_68743[(10)] = inst_68717);

return statearr_68743;
})();
if(inst_68718){
var statearr_68744_68913 = state_68730__$1;
(statearr_68744_68913[(1)] = (12));

} else {
var statearr_68745_68914 = state_68730__$1;
(statearr_68745_68914[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (9))){
var state_68730__$1 = state_68730;
var statearr_68746_68915 = state_68730__$1;
(statearr_68746_68915[(2)] = "as-center");

(statearr_68746_68915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (5))){
var inst_68704 = (state_68730[(2)]);
var state_68730__$1 = state_68730;
var statearr_68747_68916 = state_68730__$1;
(statearr_68747_68916[(2)] = inst_68704);

(statearr_68747_68916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (14))){
var inst_68722 = (state_68730[(2)]);
var inst_68723 = cljs.core.boolean_QMARK_(close_backdrop_QMARK_);
var state_68730__$1 = (function (){var statearr_68748 = state_68730;
(statearr_68748[(11)] = inst_68722);

return statearr_68748;
})();
if(inst_68723){
var statearr_68749_68917 = state_68730__$1;
(statearr_68749_68917[(1)] = (15));

} else {
var statearr_68750_68918 = state_68730__$1;
(statearr_68750_68918[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (16))){
var state_68730__$1 = state_68730;
var statearr_68751_68919 = state_68730__$1;
(statearr_68751_68919[(2)] = true);

(statearr_68751_68919[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (10))){
var state_68730__$1 = state_68730;
var statearr_68752_68920 = state_68730__$1;
(statearr_68752_68920[(2)] = "");

(statearr_68752_68920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68731 === (8))){
var inst_68712 = (state_68730[(2)]);
var state_68730__$1 = (function (){var statearr_68753 = state_68730;
(statearr_68753[(8)] = inst_68712);

return statearr_68753;
})();
if(cljs.core.truth_(center_QMARK_)){
var statearr_68754_68921 = state_68730__$1;
(statearr_68754_68921[(1)] = (9));

} else {
var statearr_68755_68922 = state_68730__$1;
(statearr_68755_68922[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var frontend$state$state_machine__34379__auto__ = null;
var frontend$state$state_machine__34379__auto____0 = (function (){
var statearr_68756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68756[(0)] = frontend$state$state_machine__34379__auto__);

(statearr_68756[(1)] = (1));

return statearr_68756;
});
var frontend$state$state_machine__34379__auto____1 = (function (state_68730){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_68730);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e68757){var ex__34382__auto__ = e68757;
var statearr_68758_68923 = state_68730;
(statearr_68758_68923[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_68730[(4)]))){
var statearr_68759_68924 = state_68730;
(statearr_68759_68924[(1)] = cljs.core.first((state_68730[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68925 = state_68730;
state_68730 = G__68925;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$state$state_machine__34379__auto__ = function(state_68730){
switch(arguments.length){
case 0:
return frontend$state$state_machine__34379__auto____0.call(this);
case 1:
return frontend$state$state_machine__34379__auto____1.call(this,state_68730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$state$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$state$state_machine__34379__auto____0;
frontend$state$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$state$state_machine__34379__auto____1;
return frontend$state$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_68760 = f__34484__auto__();
(statearr_68760[(6)] = c__34483__auto___68902);

return statearr_68760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return null;
}));

(frontend.state.set_modal_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.close_modal_BANG_ = (function frontend$state$close_modal_BANG_(){
if(cljs.core.truth_(frontend.state.editing_QMARK_())){
return null;
} else {
if(cljs.core.seq(frontend.state.get_sub_modals())){
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("modal","id","modal/id",-1274892409),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("modal","label","modal/label",-1776753955),"",new cljs.core.Keyword("modal","payload","modal/payload",249518903),null,new cljs.core.Keyword("modal","show?","modal/show?",1441869594),false,new cljs.core.Keyword("modal","fullscreen?","modal/fullscreen?",-1344472297),false,new cljs.core.Keyword("modal","panel-content","modal/panel-content",-620980448),null,new cljs.core.Keyword("ui","open-select","ui/open-select",687174842),null], 0));
}
}
});
frontend.state.get_db_batch_txs_chan = (function frontend$state$get_db_batch_txs_chan(){
return new cljs.core.Keyword("db","batch-txs","db/batch-txs",-1980845279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_file_write_chan = (function frontend$state$get_file_write_chan(){
return new cljs.core.Keyword("file","writes","file/writes",-105376729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_reactive_custom_queries_chan = (function frontend$state$get_reactive_custom_queries_chan(){
return new cljs.core.Keyword("reactive","custom-queries","reactive/custom-queries",-213333931).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_left_sidebar_open_QMARK_ = (function frontend$state$get_left_sidebar_open_QMARK_(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728)], null));
});
frontend.state.set_left_sidebar_open_BANG_ = (function frontend$state$set_left_sidebar_open_BANG_(value){
frontend.storage.set("ls-left-sidebar-open?",cljs.core.boolean$(value));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728),value);
});
frontend.state.toggle_left_sidebar_BANG_ = (function frontend$state$toggle_left_sidebar_BANG_(){
return frontend.state.set_left_sidebar_open_BANG_(cljs.core.not(frontend.state.get_left_sidebar_open_QMARK_()));
});
frontend.state.set_developer_mode_BANG_ = (function frontend$state$set_developer_mode_BANG_(value){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878),value);

return frontend.storage.set("developer-mode",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
frontend.state.developer_mode_QMARK_ = (function frontend$state$developer_mode_QMARK_(){
return new cljs.core.Keyword("ui","developer-mode?","ui/developer-mode?",-664501878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_notification_contents = (function frontend$state$get_notification_contents(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("notification","contents","notification/contents",-1760740618));
});
frontend.state.document_mode_QMARK_ = (function frontend$state$document_mode_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("document","mode?","document/mode?",-994203479));
});
frontend.state.toggle_document_mode_BANG_ = (function frontend$state$toggle_document_mode_BANG_(){
var mode = frontend.state.document_mode_QMARK_();
frontend.state.set_state_BANG_(new cljs.core.Keyword("document","mode?","document/mode?",-994203479),cljs.core.not(mode));

return frontend.storage.set(new cljs.core.Keyword("document","mode?","document/mode?",-994203479),cljs.core.not(mode));
});
frontend.state.shortcut_tooltip_enabled_QMARK_ = (function frontend$state$shortcut_tooltip_enabled_QMARK_(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086));
});
frontend.state.toggle_shortcut_tooltip_BANG_ = (function frontend$state$toggle_shortcut_tooltip_BANG_(){
var mode = frontend.state.shortcut_tooltip_enabled_QMARK_();
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086),cljs.core.not(mode));

return frontend.storage.set(new cljs.core.Keyword("ui","shortcut-tooltip?","ui/shortcut-tooltip?",1921963086),cljs.core.not(mode));
});
frontend.state.set_config_BANG_ = (function frontend$state$set_config_BANG_(repo_url,value){
if(cljs.core.truth_(value)){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo_url], null),value);
} else {
return null;
}
});
frontend.state.set_global_config_BANG_ = (function frontend$state$set_global_config_BANG_(value,str_content){
if(cljs.core.truth_(value)){
frontend.state.set_config_BANG_(new cljs.core.Keyword("frontend.state","global-config","frontend.state/global-config",1533356),value);

return frontend.state.set_config_BANG_(new cljs.core.Keyword("frontend.state","global-config-str-content","frontend.state/global-config-str-content",-1141146708),str_content);
} else {
return null;
}
});
frontend.state.get_wide_mode_QMARK_ = (function frontend$state$get_wide_mode_QMARK_(){
return new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.toggle_wide_mode_BANG_ = (function frontend$state$toggle_wide_mode_BANG_(){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("ui","wide-mode?","ui/wide-mode?",-1881882061),cljs.core.not);
});
frontend.state.set_online_BANG_ = (function frontend$state$set_online_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("network","online?","network/online?",1306822774),value);
});
frontend.state.get_plugins_slash_commands = (function frontend$state$get_plugins_slash_commands(){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.flatten(cljs.core.vals(new cljs.core.Keyword("plugin","installed-slash-commands","plugin/installed-slash-commands",-58447235).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))))], 0));
});
frontend.state.get_plugins_commands_with_type = (function frontend$state$get_plugins_commands_with_type(type){
return cljs.core.filterv((function (p1__68761_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__68761_SHARP_)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))));
});
frontend.state.get_plugins_ui_items_with_type = (function frontend$state$get_plugins_ui_items_with_type(type){
return cljs.core.filterv((function (p1__68762_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__68762_SHARP_)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new cljs.core.Keyword("plugin","installed-ui-items","plugin/installed-ui-items",1418448868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))));
});
frontend.state.get_plugin_resources_with_type = (function frontend$state$get_plugin_resources_with_type(pid,type){
var temp__5804__auto__ = (function (){var and__5041__auto__ = type;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pid__$1 = temp__5804__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),pid__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)], null));
} else {
return null;
}
});
frontend.state.get_plugin_resource = (function frontend$state$get_plugin_resource(pid,type,key){
var temp__5804__auto__ = frontend.state.get_plugin_resources_with_type(pid,type);
if(cljs.core.truth_(temp__5804__auto__)){
var resources = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(resources,key);
} else {
return null;
}
});
frontend.state.upt_plugin_resource = (function frontend$state$upt_plugin_resource(pid,type,key,attr,val){
var temp__5804__auto__ = frontend.state.get_plugin_resource(pid,type,key);
if(cljs.core.truth_(temp__5804__auto__)){
var resource = temp__5804__auto__;
var resource__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resource,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr),val);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-resources","plugin/installed-resources",-1742961043),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),key], null),resource__$1);

return resource__$1;
} else {
return null;
}
});
frontend.state.get_plugin_services = (function frontend$state$get_plugin_services(pid,type){
var temp__5804__auto__ = (function (){var and__5041__auto__ = pid;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var installed = temp__5804__auto__;
var G__68764 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(installed,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid)));
if((G__68764 == null)){
return null;
} else {
return cljs.core.filterv((function (p1__68763_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__68763_SHARP_));
}),G__68764);
}
} else {
return null;
}
});
frontend.state.install_plugin_service = (function frontend$state$install_plugin_service(var_args){
var G__68768 = arguments.length;
switch (G__68768) {
case 3:
return frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$3 = (function (pid,type,name){
return frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$4(pid,type,name,null);
}));

(frontend.state.install_plugin_service.cljs$core$IFn$_invoke$arity$4 = (function (pid,type,name,opts){
var temp__5804__auto__ = (function (){var and__5041__auto__ = pid;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = type;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = name;
if(cljs.core.truth_(and__5041__auto____$2)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pid__$1 = temp__5804__auto__;
var exists = frontend.state.get_plugin_services(pid__$1,type);
var temp__5804__auto____$1 = (function (){var and__5041__auto__ = ((cljs.core.not(exists)) || (cljs.core.not(cljs.core.some((function (p1__68765_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__68765_SHARP_));
}),exists))));
if(and__5041__auto__){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid__$1,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var service = temp__5804__auto____$1;
frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696),pid__$1], null),(function (p1__68766_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__68766_SHARP_),service);
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"search","search",1564939822))){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","engines","search/engines",-1270836455),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),service);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(frontend.state.install_plugin_service.cljs$lang$maxFixedArity = 4);

frontend.state.uninstall_plugin_service = (function frontend$state$uninstall_plugin_service(pid,type_or_all){
var temp__5804__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5804__auto__)){
var pid__$1 = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),pid__$1);
if(cljs.core.truth_(temp__5804__auto____$1)){
var installed = temp__5804__auto____$1;
var remove_all_QMARK_ = ((type_or_all === true) || ((type_or_all == null)));
var remains = ((remove_all_QMARK_)?null:cljs.core.filterv((function (p1__68769_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type_or_all,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__68769_SHARP_));
}),installed));
var removed = ((remove_all_QMARK_)?installed:cljs.core.filterv((function (p1__68770_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_or_all,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__68770_SHARP_));
}),installed));
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696),pid__$1], null),remains);

var temp__5804__auto____$2 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68771_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__68771_SHARP_));
}),removed));
if(temp__5804__auto____$2){
var removed_SINGLEQUOTE_ = temp__5804__auto____$2;
return frontend.state.update_state_BANG_(new cljs.core.Keyword("search","engines","search/engines",-1270836455),(function (p1__68772_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__68772_SHARP_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__68773){
var map__68774 = p__68773;
var map__68774__$1 = cljs.core.__destructure_map(map__68774);
var pid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68774__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68774__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
}),removed_SINGLEQUOTE_));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
frontend.state.get_all_plugin_services_with_type = (function frontend$state$get_all_plugin_services_with_type(type){
var temp__5804__auto__ = cljs.core.vals(new cljs.core.Keyword("plugin","installed-services","plugin/installed-services",-1672478696).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
if(cljs.core.truth_(temp__5804__auto__)){
var installed = temp__5804__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68775_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__68775_SHARP_));
}),s);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([installed], 0));
} else {
return null;
}
});
frontend.state.get_all_plugin_search_engines = (function frontend$state$get_all_plugin_search_engines(){
return new cljs.core.Keyword("search","engines","search/engines",-1270836455).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.update_plugin_search_engine = (function frontend$state$update_plugin_search_engine(pid,name,f){
var temp__5804__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5804__auto__)){
var pid__$1 = temp__5804__auto__;
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","engines","search/engines",-1270836455),cljs.core.update_vals(frontend.state.get_all_plugin_search_engines(),(function (p1__68776_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid__$1,new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__68776_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__68776_SHARP_))))){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68776_SHARP_) : f.call(null,p1__68776_SHARP_));
} else {
return p1__68776_SHARP_;
}
})));
} else {
return null;
}
});
frontend.state.reset_plugin_search_engines = (function frontend$state$reset_plugin_search_engines(){
var temp__5804__auto__ = frontend.state.get_all_plugin_search_engines();
if(cljs.core.truth_(temp__5804__auto__)){
var engines = temp__5804__auto__;
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","engines","search/engines",-1270836455),cljs.core.update_vals(engines,(function (p1__68777_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68777_SHARP_,new cljs.core.Keyword(null,"result","result",1415092211),null);
})));
} else {
return null;
}
});
frontend.state.install_plugin_hook = (function frontend$state$install_plugin_hook(var_args){
var G__68779 = arguments.length;
switch (G__68779) {
case 2:
return frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$2 = (function (pid,hook){
return frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$3(pid,hook,true);
}));

(frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$3 = (function (pid,hook,opts){
var temp__5804__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5804__auto__)){
var pid__$1 = temp__5804__auto__;
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY)(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook], null))),pid__$1,opts));

return true;
} else {
return null;
}
}));

(frontend.state.install_plugin_hook.cljs$lang$maxFixedArity = 3);

frontend.state.uninstall_plugin_hook = (function frontend$state$uninstall_plugin_hook(pid,hook_or_all){
var temp__5804__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
if(cljs.core.truth_(temp__5804__auto__)){
var pid__$1 = temp__5804__auto__;
if((hook_or_all == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),(function (p1__68780_SHARP_){
return cljs.core.update_vals(p1__68780_SHARP_,(function (ids){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ids,pid__$1);
}));
}));
} else {
var temp__5804__auto___68939__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook_or_all], null));
if(cljs.core.truth_(temp__5804__auto___68939__$1)){
var coll_68940 = temp__5804__auto___68939__$1;
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271),hook_or_all], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(coll_68940,pid__$1));
} else {
}
}

return true;
} else {
return null;
}
});
frontend.state.slot_hook_exist_QMARK_ = (function frontend$state$slot_hook_exist_QMARK_(uuid){
var temp__5804__auto__ = (function (){var and__5041__auto__ = uuid;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),"-","_");
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var type = temp__5804__auto__;
var temp__5804__auto____$1 = frontend.state.sub(new cljs.core.Keyword("plugin","installed-hooks","plugin/installed-hooks",-227057271));
if(cljs.core.truth_(temp__5804__auto____$1)){
var hooks = temp__5804__auto____$1;
return cljs.core.contains_QMARK_(hooks,["hook:editor:slot_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''));
} else {
return null;
}
} else {
return null;
}
});
frontend.state.active_tldraw_app = (function frontend$state$active_tldraw_app(){
var temp__5804__auto__ = document.body.querySelector(".logseq-tldraw[data-tlapp]");
if(cljs.core.truth_(temp__5804__auto__)){
var tldraw_el = temp__5804__auto__;
return frontend.state.goog$module$goog$object.get(window.tlapps,tldraw_el.dataset.tlapp);
} else {
return null;
}
});
frontend.state.tldraw_editing_logseq_block_QMARK_ = (function frontend$state$tldraw_editing_logseq_block_QMARK_(){
var temp__5804__auto__ = frontend.state.active_tldraw_app();
if(cljs.core.truth_(temp__5804__auto__)){
var app = temp__5804__auto__;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),app.selectedShapesArray.length)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.editingShape,app.selectedShapesArray.at((0)))));
} else {
return null;
}
});
frontend.state.set_graph_syncing_QMARK_ = (function frontend$state$set_graph_syncing_QMARK_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","syncing?","graph/syncing?",-560055838),value);
});
frontend.state.set_editor_in_composition_BANG_ = (function frontend$state$set_editor_in_composition_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","in-composition?","editor/in-composition?",-259037730),value);
});
frontend.state.editor_in_composition_QMARK_ = (function frontend$state$editor_in_composition_QMARK_(){
return new cljs.core.Keyword("editor","in-composition?","editor/in-composition?",-259037730).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_loading_files_BANG_ = (function frontend$state$set_loading_files_BANG_(repo,value){
if(cljs.core.truth_(repo)){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repo","loading-files?","repo/loading-files?",196666138),repo], null),value);
} else {
return null;
}
});
frontend.state.loading_files_QMARK_ = (function frontend$state$loading_files_QMARK_(repo){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("repo","loading-files?","repo/loading-files?",196666138),repo], null));
});
frontend.state.set_editor_last_input_time_BANG_ = (function frontend$state$set_editor_last_input_time_BANG_(repo,time){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-input-time","editor/last-input-time",-2008067915),repo], null),time);
});
frontend.state.set_last_transact_time_BANG_ = (function frontend$state$set_last_transact_time_BANG_(repo,time){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","last-transact-time","db/last-transact-time",1752337529),repo], null),time);

return frontend.state.set_editor_last_input_time_BANG_(repo,time);
});
frontend.state.set_db_persisted_BANG_ = (function frontend$state$set_db_persisted_BANG_(repo,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","persisted?","db/persisted?",-1110314694),repo], null),value);
});
frontend.state.db_idle_QMARK_ = (function frontend$state$db_idle_QMARK_(repo){
if(cljs.core.truth_(repo)){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","last-transact-time","db/last-transact-time",1752337529),repo], null));
if(cljs.core.truth_(temp__5804__auto__)){
var last_time = temp__5804__auto__;
var now = frontend.util.time_ms();
return ((now - last_time) >= (3000));
} else {
return null;
}
} else {
return null;
}
});
frontend.state.input_idle_QMARK_ = (function frontend$state$input_idle_QMARK_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___68946 = arguments.length;
var i__5767__auto___68947 = (0);
while(true){
if((i__5767__auto___68947 < len__5766__auto___68946)){
args__5772__auto__.push((arguments[i__5767__auto___68947]));

var G__68948 = (i__5767__auto___68947 + (1));
i__5767__auto___68947 = G__68948;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return frontend.state.input_idle_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(frontend.state.input_idle_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (repo,p__68783){
var map__68784 = p__68783;
var map__68784__$1 = cljs.core.__destructure_map(map__68784);
var diff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68784__$1,new cljs.core.Keyword(null,"diff","diff",2135942783),(1000));
if(cljs.core.truth_(repo)){
var or__5043__auto__ = (function (){var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","last-input-time","editor/last-input-time",-2008067915),repo], null));
if(cljs.core.truth_(temp__5804__auto__)){
var last_time = temp__5804__auto__;
var now = frontend.util.time_ms();
return ((now - last_time) >= diff);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(frontend.state.get_edit_input_id());
}
} else {
return null;
}
}));

(frontend.state.input_idle_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.state.input_idle_QMARK_.cljs$lang$applyTo = (function (seq68781){
var G__68782 = cljs.core.first(seq68781);
var seq68781__$1 = cljs.core.next(seq68781);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68782,seq68781__$1);
}));

/**
 * Check if whiteboard is idle.
 */
frontend.state.whiteboard_idle_QMARK_ = (function frontend$state$whiteboard_idle_QMARK_(repo){
if(cljs.core.truth_(repo)){
return ((frontend.util.time_ms() - (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("whiteboard","last-persisted-at","whiteboard/last-persisted-at",-669908968),repo], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (frontend.util.time_ms() - (10000));
}
})()) >= (3000));
} else {
return null;
}
});
frontend.state.set_nfs_refreshing_BANG_ = (function frontend$state$set_nfs_refreshing_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("nfs","refreshing?","nfs/refreshing?",-1285076588),value);
});
frontend.state.nfs_refreshing_QMARK_ = (function frontend$state$nfs_refreshing_QMARK_(){
return new cljs.core.Keyword("nfs","refreshing?","nfs/refreshing?",-1285076588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_search_result_BANG_ = (function frontend$state$set_search_result_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","result","search/result",443756363),value);
});
frontend.state.clear_search_result_BANG_ = (function frontend$state$clear_search_result_BANG_(){
return frontend.state.set_search_result_BANG_(null);
});
frontend.state.add_graph_search_filter_BANG_ = (function frontend$state$add_graph_search_filter_BANG_(q){
if(clojure.string.blank_QMARK_(q)){
return null;
} else {
return frontend.state.update_state_BANG_(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152),(function (value){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(value,q)));
}));
}
});
frontend.state.remove_search_filter_BANG_ = (function frontend$state$remove_search_filter_BANG_(q){
if(clojure.string.blank_QMARK_(q)){
return null;
} else {
return frontend.state.update_state_BANG_(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152),(function (value){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([q]),value);
}));
}
});
frontend.state.clear_search_filters_BANG_ = (function frontend$state$clear_search_filters_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","graph-filters","search/graph-filters",1646966152),cljs.core.PersistentVector.EMPTY);
});
frontend.state.get_search_mode = (function frontend$state$get_search_mode(){
return new cljs.core.Keyword("search","mode","search/mode",1628111395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.toggle_BANG_ = (function frontend$state$toggle_BANG_(path){
return frontend.state.update_state_BANG_(path,cljs.core.not);
});
frontend.state.toggle_settings_BANG_ = (function frontend$state$toggle_settings_BANG_(){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343));
});
frontend.state.settings_open_QMARK_ = (function frontend$state$settings_open_QMARK_(){
return new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.close_settings_BANG_ = (function frontend$state$close_settings_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343),false);
});
frontend.state.open_settings_BANG_ = (function frontend$state$open_settings_BANG_(var_args){
var G__68786 = arguments.length;
switch (G__68786) {
case 0:
return frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (active_tab){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","settings-open?","ui/settings-open?",1491870343),active_tab);
}));

(frontend.state.open_settings_BANG_.cljs$lang$maxFixedArity = 1);

frontend.state.set_editor_op_BANG_ = (function frontend$state$set_editor_op_BANG_(value){
frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","op","editor/op",-441449246),value);

if(cljs.core.truth_(value)){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","latest-op","editor/latest-op",-1154519796),value);
} else {
return null;
}
});
frontend.state.get_editor_op = (function frontend$state$get_editor_op(){
return new cljs.core.Keyword("editor","op","editor/op",-441449246).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_editor_latest_op = (function frontend$state$get_editor_latest_op(){
return new cljs.core.Keyword("editor","latest-op","editor/latest-op",-1154519796).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_events_chan = (function frontend$state$get_events_chan(){
return new cljs.core.Keyword("system","events","system/events",-1178951588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.pub_event_BANG_ = (function frontend$state$pub_event_BANG_(payload){
var d = promesa.core.deferred();
var chan = frontend.state.get_events_chan();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload,d], null));

return d;
});
frontend.state.get_export_block_text_indent_style = (function frontend$state$get_export_block_text_indent_style(){
return new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_export_block_text_indent_style_BANG_ = (function frontend$state$set_export_block_text_indent_style_BANG_(v){
frontend.state.set_state_BANG_(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180),v);

return frontend.storage.set(new cljs.core.Keyword("copy","export-block-text-indent-style","copy/export-block-text-indent-style",1531384180),v);
});
frontend.state.get_export_block_text_remove_options = (function frontend$state$get_export_block_text_remove_options(){
return new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.update_export_block_text_remove_options_BANG_ = (function frontend$state$update_export_block_text_remove_options_BANG_(e,k){
var f = (cljs.core.truth_(frontend.util.echecked_QMARK_(e))?cljs.core.conj:cljs.core.disj);
frontend.state.update_state_BANG_(new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869),(function (p1__68787_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__68787_SHARP_,k) : f.call(null,p1__68787_SHARP_,k));
}));

return frontend.storage.set(new cljs.core.Keyword("copy","export-block-text-remove-options","copy/export-block-text-remove-options",-1213505869),frontend.state.get_export_block_text_remove_options());
});
frontend.state.get_export_block_text_other_options = (function frontend$state$get_export_block_text_other_options(){
return new cljs.core.Keyword("copy","export-block-text-other-options","copy/export-block-text-other-options",1053932178).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.update_export_block_text_other_options_BANG_ = (function frontend$state$update_export_block_text_other_options_BANG_(k,v){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("copy","export-block-text-other-options","copy/export-block-text-other-options",1053932178),(function (p1__68788_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68788_SHARP_,k,v);
}));
});
frontend.state.set_editor_args_BANG_ = (function frontend$state$set_editor_args_BANG_(args){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","args","editor/args",208005741),args);
});
frontend.state.editing_whiteboard_portal_QMARK_ = (function frontend$state$editing_whiteboard_portal_QMARK_(){
var and__5041__auto__ = frontend.state.active_tldraw_app();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.state.tldraw_editing_logseq_block_QMARK_();
} else {
return and__5041__auto__;
}
});
frontend.state.block_component_editing_QMARK_ = (function frontend$state$block_component_editing_QMARK_(){
var and__5041__auto__ = new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.state.editing_whiteboard_portal_QMARK_());
} else {
return and__5041__auto__;
}
});
frontend.state.set_block_component_editing_mode_BANG_ = (function frontend$state$set_block_component_editing_mode_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("block","component-editing-mode?","block/component-editing-mode?",-1744931560),value);
});
frontend.state.get_editor_args = (function frontend$state$get_editor_args(){
return new cljs.core.Keyword("editor","args","editor/args",208005741).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_page_blocks_cp_BANG_ = (function frontend$state$set_page_blocks_cp_BANG_(value){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),new cljs.core.Keyword(null,"page-blocks","page-blocks",1869088690)], null),value);
});
frontend.state.get_page_blocks_cp = (function frontend$state$get_page_blocks_cp(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),new cljs.core.Keyword(null,"page-blocks","page-blocks",1869088690)], null));
});
frontend.state.set_component_BANG_ = (function frontend$state$set_component_BANG_(k,value){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),k], null),value);
});
frontend.state.get_component = (function frontend$state$get_component(k){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","components","view/components",-1071666675),k], null));
});
frontend.state.exit_editing_and_set_selected_blocks_BANG_ = (function frontend$state$exit_editing_and_set_selected_blocks_BANG_(var_args){
var G__68790 = arguments.length;
switch (G__68790) {
case 1:
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,new cljs.core.Keyword(null,"down","down",1565245570));
}));

(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (blocks,direction){
frontend.state.clear_edit_BANG_();

return frontend.state.set_selection_blocks_BANG_.cljs$core$IFn$_invoke$arity$2(blocks,direction);
}));

(frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$lang$maxFixedArity = 2);

frontend.state.set_editing_BANG_ = (function frontend$state$set_editing_BANG_(var_args){
var G__68792 = arguments.length;
switch (G__68792) {
case 4:
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (edit_input_id,content,block,cursor_range){
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5(edit_input_id,content,block,cursor_range,true);
}));

(frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (edit_input_id,content,block,cursor_range,move_cursor_QMARK_){
if((cljs.core.count(content) > frontend.state.block_content_max_length(frontend.state.get_current_repo()))){
var elements = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
if(cljs.core.truth_(cljs.core.first(elements))){
frontend.util.scroll_to_element(frontend.state.goog$module$goog$object.get(cljs.core.first(elements),"id"));
} else {
}

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(elements);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = edit_input_id;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = block;
if(cljs.core.truth_(and__5041__auto____$1)){
var or__5043__auto__ = frontend.state.publishing_enable_editing_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(cljs.core.deref(frontend.state.publishing_QMARK_));
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
var block_element = goog.dom.getElement(clojure.string.replace(edit_input_id,"edit-block","ls-block"));
var container = frontend.util.get_block_container(block_element);
var block__$1 = (cljs.core.truth_(container)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block.temp","container","block.temp/container",-493626206),frontend.state.goog$module$goog$object.get(container,"id")):block);
var content__$1 = clojure.string.trim((function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.state,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","content","editor/content",-756190443),edit_input_id], null),content__$1),new cljs.core.Keyword("editor","block","editor/block",1699377461),block__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","editing?","editor/editing?",807325417),cljs.core.PersistentArrayMap.createAsIfByAssoc([edit_input_id,true]),new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),null,new cljs.core.Keyword("editor","set-timestamp-block","editor/set-timestamp-block",1136443872),null,new cljs.core.Keyword(null,"cursor-range","cursor-range",-1296152154),cursor_range], 0));
}));

var temp__5804__auto__ = goog.dom.getElement(edit_input_id);
if(cljs.core.truth_(temp__5804__auto__)){
var input = temp__5804__auto__;
var pos = cljs.core.count(cursor_range);
if(cljs.core.truth_(content__$1)){
frontend.util.set_change_value(input,content__$1);
} else {
}

if(cljs.core.truth_(move_cursor_QMARK_)){
frontend.util.cursor.move_cursor_to(input,pos);
} else {
}

if(cljs.core.truth_((function (){var or__5043__auto__ = frontend.util.mobile_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),false);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
}));

(frontend.state.set_editing_BANG_.cljs$lang$maxFixedArity = 5);

frontend.state.action_bar_open_QMARK_ = (function frontend$state$action_bar_open_QMARK_(){
return new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.remove_watch_state = (function frontend$state$remove_watch_state(key){
return cljs.core.remove_watch(frontend.state.state,key);
});
frontend.state.get_git_auto_commit_enabled_QMARK_ = (function frontend$state$get_git_auto_commit_enabled_QMARK_(){
return frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","disable-auto-commit?","git/disable-auto-commit?",1374476539)], null)) === false;
});
frontend.state.get_git_commit_on_close_enabled_QMARK_ = (function frontend$state$get_git_commit_on_close_enabled_QMARK_(){
return frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("git","commit-on-close?","git/commit-on-close?",398720116)], null));
});
frontend.state.set_last_key_code_BANG_ = (function frontend$state$set_last_key_code_BANG_(key_code){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236),key_code);
});
frontend.state.get_last_key_code = (function frontend$state$get_last_key_code(){
return new cljs.core.Keyword("editor","last-key-code","editor/last-key-code",607982236).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_block_op_type_BANG_ = (function frontend$state$set_block_op_type_BANG_(op_type){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","block-op-type","editor/block-op-type",1578820069),op_type);
});
frontend.state.get_block_op_type = (function frontend$state$get_block_op_type(){
return new cljs.core.Keyword("editor","block-op-type","editor/block-op-type",1578820069).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.feature_http_server_enabled_QMARK_ = (function frontend$state$feature_http_server_enabled_QMARK_(){
return cljs.core.boolean$(frontend.storage.get(new cljs.core.Keyword("frontend.spec.storage","http-server-enabled","frontend.spec.storage/http-server-enabled",-1753032348)));
});
frontend.state.get_plugin_by_id = (function frontend$state$get_plugin_by_id(id){
var temp__5804__auto__ = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var id__$1 = temp__5804__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034),id__$1], null));
} else {
return null;
}
});
frontend.state.get_enabled_QMARK__installed_plugins = (function frontend$state$get_enabled_QMARK__installed_plugins(var_args){
var G__68795 = arguments.length;
switch (G__68795) {
case 1:
return frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$1 = (function (theme_QMARK_){
return frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$4(theme_QMARK_,true,false,false);
}));

(frontend.state.get_enabled_QMARK__installed_plugins.cljs$core$IFn$_invoke$arity$4 = (function (theme_QMARK_,enabled_QMARK_,include_unpacked_QMARK_,include_all_QMARK_){
return cljs.core.filterv((function (p1__68793_SHARP_){
var and__5041__auto__ = (cljs.core.truth_(include_unpacked_QMARK_)?true:new cljs.core.Keyword(null,"iir","iir",-231680811).cljs$core$IFn$_invoke$arity$1(p1__68793_SHARP_));
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (((!(cljs.core.boolean_QMARK_(enabled_QMARK_))))?true:cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.not(enabled_QMARK_),cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__68793_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)))));
if(and__5041__auto____$1){
var or__5043__auto__ = include_all_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.boolean_QMARK_(theme_QMARK_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(theme_QMARK_),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(p1__68793_SHARP_));
} else {
return true;
}
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}),cljs.core.vals(new cljs.core.Keyword("plugin","installed-plugins","plugin/installed-plugins",-1068618034).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
}));

(frontend.state.get_enabled_QMARK__installed_plugins.cljs$lang$maxFixedArity = 4);

frontend.state.lsp_enabled_QMARK__or_theme = (function frontend$state$lsp_enabled_QMARK__or_theme(){
return new cljs.core.Keyword("plugin","enabled","plugin/enabled",-2065640529).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.lsp_enabled_QMARK_ = frontend.state.lsp_enabled_QMARK__or_theme();
frontend.state.consume_updates_from_coming_plugin_BANG_ = (function frontend$state$consume_updates_from_coming_plugin_BANG_(payload,updated_QMARK_){
var temp__5804__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload));
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
var prev_pending_QMARK_ = cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Updates: consumed pending - ",id], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

if(cljs.core.truth_(updated_QMARK_)){
var temp__5802__auto___68953 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(payload);
if(cljs.core.truth_(temp__5802__auto___68953)){
var error_68954 = temp__5802__auto___68953;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-code","error-code",180497232),error_68954], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,payload], 0));
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674),id,prev_pending_QMARK_,updated_QMARK_], null));
} else {
return null;
}
});
frontend.state.coming_update_new_version_QMARK_ = (function frontend$state$coming_update_new_version_QMARK_(pkg){
var and__5041__auto__ = pkg;
if(cljs.core.truth_(and__5041__auto__)){
return new cljs.core.Keyword(null,"latest-version","latest-version",-1985110248).cljs$core$IFn$_invoke$arity$1(pkg);
} else {
return and__5041__auto__;
}
});
frontend.state.plugin_update_available_QMARK_ = (function frontend$state$plugin_update_available_QMARK_(id){
var temp__5804__auto__ = (function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pkg = temp__5804__auto__;
return frontend.state.coming_update_new_version_QMARK_(pkg);
} else {
return null;
}
});
frontend.state.all_available_coming_updates = (function frontend$state$all_available_coming_updates(var_args){
var G__68799 = arguments.length;
switch (G__68799) {
case 0:
return frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
}));

(frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$1 = (function (updates){
var temp__5804__auto__ = cljs.core.vals(updates);
if(cljs.core.truth_(temp__5804__auto__)){
var updates__$1 = temp__5804__auto__;
return cljs.core.filterv((function (p1__68797_SHARP_){
return frontend.state.coming_update_new_version_QMARK_(p1__68797_SHARP_);
}),updates__$1);
} else {
return null;
}
}));

(frontend.state.all_available_coming_updates.cljs$lang$maxFixedArity = 1);

frontend.state.get_next_selected_coming_update = (function frontend$state$get_next_selected_coming_update(){
var temp__5804__auto__ = frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5804__auto__)){
var updates = temp__5804__auto__;
var unchecked = new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68800_SHARP_){
return (((!(((cljs.core.seq(unchecked)) && (cljs.core.contains_QMARK_(unchecked,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__68800_SHARP_))))))) && (cljs.core.not(new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(p1__68800_SHARP_))));
}),updates));
} else {
return null;
}
});
frontend.state.set_unchecked_update = (function frontend$state$set_unchecked_update(id,unchecked_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.update,new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111),(cljs.core.truth_(unchecked_QMARK_)?cljs.core.conj:cljs.core.disj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
frontend.state.reset_unchecked_update = (function frontend$state$reset_unchecked_update(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("plugin","updates-unchecked","plugin/updates-unchecked",723985111),cljs.core.PersistentHashSet.EMPTY);
});
frontend.state.reset_all_updates_state = (function frontend$state$reset_all_updates_state(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("plugin","updates-auto-checking?","plugin/updates-auto-checking?",1617323181),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608),false], 0));
});
frontend.state.sub_right_sidebar_blocks = (function frontend$state$sub_right_sidebar_blocks(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var current_repo = temp__5804__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68801_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__68801_SHARP_),current_repo);
}),frontend.state.sub(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475)));
} else {
return null;
}
});
frontend.state.toggle_collapsed_block_BANG_ = (function frontend$state$toggle_collapsed_block_BANG_(block_id){
var current_repo = frontend.state.get_current_repo();
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),current_repo,block_id], null),cljs.core.not);
});
frontend.state.set_collapsed_block_BANG_ = (function frontend$state$set_collapsed_block_BANG_(block_id,value){
var current_repo = frontend.state.get_current_repo();
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),current_repo,block_id], null),value);
});
frontend.state.sub_collapsed = (function frontend$state$sub_collapsed(block_id){
return frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","collapsed-blocks","ui/collapsed-blocks",-968043167),frontend.state.get_current_repo(),block_id], null));
});
frontend.state.get_modal_id = (function frontend$state$get_modal_id(){
return new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.edit_in_query_or_refs_component = (function frontend$state$edit_in_query_or_refs_component(){
var config = cljs.core.last(frontend.state.get_editor_args());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"ref?","ref?",1932693720),new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(config)], null);
});
frontend.state.set_auth_id_token = (function frontend$state$set_auth_id_token(id_token){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946),id_token);
});
frontend.state.set_auth_refresh_token = (function frontend$state$set_auth_refresh_token(refresh_token){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760),refresh_token);
});
frontend.state.set_auth_access_token = (function frontend$state$set_auth_access_token(access_token){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615),access_token);
});
frontend.state.get_auth_id_token = (function frontend$state$get_auth_id_token(){
return frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
});
frontend.state.get_auth_refresh_token = (function frontend$state$get_auth_refresh_token(){
return new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.set_file_sync_manager = (function frontend$state$set_file_sync_manager(graph_uuid,v){
if(cljs.core.truth_((function (){var and__5041__auto__ = graph_uuid;
if(cljs.core.truth_(and__5041__auto__)){
return v;
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),graph_uuid,new cljs.core.Keyword("file-sync","sync-manager","file-sync/sync-manager",49683808)], null),v);
} else {
return null;
}
});
frontend.state.get_file_sync_manager = (function frontend$state$get_file_sync_manager(graph_uuid){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),graph_uuid,new cljs.core.Keyword("file-sync","sync-manager","file-sync/sync-manager",49683808)], null));
});
frontend.state.clear_file_sync_state_BANG_ = (function frontend$state$clear_file_sync_state_BANG_(graph_uuid){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),graph_uuid], null),null);
});
frontend.state.clear_file_sync_progress_BANG_ = (function frontend$state$clear_file_sync_progress_BANG_(graph_uuid){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),graph_uuid,new cljs.core.Keyword("file-sync","progress","file-sync/progress",-1051866953)], null),null);
});
frontend.state.set_file_sync_state = (function frontend$state$set_file_sync_state(graph_uuid,v){
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),v);
} else {
}
} else {
}
} else {
}

return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),graph_uuid,new cljs.core.Keyword("file-sync","sync-state","file-sync/sync-state",-474069969)], null),v);
});
frontend.state.get_current_file_sync_graph_uuid = (function frontend$state$get_current_file_sync_graph_uuid(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),new cljs.core.Keyword(null,"current-graph-uuid","current-graph-uuid",359245938)], null));
});
frontend.state.sub_current_file_sync_graph_uuid = (function frontend$state$sub_current_file_sync_graph_uuid(){
return frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),new cljs.core.Keyword(null,"current-graph-uuid","current-graph-uuid",359245938)], null));
});
frontend.state.get_file_sync_state = (function frontend$state$get_file_sync_state(var_args){
var G__68810 = arguments.length;
switch (G__68810) {
case 0:
return frontend.state.get_file_sync_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.state.get_file_sync_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.get_file_sync_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.state.get_file_sync_state.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_file_sync_graph_uuid());
}));

(frontend.state.get_file_sync_state.cljs$core$IFn$_invoke$arity$1 = (function (graph_uuid){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),graph_uuid,new cljs.core.Keyword("file-sync","sync-state","file-sync/sync-state",-474069969)], null));
}));

(frontend.state.get_file_sync_state.cljs$lang$maxFixedArity = 1);

frontend.state.sub_file_sync_state = (function frontend$state$sub_file_sync_state(graph_uuid){
return frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),graph_uuid,new cljs.core.Keyword("file-sync","sync-state","file-sync/sync-state",-474069969)], null));
});
frontend.state.reset_parsing_state_BANG_ = (function frontend$state$reset_parsing_state_BANG_(){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","parsing-state","graph/parsing-state",-1745487605),frontend.state.get_current_repo()], null),cljs.core.PersistentArrayMap.EMPTY);
});
frontend.state.set_parsing_state_BANG_ = (function frontend$state$set_parsing_state_BANG_(m){
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","parsing-state","graph/parsing-state",-1745487605),frontend.state.get_current_repo()], null),((cljs.core.fn_QMARK_(m))?m:(function (old_value){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_value,m], 0));
})));
});
frontend.state.http_proxy_enabled_or_val_QMARK_ = (function frontend$state$http_proxy_enabled_or_val_QMARK_(){
var temp__5804__auto__ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","user-cfgs","electron/user-cfgs",-76972489),new cljs.core.Keyword("settings","agent","settings/agent",2144439922)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var map__68813 = temp__5804__auto__;
var map__68813__$1 = cljs.core.__destructure_map(map__68813);
var agent_opts = map__68813__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68813__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68813__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68813__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68813__$1,new cljs.core.Keyword(null,"port","port",1534937262));
if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["system",null], null), null),type)))) && (cljs.core.every_QMARK_(cljs.core.not_empty,cljs.core.vals(agent_opts))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
} else {
return null;
}
});
frontend.state.set_mobile_app_state_change = (function frontend$state$set_mobile_app_state_change(is_active_QMARK_){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","app-state-change","mobile/app-state-change",1316245423),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-active?","is-active?",-513516250),is_active_QMARK_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs.core.inst_ms((new Date()))], null));
});
frontend.state.get_sync_graph_by_id = (function frontend$state$get_sync_graph_by_id(graph_uuid){
if(cljs.core.truth_(graph_uuid)){
var graph = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68816_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_uuid,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(p1__68816_SHARP_));
}),frontend.state.get_repos()));
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(graph))){
return graph;
} else {
return null;
}
} else {
return null;
}
});
frontend.state.unlinked_dir_QMARK_ = (function frontend$state$unlinked_dir_QMARK_(dir){
return cljs.core.contains_QMARK_(new cljs.core.Keyword("file","unlinked-dirs","file/unlinked-dirs",-1488422337).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),dir);
});
frontend.state.get_file_rename_event_chan = (function frontend$state$get_file_rename_event_chan(){
return new cljs.core.Keyword("file","rename-event-chan","file/rename-event-chan",-901857721).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.offer_file_rename_event_chan_BANG_ = (function frontend$state$offer_file_rename_event_chan_BANG_(v){
if(cljs.core.map_QMARK_(v)){
} else {
throw (new Error("Assert failed: (map? v)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"new-path","new-path",1732999939),null,new cljs.core.Keyword(null,"old-path","old-path",-2069757806),null,new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),cljs.core.set(cljs.core.keys(v)))){
} else {
throw (new Error("Assert failed: (= #{:new-path :old-path :repo} (set (keys v)))"));
}

return cljs.core.async.offer_BANG_(frontend.state.get_file_rename_event_chan(),v);
});
frontend.state.set_onboarding_whiteboard_BANG_ = (function frontend$state$set_onboarding_whiteboard_BANG_(v){
frontend.state.set_state_BANG_(new cljs.core.Keyword("whiteboard","onboarding-whiteboard?","whiteboard/onboarding-whiteboard?",-1925305248),v);

return frontend.storage.set(new cljs.core.Keyword(null,"ls-onboarding-whiteboard?","ls-onboarding-whiteboard?",-1365895638),v);
});
frontend.state.get_onboarding_whiteboard_QMARK_ = (function frontend$state$get_onboarding_whiteboard_QMARK_(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("whiteboard","onboarding-whiteboard?","whiteboard/onboarding-whiteboard?",-1925305248)], null));
});
frontend.state.get_local_container_root_url = (function frontend$state$get_local_container_root_url(){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mobile","container-urls","mobile/container-urls",149073836),new cljs.core.Keyword(null,"localContainerUrl","localContainerUrl",-1438071718)], null));
} else {
return null;
}
});
frontend.state.get_icloud_container_root_url = (function frontend$state$get_icloud_container_root_url(){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mobile","container-urls","mobile/container-urls",149073836),new cljs.core.Keyword(null,"iCloudContainerUrl","iCloudContainerUrl",-812046927)], null));
} else {
return null;
}
});
frontend.state.get_current_pdf = (function frontend$state$get_current_pdf(){
return new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.nfs_user_granted_QMARK_ = (function frontend$state$nfs_user_granted_QMARK_(repo){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nfs","user-granted?","nfs/user-granted?",-1655101253),repo], null));
});
frontend.state.set_current_pdf_BANG_ = (function frontend$state$set_current_pdf_BANG_(inflated_file){
var settle_file_BANG_ = (function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),inflated_file);
});
if(cljs.core.not(frontend.state.get_current_pdf())){
return settle_file_BANG_();
} else {
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inflated_file,frontend.state.get_current_pdf()], null))))){
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);

return setTimeout((function (){
return settle_file_BANG_();
}),(16));
} else {
return null;
}
}
});
frontend.state.focus_whiteboard_shape = (function frontend$state$focus_whiteboard_shape(var_args){
var G__68820 = arguments.length;
switch (G__68820) {
case 1:
return frontend.state.focus_whiteboard_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.state.focus_whiteboard_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.state.focus_whiteboard_shape.cljs$core$IFn$_invoke$arity$1 = (function (shape_id){
return frontend.state.focus_whiteboard_shape.cljs$core$IFn$_invoke$arity$2(frontend.state.active_tldraw_app(),shape_id);
}));

(frontend.state.focus_whiteboard_shape.cljs$core$IFn$_invoke$arity$2 = (function (tln,shape_id){
var temp__5804__auto__ = frontend.state.goog$module$goog$object.get(tln,"api");
if(cljs.core.truth_(temp__5804__auto__)){
var api = temp__5804__auto__;
if(cljs.core.truth_((function (){var and__5041__auto__ = shape_id;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.parse_uuid(shape_id);
} else {
return and__5041__auto__;
}
})())){
api.selectShapes(shape_id);

return api.zoomToSelection();
} else {
return null;
}
} else {
return null;
}
}));

(frontend.state.focus_whiteboard_shape.cljs$lang$maxFixedArity = 2);

frontend.state.set_user_info_BANG_ = (function frontend$state$set_user_info_BANG_(info){
if(cljs.core.truth_(info)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("user","info","user/info",-345834271),info);

var groups = new cljs.core.Keyword(null,"UserGroups","UserGroups",1693861388).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.seq(groups)){
return frontend.storage.set(new cljs.core.Keyword(null,"user-groups","user-groups",-1264926454),groups);
} else {
return null;
}
} else {
return null;
}
});
frontend.state.get_user_info = (function frontend$state$get_user_info(){
return frontend.state.sub(new cljs.core.Keyword("user","info","user/info",-345834271));
});
frontend.state.clear_user_info_BANG_ = (function frontend$state$clear_user_info_BANG_(){
return frontend.storage.remove(new cljs.core.Keyword(null,"user-groups","user-groups",-1264926454));
});
frontend.state.get_color_accent = (function frontend$state$get_color_accent(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984));
});
frontend.state.set_color_accent_BANG_ = (function frontend$state$set_color_accent_BANG_(color){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984),color);

frontend.storage.set(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984),color);

return frontend.util.set_android_theme();
});
frontend.state.unset_color_accent_BANG_ = (function frontend$state$unset_color_accent_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.state,cljs.core.assoc,new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984),new cljs.core.Keyword(null,"logseq","logseq",-928939893));

frontend.storage.remove(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984));

return frontend.util.set_android_theme();
});
frontend.state.handbook_open_QMARK_ = (function frontend$state$handbook_open_QMARK_(){
return new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.get_handbook_route_chan = (function frontend$state$get_handbook_route_chan(){
return new cljs.core.Keyword("handbook","route-chan","handbook/route-chan",1649058330).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
});
frontend.state.open_handbook_pane_BANG_ = (function frontend$state$open_handbook_pane_BANG_(k){
if(cljs.core.truth_(frontend.state.handbook_open_QMARK_())){
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058),true);
}

return setTimeout((function (){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_68826){
var state_val_68827 = (state_68826[(1)]);
if((state_val_68827 === (1))){
var inst_68822 = frontend.state.get_handbook_route_chan();
var state_68826__$1 = state_68826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_68826__$1,(2),inst_68822,k);
} else {
if((state_val_68827 === (2))){
var inst_68824 = (state_68826[(2)]);
var state_68826__$1 = state_68826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68826__$1,inst_68824);
} else {
return null;
}
}
});
return (function() {
var frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto__ = null;
var frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto____0 = (function (){
var statearr_68829 = [null,null,null,null,null,null,null];
(statearr_68829[(0)] = frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto__);

(statearr_68829[(1)] = (1));

return statearr_68829;
});
var frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto____1 = (function (state_68826){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_68826);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e68830){var ex__34382__auto__ = e68830;
var statearr_68831_68958 = state_68826;
(statearr_68831_68958[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_68826[(4)]))){
var statearr_68832_68959 = state_68826;
(statearr_68832_68959[(1)] = cljs.core.first((state_68826[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68960 = state_68826;
state_68826 = G__68960;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto__ = function(state_68826){
switch(arguments.length){
case 0:
return frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto____1.call(this,state_68826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto____0;
frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto____1;
return frontend$state$open_handbook_pane_BANG__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_68833 = f__34484__auto__();
(statearr_68833[(6)] = c__34483__auto__);

return statearr_68833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}));
});
frontend.state.set_page_properties_changed_BANG_ = (function frontend$state$set_page_properties_changed_BANG_(page_name){
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","properties-changed-pages","db/properties-changed-pages",1375734367),page_name], null),(function (p1__68834_SHARP_){
return (p1__68834_SHARP_ + (1));
}));
}
});
frontend.state.sub_page_properties_changed = (function frontend$state$sub_page_properties_changed(page_name){
if(clojure.string.blank_QMARK_(page_name)){
return null;
} else {
return frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","properties-changed-pages","db/properties-changed-pages",1375734367),page_name], null));
}
});

//# sourceMappingURL=frontend.state.js.map
