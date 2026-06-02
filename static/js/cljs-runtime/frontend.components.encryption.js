goog.provide('frontend.components.encryption');
frontend.components.encryption.show_password_cp = rum.core.lazy_build(rum.core.build_defc,(function (_STAR_show_password_QMARK_){
return daiquiri.core.create_element("div",{'className':"flex flex-row items-center"},[daiquiri.core.create_element("label",{'className':"px-1",'htmlFor':"show-password"},[daiquiri.interpreter.interpret(frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(_STAR_show_password_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(_STAR_show_password_QMARK_,frontend.util.echecked_QMARK_(e));
}),new cljs.core.Keyword(null,"id","id",-1388402092),"show-password"], null))),daiquiri.core.create_element("span",{'className':"text-sm ml-1 opacity-80 select-none px-1"},["Show password"])])]);
}),null,"frontend.components.encryption/show-password-cp");
frontend.components.encryption.input_password_inner = rum.core.lazy_build(rum.core.build_defcs,(function (state,repo_url,close_fn,p__117384){
var map__117385 = p__117384;
var map__117385__$1 = cljs.core.__destructure_map(map__117385);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117385__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117385__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117385__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
var init_graph_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117385__$1,new cljs.core.Keyword(null,"init-graph-keys","init-graph-keys",-472669077));
var after_input_password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117385__$1,new cljs.core.Keyword(null,"after-input-password","after-input-password",72975665));
var _STAR_password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.encryption","password","frontend.components.encryption/password",778875014));
var _STAR_pw_confirm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.encryption","pw-confirm","frontend.components.encryption/pw-confirm",1857232954));
var _STAR_pw_confirm_focused_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.encryption","pw-confirm-focused?","frontend.components.encryption/pw-confirm-focused?",1772685568));
var _STAR_show_password_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword("frontend.components.encryption","show-password?","frontend.components.encryption/show-password?",424518490));
var _STAR_input_ref_0 = rum.core.create_ref();
var _STAR_input_ref_1 = rum.core.create_ref();
var remote_pw_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"input-pwd-remote","input-pwd-remote",-1249532078));
var loading_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword(null,"set-graph-password","set-graph-password",1225108135)], null));
var pw_strength = (cljs.core.truth_((function (){var and__5041__auto__ = init_graph_keys;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_password))));
} else {
return and__5041__auto__;
}
})())?frontend.util.check_password_strength(cljs.core.deref(_STAR_password)):null);
var can_submit_QMARK_ = (function (){
if(cljs.core.truth_(init_graph_keys)){
return (((cljs.core.count(cljs.core.deref(_STAR_password)) >= (6))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pw_strength) >= (1))));
} else {
return true;
}
});
var set_remote_graph_pwd_result = frontend.state.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","set-remote-graph-password-result","file-sync/set-remote-graph-password-result",-1161271382)], null));
var submit_handler = (function (){
var value = cljs.core.deref(_STAR_password);
if(clojure.string.blank_QMARK_(value)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = init_graph_keys;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_password),cljs.core.deref(_STAR_pw_confirm));
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("The passwords are not matched.",new cljs.core.Keyword(null,"error","error",-978969032));
} else {
var G__117386 = type;
var G__117386__$1 = (((G__117386 instanceof cljs.core.Keyword))?G__117386.fqn:null);
switch (G__117386__$1) {
case "create-pwd-remote":
case "input-pwd-remote":
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword(null,"set-graph-password","set-graph-password",1225108135)], null),true);

frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","set-remote-graph-password-result","file-sync/set-remote-graph-password-result",-1161271382)], null),cljs.core.PersistentArrayMap.EMPTY);

var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_117411){
var state_val_117412 = (state_117411[(1)]);
if((state_val_117412 === (7))){
var state_117411__$1 = state_117411;
var statearr_117413_117494 = state_117411__$1;
(statearr_117413_117494[(2)] = null);

(statearr_117413_117494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117412 === (1))){
var inst_117387 = cljs.core.deref(_STAR_password);
var inst_117388 = frontend.fs.sync.encrypt_PLUS_persist_pwd_BANG_(inst_117387,GraphUUID);
var state_117411__$1 = state_117411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117411__$1,(2),inst_117388);
} else {
if((state_val_117412 === (4))){
var inst_117395 = cljs.core.fn_QMARK_(after_input_password);
var state_117411__$1 = state_117411;
if(inst_117395){
var statearr_117414_117495 = state_117411__$1;
(statearr_117414_117495[(1)] = (6));

} else {
var statearr_117415_117496 = state_117411__$1;
(statearr_117415_117496[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117412 === (6))){
var inst_117397 = cljs.core.deref(_STAR_password);
var inst_117398 = (after_input_password.cljs$core$IFn$_invoke$arity$1 ? after_input_password.cljs$core$IFn$_invoke$arity$1(inst_117397) : after_input_password.call(null,inst_117397));
var state_117411__$1 = (function (){var statearr_117416 = state_117411;
(statearr_117416[(7)] = inst_117398);

return statearr_117416;
})();
if(cljs.core.truth_(init_graph_keys)){
var statearr_117417_117497 = state_117411__$1;
(statearr_117417_117497[(1)] = (9));

} else {
var statearr_117418_117498 = state_117411__$1;
(statearr_117418_117498[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117412 === (3))){
var inst_117390 = (state_117411[(8)]);
var inst_117393 = console.error(inst_117390);
var state_117411__$1 = state_117411;
var statearr_117419_117499 = state_117411__$1;
(statearr_117419_117499[(2)] = inst_117393);

(statearr_117419_117499[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117412 === (2))){
var inst_117390 = (state_117411[(8)]);
var inst_117390__$1 = (state_117411[(2)]);
var inst_117391 = (inst_117390__$1 instanceof Error);
var state_117411__$1 = (function (){var statearr_117420 = state_117411;
(statearr_117420[(8)] = inst_117390__$1);

return statearr_117420;
})();
if(cljs.core.truth_(inst_117391)){
var statearr_117421_117500 = state_117411__$1;
(statearr_117421_117500[(1)] = (3));

} else {
var statearr_117422_117501 = state_117411__$1;
(statearr_117422_117501[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117412 === (11))){
var inst_117404 = (state_117411[(2)]);
var state_117411__$1 = state_117411;
var statearr_117423_117502 = state_117411__$1;
(statearr_117423_117502[(2)] = inst_117404);

(statearr_117423_117502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117412 === (9))){
var inst_117390 = (state_117411[(8)]);
var inst_117400 = (function (){var persist_r = inst_117390;
return (function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","maybe-onboarding-show","file-sync/maybe-onboarding-show",1562674517),new cljs.core.Keyword(null,"sync-learn","sync-learn",-93764067)], null));
});
})();
var inst_117401 = setTimeout(inst_117400,(10000));
var state_117411__$1 = state_117411;
var statearr_117424_117503 = state_117411__$1;
(statearr_117424_117503[(2)] = inst_117401);

(statearr_117424_117503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117412 === (5))){
var inst_117409 = (state_117411[(2)]);
var state_117411__$1 = state_117411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117411__$1,inst_117409);
} else {
if((state_val_117412 === (10))){
var state_117411__$1 = state_117411;
var statearr_117425_117504 = state_117411__$1;
(statearr_117425_117504[(2)] = null);

(statearr_117425_117504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117412 === (8))){
var inst_117407 = (state_117411[(2)]);
var state_117411__$1 = state_117411;
var statearr_117426_117505 = state_117411__$1;
(statearr_117426_117505[(2)] = inst_117407);

(statearr_117426_117505[(1)] = (5));


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
});
return (function() {
var frontend$components$encryption$state_machine__34379__auto__ = null;
var frontend$components$encryption$state_machine__34379__auto____0 = (function (){
var statearr_117427 = [null,null,null,null,null,null,null,null,null];
(statearr_117427[(0)] = frontend$components$encryption$state_machine__34379__auto__);

(statearr_117427[(1)] = (1));

return statearr_117427;
});
var frontend$components$encryption$state_machine__34379__auto____1 = (function (state_117411){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_117411);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e117428){var ex__34382__auto__ = e117428;
var statearr_117429_117506 = state_117411;
(statearr_117429_117506[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_117411[(4)]))){
var statearr_117430_117507 = state_117411;
(statearr_117430_117507[(1)] = cljs.core.first((state_117411[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__117508 = state_117411;
state_117411 = G__117508;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$encryption$state_machine__34379__auto__ = function(state_117411){
switch(arguments.length){
case 0:
return frontend$components$encryption$state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$encryption$state_machine__34379__auto____1.call(this,state_117411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$encryption$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$encryption$state_machine__34379__auto____0;
frontend$components$encryption$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$encryption$state_machine__34379__auto____1;
return frontend$components$encryption$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_117431 = f__34484__auto__();
(statearr_117431[(6)] = c__34483__auto__);

return statearr_117431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__117386__$1)].join('')));

}

}
}
});
var cancel_handler = (function (){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","set-remote-graph-password-result","file-sync/set-remote-graph-password-result",-1161271382)], null),cljs.core.PersistentArrayMap.EMPTY);

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
});
var enter_handler = (function (e){
var temp__5804__auto__ = (function (){var and__5041__auto__ = e;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),e.which);
if(and__5041__auto____$1){
return e.target;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var input = temp__5804__auto__;
if(clojure.string.blank_QMARK_(input.value)){
return null;
} else {
var input_0_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_lower_case(input.placeholder),"password");
if(cljs.core.truth_(init_graph_keys)){
if(input_0_QMARK_){
return rum.core.deref(_STAR_input_ref_1).select();
} else {
return submit_handler();
}
} else {
return submit_handler();
}
}
} else {
return null;
}
});
return daiquiri.core.create_element("div",{'className':"encryption-password max-w-2xl -mb-2"},[daiquiri.core.create_element("div",{'className':"cp__file-sync-related-normal-modal"},[daiquiri.core.create_element("div",{'className':"flex justify-center pb-4"},[(function (){var attrs117433 = frontend.ui.icon("lock-access",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(28)], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117433))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-wrap"], null)], null),attrs117433], 0))):{'className':"icon-wrap"}),((cljs.core.map_QMARK_(attrs117433))?null:[daiquiri.interpreter.interpret(attrs117433)]));
})()]),daiquiri.core.create_element("div",{'className':"mt-3 text-center sm:mt-0 sm:text-left"},[daiquiri.core.create_element("h1",{'id':"modal-headline",'className':"text-2xl font-bold text-center"},[(cljs.core.truth_(init_graph_keys)?((remote_pw_QMARK_)?"Secure graph!":"Encrypt graph"):((remote_pw_QMARK_)?"Unlock graph!":"Decrypt graph"))])]),((((remote_pw_QMARK_) && (cljs.core.not(init_graph_keys))))?daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'className':"folder-tip flex flex-col items-center"},[daiquiri.core.create_element("h3",null,[(function (){var attrs117436 = frontend.ui.icon("cloud-lock",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117436))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","space-x-2","leading-none","pb-1"], null)], null),attrs117436], 0))):{'className':"flex space-x-2 leading-none pb-1"}),((cljs.core.map_QMARK_(attrs117436))?[(function (){var attrs117437 = GraphName;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117437))?daiquiri.interpreter.element_attributes(attrs117437):null),((cljs.core.map_QMARK_(attrs117437))?null:[daiquiri.interpreter.interpret(attrs117437)]));
})(),(function (){var attrs117438 = frontend.ui.icon("arrow-right");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117438))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale-75"], null)], null),attrs117438], 0))):{'className':"scale-75"}),((cljs.core.map_QMARK_(attrs117438))?null:[daiquiri.interpreter.interpret(attrs117438)]));
})(),(function (){var attrs117439 = frontend.ui.icon("folder");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117439))?daiquiri.interpreter.element_attributes(attrs117439):null),((cljs.core.map_QMARK_(attrs117439))?null:[daiquiri.interpreter.interpret(attrs117439)]));
})()]:[daiquiri.interpreter.interpret(attrs117436),(function (){var attrs117440 = GraphName;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117440))?daiquiri.interpreter.element_attributes(attrs117440):null),((cljs.core.map_QMARK_(attrs117440))?null:[daiquiri.interpreter.interpret(attrs117440)]));
})(),(function (){var attrs117441 = frontend.ui.icon("arrow-right");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117441))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scale-75"], null)], null),attrs117441], 0))):{'className':"scale-75"}),((cljs.core.map_QMARK_(attrs117441))?null:[daiquiri.interpreter.interpret(attrs117441)]));
})(),(function (){var attrs117442 = frontend.ui.icon("folder");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117442))?daiquiri.interpreter.element_attributes(attrs117442):null),((cljs.core.map_QMARK_(attrs117442))?null:[daiquiri.interpreter.interpret(attrs117442)]));
})()]));
})()]),(function (){var attrs117435 = frontend.config.get_string_repo_dir(repo_url);
return daiquiri.core.create_element("h4",((cljs.core.map_QMARK_(attrs117435))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-2","-mb-1","5"], null)], null),attrs117435], 0))):{'className':"px-2 -mb-1 5"}),((cljs.core.map_QMARK_(attrs117435))?null:[daiquiri.interpreter.interpret(attrs117435)]));
})()]),(function (){var attrs117434 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(set_remote_graph_pwd_result);
if(cljs.core.truth_(temp__5802__auto__)){
var display_str = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.pr-1.text-error","span.flex.pr-1.text-error",1008896001),frontend.ui.icon("alert-circle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-1"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-error","span.text-error",121693154),display_str], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.pr-1","span.flex.pr-1",1266166703),frontend.ui.icon("bulb",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-1"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Please enter the password for this graph to continue syncing."], null)], null);
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117434))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-hints","text-sm","py-2","px-3","rounded","mb-2","mt-2","flex","items-center"], null)], null),attrs117434], 0))):{'className':"input-hints text-sm py-2 px-3 rounded mb-2 mt-2 flex items-center"}),((cljs.core.map_QMARK_(attrs117434))?null:[daiquiri.interpreter.interpret(attrs117434)]));
})()]):null),(cljs.core.truth_((function (){var and__5041__auto__ = remote_pw_QMARK_;
if(and__5041__auto__){
return init_graph_keys;
} else {
return and__5041__auto__;
}
})())?(function (){var pattern_ok_QMARK_ = (function (){
return (cljs.core.count(cljs.core.deref(_STAR_password)) >= (6));
});
return daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("h2",{'className':"text-center opacity-70 text-sm py-2"},["Each graph you want to synchronize via Logseq needs its own password for end-to-end encryption."]),(function (){var attrs117445 = (((((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_password))))) || ((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_pw_confirm)))))))?(((((!(pattern_ok_QMARK_()))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_password),cljs.core.deref(_STAR_pw_confirm)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.pr-1.text-error","span.flex.pr-1.text-error",1008896001),frontend.ui.icon("alert-circle",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-1"], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.pr-1.text-success","span.flex.pr-1.text-success",1500854956),frontend.ui.icon("circle-check",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-1"], null))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.pr-1","span.flex.pr-1",1266166703),frontend.ui.icon("bulb",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-md mr-1"], null))], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117445))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-hints","text-sm","py-2","px-3","rounded","mb-3","mt-4","flex","items-center"], null)], null),attrs117445], 0))):{'className':"input-hints text-sm py-2 px-3 rounded mb-3 mt-4 flex items-center"}),((cljs.core.map_QMARK_(attrs117445))?[(((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_password)))))?(((!(pattern_ok_QMARK_())))?daiquiri.core.create_element("span",null,["Password can't be less than 6 characters"]):(((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_pw_confirm)))))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_pw_confirm),cljs.core.deref(_STAR_password)))?daiquiri.core.create_element("span",null,["Password fields are not matching!"]):daiquiri.core.create_element("span",null,["Password fields are matching!"])):daiquiri.core.create_element("span",null,["Enter your chosen password again!"]))):daiquiri.core.create_element("span",null,["Choose a strong and hard to guess password!"]))]:[daiquiri.interpreter.interpret(attrs117445),(((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_password)))))?(((!(pattern_ok_QMARK_())))?daiquiri.core.create_element("span",null,["Password can't be less than 6 characters"]):(((!(clojure.string.blank_QMARK_(cljs.core.deref(_STAR_pw_confirm)))))?((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_pw_confirm),cljs.core.deref(_STAR_password)))?daiquiri.core.create_element("span",null,["Password fields are not matching!"]):daiquiri.core.create_element("span",null,["Password fields are matching!"])):daiquiri.core.create_element("span",null,["Enter your chosen password again!"]))):daiquiri.core.create_element("span",null,["Choose a strong and hard to guess password!"]))]));
})(),((clojure.string.blank_QMARK_(cljs.core.deref(_STAR_password)))?null:daiquiri.core.create_element(daiquiri.core.fragment,null,[(function (){var attrs117474 = (function (){var included_set = cljs.core.set(new cljs.core.Keyword(null,"contains","contains",676899812).cljs$core$IFn$_invoke$arity$1(pw_strength));
var iter__5520__auto__ = (function frontend$components$encryption$iter__117475(s__117476){
return (new cljs.core.LazySeq(null,(function (){
var s__117476__$1 = s__117476;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117476__$1);
if(temp__5804__auto__){
var s__117476__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117476__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117476__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117478 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117477 = (0);
while(true){
if((i__117477 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__117477);
var included_QMARK_ = cljs.core.contains_QMARK_(included_set,i);
cljs.core.chunk_append(b__117478,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.strength-item","span.strength-item",1188975224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),((included_QMARK_)?"included":null)], null),frontend.ui.icon(((included_QMARK_)?"check":"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-1"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.capitalize","span.capitalize",-2115789042),i], null)], null));

var G__117509 = (i__117477 + (1));
i__117477 = G__117509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117478),frontend$components$encryption$iter__117475(cljs.core.chunk_rest(s__117476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117478),null);
}
} else {
var i = cljs.core.first(s__117476__$2);
var included_QMARK_ = cljs.core.contains_QMARK_(included_set,i);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.strength-item","span.strength-item",1188975224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),((included_QMARK_)?"included":null)], null),frontend.ui.icon(((included_QMARK_)?"check":"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-1"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.capitalize","span.capitalize",-2115789042),i], null)], null),frontend$components$encryption$iter__117475(cljs.core.rest(s__117476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lowercase","uppercase","number","symbol"], null));
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117474))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input-hints","text-sm","py-2","px-3","rounded","mb-2","-mt-1","5","flex","items-center","sm:space-x-3","strength-wrap"], null)], null),attrs117474], 0))):{'className':"input-hints text-sm py-2 px-3 rounded mb-2 -mt-1 5 flex items-center sm:space-x-3 strength-wrap"}),((cljs.core.map_QMARK_(attrs117474))?null:[daiquiri.interpreter.interpret(attrs117474)]));
})(),daiquiri.core.create_element("div",{'className':"input-pw-strength"},[daiquiri.core.create_element("div",{'className':"indicator flex"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$encryption$iter__117479(s__117480){
return (new cljs.core.LazySeq(null,(function (){
var s__117480__$1 = s__117480;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117480__$1);
if(temp__5804__auto__){
var s__117480__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117480__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117480__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117482 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117481 = (0);
while(true){
if((i__117481 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__117481);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Too weak","Weak","Medium","Strong"], null),i);
cljs.core.chunk_append(b__117482,daiquiri.core.create_element("i",{'key':i,'title':title,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pw_strength) | (0)) >= i))?"active":null)], null))},[daiquiri.interpreter.interpret(i)]));

var G__117510 = (i__117481 + (1));
i__117481 = G__117510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117482),frontend$components$encryption$iter__117479(cljs.core.chunk_rest(s__117480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117482),null);
}
} else {
var i = cljs.core.first(s__117480__$2);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Too weak","Weak","Medium","Strong"], null),i);
return cljs.core.cons(daiquiri.core.create_element("i",{'key':i,'title':title,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pw_strength) | (0)) >= i))?"active":null)], null))},[daiquiri.interpreter.interpret(i)]),frontend$components$encryption$iter__117479(cljs.core.rest(s__117480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((4)));
})())])])]))]);
})():null),daiquiri.core.create_element("input",{'type':(cljs.core.truth_(cljs.core.deref(_STAR_show_password_QMARK_))?"text":"password"),'ref':_STAR_input_ref_0,'placeholder':"Password",'autoFocus':true,'disabled':loading_QMARK_,'onKeyUp':enter_handler,'onChange':rum.core.mark_sync_update((function (e){
cljs.core.reset_BANG_(_STAR_password,frontend.util.evalue(e));

if(cljs.core.truth_(new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(set_remote_graph_pwd_result))){
return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","set-remote-graph-password-result","file-sync/set-remote-graph-password-result",-1161271382)], null),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
})),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2"},[]),(cljs.core.truth_(init_graph_keys)?daiquiri.core.create_element("input",{'placeholder':"Re-enter the password",'disabled':loading_QMARK_,'ref':_STAR_input_ref_1,'type':(cljs.core.truth_(cljs.core.deref(_STAR_show_password_QMARK_))?"text":"password"),'onBlur':(function (){
return cljs.core.reset_BANG_(_STAR_pw_confirm_focused_QMARK_,false);
}),'className':"form-input block w-full sm:text-sm sm:leading-5 my-2",'onKeyUp':enter_handler,'onChange':rum.core.mark_sync_update((function (e){
return cljs.core.reset_BANG_(_STAR_pw_confirm,frontend.util.evalue(e));
})),'onFocus':(function (){
return cljs.core.reset_BANG_(_STAR_pw_confirm_focused_QMARK_,true);
})},[]):null),frontend.components.encryption.show_password_cp(_STAR_show_password_QMARK_),(cljs.core.truth_(init_graph_keys)?daiquiri.core.create_element("div",{'className':"init-remote-pw-tips space-x-4 pt-2 hidden sm:flex"},[daiquiri.core.create_element("div",{'className':"flex-1 flex items-center"},[(function (){var attrs117483 = frontend.ui.icon("key");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117483))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-3","flex"], null)], null),attrs117483], 0))):{'className':"px-3 flex"}),((cljs.core.map_QMARK_(attrs117483))?null:[daiquiri.interpreter.interpret(attrs117483)]));
})(),daiquiri.core.create_element("p",{'className':"dark:text-gray-100"},[daiquiri.core.create_element("span",null,["Please make sure you "]),"remember the password you have set, as we are unable to reset or retrieve it in case you forget it, ",daiquiri.core.create_element("span",null,["and we recommend you "]),"keep a secure backup ",daiquiri.core.create_element("span",null,["of the password."])])]),daiquiri.core.create_element("div",{'className':"flex-1 flex items-center"},[(function (){var attrs117486 = frontend.ui.icon("lock");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs117486))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-3","flex"], null)], null),attrs117486], 0))):{'className':"px-3 flex"}),((cljs.core.map_QMARK_(attrs117486))?null:[daiquiri.interpreter.interpret(attrs117486)]));
})(),daiquiri.core.create_element("p",{'className':"dark:text-gray-100"},["If you lose your password, all of your data in the cloud can\u2019t be decrypted. ",daiquiri.core.create_element("span",null,["You will still be able to access the local version of your graph."])])])]):null)]),(function (){var attrs117432 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cancel","cancel",-1964088360)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading_QMARK_,new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-60",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cancel_handler], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117432))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-5","sm:mt-4","flex","justify-center","sm:justify-end","space-x-3"], null)], null),attrs117432], 0))):{'className':"mt-5 sm:mt-4 flex justify-center sm:justify-end space-x-3"}),((cljs.core.map_QMARK_(attrs117432))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex.items-center.leading-none","span.inline-flex.items-center.leading-none",-2074931546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"submit","submit",-49315317)], 0))], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.ui.loading.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4"], null))], null):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5043__auto__ = (!(can_submit_QMARK_()));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return loading_QMARK_;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),submit_handler], 0)))]:[daiquiri.interpreter.interpret(attrs117432),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex.items-center.leading-none","span.inline-flex.items-center.leading-none",-2074931546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"submit","submit",-49315317)], 0))], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1","span.ml-1",-436032201),frontend.ui.loading.cljs$core$IFn$_invoke$arity$2("",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4"], null))], null):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5043__auto__ = (!(can_submit_QMARK_()));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return loading_QMARK_;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),submit_handler], 0)))]));
})()]);
}),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.encryption","password","frontend.components.encryption/password",778875014)),rum.core.local.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword("frontend.components.encryption","pw-confirm","frontend.components.encryption/pw-confirm",1857232954)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.encryption","pw-confirm-focused?","frontend.components.encryption/pw-confirm-focused?",1772685568)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.encryption","show-password?","frontend.components.encryption/show-password?",424518490)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var G__117489_117511 = frontend.state.sub(new cljs.core.Keyword("file-sync","jstour-inst","file-sync/jstour-inst",-1545838291));
if((G__117489_117511 == null)){
} else {
G__117489_117511.complete();
}

return state;
})], null)], null),"frontend.components.encryption/input-password-inner");
frontend.components.encryption.input_password = (function frontend$components$encryption$input_password(var_args){
var G__117492 = arguments.length;
switch (G__117492) {
case 2:
return frontend.components.encryption.input_password.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.encryption.input_password.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.encryption.input_password.cljs$core$IFn$_invoke$arity$2 = (function (repo_url,close_fn){
return frontend.components.encryption.input_password.cljs$core$IFn$_invoke$arity$3(repo_url,close_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"local","local",-1497766724)], null));
}));

(frontend.components.encryption.input_password.cljs$core$IFn$_invoke$arity$3 = (function (repo_url,close_fn,opts){
return (function (close_fn_SINGLEQUOTE_){
var close_fn_SINGLEQUOTE___$1 = ((cljs.core.fn_QMARK_(close_fn))?(function (p1__117490_SHARP_){
(close_fn.cljs$core$IFn$_invoke$arity$1 ? close_fn.cljs$core$IFn$_invoke$arity$1(p1__117490_SHARP_) : close_fn.call(null,p1__117490_SHARP_));

return (close_fn_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$0 ? close_fn_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$0() : close_fn_SINGLEQUOTE_.call(null));
}):close_fn_SINGLEQUOTE_);
return frontend.components.encryption.input_password_inner(repo_url,close_fn_SINGLEQUOTE___$1,opts);
});
}));

(frontend.components.encryption.input_password.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=frontend.components.encryption.js.map
