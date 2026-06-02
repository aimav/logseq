goog.provide('frontend.extensions.pdf.toolbar');
frontend.extensions.pdf.toolbar._STAR_area_dashed_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,false)(frontend.storage.get("ls-pdf-area-is-dashed")));
frontend.extensions.pdf.toolbar._STAR_area_mode_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.extensions.pdf.toolbar._STAR_highlight_mode_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.extensions.pdf.toolbar._STAR_highlights_ctx_STAR_ = (function (){var ctx__51520__auto__ = rum.core.create_context(null);
(ctx__51520__auto__.displayName = "Context(frontend.extensions.pdf.toolbar/*highlights-ctx*)");

return ctx__51520__auto__;
})();
frontend.extensions.pdf.toolbar.pdf_settings = rum.core.lazy_build(rum.core.build_defc,(function (viewer,theme,p__119063){
var map__119064 = p__119063;
var map__119064__$1 = cljs.core.__destructure_map(map__119064);
var hide_settings_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119064__$1,new cljs.core.Keyword(null,"hide-settings!","hide-settings!",-226708021));
var select_theme_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119064__$1,new cljs.core.Keyword(null,"select-theme!","select-theme!",1638110696));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119064__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var _STAR_el_popup = rum.core.use_ref(null);
var vec__119065 = frontend.rum.use_atom(frontend.extensions.pdf.toolbar._STAR_area_dashed_QMARK_);
var area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119065,(0),null);
var set_area_dashed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119065,(1),null);
var vec__119068 = rum.core.use_state(frontend.state.sub(new cljs.core.Keyword("pdf","block-highlight-colored?","pdf/block-highlight-colored?",1763046626)));
var hl_block_colored_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119068,(0),null);
var set_hl_block_colored_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119068,(1),null);
var vec__119071 = rum.core.use_state(frontend.state.sub(new cljs.core.Keyword("pdf","auto-open-ctx-menu?","pdf/auto-open-ctx-menu?",-1579137381)));
var auto_open_ctx_menu_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119071,(0),null);
var set_auto_open_ctx_menu_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119071,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el_popup = rum.core.deref(_STAR_el_popup);
var cb = (function (e){
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.which,(27));
if(and__5041__auto__){
return (hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_settings_BANG_.call(null));
} else {
return and__5041__auto__;
}
});
setTimeout((function (){
return el_popup.focus();
}));

el_popup.addEventListener("keyup",cb);

return (function (){
return el_popup.removeEventListener("keyup",cb);
});
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.storage.set("ls-pdf-area-is-dashed",cljs.core.boolean$(area_dashed_QMARK_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [area_dashed_QMARK_], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var b = cljs.core.boolean$(hl_block_colored_QMARK_);
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","block-highlight-colored?","pdf/block-highlight-colored?",1763046626),b);

return frontend.storage.set("ls-pdf-hl-block-is-colored",b);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hl_block_colored_QMARK_], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var b = cljs.core.boolean$(auto_open_ctx_menu_QMARK_);
frontend.state.set_state_BANG_(new cljs.core.Keyword("pdf","auto-open-ctx-menu?","pdf/auto-open-ctx-menu?",-1579137381),b);

return frontend.storage.set("ls-pdf-auto-open-ctx-menu",b);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [auto_open_ctx_menu_QMARK_], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var cb = (function (p1__119062_SHARP_){
var target = p1__119062_SHARP_.target;
if(((cljs.core.not((function (){var G__119074 = rum.core.deref(_STAR_el_popup);
if((G__119074 == null)){
return null;
} else {
return G__119074.contains(target);
}
})())) && ((target.closest(".ui__modal") == null)))){
return (hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_settings_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_settings_BANG_.call(null));
} else {
return null;
}
});
var doc = frontend.extensions.pdf.windows.resolve_own_container(viewer);
setTimeout((function (){
return doc.addEventListener("click",cb);
}));

return (function (){
return doc.removeEventListener("click",cb);
});
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'className':"extensions__pdf-settings hls-popup-overlay visible"},[daiquiri.core.create_element("div",{'ref':_STAR_el_popup,'tabIndex':(-1),'className':"extensions__pdf-settings-inner hls-popup-box"},[(function (){var attrs119075 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (it){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.flex.items-center.justify-center","button.flex.items-center.justify-center",-1757945011),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),it,new cljs.core.Keyword(null,"class","class",-2030961996),it,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (select_theme_BANG_.cljs$core$IFn$_invoke$arity$1 ? select_theme_BANG_.cljs$core$IFn$_invoke$arity$1(it) : select_theme_BANG_.call(null,it));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,it))?frontend.components.svg.check.cljs$core$IFn$_invoke$arity$0():null)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["light","warm","dark"], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119075))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-settings-item","theme-picker"], null)], null),attrs119075], 0))):{'className':"extensions__pdf-settings-item theme-picker"}),((cljs.core.map_QMARK_(attrs119075))?null:[daiquiri.interpreter.interpret(attrs119075)]));
})(),daiquiri.core.create_element("div",{'className':"extensions__pdf-settings-item toggle-input"},[(function (){var attrs119076 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","toggle-dashed","pdf/toggle-dashed",431816058)) : t.call(null,new cljs.core.Keyword("pdf","toggle-dashed","pdf/toggle-dashed",431816058)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs119076))?daiquiri.interpreter.element_attributes(attrs119076):null),((cljs.core.map_QMARK_(attrs119076))?null:[daiquiri.interpreter.interpret(attrs119076)]));
})(),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(area_dashed_QMARK_,(function (){
var G__119078 = cljs.core.not(area_dashed_QMARK_);
return (set_area_dashed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_area_dashed_QMARK_.cljs$core$IFn$_invoke$arity$1(G__119078) : set_area_dashed_QMARK_.call(null,G__119078));
}),true))]),daiquiri.core.create_element("div",{'className':"extensions__pdf-settings-item toggle-input is-between"},[(function (){var attrs119079 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","hl-block-colored","pdf/hl-block-colored",1129335772)) : t.call(null,new cljs.core.Keyword("pdf","hl-block-colored","pdf/hl-block-colored",1129335772)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs119079))?daiquiri.interpreter.element_attributes(attrs119079):null),((cljs.core.map_QMARK_(attrs119079))?null:[daiquiri.interpreter.interpret(attrs119079)]));
})(),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(hl_block_colored_QMARK_,(function (){
var G__119081 = cljs.core.not(hl_block_colored_QMARK_);
return (set_hl_block_colored_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_hl_block_colored_QMARK_.cljs$core$IFn$_invoke$arity$1(G__119081) : set_hl_block_colored_QMARK_.call(null,G__119081));
}),true))]),daiquiri.core.create_element("div",{'className':"extensions__pdf-settings-item toggle-input is-between"},[(function (){var attrs119082 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","auto-open-context-menu","pdf/auto-open-context-menu",-1451551055)) : t.call(null,new cljs.core.Keyword("pdf","auto-open-context-menu","pdf/auto-open-context-menu",-1451551055)));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs119082))?daiquiri.interpreter.element_attributes(attrs119082):null),((cljs.core.map_QMARK_(attrs119082))?null:[daiquiri.interpreter.interpret(attrs119082)]));
})(),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(auto_open_ctx_menu_QMARK_,(function (){
var G__119084 = cljs.core.not(auto_open_ctx_menu_QMARK_);
return (set_auto_open_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_auto_open_ctx_menu_BANG_.cljs$core$IFn$_invoke$arity$1(G__119084) : set_auto_open_ctx_menu_BANG_.call(null,G__119084));
}),true))]),daiquiri.core.create_element("div",{'className':"extensions__pdf-settings-item toggle-input"},[daiquiri.core.create_element("a",{'title':(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","doc-metadata","pdf/doc-metadata",-356969852)) : t.call(null,new cljs.core.Keyword("pdf","doc-metadata","pdf/doc-metadata",-356969852))),'onClick':(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.get_meta_data$(viewer),(function (ret){
return promesa.protocols._promise(frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((frontend.extensions.pdf.toolbar.make_docinfo_in_modal.cljs$core$IFn$_invoke$arity$1 ? frontend.extensions.pdf.toolbar.make_docinfo_in_modal.cljs$core$IFn$_invoke$arity$1(ret) : frontend.extensions.pdf.toolbar.make_docinfo_in_modal.call(null,ret))));
}));
}));
}),'className':"is-info w-full text-gray-500"},[(function (){var attrs119085 = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","doc-metadata","pdf/doc-metadata",-356969852)) : t.call(null,new cljs.core.Keyword("pdf","doc-metadata","pdf/doc-metadata",-356969852)));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs119085))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","justify-between","w-full"], null)], null),attrs119085], 0))):{'className':"flex items-center justify-between w-full"}),((cljs.core.map_QMARK_(attrs119085))?[daiquiri.interpreter.interpret(frontend.components.svg.icon_info.cljs$core$IFn$_invoke$arity$0())]:[daiquiri.interpreter.interpret(attrs119085),daiquiri.interpreter.interpret(frontend.components.svg.icon_info.cljs$core$IFn$_invoke$arity$0())]));
})()])])])]);
}),null,"frontend.extensions.pdf.toolbar/pdf-settings");
frontend.extensions.pdf.toolbar.docinfo_display = rum.core.lazy_build(rum.core.build_defc,(function (info,close_fn_BANG_){
return daiquiri.core.create_element("div",{'id':"pdf-docinfo",'className':"extensions__pdf-doc-info"},[daiquiri.core.create_element("div",{'className':"inner-text"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$pdf$toolbar$iter__119087(s__119088){
return (new cljs.core.LazySeq(null,(function (){
var s__119088__$1 = s__119088;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119088__$1);
if(temp__5804__auto__){
var s__119088__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119088__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119088__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119090 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119089 = (0);
while(true){
if((i__119089 < size__5519__auto__)){
var vec__119091 = cljs.core._nth(c__5518__auto__,i__119089);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119091,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119091,(1),null);
var k__$1 = [clojure.string.replace_first(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),/^\:/,""),"::"].join('');
cljs.core.chunk_append(b__119090,daiquiri.core.create_element("p",{'key':k__$1},[(function (){var attrs119094 = k__$1;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs119094))?daiquiri.interpreter.element_attributes(attrs119094):null),((cljs.core.map_QMARK_(attrs119094))?null:[attrs119094]));
})(),"  ",daiquiri.core.create_element("i",null,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))])]));

var G__119214 = (i__119089 + (1));
i__119089 = G__119214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119090),frontend$extensions$pdf$toolbar$iter__119087(cljs.core.chunk_rest(s__119088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119090),null);
}
} else {
var vec__119095 = cljs.core.first(s__119088__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119095,(1),null);
var k__$1 = [clojure.string.replace_first(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)),/^\:/,""),"::"].join('');
return cljs.core.cons(daiquiri.core.create_element("p",{'key':k__$1},[(function (){var attrs119094 = k__$1;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs119094))?daiquiri.interpreter.element_attributes(attrs119094):null),((cljs.core.map_QMARK_(attrs119094))?null:[attrs119094]));
})(),"  ",daiquiri.core.create_element("i",null,[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))])]),frontend$extensions$pdf$toolbar$iter__119087(cljs.core.rest(s__119088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(info);
})())]),(function (){var attrs119086 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Copy all",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var text = document.querySelector("#pdf-docinfo > .inner-text").innerText;
var text__$1 = clojure.string.replace(text,/[\n\t]+/,"\n");
frontend.util.copy_to_clipboard_BANG_(text__$1);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Copied!",new cljs.core.Keyword(null,"success","success",1890645906));

return (close_fn_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_fn_BANG_.cljs$core$IFn$_invoke$arity$0() : close_fn_BANG_.call(null));
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119086))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","justify-center","pt-2","pb--2"], null)], null),attrs119086], 0))):{'className':"flex items-center justify-center pt-2 pb--2"}),((cljs.core.map_QMARK_(attrs119086))?null:[daiquiri.interpreter.interpret(attrs119086)]));
})()]);
}),null,"frontend.extensions.pdf.toolbar/docinfo-display");
frontend.extensions.pdf.toolbar.make_docinfo_in_modal = (function frontend$extensions$pdf$toolbar$make_docinfo_in_modal(info){
return (function (close_fn_BANG_){
return frontend.extensions.pdf.toolbar.docinfo_display(info,close_fn_BANG_);
});
});
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.pdf !== 'undefined') && (typeof frontend.extensions.pdf.toolbar !== 'undefined') && (typeof frontend.extensions.pdf.toolbar.find_status !== 'undefined')){
} else {
frontend.extensions.pdf.toolbar.find_status = new cljs.core.PersistentArrayMap(null, 4, [(0),new cljs.core.Keyword("frontend.extensions.pdf.toolbar","found","frontend.extensions.pdf.toolbar/found",-1623456267),(1),new cljs.core.Keyword("frontend.extensions.pdf.toolbar","not-found","frontend.extensions.pdf.toolbar/not-found",-283696299),(2),new cljs.core.Keyword("frontend.extensions.pdf.toolbar","wrapped","frontend.extensions.pdf.toolbar/wrapped",-1804262050),(3),new cljs.core.Keyword("frontend.extensions.pdf.toolbar","pending","frontend.extensions.pdf.toolbar/pending",526965392)], null);
}
frontend.extensions.pdf.toolbar.pdf_finder = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__119100){
var map__119101 = p__119100;
var map__119101__$1 = cljs.core.__destructure_map(map__119101);
var hide_finder_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119101__$1,new cljs.core.Keyword(null,"hide-finder!","hide-finder!",-491498619));
var _STAR_el_finder = rum.core.use_ref(null);
var _STAR_el_input = rum.core.use_ref(null);
var bus = viewer.eventBus;
var vec__119102 = rum.core.use_state(null);
var case_sensitive_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119102,(0),null);
var set_case_sensitive_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119102,(1),null);
var vec__119105 = rum.core.use_state("");
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119105,(0),null);
var set_input_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119105,(1),null);
var vec__119108 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null));
var matches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119108,(0),null);
var set_matches_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119108,(1),null);
var vec__119111 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"current","current",-1088038603),(0),new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"query","query",-1288509510),""], null));
var find_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119111,(0),null);
var set_find_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119111,(1),null);
var vec__119114 = rum.core.use_state(false);
var entered_active0_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119114,(0),null);
var set_entered_active0_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119114,(1),null);
var vec__119117 = rum.core.use_state(false);
var entered_active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119117,(0),null);
var set_entered_active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119117,(1),null);
var reset_finder_BANG_ = (function (){
bus.dispatch("findbarclose",null);

(set_matches_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_matches_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_matches_BANG_.call(null,null));

(set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_find_state_BANG_.call(null,null));

(set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_entered_active_QMARK_.call(null,false));

return (set_entered_active0_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active0_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_entered_active0_QMARK_.call(null,false));
});
var close_finder_BANG_ = (function (){
reset_finder_BANG_();

return (hide_finder_BANG_.cljs$core$IFn$_invoke$arity$0 ? hide_finder_BANG_.cljs$core$IFn$_invoke$arity$0() : hide_finder_BANG_.call(null));
});
var do_find_BANG_ = (function (p__119120){
var map__119121 = p__119120;
var map__119121__$1 = cljs.core.__destructure_map(map__119121);
var opts = map__119121__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119121__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var prev_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119121__$1,new cljs.core.Keyword(null,"prev?","prev?",-1871077968));
var temp__5804__auto__ = (((opts instanceof cljs.core.Keyword))?opts:type);
if(cljs.core.truth_(temp__5804__auto__)){
var type__$1 = temp__5804__auto__;
return bus.dispatch("find",({"source": null, "type": cljs.core.name(type__$1), "query": input, "phraseSearch": true, "caseSensitive": case_sensitive_QMARK_, "highlightAll": true, "findPrevious": prev_QMARK_, "matchDiacritics": false}));
} else {
return null;
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = frontend.extensions.pdf.windows.resolve_own_container(viewer);
if(cljs.core.truth_(temp__5804__auto__)){
var doc = temp__5804__auto__;
var handler = (function (e){
var temp__5804__auto____$1 = (function (){var and__5041__auto__ = clojure.string.blank_QMARK_(rum.core.deref(_STAR_el_input).value);
if(and__5041__auto__){
return e.target;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var target = temp__5804__auto____$1;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Search",target.title)) && (cljs.core.not((function (){var G__119122 = rum.core.deref(_STAR_el_finder);
if((G__119122 == null)){
return null;
} else {
return G__119122.contains(target);
}
})())))){
return close_finder_BANG_();
} else {
return null;
}
} else {
return null;
}
});
doc.addEventListener("click",handler);

return (function (){
return doc.removeEventListener("click",handler);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = viewer.eventBus;
if(cljs.core.truth_(temp__5804__auto__)){
var bus__$1 = temp__5804__auto__;
bus__$1.on("updatefindmatchescount",(function (e){
var matches__$1 = cljs_bean.core.__GT_clj(e.matchesCount);
(set_matches_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_matches_BANG_.cljs$core$IFn$_invoke$arity$1(matches__$1) : set_matches_BANG_.call(null,matches__$1));

var G__119123 = (function (s){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,matches__$1], 0));
});
return (set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119123) : set_find_state_BANG_.call(null,G__119123));
}));

return bus__$1.on("updatefindcontrolstate",(function (e){
var G__119124 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.toolbar.find_status,e.state),new cljs.core.Keyword(null,"query","query",-1288509510),e.rawQuery], null),cljs_bean.core.__GT_clj(e.matchesCount)], 0));
return (set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_find_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119124) : set_find_state_BANG_.call(null,G__119124));
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if((case_sensitive_QMARK_ == null)){
return null;
} else {
return do_find_BANG_(new cljs.core.Keyword(null,"casesensitivitychange","casesensitivitychange",-1978235756));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [case_sensitive_QMARK_], null));

return daiquiri.core.create_element("div",{'onClick':(function (){
return cljs.core.List.EMPTY;
}),'className':"extensions__pdf-finder-wrap hls-popup-overlay visible"},[daiquiri.core.create_element("div",{'ref':_STAR_el_finder,'tabIndex':(-1),'className':"extensions__pdf-finder hls-popup-box"},[daiquiri.core.create_element("div",{'className':"input-inner flex items-center"},[daiquiri.core.create_element("div",{'className':"input-wrap relative"},[daiquiri.core.create_element("input",{'placeholder':"search",'type':"text",'ref':_STAR_el_input,'autoFocus':true,'value':input,'onChange':rum.core.mark_sync_update((function (e){
var val = e.target.value;
(set_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_BANG_.cljs$core$IFn$_invoke$arity$1(val) : set_input_BANG_.call(null,val));

var G__119126_119215 = (!(clojure.string.blank_QMARK_(frontend.util.trim_safe(val))));
(set_entered_active0_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active0_QMARK_.cljs$core$IFn$_invoke$arity$1(G__119126_119215) : set_entered_active0_QMARK_.call(null,G__119126_119215));

return (set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_entered_active_QMARK_.call(null,false));
})),'onKeyUp':(function (e){
var G__119127 = e.which;
switch (G__119127) {
case (13):
var shift_QMARK_ = e.shiftKey;
do_find_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"again","again",1312602037),new cljs.core.Keyword(null,"prev?","prev?",-1871077968),shift_QMARK_], null));

return (set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_entered_active_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_entered_active_QMARK_.call(null,true));

break;
case (27):
if(clojure.string.blank_QMARK_(input)){
return close_finder_BANG_();
} else {
reset_finder_BANG_();

return (set_input_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_input_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_input_BANG_.call(null,""));
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
})},[]),(cljs.core.truth_(entered_active0_QMARK_)?daiquiri.interpreter.interpret(frontend.ui.button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),"arrow-back",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"title","title",636505583),"Enter to search",new cljs.core.Keyword(null,"class","class",-2030961996),"icon-enter",new cljs.core.Keyword(null,"small?","small?",95242445),true], null))):null)]),daiquiri.interpreter.interpret(frontend.ui.button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),"letter-case",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),case_sensitive_QMARK_], null)], null))),new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__119129 = cljs.core.not(case_sensitive_QMARK_);
return (set_case_sensitive_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_case_sensitive_QMARK_.cljs$core$IFn$_invoke$arity$1(G__119129) : set_case_sensitive_QMARK_.call(null,G__119129));
})], null))),daiquiri.interpreter.interpret(frontend.ui.button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"chevron-up",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__119098_SHARP_){
do_find_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"again","again",1312602037),new cljs.core.Keyword(null,"prev?","prev?",-1871077968),true], null));

return frontend.util.stop(p1__119098_SHARP_);
})], null))),daiquiri.interpreter.interpret(frontend.ui.button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"chevron-down",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__119099_SHARP_){
do_find_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"again","again",1312602037)], null));

return frontend.util.stop(p1__119099_SHARP_);
})], null))),daiquiri.interpreter.interpret(frontend.ui.button(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"x",new cljs.core.Keyword(null,"intent","intent",-390846953),"link",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_finder_BANG_], null)))]),(function (){var attrs119125 = (function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = entered_active_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (!(clojure.string.blank_QMARK_(input)));
if(and__5041__auto____$1){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(find_state);
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var status = temp__5804__auto__;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.extensions.pdf.toolbar","not-found","frontend.extensions.pdf.toolbar/not-found",-283696299),status)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.px-3.py-3.text-xs.opacity-90","div.flex.px-3.py-3.text-xs.opacity-90",-1220455054),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [find_state,matches], null)))," of ",new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(find_state),[" matches (\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(find_state)),"\")"].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-3.py-3.text-xs.opacity-80.text-red-600","div.px-3.py-3.text-xs.opacity-80.text-red-600",-1299877515),"Not found."], null);
}
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119125))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["result-inner"], null)], null),attrs119125], 0))):{'className':"result-inner"}),((cljs.core.map_QMARK_(attrs119125))?null:[daiquiri.interpreter.interpret(attrs119125)]));
})()])]);
}),null,"frontend.extensions.pdf.toolbar/pdf-finder");
frontend.extensions.pdf.toolbar.pdf_outline_item = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__119131,p__119132){
var map__119133 = p__119131;
var map__119133__$1 = cljs.core.__destructure_map(map__119133);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119133__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119133__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119133__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var dest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119133__$1,new cljs.core.Keyword(null,"dest","dest",-34569477));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119133__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var map__119134 = p__119132;
var map__119134__$1 = cljs.core.__destructure_map(map__119134);
var ops = map__119134__$1;
var upt_outline_node_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119134__$1,new cljs.core.Keyword(null,"upt-outline-node!","upt-outline-node!",-1463872689));
var has_child_QMARK_ = cljs.core.seq(items);
var expanded_QMARK_ = cljs.core.boolean$(expanded);
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-outline-item",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has-children","has-children",-934485512),has_child_QMARK_,new cljs.core.Keyword(null,"is-expand","is-expand",-1852164794),expanded_QMARK_], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"inner"},[daiquiri.core.create_element("a",{'data-dest':JSON.stringify(cljs_bean.core.__GT_js(dest)),'onClick':(function (e){
var target = e.target;
if(cljs.core.truth_(target.closest("i"))){
var path = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119130_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(/\d+/,p1__119130_SHARP_))){
return (p1__119130_SHARP_ | (0));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__119130_SHARP_);
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(parent,/\-/));
e.preventDefault();

var G__119142 = path;
var G__119143 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),(!(expanded_QMARK_))], null);
return (upt_outline_node_BANG_.cljs$core$IFn$_invoke$arity$2 ? upt_outline_node_BANG_.cljs$core$IFn$_invoke$arity$2(G__119142,G__119143) : upt_outline_node_BANG_.call(null,G__119142,G__119143));
} else {
var temp__5804__auto__ = (function (){var and__5041__auto__ = dest;
if(cljs.core.truth_(and__5041__auto__)){
return cljs_bean.core.__GT_js(dest);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var dest__$1 = temp__5804__auto__;
return viewer.linkService.goToDestination(dest__$1);
} else {
return null;
}
}
})},[(function (){var attrs119144 = frontend.components.svg.arrow_right_v2;
return daiquiri.core.create_element("i",((cljs.core.map_QMARK_(attrs119144))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["arrow"], null)], null),attrs119144], 0))):{'className':"arrow"}),((cljs.core.map_QMARK_(attrs119144))?null:[daiquiri.interpreter.interpret(attrs119144)]));
})(),(function (){var attrs119145 = title;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs119145))?daiquiri.interpreter.element_attributes(attrs119145):null),((cljs.core.map_QMARK_(attrs119145))?null:[daiquiri.interpreter.interpret(attrs119145)]));
})()])]),((((has_child_QMARK_) && (expanded_QMARK_)))?(function (){var attrs119141 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
var parent__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent),"-items-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
return rum.core.with_key((function (){var G__119146 = viewer;
var G__119147 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([itm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent__$1], null)], 0));
var G__119148 = ops;
return (frontend.extensions.pdf.toolbar.pdf_outline_item.cljs$core$IFn$_invoke$arity$3 ? frontend.extensions.pdf.toolbar.pdf_outline_item.cljs$core$IFn$_invoke$arity$3(G__119146,G__119147,G__119148) : frontend.extensions.pdf.toolbar.pdf_outline_item.call(null,G__119146,G__119147,G__119148));
})(),parent__$1);
}),items);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119141))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["children"], null)], null),attrs119141], 0))):{'className':"children"}),((cljs.core.map_QMARK_(attrs119141))?null:[daiquiri.interpreter.interpret(attrs119141)]));
})():null)]);
}),null,"frontend.extensions.pdf.toolbar/pdf-outline-item");
frontend.extensions.pdf.toolbar.pdf_outline = rum.core.lazy_build(rum.core.build_defc,(function (viewer,_visible_QMARK_,set_visible_BANG_){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = viewer;
if(cljs.core.truth_(and__5041__auto__)){
return viewer.pdfDocument;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var pdf_doc = temp__5804__auto__;
var _STAR_el_outline = rum.core.use_ref(null);
var vec__119154 = rum.core.use_state(cljs.core.PersistentVector.EMPTY);
var outline_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119154,(0),null);
var set_outline_data_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119154,(1),null);
var upt_outline_node_BANG_ = rum.core.use_callback.cljs$core$IFn$_invoke$arity$2((function (path,attrs){
var G__119157 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(outline_data,path,cljs.core.merge,attrs);
return (set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__119157) : set_outline_data_BANG_.call(null,G__119157));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [outline_data], null));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(pdf_doc.getOutline(),(function (data){
return promesa.protocols._promise((function (){
var temp__5804__auto___119217__$1 = (function (){var and__5041__auto__ = data;
if(cljs.core.truth_(and__5041__auto__)){
return data.map((function (it){
(it.href = viewer.linkService.getDestinationHash(it.dest));

(it.expanded = false);

return it;
}));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___119217__$1)){
var data_119218__$1 = temp__5804__auto___119217__$1;
} else {
}

var G__119158 = cljs_bean.core.__GT_clj(data);
return (set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_data_BANG_.cljs$core$IFn$_invoke$arity$1(G__119158) : set_outline_data_BANG_.call(null,G__119158));
})()
);
}));
})),(function (e){
return console.error("[Load outline Error]",e);
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pdf_doc], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var el_outline = rum.core.deref(_STAR_el_outline);
var cb = (function (e){
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.which,(27));
if(and__5041__auto__){
return (set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_visible_BANG_.call(null,false));
} else {
return and__5041__auto__;
}
});
setTimeout((function (){
return el_outline.focus();
}));

el_outline.addEventListener("keyup",cb);

return (function (){
return el_outline.removeEventListener("keyup",cb);
});
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__pdf-outline-list-content","div.extensions__pdf-outline-list-content",2044333538),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_el_outline,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1)], null),((cljs.core.seq(outline_data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,itm){
return rum.core.with_key(frontend.extensions.pdf.toolbar.pdf_outline_item(viewer,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([itm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),idx], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"upt-outline-node!","upt-outline-node!",-1463872689),upt_outline_node_BANG_], null)),idx);
}),outline_data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.is-empty","section.is-empty",-877953899),"No outlines"], null))], null);
} else {
return null;
}
})());
}),null,"frontend.extensions.pdf.toolbar/pdf-outline");
frontend.extensions.pdf.toolbar.pdf_highlights_list = rum.core.lazy_build(rum.core.build_defc,(function (viewer){
var vec__119159 = rum.core.use_state(false);
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119159,(0),null);
var set_active_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119159,(1),null);
return React.createElement(frontend.extensions.pdf.toolbar._STAR_highlights_ctx_STAR_.Consumer,null,(function (hls_state){
var hls = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),(function (){var or__5043__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"initial-hls","initial-hls",-344014820).cljs$core$IFn$_invoke$arity$1(hls_state));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"latest-hls","latest-hls",-510805948).cljs$core$IFn$_invoke$arity$1(hls_state);
}
})());
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$pdf$toolbar$iter__119168(s__119169){
return (new cljs.core.LazySeq(null,(function (){
var s__119169__$1 = s__119169;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119169__$1);
if(temp__5804__auto__){
var s__119169__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119169__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119169__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119171 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119170 = (0);
while(true){
if((i__119170 < size__5519__auto__)){
var map__119172 = cljs.core._nth(c__5518__auto__,i__119170);
var map__119172__$1 = cljs.core.__destructure_map(map__119172);
var hl = map__119172__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119172__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119172__$1,new cljs.core.Keyword(null,"content","content",15833224));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119172__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119172__$1,new cljs.core.Keyword(null,"page","page",849072397));
var goto_ref_BANG_ = ((function (i__119170,map__119172,map__119172__$1,hl,id,content,properties,page,c__5518__auto__,size__5519__auto__,b__119171,s__119169__$2,temp__5804__auto__,hls,vec__119159,active,set_active_BANG_){
return (function (){
return frontend.extensions.pdf.assets.goto_block_ref_BANG_(hl);
});})(i__119170,map__119172,map__119172__$1,hl,id,content,properties,page,c__5518__auto__,size__5519__auto__,b__119171,s__119169__$2,temp__5804__auto__,hls,vec__119159,active,set_active_BANG_))
;
cljs.core.chunk_append(b__119171,daiquiri.core.create_element("div",{'key':id,'onClick':((function (i__119170,goto_ref_BANG_,map__119172,map__119172__$1,hl,id,content,properties,page,c__5518__auto__,size__5519__auto__,b__119171,s__119169__$2,temp__5804__auto__,hls,vec__119159,active,set_active_BANG_){
return (function (){
frontend.extensions.pdf.utils.scroll_to_highlight(viewer,hl);

return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(id) : set_active_BANG_.call(null,id));
});})(i__119170,goto_ref_BANG_,map__119172,map__119172__$1,hl,id,content,properties,page,c__5518__auto__,size__5519__auto__,b__119171,s__119169__$2,temp__5804__auto__,hls,vec__119159,active,set_active_BANG_))
,'onDoubleClick':goto_ref_BANG_,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-highlights-list-item",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,id))?"active":null)], null))},[daiquiri.core.create_element("h6",{'className':"flex"},[daiquiri.core.create_element("span",{'className':"flex items-center"},[daiquiri.core.create_element("small",{'data-color':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(properties)},[]),daiquiri.core.create_element("strong",null,["Page ",daiquiri.interpreter.interpret(page)])]),daiquiri.core.create_element("button",{'title':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","linked-ref","pdf/linked-ref",-925157547)], 0)),'onClick':goto_ref_BANG_},[daiquiri.interpreter.interpret(frontend.ui.icon("external-link"))])]),daiquiri.interpreter.interpret((function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(temp__5802__auto__)){
var img_stamp = temp__5802__auto__;
var fpath = frontend.extensions.pdf.assets.resolve_area_image_file(img_stamp,frontend.state.get_current_pdf(),hl);
var fpath__$1 = frontend.handler.editor.make_asset_url(fpath);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.area-wrap","p.area-wrap",-1526894037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),fpath__$1], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-wrap","p.text-wrap",-2026968505),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content)], null);
}
})())]));

var G__119219 = (i__119170 + (1));
i__119170 = G__119219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119171),frontend$extensions$pdf$toolbar$iter__119168(cljs.core.chunk_rest(s__119169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119171),null);
}
} else {
var map__119173 = cljs.core.first(s__119169__$2);
var map__119173__$1 = cljs.core.__destructure_map(map__119173);
var hl = map__119173__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119173__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119173__$1,new cljs.core.Keyword(null,"content","content",15833224));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119173__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119173__$1,new cljs.core.Keyword(null,"page","page",849072397));
var goto_ref_BANG_ = ((function (map__119173,map__119173__$1,hl,id,content,properties,page,s__119169__$2,temp__5804__auto__,hls,vec__119159,active,set_active_BANG_){
return (function (){
return frontend.extensions.pdf.assets.goto_block_ref_BANG_(hl);
});})(map__119173,map__119173__$1,hl,id,content,properties,page,s__119169__$2,temp__5804__auto__,hls,vec__119159,active,set_active_BANG_))
;
return cljs.core.cons(daiquiri.core.create_element("div",{'key':id,'onClick':((function (goto_ref_BANG_,map__119173,map__119173__$1,hl,id,content,properties,page,s__119169__$2,temp__5804__auto__,hls,vec__119159,active,set_active_BANG_){
return (function (){
frontend.extensions.pdf.utils.scroll_to_highlight(viewer,hl);

return (set_active_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_BANG_.cljs$core$IFn$_invoke$arity$1(id) : set_active_BANG_.call(null,id));
});})(goto_ref_BANG_,map__119173,map__119173__$1,hl,id,content,properties,page,s__119169__$2,temp__5804__auto__,hls,vec__119159,active,set_active_BANG_))
,'onDoubleClick':goto_ref_BANG_,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-highlights-list-item",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active,id))?"active":null)], null))},[daiquiri.core.create_element("h6",{'className':"flex"},[daiquiri.core.create_element("span",{'className':"flex items-center"},[daiquiri.core.create_element("small",{'data-color':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(properties)},[]),daiquiri.core.create_element("strong",null,["Page ",daiquiri.interpreter.interpret(page)])]),daiquiri.core.create_element("button",{'title':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("pdf","linked-ref","pdf/linked-ref",-925157547)], 0)),'onClick':goto_ref_BANG_},[daiquiri.interpreter.interpret(frontend.ui.icon("external-link"))])]),daiquiri.interpreter.interpret((function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(temp__5802__auto__)){
var img_stamp = temp__5802__auto__;
var fpath = frontend.extensions.pdf.assets.resolve_area_image_file(img_stamp,frontend.state.get_current_pdf(),hl);
var fpath__$1 = frontend.handler.editor.make_asset_url(fpath);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.area-wrap","p.area-wrap",-1526894037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),fpath__$1], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-wrap","p.text-wrap",-2026968505),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(content)], null);
}
})())]),frontend$extensions$pdf$toolbar$iter__119168(cljs.core.rest(s__119169__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(hls);
})());
}));
}),null,"frontend.extensions.pdf.toolbar/pdf-highlights-list");
frontend.extensions.pdf.toolbar.pdf_outline__AMPERSAND__highlights = rum.core.lazy_build(rum.core.build_defc,(function (viewer,visible_QMARK_,set_visible_BANG_){
var _STAR_el_container = rum.core.use_ref(null);
var vec__119174 = rum.core.use_state("contents");
var active_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119174,(0),null);
var set_active_tab_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119174,(1),null);
var set_outline_visible_BANG_ = (function (){
return (set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1("contents") : set_active_tab_BANG_.call(null,"contents"));
});
var contents_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"contents");
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = frontend.extensions.pdf.windows.resolve_own_container(viewer);
if(cljs.core.truth_(temp__5804__auto__)){
var doc = temp__5804__auto__;
var cb = (function (e){
var temp__5804__auto____$1 = e.target;
if(cljs.core.truth_(temp__5804__auto____$1)){
var target = temp__5804__auto____$1;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Outline",target.title)) && (cljs.core.not((function (){var G__119177 = rum.core.deref(_STAR_el_container);
if((G__119177 == null)){
return null;
} else {
return G__119177.contains(target);
}
})())))){
(set_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_visible_BANG_.call(null,false));

return set_outline_visible_BANG_();
} else {
return null;
}
} else {
return null;
}
});
doc.addEventListener("click",cb);

return (function (){
return doc.removeEventListener("click",cb);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-outline-wrap","hls-popup-overlay",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),visible_QMARK_], null)], null))], null))},[daiquiri.core.create_element("div",{'ref':_STAR_el_container,'tabIndex':(-1),'className':"extensions__pdf-outline hls-popup-box"},[daiquiri.core.create_element("div",{'className':"extensions__pdf-outline-tabs"},[daiquiri.core.create_element("div",{'className':"inner"},[daiquiri.core.create_element("button",{'onClick':(function (){
return (set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1("contents") : set_active_tab_BANG_.call(null,"contents"));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((contents_QMARK_)?"active":null)], null))},["Contents"]),daiquiri.core.create_element("button",{'onClick':(function (){
return (set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_tab_BANG_.cljs$core$IFn$_invoke$arity$1("highlights") : set_active_tab_BANG_.call(null,"highlights"));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((contents_QMARK_)?null:"active")], null))},["Highlights"])])]),(function (){var attrs119178 = ((contents_QMARK_)?frontend.extensions.pdf.toolbar.pdf_outline(viewer,contents_QMARK_,set_outline_visible_BANG_):frontend.extensions.pdf.toolbar.pdf_highlights_list(viewer));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119178))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__pdf-outline-panels"], null)], null),attrs119178], 0))):{'className':"extensions__pdf-outline-panels"}),((cljs.core.map_QMARK_(attrs119178))?null:[daiquiri.interpreter.interpret(attrs119178)]));
})()])]);
}),null,"frontend.extensions.pdf.toolbar/pdf-outline-&-highlights");
frontend.extensions.pdf.toolbar.pdf_toolbar = rum.core.lazy_build(rum.core.build_defc,(function (viewer,p__119181){
var map__119182 = p__119181;
var map__119182__$1 = cljs.core.__destructure_map(map__119182);
var on_external_window_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119182__$1,new cljs.core.Keyword(null,"on-external-window!","on-external-window!",244908467));
var vec__119183 = frontend.rum.use_atom(frontend.extensions.pdf.toolbar._STAR_area_mode_QMARK_);
var area_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119183,(0),null);
var set_area_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119183,(1),null);
var vec__119186 = rum.core.use_state(false);
var outline_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119186,(0),null);
var set_outline_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119186,(1),null);
var vec__119189 = rum.core.use_state(false);
var finder_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119189,(0),null);
var set_finder_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119189,(1),null);
var vec__119192 = frontend.rum.use_atom(frontend.extensions.pdf.toolbar._STAR_highlight_mode_QMARK_);
var highlight_mode_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119192,(0),null);
var set_highlight_mode_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119192,(1),null);
var vec__119195 = rum.core.use_state(false);
var settings_visible_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119195,(0),null);
var set_settings_visible_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119195,(1),null);
var _STAR_page_ref = rum.core.use_ref(null);
var vec__119198 = rum.core.use_state((1));
var current_page_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119198,(0),null);
var set_current_page_num_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119198,(1),null);
var vec__119201 = rum.core.use_state((1));
var total_page_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119201,(0),null);
var set_total_page_num_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119201,(1),null);
var vec__119204 = rum.core.use_state((function (){var or__5043__auto__ = frontend.storage.get("ls-pdf-viewer-theme");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "light";
}
})());
var viewer_theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119204,(0),null);
var set_viewer_theme_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119204,(1),null);
var group_id = viewer.$groupIdentity;
var in_system_window_QMARK_ = viewer.$inSystemWindow;
var doc = frontend.extensions.pdf.windows.resolve_own_document(viewer);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = (function (){var G__119207 = doc;
if((G__119207 == null)){
return null;
} else {
return G__119207.getElementById(["pdf-layout-container_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_id)].join(''));
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
(el.dataset.theme = viewer_theme);

frontend.storage.set("ls-pdf-viewer-theme",viewer_theme);

return (function (){
return delete el.dataset["theme"];
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer_theme], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(viewer)){
return viewer.eventBus.dispatch(cljs.core.name(new cljs.core.Keyword(null,"ls-update-extra-state","ls-update-extra-state",893479284)),({"page": current_page_num}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer,current_page_num], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = (function (){var and__5041__auto__ = viewer;
if(cljs.core.truth_(and__5041__auto__)){
return viewer.pdfDocument.numPages;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var total = temp__5804__auto__;
var bus = viewer.eventBus;
var page_fn = (function (evt){
var num = evt.pageNumber;
return (set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(num) : set_current_page_num_BANG_.call(null,num));
});
(set_total_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_total_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(total) : set_total_page_num_BANG_.call(null,total));

var G__119208_119220 = viewer.currentPageNumber;
(set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(G__119208_119220) : set_current_page_num_BANG_.call(null,G__119208_119220));

bus.on("pagechanging",page_fn);

return (function (){
return bus.off("pagechanging",page_fn);
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var input = rum.core.deref(_STAR_page_ref);
return (input.value = current_page_num);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page_num], null));

return daiquiri.core.create_element("div",{'className':"extensions__pdf-header"},[daiquiri.core.create_element("div",{'className':"extensions__pdf-toolbar"},[daiquiri.core.create_element("div",{'className':"inner"},[daiquiri.core.create_element("div",{'className':"r flex buttons"},[daiquiri.core.create_element("a",{'title':"More settings",'onClick':(function (){
var G__119209 = cljs.core.not(settings_visible_QMARK_);
return (set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__119209) : set_settings_visible_BANG_.call(null,G__119209));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.adjustments.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':["Area highlight (",(cljs.core.truth_(frontend.util.mac_QMARK_)?"\u2318":"Shift"),")"].join(''),'onClick':(function (){
var G__119210 = cljs.core.not(area_mode_QMARK_);
return (set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_area_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__119210) : set_area_mode_BANG_.call(null,G__119210));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",(cljs.core.truth_(area_mode_QMARK_)?"is-active":null)], null))},[daiquiri.interpreter.interpret(frontend.components.svg.icon_area.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':"Highlight mode",'onClick':(function (){
var G__119211 = cljs.core.not(highlight_mode_QMARK_);
return (set_highlight_mode_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_highlight_mode_BANG_.cljs$core$IFn$_invoke$arity$1(G__119211) : set_highlight_mode_BANG_.call(null,G__119211));
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["button",(cljs.core.truth_(highlight_mode_QMARK_)?"is-active":null)], null))},[daiquiri.interpreter.interpret(frontend.components.svg.highlighter.cljs$core$IFn$_invoke$arity$1((16)))]),daiquiri.core.create_element("a",{'title':"Zoom out",'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.zoom_out_viewer,viewer),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.zoom_out.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':"Zoom in",'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.extensions.pdf.utils.zoom_in_viewer,viewer),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.zoom_in.cljs$core$IFn$_invoke$arity$1((18)))]),daiquiri.core.create_element("a",{'title':"Outline",'onClick':(function (){
var G__119212 = cljs.core.not(outline_visible_QMARK_);
return (set_outline_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_outline_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__119212) : set_outline_visible_BANG_.call(null,G__119212));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.view_list.cljs$core$IFn$_invoke$arity$1((16)))]),daiquiri.core.create_element("a",{'title':"Search",'onClick':(function (){
var G__119213 = cljs.core.not(finder_visible_QMARK_);
return (set_finder_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_finder_visible_BANG_.cljs$core$IFn$_invoke$arity$1(G__119213) : set_finder_visible_BANG_.call(null,G__119213));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.search2.cljs$core$IFn$_invoke$arity$1((19)))]),daiquiri.core.create_element("a",{'title':"Annotations page",'onClick':(function (){
return frontend.extensions.pdf.assets.goto_annotations_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("pdf","current","pdf/current",-1087936477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.annotations.cljs$core$IFn$_invoke$arity$1((16)))]),daiquiri.core.create_element("a",{'title':(cljs.core.truth_(in_system_window_QMARK_)?"Open in app window":"Open in external window"),'onClick':(function (){
if(cljs.core.truth_(in_system_window_QMARK_)){
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1(true);
} else {
return (on_external_window_BANG_.cljs$core$IFn$_invoke$arity$0 ? on_external_window_BANG_.cljs$core$IFn$_invoke$arity$0() : on_external_window_BANG_.call(null));
}
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.ui.icon((cljs.core.truth_(in_system_window_QMARK_)?"window-minimize":"window-maximize")))]),daiquiri.core.create_element("div",{'className':"pager flex items-center ml-1"},[daiquiri.core.create_element("span",{'className':"nu flex items-center opacity-70"},[daiquiri.core.create_element("input",{'ref':_STAR_page_ref,'type':"number",'min':(1),'max':total_page_num,'defaultValue':current_page_num,'onMouseEnter':(function (p1__119179_SHARP_){
return p1__119179_SHARP_.target.select();
}),'onKeyUp':(function (e){
var input = e.target;
var value = frontend.util.safe_parse_int(input.value);
(set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_current_page_num_BANG_.cljs$core$IFn$_invoke$arity$1(value) : set_current_page_num_BANG_.call(null,value));

if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.keyCode,(13));
if(and__5041__auto__){
var and__5041__auto____$1 = value;
if(cljs.core.truth_(and__5041__auto____$1)){
return (value > (0));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return (viewer.currentPageNumber = (((value > total_page_num))?total_page_num:value));
} else {
return null;
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-long","is-long",31110883),(frontend.util.safe_parse_int(current_page_num) > (999))], null)], null))], null))},[]),daiquiri.core.create_element("small",null,["/ ",daiquiri.interpreter.interpret(total_page_num)])]),daiquiri.core.create_element("span",{'className':"ct flex items-center"},[daiquiri.core.create_element("a",{'onClick':(function (){
return viewer.previousPage();
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.up_narrow.cljs$core$IFn$_invoke$arity$0())]),daiquiri.core.create_element("a",{'onClick':(function (){
return viewer.nextPage();
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.components.svg.down_narrow.cljs$core$IFn$_invoke$arity$0())])])]),daiquiri.core.create_element("a",{'onClick':(function (){
if(cljs.core.truth_(in_system_window_QMARK_)){
return frontend.extensions.pdf.windows.exit_pdf_in_system_window_BANG_.cljs$core$IFn$_invoke$arity$1(false);
} else {
return frontend.state.set_current_pdf_BANG_(null);
}
}),'className':"button"},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"close","close",1835149582)], 0)))])])]),frontend.extensions.pdf.toolbar.pdf_outline__AMPERSAND__highlights(viewer,outline_visible_QMARK_,set_outline_visible_BANG_),(cljs.core.truth_(finder_visible_QMARK_)?frontend.extensions.pdf.toolbar.pdf_finder(viewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-finder!","hide-finder!",-491498619),(function (){
return (set_finder_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_finder_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_finder_visible_BANG_.call(null,false));
})], null)):null),(cljs.core.truth_(settings_visible_QMARK_)?frontend.extensions.pdf.toolbar.pdf_settings(viewer,viewer_theme,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t","t",-1397832519),frontend.context.i18n.t,new cljs.core.Keyword(null,"hide-settings!","hide-settings!",-226708021),(function (){
return (set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_settings_visible_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_settings_visible_BANG_.call(null,false));
}),new cljs.core.Keyword(null,"select-theme!","select-theme!",1638110696),(function (p1__119180_SHARP_){
return (set_viewer_theme_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_viewer_theme_BANG_.cljs$core$IFn$_invoke$arity$1(p1__119180_SHARP_) : set_viewer_theme_BANG_.call(null,p1__119180_SHARP_));
})], null)):null)])]);
}),null,"frontend.extensions.pdf.toolbar/pdf-toolbar");

//# sourceMappingURL=frontend.extensions.pdf.toolbar.js.map
