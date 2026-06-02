goog.provide('frontend.handler.file_sync');
var module$node_modules$path$path=shadow.js.require("module$node_modules$path$path", {});
frontend.handler.file_sync._STAR_beta_unavailable_QMARK_ = cljs.core.volatile_BANG_(false);
frontend.handler.file_sync.refresh_file_sync_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
frontend.handler.file_sync.get_current_graph_uuid = (function frontend$handler$file_sync$get_current_graph_uuid(){
return frontend.state.get_current_file_sync_graph_uuid();
});
frontend.handler.file_sync.enable_sync_QMARK_ = (function frontend$handler$file_sync$enable_sync_QMARK_(){
var or__5043__auto__ = frontend.state.enable_sync_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.config.dev_QMARK_;
}
});
frontend.handler.file_sync.current_graph_sync_on_QMARK_ = (function frontend$handler$file_sync$current_graph_sync_on_QMARK_(){
var temp__5804__auto__ = frontend.state.sub_file_sync_state(frontend.state.get_current_file_sync_graph_uuid());
if(cljs.core.truth_(temp__5804__auto__)){
var sync_state = temp__5804__auto__;
return (!(frontend.fs.sync.sync_state__stopped_QMARK_(sync_state)));
} else {
return null;
}
});
frontend.handler.file_sync.synced_file_graph_QMARK_ = (function frontend$handler$file_sync$synced_file_graph_QMARK_(graph){
return cljs.core.some((function (item){
var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item));
if(and__5041__auto__){
return new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(item);
} else {
return and__5041__auto__;
}
}),frontend.state.get_repos());
});
frontend.handler.file_sync.create_graph = (function frontend$handler$file_sync$create_graph(name){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_107697){
var state_val_107698 = (state_107697[(1)]);
if((state_val_107698 === (7))){
var inst_107624 = (state_107697[(7)]);
var state_107697__$1 = state_107697;
var statearr_107699_108144 = state_107697__$1;
(statearr_107699_108144[(2)] = inst_107624);

(statearr_107699_108144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (20))){
var inst_107660 = (state_107697[(8)]);
var state_107697__$1 = state_107697;
var statearr_107700_108145 = state_107697__$1;
(statearr_107700_108145[(2)] = inst_107660);

(statearr_107700_108145[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (27))){
var state_107697__$1 = state_107697;
var statearr_107701_108146 = state_107697__$1;
(statearr_107701_108146[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (1))){
var inst_107619 = frontend.fs.sync._LT_create_graph(frontend.fs.sync.remoteapi,name);
var state_107697__$1 = state_107697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107697__$1,(2),inst_107619);
} else {
if((state_val_107698 === (24))){
var inst_107635 = (state_107697[(9)]);
var inst_107668 = [(404),null,(400),null];
var inst_107669 = (new cljs.core.PersistentArrayMap(null,2,inst_107668,null));
var inst_107670 = (new cljs.core.PersistentHashSet(null,inst_107669,null));
var inst_107671 = cljs.core.ex_data(inst_107635);
var inst_107672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107673 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_107674 = (new cljs.core.PersistentVector(null,2,(5),inst_107672,inst_107673,null));
var inst_107675 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_107671,inst_107674);
var inst_107676 = cljs.core.contains_QMARK_(inst_107670,inst_107675);
var state_107697__$1 = state_107697;
if(inst_107676){
var statearr_107703_108147 = state_107697__$1;
(statearr_107703_108147[(1)] = (26));

} else {
var statearr_107704_108148 = state_107697__$1;
(statearr_107704_108148[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (4))){
var inst_107621 = (state_107697[(10)]);
var state_107697__$1 = state_107697;
var statearr_107705_108149 = state_107697__$1;
(statearr_107705_108149[(2)] = inst_107621);

(statearr_107705_108149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (15))){
var inst_107645 = (state_107697[(2)]);
var state_107697__$1 = state_107697;
if(cljs.core.truth_(inst_107645)){
var statearr_107706_108150 = state_107697__$1;
(statearr_107706_108150[(1)] = (16));

} else {
var statearr_107707_108151 = state_107697__$1;
(statearr_107707_108151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (21))){
var inst_107635 = (state_107697[(9)]);
var inst_107663 = frontend.fs.sync.graph_count_exceed_limit_QMARK_(inst_107635);
var state_107697__$1 = state_107697;
var statearr_107708_108152 = state_107697__$1;
(statearr_107708_108152[(2)] = inst_107663);

(statearr_107708_108152[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (31))){
var inst_107687 = (state_107697[(2)]);
var state_107697__$1 = state_107697;
var statearr_107709_108153 = state_107697__$1;
(statearr_107709_108153[(2)] = inst_107687);

(statearr_107709_108153[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (13))){
var inst_107635 = (state_107697[(9)]);
var inst_107642 = typeof inst_107635 === 'string';
var state_107697__$1 = state_107697;
var statearr_107710_108154 = state_107697__$1;
(statearr_107710_108154[(2)] = inst_107642);

(statearr_107710_108154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (22))){
var inst_107665 = (state_107697[(2)]);
var state_107697__$1 = state_107697;
if(cljs.core.truth_(inst_107665)){
var statearr_107711_108155 = state_107697__$1;
(statearr_107711_108155[(1)] = (23));

} else {
var statearr_107712_108156 = state_107697__$1;
(statearr_107712_108156[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (29))){
var inst_107635 = (state_107697[(9)]);
var inst_107682 = cljs.core.ex_message(inst_107635);
var inst_107683 = ["Create graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_107682)].join('');
var inst_107684 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(inst_107683,new cljs.core.Keyword(null,"warning","warning",-1685650671),true,null,(4000),null);
var state_107697__$1 = state_107697;
var statearr_107713_108157 = state_107697__$1;
(statearr_107713_108157[(2)] = inst_107684);

(statearr_107713_108157[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (6))){
var inst_107624 = (state_107697[(7)]);
var inst_107635 = (state_107697[(2)]);
var inst_107636 = (inst_107624 instanceof cljs.core.ExceptionInfo);
var state_107697__$1 = (function (){var statearr_107714 = state_107697;
(statearr_107714[(9)] = inst_107635);

return statearr_107714;
})();
if(cljs.core.truth_(inst_107636)){
var statearr_107715_108158 = state_107697__$1;
(statearr_107715_108158[(1)] = (10));

} else {
var statearr_107716_108159 = state_107697__$1;
(statearr_107716_108159[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (28))){
var inst_107689 = (state_107697[(2)]);
var state_107697__$1 = state_107697;
var statearr_107717_108160 = state_107697__$1;
(statearr_107717_108160[(2)] = inst_107689);

(statearr_107717_108160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (25))){
var inst_107691 = (state_107697[(2)]);
var state_107697__$1 = state_107697;
var statearr_107718_108161 = state_107697__$1;
(statearr_107718_108161[(2)] = inst_107691);

(statearr_107718_108161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (17))){
var inst_107635 = (state_107697[(9)]);
var inst_107660 = (state_107697[(8)]);
var inst_107656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107657 = [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword("graph","create-remote?","graph/create-remote?",-1583424902)];
var inst_107658 = (new cljs.core.PersistentVector(null,2,(5),inst_107656,inst_107657,null));
var inst_107659 = frontend.state.set_state_BANG_(inst_107658,false);
var inst_107660__$1 = frontend.fs.sync.storage_exceed_limit_QMARK_(inst_107635);
var state_107697__$1 = (function (){var statearr_107719 = state_107697;
(statearr_107719[(11)] = inst_107659);

(statearr_107719[(8)] = inst_107660__$1);

return statearr_107719;
})();
if(cljs.core.truth_(inst_107660__$1)){
var statearr_107720_108162 = state_107697__$1;
(statearr_107720_108162[(1)] = (20));

} else {
var statearr_107721_108163 = state_107697__$1;
(statearr_107721_108163[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (3))){
var inst_107621 = (state_107697[(10)]);
var inst_107624 = (state_107697[(2)]);
var inst_107625 = (inst_107621 instanceof cljs.core.ExceptionInfo);
var state_107697__$1 = (function (){var statearr_107722 = state_107697;
(statearr_107722[(7)] = inst_107624);

return statearr_107722;
})();
if(cljs.core.truth_(inst_107625)){
var statearr_107723_108164 = state_107697__$1;
(statearr_107723_108164[(1)] = (4));

} else {
var statearr_107724_108165 = state_107697__$1;
(statearr_107724_108165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (12))){
var inst_107695 = (state_107697[(2)]);
var state_107697__$1 = state_107697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_107697__$1,inst_107695);
} else {
if((state_val_107698 === (2))){
var inst_107621 = (state_107697[(2)]);
var inst_107622 = frontend.handler.user._LT_user_uuid();
var state_107697__$1 = (function (){var statearr_107725 = state_107697;
(statearr_107725[(10)] = inst_107621);

return statearr_107725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107697__$1,(3),inst_107622);
} else {
if((state_val_107698 === (23))){
var state_107697__$1 = state_107697;
var statearr_107726_108166 = state_107697__$1;
(statearr_107726_108166[(2)] = null);

(statearr_107726_108166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (19))){
var inst_107650 = (state_107697[(12)]);
var inst_107653 = (state_107697[(2)]);
var inst_107654 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_107697__$1 = (function (){var statearr_107727 = state_107697;
(statearr_107727[(13)] = inst_107653);

(statearr_107727[(14)] = inst_107654);

return statearr_107727;
})();
var statearr_107728_108167 = state_107697__$1;
(statearr_107728_108167[(2)] = inst_107650);

(statearr_107728_108167[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (11))){
var inst_107635 = (state_107697[(9)]);
var inst_107640 = (state_107697[(15)]);
var inst_107639 = (inst_107635 instanceof cljs.core.ExceptionInfo);
var inst_107640__$1 = cljs.core.not(inst_107639);
var state_107697__$1 = (function (){var statearr_107729 = state_107697;
(statearr_107729[(15)] = inst_107640__$1);

return statearr_107729;
})();
if(inst_107640__$1){
var statearr_107730_108168 = state_107697__$1;
(statearr_107730_108168[(1)] = (13));

} else {
var statearr_107731_108169 = state_107697__$1;
(statearr_107731_108169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (9))){
var inst_107633 = (state_107697[(2)]);
var state_107697__$1 = state_107697;
var statearr_107732_108170 = state_107697__$1;
(statearr_107732_108170[(2)] = inst_107633);

(statearr_107732_108170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (5))){
var inst_107624 = (state_107697[(7)]);
var inst_107628 = (inst_107624 instanceof cljs.core.ExceptionInfo);
var state_107697__$1 = state_107697;
if(cljs.core.truth_(inst_107628)){
var statearr_107733_108171 = state_107697__$1;
(statearr_107733_108171[(1)] = (7));

} else {
var statearr_107734_108172 = state_107697__$1;
(statearr_107734_108172[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (14))){
var inst_107640 = (state_107697[(15)]);
var state_107697__$1 = state_107697;
var statearr_107735_108173 = state_107697__$1;
(statearr_107735_108173[(2)] = inst_107640);

(statearr_107735_108173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (26))){
var inst_107678 = ["Create graph failed: already existed graph: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
var inst_107679 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$6(inst_107678,new cljs.core.Keyword(null,"warning","warning",-1685650671),true,null,(4000),null);
var state_107697__$1 = state_107697;
var statearr_107736_108174 = state_107697__$1;
(statearr_107736_108174[(2)] = inst_107679);

(statearr_107736_108174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (16))){
var inst_107635 = (state_107697[(9)]);
var inst_107624 = (state_107697[(7)]);
var inst_107650 = (state_107697[(12)]);
var inst_107647 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107648 = frontend.state.get_current_repo();
var inst_107649 = [(0),inst_107635,inst_107624,inst_107648];
var inst_107650__$1 = (new cljs.core.PersistentVector(null,4,(5),inst_107647,inst_107649,null));
var inst_107651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync._LT_update_graphs_txid_BANG_,inst_107650__$1);
var state_107697__$1 = (function (){var statearr_107737 = state_107697;
(statearr_107737[(12)] = inst_107650__$1);

return statearr_107737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107697__$1,(19),inst_107651);
} else {
if((state_val_107698 === (30))){
var state_107697__$1 = state_107697;
var statearr_107738_108175 = state_107697__$1;
(statearr_107738_108175[(2)] = null);

(statearr_107738_108175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (10))){
var state_107697__$1 = state_107697;
var statearr_107739_108176 = state_107697__$1;
(statearr_107739_108176[(2)] = null);

(statearr_107739_108176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (18))){
var inst_107693 = (state_107697[(2)]);
var state_107697__$1 = state_107697;
var statearr_107740_108177 = state_107697__$1;
(statearr_107740_108177[(2)] = inst_107693);

(statearr_107740_108177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107698 === (8))){
var inst_107621 = (state_107697[(10)]);
var inst_107631 = new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(inst_107621);
var state_107697__$1 = state_107697;
var statearr_107741_108178 = state_107697__$1;
(statearr_107741_108178[(2)] = inst_107631);

(statearr_107741_108178[(1)] = (9));


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
var frontend$handler$file_sync$create_graph_$_state_machine__34379__auto__ = null;
var frontend$handler$file_sync$create_graph_$_state_machine__34379__auto____0 = (function (){
var statearr_107742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107742[(0)] = frontend$handler$file_sync$create_graph_$_state_machine__34379__auto__);

(statearr_107742[(1)] = (1));

return statearr_107742;
});
var frontend$handler$file_sync$create_graph_$_state_machine__34379__auto____1 = (function (state_107697){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_107697);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e107743){var ex__34382__auto__ = e107743;
var statearr_107744_108179 = state_107697;
(statearr_107744_108179[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_107697[(4)]))){
var statearr_107745_108180 = state_107697;
(statearr_107745_108180[(1)] = cljs.core.first((state_107697[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108181 = state_107697;
state_107697 = G__108181;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$file_sync$create_graph_$_state_machine__34379__auto__ = function(state_107697){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$create_graph_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$file_sync$create_graph_$_state_machine__34379__auto____1.call(this,state_107697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$create_graph_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$create_graph_$_state_machine__34379__auto____0;
frontend$handler$file_sync$create_graph_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$create_graph_$_state_machine__34379__auto____1;
return frontend$handler$file_sync$create_graph_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_107746 = f__34484__auto__();
(statearr_107746[(6)] = c__34483__auto__);

return statearr_107746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.file_sync._LT_delete_graph = (function frontend$handler$file_sync$_LT_delete_graph(graph_uuid){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_107774){
var state_val_107775 = (state_107774[(1)]);
if((state_val_107775 === (7))){
var inst_107761 = ["Delete graph failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)].join('');
var inst_107762 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_107761,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var state_107774__$1 = state_107774;
var statearr_107776_108182 = state_107774__$1;
(statearr_107776_108182[(2)] = inst_107762);

(statearr_107776_108182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107775 === (1))){
var inst_107748 = (state_107774[(7)]);
var inst_107747 = frontend.handler.file_sync.get_current_graph_uuid();
var inst_107748__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_uuid,inst_107747);
var state_107774__$1 = (function (){var statearr_107777 = state_107774;
(statearr_107777[(7)] = inst_107748__$1);

return statearr_107777;
})();
if(inst_107748__$1){
var statearr_107778_108183 = state_107774__$1;
(statearr_107778_108183[(1)] = (2));

} else {
var statearr_107779_108184 = state_107774__$1;
(statearr_107779_108184[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107775 === (4))){
var inst_107755 = (state_107774[(2)]);
var inst_107756 = frontend.fs.sync._LT_delete_graph(frontend.fs.sync.remoteapi,graph_uuid);
var state_107774__$1 = (function (){var statearr_107780 = state_107774;
(statearr_107780[(8)] = inst_107755);

return statearr_107780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107774__$1,(6),inst_107756);
} else {
if((state_val_107775 === (6))){
var inst_107758 = (state_107774[(2)]);
var inst_107759 = (inst_107758 instanceof cljs.core.ExceptionInfo);
var state_107774__$1 = state_107774;
if(cljs.core.truth_(inst_107759)){
var statearr_107781_108185 = state_107774__$1;
(statearr_107781_108185[(1)] = (7));

} else {
var statearr_107782_108186 = state_107774__$1;
(statearr_107782_108186[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107775 === (3))){
var state_107774__$1 = state_107774;
var statearr_107783_108187 = state_107774__$1;
(statearr_107783_108187[(2)] = null);

(statearr_107783_108187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107775 === (12))){
var inst_107769 = (state_107774[(2)]);
var inst_107770 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Graph deleted",new cljs.core.Keyword(null,"success","success",1890645906));
var state_107774__$1 = (function (){var statearr_107784 = state_107774;
(statearr_107784[(9)] = inst_107769);

return statearr_107784;
})();
var statearr_107785_108188 = state_107774__$1;
(statearr_107785_108188[(2)] = inst_107770);

(statearr_107785_108188[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107775 === (2))){
var inst_107750 = frontend.fs.sync._LT_sync_stop();
var state_107774__$1 = state_107774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107774__$1,(5),inst_107750);
} else {
if((state_val_107775 === (11))){
var state_107774__$1 = state_107774;
var statearr_107786_108189 = state_107774__$1;
(statearr_107786_108189[(2)] = null);

(statearr_107786_108189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107775 === (9))){
var inst_107772 = (state_107774[(2)]);
var state_107774__$1 = state_107774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_107774__$1,inst_107772);
} else {
if((state_val_107775 === (5))){
var inst_107752 = (state_107774[(2)]);
var state_107774__$1 = state_107774;
var statearr_107787_108190 = state_107774__$1;
(statearr_107787_108190[(2)] = inst_107752);

(statearr_107787_108190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107775 === (10))){
var inst_107765 = frontend.fs.sync.clear_graphs_txid_BANG_(graph_uuid);
var inst_107766 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var state_107774__$1 = (function (){var statearr_107788 = state_107774;
(statearr_107788[(10)] = inst_107765);

return statearr_107788;
})();
var statearr_107789_108191 = state_107774__$1;
(statearr_107789_108191[(2)] = inst_107766);

(statearr_107789_108191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107775 === (8))){
var inst_107748 = (state_107774[(7)]);
var state_107774__$1 = state_107774;
if(cljs.core.truth_(inst_107748)){
var statearr_107790_108192 = state_107774__$1;
(statearr_107790_108192[(1)] = (10));

} else {
var statearr_107791_108193 = state_107774__$1;
(statearr_107791_108193[(1)] = (11));

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
});
return (function() {
var frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto__ = null;
var frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto____0 = (function (){
var statearr_107792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_107792[(0)] = frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto__);

(statearr_107792[(1)] = (1));

return statearr_107792;
});
var frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto____1 = (function (state_107774){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_107774);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e107793){var ex__34382__auto__ = e107793;
var statearr_107794_108194 = state_107774;
(statearr_107794_108194[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_107774[(4)]))){
var statearr_107795_108195 = state_107774;
(statearr_107795_108195[(1)] = cljs.core.first((state_107774[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108196 = state_107774;
state_107774 = G__108196;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto__ = function(state_107774){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto____1.call(this,state_107774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto____0;
frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto____1;
return frontend$handler$file_sync$_LT_delete_graph_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_107796 = f__34484__auto__();
(statearr_107796[(6)] = c__34483__auto__);

return statearr_107796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.file_sync._LT_list_graphs = (function frontend$handler$file_sync$_LT_list_graphs(){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_107807){
var state_val_107808 = (state_107807[(1)]);
if((state_val_107808 === (1))){
var inst_107797 = frontend.fs.sync._LT_list_remote_graphs(frontend.fs.sync.remoteapi);
var state_107807__$1 = state_107807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107807__$1,(2),inst_107797);
} else {
if((state_val_107808 === (2))){
var inst_107799 = (state_107807[(7)]);
var inst_107799__$1 = (state_107807[(2)]);
var inst_107800 = (inst_107799__$1 instanceof cljs.core.ExceptionInfo);
var state_107807__$1 = (function (){var statearr_107809 = state_107807;
(statearr_107809[(7)] = inst_107799__$1);

return statearr_107809;
})();
if(cljs.core.truth_(inst_107800)){
var statearr_107810_108197 = state_107807__$1;
(statearr_107810_108197[(1)] = (3));

} else {
var statearr_107811_108198 = state_107807__$1;
(statearr_107811_108198[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107808 === (3))){
var inst_107799 = (state_107807[(7)]);
var state_107807__$1 = state_107807;
var statearr_107812_108199 = state_107807__$1;
(statearr_107812_108199[(2)] = inst_107799);

(statearr_107812_108199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107808 === (4))){
var inst_107799 = (state_107807[(7)]);
var inst_107803 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_107799);
var state_107807__$1 = state_107807;
var statearr_107813_108200 = state_107807__$1;
(statearr_107813_108200[(2)] = inst_107803);

(statearr_107813_108200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107808 === (5))){
var inst_107805 = (state_107807[(2)]);
var state_107807__$1 = state_107807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_107807__$1,inst_107805);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto__ = null;
var frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto____0 = (function (){
var statearr_107814 = [null,null,null,null,null,null,null,null];
(statearr_107814[(0)] = frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto__);

(statearr_107814[(1)] = (1));

return statearr_107814;
});
var frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto____1 = (function (state_107807){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_107807);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e107815){var ex__34382__auto__ = e107815;
var statearr_107816_108201 = state_107807;
(statearr_107816_108201[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_107807[(4)]))){
var statearr_107817_108202 = state_107807;
(statearr_107817_108202[(1)] = cljs.core.first((state_107807[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108203 = state_107807;
state_107807 = G__108203;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto__ = function(state_107807){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto____1.call(this,state_107807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto____0;
frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto____1;
return frontend$handler$file_sync$_LT_list_graphs_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_107818 = f__34484__auto__();
(statearr_107818[(6)] = c__34483__auto__);

return statearr_107818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.file_sync.load_session_graphs = (function frontend$handler$file_sync$load_session_graphs(){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"loading","loading",-737050189)], null)))){
return null;
} else {
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_107836){
var state_val_107837 = (state_107836[(1)]);
if((state_val_107837 === (1))){
var inst_107819 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107820 = [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"loading","loading",-737050189)];
var inst_107821 = (new cljs.core.PersistentVector(null,2,(5),inst_107819,inst_107820,null));
var inst_107822 = frontend.state.set_state_BANG_(inst_107821,true);
var inst_107823 = frontend.handler.file_sync._LT_list_graphs();
var state_107836__$1 = (function (){var statearr_107838 = state_107836;
(statearr_107838[(7)] = inst_107822);

return statearr_107838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107836__$1,(2),inst_107823);
} else {
if((state_val_107837 === (2))){
var inst_107825 = (state_107836[(8)]);
var inst_107825__$1 = (state_107836[(2)]);
var inst_107826 = (inst_107825__$1 instanceof cljs.core.ExceptionInfo);
var state_107836__$1 = (function (){var statearr_107839 = state_107836;
(statearr_107839[(8)] = inst_107825__$1);

return statearr_107839;
})();
if(cljs.core.truth_(inst_107826)){
var statearr_107840_108204 = state_107836__$1;
(statearr_107840_108204[(1)] = (3));

} else {
var statearr_107841_108205 = state_107836__$1;
(statearr_107841_108205[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107837 === (3))){
var state_107836__$1 = state_107836;
var statearr_107842_108206 = state_107836__$1;
(statearr_107842_108206[(2)] = null);

(statearr_107842_108206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107837 === (4))){
var inst_107825 = (state_107836[(8)]);
var inst_107829 = [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)];
var inst_107830 = [false,inst_107825];
var inst_107831 = cljs.core.PersistentHashMap.fromArrays(inst_107829,inst_107830);
var inst_107832 = frontend.state.set_state_BANG_(new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),inst_107831);
var state_107836__$1 = state_107836;
var statearr_107843_108207 = state_107836__$1;
(statearr_107843_108207[(2)] = inst_107832);

(statearr_107843_108207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107837 === (5))){
var inst_107834 = (state_107836[(2)]);
var state_107836__$1 = state_107836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_107836__$1,inst_107834);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto__ = null;
var frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto____0 = (function (){
var statearr_107844 = [null,null,null,null,null,null,null,null,null];
(statearr_107844[(0)] = frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto__);

(statearr_107844[(1)] = (1));

return statearr_107844;
});
var frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto____1 = (function (state_107836){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_107836);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e107845){var ex__34382__auto__ = e107845;
var statearr_107846_108208 = state_107836;
(statearr_107846_108208[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_107836[(4)]))){
var statearr_107847_108209 = state_107836;
(statearr_107847_108209[(1)] = cljs.core.first((state_107836[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108210 = state_107836;
state_107836 = G__108210;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto__ = function(state_107836){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto____1.call(this,state_107836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto____0;
frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto____1;
return frontend$handler$file_sync$load_session_graphs_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_107848 = f__34484__auto__();
(statearr_107848[(6)] = c__34483__auto__);

return statearr_107848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}
});
frontend.handler.file_sync.reset_session_graphs = (function frontend$handler$file_sync$reset_session_graphs(){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loading","loading",-737050189),false,new cljs.core.Keyword(null,"graphs","graphs",-1584479112),null], null));
});
frontend.handler.file_sync.init_graph = (function frontend$handler$file_sync$init_graph(graph_uuid){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_107873){
var state_val_107874 = (state_107873[(1)]);
if((state_val_107874 === (1))){
var inst_107849 = frontend.state.get_current_repo();
var inst_107850 = frontend.handler.user._LT_user_uuid();
var state_107873__$1 = (function (){var statearr_107875 = state_107873;
(statearr_107875[(7)] = inst_107849);

return statearr_107875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107873__$1,(2),inst_107850);
} else {
if((state_val_107874 === (2))){
var inst_107852 = (state_107873[(8)]);
var inst_107852__$1 = (state_107873[(2)]);
var inst_107853 = (inst_107852__$1 instanceof cljs.core.ExceptionInfo);
var state_107873__$1 = (function (){var statearr_107876 = state_107873;
(statearr_107876[(8)] = inst_107852__$1);

return statearr_107876;
})();
if(cljs.core.truth_(inst_107853)){
var statearr_107877_108211 = state_107873__$1;
(statearr_107877_108211[(1)] = (3));

} else {
var statearr_107878_108212 = state_107873__$1;
(statearr_107878_108212[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107874 === (3))){
var inst_107852 = (state_107873[(8)]);
var inst_107855 = cljs.core.ex_message(inst_107852);
var inst_107856 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_107855,new cljs.core.Keyword(null,"error","error",-978969032));
var state_107873__$1 = state_107873;
var statearr_107879_108213 = state_107873__$1;
(statearr_107879_108213[(2)] = inst_107856);

(statearr_107879_108213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107874 === (4))){
var inst_107852 = (state_107873[(8)]);
var inst_107849 = (state_107873[(7)]);
var inst_107858 = frontend.state.set_state_BANG_(new cljs.core.Keyword("sync-graph","init?","sync-graph/init?",608792103),true);
var inst_107859 = frontend.fs.sync._LT_update_graphs_txid_BANG_((0),graph_uuid,inst_107852,inst_107849);
var state_107873__$1 = (function (){var statearr_107880 = state_107873;
(statearr_107880[(9)] = inst_107858);

return statearr_107880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107873__$1,(6),inst_107859);
} else {
if((state_val_107874 === (5))){
var inst_107871 = (state_107873[(2)]);
var state_107873__$1 = state_107873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_107873__$1,inst_107871);
} else {
if((state_val_107874 === (6))){
var inst_107849 = (state_107873[(7)]);
var inst_107861 = (state_107873[(2)]);
var inst_107862 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.handler.file_sync.refresh_file_sync_component,cljs.core.not);
var inst_107863 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107864 = [new cljs.core.Keyword(null,"persist?","persist?",-1772568760)];
var inst_107865 = [false];
var inst_107866 = cljs.core.PersistentHashMap.fromArrays(inst_107864,inst_107865);
var inst_107867 = [new cljs.core.Keyword("graph","switch","graph/switch",178853840),inst_107849,inst_107866];
var inst_107868 = (new cljs.core.PersistentVector(null,3,(5),inst_107863,inst_107867,null));
var inst_107869 = frontend.state.pub_event_BANG_(inst_107868);
var state_107873__$1 = (function (){var statearr_107881 = state_107873;
(statearr_107881[(10)] = inst_107861);

(statearr_107881[(11)] = inst_107862);

return statearr_107881;
})();
var statearr_107882_108214 = state_107873__$1;
(statearr_107882_108214[(2)] = inst_107869);

(statearr_107882_108214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$handler$file_sync$init_graph_$_state_machine__34379__auto__ = null;
var frontend$handler$file_sync$init_graph_$_state_machine__34379__auto____0 = (function (){
var statearr_107883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107883[(0)] = frontend$handler$file_sync$init_graph_$_state_machine__34379__auto__);

(statearr_107883[(1)] = (1));

return statearr_107883;
});
var frontend$handler$file_sync$init_graph_$_state_machine__34379__auto____1 = (function (state_107873){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_107873);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e107884){var ex__34382__auto__ = e107884;
var statearr_107885_108215 = state_107873;
(statearr_107885_108215[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_107873[(4)]))){
var statearr_107886_108216 = state_107873;
(statearr_107886_108216[(1)] = cljs.core.first((state_107873[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108217 = state_107873;
state_107873 = G__108217;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$file_sync$init_graph_$_state_machine__34379__auto__ = function(state_107873){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$init_graph_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$file_sync$init_graph_$_state_machine__34379__auto____1.call(this,state_107873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$init_graph_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$init_graph_$_state_machine__34379__auto____0;
frontend$handler$file_sync$init_graph_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$init_graph_$_state_machine__34379__auto____1;
return frontend$handler$file_sync$init_graph_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_107887 = f__34484__auto__();
(statearr_107887[(6)] = c__34483__auto__);

return statearr_107887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.file_sync.download_version_file = (function frontend$handler$file_sync$download_version_file(var_args){
var G__107889 = arguments.length;
switch (G__107889) {
case 3:
return frontend.handler.file_sync.download_version_file.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return frontend.handler.file_sync.download_version_file.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.file_sync.download_version_file.cljs$core$IFn$_invoke$arity$3 = (function (graph_uuid,file_uuid,version_uuid){
return frontend.handler.file_sync.download_version_file.cljs$core$IFn$_invoke$arity$4(graph_uuid,file_uuid,version_uuid,false);
}));

(frontend.handler.file_sync.download_version_file.cljs$core$IFn$_invoke$arity$4 = (function (graph_uuid,file_uuid,version_uuid,silent_download_QMARK_){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_107927){
var state_val_107928 = (state_107927[(1)]);
if((state_val_107928 === (7))){
var inst_107890 = (state_107927[(7)]);
var inst_107906 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107907 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107908 = [new cljs.core.Keyword(null,"div","div",1057191632),"Downloaded version file at: "];
var inst_107909 = (new cljs.core.PersistentVector(null,2,(5),inst_107907,inst_107908,null));
var inst_107910 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107911 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_107890];
var inst_107912 = (new cljs.core.PersistentVector(null,2,(5),inst_107910,inst_107911,null));
var inst_107913 = [new cljs.core.Keyword(null,"div","div",1057191632),inst_107909,inst_107912];
var inst_107914 = (new cljs.core.PersistentVector(null,3,(5),inst_107906,inst_107913,null));
var inst_107915 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_107914,new cljs.core.Keyword(null,"success","success",1890645906),false);
var state_107927__$1 = state_107927;
var statearr_107929_108219 = state_107927__$1;
(statearr_107929_108219[(2)] = inst_107915);

(statearr_107929_108219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107928 === (1))){
var inst_107890 = (state_107927[(7)]);
var inst_107890__$1 = module$node_modules$path$path.join(file_uuid,version_uuid);
var inst_107891 = frontend.state.get_current_repo();
var inst_107892 = frontend.config.get_repo_dir(inst_107891);
var inst_107893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_107894 = [inst_107890__$1];
var inst_107895 = (new cljs.core.PersistentVector(null,1,(5),inst_107893,inst_107894,null));
var inst_107896 = frontend.fs.sync._LT_download_version_files(frontend.fs.sync.rsapi,graph_uuid,inst_107892,inst_107895);
var state_107927__$1 = (function (){var statearr_107930 = state_107927;
(statearr_107930[(7)] = inst_107890__$1);

return statearr_107930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107927__$1,(2),inst_107896);
} else {
if((state_val_107928 === (4))){
var state_107927__$1 = state_107927;
if(cljs.core.truth_(silent_download_QMARK_)){
var statearr_107931_108220 = state_107927__$1;
(statearr_107931_108220[(1)] = (6));

} else {
var statearr_107932_108221 = state_107927__$1;
(statearr_107932_108221[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107928 === (6))){
var state_107927__$1 = state_107927;
var statearr_107933_108222 = state_107927__$1;
(statearr_107933_108222[(2)] = null);

(statearr_107933_108222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107928 === (3))){
var inst_107898 = (state_107927[(8)]);
var inst_107901 = cljs.core.ex_cause(inst_107898);
var inst_107902 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_107901,new cljs.core.Keyword(null,"error","error",-978969032));
var state_107927__$1 = state_107927;
var statearr_107934_108223 = state_107927__$1;
(statearr_107934_108223[(2)] = inst_107902);

(statearr_107934_108223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107928 === (2))){
var inst_107898 = (state_107927[(8)]);
var inst_107898__$1 = (state_107927[(2)]);
var inst_107899 = (inst_107898__$1 instanceof cljs.core.ExceptionInfo);
var state_107927__$1 = (function (){var statearr_107935 = state_107927;
(statearr_107935[(8)] = inst_107898__$1);

return statearr_107935;
})();
if(cljs.core.truth_(inst_107899)){
var statearr_107936_108224 = state_107927__$1;
(statearr_107936_108224[(1)] = (3));

} else {
var statearr_107937_108225 = state_107927__$1;
(statearr_107937_108225[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107928 === (11))){
var inst_107925 = (state_107927[(2)]);
var state_107927__$1 = state_107927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_107927__$1,inst_107925);
} else {
if((state_val_107928 === (9))){
var state_107927__$1 = state_107927;
var statearr_107938_108226 = state_107927__$1;
(statearr_107938_108226[(2)] = null);

(statearr_107938_108226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107928 === (5))){
var inst_107898 = (state_107927[(8)]);
var inst_107919 = (state_107927[(2)]);
var inst_107920 = (inst_107898 instanceof cljs.core.ExceptionInfo);
var state_107927__$1 = (function (){var statearr_107939 = state_107927;
(statearr_107939[(9)] = inst_107919);

return statearr_107939;
})();
if(cljs.core.truth_(inst_107920)){
var statearr_107940_108227 = state_107927__$1;
(statearr_107940_108227[(1)] = (9));

} else {
var statearr_107941_108228 = state_107927__$1;
(statearr_107941_108228[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107928 === (10))){
var inst_107890 = (state_107927[(7)]);
var inst_107923 = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("logseq",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["version-files",inst_107890], 0));
var state_107927__$1 = state_107927;
var statearr_107942_108229 = state_107927__$1;
(statearr_107942_108229[(2)] = inst_107923);

(statearr_107942_108229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107928 === (8))){
var inst_107917 = (state_107927[(2)]);
var state_107927__$1 = state_107927;
var statearr_107943_108230 = state_107927__$1;
(statearr_107943_108230[(2)] = inst_107917);

(statearr_107943_108230[(1)] = (5));


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
var frontend$handler$file_sync$state_machine__34379__auto__ = null;
var frontend$handler$file_sync$state_machine__34379__auto____0 = (function (){
var statearr_107944 = [null,null,null,null,null,null,null,null,null,null];
(statearr_107944[(0)] = frontend$handler$file_sync$state_machine__34379__auto__);

(statearr_107944[(1)] = (1));

return statearr_107944;
});
var frontend$handler$file_sync$state_machine__34379__auto____1 = (function (state_107927){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_107927);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e107945){var ex__34382__auto__ = e107945;
var statearr_107946_108231 = state_107927;
(statearr_107946_108231[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_107927[(4)]))){
var statearr_107947_108232 = state_107927;
(statearr_107947_108232[(1)] = cljs.core.first((state_107927[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108233 = state_107927;
state_107927 = G__108233;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$file_sync$state_machine__34379__auto__ = function(state_107927){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$file_sync$state_machine__34379__auto____1.call(this,state_107927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$state_machine__34379__auto____0;
frontend$handler$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$state_machine__34379__auto____1;
return frontend$handler$file_sync$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_107948 = f__34484__auto__();
(statearr_107948[(6)] = c__34483__auto__);

return statearr_107948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}));

(frontend.handler.file_sync.download_version_file.cljs$lang$maxFixedArity = 4);

frontend.handler.file_sync._LT_list_file_local_versions = (function frontend$handler$file_sync$_LT_list_file_local_versions(page){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_107980){
var state_val_107981 = (state_107980[(1)]);
if((state_val_107981 === (7))){
var inst_107962 = (state_107980[(7)]);
var inst_107966 = cljs.core.seq(inst_107962);
var state_107980__$1 = state_107980;
if(inst_107966){
var statearr_107982_108234 = state_107980__$1;
(statearr_107982_108234[(1)] = (9));

} else {
var statearr_107983_108235 = state_107980__$1;
(statearr_107983_108235[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107981 === (1))){
var inst_107951 = (state_107980[(8)]);
var inst_107950 = new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page);
var inst_107951__$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(inst_107950);
var state_107980__$1 = (function (){var statearr_107984 = state_107980;
(statearr_107984[(8)] = inst_107951__$1);

return statearr_107984;
})();
if(cljs.core.truth_(inst_107951__$1)){
var statearr_107985_108236 = state_107980__$1;
(statearr_107985_108236[(1)] = (2));

} else {
var statearr_107986_108237 = state_107980__$1;
(statearr_107986_108237[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107981 === (4))){
var inst_107978 = (state_107980[(2)]);
var state_107980__$1 = state_107980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_107980__$1,inst_107978);
} else {
if((state_val_107981 === (6))){
var state_107980__$1 = state_107980;
var statearr_107987_108238 = state_107980__$1;
(statearr_107987_108238[(2)] = null);

(statearr_107987_108238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107981 === (3))){
var state_107980__$1 = state_107980;
var statearr_107988_108239 = state_107980__$1;
(statearr_107988_108239[(2)] = null);

(statearr_107988_108239[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107981 === (2))){
var inst_107951 = (state_107980[(8)]);
var inst_107954 = (state_107980[(9)]);
var inst_107955 = (state_107980[(10)]);
var inst_107956 = (state_107980[(11)]);
var inst_107958 = (state_107980[(12)]);
var inst_107953 = frontend.state.get_current_repo();
var inst_107954__$1 = frontend.config.get_repo_dir(inst_107953);
var inst_107955__$1 = clojure.string.replace_first(inst_107951,inst_107954__$1,"");
var inst_107956__$1 = logseq.common.path.file_stem(inst_107955__$1);
var inst_107957 = logseq.common.path.dirname(inst_107955__$1);
var inst_107958__$1 = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(inst_107954__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["logseq/version-files/local",inst_107957,inst_107956__$1], 0));
var inst_107959 = frontend.fs.readdir.cljs$core$IFn$_invoke$arity$variadic(inst_107958__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-only?","path-only?",-825545027),true], 0));
var inst_107960 = cljs.core.async.interop.p__GT_c(inst_107959);
var state_107980__$1 = (function (){var statearr_107989 = state_107980;
(statearr_107989[(9)] = inst_107954__$1);

(statearr_107989[(10)] = inst_107955__$1);

(statearr_107989[(11)] = inst_107956__$1);

(statearr_107989[(12)] = inst_107958__$1);

return statearr_107989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_107980__$1,(5),inst_107960);
} else {
if((state_val_107981 === (11))){
var inst_107973 = (state_107980[(2)]);
var state_107980__$1 = state_107980;
var statearr_107990_108240 = state_107980__$1;
(statearr_107990_108240[(2)] = inst_107973);

(statearr_107990_108240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107981 === (9))){
var inst_107951 = (state_107980[(8)]);
var inst_107954 = (state_107980[(9)]);
var inst_107955 = (state_107980[(10)]);
var inst_107956 = (state_107980[(11)]);
var inst_107958 = (state_107980[(12)]);
var inst_107962 = (state_107980[(7)]);
var inst_107968 = (function (){var temp__5804__auto__ = inst_107951;
var path = inst_107951;
var base_path = inst_107954;
var rel_path = inst_107955;
var file_stem = inst_107956;
var version_files_dir = inst_107958;
var version_file_paths = inst_107962;
return (function (path__$1){
try{var create_time = (function (p1__107949_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH_mm_ss.SSSZZ"),p1__107949_SHARP_);
})(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$path$path.parse(path__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create-time","create-time",875410581),create_time,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172),logseq.common.path.relative_path(base_path,path__$1)], null);
}catch (e107991){var e = e107991;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.file-sync",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("page-history","parse-format-error","page-history/parse-format-error",276798971),e,new cljs.core.Keyword(null,"line","line",212345235),165], null)),null);

return null;
}});
})();
var inst_107969 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_107968,inst_107962);
var inst_107970 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,inst_107969);
var state_107980__$1 = state_107980;
var statearr_107992_108241 = state_107980__$1;
(statearr_107992_108241[(2)] = inst_107970);

(statearr_107992_108241[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107981 === (5))){
var inst_107962 = (state_107980[(7)]);
var inst_107962__$1 = (state_107980[(2)]);
var inst_107963 = (inst_107962__$1 instanceof cljs.core.ExceptionInfo);
var state_107980__$1 = (function (){var statearr_107993 = state_107980;
(statearr_107993[(7)] = inst_107962__$1);

return statearr_107993;
})();
if(cljs.core.truth_(inst_107963)){
var statearr_107994_108242 = state_107980__$1;
(statearr_107994_108242[(1)] = (6));

} else {
var statearr_107995_108243 = state_107980__$1;
(statearr_107995_108243[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107981 === (10))){
var state_107980__$1 = state_107980;
var statearr_107996_108244 = state_107980__$1;
(statearr_107996_108244[(2)] = null);

(statearr_107996_108244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107981 === (8))){
var inst_107975 = (state_107980[(2)]);
var state_107980__$1 = state_107980;
var statearr_107997_108245 = state_107980__$1;
(statearr_107997_108245[(2)] = inst_107975);

(statearr_107997_108245[(1)] = (4));


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
var frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto__ = null;
var frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto____0 = (function (){
var statearr_107998 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_107998[(0)] = frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto__);

(statearr_107998[(1)] = (1));

return statearr_107998;
});
var frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto____1 = (function (state_107980){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_107980);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e107999){var ex__34382__auto__ = e107999;
var statearr_108000_108246 = state_107980;
(statearr_108000_108246[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_107980[(4)]))){
var statearr_108001_108247 = state_107980;
(statearr_108001_108247[(1)] = cljs.core.first((state_107980[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108248 = state_107980;
state_107980 = G__108248;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto__ = function(state_107980){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto____1.call(this,state_107980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto____0;
frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto____1;
return frontend$handler$file_sync$_LT_list_file_local_versions_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_108002 = f__34484__auto__();
(statearr_108002[(6)] = c__34483__auto__);

return statearr_108002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.file_sync._LT_fetch_page_file_versions = (function frontend$handler$file_sync$_LT_fetch_page_file_versions(graph_uuid,page){
cljs.core.PersistentVector.EMPTY;

var file_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","file","block/file",183171933).cljs$core$IFn$_invoke$arity$1(page));
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_108021){
var state_val_108022 = (state_108021[(1)]);
if((state_val_108022 === (1))){
var inst_108005 = (state_108021[(7)]);
var inst_108004 = (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(file_id) : frontend.db.entity.call(null,file_id));
var inst_108005__$1 = new cljs.core.Keyword("file","path","file/path",-191335748).cljs$core$IFn$_invoke$arity$1(inst_108004);
var state_108021__$1 = (function (){var statearr_108023 = state_108021;
(statearr_108023[(7)] = inst_108005__$1);

return statearr_108023;
})();
if(cljs.core.truth_(inst_108005__$1)){
var statearr_108024_108249 = state_108021__$1;
(statearr_108024_108249[(1)] = (2));

} else {
var statearr_108025_108250 = state_108021__$1;
(statearr_108025_108250[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108022 === (2))){
var inst_108005 = (state_108021[(7)]);
var inst_108007 = frontend.fs.sync._LT_get_remote_file_versions(frontend.fs.sync.remoteapi,graph_uuid,inst_108005);
var state_108021__$1 = state_108021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108021__$1,(5),inst_108007);
} else {
if((state_val_108022 === (3))){
var state_108021__$1 = state_108021;
var statearr_108026_108251 = state_108021__$1;
(statearr_108026_108251[(2)] = null);

(statearr_108026_108251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108022 === (4))){
var inst_108019 = (state_108021[(2)]);
var state_108021__$1 = state_108021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_108021__$1,inst_108019);
} else {
if((state_val_108022 === (5))){
var inst_108009 = (state_108021[(2)]);
var inst_108010 = new cljs.core.Keyword(null,"VersionList","VersionList",-1189454538).cljs$core$IFn$_invoke$arity$1(inst_108009);
var inst_108011 = frontend.handler.file_sync._LT_list_file_local_versions(page);
var state_108021__$1 = (function (){var statearr_108027 = state_108021;
(statearr_108027[(8)] = inst_108010);

return statearr_108027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108021__$1,(6),inst_108011);
} else {
if((state_val_108022 === (6))){
var inst_108005 = (state_108021[(7)]);
var inst_108010 = (state_108021[(8)]);
var inst_108013 = (state_108021[(2)]);
var inst_108014 = (function (){var temp__5804__auto__ = inst_108005;
var path = inst_108005;
var version_list = inst_108010;
var local_version_list = inst_108013;
return (function (p1__108003_SHARP_){
var or__5043__auto__ = new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(p1__108003_SHARP_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(p1__108003_SHARP_);
}
});
})();
var inst_108015 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_108010,inst_108013);
var inst_108016 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(inst_108014,cljs.core._GT_,inst_108015);
var state_108021__$1 = state_108021;
var statearr_108028_108252 = state_108021__$1;
(statearr_108028_108252[(2)] = inst_108016);

(statearr_108028_108252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto__ = null;
var frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto____0 = (function (){
var statearr_108029 = [null,null,null,null,null,null,null,null,null];
(statearr_108029[(0)] = frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto__);

(statearr_108029[(1)] = (1));

return statearr_108029;
});
var frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto____1 = (function (state_108021){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_108021);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e108030){var ex__34382__auto__ = e108030;
var statearr_108031_108253 = state_108021;
(statearr_108031_108253[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_108021[(4)]))){
var statearr_108032_108254 = state_108021;
(statearr_108032_108254[(1)] = cljs.core.first((state_108021[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108255 = state_108021;
state_108021 = G__108255;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto__ = function(state_108021){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto____1.call(this,state_108021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto____0;
frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto____1;
return frontend$handler$file_sync$_LT_fetch_page_file_versions_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_108033 = f__34484__auto__();
(statearr_108033[(6)] = c__34483__auto__);

return statearr_108033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.file_sync.init_remote_graph = (function frontend$handler$file_sync$init_remote_graph(local_graph_dir,graph){
if(cljs.core.truth_((function (){var and__5041__auto__ = local_graph_dir;
if(cljs.core.truth_(and__5041__auto__)){
return graph;
} else {
return and__5041__auto__;
}
})())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Start syncing the remote graph ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(graph))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.get_string_repo_dir(local_graph_dir))].join(''),new cljs.core.Keyword(null,"success","success",1890645906));

frontend.handler.file_sync.init_graph(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(graph));

return frontend.state.close_modal_BANG_();
} else {
return null;
}
});
frontend.handler.file_sync.setup_file_sync_event_listeners = (function frontend$handler$file_sync$setup_file_sync_event_listeners(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var p = frontend.pubsub.sync_events_pub;
var topics = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finished-local->remote","finished-local->remote",2118586037),new cljs.core.Keyword(null,"finished-remote->local","finished-remote->local",1594006010),new cljs.core.Keyword(null,"start","start",-355208981)], null);
var seq__108034_108256 = cljs.core.seq(topics);
var chunk__108035_108257 = null;
var count__108036_108258 = (0);
var i__108037_108259 = (0);
while(true){
if((i__108037_108259 < count__108036_108258)){
var topic_108260 = chunk__108035_108257.cljs$core$IIndexed$_nth$arity$2(null,i__108037_108259);
cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(p,topic_108260,c);


var G__108261 = seq__108034_108256;
var G__108262 = chunk__108035_108257;
var G__108263 = count__108036_108258;
var G__108264 = (i__108037_108259 + (1));
seq__108034_108256 = G__108261;
chunk__108035_108257 = G__108262;
count__108036_108258 = G__108263;
i__108037_108259 = G__108264;
continue;
} else {
var temp__5804__auto___108265 = cljs.core.seq(seq__108034_108256);
if(temp__5804__auto___108265){
var seq__108034_108266__$1 = temp__5804__auto___108265;
if(cljs.core.chunked_seq_QMARK_(seq__108034_108266__$1)){
var c__5565__auto___108267 = cljs.core.chunk_first(seq__108034_108266__$1);
var G__108268 = cljs.core.chunk_rest(seq__108034_108266__$1);
var G__108269 = c__5565__auto___108267;
var G__108270 = cljs.core.count(c__5565__auto___108267);
var G__108271 = (0);
seq__108034_108256 = G__108268;
chunk__108035_108257 = G__108269;
count__108036_108258 = G__108270;
i__108037_108259 = G__108271;
continue;
} else {
var topic_108272 = cljs.core.first(seq__108034_108266__$1);
cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(p,topic_108272,c);


var G__108273 = cljs.core.next(seq__108034_108266__$1);
var G__108274 = null;
var G__108275 = (0);
var G__108276 = (0);
seq__108034_108256 = G__108273;
chunk__108035_108257 = G__108274;
count__108036_108258 = G__108275;
i__108037_108259 = G__108276;
continue;
}
} else {
}
}
break;
}

var c__34483__auto___108277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_108095){
var state_val_108096 = (state_108095[(1)]);
if((state_val_108096 === (7))){
var inst_108045 = (state_108095[(7)]);
var inst_108044 = (state_108095[(8)]);
var inst_108043 = (state_108095[(9)]);
var inst_108047 = frontend.state.clear_file_sync_progress_BANG_(inst_108045);
var inst_108048 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108049 = [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),inst_108045,new cljs.core.Keyword("file-sync","last-synced-at","file-sync/last-synced-at",1623190259)];
var inst_108050 = (new cljs.core.PersistentVector(null,3,(5),inst_108048,inst_108049,null));
var inst_108051 = new cljs.core.Keyword(null,"epoch","epoch",1435633666).cljs$core$IFn$_invoke$arity$1(inst_108044);
var inst_108052 = frontend.state.set_state_BANG_(inst_108050,inst_108051);
var inst_108053 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_108043,new cljs.core.Keyword(null,"finished-local->remote","finished-local->remote",2118586037));
var state_108095__$1 = (function (){var statearr_108097 = state_108095;
(statearr_108097[(10)] = inst_108047);

(statearr_108097[(11)] = inst_108052);

return statearr_108097;
})();
if(inst_108053){
var statearr_108098_108278 = state_108095__$1;
(statearr_108098_108278[(1)] = (10));

} else {
var statearr_108099_108279 = state_108095__$1;
(statearr_108099_108279[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (20))){
var inst_108082 = (state_108095[(2)]);
var state_108095__$1 = state_108095;
if(cljs.core.truth_(inst_108082)){
var statearr_108100_108280 = state_108095__$1;
(statearr_108100_108280[(1)] = (21));

} else {
var statearr_108101_108281 = state_108095__$1;
(statearr_108101_108281[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (1))){
var state_108095__$1 = state_108095;
var statearr_108102_108282 = state_108095__$1;
(statearr_108102_108282[(2)] = null);

(statearr_108102_108282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (4))){
var inst_108043 = (state_108095[(9)]);
var inst_108041 = (state_108095[(2)]);
var inst_108042 = cljs.core.__destructure_map(inst_108041);
var inst_108043__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_108042,new cljs.core.Keyword(null,"event","event",301435442));
var inst_108044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_108042,new cljs.core.Keyword(null,"data","data",-232669377));
var state_108095__$1 = (function (){var statearr_108103 = state_108095;
(statearr_108103[(9)] = inst_108043__$1);

(statearr_108103[(8)] = inst_108044);

return statearr_108103;
})();
var G__108104_108283 = inst_108043__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"list","list",-1889078086,null),G__108104_108283)){
var statearr_108105_108284 = state_108095__$1;
(statearr_108105_108284[(1)] = (6));

} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"finished-local->remote","finished-local->remote",2118586037),G__108104_108283)){
var statearr_108106_108285 = state_108095__$1;
(statearr_108106_108285[(1)] = (6));

} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"finished-remote->local","finished-remote->local",1594006010),G__108104_108283)){
var statearr_108107_108286 = state_108095__$1;
(statearr_108107_108286[(1)] = (6));

} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),G__108104_108283)){
var statearr_108108_108287 = state_108095__$1;
(statearr_108108_108287[(1)] = (13));

} else {
var statearr_108109_108288 = state_108095__$1;
(statearr_108109_108288[(1)] = (17));



}
}
}
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (15))){
var state_108095__$1 = state_108095;
var statearr_108110_108289 = state_108095__$1;
(statearr_108110_108289[(2)] = null);

(statearr_108110_108289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (21))){
var inst_108084 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108085 = [new cljs.core.Keyword("file-sync","maybe-onboarding-show","file-sync/maybe-onboarding-show",1562674517),new cljs.core.Keyword(null,"sync-history","sync-history",1914466991)];
var inst_108086 = (new cljs.core.PersistentVector(null,2,(5),inst_108084,inst_108085,null));
var inst_108087 = frontend.state.pub_event_BANG_(inst_108086);
var state_108095__$1 = state_108095;
var statearr_108111_108290 = state_108095__$1;
(statearr_108111_108290[(2)] = inst_108087);

(statearr_108111_108290[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (13))){
var inst_108063 = (state_108095[(12)]);
var inst_108063__$1 = frontend.state.get_current_file_sync_graph_uuid();
var state_108095__$1 = (function (){var statearr_108112 = state_108095;
(statearr_108112[(12)] = inst_108063__$1);

return statearr_108112;
})();
if(cljs.core.truth_(inst_108063__$1)){
var statearr_108113_108291 = state_108095__$1;
(statearr_108113_108291[(1)] = (14));

} else {
var statearr_108114_108292 = state_108095__$1;
(statearr_108114_108292[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (22))){
var state_108095__$1 = state_108095;
var statearr_108115_108293 = state_108095__$1;
(statearr_108115_108293[(2)] = null);

(statearr_108115_108293[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (6))){
var inst_108045 = (state_108095[(7)]);
var inst_108045__$1 = frontend.state.get_current_file_sync_graph_uuid();
var state_108095__$1 = (function (){var statearr_108116 = state_108095;
(statearr_108116[(7)] = inst_108045__$1);

return statearr_108116;
})();
if(cljs.core.truth_(inst_108045__$1)){
var statearr_108117_108294 = state_108095__$1;
(statearr_108117_108294[(1)] = (7));

} else {
var statearr_108118_108295 = state_108095__$1;
(statearr_108118_108295[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (17))){
var state_108095__$1 = state_108095;
var statearr_108119_108296 = state_108095__$1;
(statearr_108119_108296[(2)] = null);

(statearr_108119_108296[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (3))){
var inst_108093 = (state_108095[(2)]);
var state_108095__$1 = state_108095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_108095__$1,inst_108093);
} else {
if((state_val_108096 === (12))){
var inst_108058 = (state_108095[(2)]);
var state_108095__$1 = state_108095;
var statearr_108120_108297 = state_108095__$1;
(statearr_108120_108297[(2)] = inst_108058);

(statearr_108120_108297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (2))){
var state_108095__$1 = state_108095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108095__$1,(4),c);
} else {
if((state_val_108096 === (23))){
var inst_108090 = (state_108095[(2)]);
var state_108095__$1 = (function (){var statearr_108121 = state_108095;
(statearr_108121[(13)] = inst_108090);

return statearr_108121;
})();
var statearr_108122_108298 = state_108095__$1;
(statearr_108122_108298[(2)] = null);

(statearr_108122_108298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (19))){
var inst_108076 = (state_108095[(14)]);
var state_108095__$1 = state_108095;
var statearr_108123_108299 = state_108095__$1;
(statearr_108123_108299[(2)] = inst_108076);

(statearr_108123_108299[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (11))){
var state_108095__$1 = state_108095;
var statearr_108124_108300 = state_108095__$1;
(statearr_108124_108300[(2)] = null);

(statearr_108124_108300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (9))){
var inst_108061 = (state_108095[(2)]);
var state_108095__$1 = state_108095;
var statearr_108125_108301 = state_108095__$1;
(statearr_108125_108301[(2)] = inst_108061);

(statearr_108125_108301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (5))){
var inst_108044 = (state_108095[(8)]);
var inst_108076 = (state_108095[(14)]);
var inst_108075 = (state_108095[(2)]);
var inst_108076__$1 = new cljs.core.Keyword(null,"file-change-events","file-change-events",1473966069).cljs$core$IFn$_invoke$arity$1(inst_108044);
var state_108095__$1 = (function (){var statearr_108126 = state_108095;
(statearr_108126[(15)] = inst_108075);

(statearr_108126[(14)] = inst_108076__$1);

return statearr_108126;
})();
if(cljs.core.truth_(inst_108076__$1)){
var statearr_108127_108302 = state_108095__$1;
(statearr_108127_108302[(1)] = (18));

} else {
var statearr_108128_108303 = state_108095__$1;
(statearr_108128_108303[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (14))){
var inst_108063 = (state_108095[(12)]);
var inst_108044 = (state_108095[(8)]);
var inst_108065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108066 = [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),inst_108063,new cljs.core.Keyword("file-sync","start-time","file-sync/start-time",-882469306)];
var inst_108067 = (new cljs.core.PersistentVector(null,3,(5),inst_108065,inst_108066,null));
var inst_108068 = frontend.state.set_state_BANG_(inst_108067,inst_108044);
var state_108095__$1 = state_108095;
var statearr_108129_108304 = state_108095__$1;
(statearr_108129_108304[(2)] = inst_108068);

(statearr_108129_108304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (16))){
var inst_108071 = (state_108095[(2)]);
var state_108095__$1 = state_108095;
var statearr_108130_108305 = state_108095__$1;
(statearr_108130_108305[(2)] = inst_108071);

(statearr_108130_108305[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (10))){
var inst_108055 = cljs.core.async.offer_BANG_(frontend.fs.sync.finished_local__GT_remote_chan,true);
var state_108095__$1 = state_108095;
var statearr_108131_108306 = state_108095__$1;
(statearr_108131_108306[(2)] = inst_108055);

(statearr_108131_108306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (18))){
var inst_108078 = frontend.state.get_current_route();
var inst_108079 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),inst_108078);
var state_108095__$1 = state_108095;
var statearr_108132_108307 = state_108095__$1;
(statearr_108132_108307[(2)] = inst_108079);

(statearr_108132_108307[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108096 === (8))){
var state_108095__$1 = state_108095;
var statearr_108133_108308 = state_108095__$1;
(statearr_108133_108308[(2)] = null);

(statearr_108133_108308[(1)] = (9));


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
}
}
});
return (function() {
var frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto__ = null;
var frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto____0 = (function (){
var statearr_108134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_108134[(0)] = frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto__);

(statearr_108134[(1)] = (1));

return statearr_108134;
});
var frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto____1 = (function (state_108095){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_108095);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e108135){var ex__34382__auto__ = e108135;
var statearr_108136_108309 = state_108095;
(statearr_108136_108309[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_108095[(4)]))){
var statearr_108137_108310 = state_108095;
(statearr_108137_108310[(1)] = cljs.core.first((state_108095[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108311 = state_108095;
state_108095 = G__108311;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto__ = function(state_108095){
switch(arguments.length){
case 0:
return frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto____1.call(this,state_108095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto____0;
frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto____1;
return frontend$handler$file_sync$setup_file_sync_event_listeners_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_108138 = f__34484__auto__();
(statearr_108138[(6)] = c__34483__auto___108277);

return statearr_108138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return (function (){
var seq__108139 = cljs.core.seq(topics);
var chunk__108140 = null;
var count__108141 = (0);
var i__108142 = (0);
while(true){
if((i__108142 < count__108141)){
var topic = chunk__108140.cljs$core$IIndexed$_nth$arity$2(null,i__108142);
cljs.core.async.unsub(p,topic,c);


var G__108312 = seq__108139;
var G__108313 = chunk__108140;
var G__108314 = count__108141;
var G__108315 = (i__108142 + (1));
seq__108139 = G__108312;
chunk__108140 = G__108313;
count__108141 = G__108314;
i__108142 = G__108315;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__108139);
if(temp__5804__auto__){
var seq__108139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__108139__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__108139__$1);
var G__108316 = cljs.core.chunk_rest(seq__108139__$1);
var G__108317 = c__5565__auto__;
var G__108318 = cljs.core.count(c__5565__auto__);
var G__108319 = (0);
seq__108139 = G__108316;
chunk__108140 = G__108317;
count__108141 = G__108318;
i__108142 = G__108319;
continue;
} else {
var topic = cljs.core.first(seq__108139__$1);
cljs.core.async.unsub(p,topic,c);


var G__108320 = cljs.core.next(seq__108139__$1);
var G__108321 = null;
var G__108322 = (0);
var G__108323 = (0);
seq__108139 = G__108320;
chunk__108140 = G__108321;
count__108141 = G__108322;
i__108142 = G__108323;
continue;
}
} else {
return null;
}
}
break;
}
});
});
frontend.handler.file_sync.reset_user_state_BANG_ = (function frontend$handler$file_sync$reset_user_state_BANG_(){
cljs.core.vreset_BANG_(frontend.handler.file_sync._STAR_beta_unavailable_QMARK_,false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("file-sync","onboarding-state","file-sync/onboarding-state",-864081833),null);
});
/**
 * This assumes that the network speed is stable which could be wrong sometimes.
 */
frontend.handler.file_sync.calculate_time_left = (function frontend$handler$file_sync$calculate_time_left(sync_state,progressing){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),frontend.state.get_current_file_sync_graph_uuid(),new cljs.core.Keyword("file-sync","start-time","file-sync/start-time",-882469306),new cljs.core.Keyword(null,"epoch","epoch",1435633666)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var start_time = temp__5804__auto__;
var now = cljs_time.coerce.to_epoch(cljs_time.core.now());
var diff_seconds = (now - start_time);
var finished = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.second),progressing));
var local__GT_remote_files = new cljs.core.Keyword(null,"full-local->remote-files","full-local->remote-files",224642435).cljs$core$IFn$_invoke$arity$1(sync_state);
var remote__GT_local_files = new cljs.core.Keyword(null,"full-remote->local-files","full-remote->local-files",1421172401).cljs$core$IFn$_invoke$arity$1(sync_state);
var total = ((cljs.core.seq(remote__GT_local_files))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
var or__5043__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
}),remote__GT_local_files)):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108143_SHARP_){
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__108143_SHARP_.stat);
}),local__GT_remote_files)));
var mins = ((((total / finished) * diff_seconds) / (60)) | (0));
if((((total === (0))) || ((finished === (0))))){
return "waiting";
} else {
if((mins === (0))){
return "soon";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mins,(1))){
return "1 min left";
} else {
if((mins > (30))){
return "calculating...";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mins)," mins left"].join('');

}
}
}
}
} else {
return null;
}
});
frontend.handler.file_sync.set_sync_enabled_BANG_ = (function frontend$handler$file_sync$set_sync_enabled_BANG_(value){
frontend.storage.set(new cljs.core.Keyword(null,"logseq-sync-enabled","logseq-sync-enabled",-1886165044),value);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("feature","enable-sync?","feature/enable-sync?",-817494751),value);
});
frontend.handler.file_sync.set_sync_diff_merge_enabled_BANG_ = (function frontend$handler$file_sync$set_sync_diff_merge_enabled_BANG_(value){
frontend.storage.set(new cljs.core.Keyword(null,"logseq-sync-diff-merge-enabled","logseq-sync-diff-merge-enabled",-846633784),value);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("feature","enable-sync-diff-merge?","feature/enable-sync-diff-merge?",-2042896608),value);
});

//# sourceMappingURL=frontend.handler.file_sync.js.map
