goog.provide('frontend.handler.events');
var module$node_modules$$capacitor$filesystem$dist$plugin_cjs=shadow.js.require("module$node_modules$$capacitor$filesystem$dist$plugin_cjs", {});
var module$node_modules$$sentry$react$dist$index=shadow.js.require("module$node_modules$$sentry$react$dist$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.events !== 'undefined') && (typeof frontend.handler.events.handle !== 'undefined')){
} else {
frontend.handler.events.handle = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__117600 = cljs.core.get_global_hierarchy;
return (fexpr__117600.cljs$core$IFn$_invoke$arity$0 ? fexpr__117600.cljs$core$IFn$_invoke$arity$0() : fexpr__117600.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.handler.events","handle"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
frontend.handler.events.file_sync_restart_BANG_ = (function frontend$handler$events$file_sync_restart_BANG_(){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_117618){
var state_val_117619 = (state_117618[(1)]);
if((state_val_117619 === (1))){
var inst_117601 = frontend.util.persist_var.load_vars();
var inst_117602 = cljs.core.async.interop.p__GT_c(inst_117601);
var state_117618__$1 = state_117618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117618__$1,(2),inst_117602);
} else {
if((state_val_117619 === (2))){
var inst_117604 = (state_117618[(2)]);
var inst_117605 = frontend.fs.sync._LT_sync_stop();
var state_117618__$1 = (function (){var statearr_117620 = state_117618;
(statearr_117620[(7)] = inst_117604);

return statearr_117620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117618__$1,(3),inst_117605);
} else {
if((state_val_117619 === (3))){
var inst_117609 = (state_117618[(8)]);
var inst_117607 = (state_117618[(2)]);
var inst_117609__$1 = frontend.fs.sync._LT_sync_start();
var inst_117610 = (inst_117609__$1 == null);
var state_117618__$1 = (function (){var statearr_117621 = state_117618;
(statearr_117621[(9)] = inst_117607);

(statearr_117621[(8)] = inst_117609__$1);

return statearr_117621;
})();
if(cljs.core.truth_(inst_117610)){
var statearr_117622_118152 = state_117618__$1;
(statearr_117622_118152[(1)] = (4));

} else {
var statearr_117623_118153 = state_117618__$1;
(statearr_117623_118153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117619 === (4))){
var state_117618__$1 = state_117618;
var statearr_117624_118154 = state_117618__$1;
(statearr_117624_118154[(2)] = null);

(statearr_117624_118154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117619 === (5))){
var inst_117609 = (state_117618[(8)]);
var state_117618__$1 = state_117618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117618__$1,(7),inst_117609);
} else {
if((state_val_117619 === (6))){
var inst_117616 = (state_117618[(2)]);
var state_117618__$1 = state_117618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117618__$1,inst_117616);
} else {
if((state_val_117619 === (7))){
var inst_117614 = (state_117618[(2)]);
var state_117618__$1 = state_117618;
var statearr_117625_118155 = state_117618__$1;
(statearr_117625_118155[(2)] = inst_117614);

(statearr_117625_118155[(1)] = (6));


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
});
return (function() {
var frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto__ = null;
var frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto____0 = (function (){
var statearr_117626 = [null,null,null,null,null,null,null,null,null,null];
(statearr_117626[(0)] = frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto__);

(statearr_117626[(1)] = (1));

return statearr_117626;
});
var frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto____1 = (function (state_117618){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_117618);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e117627){var ex__34382__auto__ = e117627;
var statearr_117628_118156 = state_117618;
(statearr_117628_118156[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_117618[(4)]))){
var statearr_117629_118157 = state_117618;
(statearr_117629_118157[(1)] = cljs.core.first((state_117618[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118158 = state_117618;
state_117618 = G__118158;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto__ = function(state_117618){
switch(arguments.length){
case 0:
return frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto____1.call(this,state_117618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto____0;
frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto____1;
return frontend$handler$events$file_sync_restart_BANG__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_117630 = f__34484__auto__();
(statearr_117630[(6)] = c__34483__auto__);

return statearr_117630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.events.file_sync_stop_BANG_ = (function frontend$handler$events$file_sync_stop_BANG_(){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_117639){
var state_val_117640 = (state_117639[(1)]);
if((state_val_117640 === (1))){
var inst_117631 = frontend.util.persist_var.load_vars();
var inst_117632 = cljs.core.async.interop.p__GT_c(inst_117631);
var state_117639__$1 = state_117639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117639__$1,(2),inst_117632);
} else {
if((state_val_117640 === (2))){
var inst_117634 = (state_117639[(2)]);
var inst_117635 = frontend.fs.sync._LT_sync_stop();
var state_117639__$1 = (function (){var statearr_117641 = state_117639;
(statearr_117641[(7)] = inst_117634);

return statearr_117641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117639__$1,(3),inst_117635);
} else {
if((state_val_117640 === (3))){
var inst_117637 = (state_117639[(2)]);
var state_117639__$1 = state_117639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117639__$1,inst_117637);
} else {
return null;
}
}
}
});
return (function() {
var frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto__ = null;
var frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto____0 = (function (){
var statearr_117642 = [null,null,null,null,null,null,null,null];
(statearr_117642[(0)] = frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto__);

(statearr_117642[(1)] = (1));

return statearr_117642;
});
var frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto____1 = (function (state_117639){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_117639);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e117643){var ex__34382__auto__ = e117643;
var statearr_117644_118159 = state_117639;
(statearr_117644_118159[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_117639[(4)]))){
var statearr_117645_118160 = state_117639;
(statearr_117645_118160[(1)] = cljs.core.first((state_117639[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118161 = state_117639;
state_117639 = G__118161;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto__ = function(state_117639){
switch(arguments.length){
case 0:
return frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto____1.call(this,state_117639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto____0;
frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto____1;
return frontend$handler$events$file_sync_stop_BANG__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_117646 = f__34484__auto__();
(statearr_117646[(6)] = c__34483__auto__);

return statearr_117646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.events.enable_beta_features_BANG_ = (function frontend$handler$events$enable_beta_features_BANG_(){
if(frontend.state.enable_sync_QMARK_() === false){
return null;
} else {
return frontend.handler.file_sync.set_sync_enabled_BANG_(true);
}
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("user","fetch-info-and-graphs","user/fetch-info-and-graphs",-1029959720),(function (p__117648){
var vec__117649 = p__117648;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117649,(0),null);
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword(null,"login","login",55217519)], null),false);

var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_117696){
var state_val_117697 = (state_117696[(1)]);
if((state_val_117697 === (7))){
var state_117696__$1 = state_117696;
var statearr_117698_118162 = state_117696__$1;
(statearr_117698_118162[(2)] = null);

(statearr_117698_118162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (20))){
var inst_117671 = (state_117696[(7)]);
var inst_117687 = (state_117696[(2)]);
var inst_117688 = frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
var inst_117689 = frontend.components.file_sync.maybe_onboarding_show(inst_117671);
var state_117696__$1 = (function (){var statearr_117699 = state_117696;
(statearr_117699[(8)] = inst_117687);

(statearr_117699[(9)] = inst_117688);

return statearr_117699;
})();
var statearr_117700_118163 = state_117696__$1;
(statearr_117700_118163[(2)] = inst_117689);

(statearr_117700_118163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (1))){
var inst_117652 = frontend.fs.sync._LT_user_info(frontend.fs.sync.remoteapi);
var state_117696__$1 = state_117696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117696__$1,(2),inst_117652);
} else {
if((state_val_117697 === (4))){
var inst_117654 = (state_117696[(10)]);
var inst_117658 = cljs.core.map_QMARK_(inst_117654);
var state_117696__$1 = state_117696;
if(inst_117658){
var statearr_117701_118164 = state_117696__$1;
(statearr_117701_118164[(1)] = (6));

} else {
var statearr_117702_118165 = state_117696__$1;
(statearr_117702_118165[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (15))){
var inst_117674 = frontend.handler.user.logged_in_QMARK_();
var state_117696__$1 = state_117696;
var statearr_117703_118166 = state_117696__$1;
(statearr_117703_118166[(2)] = inst_117674);

(statearr_117703_118166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (21))){
var inst_117654 = (state_117696[(10)]);
var inst_117671 = (state_117696[(7)]);
var inst_117682 = (state_117696[(2)]);
var inst_117683 = (function (){var result = inst_117654;
var status = inst_117671;
return (function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.refresh_repos_BANG_(),(function (repos){
return promesa.protocols._promise((function (){var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
if(cljs.core.truth_(cljs.core.some((function (p1__117647_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__117647_SHARP_),repo)) && (((cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"sync-meta","sync-meta",-164400022).cljs$core$IFn$_invoke$arity$1(p1__117647_SHARP_))) && (((frontend.util.uuid_string_QMARK_(cljs.core.first(new cljs.core.Keyword(null,"sync-meta","sync-meta",-164400022).cljs$core$IFn$_invoke$arity$1(p1__117647_SHARP_)))) && (frontend.util.uuid_string_QMARK_(cljs.core.second(new cljs.core.Keyword(null,"sync-meta","sync-meta",-164400022).cljs$core$IFn$_invoke$arity$1(p1__117647_SHARP_)))))))));
}),repos))){
return frontend.fs.sync._LT_sync_start();
} else {
return null;
}
} else {
return null;
}
})());
}));
});
})();
var inst_117684 = promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,inst_117683);
var state_117696__$1 = (function (){var statearr_117704 = state_117696;
(statearr_117704[(11)] = inst_117682);

return statearr_117704;
})();
var statearr_117705_118167 = state_117696__$1;
(statearr_117705_118167[(2)] = inst_117684);

(statearr_117705_118167[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (13))){
var state_117696__$1 = state_117696;
var statearr_117706_118168 = state_117696__$1;
(statearr_117706_118168[(2)] = new cljs.core.Keyword(null,"unavailable","unavailable",1529915531));

(statearr_117706_118168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (6))){
var inst_117654 = (state_117696[(10)]);
var inst_117661 = (state_117696[(12)]);
var inst_117660 = frontend.state.set_user_info_BANG_(inst_117654);
var inst_117661__$1 = frontend.handler.user.user_uuid();
var state_117696__$1 = (function (){var statearr_117707 = state_117696;
(statearr_117707[(13)] = inst_117660);

(statearr_117707[(12)] = inst_117661__$1);

return statearr_117707;
})();
if(cljs.core.truth_(inst_117661__$1)){
var statearr_117708_118169 = state_117696__$1;
(statearr_117708_118169[(1)] = (9));

} else {
var statearr_117709_118170 = state_117696__$1;
(statearr_117709_118170[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (17))){
var inst_117677 = (state_117696[(2)]);
var state_117696__$1 = state_117696;
if(cljs.core.truth_(inst_117677)){
var statearr_117710_118171 = state_117696__$1;
(statearr_117710_118171[(1)] = (18));

} else {
var statearr_117711_118172 = state_117696__$1;
(statearr_117711_118172[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (3))){
var state_117696__$1 = state_117696;
var statearr_117712_118173 = state_117696__$1;
(statearr_117712_118173[(2)] = null);

(statearr_117712_118173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (12))){
var state_117696__$1 = state_117696;
var statearr_117713_118174 = state_117696__$1;
(statearr_117713_118174[(2)] = new cljs.core.Keyword(null,"welcome","welcome",-578152123));

(statearr_117713_118174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (2))){
var inst_117654 = (state_117696[(10)]);
var inst_117654__$1 = (state_117696[(2)]);
var inst_117655 = (inst_117654__$1 instanceof cljs.core.ExceptionInfo);
var state_117696__$1 = (function (){var statearr_117714 = state_117696;
(statearr_117714[(10)] = inst_117654__$1);

return statearr_117714;
})();
if(cljs.core.truth_(inst_117655)){
var statearr_117715_118175 = state_117696__$1;
(statearr_117715_118175[(1)] = (3));

} else {
var statearr_117716_118176 = state_117696__$1;
(statearr_117716_118176[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (19))){
var state_117696__$1 = state_117696;
var statearr_117717_118177 = state_117696__$1;
(statearr_117717_118177[(2)] = null);

(statearr_117717_118177[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (11))){
var inst_117666 = (state_117696[(2)]);
var inst_117667 = frontend.handler.user.alpha_or_beta_user_QMARK_();
var state_117696__$1 = (function (){var statearr_117718 = state_117696;
(statearr_117718[(14)] = inst_117666);

return statearr_117718;
})();
if(cljs.core.truth_(inst_117667)){
var statearr_117719_118178 = state_117696__$1;
(statearr_117719_118178[(1)] = (12));

} else {
var statearr_117720_118179 = state_117696__$1;
(statearr_117720_118179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (9))){
var inst_117661 = (state_117696[(12)]);
var inst_117663 = frontend.modules.instrumentation.sentry.set_user_BANG_(inst_117661);
var state_117696__$1 = state_117696;
var statearr_117721_118180 = state_117696__$1;
(statearr_117721_118180[(2)] = inst_117663);

(statearr_117721_118180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (5))){
var inst_117694 = (state_117696[(2)]);
var state_117696__$1 = state_117696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117696__$1,inst_117694);
} else {
if((state_val_117697 === (14))){
var inst_117671 = (state_117696[(7)]);
var inst_117672 = (state_117696[(15)]);
var inst_117671__$1 = (state_117696[(2)]);
var inst_117672__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_117671__$1,new cljs.core.Keyword(null,"welcome","welcome",-578152123));
var state_117696__$1 = (function (){var statearr_117722 = state_117696;
(statearr_117722[(7)] = inst_117671__$1);

(statearr_117722[(15)] = inst_117672__$1);

return statearr_117722;
})();
if(inst_117672__$1){
var statearr_117723_118181 = state_117696__$1;
(statearr_117723_118181[(1)] = (15));

} else {
var statearr_117724_118182 = state_117696__$1;
(statearr_117724_118182[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (16))){
var inst_117672 = (state_117696[(15)]);
var state_117696__$1 = state_117696;
var statearr_117725_118183 = state_117696__$1;
(statearr_117725_118183[(2)] = inst_117672);

(statearr_117725_118183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (10))){
var state_117696__$1 = state_117696;
var statearr_117726_118184 = state_117696__$1;
(statearr_117726_118184[(2)] = null);

(statearr_117726_118184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117697 === (18))){
var inst_117679 = frontend.handler.events.enable_beta_features_BANG_();
var inst_117680 = frontend.handler.file_sync.load_session_graphs();
var state_117696__$1 = (function (){var statearr_117727 = state_117696;
(statearr_117727[(16)] = inst_117679);

return statearr_117727;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117696__$1,(21),inst_117680);
} else {
if((state_val_117697 === (8))){
var inst_117692 = (state_117696[(2)]);
var state_117696__$1 = state_117696;
var statearr_117728_118185 = state_117696__$1;
(statearr_117728_118185[(2)] = inst_117692);

(statearr_117728_118185[(1)] = (5));


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
}
});
return (function() {
var frontend$handler$events$state_machine__34379__auto__ = null;
var frontend$handler$events$state_machine__34379__auto____0 = (function (){
var statearr_117729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_117729[(0)] = frontend$handler$events$state_machine__34379__auto__);

(statearr_117729[(1)] = (1));

return statearr_117729;
});
var frontend$handler$events$state_machine__34379__auto____1 = (function (state_117696){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_117696);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e117730){var ex__34382__auto__ = e117730;
var statearr_117731_118186 = state_117696;
(statearr_117731_118186[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_117696[(4)]))){
var statearr_117732_118187 = state_117696;
(statearr_117732_118187[(1)] = cljs.core.first((state_117696[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118188 = state_117696;
state_117696 = G__118188;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$events$state_machine__34379__auto__ = function(state_117696){
switch(arguments.length){
case 0:
return frontend$handler$events$state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$events$state_machine__34379__auto____1.call(this,state_117696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$events$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$events$state_machine__34379__auto____0;
frontend$handler$events$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$events$state_machine__34379__auto____1;
return frontend$handler$events$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_117733 = f__34484__auto__();
(statearr_117733[(6)] = c__34483__auto__);

return statearr_117733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("user","logout","user/logout",1413770948),(function (p__117734){
var vec__117735 = p__117734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117735,(0),null);
frontend.handler.file_sync.reset_session_graphs();

frontend.fs.sync.remove_all_pwd_BANG_();

frontend.handler.file_sync.reset_user_state_BANG_();

return frontend.components.user.login.sign_out_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("user","login","user/login",51503538),(function (p__117738){
var vec__117739 = p__117738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117739,(0),null);
var host_ui_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117739,(1),null);
if(cljs.core.truth_((function (){var or__5043__auto__ = host_ui_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(frontend.util.electron_QMARK_);
}
})())){
return window.open(frontend.config.LOGIN_URL);
} else {
return frontend.components.user.login.open_login_modal_BANG_();
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","added","graph/added",2021754774),(function (p__117742){
var vec__117743 = p__117742;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117743,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117743,(1),null);
var map__117746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117743,(2),null);
var map__117746__$1 = cljs.core.__destructure_map(map__117746);
var empty_graph_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117746__$1,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639));
(frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3 ? frontend.db.set_key_value.cljs$core$IFn$_invoke$arity$3(repo,new cljs.core.Keyword("ast","version","ast/version",425392416),logseq.db.schema.ast_version) : frontend.db.set_key_value.call(null,repo,new cljs.core.Keyword("ast","version","ast/version",425392416),logseq.db.schema.ast_version));

frontend.handler.search.rebuild_indices_BANG_.cljs$core$IFn$_invoke$arity$0();

frontend.db.persist_BANG_(repo);

frontend.handler.plugin.hook_plugin_app.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-after-indexed","graph-after-indexed",1633483403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"empty-graph?","empty-graph?",981603639),empty_graph_QMARK_], null));

if(frontend.state.setups_picker_QMARK_()){
if(cljs.core.truth_(empty_graph_QMARK_)){
frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),"picker"], null)], null));
} else {
frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
}
} else {
}

var temp__5804__auto___118189 = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5804__auto___118189)){
var dir_name_118190 = temp__5804__auto___118189;
frontend.fs.watch_dir_BANG_.cljs$core$IFn$_invoke$arity$1(dir_name_118190);
} else {
}

return frontend.handler.events.file_sync_restart_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","unlinked","graph/unlinked",-2077575387),(function (repo,current_repo){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo),current_repo)){
return frontend.handler.events.file_sync_restart_BANG_();
} else {
return null;
}
}));
frontend.handler.events.graph_switch = (function frontend$handler$events$graph_switch(var_args){
var G__117748 = arguments.length;
switch (G__117748) {
case 1:
return frontend.handler.events.graph_switch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.events.graph_switch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.events.graph_switch.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return frontend.handler.events.graph_switch.cljs$core$IFn$_invoke$arity$2(graph,false);
}));

(frontend.handler.events.graph_switch.cljs$core$IFn$_invoke$arity$2 = (function (graph,skip_ios_check_QMARK_){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_ios_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(skip_ios_check_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validate-appId","validate-appId",1357498109),frontend.handler.events.graph_switch,graph], null));
} else {
frontend.state.set_current_repo_BANG_(graph);

frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1(graph);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),frontend.state.get_current_route())){
} else {
frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
}

frontend.extensions.srs.update_cards_due_count_BANG_();

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ready","graph/ready",1121782733),graph], null));

frontend.handler.events.file_sync_restart_BANG_();

var temp__5804__auto__ = frontend.config.get_repo_dir(graph);
if(cljs.core.truth_(temp__5804__auto__)){
var dir_name = temp__5804__auto__;
return frontend.fs.watch_dir_BANG_.cljs$core$IFn$_invoke$arity$1(dir_name);
} else {
return null;
}
}
}));

(frontend.handler.events.graph_switch.cljs$lang$maxFixedArity = 2);

frontend.handler.events.persist_db_noti_m = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return frontend.ui.notify_graph_persist_BANG_();
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return frontend.ui.notify_graph_persist_error_BANG_();
})], null);
/**
 * Logic for keeping db sync when switching graphs
 * Only works for electron
 * graph: the target graph to switch to
 */
frontend.handler.events.graph_switch_on_persisted = (function frontend$handler$events$graph_switch_on_persisted(graph,p__117749){
var map__117750 = p__117749;
var map__117750__$1 = cljs.core.__destructure_map(map__117750);
var persist_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117750__$1,new cljs.core.Keyword(null,"persist?","persist?",-1772568760));
var current_repo = frontend.state.get_current_repo();
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(persist_QMARK_)?(cljs.core.truth_(frontend.util.electron_QMARK_())?promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37149__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(current_repo,frontend.handler.events.persist_db_noti_m),(function (___37148__auto__){
return promesa.protocols._promise(frontend.handler.repo.broadcast_persist_db_BANG_(graph));
}));
})):null):null),(function (___37148__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.restore_and_setup_repo_BANG_(graph),(function (___37148__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.events.graph_switch.cljs$core$IFn$_invoke$arity$1(graph),(function (___37148__auto____$2){
return promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("sync-graph","init?","sync-graph/init?",608792103),false));
}));
}));
}));
}));
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","switch","graph/switch",178853840),(function (p__117751){
var vec__117752 = p__117751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117752,(0),null);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117752,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117752,(2),null);
var opts__$1 = ((new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(opts) === false)?opts:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true));
if(cljs.core.truth_((function (){var or__5043__auto__ = (!(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.outliner.file._STAR_writes_finished_QMARK_),graph) === false));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("sync-graph","init?","sync-graph/init?",608792103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
}
})())){
return frontend.handler.events.graph_switch_on_persisted(graph,opts__$1);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please wait seconds until all changes are saved for the current graph.",new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","pull-down-remote-graph","graph/pull-down-remote-graph",-1238246835),(function (p__117755){
var vec__117756 = p__117755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117756,(0),null);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117756,(1),null);
var dir_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117756,(2),null);
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
var temp__5804__auto__ = (function (){var or__5043__auto__ = dir_name;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(graph);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var graph_name = temp__5804__auto__;
var graph_name__$1 = frontend.util.safe_sanitize_file_name(graph_name);
if(clojure.string.blank_QMARK_(graph_name__$1)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$1("Illegal graph folder name.");
} else {
var temp__5804__auto____$1 = frontend.state.get_local_container_root_url();
if(cljs.core.truth_(temp__5804__auto____$1)){
var root = temp__5804__auto____$1;
var graph_path = frontend.mobile.graph_picker.validate_graph_dirname(root,graph_name__$1);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.dir_exists_QMARK_(graph_path),(function (exists_QMARK_){
return promesa.protocols._promise((function (){var overwrite_QMARK_ = (cljs.core.truth_(exists_QMARK_)?confirm(["There's already a directory with the name \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_name__$1),"\", do you want to overwrite it? Make sure to backup it first if you're not sure about it."].join('')):true);
if(cljs.core.truth_(overwrite_QMARK_)){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.mkdir_if_not_exists(graph_path),(function (___$1){
return promesa.protocols._promise(frontend.handler.web.nfs.ls_dir_files_with_path_BANG_.cljs$core$IFn$_invoke$arity$2(graph_path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ok-handler","ok-handler",-804644089),(function (){
frontend.handler.file_sync.init_remote_graph(graph_path,graph);

return setTimeout((function (){
return frontend.handler.repo.refresh_repos_BANG_();
}),(200));
})], null)));
}));
}));
} else {
var graph_name__$2 = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(prompt("Please specify a new directory name to download the graph:")));
if(clojure.string.blank_QMARK_(graph_name__$2)){
return null;
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","pull-down-remote-graph","graph/pull-down-remote-graph",-1238246835),graph,graph_name__$2], null));
}
}
})());
}));
})),(function (e){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"error","error",-978969032));

return console.error(e);
}));
} else {
return null;
}
}
} else {
return null;
}
} else {
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.file_sync.pick_dest_to_sync_panel(graph),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","pick-page-histories","graph/pick-page-histories",2080848727),(function (p__117759){
var vec__117760 = p__117759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117760,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117760,(1),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117760,(2),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.file_sync.pick_page_histories_panel(graph_uuid,page_name),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"page-histories","page-histories",524382634),new cljs.core.Keyword(null,"label","label",1718410804),"modal-page-histories"], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),(function (p__117763){
var vec__117764 = p__117763;
var _ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117764,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117764,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),(function (current_repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = repo;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return current_repo;
}
})(),(function (target_repo){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(current_repo,frontend.handler.events.persist_db_noti_m),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,target_repo))?null:frontend.handler.repo.broadcast_persist_db_BANG_(repo)),(function (___$1){
return promesa.protocols._promise(frontend.handler.ui.open_new_window_BANG_.cljs$core$IFn$_invoke$arity$1(repo));
}));
}));
}));
}));
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","migrated","graph/migrated",1907299703),(function (p__117767){
var vec__117768 = p__117767;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117768,(0),null);
var _repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117768,(1),null);
return alert("Graph migrated.");
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","save","graph/save",1751198815),(function (_){
return frontend.handler.repo.persist_db_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_current_repo(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","save","graph/save",1751198815)], 0))),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
frontend.handler.notification.clear_all_BANG_();

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","save-success","graph/save-success",1004614712)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","save-error","graph/save-error",848849018)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
})], null));
}));
frontend.handler.events.get_local_repo = (function frontend$handler$events$get_local_repo(){
var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
if(frontend.config.local_db_QMARK_(repo)){
return repo;
} else {
return null;
}
} else {
return null;
}
});
frontend.handler.events.ask_permission = (function frontend$handler$events$ask_permission(repo){
if(((cljs.core.not(frontend.util.electron_QMARK_())) && (cljs.core.not(frontend.mobile.util.native_platform_QMARK_())))){
return (function (close_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Grant native filesystem permission for directory: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),frontend.config.get_local_dir(repo)], null)], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("settings-permission","start-granting","settings-permission/start-granting",1287021182)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"ui__modal-enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.fs.nfs.check_directory_permission_BANG_(repo);

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
})], 0))], null);
});
} else {
return null;
}
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","nfs-ask-permission","modal/nfs-ask-permission",-1078859519),(function (){
var temp__5804__auto__ = frontend.handler.events.get_local_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.handler.events.ask_permission(repo));
} else {
return null;
}
}));
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.events !== 'undefined') && (typeof frontend.handler.events._STAR_query_properties !== 'undefined')){
} else {
frontend.handler.events._STAR_query_properties = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.handler.events.query_properties_settings_inner = rum.core.lazy_build(rum.core.build_defc,(function (block,shown_properties,all_properties,_close_fn){
var query_properties = rum.core.react(frontend.handler.events._STAR_query_properties);
return daiquiri.core.create_element("div",{'className':"p-4"},[(function (){var attrs117771 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query","config-property-settings","query/config-property-settings",1039572177)], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117771))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-bold"], null)], null),attrs117771], 0))):{'className':"font-bold"}),((cljs.core.map_QMARK_(attrs117771))?null:[daiquiri.interpreter.interpret(attrs117771)]));
})(),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$handler$events$iter__117772(s__117773){
return (new cljs.core.LazySeq(null,(function (){
var s__117773__$1 = s__117773;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__117773__$1);
if(temp__5804__auto__){
var s__117773__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__117773__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__117773__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__117775 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__117774 = (0);
while(true){
if((i__117774 < size__5519__auto__)){
var property = cljs.core._nth(c__5518__auto__,i__117774);
cljs.core.chunk_append(b__117775,(function (){var property_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_properties,property);
var shown_QMARK_ = (((property_value == null))?cljs.core.contains_QMARK_(shown_properties,property):property_value);
return daiquiri.core.create_element("div",{'className':"flex flex-row m-2 justify-between align-items"},[daiquiri.core.create_element("div",null,[cljs.core.name(property)]),(function (){var attrs117776 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(shown_QMARK_,((function (i__117774,property_value,shown_QMARK_,property,c__5518__auto__,size__5519__auto__,b__117775,s__117773__$2,temp__5804__auto__,query_properties){
return (function (){
var value = cljs.core.not(shown_QMARK_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.events._STAR_query_properties,cljs.core.assoc,property,value);

return frontend.handler.editor.set_block_query_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),all_properties,property,value);
});})(i__117774,property_value,shown_QMARK_,property,c__5518__auto__,size__5519__auto__,b__117775,s__117773__$2,temp__5804__auto__,query_properties))
,true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117776))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1"], null)], null),attrs117776], 0))):{'className':"mt-1"}),((cljs.core.map_QMARK_(attrs117776))?null:[daiquiri.interpreter.interpret(attrs117776)]));
})()]);
})());

var G__118192 = (i__117774 + (1));
i__117774 = G__118192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__117775),frontend$handler$events$iter__117772(cljs.core.chunk_rest(s__117773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__117775),null);
}
} else {
var property = cljs.core.first(s__117773__$2);
return cljs.core.cons((function (){var property_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query_properties,property);
var shown_QMARK_ = (((property_value == null))?cljs.core.contains_QMARK_(shown_properties,property):property_value);
return daiquiri.core.create_element("div",{'className':"flex flex-row m-2 justify-between align-items"},[daiquiri.core.create_element("div",null,[cljs.core.name(property)]),(function (){var attrs117776 = frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(shown_QMARK_,((function (property_value,shown_QMARK_,property,s__117773__$2,temp__5804__auto__,query_properties){
return (function (){
var value = cljs.core.not(shown_QMARK_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.events._STAR_query_properties,cljs.core.assoc,property,value);

return frontend.handler.editor.set_block_query_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),all_properties,property,value);
});})(property_value,shown_QMARK_,property,s__117773__$2,temp__5804__auto__,query_properties))
,true);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs117776))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-1"], null)], null),attrs117776], 0))):{'className':"mt-1"}),((cljs.core.map_QMARK_(attrs117776))?null:[daiquiri.interpreter.interpret(attrs117776)]));
})()]);
})(),frontend$handler$events$iter__117772(cljs.core.rest(s__117773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(all_properties);
})())]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_(frontend.handler.events._STAR_query_properties,cljs.core.PersistentArrayMap.EMPTY);

return state;
})], null)], null),"frontend.handler.events/query-properties-settings-inner");
frontend.handler.events.query_properties_settings = (function frontend$handler$events$query_properties_settings(block,shown_properties,all_properties){
return (function (close_fn){
return frontend.handler.events.query_properties_settings_inner(block,shown_properties,all_properties,close_fn);
});
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","set-query-properties","modal/set-query-properties",-724632293),(function (p__117777){
var vec__117778 = p__117777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117778,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117778,(1),null);
var all_properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117778,(2),null);
var block_properties = (function (){var G__117781 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),new cljs.core.Keyword(null,"query-properties","query-properties",-953532199)], null));
if((G__117781 == null)){
return null;
} else {
return frontend.handler.common.safe_read_string(G__117781,"Parsing query properties failed");
}
})();
var shown_properties = ((cljs.core.seq(block_properties))?cljs.core.set(block_properties):cljs.core.set(all_properties));
var shown_properties__$1 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(all_properties),shown_properties);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.events.query_properties_settings(block,shown_properties__$1,all_properties),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","show-cards","modal/show-cards",1918730906),(function (_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.extensions.srs.global_cards,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"srs","srs",1327991978),new cljs.core.Keyword(null,"label","label",1718410804),"flashcards__cp"], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","show-instruction","modal/show-instruction",-270524467),(function (_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.fs.capacitor_fs.instruction,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"instruction","instruction",915804765),new cljs.core.Keyword(null,"label","label",1718410804),"instruction__cp"], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","show-themes-modal","modal/show-themes-modal",238725999),(function (_){
return frontend.components.plugins.open_select_theme_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","toggle-accent-colors-modal","modal/toggle-accent-colors-modal",-818196014),(function (_){
var label = "accent-colors-picker";
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,frontend.state.get_modal_id())) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(label,(function (){var G__117782 = frontend.state.get_sub_modals();
var G__117782__$1 = (((G__117782 == null))?null:cljs.core.first(G__117782));
if((G__117782__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("modal","id","modal/id",-1274892409).cljs$core$IFn$_invoke$arity$1(G__117782__$1);
}
})())))){
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1(label);
} else {
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.components.settings.modal_accent_colors_inner();
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"id","id",-1388402092),label,new cljs.core.Keyword(null,"label","label",1718410804),label], null));
}
}));
frontend.handler.events.modal_output = rum.core.lazy_build(rum.core.build_defc,(function (content){
return daiquiri.interpreter.interpret(content);
}),null,"frontend.handler.events/modal-output");
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","show","modal/show",-748944018),(function (p__117783){
var vec__117784 = p__117783;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117784,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117784,(1),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.handler.events.modal_output(content);
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","set-git-username-and-email","modal/set-git-username-and-email",-1189789991),(function (p__117787){
var vec__117788 = p__117787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117788,(0),null);
var _content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117788,(1),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.git.set_git_username_and_email);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("page","title-property-changed","page/title-property-changed",-1938781817),(function (p__117791){
var vec__117792 = p__117791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117792,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117792,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117792,(2),null);
return frontend.handler.page.rename_BANG_.cljs$core$IFn$_invoke$arity$2(old_title,new_title);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("page","create","page/create",-1304816391),(function (p__117795){
var vec__117796 = p__117795;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117796,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117796,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117796,(2),null);
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,opts);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("page","create-today-journal","page/create-today-journal",-248526088),(function (p__117799){
var vec__117800 = p__117799;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117800,(0),null);
var _repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117800,(1),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.create_today_journal_BANG_(),(function (___$1){
return promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0());
}));
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file","not-matched-from-disk","file/not-matched-from-disk",1915939272),(function (p__117803){
var vec__117804 = p__117803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117804,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117804,(1),null);
var disk_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117804,(2),null);
var db_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117804,(3),null);
frontend.state.clear_edit_BANG_();

var temp__5804__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5804__auto__)){
var repo = temp__5804__auto__;
if(cljs.core.truth_((function (){var and__5041__auto__ = disk_content;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = db_content;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.trim_safe(disk_content),frontend.util.trim_safe(db_content));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.components.diff.local_file(repo,path,disk_content,db_content);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"diff__cp"], null));
} else {
return null;
}
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","display-file-version-selector","modal/display-file-version-selector",-1615581416),(function (p__117807){
var vec__117808 = p__117807;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117808,(0),null);
var versions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117808,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117808,(2),null);
var get_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117808,(3),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return frontend.components.git.file_version_selector(versions,path,get_content);
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","ready","graph/ready",1121782733),(function (p__117811){
var vec__117812 = p__117811;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117812,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117812,(1),null);
if(frontend.config.local_db_QMARK_(repo)){
promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.config.get_repo_dir(repo),(function (dir){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.dir_exists_QMARK_(dir),(function (dir_exists_QMARK_){
return promesa.protocols._promise(((((cljs.core.not(dir_exists_QMARK_)) && ((!(frontend.util.nfs_QMARK_)))))?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","dir-gone","graph/dir-gone",-796087345),dir], null)):null));
}));
}));
}));
} else {
}

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.watcher_handler.preload_graph_homepage_files_BANG_(),(function (loaded_homepage_files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(setTimeout((function (){
return frontend.mobile.core.mobile_postinit();
}),(1000)),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.repo.graph_ready_BANG_(repo),(function (___$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.watcher_handler.load_graph_files_BANG_(repo,loaded_homepage_files),(function (___$3){
return promesa.protocols._promise(null);
}));
}));
}));
}));
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("notification","show","notification/show",1864741804),(function (p__117815){
var vec__117816 = p__117815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117816,(0),null);
var map__117819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117816,(1),null);
var map__117819__$1 = cljs.core.__destructure_map(map__117819);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117819__$1,new cljs.core.Keyword(null,"content","content",15833224));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117819__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var clear_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117819__$1,new cljs.core.Keyword(null,"clear?","clear?",1363344639));
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(content,status,clear_QMARK_);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("command","run","command/run",1545408256),(function (_){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.components.shell.shell);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","search","go/search",1564957958),(function (_){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.cmdk.cmdk_modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),true,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false,new cljs.core.Keyword(null,"panel?","panel?",-1698806907),false,new cljs.core.Keyword(null,"label","label",1718410804),"ls-modal-search"], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","plugins","go/plugins",1900072925),(function (_){
return frontend.components.plugins.open_plugins_modal_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","plugins-waiting-lists","go/plugins-waiting-lists",-660383344),(function (_){
return frontend.components.plugins.open_waiting_updates_modal_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","plugins-from-file","go/plugins-from-file",-231716743),(function (p__117820){
var vec__117821 = p__117820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117821,(0),null);
var plugins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117821,(1),null);
return frontend.components.plugins.open_plugins_from_file_modal_BANG_(plugins);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","plugins-settings","go/plugins-settings",-583021288),(function (p__117824){
var vec__117825 = p__117824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117825,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117825,(1),null);
var nav_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117825,(2),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117825,(3),null);
if(cljs.core.truth_(pid)){
frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","focused-settings","plugin/focused-settings",-1699334137),pid);

frontend.state.set_state_BANG_(new cljs.core.Keyword("plugin","navs-settings?","plugin/navs-settings?",-615901808),(!(nav_QMARK_ === false)));

return frontend.components.plugins.open_focused_settings_modal_BANG_(title);
} else {
return frontend.state.close_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$1("ls-focused-settings-modal");
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("go","proxy-settings","go/proxy-settings",1019838469),(function (p__117828){
var vec__117829 = p__117828;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117829,(0),null);
var agent_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117829,(1),null);
return frontend.state.set_sub_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (___$1){
return frontend.components.plugins.user_proxy_settings_panel(agent_opts);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"https-proxy-panel","https-proxy-panel",-1589308406),new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"redirect-to-home","redirect-to-home",236144576),(function (_){
return frontend.handler.page.create_today_journal_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),(function (p__117832){
var vec__117833 = p__117832;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117833,(0),null);
var map__117836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117833,(1),null);
var map__117836__$1 = cljs.core.__destructure_map(map__117836);
var opts = map__117836__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117836__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117836__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core.empty_QMARK_(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"payload","payload",-383036092)], 0)))){
} else {
console.error("instrument data-map should only contains [:type :payload]");
}

return frontend.modules.instrumentation.posthog.capture(type,payload);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"capture-error","capture-error",583122432),(function (p__117837){
var vec__117838 = p__117837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117838,(0),null);
var map__117841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117838,(1),null);
var map__117841__$1 = cljs.core.__destructure_map(map__117841);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117841__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117841__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var vec__117842 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117842,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117842,(1),null);
var tx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117842,(2),null);
var payload__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(payload,new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_uuid,new cljs.core.Keyword(null,"tx-id","tx-id",638275288),tx_id], 0));
return module$node_modules$$sentry$react$dist$index.captureException(error,cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),payload__$1], null)));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),(function (p__117845){
var vec__117846 = p__117845;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117846,(0),null);
var map__117849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117846,(1),null);
var map__117849__$1 = cljs.core.__destructure_map(map__117849);
var pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117849__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var cmd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117849__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117849__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cmd,action);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"shortcut-handler-refreshed","shortcut-handler-refreshed",1293579011),(function (p__117850){
var vec__117851 = p__117850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117851,(0),null);
if(cljs.core.truth_(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_inited_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(frontend.modules.shortcut.core._STAR_pending_inited_QMARK_,true);

return frontend.modules.shortcut.core.consume_pending_shortcuts_BANG_();
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mobile","keyboard-will-show","mobile/keyboard-will-show",2010922836),(function (p__117854){
var vec__117855 = p__117854;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117855,(0),null);
var keyboard_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117855,(1),null);
var main_node = frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-tabbar?","mobile/show-tabbar?",925227298),false);

frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-toolbar?","mobile/show-toolbar?",-1615839821),true);

frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-action-bar?","mobile/show-action-bar?",-1280463440),false);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("editor","record-status","editor/record-status",-122164557)),"RECORDING")){
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-recording-bar?","mobile/show-recording-bar?",-758548785),true);
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
cljs.core.reset_BANG_(frontend.util.keyboard_height,keyboard_height);

(main_node.style.marginBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height),"px"].join(''));

var temp__5804__auto___118193 = document.querySelector(":root");
if(cljs.core.truth_(temp__5804__auto___118193)){
var html_118194 = temp__5804__auto___118193;
html_118194.style.setProperty("--ls-native-kb-height",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height),"px"].join(''));

html_118194.classList.add("has-mobile-keyboard");
} else {
}

var temp__5804__auto___118195 = goog.dom.getElement("left-sidebar");
if(cljs.core.truth_(temp__5804__auto___118195)){
var left_sidebar_node_118196 = temp__5804__auto___118195;
(left_sidebar_node_118196.style.bottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height),"px"].join(''));
} else {
}

var temp__5804__auto___118197 = goog.dom.getElementByClass("sidebar-item-list");
if(cljs.core.truth_(temp__5804__auto___118197)){
var right_sidebar_node_118198 = temp__5804__auto___118197;
(right_sidebar_node_118198.style.paddingBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((150) + keyboard_height)),"px"].join(''));
} else {
}

var temp__5804__auto___118199 = document.querySelector(".cards-review");
if(cljs.core.truth_(temp__5804__auto___118199)){
var card_preview_el_118200 = temp__5804__auto___118199;
(card_preview_el_118200.style.marginBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height),"px"].join(''));
} else {
}

var temp__5804__auto___118201 = document.querySelector(".encryption-password");
if(cljs.core.truth_(temp__5804__auto___118201)){
var card_preview_el_118202 = temp__5804__auto___118201;
(card_preview_el_118202.style.marginBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height),"px"].join(''));
} else {
}

return setTimeout((function (){
var temp__5804__auto__ = main_node.querySelector("#mobile-editor-toolbar");
if(cljs.core.truth_(temp__5804__auto__)){
var toolbar = temp__5804__auto__;
return (toolbar.style.bottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height),"px"].join(''));
} else {
return null;
}
}),(100));
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mobile","keyboard-will-hide","mobile/keyboard-will-hide",-1974048806),(function (p__117858){
var vec__117859 = p__117858;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117859,(0),null);
var main_node = frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-toolbar?","mobile/show-toolbar?",-1615839821),false);

frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-tabbar?","mobile/show-tabbar?",925227298),true);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("editor","record-status","editor/record-status",-122164557)),"RECORDING")){
frontend.state.set_state_BANG_(new cljs.core.Keyword("mobile","show-recording-bar?","mobile/show-recording-bar?",-758548785),false);
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
var temp__5804__auto___118203 = document.querySelector(":root");
if(cljs.core.truth_(temp__5804__auto___118203)){
var html_118204 = temp__5804__auto___118203;
html_118204.style.removeProperty("--ls-native-kb-height");

html_118204.classList.remove("has-mobile-keyboard");
} else {
}

var temp__5804__auto___118205 = document.querySelector(".cards-review");
if(cljs.core.truth_(temp__5804__auto___118205)){
var card_preview_el_118206 = temp__5804__auto___118205;
(card_preview_el_118206.style.marginBottom = "0px");
} else {
}

var temp__5804__auto___118207 = document.querySelector(".encryption-password");
if(cljs.core.truth_(temp__5804__auto___118207)){
var card_preview_el_118208 = temp__5804__auto___118207;
(card_preview_el_118208.style.marginBottom = "0px");
} else {
}

(main_node.style.marginBottom = "0px");

var temp__5804__auto___118209 = goog.dom.getElement("left-sidebar");
if(cljs.core.truth_(temp__5804__auto___118209)){
var left_sidebar_node_118210 = temp__5804__auto___118209;
(left_sidebar_node_118210.style.bottom = "0px");
} else {
}

var temp__5804__auto___118211 = goog.dom.getElementByClass("sidebar-item-list");
if(cljs.core.truth_(temp__5804__auto___118211)){
var right_sidebar_node_118212 = temp__5804__auto___118211;
(right_sidebar_node_118212.style.paddingBottom = "150px");
} else {
}

var temp__5804__auto__ = main_node.querySelector("#mobile-editor-toolbar");
if(cljs.core.truth_(temp__5804__auto__)){
var toolbar = temp__5804__auto__;
return (toolbar.style.bottom = (0));
} else {
return null;
}
} else {
return null;
}
}));
frontend.handler.events.get_ios_app_id = (function frontend$handler$events$get_ios_app_id(repo_url){
if(cljs.core.truth_(repo_url)){
var app_id = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(repo_url,"/Documents")),"/"));
return app_id;
} else {
return null;
}
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"validate-appId","validate-appId",1357498109),(function (p__117862){
var vec__117863 = p__117862;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117863,(0),null);
var graph_switch_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117863,(1),null);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117863,(2),null);
var temp__5804__auto__ = (function (){var or__5043__auto__ = graph;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var deprecated_repo = temp__5804__auto__;
if(frontend.mobile.util.in_iCloud_container_path_QMARK_(deprecated_repo)){
if(cljs.core.truth_(graph_switch_f)){
(graph_switch_f.cljs$core$IFn$_invoke$arity$2 ? graph_switch_f.cljs$core$IFn$_invoke$arity$2(graph,true) : graph_switch_f.call(null,graph,true));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ready","graph/ready",1121782733),frontend.state.get_current_repo()], null));
} else {
return null;
}
} else {
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.events.get_ios_app_id(deprecated_repo),(function (deprecated_app_id){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Filesystem.getUri(({"path": "", "directory": module$node_modules$$capacitor$filesystem$dist$plugin_cjs.Directory.Documents})),(function (current_document_url){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.events.get_ios_app_id(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(current_document_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))),(function (current_app_id){
return promesa.protocols._promise((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deprecated_app_id,current_app_id)){
if(cljs.core.truth_(graph_switch_f)){
(graph_switch_f.cljs$core$IFn$_invoke$arity$2 ? graph_switch_f.cljs$core$IFn$_invoke$arity$2(graph,true) : graph_switch_f.call(null,graph,true));
} else {
}
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Migrating from previous App installation..."], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),true);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.handler.events","migrate-app-id","frontend.handler.events/migrate-app-id",-96029325),new cljs.core.Keyword(null,"from","from",1815293044),deprecated_app_id,new cljs.core.Keyword(null,"to","to",192099007),current_app_id], 0));

frontend.handler.events.file_sync_stop_BANG_();

frontend.mobile.util.fs_watcher.unwatch();

var current_repo_118213 = clojure.string.replace(deprecated_repo,deprecated_app_id,current_app_id);
var current_repo_dir_118214 = frontend.config.get_repo_dir(current_repo_118213);
try{cljs.core.reset_BANG_(frontend.db.conn.conns,cljs.core.update_keys(cljs.core.deref(frontend.db.conn.conns),(function (key){
if(clojure.string.includes_QMARK_(key,deprecated_app_id)){
return clojure.string.replace(key,deprecated_app_id,current_app_id);
} else {
return key;
}
})));

frontend.db.persist.rename_graph_BANG_(deprecated_repo,current_repo_118213);

frontend.search.remove_db_BANG_(deprecated_repo);

frontend.state.add_repo_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),current_repo_118213,new cljs.core.Keyword(null,"nfs?","nfs?",-544337673),true], null));

frontend.state.delete_repo_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),deprecated_repo], null));
}catch (e117866){var e_118215 = e117866;
console.error(e_118215);
}
frontend.state.set_current_repo_BANG_(current_repo_118213);

frontend.db.listen_and_persist_BANG_(current_repo_118213);

frontend.db.persist_if_idle_BANG_(current_repo_118213);

frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1(current_repo_118213);

if(cljs.core.truth_(graph_switch_f)){
(graph_switch_f.cljs$core$IFn$_invoke$arity$2 ? graph_switch_f.cljs$core$IFn$_invoke$arity$2(current_repo_118213,true) : graph_switch_f.call(null,current_repo_118213,true));
} else {
}

frontend.mobile.util.fs_watcher.watch(({"path": current_repo_dir_118214}));

frontend.handler.events.file_sync_restart_BANG_();
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ready","graph/ready",1121782733),frontend.state.get_current_repo()], null));
})()
);
}));
}));
}));
}));
}
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("plugin","consume-updates","plugin/consume-updates",-331798674),(function (p__117867){
var vec__117868 = p__117867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117868,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117868,(1),null);
var prev_pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117868,(2),null);
var updated_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117868,(3),null);
var downloading_QMARK_ = new cljs.core.Keyword("plugin","updates-downloading?","plugin/updates-downloading?",1294108608).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var auto_checking_QMARK_ = frontend.handler.plugin.get_auto_checking_QMARK_();
var temp__5804__auto___118216 = (function (){var and__5041__auto__ = cljs.core.not(downloading_QMARK_);
if(and__5041__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","updates-coming","plugin/updates-coming",104160263),id], null));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto___118216)){
var coming_118217 = temp__5804__auto___118216;
var error_code_118218 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(coming_118217);
var error_code_118219__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error_code_118218,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"no-new-version","no-new-version",-944956961))))?null:error_code_118218);
var title_118220 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(coming_118217);
if(cljs.core.truth_((function (){var and__5041__auto__ = prev_pending_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(auto_checking_QMARK_);
} else {
return and__5041__auto__;
}
})())){
if(cljs.core.not(error_code_118219__$1)){
frontend.components.plugins.set_updates_sub_content_BANG_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_118220),"..."].join(''),(0));
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["[Checked]<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_118220),"> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error_code_118219__$1)].join(''),new cljs.core.Keyword(null,"error","error",-978969032));
}
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = updated_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return downloading_QMARK_;
} else {
return and__5041__auto__;
}
})())){
var temp__5802__auto__ = frontend.state.get_next_selected_coming_update();
if(cljs.core.truth_(temp__5802__auto__)){
var next_coming = temp__5802__auto__;
return frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(next_coming,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-code","error-code",180497232),null], 0)),(function (e){
return console.error("[Download Err]",next_coming,e);
}));
} else {
return frontend.handler.plugin.close_updates_downloading();
}
} else {
var temp__5802__auto__ = cljs.core.second(cljs.core.first(new cljs.core.Keyword("plugin","updates-pending","plugin/updates-pending",-1190878256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state))));
if(cljs.core.truth_(temp__5802__auto__)){
var next_pending = temp__5802__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Updates: take next pending - ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(next_pending)], 0));

return setTimeout((function (){
return frontend.handler.plugin.check_or_update_marketplace_plugin_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(next_pending,new cljs.core.Keyword(null,"only-check","only-check",-1961506795),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-check","auto-check",-393148337),auto_checking_QMARK_,new cljs.core.Keyword(null,"error-code","error-code",180497232),null], 0)),(function (e){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(e.toString(),new cljs.core.Keyword(null,"error","error",-978969032));

return console.error("[Check Err]",next_pending,e);
}));
}),(500));
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = prev_pending_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not(auto_checking_QMARK_)) && (cljs.core.seq(frontend.state.all_available_coming_updates.cljs$core$IFn$_invoke$arity$0())));
} else {
return and__5041__auto__;
}
})())){
frontend.components.plugins.open_waiting_updates_modal_BANG_();
} else {
}

return frontend.handler.plugin.set_auto_checking_BANG_(false);
}
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("plugin","hook-db-tx","plugin/hook-db-tx",1065547419),(function (p__117872){
var vec__117873 = p__117872;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117873,(0),null);
var map__117876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117873,(1),null);
var map__117876__$1 = cljs.core.__destructure_map(map__117876);
var payload = map__117876__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117876__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117876__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.seq(blocks);
if(and__5041__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__117871_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__117871_SHARP_);
}),tx_data)], null)], 0));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var payload__$1 = temp__5804__auto__;
frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"changed","changed",570724917),payload__$1);

return frontend.handler.plugin.hook_plugin_block_changes(payload__$1);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("plugin","loader-perf-tip","plugin/loader-perf-tip",1893085954),(function (p__117877){
var vec__117878 = p__117877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117878,(0),null);
var map__117881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117878,(1),null);
var map__117881__$1 = cljs.core.__destructure_map(map__117881);
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117881__$1,new cljs.core.Keyword(null,"o","o",-1350007228));
var _s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117881__$1,new cljs.core.Keyword(null,"_s","_s",1698028404));
var _e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117881__$1,new cljs.core.Keyword(null,"_e","_e",1598460374));
var temp__5804__auto__ = o.options;
if(cljs.core.truth_(temp__5804__auto__)){
var opts = temp__5804__auto__;
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.plugins.perf_tip_content(o.id,opts.name,opts.url),new cljs.core.Keyword(null,"warning","warning",-1685650671),false,o.id);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mobile-file-watcher","changed","mobile-file-watcher/changed",116978627),(function (p__117882){
var vec__117883 = p__117882;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117883,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117883,(1),null);
var type = event.event;
var payload = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
frontend.fs.watcher_handler.handle_changed_BANG_(type,payload);

if(cljs.core.truth_(frontend.handler.file_sync.enable_sync_QMARK_())){
return frontend.fs.sync.file_watch_handler(type,payload);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rebuild-slash-commands-list","rebuild-slash-commands-list",-639662306),(function (p__117886){
var vec__117887 = p__117886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117887,(0),null);
return (frontend.handler.page.rebuild_slash_commands_list_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.page.rebuild_slash_commands_list_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.page.rebuild_slash_commands_list_BANG_.call(null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577),(function (p__117890){
var vec__117891 = p__117890;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117891,(0),null);
return (frontend.modules.shortcut.core.refresh_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.modules.shortcut.core.refresh_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.modules.shortcut.core.refresh_BANG_.call(null));
}));
frontend.handler.events.refresh_cb = (function frontend$handler$events$refresh_cb(){
frontend.handler.page.create_today_journal_BANG_();

return frontend.handler.events.file_sync_restart_BANG_();
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","ask-for-re-fresh","graph/ask-for-re-fresh",-32382338),(function (_){
return frontend.handler.events.handle.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show","modal/show",-748944018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(700)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sync-from-local-changes-detected","sync-from-local-changes-detected",-1820421680)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),"on",new cljs.core.Keyword(null,"class","class",-2030961996),"ui__modal-enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_modal_BANG_();

return frontend.handler.web.nfs.refresh_BANG_(frontend.state.get_current_repo(),frontend.handler.events.refresh_cb);
})], 0))], null)], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sync","create-remote-graph","sync/create-remote-graph",-1953229831),(function (p__117894){
var vec__117895 = p__117894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117895,(0),null);
var current_repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117895,(1),null);
var graph_name = decodeURI((frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(current_repo) : frontend.util.node_path.basename.call(null,current_repo)));
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_117925){
var state_val_117926 = (state_117925[(1)]);
if((state_val_117926 === (1))){
var inst_117898 = frontend.fs.sync._LT_sync_stop();
var state_117925__$1 = state_117925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117925__$1,(2),inst_117898);
} else {
if((state_val_117926 === (2))){
var inst_117900 = (state_117925[(2)]);
var inst_117901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_117902 = [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword("graph","create-remote?","graph/create-remote?",-1583424902)];
var inst_117903 = (new cljs.core.PersistentVector(null,2,(5),inst_117901,inst_117902,null));
var inst_117904 = frontend.state.set_state_BANG_(inst_117903,true);
var inst_117905 = frontend.handler.file_sync.create_graph(graph_name);
var state_117925__$1 = (function (){var statearr_117927 = state_117925;
(statearr_117927[(7)] = inst_117900);

(statearr_117927[(8)] = inst_117904);

return statearr_117927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117925__$1,(3),inst_117905);
} else {
if((state_val_117926 === (3))){
var inst_117908 = (state_117925[(9)]);
var inst_117907 = (state_117925[(2)]);
var inst_117908__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_117907,(2));
var state_117925__$1 = (function (){var statearr_117928 = state_117925;
(statearr_117928[(9)] = inst_117908__$1);

return statearr_117928;
})();
if(cljs.core.truth_(inst_117908__$1)){
var statearr_117929_118221 = state_117925__$1;
(statearr_117929_118221[(1)] = (4));

} else {
var statearr_117930_118222 = state_117925__$1;
(statearr_117930_118222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117926 === (4))){
var inst_117910 = frontend.fs.sync._LT_sync_start();
var state_117925__$1 = state_117925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117925__$1,(7),inst_117910);
} else {
if((state_val_117926 === (5))){
var state_117925__$1 = state_117925;
var statearr_117931_118223 = state_117925__$1;
(statearr_117931_118223[(2)] = null);

(statearr_117931_118223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_117926 === (6))){
var inst_117923 = (state_117925[(2)]);
var state_117925__$1 = state_117925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_117925__$1,inst_117923);
} else {
if((state_val_117926 === (7))){
var inst_117908 = (state_117925[(9)]);
var inst_117912 = (state_117925[(2)]);
var inst_117913 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_117914 = [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword("graph","create-remote?","graph/create-remote?",-1583424902)];
var inst_117915 = (new cljs.core.PersistentVector(null,2,(5),inst_117913,inst_117914,null));
var inst_117916 = frontend.state.set_state_BANG_(inst_117915,false);
var inst_117917 = (function (){var temp__5804__auto__ = inst_117908;
var GraphUUID = inst_117908;
return (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r),current_repo)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),GraphUUID,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name,new cljs.core.Keyword(null,"remote?","remote?",-517415110),true], 0));
} else {
return r;
}
});
})();
var inst_117918 = frontend.state.get_repos();
var inst_117919 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_117917,inst_117918);
var inst_117920 = frontend.state.set_repos_BANG_(inst_117919);
var state_117925__$1 = (function (){var statearr_117932 = state_117925;
(statearr_117932[(10)] = inst_117912);

(statearr_117932[(11)] = inst_117916);

return statearr_117932;
})();
var statearr_117933_118224 = state_117925__$1;
(statearr_117933_118224[(2)] = inst_117920);

(statearr_117933_118224[(1)] = (6));


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
});
return (function() {
var frontend$handler$events$state_machine__34379__auto__ = null;
var frontend$handler$events$state_machine__34379__auto____0 = (function (){
var statearr_117934 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_117934[(0)] = frontend$handler$events$state_machine__34379__auto__);

(statearr_117934[(1)] = (1));

return statearr_117934;
});
var frontend$handler$events$state_machine__34379__auto____1 = (function (state_117925){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_117925);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e117935){var ex__34382__auto__ = e117935;
var statearr_117936_118225 = state_117925;
(statearr_117936_118225[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_117925[(4)]))){
var statearr_117937_118226 = state_117925;
(statearr_117937_118226[(1)] = cljs.core.first((state_117925[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118227 = state_117925;
state_117925 = G__118227;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$events$state_machine__34379__auto__ = function(state_117925){
switch(arguments.length){
case 0:
return frontend$handler$events$state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$events$state_machine__34379__auto____1.call(this,state_117925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$events$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$events$state_machine__34379__auto____0;
frontend$handler$events$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$events$state_machine__34379__auto____1;
return frontend$handler$events$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_117938 = f__34484__auto__();
(statearr_117938[(6)] = c__34483__auto__);

return statearr_117938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","re-index","graph/re-index",-1506681327),(function (p__117939){
var vec__117940 = p__117939;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117940,(0),null);
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_117949){
var state_val_117950 = (state_117949[(1)]);
if((state_val_117950 === (1))){
var inst_117943 = frontend.fs.sync._LT_sync_stop();
var state_117949__$1 = state_117949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_117949__$1,(2),inst_117943);
} else {
if((state_val_117950 === (2))){
var inst_117945 = (state_117949[(2)]);
var inst_117946 = (function (){return (function (){
frontend.handler.page.create_today_journal_BANG_();

return frontend.handler.events.file_sync_restart_BANG_();
});
})();
var inst_117947 = frontend.handler.repo.re_index_BANG_(frontend.handler.web.nfs.rebuild_index_BANG_,inst_117946);
var state_117949__$1 = (function (){var statearr_117951 = state_117949;
(statearr_117951[(7)] = inst_117945);

return statearr_117951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_117949__$1,inst_117947);
} else {
return null;
}
}
});
return (function() {
var frontend$handler$events$state_machine__34379__auto__ = null;
var frontend$handler$events$state_machine__34379__auto____0 = (function (){
var statearr_117952 = [null,null,null,null,null,null,null,null];
(statearr_117952[(0)] = frontend$handler$events$state_machine__34379__auto__);

(statearr_117952[(1)] = (1));

return statearr_117952;
});
var frontend$handler$events$state_machine__34379__auto____1 = (function (state_117949){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_117949);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e117953){var ex__34382__auto__ = e117953;
var statearr_117954_118228 = state_117949;
(statearr_117954_118228[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_117949[(4)]))){
var statearr_117955_118229 = state_117949;
(statearr_117955_118229[(1)] = cljs.core.first((state_117949[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118230 = state_117949;
state_117949 = G__118230;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$events$state_machine__34379__auto__ = function(state_117949){
switch(arguments.length){
case 0:
return frontend$handler$events$state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$events$state_machine__34379__auto____1.call(this,state_117949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$events$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$events$state_machine__34379__auto____0;
frontend$handler$events$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$events$state_machine__34379__auto____1;
return frontend$handler$events$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_117956 = f__34484__auto__();
(statearr_117956[(6)] = c__34483__auto__);

return statearr_117956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}));
frontend.handler.events.clear_cache_BANG_ = (function frontend$handler$events$clear_cache_BANG_(){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Clearing...",new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["clearCache"], 0)):null),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.idb.clear_local_storage_and_idb_BANG_(),(function (___$1){
return promesa.protocols._promise(setTimeout((function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reloadWindowPage","reloadWindowPage",-363535123)], 0));
} else {
return window.location.reload();
}
}),(2000)));
}));
}));
}));
});
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","clear-cache!","graph/clear-cache!",788497707),(function (p__117957){
var vec__117958 = p__117957;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117958,(0),null);
return frontend.handler.events.clear_cache_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","ask-for-re-index","graph/ask-for-re-index",2038098533),(function (p__117961){
var vec__117962 = p__117961;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117962,(0),null);
var _STAR_multiple_windows_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117962,(1),null);
var ui = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117962,(2),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.atom_QMARK_(_STAR_multiple_windows_QMARK_);
if(and__5041__auto__){
return cljs.core.deref(_STAR_multiple_windows_QMARK_);
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.events.handle.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show","modal/show",-748944018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((ui == null))))?ui:null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-index-multiple-windows-warning","re-index-multiple-windows-warning",-1586754166)], 0))], null)], null)], null));
} else {
return frontend.handler.events.handle.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","show","modal/show",-748944018),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(700)], null)], null),(((!((ui == null))))?ui:null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-index-discard-unsaved-changes-warning","re-index-discard-unsaved-changes-warning",2059145826)], 0))], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"yes","yes",182838819)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),"on",new cljs.core.Keyword(null,"class","class",-2030961996),"ui__modal-enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_modal_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","re-index","graph/re-index",-1506681327)], null));
})], 0))], null)], null));
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","remote-encryption-input-pw-dialog","modal/remote-encryption-input-pw-dialog",1246595794),(function (p__117965){
var vec__117966 = p__117965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117966,(0),null);
var repo_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117966,(1),null);
var remote_graph_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117966,(2),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117966,(3),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117966,(4),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.encryption.input_password.cljs$core$IFn$_invoke$arity$3(repo_url,null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(remote_graph_info,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5043__auto__ = type;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-pwd-remote","create-pwd-remote",-1888366296);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repo","repo",-1999060679),repo_url], 0)),opts], 0))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false,new cljs.core.Keyword(null,"close-backdrop?","close-backdrop?",2081649802),false], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("journal","insert-template","journal/insert-template",-1273735332),(function (p__117969){
var vec__117970 = p__117969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117970,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117970,(1),null);
var page_name__$1 = (frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page_name) : frontend.util.page_name_sanity_lc.call(null,page_name));
var temp__5804__auto__ = (function (){var G__117973 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),page_name__$1], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__117973) : frontend.db.pull.call(null,G__117973));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
if(cljs.core.truth_((function (){var G__117974 = frontend.state.get_current_repo();
var G__117975 = page_name__$1;
return (frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2 ? frontend.db.page_empty_QMARK_.cljs$core$IFn$_invoke$arity$2(G__117974,G__117975) : frontend.db.page_empty_QMARK_.call(null,G__117974,G__117975));
})())){
var temp__5804__auto____$1 = frontend.state.get_default_journal_template();
if(cljs.core.truth_(temp__5804__auto____$1)){
var template = temp__5804__auto____$1;
return frontend.handler.editor.insert_template_BANG_.cljs$core$IFn$_invoke$arity$3(null,template,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),page], null));
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
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","set-org-mode-heading","editor/set-org-mode-heading",2118193810),(function (p__117976){
var vec__117977 = p__117976;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117977,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117977,(1),null);
var heading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117977,(2),null);
var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return frontend.handler.editor.set_heading_BANG_(id,heading);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file-sync-graph","restore-file","file-sync-graph/restore-file",691096310),(function (p__117980){
var vec__117981 = p__117980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117981,(0),null);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117981,(1),null);
var page_entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117981,(2),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117981,(3),null);
if(cljs.core.truth_((frontend.db.get_db.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_db.cljs$core$IFn$_invoke$arity$1(graph) : frontend.db.get_db.call(null,graph)))){
var file = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page_entity);
var temp__5804__auto__ = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(temp__5804__auto__)){
var path = temp__5804__auto__;
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content,new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file));
if(and__5041__auto__){
return new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file);
} else {
return and__5041__auto__;
}
})())){
frontend.fs.sync.add_new_version_file(graph,path,new cljs.core.Keyword("file","content","file/content",12680964).cljs$core$IFn$_invoke$arity$1(file));
} else {
}

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.alter_file(graph,path,content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true,new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)),(function (___$1){
return promesa.protocols._promise((function (){
frontend.state.close_modal_BANG_();

return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page_entity)], null)], null));
})()
);
}));
}));
} else {
return null;
}
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("whiteboard","onboarding","whiteboard/onboarding",-1343828989),(function (p__117984){
var vec__117985 = p__117984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117985,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117985,(1),null);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (close_fn){
return frontend.components.whiteboard.onboarding_welcome(close_fn);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false,new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"close-backdrop?","close-backdrop?",2081649802),false], null),opts], 0)));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file-sync","onboarding-tip","file-sync/onboarding-tip",-1267073709),(function (p__117988){
var vec__117989 = p__117988;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117989,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117989,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117989,(2),null);
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.components.file_sync.make_onboarding_panel(type__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false,new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"close-backdrop?","close-backdrop?",2081649802),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,new cljs.core.Keyword(null,"welcome","welcome",-578152123))], null),opts], 0)));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file-sync","maybe-onboarding-show","file-sync/maybe-onboarding-show",1562674517),(function (p__117992){
var vec__117993 = p__117992;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117993,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117993,(1),null);
return frontend.components.file_sync.maybe_onboarding_show(type);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file-sync","storage-exceed-limit","file-sync/storage-exceed-limit",2112370143),(function (p__117996){
var vec__117997 = p__117996;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117997,(0),null);
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("file sync storage exceed limit",new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return frontend.handler.events.file_sync_stop_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file-sync","graph-count-exceed-limit","file-sync/graph-count-exceed-limit",182223148),(function (p__118000){
var vec__118001 = p__118000;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118001,(0),null);
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("file sync graph count exceed limit",new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return frontend.handler.events.file_sync_stop_BANG_();
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","restored","graph/restored",1296384092),(function (p__118004){
var vec__118005 = p__118004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118005,(0),null);
var _graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118005,(1),null);
frontend.mobile.core.init_BANG_();

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return null;
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ready","graph/ready",1121782733),frontend.state.get_current_repo()], null));
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"whiteboard-link","whiteboard-link",467575349),(function (p__118008){
var vec__118009 = p__118008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118009,(0),null);
var shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118009,(1),null);
frontend.handler.route.go_to_search_BANG_(new cljs.core.Keyword("whiteboard","link","whiteboard/link",-2040799017));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("whiteboard","linked-shapes","whiteboard/linked-shapes",-1743561352),shapes);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"whiteboard-go-to-link","whiteboard-go-to-link",855027368),(function (p__118012){
var vec__118013 = p__118012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118013,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118013,(1),null);
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),link], null)], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","dir-gone","graph/dir-gone",-796087345),(function (p__118016){
var vec__118017 = p__118016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118017,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118017,(1),null);
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["The directory ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)," has been renamed or deleted, the editor will be disabled for this graph, you can unlink the graph."].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));

return frontend.state.update_state_BANG_(new cljs.core.Keyword("file","unlinked-dirs","file/unlinked-dirs",-1488422337),(function (dirs){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dirs,dir);
}));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","dir-back","graph/dir-back",-1720939782),(function (p__118020){
var vec__118021 = p__118020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118021,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118021,(1),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118021,(2),null);
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("file","unlinked-dirs","file/unlinked-dirs",-1488422337).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)),dir)){
frontend.handler.notification.clear_all_BANG_();

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),["The directory ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)," has been back, you can edit your graph now."].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"clear?","clear?",1363344639),true], null)], null));

frontend.state.update_state_BANG_(new cljs.core.Keyword("file","unlinked-dirs","file/unlinked-dirs",-1488422337),(function (dirs){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(dirs,dir);
}));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir,frontend.config.get_repo_dir(repo))){
return frontend.fs.watch_dir_BANG_.cljs$core$IFn$_invoke$arity$1(dir);
} else {
return null;
}
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("ui","notify-outdated-filename-format","ui/notify-outdated-filename-format",-1024395357),(function (p__118024){
var vec__118025 = p__118024;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118025,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118025,(1),null);
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-semibold.mb-4.text-xl","div.font-semibold.mb-4.text-xl",-231639327),"It seems that some of your filenames are in the outdated format."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"We suggest you upgrade now to avoid potential bugs."], null),((cljs.core.seq(paths))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For example, the files below have reserved characters that can't be synced on some platforms."], null):null)], null)], null),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Update filename format",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Update filename format",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.handler.notification.clear_all_BANG_();

return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (___$1){
return frontend.components.conversion.files_breaking_changed();
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"filename-format-panel","filename-format-panel",-424080600),new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
})], 0)),((cljs.core.seq(paths))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.my-2","ol.my-2",2118515659),(function (){var iter__5520__auto__ = (function frontend$handler$events$iter__118028(s__118029){
return (new cljs.core.LazySeq(null,(function (){
var s__118029__$1 = s__118029;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__118029__$1);
if(temp__5804__auto__){
var s__118029__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__118029__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__118029__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__118031 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__118030 = (0);
while(true){
if((i__118030 < size__5519__auto__)){
var path = cljs.core._nth(c__5518__auto__,i__118030);
cljs.core.chunk_append(b__118031,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),path], null));

var G__118231 = (i__118030 + (1));
i__118030 = G__118231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__118031),frontend$handler$events$iter__118028(cljs.core.chunk_rest(s__118029__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__118031),null);
}
} else {
var path = cljs.core.first(s__118029__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),path], null),frontend$handler$events$iter__118028(cljs.core.rest(s__118029__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(paths);
})()], null):null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("ui","notify-skipped-downloading-files","ui/notify-skipped-downloading-files",-1655942465),(function (p__118032){
var vec__118033 = p__118032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118033,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118033,(1),null);
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-semibold.mb-4.text-xl","div.font-semibold.mb-4.text-xl",-231639327),"It seems that some of your filenames are in the outdated format."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The files below that have reserved characters can't be saved on this device."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-y-auto.max-h-96","div.overflow-y-auto.max-h-96",770942221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.my-2","ol.my-2",2118515659),(function (){var iter__5520__auto__ = (function frontend$handler$events$iter__118036(s__118037){
return (new cljs.core.LazySeq(null,(function (){
var s__118037__$1 = s__118037;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__118037__$1);
if(temp__5804__auto__){
var s__118037__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__118037__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__118037__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__118039 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__118038 = (0);
while(true){
if((i__118038 < size__5519__auto__)){
var path = cljs.core._nth(c__5518__auto__,i__118038);
cljs.core.chunk_append(b__118039,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),path], null));

var G__118232 = (i__118038 + (1));
i__118038 = G__118232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__118039),frontend$handler$events$iter__118036(cljs.core.chunk_rest(s__118037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__118039),null);
}
} else {
var path = cljs.core.first(s__118037__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),path], null),frontend$handler$events$iter__118036(cljs.core.rest(s__118037__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(paths);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Check ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.logseq.com/#/page/logseq%20file%20and%20folder%20naming%20rules",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Logseq file and folder naming rules"], null)," for more details."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("To solve this problem, we suggest you quit Logseq and update the filename format (on Settings > Advanced > Filename format > click EDIT button)%s to avoid more potential bugs.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.mac_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.mobile.util.native_ios_QMARK_());
} else {
return and__5041__auto__;
}
})())?"":" in other devices")], 0))], null)], null)], null)], null),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("graph","setup-a-repo","graph/setup-a-repo",992514529),(function (p__118040){
var vec__118041 = p__118040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118041,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118041,(1),null);
var opts_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"picked-root-fn","picked-root-fn",42247568),(function (){
return frontend.state.close_modal_BANG_();
}),new cljs.core.Keyword(null,"native-icloud?","native-icloud?",-1892335688),(!(clojure.string.blank_QMARK_(frontend.state.get_icloud_container_root_url()))),new cljs.core.Keyword(null,"logged?","logged?",-814149905),frontend.handler.user.logged_in_QMARK_()], null),opts], 0));
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.mobile.graph_picker.graph_picker_cp(opts_SINGLEQUOTE_);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"graph-setup"], null));
} else {
return frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.modules.shortcut.core.refresh_BANG_,opts_SINGLEQUOTE_);
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file","alter","file/alter",1559248582),(function (p__118044){
var vec__118045 = p__118044;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118045,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118045,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118045,(2),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118045,(3),null);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.handler.file.alter_file(repo,path,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from-disk?","from-disk?",-1991074161),true], null)),(function (___$1){
return promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0());
}));
}));
}));
frontend.handler.events.file_id_conflict_item = rum.core.lazy_build(rum.core.build_defcs,(function (state,repo,file,data){
var resolved_QMARK_ = new cljs.core.Keyword("frontend.handler.events","resolved?","frontend.handler.events/resolved?",1860281638).cljs$core$IFn$_invoke$arity$1(state);
var id = cljs.core.last(new cljs.core.Keyword(null,"assertion","assertion",-1645134882).cljs$core$IFn$_invoke$arity$1(data));
return daiquiri.core.create_element("li",{'key':file},[daiquiri.core.create_element("div",null,[daiquiri.core.create_element("a",{'onClick':(function (){
return window.apis.openPath(file);
})},[daiquiri.interpreter.interpret(file)]),(cljs.core.truth_(cljs.core.deref(resolved_QMARK_))?(function (){var attrs118048 = frontend.ui.icon("circle-check",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs118048))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","items-center"], null)], null),attrs118048], 0))):{'className':"flex flex-row items-center"}),((cljs.core.map_QMARK_(attrs118048))?[daiquiri.core.create_element("div",{'className':"ml-1"},["Resolved"])]:[daiquiri.interpreter.interpret(attrs118048),daiquiri.core.create_element("div",{'className':"ml-1"},["Resolved"])]));
})():daiquiri.core.create_element("div",null,[daiquiri.core.create_element("p",null,[["It seems that another whiteboard file already has the ID \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"\". You can fix it by changing the ID in this file with another UUID."].join('')]),daiquiri.core.create_element("p",null,["Or, let me",daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Fix",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var dir = frontend.config.get_repo_dir(repo);
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(dir,file),(function (content){
return promesa.protocols._promise((function (){var new_content = clojure.string.replace(content,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto____$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_file_BANG_(repo,dir,file,new_content,cljs.core.PersistentArrayMap.EMPTY),(function (_){
return promesa.protocols._promise(cljs.core.reset_BANG_(resolved_QMARK_,true));
}));
}));
})());
}));
}));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"inline mx-1"], 0))),"it."])]))])]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.handler.events","resolved?","frontend.handler.events/resolved?",1860281638))], null),"frontend.handler.events/file-id-conflict-item");
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("file","parse-and-load-error","file/parse-and-load-error",-808105720),(function (p__118053){
var vec__118054 = p__118053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118054,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118054,(1),null);
var parse_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118054,(2),null);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.title","h2.title",866247517),"Oops. These files failed to import to your graph:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.my-2","ol.my-2",2118515659),(function (){var iter__5520__auto__ = (function frontend$handler$events$iter__118057(s__118058){
return (new cljs.core.LazySeq(null,(function (){
var s__118058__$1 = s__118058;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__118058__$1);
if(temp__5804__auto__){
var s__118058__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__118058__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__118058__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__118060 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__118059 = (0);
while(true){
if((i__118059 < size__5519__auto__)){
var vec__118061 = cljs.core._nth(c__5518__auto__,i__118059);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118061,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118061,(1),null);
cljs.core.chunk_append(b__118060,(function (){var data = cljs.core.ex_data(error);
if(cljs.core.truth_((function (){var and__5041__auto__ = logseq.graph_parser.config.whiteboard_QMARK_(file);
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core.uuid_QMARK_(cljs.core.last(new cljs.core.Keyword(null,"assertion","assertion",-1645134882).cljs$core$IFn$_invoke$arity$1(data)))));
} else {
return and__5041__auto__;
}
})())){
return rum.core.with_key(frontend.handler.events.file_id_conflict_item(repo,file,data),file);
} else {
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("file","parse-and-load-error","file/parse-and-load-error",-808105720)], null)], null)], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.my-1","li.my-1",-949403355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__118059,data,vec__118061,file,error,c__5518__auto__,size__5519__auto__,b__118060,s__118058__$2,temp__5804__auto__,vec__118054,_,repo,parse_errors){
return (function (){
return window.apis.openPath(file);
});})(i__118059,data,vec__118061,file,error,c__5518__auto__,size__5519__auto__,b__118060,s__118058__$2,temp__5804__auto__,vec__118054,_,repo,parse_errors))
], null),file], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),error.message], null)], null);

}
})());

var G__118233 = (i__118059 + (1));
i__118059 = G__118233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__118060),frontend$handler$events$iter__118057(cljs.core.chunk_rest(s__118058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__118060),null);
}
} else {
var vec__118064 = cljs.core.first(s__118058__$2);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118064,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118064,(1),null);
return cljs.core.cons((function (){var data = cljs.core.ex_data(error);
if(cljs.core.truth_((function (){var and__5041__auto__ = logseq.graph_parser.config.whiteboard_QMARK_(file);
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core.uuid_QMARK_(cljs.core.last(new cljs.core.Keyword(null,"assertion","assertion",-1645134882).cljs$core$IFn$_invoke$arity$1(data)))));
} else {
return and__5041__auto__;
}
})())){
return rum.core.with_key(frontend.handler.events.file_id_conflict_item(repo,file,data),file);
} else {
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("file","parse-and-load-error","file/parse-and-load-error",-808105720)], null)], null)], null));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.my-1","li.my-1",-949403355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),file], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (data,vec__118064,file,error,s__118058__$2,temp__5804__auto__,vec__118054,_,repo,parse_errors){
return (function (){
return window.apis.openPath(file);
});})(data,vec__118064,file,error,s__118058__$2,temp__5804__auto__,vec__118054,_,repo,parse_errors))
], null),file], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),error.message], null)], null);

}
})(),frontend$handler$events$iter__118057(cljs.core.rest(s__118058__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(parse_errors);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Don't forget to re-index your graph when all the conflicts are resolved."], null)], null),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("run","cli-command","run/cli-command",503686384),(function (p__118067){
var vec__118068 = p__118067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118068,(0),null);
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118068,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118068,(2),null);
if(cljs.core.truth_((function (){var and__5041__auto__ = command;
if(cljs.core.truth_(and__5041__auto__)){
return (!(clojure.string.blank_QMARK_(content)));
} else {
return and__5041__auto__;
}
})())){
return frontend.handler.shell.run_cli_command_wrapper_BANG_(command,content);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("whiteboard","undo","whiteboard/undo",-2067979761),(function (p__118071){
var vec__118072 = p__118071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118072,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118072,(1),null);
return frontend.handler.whiteboard.undo_BANG_(e);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("whiteboard","redo","whiteboard/redo",225581989),(function (p__118075){
var vec__118076 = p__118075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118076,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118076,(1),null);
return frontend.handler.whiteboard.redo_BANG_(e);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","quick-capture","editor/quick-capture",799865811),(function (p__118079){
var vec__118080 = p__118079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118080,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118080,(1),null);
return frontend.quick_capture.quick_capture(args);
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("modal","keymap","modal/keymap",-57371819),(function (p__118083){
var vec__118084 = p__118083;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118084,(0),null);
return frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keymap","keymap",-499605268));
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),(function (p__118088){
var vec__118089 = p__118088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118089,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118089,(1),null);
var batch_QMARK_ = cljs.core.sequential_QMARK_(blocks);
var blocks__$1 = (function (){var G__118092 = blocks;
if(batch_QMARK_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__118087_SHARP_){
var G__118093 = p1__118087_SHARP_;
if(((cljs.core.uuid_QMARK_(p1__118087_SHARP_)) || (typeof p1__118087_SHARP_ === 'string'))){
return frontend.db.model.get_block_by_uuid(G__118093);
} else {
return G__118093;
}
}),G__118092);
} else {
return G__118092;
}
})();
if(((batch_QMARK_) && ((cljs.core.count(blocks__$1) > (1))))){
return frontend.handler.editor.toggle_blocks_as_own_order_list_BANG_(blocks__$1);
} else {
var temp__5804__auto__ = (function (){var G__118094 = blocks__$1;
if(batch_QMARK_){
return cljs.core.first(G__118094);
} else {
return G__118094;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
if(frontend.handler.editor.own_order_number_list_QMARK_(block)){
return frontend.handler.editor.remove_block_own_order_list_type_BANG_(block);
} else {
return frontend.handler.editor.make_block_as_own_order_list_BANG_(block);
}
} else {
return null;
}
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","remove-own-number-list","editor/remove-own-number-list",-492965226),(function (p__118095){
var vec__118096 = p__118095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118096,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118096,(1),null);
if(cljs.core.truth_((function (){var G__118099 = block;
if((G__118099 == null)){
return null;
} else {
return frontend.handler.editor.own_order_number_list_QMARK_(G__118099);
}
})())){
return frontend.handler.editor.remove_block_own_order_list_type_BANG_(block);
} else {
return null;
}
}));
frontend.handler.events.handle.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("editor","toggle-children-number-list","editor/toggle-children-number-list",-1804483433),(function (p__118100){
var vec__118101 = p__118100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118101,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118101,(1),null);
var temp__5804__auto__ = (function (){var and__5041__auto__ = block;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.db.model.get_block_immediate_children(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var blocks = temp__5804__auto__;
return frontend.handler.editor.toggle_blocks_as_own_order_list_BANG_(blocks);
} else {
return null;
}
}));
frontend.handler.events.run_BANG_ = (function frontend$handler$events$run_BANG_(){
var chan = frontend.state.get_events_chan();
var c__34483__auto___118234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_118132){
var state_val_118133 = (state_118132[(1)]);
if((state_val_118133 === (1))){
var state_118132__$1 = state_118132;
var statearr_118134_118235 = state_118132__$1;
(statearr_118134_118235[(2)] = null);

(statearr_118134_118235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118133 === (2))){
var state_118132__$1 = state_118132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118132__$1,(4),chan);
} else {
if((state_val_118133 === (3))){
var inst_118130 = (state_118132[(2)]);
var state_118132__$1 = state_118132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118132__$1,inst_118130);
} else {
if((state_val_118133 === (4))){
var inst_118109 = (state_118132[(7)]);
var inst_118109__$1 = (state_118132[(2)]);
var inst_118110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_118109__$1,(0),null);
var inst_118111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_118109__$1,(1),null);
var state_118132__$1 = (function (){var statearr_118135 = state_118132;
(statearr_118135[(7)] = inst_118109__$1);

(statearr_118135[(8)] = inst_118110);

(statearr_118135[(9)] = inst_118111);

return statearr_118135;
})();
var statearr_118136_118236 = state_118132__$1;
(statearr_118136_118236[(2)] = null);

(statearr_118136_118236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118133 === (5))){
var inst_118110 = (state_118132[(8)]);
var _ = (function (){var statearr_118137 = state_118132;
(statearr_118137[(4)] = cljs.core.cons((8),(state_118132[(4)])));

return statearr_118137;
})();
var inst_118119 = frontend.handler.events.handle.cljs$core$IFn$_invoke$arity$1(inst_118110);
var inst_118120 = promesa.core.resolved(inst_118119);
var ___$1 = (function (){var statearr_118138 = state_118132;
(statearr_118138[(4)] = cljs.core.rest((state_118132[(4)])));

return statearr_118138;
})();
var state_118132__$1 = state_118132;
var statearr_118139_118237 = state_118132__$1;
(statearr_118139_118237[(2)] = inst_118120);

(statearr_118139_118237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118133 === (6))){
var inst_118109 = (state_118132[(7)]);
var inst_118110 = (state_118132[(8)]);
var inst_118111 = (state_118132[(9)]);
var inst_118123 = (state_118132[(2)]);
var inst_118124 = (function (){var vec__118105 = inst_118109;
var payload = inst_118110;
var d = inst_118111;
return (function (result){
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(d,result);
});
})();
var inst_118125 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_118123,inst_118124);
var inst_118126 = (function (){var vec__118105 = inst_118109;
var payload = inst_118110;
var d = inst_118111;
return (function (error){
var type = new cljs.core.Keyword("handle-system-events","failed","handle-system-events/failed",-2079184624);
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null)], null)], null));

return promesa.core.reject_BANG_(d,error);
});
})();
var inst_118127 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_118125,inst_118126);
var state_118132__$1 = (function (){var statearr_118141 = state_118132;
(statearr_118141[(10)] = inst_118127);

return statearr_118141;
})();
var statearr_118142_118238 = state_118132__$1;
(statearr_118142_118238[(2)] = null);

(statearr_118142_118238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118133 === (7))){
var inst_118112 = (state_118132[(2)]);
var inst_118113 = promesa.core.rejected(inst_118112);
var state_118132__$1 = state_118132;
var statearr_118143_118239 = state_118132__$1;
(statearr_118143_118239[(2)] = inst_118113);

(statearr_118143_118239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118133 === (8))){
var _ = (function (){var statearr_118144 = state_118132;
(statearr_118144[(4)] = cljs.core.rest((state_118132[(4)])));

return statearr_118144;
})();
var state_118132__$1 = state_118132;
var ex118140 = (state_118132__$1[(2)]);
var statearr_118145_118240 = state_118132__$1;
(statearr_118145_118240[(5)] = ex118140);


var statearr_118146_118241 = state_118132__$1;
(statearr_118146_118241[(1)] = (7));

(statearr_118146_118241[(5)] = null);



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
});
return (function() {
var frontend$handler$events$run_BANG__$_state_machine__34379__auto__ = null;
var frontend$handler$events$run_BANG__$_state_machine__34379__auto____0 = (function (){
var statearr_118147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_118147[(0)] = frontend$handler$events$run_BANG__$_state_machine__34379__auto__);

(statearr_118147[(1)] = (1));

return statearr_118147;
});
var frontend$handler$events$run_BANG__$_state_machine__34379__auto____1 = (function (state_118132){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_118132);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e118148){var ex__34382__auto__ = e118148;
var statearr_118149_118242 = state_118132;
(statearr_118149_118242[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_118132[(4)]))){
var statearr_118150_118243 = state_118132;
(statearr_118150_118243[(1)] = cljs.core.first((state_118132[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__118244 = state_118132;
state_118132 = G__118244;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$events$run_BANG__$_state_machine__34379__auto__ = function(state_118132){
switch(arguments.length){
case 0:
return frontend$handler$events$run_BANG__$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$events$run_BANG__$_state_machine__34379__auto____1.call(this,state_118132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$events$run_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$events$run_BANG__$_state_machine__34379__auto____0;
frontend$handler$events$run_BANG__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$events$run_BANG__$_state_machine__34379__auto____1;
return frontend$handler$events$run_BANG__$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_118151 = f__34484__auto__();
(statearr_118151[(6)] = c__34483__auto___118234);

return statearr_118151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return chan;
});

//# sourceMappingURL=frontend.handler.events.js.map
