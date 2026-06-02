goog.provide('frontend.components.conversion');
/**
 * Multiple-windows? (optional) - if multiple exist on the current graph
 * Dont receive param `repo` as `graph/ask-for-re-index` event doesn't accept repo param
 */
frontend.components.conversion.ask_for_re_index = (function frontend$components$conversion$ask_for_re_index(var_args){
var G__115530 = arguments.length;
switch (G__115530) {
case 0:
return frontend.components.conversion.ask_for_re_index.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.components.conversion.ask_for_re_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.conversion.ask_for_re_index.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),(function (repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphHasMultipleWindows",repo], 0)),(function (multiple_windows_QMARK_){
return promesa.protocols._promise(frontend.components.conversion.ask_for_re_index.cljs$core$IFn$_invoke$arity$1(multiple_windows_QMARK_));
}));
}));
}));
}));

(frontend.components.conversion.ask_for_re_index.cljs$core$IFn$_invoke$arity$1 = (function (multiple_windows_QMARK_){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ask-for-re-index","graph/ask-for-re-index",2038098533),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(multiple_windows_QMARK_),frontend.ui.admonition(new cljs.core.Keyword(null,"tip","tip",1221810860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","re-index","file-rn/re-index",1594433842)], 0))], null))], null));
}));

(frontend.components.conversion.ask_for_re_index.cljs$lang$maxFixedArity = 1);

/**
 * Ask users to re-index when the modal is exited
 */
frontend.components.conversion._LT_close_modal_on_done = (function frontend$components$conversion$_LT_close_modal_on_done(sync_QMARK_,rename_items){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_115567){
var state_val_115568 = (state_115567[(1)]);
if((state_val_115568 === (7))){
var inst_115542 = (state_115567[(7)]);
var state_115567__$1 = state_115567;
var statearr_115569_115901 = state_115567__$1;
(statearr_115569_115901[(2)] = inst_115542);

(statearr_115569_115901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (1))){
var inst_115531 = frontend.state.close_modal_BANG_();
var inst_115532 = cljs.core.async.timeout((100));
var state_115567__$1 = (function (){var statearr_115570 = state_115567;
(statearr_115570[(8)] = inst_115531);

return statearr_115570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115567__$1,(2),inst_115532);
} else {
if((state_val_115568 === (4))){
var inst_115540 = (state_115567[(9)]);
var state_115567__$1 = state_115567;
var statearr_115571_115902 = state_115567__$1;
(statearr_115571_115902[(2)] = inst_115540);

(statearr_115571_115902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (15))){
var inst_115565 = (state_115567[(2)]);
var state_115567__$1 = state_115567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_115567__$1,inst_115565);
} else {
if((state_val_115568 === (13))){
var inst_115558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_115559 = [new cljs.core.Keyword(null,"div","div",1057191632),"Please re-index this graph after all the changes are synced."];
var inst_115560 = (new cljs.core.PersistentVector(null,2,(5),inst_115558,inst_115559,null));
var inst_115561 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_115560,new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
var state_115567__$1 = state_115567;
var statearr_115572_115903 = state_115567__$1;
(statearr_115572_115903[(2)] = inst_115561);

(statearr_115572_115903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (6))){
var inst_115539 = (state_115567[(10)]);
var state_115567__$1 = state_115567;
var statearr_115573_115904 = state_115567__$1;
(statearr_115573_115904[(2)] = inst_115539);

(statearr_115573_115904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (3))){
var inst_115542 = (state_115567[(7)]);
var inst_115542__$1 = sync_QMARK_;
var state_115567__$1 = (function (){var statearr_115574 = state_115567;
(statearr_115574[(7)] = inst_115542__$1);

return statearr_115574;
})();
if(cljs.core.truth_(inst_115542__$1)){
var statearr_115575_115905 = state_115567__$1;
(statearr_115575_115905[(1)] = (6));

} else {
var statearr_115576_115906 = state_115567__$1;
(statearr_115576_115906[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (12))){
var inst_115553 = (state_115567[(2)]);
var state_115567__$1 = state_115567;
var statearr_115577_115907 = state_115567__$1;
(statearr_115577_115907[(2)] = inst_115553);

(statearr_115577_115907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (2))){
var inst_115537 = (state_115567[(11)]);
var inst_115540 = (state_115567[(9)]);
var inst_115534 = (state_115567[(2)]);
var inst_115536 = (function (){return (function (p__115535){
var map__115578 = p__115535;
var map__115578__$1 = cljs.core.__destructure_map(map__115578);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115578__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115578__$1,new cljs.core.Keyword(null,"file-name","file-name",-1654217259));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115578__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_name,target)){
return frontend.fs.sync.relative_path(new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file));
} else {
return null;
}
});
})();
var inst_115537__$1 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(inst_115536,rename_items);
var inst_115538 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_115539 = cljs.core.second(inst_115538);
var inst_115540__$1 = cljs.core.seq(inst_115537__$1);
var state_115567__$1 = (function (){var statearr_115579 = state_115567;
(statearr_115579[(12)] = inst_115534);

(statearr_115579[(11)] = inst_115537__$1);

(statearr_115579[(10)] = inst_115539);

(statearr_115579[(9)] = inst_115540__$1);

return statearr_115579;
})();
if(inst_115540__$1){
var statearr_115580_115908 = state_115567__$1;
(statearr_115580_115908[(1)] = (3));

} else {
var statearr_115581_115909 = state_115567__$1;
(statearr_115581_115909[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (11))){
var inst_115556 = (state_115567[(2)]);
var state_115567__$1 = (function (){var statearr_115582 = state_115567;
(statearr_115582[(13)] = inst_115556);

return statearr_115582;
})();
if(cljs.core.truth_(sync_QMARK_)){
var statearr_115583_115910 = state_115567__$1;
(statearr_115583_115910[(1)] = (13));

} else {
var statearr_115584_115911 = state_115567__$1;
(statearr_115584_115911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (9))){
var inst_115539 = (state_115567[(10)]);
var inst_115537 = (state_115567[(11)]);
var inst_115551 = frontend.fs.sync._LT_delete_remote_files_control(frontend.fs.sync.remoteapi,inst_115539,inst_115537);
var state_115567__$1 = state_115567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115567__$1,(12),inst_115551);
} else {
if((state_val_115568 === (5))){
var inst_115549 = (state_115567[(2)]);
var state_115567__$1 = state_115567;
if(cljs.core.truth_(inst_115549)){
var statearr_115585_115912 = state_115567__$1;
(statearr_115585_115912[(1)] = (9));

} else {
var statearr_115586_115913 = state_115567__$1;
(statearr_115586_115913[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (14))){
var inst_115563 = frontend.components.conversion.ask_for_re_index.cljs$core$IFn$_invoke$arity$0();
var state_115567__$1 = state_115567;
var statearr_115587_115914 = state_115567__$1;
(statearr_115587_115914[(2)] = inst_115563);

(statearr_115587_115914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (10))){
var state_115567__$1 = state_115567;
var statearr_115588_115915 = state_115567__$1;
(statearr_115588_115915[(2)] = null);

(statearr_115588_115915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115568 === (8))){
var inst_115546 = (state_115567[(2)]);
var state_115567__$1 = state_115567;
var statearr_115589_115916 = state_115567__$1;
(statearr_115589_115916[(2)] = inst_115546);

(statearr_115589_115916[(1)] = (5));


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
});
return (function() {
var frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto__ = null;
var frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto____0 = (function (){
var statearr_115590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_115590[(0)] = frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto__);

(statearr_115590[(1)] = (1));

return statearr_115590;
});
var frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto____1 = (function (state_115567){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_115567);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e115591){var ex__34382__auto__ = e115591;
var statearr_115592_115917 = state_115567;
(statearr_115592_115917[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_115567[(4)]))){
var statearr_115593_115918 = state_115567;
(statearr_115593_115918[(1)] = cljs.core.first((state_115567[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115919 = state_115567;
state_115567 = G__115919;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto__ = function(state_115567){
switch(arguments.length){
case 0:
return frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto____1.call(this,state_115567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto____0;
frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto____1;
return frontend$components$conversion$_LT_close_modal_on_done_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_115594 = f__34484__auto__();
(statearr_115594[(6)] = c__34483__auto__);

return statearr_115594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.components.conversion.legacy_warning = rum.core.lazy_build(rum.core.build_defc,(function (repo,_STAR_target_format,_STAR_dir_format,_STAR_solid_format){
return daiquiri.core.create_element("div",null,[frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","format-deprecated","file-rn/format-deprecated",-171602971)], 0))], null)),(function (){var attrs115595 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","instruct-1","file-rn/instruct-1",326582306)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115595))?daiquiri.interpreter.element_attributes(attrs115595):null),((cljs.core.map_QMARK_(attrs115595))?null:[daiquiri.interpreter.interpret(attrs115595)]));
})(),(function (){var attrs115596 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","instruct-2","file-rn/instruct-2",-1357045533)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115596))?daiquiri.interpreter.element_attributes(attrs115596):null),((cljs.core.map_QMARK_(attrs115596))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","confirm-proceed","file-rn/confirm-proceed",1643726094)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-md p-2 mr-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(_STAR_target_format,new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099));

cljs.core.reset_BANG_(_STAR_dir_format,frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$1(repo));

frontend.handler.conversion.write_filename_format_BANG_(repo,new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099));

return cljs.core.reset_BANG_(_STAR_solid_format,new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099));
})], 0)))]:[daiquiri.interpreter.interpret(attrs115596),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","confirm-proceed","file-rn/confirm-proceed",1643726094)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"text-md p-2 mr-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(_STAR_target_format,new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099));

cljs.core.reset_BANG_(_STAR_dir_format,frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$1(repo));

frontend.handler.conversion.write_filename_format_BANG_(repo,new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099));

return cljs.core.reset_BANG_(_STAR_solid_format,new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099));
})], 0)))]));
})(),(function (){var attrs115597 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","instruct-3","file-rn/instruct-3",1363444925)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115597))?daiquiri.interpreter.element_attributes(attrs115597):null),((cljs.core.map_QMARK_(attrs115597))?null:[daiquiri.interpreter.interpret(attrs115597)]));
})()]);
}),null,"frontend.components.conversion/legacy-warning");
/**
 * A dropdown menu for selecting the target filename format
 */
frontend.components.conversion.filename_format_select = rum.core.lazy_build(rum.core.build_defc,(function (_STAR_target_format,disabled_QMARK_){
return daiquiri.core.create_element("div",{'className':"it sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start"},[(function (){var attrs115598 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","select-format","file-rn/select-format",276374670)], 0));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs115598))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","text-sm","font-medium","leading-5"], null)], null),attrs115598], 0))):{'className':"block text-sm font-medium leading-5"}),((cljs.core.map_QMARK_(attrs115598))?[daiquiri.core.create_element("select",{'disabled':disabled_QMARK_,'value':cljs.core.name(cljs.core.deref(_STAR_target_format)),'onChange':rum.core.mark_sync_update((function (e){
var format_str = frontend.util.evalue(e);
return cljs.core.reset_BANG_(_STAR_target_format,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format_str));
})),'className':"form-select is-small"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$conversion$iter__115599(s__115600){
return (new cljs.core.LazySeq(null,(function (){
var s__115600__$1 = s__115600;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115600__$1);
if(temp__5804__auto__){
var s__115600__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115600__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115600__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115602 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115601 = (0);
while(true){
if((i__115601 < size__5519__auto__)){
var format = cljs.core._nth(c__5518__auto__,i__115601);
cljs.core.chunk_append(b__115602,(function (){var format_str = cljs.core.name(format);
return daiquiri.core.create_element("option",{'key':format_str,'value':format_str},[format_str]);
})());

var G__115920 = (i__115601 + (1));
i__115601 = G__115920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115602),frontend$components$conversion$iter__115599(cljs.core.chunk_rest(s__115600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115602),null);
}
} else {
var format = cljs.core.first(s__115600__$2);
return cljs.core.cons((function (){var format_str = cljs.core.name(format);
return daiquiri.core.create_element("option",{'key':format_str,'value':format_str},[format_str]);
})(),frontend$components$conversion$iter__115599(cljs.core.rest(s__115600__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.handler.conversion.supported_filename_formats);
})())])]:[daiquiri.interpreter.interpret(attrs115598),daiquiri.core.create_element("select",{'disabled':disabled_QMARK_,'value':cljs.core.name(cljs.core.deref(_STAR_target_format)),'onChange':rum.core.mark_sync_update((function (e){
var format_str = frontend.util.evalue(e);
return cljs.core.reset_BANG_(_STAR_target_format,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format_str));
})),'className':"form-select is-small"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$conversion$iter__115603(s__115604){
return (new cljs.core.LazySeq(null,(function (){
var s__115604__$1 = s__115604;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115604__$1);
if(temp__5804__auto__){
var s__115604__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115604__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115604__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115606 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115605 = (0);
while(true){
if((i__115605 < size__5519__auto__)){
var format = cljs.core._nth(c__5518__auto__,i__115605);
cljs.core.chunk_append(b__115606,(function (){var format_str = cljs.core.name(format);
return daiquiri.core.create_element("option",{'key':format_str,'value':format_str},[format_str]);
})());

var G__115921 = (i__115605 + (1));
i__115605 = G__115921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115606),frontend$components$conversion$iter__115603(cljs.core.chunk_rest(s__115604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115606),null);
}
} else {
var format = cljs.core.first(s__115604__$2);
return cljs.core.cons((function (){var format_str = cljs.core.name(format);
return daiquiri.core.create_element("option",{'key':format_str,'value':format_str},[format_str]);
})(),frontend$components$conversion$iter__115603(cljs.core.rest(s__115604__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.handler.conversion.supported_filename_formats);
})())])]));
})()]);
}),null,"frontend.components.conversion/filename-format-select");
frontend.components.conversion.files_breaking_changed = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var _STAR_dir_format = new cljs.core.Keyword("frontend.components.conversion","dir-format","frontend.components.conversion/dir-format",-5040466).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_target_format = new cljs.core.Keyword("frontend.components.conversion","target-format","frontend.components.conversion/target-format",1519811834).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_solid_format = new cljs.core.Keyword("frontend.components.conversion","solid-format","frontend.components.conversion/solid-format",1019749371).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_pages = new cljs.core.Keyword("frontend.components.conversion","pages","frontend.components.conversion/pages",190691005).cljs$core$IFn$_invoke$arity$1(state);
var need_persist_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_solid_format),cljs.core.deref(_STAR_target_format));
var _STAR_switch_disabled_QMARK_ = new cljs.core.Keyword("frontend.components.conversion","switch-disabled?","frontend.components.conversion/switch-disabled?",-740043274).cljs$core$IFn$_invoke$arity$1(state);
if((cljs.core.deref(_STAR_pages) == null)){
var pages_with_file_115922 = (frontend.db.get_pages_with_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_pages_with_file.cljs$core$IFn$_invoke$arity$1(repo) : frontend.db.get_pages_with_file.call(null,repo));
var the_keys_115923 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__115610){
var vec__115611 = p__115610;
var _page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115611,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115611,(1),null);
return new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
}),pages_with_file_115922);
cljs.core.reset_BANG_(_STAR_pages,cljs.core.zipmap(the_keys_115923,pages_with_file_115922));
} else {
}

if((((cljs.core.deref(_STAR_dir_format) == null)) && ((((cljs.core.deref(_STAR_solid_format) == null)) && ((cljs.core.deref(_STAR_target_format) == null)))))){
var config_format_115924 = frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$1(repo);
cljs.core.reset_BANG_(_STAR_dir_format,config_format_115924);

cljs.core.reset_BANG_(_STAR_solid_format,config_format_115924);

cljs.core.reset_BANG_(_STAR_target_format,new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099));
} else {
}

var attrs115607 = (cljs.core.truth_(frontend.state.developer_mode_QMARK_())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.components.conversion.filename_format_select(_STAR_target_format,cljs.core.deref(_STAR_switch_disabled_QMARK_)),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","select-confirm-proceed","file-rn/select-confirm-proceed",-1840437314)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(need_persist_QMARK_)),new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm p-1 mr-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(_STAR_dir_format,frontend.state.get_filename_format.cljs$core$IFn$_invoke$arity$1(repo));

frontend.handler.conversion.write_filename_format_BANG_(repo,cljs.core.deref(_STAR_target_format));

cljs.core.reset_BANG_(_STAR_solid_format,cljs.core.deref(_STAR_target_format));

return cljs.core.reset_BANG_(_STAR_switch_disabled_QMARK_,true);
})], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs115607))?daiquiri.interpreter.element_attributes(attrs115607):null),((cljs.core.map_QMARK_(attrs115607))?[(function (){var attrs115608 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","filename-format","settings-page/filename-format",-500341543)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs115608))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs115608], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs115608))?null:[daiquiri.interpreter.interpret(attrs115608)]));
})(),daiquiri.core.create_element("div",{'className':"rounded-md opacity-70"},[(function (){var attrs115614 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","filename-desc-1","file-rn/filename-desc-1",-872094892)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115614))?daiquiri.interpreter.element_attributes(attrs115614):null),((cljs.core.map_QMARK_(attrs115614))?null:[daiquiri.interpreter.interpret(attrs115614)]));
})(),(function (){var attrs115615 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","filename-desc-2","file-rn/filename-desc-2",449033338)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115615))?daiquiri.interpreter.element_attributes(attrs115615):null),((cljs.core.map_QMARK_(attrs115615))?null:[daiquiri.interpreter.interpret(attrs115615)]));
})(),(function (){var attrs115616 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","filename-desc-3","file-rn/filename-desc-3",-885685789)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115616))?daiquiri.interpreter.element_attributes(attrs115616):null),((cljs.core.map_QMARK_(attrs115616))?null:[daiquiri.interpreter.interpret(attrs115616)]));
})(),(function (){var attrs115617 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","filename-desc-4","file-rn/filename-desc-4",1216444144)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115617))?daiquiri.interpreter.element_attributes(attrs115617):null),((cljs.core.map_QMARK_(attrs115617))?null:[daiquiri.interpreter.interpret(attrs115617)]));
})()]),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_solid_format),new cljs.core.Keyword(null,"legacy","legacy",1434943289)))?frontend.components.conversion.legacy_warning(repo,_STAR_target_format,_STAR_dir_format,_STAR_solid_format):null),daiquiri.core.create_element("div",{'disabled':need_persist_QMARK_,'className':"cp__settings-files-breaking-changed"},[daiquiri.core.create_element("hr",null,null),(function (){var rename_items = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__115620){
var vec__115621 = p__115620;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115621,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115621,(1),null);
var temp__5804__auto__ = frontend.handler.conversion.calc_rename_target(page,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),cljs.core.deref(_STAR_dir_format),cljs.core.deref(_STAR_target_format));
if(cljs.core.truth_(temp__5804__auto__)){
var ret = temp__5804__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"file","file",-1269645878),file], null)], 0));
} else {
return null;
}
}),cljs.core.vals(cljs.core.deref(_STAR_pages))));
var sync_QMARK_ = frontend.handler.file_sync.current_graph_sync_on_QMARK_();
var _LT_rename_all = (function (){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_115694){
var state_val_115695 = (state_115694[(1)]);
if((state_val_115695 === (7))){
var inst_115640 = (state_115694[(7)]);
var inst_115641 = (state_115694[(8)]);
var inst_115645 = cljs.core.constantly(null);
var inst_115646 = frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$4(inst_115640,inst_115641,inst_115645,true);
var inst_115647 = cljs.core.async.interop.p__GT_c(inst_115646);
var state_115694__$1 = state_115694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115694__$1,(10),inst_115647);
} else {
if((state_val_115695 === (20))){
var inst_115677 = (state_115694[(2)]);
var state_115694__$1 = state_115694;
var statearr_115696_115925 = state_115694__$1;
(statearr_115696_115925[(2)] = inst_115677);

(statearr_115696_115925[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (1))){
var inst_115628 = cljs.core.seq(rename_items);
var inst_115629 = inst_115628;
var inst_115630 = null;
var inst_115631 = (0);
var inst_115632 = (0);
var state_115694__$1 = (function (){var statearr_115697 = state_115694;
(statearr_115697[(9)] = inst_115629);

(statearr_115697[(10)] = inst_115630);

(statearr_115697[(11)] = inst_115631);

(statearr_115697[(12)] = inst_115632);

return statearr_115697;
})();
var statearr_115698_115926 = state_115694__$1;
(statearr_115698_115926[(2)] = null);

(statearr_115698_115926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (4))){
var inst_115630 = (state_115694[(10)]);
var inst_115632 = (state_115694[(12)]);
var inst_115638 = cljs.core._nth(inst_115630,inst_115632);
var inst_115639 = cljs.core.__destructure_map(inst_115638);
var inst_115640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115639,new cljs.core.Keyword(null,"file","file",-1269645878));
var inst_115641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115639,new cljs.core.Keyword(null,"target","target",253001721));
var inst_115642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115639,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_115643 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_115642,new cljs.core.Keyword(null,"unreachable","unreachable",-1547366286));
var state_115694__$1 = (function (){var statearr_115699 = state_115694;
(statearr_115699[(7)] = inst_115640);

(statearr_115699[(8)] = inst_115641);

return statearr_115699;
})();
if(inst_115643){
var statearr_115700_115927 = state_115694__$1;
(statearr_115700_115927[(1)] = (7));

} else {
var statearr_115701_115928 = state_115694__$1;
(statearr_115701_115928[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (15))){
var inst_115656 = (state_115694[(13)]);
var inst_115666 = cljs.core.first(inst_115656);
var inst_115667 = cljs.core.__destructure_map(inst_115666);
var inst_115668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115667,new cljs.core.Keyword(null,"file","file",-1269645878));
var inst_115669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115667,new cljs.core.Keyword(null,"target","target",253001721));
var inst_115670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115667,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_115671 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_115670,new cljs.core.Keyword(null,"unreachable","unreachable",-1547366286));
var state_115694__$1 = (function (){var statearr_115702 = state_115694;
(statearr_115702[(14)] = inst_115668);

(statearr_115702[(15)] = inst_115669);

return statearr_115702;
})();
if(inst_115671){
var statearr_115703_115929 = state_115694__$1;
(statearr_115703_115929[(1)] = (17));

} else {
var statearr_115704_115930 = state_115694__$1;
(statearr_115704_115930[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (13))){
var inst_115687 = (state_115694[(2)]);
var state_115694__$1 = state_115694;
var statearr_115705_115931 = state_115694__$1;
(statearr_115705_115931[(2)] = inst_115687);

(statearr_115705_115931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (6))){
var inst_115689 = (state_115694[(2)]);
var state_115694__$1 = state_115694;
var statearr_115706_115932 = state_115694__$1;
(statearr_115706_115932[(2)] = inst_115689);

(statearr_115706_115932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (17))){
var inst_115668 = (state_115694[(14)]);
var inst_115669 = (state_115694[(15)]);
var inst_115673 = cljs.core.constantly(null);
var inst_115674 = frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$4(inst_115668,inst_115669,inst_115673,true);
var inst_115675 = cljs.core.async.interop.p__GT_c(inst_115674);
var state_115694__$1 = state_115694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115694__$1,(20),inst_115675);
} else {
if((state_val_115695 === (3))){
var inst_115691 = (state_115694[(2)]);
var inst_115692 = frontend.components.conversion._LT_close_modal_on_done(sync_QMARK_,rename_items);
var state_115694__$1 = (function (){var statearr_115707 = state_115694;
(statearr_115707[(16)] = inst_115691);

return statearr_115707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_115694__$1,inst_115692);
} else {
if((state_val_115695 === (12))){
var state_115694__$1 = state_115694;
var statearr_115708_115933 = state_115694__$1;
(statearr_115708_115933[(2)] = null);

(statearr_115708_115933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (2))){
var inst_115632 = (state_115694[(12)]);
var inst_115631 = (state_115694[(11)]);
var inst_115634 = (inst_115632 < inst_115631);
var inst_115635 = inst_115634;
var state_115694__$1 = state_115694;
if(cljs.core.truth_(inst_115635)){
var statearr_115709_115934 = state_115694__$1;
(statearr_115709_115934[(1)] = (4));

} else {
var statearr_115710_115935 = state_115694__$1;
(statearr_115710_115935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (19))){
var inst_115656 = (state_115694[(13)]);
var inst_115680 = (state_115694[(2)]);
var inst_115681 = cljs.core.next(inst_115656);
var inst_115629 = inst_115681;
var inst_115630 = null;
var inst_115631 = (0);
var inst_115632 = (0);
var state_115694__$1 = (function (){var statearr_115714 = state_115694;
(statearr_115714[(17)] = inst_115680);

(statearr_115714[(9)] = inst_115629);

(statearr_115714[(10)] = inst_115630);

(statearr_115714[(11)] = inst_115631);

(statearr_115714[(12)] = inst_115632);

return statearr_115714;
})();
var statearr_115715_115936 = state_115694__$1;
(statearr_115715_115936[(2)] = null);

(statearr_115715_115936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (11))){
var inst_115656 = (state_115694[(13)]);
var inst_115658 = cljs.core.chunked_seq_QMARK_(inst_115656);
var state_115694__$1 = state_115694;
if(inst_115658){
var statearr_115716_115937 = state_115694__$1;
(statearr_115716_115937[(1)] = (14));

} else {
var statearr_115717_115938 = state_115694__$1;
(statearr_115717_115938[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (9))){
var inst_115632 = (state_115694[(12)]);
var inst_115629 = (state_115694[(9)]);
var inst_115630 = (state_115694[(10)]);
var inst_115631 = (state_115694[(11)]);
var inst_115652 = (state_115694[(2)]);
var inst_115653 = (inst_115632 + (1));
var tmp115711 = inst_115630;
var tmp115712 = inst_115629;
var tmp115713 = inst_115631;
var inst_115629__$1 = tmp115712;
var inst_115630__$1 = tmp115711;
var inst_115631__$1 = tmp115713;
var inst_115632__$1 = inst_115653;
var state_115694__$1 = (function (){var statearr_115718 = state_115694;
(statearr_115718[(18)] = inst_115652);

(statearr_115718[(9)] = inst_115629__$1);

(statearr_115718[(10)] = inst_115630__$1);

(statearr_115718[(11)] = inst_115631__$1);

(statearr_115718[(12)] = inst_115632__$1);

return statearr_115718;
})();
var statearr_115719_115939 = state_115694__$1;
(statearr_115719_115939[(2)] = null);

(statearr_115719_115939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (5))){
var inst_115629 = (state_115694[(9)]);
var inst_115656 = (state_115694[(13)]);
var inst_115656__$1 = cljs.core.seq(inst_115629);
var state_115694__$1 = (function (){var statearr_115720 = state_115694;
(statearr_115720[(13)] = inst_115656__$1);

return statearr_115720;
})();
if(inst_115656__$1){
var statearr_115721_115940 = state_115694__$1;
(statearr_115721_115940[(1)] = (11));

} else {
var statearr_115722_115941 = state_115694__$1;
(statearr_115722_115941[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (14))){
var inst_115656 = (state_115694[(13)]);
var inst_115660 = cljs.core.chunk_first(inst_115656);
var inst_115661 = cljs.core.chunk_rest(inst_115656);
var inst_115662 = cljs.core.count(inst_115660);
var inst_115629 = inst_115661;
var inst_115630 = inst_115660;
var inst_115631 = inst_115662;
var inst_115632 = (0);
var state_115694__$1 = (function (){var statearr_115723 = state_115694;
(statearr_115723[(9)] = inst_115629);

(statearr_115723[(10)] = inst_115630);

(statearr_115723[(11)] = inst_115631);

(statearr_115723[(12)] = inst_115632);

return statearr_115723;
})();
var statearr_115724_115942 = state_115694__$1;
(statearr_115724_115942[(2)] = null);

(statearr_115724_115942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (16))){
var inst_115684 = (state_115694[(2)]);
var state_115694__$1 = state_115694;
var statearr_115725_115943 = state_115694__$1;
(statearr_115725_115943[(2)] = inst_115684);

(statearr_115725_115943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (10))){
var inst_115649 = (state_115694[(2)]);
var state_115694__$1 = state_115694;
var statearr_115726_115944 = state_115694__$1;
(statearr_115726_115944[(2)] = inst_115649);

(statearr_115726_115944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (18))){
var state_115694__$1 = state_115694;
var statearr_115727_115945 = state_115694__$1;
(statearr_115727_115945[(2)] = null);

(statearr_115727_115945[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115695 === (8))){
var state_115694__$1 = state_115694;
var statearr_115728_115946 = state_115694__$1;
(statearr_115728_115946[(2)] = null);

(statearr_115728_115946[(1)] = (9));


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
}
}
}
});
return (function() {
var frontend$components$conversion$state_machine__34379__auto__ = null;
var frontend$components$conversion$state_machine__34379__auto____0 = (function (){
var statearr_115729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_115729[(0)] = frontend$components$conversion$state_machine__34379__auto__);

(statearr_115729[(1)] = (1));

return statearr_115729;
});
var frontend$components$conversion$state_machine__34379__auto____1 = (function (state_115694){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_115694);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e115730){var ex__34382__auto__ = e115730;
var statearr_115731_115947 = state_115694;
(statearr_115731_115947[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_115694[(4)]))){
var statearr_115732_115948 = state_115694;
(statearr_115732_115948[(1)] = cljs.core.first((state_115694[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115949 = state_115694;
state_115694 = G__115949;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$conversion$state_machine__34379__auto__ = function(state_115694){
switch(arguments.length){
case 0:
return frontend$components$conversion$state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$conversion$state_machine__34379__auto____1.call(this,state_115694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$conversion$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$conversion$state_machine__34379__auto____0;
frontend$components$conversion$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$conversion$state_machine__34379__auto____1;
return frontend$components$conversion$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_115733 = f__34484__auto__();
(statearr_115733[(6)] = c__34483__auto__);

return statearr_115733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
if(cljs.core.truth_(cljs.core.not_empty(rename_items))){
var attrs115734 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_solid_format),new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_dir_format),new cljs.core.Keyword(null,"legacy","legacy",1434943289)))))?frontend.ui.admonition(new cljs.core.Keyword(null,"tip","tip",1221810860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","need-action","file-rn/need-action",-1610232477)], 0))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","need-action","file-rn/need-action",-1610232477)], 0))], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs115734))?daiquiri.interpreter.element_attributes(attrs115734):null),((cljs.core.map_QMARK_(attrs115734))?[(function (){var attrs115735 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","all-action","file-rn/all-action",215714973),cljs.core.count(rename_items)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),_LT_rename_all,new cljs.core.Keyword(null,"class","class",-2030961996),"text-md p-2 mr-1"], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115735))?daiquiri.interpreter.element_attributes(attrs115735):null),((cljs.core.map_QMARK_(attrs115735))?[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions","file-rn/or-select-actions",406926714)], 0))),daiquiri.core.create_element("a",{'onClick':frontend.components.conversion._LT_close_modal_on_done},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","close-panel","file-rn/close-panel",1260858328)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions-2","file-rn/or-select-actions-2",1886314162)], 0)))]:[daiquiri.interpreter.interpret(attrs115735),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions","file-rn/or-select-actions",406926714)], 0))),daiquiri.core.create_element("a",{'onClick':frontend.components.conversion._LT_close_modal_on_done},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","close-panel","file-rn/close-panel",1260858328)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions-2","file-rn/or-select-actions-2",1886314162)], 0)))]));
})(),(function (){var attrs115736 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","legend","file-rn/legend",1909410426)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115736))?daiquiri.interpreter.element_attributes(attrs115736):null),((cljs.core.map_QMARK_(attrs115736))?null:[daiquiri.interpreter.interpret(attrs115736)]));
})(),daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$conversion$iter__115739(s__115740){
return (new cljs.core.LazySeq(null,(function (){
var s__115740__$1 = s__115740;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115740__$1);
if(temp__5804__auto__){
var s__115740__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115740__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115740__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115742 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115741 = (0);
while(true){
if((i__115741 < size__5519__auto__)){
var map__115743 = cljs.core._nth(c__5518__auto__,i__115741);
var map__115743__$1 = cljs.core.__destructure_map(map__115743);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115743__$1,new cljs.core.Keyword(null,"page","page",849072397));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115743__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115743__$1,new cljs.core.Keyword(null,"target","target",253001721));
var old_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115743__$1,new cljs.core.Keyword(null,"old-title","old-title",-85478212));
var changed_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115743__$1,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918));
cljs.core.chunk_append(b__115742,(function (){var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
var src_file_name = logseq.graph_parser.util.path__GT_file_name(path);
var tgt_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.path__GT_file_ext(path))].join('');
var rm_item_fn = ((function (i__115741,path,src_file_name,tgt_file_name,map__115743,map__115743__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115742,s__115740__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_pages,cljs.core.dissoc,path);
});})(i__115741,path,src_file_name,tgt_file_name,map__115743,map__115743__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115742,s__115740__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_fn = ((function (i__115741,path,src_file_name,tgt_file_name,rm_item_fn,map__115743,map__115743__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115742,s__115740__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3(file,target,rm_item_fn);
});})(i__115741,path,src_file_name,tgt_file_name,rm_item_fn,map__115743,map__115743__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115742,s__115740__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_but = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rename_fn,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","apply-rename","file-rn/apply-rename",-135786625)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","rename","file-rn/rename",215853120),src_file_name,tgt_file_name], 0))], null)], null);
return daiquiri.core.create_element("tr",{'key':new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)},[daiquiri.core.create_element("td",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDCC4 ",daiquiri.interpreter.interpret(old_title)])]),(function (){var G__115744 = status;
var G__115744__$1 = (((G__115744 instanceof cljs.core.Keyword))?G__115744.fqn:null);
switch (G__115744__$1) {
case "breaking":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE1 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","suggest-rename","file-rn/suggest-rename",-1483776573)], 0))),daiquiri.interpreter.interpret(rename_but)]),(function (){var attrs115745 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","otherwise-breaking","file-rn/otherwise-breaking",-1687066520)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115745))?daiquiri.interpreter.element_attributes(attrs115745):null),((cljs.core.map_QMARK_(attrs115745))?[" \"",daiquiri.interpreter.interpret(changed_title),"\""]:[daiquiri.interpreter.interpret(attrs115745)," \"",daiquiri.interpreter.interpret(changed_title),"\""]));
})()]);

break;
case "unreachable":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDD34 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","unreachable-title","file-rn/unreachable-title",1798360761),changed_title], 0)))])]);

break;
default:
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE2 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","optional-rename","file-rn/optional-rename",2011817094)], 0))),daiquiri.interpreter.interpret(rename_but)])]);

}
})()])]);
})());

var G__115951 = (i__115741 + (1));
i__115741 = G__115951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115742),frontend$components$conversion$iter__115739(cljs.core.chunk_rest(s__115740__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115742),null);
}
} else {
var map__115746 = cljs.core.first(s__115740__$2);
var map__115746__$1 = cljs.core.__destructure_map(map__115746);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115746__$1,new cljs.core.Keyword(null,"page","page",849072397));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115746__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115746__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115746__$1,new cljs.core.Keyword(null,"target","target",253001721));
var old_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115746__$1,new cljs.core.Keyword(null,"old-title","old-title",-85478212));
var changed_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115746__$1,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918));
return cljs.core.cons((function (){var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
var src_file_name = logseq.graph_parser.util.path__GT_file_name(path);
var tgt_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.path__GT_file_ext(path))].join('');
var rm_item_fn = ((function (path,src_file_name,tgt_file_name,map__115746,map__115746__$1,page,file,status,target,old_title,changed_title,s__115740__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_pages,cljs.core.dissoc,path);
});})(path,src_file_name,tgt_file_name,map__115746,map__115746__$1,page,file,status,target,old_title,changed_title,s__115740__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_fn = ((function (path,src_file_name,tgt_file_name,rm_item_fn,map__115746,map__115746__$1,page,file,status,target,old_title,changed_title,s__115740__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3(file,target,rm_item_fn);
});})(path,src_file_name,tgt_file_name,rm_item_fn,map__115746,map__115746__$1,page,file,status,target,old_title,changed_title,s__115740__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_but = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rename_fn,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","apply-rename","file-rn/apply-rename",-135786625)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","rename","file-rn/rename",215853120),src_file_name,tgt_file_name], 0))], null)], null);
return daiquiri.core.create_element("tr",{'key':new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)},[daiquiri.core.create_element("td",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDCC4 ",daiquiri.interpreter.interpret(old_title)])]),(function (){var G__115747 = status;
var G__115747__$1 = (((G__115747 instanceof cljs.core.Keyword))?G__115747.fqn:null);
switch (G__115747__$1) {
case "breaking":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE1 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","suggest-rename","file-rn/suggest-rename",-1483776573)], 0))),daiquiri.interpreter.interpret(rename_but)]),(function (){var attrs115745 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","otherwise-breaking","file-rn/otherwise-breaking",-1687066520)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115745))?daiquiri.interpreter.element_attributes(attrs115745):null),((cljs.core.map_QMARK_(attrs115745))?[" \"",daiquiri.interpreter.interpret(changed_title),"\""]:[daiquiri.interpreter.interpret(attrs115745)," \"",daiquiri.interpreter.interpret(changed_title),"\""]));
})()]);

break;
case "unreachable":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDD34 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","unreachable-title","file-rn/unreachable-title",1798360761),changed_title], 0)))])]);

break;
default:
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE2 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","optional-rename","file-rn/optional-rename",2011817094)], 0))),daiquiri.interpreter.interpret(rename_but)])]);

}
})()])]);
})(),frontend$components$conversion$iter__115739(cljs.core.rest(s__115740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rename_items);
})())])])]:[daiquiri.interpreter.interpret(attrs115734),(function (){var attrs115737 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","all-action","file-rn/all-action",215714973),cljs.core.count(rename_items)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),_LT_rename_all,new cljs.core.Keyword(null,"class","class",-2030961996),"text-md p-2 mr-1"], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115737))?daiquiri.interpreter.element_attributes(attrs115737):null),((cljs.core.map_QMARK_(attrs115737))?[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions","file-rn/or-select-actions",406926714)], 0))),daiquiri.core.create_element("a",{'onClick':frontend.components.conversion._LT_close_modal_on_done},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","close-panel","file-rn/close-panel",1260858328)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions-2","file-rn/or-select-actions-2",1886314162)], 0)))]:[daiquiri.interpreter.interpret(attrs115737),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions","file-rn/or-select-actions",406926714)], 0))),daiquiri.core.create_element("a",{'onClick':frontend.components.conversion._LT_close_modal_on_done},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","close-panel","file-rn/close-panel",1260858328)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions-2","file-rn/or-select-actions-2",1886314162)], 0)))]));
})(),(function (){var attrs115738 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","legend","file-rn/legend",1909410426)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115738))?daiquiri.interpreter.element_attributes(attrs115738):null),((cljs.core.map_QMARK_(attrs115738))?null:[daiquiri.interpreter.interpret(attrs115738)]));
})(),daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$conversion$iter__115748(s__115749){
return (new cljs.core.LazySeq(null,(function (){
var s__115749__$1 = s__115749;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115749__$1);
if(temp__5804__auto__){
var s__115749__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115749__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115749__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115751 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115750 = (0);
while(true){
if((i__115750 < size__5519__auto__)){
var map__115752 = cljs.core._nth(c__5518__auto__,i__115750);
var map__115752__$1 = cljs.core.__destructure_map(map__115752);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115752__$1,new cljs.core.Keyword(null,"page","page",849072397));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115752__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115752__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115752__$1,new cljs.core.Keyword(null,"target","target",253001721));
var old_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115752__$1,new cljs.core.Keyword(null,"old-title","old-title",-85478212));
var changed_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115752__$1,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918));
cljs.core.chunk_append(b__115751,(function (){var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
var src_file_name = logseq.graph_parser.util.path__GT_file_name(path);
var tgt_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.path__GT_file_ext(path))].join('');
var rm_item_fn = ((function (i__115750,path,src_file_name,tgt_file_name,map__115752,map__115752__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115751,s__115749__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_pages,cljs.core.dissoc,path);
});})(i__115750,path,src_file_name,tgt_file_name,map__115752,map__115752__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115751,s__115749__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_fn = ((function (i__115750,path,src_file_name,tgt_file_name,rm_item_fn,map__115752,map__115752__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115751,s__115749__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3(file,target,rm_item_fn);
});})(i__115750,path,src_file_name,tgt_file_name,rm_item_fn,map__115752,map__115752__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115751,s__115749__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_but = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rename_fn,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","apply-rename","file-rn/apply-rename",-135786625)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","rename","file-rn/rename",215853120),src_file_name,tgt_file_name], 0))], null)], null);
return daiquiri.core.create_element("tr",{'key':new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)},[daiquiri.core.create_element("td",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDCC4 ",daiquiri.interpreter.interpret(old_title)])]),(function (){var G__115753 = status;
var G__115753__$1 = (((G__115753 instanceof cljs.core.Keyword))?G__115753.fqn:null);
switch (G__115753__$1) {
case "breaking":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE1 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","suggest-rename","file-rn/suggest-rename",-1483776573)], 0))),daiquiri.interpreter.interpret(rename_but)]),(function (){var attrs115754 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","otherwise-breaking","file-rn/otherwise-breaking",-1687066520)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115754))?daiquiri.interpreter.element_attributes(attrs115754):null),((cljs.core.map_QMARK_(attrs115754))?[" \"",daiquiri.interpreter.interpret(changed_title),"\""]:[daiquiri.interpreter.interpret(attrs115754)," \"",daiquiri.interpreter.interpret(changed_title),"\""]));
})()]);

break;
case "unreachable":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDD34 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","unreachable-title","file-rn/unreachable-title",1798360761),changed_title], 0)))])]);

break;
default:
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE2 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","optional-rename","file-rn/optional-rename",2011817094)], 0))),daiquiri.interpreter.interpret(rename_but)])]);

}
})()])]);
})());

var G__115954 = (i__115750 + (1));
i__115750 = G__115954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115751),frontend$components$conversion$iter__115748(cljs.core.chunk_rest(s__115749__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115751),null);
}
} else {
var map__115755 = cljs.core.first(s__115749__$2);
var map__115755__$1 = cljs.core.__destructure_map(map__115755);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115755__$1,new cljs.core.Keyword(null,"page","page",849072397));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115755__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115755__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115755__$1,new cljs.core.Keyword(null,"target","target",253001721));
var old_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115755__$1,new cljs.core.Keyword(null,"old-title","old-title",-85478212));
var changed_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115755__$1,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918));
return cljs.core.cons((function (){var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
var src_file_name = logseq.graph_parser.util.path__GT_file_name(path);
var tgt_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.path__GT_file_ext(path))].join('');
var rm_item_fn = ((function (path,src_file_name,tgt_file_name,map__115755,map__115755__$1,page,file,status,target,old_title,changed_title,s__115749__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_pages,cljs.core.dissoc,path);
});})(path,src_file_name,tgt_file_name,map__115755,map__115755__$1,page,file,status,target,old_title,changed_title,s__115749__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_fn = ((function (path,src_file_name,tgt_file_name,rm_item_fn,map__115755,map__115755__$1,page,file,status,target,old_title,changed_title,s__115749__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3(file,target,rm_item_fn);
});})(path,src_file_name,tgt_file_name,rm_item_fn,map__115755,map__115755__$1,page,file,status,target,old_title,changed_title,s__115749__$2,temp__5804__auto__,attrs115734,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_but = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rename_fn,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","apply-rename","file-rn/apply-rename",-135786625)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","rename","file-rn/rename",215853120),src_file_name,tgt_file_name], 0))], null)], null);
return daiquiri.core.create_element("tr",{'key':new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)},[daiquiri.core.create_element("td",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDCC4 ",daiquiri.interpreter.interpret(old_title)])]),(function (){var G__115756 = status;
var G__115756__$1 = (((G__115756 instanceof cljs.core.Keyword))?G__115756.fqn:null);
switch (G__115756__$1) {
case "breaking":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE1 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","suggest-rename","file-rn/suggest-rename",-1483776573)], 0))),daiquiri.interpreter.interpret(rename_but)]),(function (){var attrs115754 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","otherwise-breaking","file-rn/otherwise-breaking",-1687066520)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115754))?daiquiri.interpreter.element_attributes(attrs115754):null),((cljs.core.map_QMARK_(attrs115754))?[" \"",daiquiri.interpreter.interpret(changed_title),"\""]:[daiquiri.interpreter.interpret(attrs115754)," \"",daiquiri.interpreter.interpret(changed_title),"\""]));
})()]);

break;
case "unreachable":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDD34 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","unreachable-title","file-rn/unreachable-title",1798360761),changed_title], 0)))])]);

break;
default:
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE2 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","optional-rename","file-rn/optional-rename",2011817094)], 0))),daiquiri.interpreter.interpret(rename_but)])]);

}
})()])]);
})(),frontend$components$conversion$iter__115748(cljs.core.rest(s__115749__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rename_items);
})())])])]));
} else {
return daiquiri.core.create_element("div",null,["\uD83C\uDF89 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","no-action","file-rn/no-action",1042158747)], 0)))]);
}
})()])]:[daiquiri.interpreter.interpret(attrs115607),(function (){var attrs115609 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-page","filename-format","settings-page/filename-format",-500341543)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs115609))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs115609], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs115609))?null:[daiquiri.interpreter.interpret(attrs115609)]));
})(),daiquiri.core.create_element("div",{'className':"rounded-md opacity-70"},[(function (){var attrs115757 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","filename-desc-1","file-rn/filename-desc-1",-872094892)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115757))?daiquiri.interpreter.element_attributes(attrs115757):null),((cljs.core.map_QMARK_(attrs115757))?null:[daiquiri.interpreter.interpret(attrs115757)]));
})(),(function (){var attrs115758 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","filename-desc-2","file-rn/filename-desc-2",449033338)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115758))?daiquiri.interpreter.element_attributes(attrs115758):null),((cljs.core.map_QMARK_(attrs115758))?null:[daiquiri.interpreter.interpret(attrs115758)]));
})(),(function (){var attrs115759 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","filename-desc-3","file-rn/filename-desc-3",-885685789)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115759))?daiquiri.interpreter.element_attributes(attrs115759):null),((cljs.core.map_QMARK_(attrs115759))?null:[daiquiri.interpreter.interpret(attrs115759)]));
})(),(function (){var attrs115760 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","filename-desc-4","file-rn/filename-desc-4",1216444144)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115760))?daiquiri.interpreter.element_attributes(attrs115760):null),((cljs.core.map_QMARK_(attrs115760))?null:[daiquiri.interpreter.interpret(attrs115760)]));
})()]),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_solid_format),new cljs.core.Keyword(null,"legacy","legacy",1434943289)))?frontend.components.conversion.legacy_warning(repo,_STAR_target_format,_STAR_dir_format,_STAR_solid_format):null),daiquiri.core.create_element("div",{'disabled':need_persist_QMARK_,'className':"cp__settings-files-breaking-changed"},[daiquiri.core.create_element("hr",null,null),(function (){var rename_items = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__115763){
var vec__115764 = p__115763;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115764,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115764,(1),null);
var temp__5804__auto__ = frontend.handler.conversion.calc_rename_target(page,new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file),cljs.core.deref(_STAR_dir_format),cljs.core.deref(_STAR_target_format));
if(cljs.core.truth_(temp__5804__auto__)){
var ret = temp__5804__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"file","file",-1269645878),file], null)], 0));
} else {
return null;
}
}),cljs.core.vals(cljs.core.deref(_STAR_pages))));
var sync_QMARK_ = frontend.handler.file_sync.current_graph_sync_on_QMARK_();
var _LT_rename_all = (function (){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_115837){
var state_val_115838 = (state_115837[(1)]);
if((state_val_115838 === (7))){
var inst_115783 = (state_115837[(7)]);
var inst_115784 = (state_115837[(8)]);
var inst_115788 = cljs.core.constantly(null);
var inst_115789 = frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$4(inst_115783,inst_115784,inst_115788,true);
var inst_115790 = cljs.core.async.interop.p__GT_c(inst_115789);
var state_115837__$1 = state_115837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115837__$1,(10),inst_115790);
} else {
if((state_val_115838 === (20))){
var inst_115820 = (state_115837[(2)]);
var state_115837__$1 = state_115837;
var statearr_115839_115956 = state_115837__$1;
(statearr_115839_115956[(2)] = inst_115820);

(statearr_115839_115956[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (1))){
var inst_115771 = cljs.core.seq(rename_items);
var inst_115772 = inst_115771;
var inst_115773 = null;
var inst_115774 = (0);
var inst_115775 = (0);
var state_115837__$1 = (function (){var statearr_115840 = state_115837;
(statearr_115840[(9)] = inst_115772);

(statearr_115840[(10)] = inst_115773);

(statearr_115840[(11)] = inst_115774);

(statearr_115840[(12)] = inst_115775);

return statearr_115840;
})();
var statearr_115841_115957 = state_115837__$1;
(statearr_115841_115957[(2)] = null);

(statearr_115841_115957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (4))){
var inst_115773 = (state_115837[(10)]);
var inst_115775 = (state_115837[(12)]);
var inst_115781 = cljs.core._nth(inst_115773,inst_115775);
var inst_115782 = cljs.core.__destructure_map(inst_115781);
var inst_115783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115782,new cljs.core.Keyword(null,"file","file",-1269645878));
var inst_115784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115782,new cljs.core.Keyword(null,"target","target",253001721));
var inst_115785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115782,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_115786 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_115785,new cljs.core.Keyword(null,"unreachable","unreachable",-1547366286));
var state_115837__$1 = (function (){var statearr_115842 = state_115837;
(statearr_115842[(7)] = inst_115783);

(statearr_115842[(8)] = inst_115784);

return statearr_115842;
})();
if(inst_115786){
var statearr_115843_115958 = state_115837__$1;
(statearr_115843_115958[(1)] = (7));

} else {
var statearr_115844_115959 = state_115837__$1;
(statearr_115844_115959[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (15))){
var inst_115799 = (state_115837[(13)]);
var inst_115809 = cljs.core.first(inst_115799);
var inst_115810 = cljs.core.__destructure_map(inst_115809);
var inst_115811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115810,new cljs.core.Keyword(null,"file","file",-1269645878));
var inst_115812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115810,new cljs.core.Keyword(null,"target","target",253001721));
var inst_115813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_115810,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_115814 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_115813,new cljs.core.Keyword(null,"unreachable","unreachable",-1547366286));
var state_115837__$1 = (function (){var statearr_115845 = state_115837;
(statearr_115845[(14)] = inst_115811);

(statearr_115845[(15)] = inst_115812);

return statearr_115845;
})();
if(inst_115814){
var statearr_115846_115960 = state_115837__$1;
(statearr_115846_115960[(1)] = (17));

} else {
var statearr_115847_115961 = state_115837__$1;
(statearr_115847_115961[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (13))){
var inst_115830 = (state_115837[(2)]);
var state_115837__$1 = state_115837;
var statearr_115848_115962 = state_115837__$1;
(statearr_115848_115962[(2)] = inst_115830);

(statearr_115848_115962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (6))){
var inst_115832 = (state_115837[(2)]);
var state_115837__$1 = state_115837;
var statearr_115849_115963 = state_115837__$1;
(statearr_115849_115963[(2)] = inst_115832);

(statearr_115849_115963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (17))){
var inst_115811 = (state_115837[(14)]);
var inst_115812 = (state_115837[(15)]);
var inst_115816 = cljs.core.constantly(null);
var inst_115817 = frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$4(inst_115811,inst_115812,inst_115816,true);
var inst_115818 = cljs.core.async.interop.p__GT_c(inst_115817);
var state_115837__$1 = state_115837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_115837__$1,(20),inst_115818);
} else {
if((state_val_115838 === (3))){
var inst_115834 = (state_115837[(2)]);
var inst_115835 = frontend.components.conversion._LT_close_modal_on_done(sync_QMARK_,rename_items);
var state_115837__$1 = (function (){var statearr_115850 = state_115837;
(statearr_115850[(16)] = inst_115834);

return statearr_115850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_115837__$1,inst_115835);
} else {
if((state_val_115838 === (12))){
var state_115837__$1 = state_115837;
var statearr_115851_115964 = state_115837__$1;
(statearr_115851_115964[(2)] = null);

(statearr_115851_115964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (2))){
var inst_115775 = (state_115837[(12)]);
var inst_115774 = (state_115837[(11)]);
var inst_115777 = (inst_115775 < inst_115774);
var inst_115778 = inst_115777;
var state_115837__$1 = state_115837;
if(cljs.core.truth_(inst_115778)){
var statearr_115852_115965 = state_115837__$1;
(statearr_115852_115965[(1)] = (4));

} else {
var statearr_115853_115966 = state_115837__$1;
(statearr_115853_115966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (19))){
var inst_115799 = (state_115837[(13)]);
var inst_115823 = (state_115837[(2)]);
var inst_115824 = cljs.core.next(inst_115799);
var inst_115772 = inst_115824;
var inst_115773 = null;
var inst_115774 = (0);
var inst_115775 = (0);
var state_115837__$1 = (function (){var statearr_115857 = state_115837;
(statearr_115857[(17)] = inst_115823);

(statearr_115857[(9)] = inst_115772);

(statearr_115857[(10)] = inst_115773);

(statearr_115857[(11)] = inst_115774);

(statearr_115857[(12)] = inst_115775);

return statearr_115857;
})();
var statearr_115858_115967 = state_115837__$1;
(statearr_115858_115967[(2)] = null);

(statearr_115858_115967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (11))){
var inst_115799 = (state_115837[(13)]);
var inst_115801 = cljs.core.chunked_seq_QMARK_(inst_115799);
var state_115837__$1 = state_115837;
if(inst_115801){
var statearr_115859_115968 = state_115837__$1;
(statearr_115859_115968[(1)] = (14));

} else {
var statearr_115860_115969 = state_115837__$1;
(statearr_115860_115969[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (9))){
var inst_115775 = (state_115837[(12)]);
var inst_115772 = (state_115837[(9)]);
var inst_115773 = (state_115837[(10)]);
var inst_115774 = (state_115837[(11)]);
var inst_115795 = (state_115837[(2)]);
var inst_115796 = (inst_115775 + (1));
var tmp115854 = inst_115774;
var tmp115855 = inst_115773;
var tmp115856 = inst_115772;
var inst_115772__$1 = tmp115856;
var inst_115773__$1 = tmp115855;
var inst_115774__$1 = tmp115854;
var inst_115775__$1 = inst_115796;
var state_115837__$1 = (function (){var statearr_115861 = state_115837;
(statearr_115861[(18)] = inst_115795);

(statearr_115861[(9)] = inst_115772__$1);

(statearr_115861[(10)] = inst_115773__$1);

(statearr_115861[(11)] = inst_115774__$1);

(statearr_115861[(12)] = inst_115775__$1);

return statearr_115861;
})();
var statearr_115862_115970 = state_115837__$1;
(statearr_115862_115970[(2)] = null);

(statearr_115862_115970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (5))){
var inst_115772 = (state_115837[(9)]);
var inst_115799 = (state_115837[(13)]);
var inst_115799__$1 = cljs.core.seq(inst_115772);
var state_115837__$1 = (function (){var statearr_115863 = state_115837;
(statearr_115863[(13)] = inst_115799__$1);

return statearr_115863;
})();
if(inst_115799__$1){
var statearr_115864_115971 = state_115837__$1;
(statearr_115864_115971[(1)] = (11));

} else {
var statearr_115865_115972 = state_115837__$1;
(statearr_115865_115972[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (14))){
var inst_115799 = (state_115837[(13)]);
var inst_115803 = cljs.core.chunk_first(inst_115799);
var inst_115804 = cljs.core.chunk_rest(inst_115799);
var inst_115805 = cljs.core.count(inst_115803);
var inst_115772 = inst_115804;
var inst_115773 = inst_115803;
var inst_115774 = inst_115805;
var inst_115775 = (0);
var state_115837__$1 = (function (){var statearr_115866 = state_115837;
(statearr_115866[(9)] = inst_115772);

(statearr_115866[(10)] = inst_115773);

(statearr_115866[(11)] = inst_115774);

(statearr_115866[(12)] = inst_115775);

return statearr_115866;
})();
var statearr_115867_115973 = state_115837__$1;
(statearr_115867_115973[(2)] = null);

(statearr_115867_115973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (16))){
var inst_115827 = (state_115837[(2)]);
var state_115837__$1 = state_115837;
var statearr_115868_115974 = state_115837__$1;
(statearr_115868_115974[(2)] = inst_115827);

(statearr_115868_115974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (10))){
var inst_115792 = (state_115837[(2)]);
var state_115837__$1 = state_115837;
var statearr_115869_115975 = state_115837__$1;
(statearr_115869_115975[(2)] = inst_115792);

(statearr_115869_115975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (18))){
var state_115837__$1 = state_115837;
var statearr_115870_115976 = state_115837__$1;
(statearr_115870_115976[(2)] = null);

(statearr_115870_115976[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115838 === (8))){
var state_115837__$1 = state_115837;
var statearr_115871_115977 = state_115837__$1;
(statearr_115871_115977[(2)] = null);

(statearr_115871_115977[(1)] = (9));


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
}
}
}
});
return (function() {
var frontend$components$conversion$state_machine__34379__auto__ = null;
var frontend$components$conversion$state_machine__34379__auto____0 = (function (){
var statearr_115872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_115872[(0)] = frontend$components$conversion$state_machine__34379__auto__);

(statearr_115872[(1)] = (1));

return statearr_115872;
});
var frontend$components$conversion$state_machine__34379__auto____1 = (function (state_115837){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_115837);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e115873){var ex__34382__auto__ = e115873;
var statearr_115874_115978 = state_115837;
(statearr_115874_115978[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_115837[(4)]))){
var statearr_115875_115979 = state_115837;
(statearr_115875_115979[(1)] = cljs.core.first((state_115837[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115980 = state_115837;
state_115837 = G__115980;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$conversion$state_machine__34379__auto__ = function(state_115837){
switch(arguments.length){
case 0:
return frontend$components$conversion$state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$conversion$state_machine__34379__auto____1.call(this,state_115837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$conversion$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$conversion$state_machine__34379__auto____0;
frontend$components$conversion$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$conversion$state_machine__34379__auto____1;
return frontend$components$conversion$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_115876 = f__34484__auto__();
(statearr_115876[(6)] = c__34483__auto__);

return statearr_115876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
if(cljs.core.truth_(cljs.core.not_empty(rename_items))){
var attrs115877 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_solid_format),new cljs.core.Keyword(null,"triple-lowbar","triple-lowbar",21902099))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_dir_format),new cljs.core.Keyword(null,"legacy","legacy",1434943289)))))?frontend.ui.admonition(new cljs.core.Keyword(null,"tip","tip",1221810860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","need-action","file-rn/need-action",-1610232477)], 0))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","need-action","file-rn/need-action",-1610232477)], 0))], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs115877))?daiquiri.interpreter.element_attributes(attrs115877):null),((cljs.core.map_QMARK_(attrs115877))?[(function (){var attrs115878 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","all-action","file-rn/all-action",215714973),cljs.core.count(rename_items)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),_LT_rename_all,new cljs.core.Keyword(null,"class","class",-2030961996),"text-md p-2 mr-1"], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115878))?daiquiri.interpreter.element_attributes(attrs115878):null),((cljs.core.map_QMARK_(attrs115878))?[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions","file-rn/or-select-actions",406926714)], 0))),daiquiri.core.create_element("a",{'onClick':frontend.components.conversion._LT_close_modal_on_done},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","close-panel","file-rn/close-panel",1260858328)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions-2","file-rn/or-select-actions-2",1886314162)], 0)))]:[daiquiri.interpreter.interpret(attrs115878),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions","file-rn/or-select-actions",406926714)], 0))),daiquiri.core.create_element("a",{'onClick':frontend.components.conversion._LT_close_modal_on_done},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","close-panel","file-rn/close-panel",1260858328)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions-2","file-rn/or-select-actions-2",1886314162)], 0)))]));
})(),(function (){var attrs115879 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","legend","file-rn/legend",1909410426)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115879))?daiquiri.interpreter.element_attributes(attrs115879):null),((cljs.core.map_QMARK_(attrs115879))?null:[daiquiri.interpreter.interpret(attrs115879)]));
})(),daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$conversion$iter__115882(s__115883){
return (new cljs.core.LazySeq(null,(function (){
var s__115883__$1 = s__115883;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115883__$1);
if(temp__5804__auto__){
var s__115883__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115883__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115883__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115885 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115884 = (0);
while(true){
if((i__115884 < size__5519__auto__)){
var map__115886 = cljs.core._nth(c__5518__auto__,i__115884);
var map__115886__$1 = cljs.core.__destructure_map(map__115886);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115886__$1,new cljs.core.Keyword(null,"page","page",849072397));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115886__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115886__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115886__$1,new cljs.core.Keyword(null,"target","target",253001721));
var old_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115886__$1,new cljs.core.Keyword(null,"old-title","old-title",-85478212));
var changed_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115886__$1,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918));
cljs.core.chunk_append(b__115885,(function (){var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
var src_file_name = logseq.graph_parser.util.path__GT_file_name(path);
var tgt_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.path__GT_file_ext(path))].join('');
var rm_item_fn = ((function (i__115884,path,src_file_name,tgt_file_name,map__115886,map__115886__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115885,s__115883__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_pages,cljs.core.dissoc,path);
});})(i__115884,path,src_file_name,tgt_file_name,map__115886,map__115886__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115885,s__115883__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_fn = ((function (i__115884,path,src_file_name,tgt_file_name,rm_item_fn,map__115886,map__115886__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115885,s__115883__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3(file,target,rm_item_fn);
});})(i__115884,path,src_file_name,tgt_file_name,rm_item_fn,map__115886,map__115886__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115885,s__115883__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_but = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rename_fn,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","apply-rename","file-rn/apply-rename",-135786625)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","rename","file-rn/rename",215853120),src_file_name,tgt_file_name], 0))], null)], null);
return daiquiri.core.create_element("tr",{'key':new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)},[daiquiri.core.create_element("td",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDCC4 ",daiquiri.interpreter.interpret(old_title)])]),(function (){var G__115887 = status;
var G__115887__$1 = (((G__115887 instanceof cljs.core.Keyword))?G__115887.fqn:null);
switch (G__115887__$1) {
case "breaking":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE1 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","suggest-rename","file-rn/suggest-rename",-1483776573)], 0))),daiquiri.interpreter.interpret(rename_but)]),(function (){var attrs115888 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","otherwise-breaking","file-rn/otherwise-breaking",-1687066520)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115888))?daiquiri.interpreter.element_attributes(attrs115888):null),((cljs.core.map_QMARK_(attrs115888))?[" \"",daiquiri.interpreter.interpret(changed_title),"\""]:[daiquiri.interpreter.interpret(attrs115888)," \"",daiquiri.interpreter.interpret(changed_title),"\""]));
})()]);

break;
case "unreachable":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDD34 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","unreachable-title","file-rn/unreachable-title",1798360761),changed_title], 0)))])]);

break;
default:
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE2 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","optional-rename","file-rn/optional-rename",2011817094)], 0))),daiquiri.interpreter.interpret(rename_but)])]);

}
})()])]);
})());

var G__115982 = (i__115884 + (1));
i__115884 = G__115982;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115885),frontend$components$conversion$iter__115882(cljs.core.chunk_rest(s__115883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115885),null);
}
} else {
var map__115889 = cljs.core.first(s__115883__$2);
var map__115889__$1 = cljs.core.__destructure_map(map__115889);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115889__$1,new cljs.core.Keyword(null,"page","page",849072397));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115889__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115889__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115889__$1,new cljs.core.Keyword(null,"target","target",253001721));
var old_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115889__$1,new cljs.core.Keyword(null,"old-title","old-title",-85478212));
var changed_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115889__$1,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918));
return cljs.core.cons((function (){var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
var src_file_name = logseq.graph_parser.util.path__GT_file_name(path);
var tgt_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.path__GT_file_ext(path))].join('');
var rm_item_fn = ((function (path,src_file_name,tgt_file_name,map__115889,map__115889__$1,page,file,status,target,old_title,changed_title,s__115883__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_pages,cljs.core.dissoc,path);
});})(path,src_file_name,tgt_file_name,map__115889,map__115889__$1,page,file,status,target,old_title,changed_title,s__115883__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_fn = ((function (path,src_file_name,tgt_file_name,rm_item_fn,map__115889,map__115889__$1,page,file,status,target,old_title,changed_title,s__115883__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3(file,target,rm_item_fn);
});})(path,src_file_name,tgt_file_name,rm_item_fn,map__115889,map__115889__$1,page,file,status,target,old_title,changed_title,s__115883__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_but = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rename_fn,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","apply-rename","file-rn/apply-rename",-135786625)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","rename","file-rn/rename",215853120),src_file_name,tgt_file_name], 0))], null)], null);
return daiquiri.core.create_element("tr",{'key':new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)},[daiquiri.core.create_element("td",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDCC4 ",daiquiri.interpreter.interpret(old_title)])]),(function (){var G__115890 = status;
var G__115890__$1 = (((G__115890 instanceof cljs.core.Keyword))?G__115890.fqn:null);
switch (G__115890__$1) {
case "breaking":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE1 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","suggest-rename","file-rn/suggest-rename",-1483776573)], 0))),daiquiri.interpreter.interpret(rename_but)]),(function (){var attrs115888 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","otherwise-breaking","file-rn/otherwise-breaking",-1687066520)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115888))?daiquiri.interpreter.element_attributes(attrs115888):null),((cljs.core.map_QMARK_(attrs115888))?[" \"",daiquiri.interpreter.interpret(changed_title),"\""]:[daiquiri.interpreter.interpret(attrs115888)," \"",daiquiri.interpreter.interpret(changed_title),"\""]));
})()]);

break;
case "unreachable":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDD34 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","unreachable-title","file-rn/unreachable-title",1798360761),changed_title], 0)))])]);

break;
default:
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE2 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","optional-rename","file-rn/optional-rename",2011817094)], 0))),daiquiri.interpreter.interpret(rename_but)])]);

}
})()])]);
})(),frontend$components$conversion$iter__115882(cljs.core.rest(s__115883__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rename_items);
})())])])]:[daiquiri.interpreter.interpret(attrs115877),(function (){var attrs115880 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","all-action","file-rn/all-action",215714973),cljs.core.count(rename_items)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),_LT_rename_all,new cljs.core.Keyword(null,"class","class",-2030961996),"text-md p-2 mr-1"], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115880))?daiquiri.interpreter.element_attributes(attrs115880):null),((cljs.core.map_QMARK_(attrs115880))?[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions","file-rn/or-select-actions",406926714)], 0))),daiquiri.core.create_element("a",{'onClick':frontend.components.conversion._LT_close_modal_on_done},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","close-panel","file-rn/close-panel",1260858328)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions-2","file-rn/or-select-actions-2",1886314162)], 0)))]:[daiquiri.interpreter.interpret(attrs115880),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions","file-rn/or-select-actions",406926714)], 0))),daiquiri.core.create_element("a",{'onClick':frontend.components.conversion._LT_close_modal_on_done},[daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","close-panel","file-rn/close-panel",1260858328)], 0)))]),daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","or-select-actions-2","file-rn/or-select-actions-2",1886314162)], 0)))]));
})(),(function (){var attrs115881 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","legend","file-rn/legend",1909410426)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115881))?daiquiri.interpreter.element_attributes(attrs115881):null),((cljs.core.map_QMARK_(attrs115881))?null:[daiquiri.interpreter.interpret(attrs115881)]));
})(),daiquiri.core.create_element("table",{'className':"table-auto"},[daiquiri.core.create_element("tbody",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$conversion$iter__115891(s__115892){
return (new cljs.core.LazySeq(null,(function (){
var s__115892__$1 = s__115892;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115892__$1);
if(temp__5804__auto__){
var s__115892__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115892__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115892__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115894 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115893 = (0);
while(true){
if((i__115893 < size__5519__auto__)){
var map__115895 = cljs.core._nth(c__5518__auto__,i__115893);
var map__115895__$1 = cljs.core.__destructure_map(map__115895);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115895__$1,new cljs.core.Keyword(null,"page","page",849072397));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115895__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115895__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115895__$1,new cljs.core.Keyword(null,"target","target",253001721));
var old_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115895__$1,new cljs.core.Keyword(null,"old-title","old-title",-85478212));
var changed_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115895__$1,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918));
cljs.core.chunk_append(b__115894,(function (){var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
var src_file_name = logseq.graph_parser.util.path__GT_file_name(path);
var tgt_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.path__GT_file_ext(path))].join('');
var rm_item_fn = ((function (i__115893,path,src_file_name,tgt_file_name,map__115895,map__115895__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115894,s__115892__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_pages,cljs.core.dissoc,path);
});})(i__115893,path,src_file_name,tgt_file_name,map__115895,map__115895__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115894,s__115892__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_fn = ((function (i__115893,path,src_file_name,tgt_file_name,rm_item_fn,map__115895,map__115895__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115894,s__115892__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3(file,target,rm_item_fn);
});})(i__115893,path,src_file_name,tgt_file_name,rm_item_fn,map__115895,map__115895__$1,page,file,status,target,old_title,changed_title,c__5518__auto__,size__5519__auto__,b__115894,s__115892__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_but = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rename_fn,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","apply-rename","file-rn/apply-rename",-135786625)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","rename","file-rn/rename",215853120),src_file_name,tgt_file_name], 0))], null)], null);
return daiquiri.core.create_element("tr",{'key':new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)},[daiquiri.core.create_element("td",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDCC4 ",daiquiri.interpreter.interpret(old_title)])]),(function (){var G__115896 = status;
var G__115896__$1 = (((G__115896 instanceof cljs.core.Keyword))?G__115896.fqn:null);
switch (G__115896__$1) {
case "breaking":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE1 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","suggest-rename","file-rn/suggest-rename",-1483776573)], 0))),daiquiri.interpreter.interpret(rename_but)]),(function (){var attrs115897 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","otherwise-breaking","file-rn/otherwise-breaking",-1687066520)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115897))?daiquiri.interpreter.element_attributes(attrs115897):null),((cljs.core.map_QMARK_(attrs115897))?[" \"",daiquiri.interpreter.interpret(changed_title),"\""]:[daiquiri.interpreter.interpret(attrs115897)," \"",daiquiri.interpreter.interpret(changed_title),"\""]));
})()]);

break;
case "unreachable":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDD34 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","unreachable-title","file-rn/unreachable-title",1798360761),changed_title], 0)))])]);

break;
default:
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE2 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","optional-rename","file-rn/optional-rename",2011817094)], 0))),daiquiri.interpreter.interpret(rename_but)])]);

}
})()])]);
})());

var G__115985 = (i__115893 + (1));
i__115893 = G__115985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115894),frontend$components$conversion$iter__115891(cljs.core.chunk_rest(s__115892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115894),null);
}
} else {
var map__115898 = cljs.core.first(s__115892__$2);
var map__115898__$1 = cljs.core.__destructure_map(map__115898);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115898__$1,new cljs.core.Keyword(null,"page","page",849072397));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115898__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115898__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115898__$1,new cljs.core.Keyword(null,"target","target",253001721));
var old_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115898__$1,new cljs.core.Keyword(null,"old-title","old-title",-85478212));
var changed_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115898__$1,new cljs.core.Keyword(null,"changed-title","changed-title",-1479218918));
return cljs.core.cons((function (){var path = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
var src_file_name = logseq.graph_parser.util.path__GT_file_name(path);
var tgt_file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.path__GT_file_ext(path))].join('');
var rm_item_fn = ((function (path,src_file_name,tgt_file_name,map__115898,map__115898__$1,page,file,status,target,old_title,changed_title,s__115892__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_pages,cljs.core.dissoc,path);
});})(path,src_file_name,tgt_file_name,map__115898,map__115898__$1,page,file,status,target,old_title,changed_title,s__115892__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_fn = ((function (path,src_file_name,tgt_file_name,rm_item_fn,map__115898,map__115898__$1,page,file,status,target,old_title,changed_title,s__115892__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_){
return (function (){
return frontend.handler.page.rename_file_BANG_.cljs$core$IFn$_invoke$arity$3(file,target,rm_item_fn);
});})(path,src_file_name,tgt_file_name,rm_item_fn,map__115898,map__115898__$1,page,file,status,target,old_title,changed_title,s__115892__$2,temp__5804__auto__,attrs115877,rename_items,sync_QMARK_,_LT_rename_all,attrs115607,repo,_STAR_dir_format,_STAR_target_format,_STAR_solid_format,_STAR_pages,need_persist_QMARK_,_STAR_switch_disabled_QMARK_))
;
var rename_but = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),rename_fn,new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","apply-rename","file-rn/apply-rename",-135786625)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","rename","file-rn/rename",215853120),src_file_name,tgt_file_name], 0))], null)], null);
return daiquiri.core.create_element("tr",{'key':new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page)},[daiquiri.core.create_element("td",null,[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDCC4 ",daiquiri.interpreter.interpret(old_title)])]),(function (){var G__115899 = status;
var G__115899__$1 = (((G__115899 instanceof cljs.core.Keyword))?G__115899.fqn:null);
switch (G__115899__$1) {
case "breaking":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE1 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","suggest-rename","file-rn/suggest-rename",-1483776573)], 0))),daiquiri.interpreter.interpret(rename_but)]),(function (){var attrs115897 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","otherwise-breaking","file-rn/otherwise-breaking",-1687066520)], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs115897))?daiquiri.interpreter.element_attributes(attrs115897):null),((cljs.core.map_QMARK_(attrs115897))?[" \"",daiquiri.interpreter.interpret(changed_title),"\""]:[daiquiri.interpreter.interpret(attrs115897)," \"",daiquiri.interpreter.interpret(changed_title),"\""]));
})()]);

break;
case "unreachable":
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDD34 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","unreachable-title","file-rn/unreachable-title",1798360761),changed_title], 0)))])]);

break;
default:
return daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,["\uD83D\uDFE2 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","optional-rename","file-rn/optional-rename",2011817094)], 0))),daiquiri.interpreter.interpret(rename_but)])]);

}
})()])]);
})(),frontend$components$conversion$iter__115891(cljs.core.rest(s__115892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(rename_items);
})())])])]));
} else {
return daiquiri.core.create_element("div",null,["\uD83C\uDF89 ",daiquiri.interpreter.interpret(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-rn","no-action","file-rn/no-action",1042158747)], 0)))]);
}
})()])]));
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.conversion","pages","frontend.components.conversion/pages",190691005)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.conversion","dir-format","frontend.components.conversion/dir-format",-5040466)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.conversion","target-format","frontend.components.conversion/target-format",1519811834)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.conversion","solid-format","frontend.components.conversion/solid-format",1019749371)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.conversion","switch-disabled?","frontend.components.conversion/switch-disabled?",-740043274))], null),"frontend.components.conversion/files-breaking-changed");

//# sourceMappingURL=frontend.components.conversion.js.map
