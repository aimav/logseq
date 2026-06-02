goog.provide('frontend.handler.ui');
goog.scope(function(){
  frontend.handler.ui.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.ui._STAR_right_sidebar_resized_at = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now());
frontend.handler.ui.persist_right_sidebar_width_BANG_ = (function frontend$handler$ui$persist_right_sidebar_width_BANG_(width){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-width","ui/sidebar-width",929889300),width);

return frontend.storage.set("ls-right-sidebar-width",width);
});
frontend.handler.ui.restore_right_sidebar_width_BANG_ = (function frontend$handler$ui$restore_right_sidebar_width_BANG_(){
var temp__5804__auto__ = frontend.storage.get("ls-right-sidebar-width");
if(cljs.core.truth_(temp__5804__auto__)){
var width = temp__5804__auto__;
return frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-width","ui/sidebar-width",929889300),width);
} else {
return null;
}
});
frontend.handler.ui.close_left_sidebar_BANG_ = (function frontend$handler$ui$close_left_sidebar_BANG_(){
var temp__5804__auto__ = goog.dom.getElement("close-left-bar");
if(cljs.core.truth_(temp__5804__auto__)){
var elem = temp__5804__auto__;
return elem.click();
} else {
return null;
}
});
frontend.handler.ui.toggle_right_sidebar_BANG_ = (function frontend$handler$ui$toggle_right_sidebar_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
} else {
frontend.handler.ui.restore_right_sidebar_width_BANG_();
}

return frontend.state.toggle_sidebar_open_QMARK__BANG_();
});
frontend.handler.ui.persist_right_sidebar_state_BANG_ = (function frontend$handler$ui$persist_right_sidebar_state_BANG_(){
var sidebar_open_QMARK_ = new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var data = (cljs.core.truth_(sidebar_open_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),new cljs.core.Keyword(null,"open?","open?",1238443125),true], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
return frontend.storage.set("ls-right-sidebar-state",data);
});
frontend.handler.ui.restore_right_sidebar_state_BANG_ = (function frontend$handler$ui$restore_right_sidebar_state_BANG_(){
var temp__5804__auto__ = frontend.storage.get("ls-right-sidebar-state");
if(cljs.core.truth_(temp__5804__auto__)){
var data_SINGLEQUOTE_ = temp__5804__auto__;
var map__90002 = data_SINGLEQUOTE_;
var map__90002__$1 = cljs.core.__destructure_map(map__90002);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90002__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var collapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90002__$1,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90002__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(open_QMARK_)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),open_QMARK_);

frontend.state.set_state_BANG_(new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475),blocks);

frontend.state.set_state_BANG_(new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),collapsed);

return frontend.handler.ui.restore_right_sidebar_width_BANG_();
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.ui.toggle_contents_BANG_ = (function frontend$handler$ui$toggle_contents_BANG_(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var current_repo = temp__5804__auto__;
var id = "contents";
if(cljs.core.truth_(frontend.state.sidebar_block_exists_QMARK_(id))){
return frontend.state.sidebar_remove_block_BANG_(id);
} else {
return frontend.state.sidebar_add_block_BANG_(current_repo,id,new cljs.core.Keyword(null,"contents","contents",-1567174023));
}
} else {
return null;
}
});
frontend.handler.ui.toggle_help_BANG_ = (function frontend$handler$ui$toggle_help_BANG_(){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","help-open?","ui/help-open?",-1862197612));
});
frontend.handler.ui.toggle_settings_modal_BANG_ = (function frontend$handler$ui$toggle_settings_modal_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword("srs","mode?","srs/mode?",-258295984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
return null;
} else {
return frontend.state.toggle_settings_BANG_();
}
});
frontend.handler.ui.re_render_root_BANG_ = (function frontend$handler$ui$re_render_root_BANG_(var_args){
var G__90010 = arguments.length;
switch (G__90010) {
case 0:
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (p__90015){
var map__90016 = p__90015;
var map__90016__$1 = cljs.core.__destructure_map(map__90016);
var clear_all_query_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90016__$1,new cljs.core.Keyword(null,"clear-all-query-state?","clear-all-query-state?",-289780993),false);
var _PERCENT_ = (function (){
var temp__5804__auto___90045 = frontend.state.get_root_component();
if(cljs.core.truth_(temp__5804__auto___90045)){
var component_90046 = temp__5804__auto___90045;
if(cljs.core.truth_(clear_all_query_state_QMARK_)){
(frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.db.clear_query_state_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.db.clear_query_state_BANG_.call(null));
} else {
(frontend.db.clear_query_state_without_refs_and_embeds_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.db.clear_query_state_without_refs_and_embeds_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.db.clear_query_state_without_refs_and_embeds_BANG_.call(null));
}

rum.core.request_render(component_90046);
} else {
}

return null;
})()
;
if((_PERCENT_ == null)){
} else {
throw (new Error("Assert failed: (nil? %)"));
}

return _PERCENT_;
}));

(frontend.handler.ui.re_render_root_BANG_.cljs$lang$maxFixedArity = 1);

frontend.handler.ui.highlight_element_BANG_ = (function frontend$handler$ui$highlight_element_BANG_(fragment){
var id = (function (){var and__5041__auto__ = (cljs.core.count(fragment) > (36));
if(and__5041__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fragment,(cljs.core.count(fragment) - (36)));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = id;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.util.uuid_string_QMARK_(id);
} else {
return and__5041__auto__;
}
})())){
var elements = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.getElementsByClassName(id));
if(cljs.core.truth_(cljs.core.first(elements))){
frontend.util.scroll_to_element(frontend.handler.ui.goog$module$goog$object.get(cljs.core.first(elements),"id"));
} else {
}

return frontend.state.exit_editing_and_set_selected_blocks_BANG_.cljs$core$IFn$_invoke$arity$1(elements);
} else {
var temp__5804__auto__ = goog.dom.getElement(fragment);
if(cljs.core.truth_(temp__5804__auto__)){
var element = temp__5804__auto__;
frontend.util.scroll_to_element(fragment);

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(element,"block-highlight");

return setTimeout((function (){
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(element,"block-highlight");
}),(4000));
} else {
return null;
}
}
});
frontend.handler.ui.add_style_if_exists_BANG_ = (function frontend$handler$ui$add_style_if_exists_BANG_(){
var temp__5804__auto__ = (function (){var or__5043__auto__ = frontend.state.get_custom_css_link();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__90017 = frontend.db.model.get_custom_css();
if((G__90017 == null)){
return null;
} else {
return frontend.config.expand_relative_assets_path(G__90017);
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var style = temp__5804__auto__;
return frontend.util.add_style_BANG_(style);
} else {
return null;
}
});
frontend.handler.ui.reset_custom_css_BANG_ = (function frontend$handler$ui$reset_custom_css_BANG_(){
var temp__5804__auto___90047 = goog.dom.getElement("logseq-custom-theme-id");
if(cljs.core.truth_(temp__5804__auto___90047)){
var el_style_90048 = temp__5804__auto___90047;
dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1(el_style_90048);
} else {
}

return frontend.handler.ui.add_style_if_exists_BANG_();
});
frontend.handler.ui._STAR_js_execed = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
frontend.handler.ui.exec_js_if_exists__AMPERSAND__allowed_BANG_ = (function frontend$handler$ui$exec_js_if_exists__AMPERSAND__allowed_BANG_(t){
var temp__5804__auto__ = (function (){var or__5043__auto__ = frontend.state.get_custom_js_link();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0();
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var href = temp__5804__auto__;
var k = ["ls-js-allowed-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(href)].join('');
var execed = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_js_execed,cljs.core.conj,href);
});
var execed_QMARK_ = cljs.core.contains_QMARK_(cljs.core.deref(frontend.handler.ui._STAR_js_execed),href);
var ask_allow = (function (){
var r = confirm((t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("plugin","custom-js-alert","plugin/custom-js-alert",-1359208866)) : t.call(null,new cljs.core.Keyword("plugin","custom-js-alert","plugin/custom-js-alert",-1359208866))));
if(cljs.core.truth_(r)){
frontend.storage.set(k,Date.now());
} else {
frontend.storage.set(k,false);
}

return r;
});
var allowed_BANG_ = frontend.storage.get(k);
var should_ask_QMARK_ = (((allowed_BANG_ == null)) || (((Date.now() - allowed_BANG_) > (604800000))));
if((((!(execed_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,allowed_BANG_)))){
if(clojure.string.starts_with_QMARK_(href,"http")){
if(cljs.core.truth_((function (){var or__5043__auto__ = (!(should_ask_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return ask_allow();
}
})())){
return frontend.loader.load.cljs$core$IFn$_invoke$arity$2(href,(function (){
console.log("[custom js]",href);

return execed();
}));
} else {
return null;
}
} else {
var repo_dir = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var rpath = logseq.common.path.relative_path(repo_dir,href);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(repo_dir,rpath),(function (exists_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(exists_QMARK_)?frontend.util.p_handle.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(repo_dir,rpath),(function (p1__90018_SHARP_){
var temp__5804__auto____$1 = (function (){var and__5041__auto__ = p1__90018_SHARP_;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.trim(p1__90018_SHARP_);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var scripts = temp__5804__auto____$1;
if(clojure.string.blank_QMARK_(scripts)){
return null;
} else {
if(cljs.core.truth_((function (){var or__5043__auto__ = (!(should_ask_QMARK_));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return ask_allow();
}
})())){
try{eval(scripts);

return execed();
}catch (e90019){var e = e90019;
return console.error("[custom js]",e);
}} else {
return null;
}
}
} else {
return null;
}
})):null));
}));
}));
}
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.ui.toggle_wide_mode_BANG_ = (function frontend$handler$ui$toggle_wide_mode_BANG_(){
frontend.storage.set(new cljs.core.Keyword("ui","wide-mode","ui/wide-mode",2105536944),cljs.core.not(frontend.state.get_wide_mode_QMARK_()));

return frontend.state.toggle_wide_mode_BANG_();
});
frontend.handler.ui.auto_complete_prev = (function frontend$handler$ui$auto_complete_prev(state,e){
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
var matched = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
frontend.util.stop(e);

if((cljs.core.deref(current_idx) >= (1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_idx,cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_idx),(0))){
cljs.core.reset_BANG_(current_idx,(cljs.core.count(matched) - (1)));
} else {

}
}

var temp__5804__auto__ = goog.dom.getElement(["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_idx))].join(''));
if(cljs.core.truth_(temp__5804__auto__)){
var element = temp__5804__auto__;
var modal = frontend.handler.ui.goog$module$goog$object.get(goog.dom.getElement("ui__ac"),"parentElement");
var height = (function (){var or__5043__auto__ = frontend.handler.ui.goog$module$goog$object.get(modal,"offsetHeight");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (300);
}
})();
var scroll_top = (frontend.handler.ui.goog$module$goog$object.get(element,"offsetTop") - (height / (2)));
return (modal.scrollTop = scroll_top);
} else {
return null;
}
});
frontend.handler.ui.auto_complete_next = (function frontend$handler$ui$auto_complete_next(state,e){
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
var matched = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
frontend.util.stop(e);

var total_90049 = cljs.core.count(matched);
if((cljs.core.deref(current_idx) >= (total_90049 - (1)))){
cljs.core.reset_BANG_(current_idx,(0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_idx,cljs.core.inc);
}

var temp__5804__auto__ = goog.dom.getElement(["ac-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_idx))].join(''));
if(cljs.core.truth_(temp__5804__auto__)){
var element = temp__5804__auto__;
var modal = frontend.handler.ui.goog$module$goog$object.get(goog.dom.getElement("ui__ac"),"parentElement");
var height = (function (){var or__5043__auto__ = frontend.handler.ui.goog$module$goog$object.get(modal,"offsetHeight");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (300);
}
})();
var scroll_top = (frontend.handler.ui.goog$module$goog$object.get(element,"offsetTop") - (height / (2)));
return (modal.scrollTop = scroll_top);
} else {
return null;
}
});
frontend.handler.ui.auto_complete_complete = (function frontend$handler$ui$auto_complete_complete(state,e){
var vec__90020 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90020,(0),null);
var map__90023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90020,(1),null);
var map__90023__$1 = cljs.core.__destructure_map(map__90023);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90023__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90023__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
frontend.util.stop(e);

if(((cljs.core.seq(matched)) && ((cljs.core.count(matched) > cljs.core.deref(current_idx))))){
var G__90024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matched,cljs.core.deref(current_idx));
var G__90025 = false;
return (on_chosen.cljs$core$IFn$_invoke$arity$2 ? on_chosen.cljs$core$IFn$_invoke$arity$2(G__90024,G__90025) : on_chosen.call(null,G__90024,G__90025));
} else {
var and__5041__auto__ = on_enter;
if(cljs.core.truth_(and__5041__auto__)){
return (on_enter.cljs$core$IFn$_invoke$arity$1 ? on_enter.cljs$core$IFn$_invoke$arity$1(state) : on_enter.call(null,state));
} else {
return and__5041__auto__;
}
}
});
frontend.handler.ui.auto_complete_shift_complete = (function frontend$handler$ui$auto_complete_shift_complete(state,e){
var vec__90026 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90026,(0),null);
var map__90029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90026,(1),null);
var map__90029__$1 = cljs.core.__destructure_map(map__90029);
var on_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90029__$1,new cljs.core.Keyword(null,"on-chosen","on-chosen",-114535900));
var on_shift_chosen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90029__$1,new cljs.core.Keyword(null,"on-shift-chosen","on-shift-chosen",-310778328));
var on_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90029__$1,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216));
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
frontend.util.stop(e);

if(((cljs.core.seq(matched)) && ((cljs.core.count(matched) > cljs.core.deref(current_idx))))){
var G__90031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matched,cljs.core.deref(current_idx));
var G__90032 = false;
var fexpr__90030 = (function (){var or__5043__auto__ = on_shift_chosen;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return on_chosen;
}
})();
return (fexpr__90030.cljs$core$IFn$_invoke$arity$2 ? fexpr__90030.cljs$core$IFn$_invoke$arity$2(G__90031,G__90032) : fexpr__90030.call(null,G__90031,G__90032));
} else {
var and__5041__auto__ = on_enter;
if(cljs.core.truth_(and__5041__auto__)){
return (on_enter.cljs$core$IFn$_invoke$arity$1 ? on_enter.cljs$core$IFn$_invoke$arity$1(state) : on_enter.call(null,state));
} else {
return and__5041__auto__;
}
}
});
frontend.handler.ui.auto_complete_open_link = (function frontend$handler$ui$auto_complete_open_link(state,e){
var vec__90033 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var matched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90033,(0),null);
var map__90036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90033,(1),null);
var map__90036__$1 = cljs.core.__destructure_map(map__90036);
var on_chosen_open_link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90036__$1,new cljs.core.Keyword(null,"on-chosen-open-link","on-chosen-open-link",1593951460));
if(cljs.core.truth_((function (){var and__5041__auto__ = on_chosen_open_link;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.state.editing_QMARK_());
} else {
return and__5041__auto__;
}
})())){
var current_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.ui","current-idx","frontend.ui/current-idx",441919612));
frontend.util.stop(e);

if(((cljs.core.seq(matched)) && ((cljs.core.count(matched) > cljs.core.deref(current_idx))))){
var G__90037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matched,cljs.core.deref(current_idx));
var G__90038 = false;
return (on_chosen_open_link.cljs$core$IFn$_invoke$arity$2 ? on_chosen_open_link.cljs$core$IFn$_invoke$arity$2(G__90037,G__90038) : on_chosen_open_link.call(null,G__90037,G__90038));
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.ui._STAR_internal_model = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581));
frontend.handler.ui.non_edit_input_QMARK_ = (function frontend$handler$ui$non_edit_input_QMARK_(){
var temp__5804__auto__ = document.activeElement;
if(cljs.core.truth_(temp__5804__auto__)){
var elem = temp__5804__auto__;
var and__5041__auto__ = frontend.util.input_QMARK_(elem);
if(cljs.core.truth_(and__5041__auto__)){
var temp__5804__auto____$1 = frontend.handler.ui.goog$module$goog$object.get(elem,"id");
if(cljs.core.truth_(temp__5804__auto____$1)){
var id = temp__5804__auto____$1;
return (!(clojure.string.starts_with_QMARK_(id,"edit-block-")));
} else {
return null;
}
} else {
return and__5041__auto__;
}
} else {
return null;
}
});
frontend.handler.ui.input_or_select_QMARK_ = (function frontend$handler$ui$input_or_select_QMARK_(){
var temp__5804__auto__ = document.activeElement;
if(cljs.core.truth_(temp__5804__auto__)){
var elem = temp__5804__auto__;
var or__5043__auto__ = frontend.handler.ui.non_edit_input_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.select_QMARK_(elem);
}
} else {
return null;
}
});
frontend.handler.ui.inc_date = (function frontend$handler$ui$inc_date(date,n){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(n));
});
frontend.handler.ui.inc_week = (function frontend$handler$ui$inc_week(date,n){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(n));
});
frontend.handler.ui.shortcut_complete = (function frontend$handler$ui$shortcut_complete(state,e){
var map__90039 = cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var map__90039__$1 = cljs.core.__destructure_map(map__90039);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90039__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var deadline_or_schedule_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90039__$1,new cljs.core.Keyword(null,"deadline-or-schedule?","deadline-or-schedule?",1308283544));
if(cljs.core.truth_((function (){var and__5041__auto__ = on_change;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.handler.ui.input_or_select_QMARK_());
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.truth_(deadline_or_schedule_QMARK_)){
return null;
} else {
var G__90040 = e;
var G__90041 = cljs.core.deref(frontend.handler.ui._STAR_internal_model);
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(G__90040,G__90041) : on_change.call(null,G__90040,G__90041));
}
} else {
return null;
}
});
frontend.handler.ui.shortcut_prev_day = (function frontend$handler$ui$shortcut_prev_day(_state,e){
if(cljs.core.truth_(frontend.handler.ui.input_or_select_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_internal_model,frontend.handler.ui.inc_date,(-1));
}
});
frontend.handler.ui.shortcut_next_day = (function frontend$handler$ui$shortcut_next_day(_state,e){
if(cljs.core.truth_(frontend.handler.ui.input_or_select_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_internal_model,frontend.handler.ui.inc_date,(1));
}
});
frontend.handler.ui.shortcut_prev_week = (function frontend$handler$ui$shortcut_prev_week(_state,e){
if(cljs.core.truth_(frontend.handler.ui.input_or_select_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_internal_model,frontend.handler.ui.inc_week,(-1));
}
});
frontend.handler.ui.shortcut_next_week = (function frontend$handler$ui$shortcut_next_week(_state,e){
if(cljs.core.truth_(frontend.handler.ui.input_or_select_QMARK_())){
return null;
} else {
frontend.util.stop(e);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.handler.ui._STAR_internal_model,frontend.handler.ui.inc_week,(1));
}
});
frontend.handler.ui.toggle_cards_BANG_ = (function frontend$handler$ui$toggle_cards_BANG_(){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"srs","srs",1327991978),new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
if(and__5041__auto__){
return new cljs.core.Keyword("modal","show?","modal/show?",1441869594).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
} else {
return and__5041__auto__;
}
})())){
return frontend.state.close_modal_BANG_();
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906)], null));
}
});
/**
 * Open a new Electron window.
 * No db cache persisting ensured. Should be handled by the caller.
 */
frontend.handler.ui.open_new_window_BANG_ = (function frontend$handler$ui$open_new_window_BANG_(var_args){
var G__90043 = arguments.length;
switch (G__90043) {
case 0:
return frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(typeof repo === 'string'){
frontend.storage.set(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),repo);
} else {
}

return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openNewWindow"], 0));
}));

(frontend.handler.ui.open_new_window_BANG_.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=frontend.handler.ui.js.map
