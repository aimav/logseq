goog.provide('frontend.extensions.pdf.windows');
frontend.extensions.pdf.windows._STAR_active_win = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.extensions.pdf.windows._STAR_exit_pending_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.extensions.pdf.windows.resolve_styles_BANG_ = (function frontend$extensions$pdf$windows$resolve_styles_BANG_(doc){
var seq__111212 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["./css/style.css"], null));
var chunk__111213 = null;
var count__111214 = (0);
var i__111215 = (0);
while(true){
if((i__111215 < count__111214)){
var r = chunk__111213.cljs$core$IIndexed$_nth$arity$2(null,i__111215);
var link_111230 = document.createElement("link");
(link_111230.rel = "stylesheet");

(link_111230.href = r);

doc.head.appendChild(link_111230);


var G__111231 = seq__111212;
var G__111232 = chunk__111213;
var G__111233 = count__111214;
var G__111234 = (i__111215 + (1));
seq__111212 = G__111231;
chunk__111213 = G__111232;
count__111214 = G__111233;
i__111215 = G__111234;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__111212);
if(temp__5804__auto__){
var seq__111212__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__111212__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__111212__$1);
var G__111235 = cljs.core.chunk_rest(seq__111212__$1);
var G__111236 = c__5565__auto__;
var G__111237 = cljs.core.count(c__5565__auto__);
var G__111238 = (0);
seq__111212 = G__111235;
chunk__111213 = G__111236;
count__111214 = G__111237;
i__111215 = G__111238;
continue;
} else {
var r = cljs.core.first(seq__111212__$1);
var link_111239 = document.createElement("link");
(link_111239.rel = "stylesheet");

(link_111239.href = r);

doc.head.appendChild(link_111239);


var G__111240 = cljs.core.next(seq__111212__$1);
var G__111241 = null;
var G__111242 = (0);
var G__111243 = (0);
seq__111212 = G__111240;
chunk__111213 = G__111241;
count__111214 = G__111242;
i__111215 = G__111243;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.extensions.pdf.windows.resolve_own_document = (function frontend$extensions$pdf$windows$resolve_own_document(viewer){
var G__111216 = viewer;
var G__111216__$1 = (((G__111216 == null))?null:G__111216.viewer);
if((G__111216__$1 == null)){
return null;
} else {
return G__111216__$1.ownerDocument;
}
});
frontend.extensions.pdf.windows.resolve_own_container = (function frontend$extensions$pdf$windows$resolve_own_container(viewer){
var G__111217 = frontend.extensions.pdf.windows.resolve_own_document(viewer);
if((G__111217 == null)){
return null;
} else {
return G__111217.querySelector("body");
}
});
frontend.extensions.pdf.windows.resolve_own_window = (function frontend$extensions$pdf$windows$resolve_own_window(viewer){
var G__111218 = frontend.extensions.pdf.windows.resolve_own_document(viewer);
if((G__111218 == null)){
return null;
} else {
return G__111218.defaultView;
}
});
frontend.extensions.pdf.windows.check_viewer_in_system_win_QMARK_ = (function frontend$extensions$pdf$windows$check_viewer_in_system_win_QMARK_(viewer){
var G__111219 = viewer;
if((G__111219 == null)){
return null;
} else {
return G__111219.$inSystemWindow;
}
});
frontend.extensions.pdf.windows.resolve_classes_BANG_ = (function frontend$extensions$pdf$windows$resolve_classes_BANG_(doc){
var html = doc.documentElement;
var G__111220 = html.classList;
G__111220.add("is-system-window");

return G__111220;
});
frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_ = (function frontend$extensions$pdf$windows$close_pdf_in_new_window_BANG_(var_args){
var G__111222 = arguments.length;
switch (G__111222) {
case 0:
return frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reset_current_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = reset_current_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.deref(frontend.extensions.pdf.windows._STAR_exit_pending_QMARK_));
} else {
return and__5041__auto__;
}
})())){
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477),null);
} else {
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","system-win?","pdf/system-win?",-2028066550),false);

cljs.core.reset_BANG_(frontend.extensions.pdf.windows._STAR_active_win,null);

return cljs.core.reset_BANG_(frontend.extensions.pdf.windows._STAR_exit_pending_QMARK_,false);
}));

(frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$lang$maxFixedArity = 1);

frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_ = (function frontend$extensions$pdf$windows$exit_pdf_in_system_window_BANG_(var_args){
var G__111224 = arguments.length;
switch (G__111224) {
case 0:
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1(true);
}));

(frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (restore_QMARK_){
var temp__5804__auto__ = cljs.core.deref(frontend.extensions.pdf.windows._STAR_active_win);
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
if(cljs.core.truth_(restore_QMARK_)){
cljs.core.reset_BANG_(frontend.extensions.pdf.windows._STAR_exit_pending_QMARK_,true);
} else {
}

return win.close();
} else {
return null;
}
}));

(frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$lang$maxFixedArity = 1);

frontend.extensions.pdf.windows.open_pdf_in_new_window_BANG_ = (function frontend$extensions$pdf$windows$open_pdf_in_new_window_BANG_(pdf_playground,pdf_current){
if(cljs.core.truth_(pdf_current)){
var setup_win_BANG_ = (function (){
var layouts = frontend.storage.get(new cljs.core.Keyword(null,"ls-pdf-system-win-layout","ls-pdf-system-win-layout",-1686178173));
var layouts__$1 = ((((cljs.core.map_QMARK_(layouts)) && (((cljs.core.contains_QMARK_(layouts,new cljs.core.Keyword(null,"width","width",-384071477))) && (cljs.core.contains_QMARK_(layouts,new cljs.core.Keyword(null,"height","height",1025178622)))))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__111225){
var vec__111226 = p__111225;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111226,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__111226,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),","].join('');
}),"",layouts):"width=700,height=800");
var temp__5804__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(pdf_current);
if(cljs.core.truth_(and__5041__auto__)){
return window.open("about:blank","_blank",layouts__$1);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var win = temp__5804__auto__;
var doc_111246 = win.document;
var doc_el_111247 = doc_111246.documentElement;
var base_111248 = document.createElement("base");
var main_111249 = document.createElement("main");
var theme_mode_111250 = new cljs.core.Keyword("ui","theme","ui/theme",-1247877132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
(base_111248.href = location.href);

doc_111246.head.appendChild(base_111248);

(doc_111246.title = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(pdf_current);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "Logseq";
}
})());

(doc_el_111247.dataset.theme = cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme_mode_111250));

frontend.extensions.pdf.windows.resolve_classes_BANG_(doc_111246);

frontend.extensions.pdf.windows.resolve_styles_BANG_(doc_111246);

doc_111246.body.appendChild(main_111249);

rum.core.mount((pdf_playground.cljs$core$IFn$_invoke$arity$1 ? pdf_playground.cljs$core$IFn$_invoke$arity$1(pdf_current) : pdf_playground.call(null,pdf_current)),main_111249);

win.addEventListener("beforeunload",(function (){
return frontend.extensions.pdf.windows.close_pdf_in_new_window_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

win.addEventListener("resize",(function (){
return frontend.storage.set(new cljs.core.Keyword(null,"ls-pdf-system-win-layout","ls-pdf-system-win-layout",-1686178173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),doc_el_111247.clientHeight,new cljs.core.Keyword(null,"width","width",-384071477),doc_el_111247.clientWidth,new cljs.core.Keyword(null,"x","x",2099068185),win.screenX,new cljs.core.Keyword(null,"y","y",-1757859776),win.screenY], null));
}));

cljs.core.reset_BANG_(frontend.extensions.pdf.windows._STAR_active_win,win);

frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","system-win?","pdf/system-win?",-2028066550),true);

var G__111229 = win.apis;
if((G__111229 == null)){
return null;
} else {
return G__111229.doAction(cljs_bean.core.__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("window","open-blank-callback","window/open-blank-callback",637950248),new cljs.core.Keyword(null,"pdf","pdf",1586765132)], null)));
}
} else {
return null;
}
});
return setTimeout((function (){
var temp__5802__auto__ = cljs.core.deref(frontend.extensions.pdf.windows._STAR_active_win);
if(cljs.core.truth_(temp__5802__auto__)){
var win = temp__5802__auto__;
return win.focus();
} else {
return setup_win_BANG_();
}
}),(16));
} else {
return null;
}
});

//# sourceMappingURL=frontend.extensions.pdf.windows.js.map
