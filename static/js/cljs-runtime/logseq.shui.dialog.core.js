goog.provide('logseq.shui.dialog.core');
logseq.shui.dialog.core.dialog = logseq.shui.util.lsui_wrap("Dialog");
logseq.shui.dialog.core.dialog_portal = logseq.shui.util.lsui_wrap("DialogPortal");
logseq.shui.dialog.core.alert_dialog = logseq.shui.util.lsui_wrap("AlertDialog");
logseq.shui.dialog.core.alert_dialog_portal = logseq.shui.util.lsui_wrap("AlertDialogPortal");
logseq.shui.dialog.core.dialog_overlay = logseq.shui.util.lsui_wrap("DialogOverlay");
logseq.shui.dialog.core.dialog_close = logseq.shui.util.lsui_wrap("DialogClose");
logseq.shui.dialog.core.dialog_trigger = logseq.shui.util.lsui_wrap("DialogTrigger");
logseq.shui.dialog.core.dialog_content = logseq.shui.util.lsui_wrap("DialogContent");
logseq.shui.dialog.core.dialog_header = logseq.shui.util.lsui_wrap("DialogHeader");
logseq.shui.dialog.core.dialog_footer = logseq.shui.util.lsui_wrap("DialogFooter");
logseq.shui.dialog.core.dialog_title = logseq.shui.util.lsui_wrap("DialogTitle");
logseq.shui.dialog.core.dialog_description = logseq.shui.util.lsui_wrap("DialogDescription");
logseq.shui.dialog.core.alert_dialog_overlay = logseq.shui.util.lsui_wrap("AlertDialogOverlay");
logseq.shui.dialog.core.alert_dialog_trigger = logseq.shui.util.lsui_wrap("AlertDialogTrigger");
logseq.shui.dialog.core.alert_dialog_content = logseq.shui.util.lsui_wrap("AlertDialogContent");
logseq.shui.dialog.core.alert_dialog_header = logseq.shui.util.lsui_wrap("AlertDialogHeader");
logseq.shui.dialog.core.alert_dialog_title = logseq.shui.util.lsui_wrap("AlertDialogTitle");
logseq.shui.dialog.core.alert_dialog_description = logseq.shui.util.lsui_wrap("AlertDialogDescription");
logseq.shui.dialog.core.alert_dialog_footer = logseq.shui.util.lsui_wrap("AlertDialogFooter");
logseq.shui.dialog.core.alert_dialog_action = logseq.shui.util.lsui_wrap("AlertDialogAction");
logseq.shui.dialog.core.alert_dialog_cancel = logseq.shui.util.lsui_wrap("AlertDialogCancel");
logseq.shui.dialog.core.interpret_vals = (function logseq$shui$dialog$core$interpret_vals(var_args){
var args__5772__auto__ = [];
var len__5766__auto___108600 = arguments.length;
var i__5767__auto___108601 = (0);
while(true){
if((i__5767__auto___108601 < len__5766__auto___108600)){
args__5772__auto__.push((arguments[i__5767__auto___108601]));

var G__108602 = (i__5767__auto___108601 + (1));
i__5767__auto___108601 = G__108602;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return logseq.shui.dialog.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(logseq.shui.dialog.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic = (function (config,ks,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (config__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config__$1,k);
var v__$1 = ((cljs.core.fn_QMARK_(v))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,args):v);
if(cljs.core.vector_QMARK_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,k,daiquiri.interpreter.interpret(v__$1));
} else {
return config__$1;
}
}),config,ks);
}));

(logseq.shui.dialog.core.interpret_vals.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.shui.dialog.core.interpret_vals.cljs$lang$applyTo = (function (seq108512){
var G__108513 = cljs.core.first(seq108512);
var seq108512__$1 = cljs.core.next(seq108512);
var G__108514 = cljs.core.first(seq108512__$1);
var seq108512__$2 = cljs.core.next(seq108512__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108513,G__108514,seq108512__$2);
}));

logseq.shui.dialog.core._STAR_modals = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
logseq.shui.dialog.core._STAR_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
logseq.shui.dialog.core.gen_id = (function logseq$shui$dialog$core$gen_id(){
return cljs.core.reset_BANG_(logseq.shui.dialog.core._STAR_id,(cljs.core.deref(logseq.shui.dialog.core._STAR_id) + (1)));
});
logseq.shui.dialog.core.get_modal = (function logseq$shui$dialog$core$get_modal(id){
if(cljs.core.truth_(id)){
var G__108516 = medley.core.indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(logseq.shui.dialog.core._STAR_modals));
var G__108516__$1 = (((G__108516 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__108515_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__108515_SHARP_)));
}),G__108516));
if((G__108516__$1 == null)){
return null;
} else {
return cljs.core.first(G__108516__$1);
}
} else {
return null;
}
});
logseq.shui.dialog.core.update_modal_BANG_ = (function logseq$shui$dialog$core$update_modal_BANG_(id,ks,val){
var temp__5804__auto__ = logseq.shui.dialog.core.get_modal(id);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__108517 = temp__5804__auto__;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108517,(0),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108517,(1),null);
var ks__$1 = ((cljs.core.coll_QMARK_(ks))?ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks], null));
var config__$1 = (((val == null))?medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(config,ks__$1):cljs.core.assoc_in(config,ks__$1,val));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(logseq.shui.dialog.core._STAR_modals,cljs.core.assoc,index,config__$1);
} else {
return null;
}
});
logseq.shui.dialog.core.upsert_modal_BANG_ = (function logseq$shui$dialog$core$upsert_modal_BANG_(config){
var temp__5804__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto__)){
var _id = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(logseq.shui.dialog.core._STAR_modals,cljs.core.conj,config);
} else {
return null;
}
});
logseq.shui.dialog.core.detach_modal_BANG_ = (function logseq$shui$dialog$core$detach_modal_BANG_(id){
var temp__5804__auto__ = logseq.shui.dialog.core.get_modal(id);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__108521 = temp__5804__auto__;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108521,(0),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.shui.dialog.core._STAR_modals,(function (p1__108520_SHARP_){
return cljs.core.vec(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(index,p1__108520_SHARP_));
}));
} else {
return null;
}
});
logseq.shui.dialog.core.modal_inner = rum.core.lazy_build(rum.core.build_defc,(function (config){
var map__108525 = config;
var map__108525__$1 = cljs.core.__destructure_map(map__108525);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108525__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108525__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108525__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108525__$1,new cljs.core.Keyword(null,"content","content",15833224));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108525__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var on_open_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108525__$1,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108525__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),new cljs.core.Keyword(null,"open?","open?",1238443125)], 0));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(open_QMARK_ === false){
return setTimeout((function (){
return logseq.shui.dialog.core.detach_modal_BANG_(id);
}),(128));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_], null));

return daiquiri.interpreter.interpret((function (){var G__108535 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["modal-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),(function (v){
var set_open_BANG_ = (function (p1__108524_SHARP_){
return logseq.shui.dialog.core.update_modal_BANG_(id,new cljs.core.Keyword(null,"open?","open?",1238443125),p1__108524_SHARP_);
});
if(cljs.core.fn_QMARK_(on_open_change)){
var G__108537 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"set-open!","set-open!",503042001),set_open_BANG_], null);
return (on_open_change.cljs$core$IFn$_invoke$arity$1 ? on_open_change.cljs$core$IFn$_invoke$arity$1(G__108537) : on_open_change.call(null,G__108537));
} else {
return set_open_BANG_(v);
}
})], null);
var G__108536 = (function (){var G__108538 = props;
var G__108539 = (function (){var G__108542 = (cljs.core.truth_(title)?(logseq.shui.dialog.core.dialog_title.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.dialog_title.cljs$core$IFn$_invoke$arity$1(title) : logseq.shui.dialog.core.dialog_title.call(null,title)):null);
var G__108543 = (cljs.core.truth_(description)?(logseq.shui.dialog.core.dialog_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.dialog_description.cljs$core$IFn$_invoke$arity$1(description) : logseq.shui.dialog.core.dialog_description.call(null,description)):null);
return (logseq.shui.dialog.core.dialog_header.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.dialog_header.cljs$core$IFn$_invoke$arity$2(G__108542,G__108543) : logseq.shui.dialog.core.dialog_header.call(null,G__108542,G__108543));
})();
var G__108540 = (cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__dialog-main-content","div.ui__dialog-main-content",-140235567),content], null):null);
var G__108541 = (cljs.core.truth_(footer)?(logseq.shui.dialog.core.dialog_footer.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.dialog_footer.cljs$core$IFn$_invoke$arity$1(footer) : logseq.shui.dialog.core.dialog_footer.call(null,footer)):null);
return (logseq.shui.dialog.core.dialog_content.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.dialog.core.dialog_content.cljs$core$IFn$_invoke$arity$4(G__108538,G__108539,G__108540,G__108541) : logseq.shui.dialog.core.dialog_content.call(null,G__108538,G__108539,G__108540,G__108541));
})();
return (logseq.shui.dialog.core.dialog.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.dialog.cljs$core$IFn$_invoke$arity$2(G__108535,G__108536) : logseq.shui.dialog.core.dialog.call(null,G__108535,G__108536));
})());
}),null,"logseq.shui.dialog.core/modal-inner");
logseq.shui.dialog.core.alert_inner = rum.core.lazy_build(rum.core.build_defc,(function (config){
var map__108545 = config;
var map__108545__$1 = cljs.core.__destructure_map(map__108545);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108545__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108545__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108545__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108545__$1,new cljs.core.Keyword(null,"content","content",15833224));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108545__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var deferred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108545__$1,new cljs.core.Keyword(null,"deferred","deferred",-1976960688));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108545__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"alert?","alert?",-446067642)], 0));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(open_QMARK_ === false){
return setTimeout((function (){
return logseq.shui.dialog.core.detach_modal_BANG_(id);
}),(128));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [open_QMARK_], null));

return daiquiri.interpreter.interpret((function (){var G__108557 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["alert-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"on-open-change","on-open-change",687272862),(function (p1__108544_SHARP_){
return logseq.shui.dialog.core.update_modal_BANG_(id,new cljs.core.Keyword(null,"open?","open?",1238443125),p1__108544_SHARP_);
})], null);
var G__108558 = (function (){var G__108559 = props;
var G__108560 = (function (){var G__108563 = (cljs.core.truth_(title)?(logseq.shui.dialog.core.alert_dialog_title.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.alert_dialog_title.cljs$core$IFn$_invoke$arity$1(title) : logseq.shui.dialog.core.alert_dialog_title.call(null,title)):null);
var G__108564 = (cljs.core.truth_(description)?(logseq.shui.dialog.core.alert_dialog_description.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.alert_dialog_description.cljs$core$IFn$_invoke$arity$1(description) : logseq.shui.dialog.core.alert_dialog_description.call(null,description)):null);
return (logseq.shui.dialog.core.alert_dialog_header.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.alert_dialog_header.cljs$core$IFn$_invoke$arity$2(G__108563,G__108564) : logseq.shui.dialog.core.alert_dialog_header.call(null,G__108563,G__108564));
})();
var G__108561 = (cljs.core.truth_(content)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__alert-dialog-main-content","div.ui__alert-dialog-main-content",306893478),content], null):null);
var G__108562 = (function (){var G__108565 = (cljs.core.truth_(footer)?footer:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__108566 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ok",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred,true);
})], null);
var G__108567 = "OK";
return (logseq.shui.dialog.core.alert_dialog_action.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.alert_dialog_action.cljs$core$IFn$_invoke$arity$2(G__108566,G__108567) : logseq.shui.dialog.core.alert_dialog_action.call(null,G__108566,G__108567));
})()], null));
return (logseq.shui.dialog.core.alert_dialog_footer.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.dialog.core.alert_dialog_footer.cljs$core$IFn$_invoke$arity$1(G__108565) : logseq.shui.dialog.core.alert_dialog_footer.call(null,G__108565));
})();
return (logseq.shui.dialog.core.alert_dialog_content.cljs$core$IFn$_invoke$arity$4 ? logseq.shui.dialog.core.alert_dialog_content.cljs$core$IFn$_invoke$arity$4(G__108559,G__108560,G__108561,G__108562) : logseq.shui.dialog.core.alert_dialog_content.call(null,G__108559,G__108560,G__108561,G__108562));
})();
return (logseq.shui.dialog.core.alert_dialog.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.alert_dialog.cljs$core$IFn$_invoke$arity$2(G__108557,G__108558) : logseq.shui.dialog.core.alert_dialog.call(null,G__108557,G__108558));
})());
}),null,"logseq.shui.dialog.core/alert-inner");
logseq.shui.dialog.core.confirm_inner = rum.core.lazy_build(rum.core.build_defc,(function (config){
var map__108568 = config;
var map__108568__$1 = cljs.core.__destructure_map(map__108568);
var deferred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108568__$1,new cljs.core.Keyword(null,"deferred","deferred",-1976960688));
return logseq.shui.dialog.core.alert_inner(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var G__108573 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.reject_BANG_(deferred,false);
})], null);
var G__108574 = "Cancel";
return (logseq.shui.dialog.core.alert_dialog_cancel.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.alert_dialog_cancel.cljs$core$IFn$_invoke$arity$2(G__108573,G__108574) : logseq.shui.dialog.core.alert_dialog_cancel.call(null,G__108573,G__108574));
})(),(function (){var G__108575 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ok",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred,true);
})], null);
var G__108576 = "OK";
return (logseq.shui.dialog.core.alert_dialog_action.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.dialog.core.alert_dialog_action.cljs$core$IFn$_invoke$arity$2(G__108575,G__108576) : logseq.shui.dialog.core.alert_dialog_action.call(null,G__108575,G__108576));
})()], null)));
}),null,"logseq.shui.dialog.core/confirm-inner");
logseq.shui.dialog.core.install_modals = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__108577 = logseq.shui.util.use_atom(logseq.shui.dialog.core._STAR_modals);
var modals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108577,(0),null);
var _set_modals_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108577,(1),null);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function logseq$shui$dialog$core$iter__108580(s__108581){
return (new cljs.core.LazySeq(null,(function (){
var s__108581__$1 = s__108581;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__108581__$1);
if(temp__5804__auto__){
var s__108581__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__108581__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__108581__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__108583 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__108582 = (0);
while(true){
if((i__108582 < size__5519__auto__)){
var config = cljs.core._nth(c__5518__auto__,i__108582);
if(cljs.core.map_QMARK_(config)){
cljs.core.chunk_append(b__108583,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
var alert_QMARK_ = new cljs.core.Keyword(null,"alert?","alert?",-446067642).cljs$core$IFn$_invoke$arity$1(config);
var config__$1 = logseq.shui.dialog.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"footer","footer",1606445390)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], 0));
var G__108584 = alert_QMARK_;
var G__108584__$1 = (((G__108584 instanceof cljs.core.Keyword))?G__108584.fqn:null);
switch (G__108584__$1) {
case "default":
return logseq.shui.dialog.core.alert_inner(config__$1);

break;
case "confirm":
return logseq.shui.dialog.core.confirm_inner(config__$1);

break;
default:
return logseq.shui.dialog.core.modal_inner(config__$1);

}
})());

var G__108604 = (i__108582 + (1));
i__108582 = G__108604;
continue;
} else {
var G__108605 = (i__108582 + (1));
i__108582 = G__108605;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__108583),logseq$shui$dialog$core$iter__108580(cljs.core.chunk_rest(s__108581__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__108583),null);
}
} else {
var config = cljs.core.first(s__108581__$2);
if(cljs.core.map_QMARK_(config)){
return cljs.core.cons((function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(config);
var alert_QMARK_ = new cljs.core.Keyword(null,"alert?","alert?",-446067642).cljs$core$IFn$_invoke$arity$1(config);
var config__$1 = logseq.shui.dialog.core.interpret_vals.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"footer","footer",1606445390)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], 0));
var G__108585 = alert_QMARK_;
var G__108585__$1 = (((G__108585 instanceof cljs.core.Keyword))?G__108585.fqn:null);
switch (G__108585__$1) {
case "default":
return logseq.shui.dialog.core.alert_inner(config__$1);

break;
case "confirm":
return logseq.shui.dialog.core.confirm_inner(config__$1);

break;
default:
return logseq.shui.dialog.core.modal_inner(config__$1);

}
})(),logseq$shui$dialog$core$iter__108580(cljs.core.rest(s__108581__$2)));
} else {
var G__108607 = cljs.core.rest(s__108581__$2);
s__108581__$1 = G__108607;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(modals);
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$], null),"logseq.shui.dialog.core/install-modals");
logseq.shui.dialog.core.open_BANG_ = (function logseq$shui$dialog$core$open_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___108608 = arguments.length;
var i__5767__auto___108609 = (0);
while(true){
if((i__5767__auto___108609 < len__5766__auto___108608)){
args__5772__auto__.push((arguments[i__5767__auto___108609]));

var G__108610 = (i__5767__auto___108609 + (1));
i__5767__auto___108609 = G__108610;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return logseq.shui.dialog.core.open_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(logseq.shui.dialog.core.open_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content_or_config,config_SINGLEQUOTE_){
var config = ((cljs.core.map_QMARK_(content_or_config))?content_or_config:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),content_or_config], null));
var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config,cljs.core.first(config_SINGLEQUOTE_)], 0));
return logseq.shui.dialog.core.upsert_modal_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),logseq.shui.dialog.core.gen_id(),new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),config__$1], 0)));
}));

(logseq.shui.dialog.core.open_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.dialog.core.open_BANG_.cljs$lang$applyTo = (function (seq108586){
var G__108587 = cljs.core.first(seq108586);
var seq108586__$1 = cljs.core.next(seq108586);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108587,seq108586__$1);
}));

logseq.shui.dialog.core.alert_BANG_ = (function logseq$shui$dialog$core$alert_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___108611 = arguments.length;
var i__5767__auto___108612 = (0);
while(true){
if((i__5767__auto___108612 < len__5766__auto___108611)){
args__5772__auto__.push((arguments[i__5767__auto___108612]));

var G__108613 = (i__5767__auto___108612 + (1));
i__5767__auto___108612 = G__108613;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return logseq.shui.dialog.core.alert_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(logseq.shui.dialog.core.alert_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content_or_config,config_SINGLEQUOTE_){
var deferred = promesa.core.deferred();
logseq.shui.dialog.core.open_BANG_.cljs$core$IFn$_invoke$arity$variadic(content_or_config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alert?","alert?",-446067642),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"deferred","deferred",-1976960688),deferred], null),cljs.core.first(config_SINGLEQUOTE_)], 0))], 0));

return promesa.core.promise.cljs$core$IFn$_invoke$arity$1(deferred);
}));

(logseq.shui.dialog.core.alert_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.dialog.core.alert_BANG_.cljs$lang$applyTo = (function (seq108588){
var G__108589 = cljs.core.first(seq108588);
var seq108588__$1 = cljs.core.next(seq108588);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108589,seq108588__$1);
}));

logseq.shui.dialog.core.confirm_BANG_ = (function logseq$shui$dialog$core$confirm_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___108614 = arguments.length;
var i__5767__auto___108615 = (0);
while(true){
if((i__5767__auto___108615 < len__5766__auto___108614)){
args__5772__auto__.push((arguments[i__5767__auto___108615]));

var G__108616 = (i__5767__auto___108615 + (1));
i__5767__auto___108615 = G__108616;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return logseq.shui.dialog.core.confirm_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(logseq.shui.dialog.core.confirm_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content_or_config,config_SINGLEQUOTE_){
return logseq.shui.dialog.core.alert_BANG_.cljs$core$IFn$_invoke$arity$variadic(content_or_config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(config_SINGLEQUOTE_),new cljs.core.Keyword(null,"alert?","alert?",-446067642),new cljs.core.Keyword(null,"confirm","confirm",-2004000608))], 0));
}));

(logseq.shui.dialog.core.confirm_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.shui.dialog.core.confirm_BANG_.cljs$lang$applyTo = (function (seq108590){
var G__108591 = cljs.core.first(seq108590);
var seq108590__$1 = cljs.core.next(seq108590);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108591,seq108590__$1);
}));

logseq.shui.dialog.core.close_BANG_ = (function logseq$shui$dialog$core$close_BANG_(id){
return logseq.shui.dialog.core.update_modal_BANG_(id,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
});
logseq.shui.dialog.core.close_all_BANG_ = (function logseq$shui$dialog$core$close_all_BANG_(){
var seq__108592 = cljs.core.seq(cljs.core.deref(logseq.shui.dialog.core._STAR_modals));
var chunk__108593 = null;
var count__108594 = (0);
var i__108595 = (0);
while(true){
if((i__108595 < count__108594)){
var map__108598 = chunk__108593.cljs$core$IIndexed$_nth$arity$2(null,i__108595);
var map__108598__$1 = cljs.core.__destructure_map(map__108598);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108598__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
logseq.shui.dialog.core.close_BANG_(id);


var G__108617 = seq__108592;
var G__108618 = chunk__108593;
var G__108619 = count__108594;
var G__108620 = (i__108595 + (1));
seq__108592 = G__108617;
chunk__108593 = G__108618;
count__108594 = G__108619;
i__108595 = G__108620;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__108592);
if(temp__5804__auto__){
var seq__108592__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__108592__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__108592__$1);
var G__108621 = cljs.core.chunk_rest(seq__108592__$1);
var G__108622 = c__5565__auto__;
var G__108623 = cljs.core.count(c__5565__auto__);
var G__108624 = (0);
seq__108592 = G__108621;
chunk__108593 = G__108622;
count__108594 = G__108623;
i__108595 = G__108624;
continue;
} else {
var map__108599 = cljs.core.first(seq__108592__$1);
var map__108599__$1 = cljs.core.__destructure_map(map__108599);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108599__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
logseq.shui.dialog.core.close_BANG_(id);


var G__108625 = cljs.core.next(seq__108592__$1);
var G__108626 = null;
var G__108627 = (0);
var G__108628 = (0);
seq__108592 = G__108625;
chunk__108593 = G__108626;
count__108594 = G__108627;
i__108595 = G__108628;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=logseq.shui.dialog.core.js.map
