goog.provide('frontend.components.onboarding.quick_tour');
frontend.components.onboarding.quick_tour.load_base_assets$ = (function frontend$components$onboarding$quick_tour$load_base_assets$(){
return frontend.util.js_load$([frontend.util.JS_ROOT,"/shepherd.min.js"].join(''));
});
frontend.components.onboarding.quick_tour.make_skip_fns = (function frontend$components$onboarding$quick_tour$make_skip_fns(jsTour){
var el = document.createElement("button");
el.classList.add("cp__onboarding-skip-quick-tour");

(el.innerHTML = hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ti.ti-player-skip-forward","i.ti.ti-player-skip-forward",77204923)], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-btn-skip","on-boarding/quick-tour-btn-skip",-1960098833)], 0))], null)));

el.addEventListener("click",(function (){
return jsTour.cancel();
}));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return document.body.appendChild(el);
}),(function (){
return document.body.removeChild(el);
})], null);
});
frontend.components.onboarding.quick_tour.wait_target = (function frontend$components$onboarding$quick_tour$wait_target(fn_or_selector,time){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((typeof fn_or_selector === 'string')?(function (){
return document.querySelector(dommy.core.selector(fn_or_selector));
}):fn_or_selector),(function (action){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1(time),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
}));
}));
});
frontend.components.onboarding.quick_tour.inject_steps_indicator = (function frontend$components$onboarding$quick_tour$inject_steps_indicator(current,total){
return hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.steps","div.steps",-1177755215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-steps","on-boarding/quick-tour-steps",-850478446)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5520__auto__ = (function frontend$components$onboarding$quick_tour$inject_steps_indicator_$_iter__115186(s__115187){
return (new cljs.core.LazySeq(null,(function (){
var s__115187__$1 = s__115187;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115187__$1);
if(temp__5804__auto__){
var s__115187__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115187__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115187__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115189 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115188 = (0);
while(true){
if((i__115188 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__115188);
cljs.core.chunk_append(b__115189,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(i + (1))))?"active":null)], null),i], null));

var G__115216 = (i__115188 + (1));
i__115188 = G__115216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115189),frontend$components$onboarding$quick_tour$inject_steps_indicator_$_iter__115186(cljs.core.chunk_rest(s__115187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115189),null);
}
} else {
var i = cljs.core.first(s__115187__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(i + (1))))?"active":null)], null),i], null),frontend$components$onboarding$quick_tour$inject_steps_indicator_$_iter__115186(cljs.core.rest(s__115187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(total));
})()], null)], null));
});
frontend.components.onboarding.quick_tour.create_steps_BANG_ = (function frontend$components$onboarding$quick_tour$create_steps_BANG_(jsTour){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-help",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-help-title","on-boarding/quick-tour-help-title",-938594904)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-help-desc","on-boarding/quick-tour-help-desc",816986425)], 0))], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".cp__sidebar-help-btn",new cljs.core.Keyword(null,"on","on",173873944),"top"], null),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887)))){
return frontend.components.onboarding.quick_tour.wait_target(frontend.state.hide_right_sidebar_BANG_,(700));
} else {
return promesa.core.resolved(true);
}
}),new cljs.core.Keyword(null,"canClickTarget","canClickTarget",-330036997),true,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-btn-next","on-boarding/quick-tour-btn-next",1544164990)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),jsTour.next], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-journal-page",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-journal-page-title","on-boarding/quick-tour-journal-page-title",-456062514)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-journal-page-desc-1","on-boarding/quick-tour-journal-page-desc-1",-670416006)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-journal-page-desc-2","on-boarding/quick-tour-journal-page-desc-2",-5735671)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-journal-page-desc-3","on-boarding/quick-tour-journal-page-desc-3",504661280)], 0))], null)], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".page.is-journals .page-title",new cljs.core.Keyword(null,"on","on",173873944),"top-end"], null),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_lower_case(frontend.state.get_current_page()),frontend.util.safe_lower_case(frontend.date.today()))))){
return frontend.components.onboarding.quick_tour.wait_target((function (){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.date.today());

return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();
}),(200));
} else {
return promesa.core.resolved(true);
}
}),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-btn-back","on-boarding/quick-tour-btn-back",774475157)], 0)),new cljs.core.Keyword(null,"classes","classes",2037804510),"back",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.back], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-btn-next","on-boarding/quick-tour-btn-next",1544164990)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),jsTour.next], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(63)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-left-sidebar",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-left-sidebar-title","on-boarding/quick-tour-left-sidebar-title",-443601505)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-left-sidebar-desc","on-boarding/quick-tour-left-sidebar-desc",-296940269)], 0))], null)], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),"#left-menu",new cljs.core.Keyword(null,"on","on",173873944),"top"], null),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
return promesa.core.resolved(true);
}),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-btn-back","on-boarding/quick-tour-btn-back",774475157)], 0)),new cljs.core.Keyword(null,"classes","classes",2037804510),"back",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.back], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-btn-next","on-boarding/quick-tour-btn-next",1544164990)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),jsTour.next], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-favorites",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-favorites-title","on-boarding/quick-tour-favorites-title",-302863655)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-favorites-desc-1","on-boarding/quick-tour-favorites-desc-1",789212905)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-favorites-desc-2","on-boarding/quick-tour-favorites-desc-2",-1095748497)], 0))], null)], null)),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
if(cljs.core.not(frontend.state.sub(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728)))){
return frontend.components.onboarding.quick_tour.wait_target(frontend.state.toggle_left_sidebar_BANG_,(500));
} else {
return promesa.core.resolved(true);
}
}),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".nav-content-item.favorites",new cljs.core.Keyword(null,"on","on",173873944),"right"], null),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-btn-back","on-boarding/quick-tour-btn-back",774475157)], 0)),new cljs.core.Keyword(null,"classes","classes",2037804510),"back",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.back], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","quick-tour-btn-finish","on-boarding/quick-tour-btn-finish",-162889014)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),jsTour.complete], null)], null)], null)], null);
});
frontend.components.onboarding.quick_tour.create_steps_file_sync_BANG_ = (function frontend$components$onboarding$quick_tour$create_steps_file_sync_BANG_(jsTour){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"sync-initiate",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\uD83D\uDE80 Initiate synchronization of your current graph"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Clicking here will start the process of uploading your local files to an encrypted remote graph."], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".cp__file-sync-indicator",new cljs.core.Keyword(null,"on","on",173873944),"bottom"], null),new cljs.core.Keyword(null,"canClickTarget","canClickTarget",-330036997),true,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Cancel",new cljs.core.Keyword(null,"classes","classes",2037804510),"bg-gray",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return jsTour.hide();
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Continue",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var G__115190_115217 = document.querySelector(".cp__file-sync-indicator a.button");
if((G__115190_115217 == null)){
} else {
G__115190_115217.click();
}

return jsTour.hide();
})], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(15)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"sync-learn",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\uD83D\uDCA1 Learn about your sync status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Click here to see the progress of your local graph being synced with the cloud."], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".cp__file-sync-indicator",new cljs.core.Keyword(null,"on","on",173873944),"bottom"], null),new cljs.core.Keyword(null,"canClickTarget","canClickTarget",-330036997),true,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Got it!",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
jsTour.hide();

return setTimeout((function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","maybe-onboarding-show","file-sync/maybe-onboarding-show",1562674517),new cljs.core.Keyword(null,"congrats","congrats",1128523125)], null));
}),(3000));
})], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(15)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"sync-history",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\u23F1 Go back in time!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"With file sync you can now go through older versions of this page and revert back to them if you like!"], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".cp__btn_history_version",new cljs.core.Keyword(null,"on","on",173873944),(cljs.core.truth_(frontend.util.mobile_QMARK_())?"bottom":"left")], null),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
var temp__5804__auto__ = document.querySelector(".toolbar-dots-btn");
if(cljs.core.truth_(temp__5804__auto__)){
var target = temp__5804__auto__;
target.click();

return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((300));
} else {
return null;
}
}),new cljs.core.Keyword(null,"canClickTarget","canClickTarget",-330036997),true,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Got it!",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.hide], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(15)], null)], null)], null)], null)], null)], null)], null);
});
frontend.components.onboarding.quick_tour.create_steps_whiteboard_BANG_ = (function frontend$components$onboarding$quick_tour$create_steps_whiteboard_BANG_(jsTour){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"whiteboard-home",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","tour-whiteboard-home","on-boarding/tour-whiteboard-home",884175557),"\uD83D\uDDBC"], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","tour-whiteboard-home-description","on-boarding/tour-whiteboard-home-description",-1599967102)], 0))], null)], null)),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".nav-header .whiteboard",new cljs.core.Keyword(null,"on","on",173873944),"right"], null),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("ui","left-sidebar-open?","ui/left-sidebar-open?",899579728)))){
} else {
frontend.state.toggle_left_sidebar_BANG_();
}

frontend.components.onboarding.quick_tour.wait_target(".nav-header .whiteboard",(500));

return frontend.util.scroll_to_top.cljs$core$IFn$_invoke$arity$0();
}),new cljs.core.Keyword(null,"canClickTarget","canClickTarget",-330036997),true,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","tour-whiteboard-btn-next","on-boarding/tour-whiteboard-btn-next",1268653819)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),jsTour.next], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"whiteboard-new",new cljs.core.Keyword(null,"text","text",-1790561697),hiccups.runtime.render_html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","tour-whiteboard-new","on-boarding/tour-whiteboard-new",-1625852557),"\uD83C\uDD95\uFE0F"], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","tour-whiteboard-new-description","on-boarding/tour-whiteboard-new-description",1657645187)], 0))], null)], null)),new cljs.core.Keyword(null,"beforeShowPromise","beforeShowPromise",95458831),(function (){
frontend.handler.route.redirect_to_whiteboard_dashboard_BANG_();

return frontend.components.onboarding.quick_tour.wait_target(".dashboard-create-card",(500));
}),new cljs.core.Keyword(null,"attachTo","attachTo",1933584096),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),".dashboard-create-card",new cljs.core.Keyword(null,"on","on",173873944),"bottom"], null),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","tour-whiteboard-btn-back","on-boarding/tour-whiteboard-btn-back",520581138)], 0)),new cljs.core.Keyword(null,"classes","classes",2037804510),"back",new cljs.core.Keyword(null,"action","action",-811238024),jsTour.back], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","tour-whiteboard-btn-finish","on-boarding/tour-whiteboard-btn-finish",-1523774350)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),jsTour.complete], null)], null),new cljs.core.Keyword(null,"popperOptions","popperOptions",-1545017134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"preventOverflow",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"offset",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null)], null)], null)], null)], null)], null)], null);
});
frontend.components.onboarding.quick_tour.start = (function frontend$components$onboarding$quick_tour$start(){
var jsTour = (new Shepherd.Tour(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"useModalOverlay","useModalOverlay",-1323895540),true,new cljs.core.Keyword(null,"defaultStepOptions","defaultStepOptions",-1042424443),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),"cp__onboarding-quick-tour",new cljs.core.Keyword(null,"scrollTo","scrollTo",-658970728),false], null)], null))));
var steps = frontend.components.onboarding.quick_tour.create_steps_BANG_(jsTour);
var steps__$1 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__115192_SHARP_,p2__115191_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__115191_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p2__115191_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.onboarding.quick_tour.inject_steps_indicator((p1__115192_SHARP_ + (1)),cljs.core.count(steps)))].join(''));
}),steps);
var vec__115193 = frontend.components.onboarding.quick_tour.make_skip_fns(jsTour);
var show_skip_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115193,(0),null);
var hide_skip_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115193,(1),null);
var G__115196_115218 = jsTour;
G__115196_115218.on("show",show_skip_BANG_);

G__115196_115218.on("hide",hide_skip_BANG_);

G__115196_115218.on("complete",hide_skip_BANG_);

G__115196_115218.on("cancel",hide_skip_BANG_);


var seq__115197_115219 = cljs.core.seq(steps__$1);
var chunk__115198_115220 = null;
var count__115199_115221 = (0);
var i__115200_115222 = (0);
while(true){
if((i__115200_115222 < count__115199_115221)){
var step_115223 = chunk__115198_115220.cljs$core$IIndexed$_nth$arity$2(null,i__115200_115222);
jsTour.addStep(cljs_bean.core.__GT_js(step_115223));


var G__115224 = seq__115197_115219;
var G__115225 = chunk__115198_115220;
var G__115226 = count__115199_115221;
var G__115227 = (i__115200_115222 + (1));
seq__115197_115219 = G__115224;
chunk__115198_115220 = G__115225;
count__115199_115221 = G__115226;
i__115200_115222 = G__115227;
continue;
} else {
var temp__5804__auto___115228 = cljs.core.seq(seq__115197_115219);
if(temp__5804__auto___115228){
var seq__115197_115229__$1 = temp__5804__auto___115228;
if(cljs.core.chunked_seq_QMARK_(seq__115197_115229__$1)){
var c__5565__auto___115230 = cljs.core.chunk_first(seq__115197_115229__$1);
var G__115231 = cljs.core.chunk_rest(seq__115197_115229__$1);
var G__115232 = c__5565__auto___115230;
var G__115233 = cljs.core.count(c__5565__auto___115230);
var G__115234 = (0);
seq__115197_115219 = G__115231;
chunk__115198_115220 = G__115232;
count__115199_115221 = G__115233;
i__115200_115222 = G__115234;
continue;
} else {
var step_115235 = cljs.core.first(seq__115197_115229__$1);
jsTour.addStep(cljs_bean.core.__GT_js(step_115235));


var G__115236 = cljs.core.next(seq__115197_115229__$1);
var G__115237 = null;
var G__115238 = (0);
var G__115239 = (0);
seq__115197_115219 = G__115236;
chunk__115198_115220 = G__115237;
count__115199_115221 = G__115238;
i__115200_115222 = G__115239;
continue;
}
} else {
}
}
break;
}

return jsTour.start();
});
frontend.components.onboarding.quick_tour.start_file_sync = (function frontend$components$onboarding$quick_tour$start_file_sync(type){
var jsTour = frontend.state.sub(new cljs.core.Keyword("file-sync","jstour-inst","file-sync/jstour-inst",-1545838291));
var jsTour__$1 = (function (){var or__5043__auto__ = jsTour;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var inst = (new Shepherd.Tour(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"useModalOverlay","useModalOverlay",-1323895540),true,new cljs.core.Keyword(null,"defaultStepOptions","defaultStepOptions",-1042424443),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),"cp__onboarding-quick-tour ignore-outside-event",new cljs.core.Keyword(null,"scrollTo","scrollTo",-658970728),false], null)], null))));
var steps = frontend.components.onboarding.quick_tour.create_steps_file_sync_BANG_(inst);
inst.on("show",(function (){
return setTimeout((function (){
var step = inst.currentStep;
var temp__5804__auto__ = (function (){var and__5041__auto__ = step;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = step.el.classList.contains("ignore-outside-event");
if(cljs.core.truth_(and__5041__auto____$1)){
return document.querySelector(".shepherd-modal-overlay-container");
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var overlay = temp__5804__auto__;
overlay.classList.add("ignore-outside-event");

var G__115201 = step.target;
if((G__115201 == null)){
return null;
} else {
return G__115201.addEventListener("click",(function (){
return inst.hide();
}));
}
} else {
return null;
}
}),(1000));
}));

var seq__115202_115240 = cljs.core.seq(steps);
var chunk__115203_115241 = null;
var count__115204_115242 = (0);
var i__115205_115243 = (0);
while(true){
if((i__115205_115243 < count__115204_115242)){
var step_115244 = chunk__115203_115241.cljs$core$IIndexed$_nth$arity$2(null,i__115205_115243);
inst.addStep(cljs_bean.core.__GT_js(step_115244));


var G__115245 = seq__115202_115240;
var G__115246 = chunk__115203_115241;
var G__115247 = count__115204_115242;
var G__115248 = (i__115205_115243 + (1));
seq__115202_115240 = G__115245;
chunk__115203_115241 = G__115246;
count__115204_115242 = G__115247;
i__115205_115243 = G__115248;
continue;
} else {
var temp__5804__auto___115249 = cljs.core.seq(seq__115202_115240);
if(temp__5804__auto___115249){
var seq__115202_115250__$1 = temp__5804__auto___115249;
if(cljs.core.chunked_seq_QMARK_(seq__115202_115250__$1)){
var c__5565__auto___115251 = cljs.core.chunk_first(seq__115202_115250__$1);
var G__115252 = cljs.core.chunk_rest(seq__115202_115250__$1);
var G__115253 = c__5565__auto___115251;
var G__115254 = cljs.core.count(c__5565__auto___115251);
var G__115255 = (0);
seq__115202_115240 = G__115252;
chunk__115203_115241 = G__115253;
count__115204_115242 = G__115254;
i__115205_115243 = G__115255;
continue;
} else {
var step_115256 = cljs.core.first(seq__115202_115250__$1);
inst.addStep(cljs_bean.core.__GT_js(step_115256));


var G__115257 = cljs.core.next(seq__115202_115250__$1);
var G__115258 = null;
var G__115259 = (0);
var G__115260 = (0);
seq__115202_115240 = G__115257;
chunk__115203_115241 = G__115258;
count__115204_115242 = G__115259;
i__115205_115243 = G__115260;
continue;
}
} else {
}
}
break;
}

frontend.state.set_state_BANG_(new cljs.core.Keyword("file-sync","jstour-inst","file-sync/jstour-inst",-1545838291),inst);

return inst;
}
})();
return setTimeout((function (){
return jsTour__$1.show(cljs.core.name(type));
}),(200));
});
frontend.components.onboarding.quick_tour.start_whiteboard = (function frontend$components$onboarding$quick_tour$start_whiteboard(){
var jsTour = (new Shepherd.Tour(cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"useModalOverlay","useModalOverlay",-1323895540),true,new cljs.core.Keyword(null,"defaultStepOptions","defaultStepOptions",-1042424443),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),"cp__onboarding-quick-tour",new cljs.core.Keyword(null,"scrollTo","scrollTo",-658970728),false], null)], null))));
var steps = frontend.components.onboarding.quick_tour.create_steps_whiteboard_BANG_(jsTour);
var steps__$1 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__115207_SHARP_,p2__115206_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__115206_SHARP_,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p2__115206_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.onboarding.quick_tour.inject_steps_indicator((p1__115207_SHARP_ + (1)),cljs.core.count(steps)))].join(''));
}),steps);
var vec__115208 = frontend.components.onboarding.quick_tour.make_skip_fns(jsTour);
var show_skip_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115208,(0),null);
var hide_skip_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115208,(1),null);
var G__115211_115261 = jsTour;
G__115211_115261.on("show",show_skip_BANG_);

G__115211_115261.on("hide",hide_skip_BANG_);

G__115211_115261.on("complete",hide_skip_BANG_);

G__115211_115261.on("cancel",hide_skip_BANG_);


var seq__115212_115262 = cljs.core.seq(steps__$1);
var chunk__115213_115263 = null;
var count__115214_115264 = (0);
var i__115215_115265 = (0);
while(true){
if((i__115215_115265 < count__115214_115264)){
var step_115266 = chunk__115213_115263.cljs$core$IIndexed$_nth$arity$2(null,i__115215_115265);
jsTour.addStep(cljs_bean.core.__GT_js(step_115266));


var G__115267 = seq__115212_115262;
var G__115268 = chunk__115213_115263;
var G__115269 = count__115214_115264;
var G__115270 = (i__115215_115265 + (1));
seq__115212_115262 = G__115267;
chunk__115213_115263 = G__115268;
count__115214_115264 = G__115269;
i__115215_115265 = G__115270;
continue;
} else {
var temp__5804__auto___115271 = cljs.core.seq(seq__115212_115262);
if(temp__5804__auto___115271){
var seq__115212_115272__$1 = temp__5804__auto___115271;
if(cljs.core.chunked_seq_QMARK_(seq__115212_115272__$1)){
var c__5565__auto___115273 = cljs.core.chunk_first(seq__115212_115272__$1);
var G__115274 = cljs.core.chunk_rest(seq__115212_115272__$1);
var G__115275 = c__5565__auto___115273;
var G__115276 = cljs.core.count(c__5565__auto___115273);
var G__115277 = (0);
seq__115212_115262 = G__115274;
chunk__115213_115263 = G__115275;
count__115214_115264 = G__115276;
i__115215_115265 = G__115277;
continue;
} else {
var step_115278 = cljs.core.first(seq__115212_115272__$1);
jsTour.addStep(cljs_bean.core.__GT_js(step_115278));


var G__115279 = cljs.core.next(seq__115212_115272__$1);
var G__115280 = null;
var G__115281 = (0);
var G__115282 = (0);
seq__115212_115262 = G__115279;
chunk__115213_115263 = G__115280;
count__115214_115264 = G__115281;
i__115215_115265 = G__115282;
continue;
}
} else {
}
}
break;
}

return jsTour.start();
});
frontend.components.onboarding.quick_tour.ready = (function frontend$components$onboarding$quick_tour$ready(callback){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((((window.Shepherd == null))?frontend.components.onboarding.quick_tour.load_base_assets$():promesa.core.resolved(true)),callback);
});
frontend.components.onboarding.quick_tour.should_guide_QMARK_ = false;
frontend.components.onboarding.quick_tour.init = (function frontend$components$onboarding$quick_tour$init(){
frontend.handler.command_palette.register(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("document","quick-tour","document/quick-tour",-2012804753),new cljs.core.Keyword(null,"desc","desc",2093485764),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("on-boarding","command-palette-quick-tour","on-boarding/command-palette-quick-tour",912103452)], 0)),new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return frontend.components.onboarding.quick_tour.ready(frontend.components.onboarding.quick_tour.start);
})], null));

if(frontend.components.onboarding.quick_tour.should_guide_QMARK_){
return frontend.components.onboarding.quick_tour.ready(frontend.components.onboarding.quick_tour.start);
} else {
return null;
}
});

//# sourceMappingURL=frontend.components.onboarding.quick_tour.js.map
