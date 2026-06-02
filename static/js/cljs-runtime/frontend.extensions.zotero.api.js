goog.provide('frontend.extensions.zotero.api');
frontend.extensions.zotero.api.config = (function frontend$extensions$zotero$api$config(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"api-version","api-version",108847181),(3),new cljs.core.Keyword(null,"base","base",185279322),"https://api.zotero.org",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(150000),new cljs.core.Keyword(null,"api-key","api-key",1037904031),frontend.extensions.zotero.setting.api_key(),new cljs.core.Keyword(null,"type","type",1174270348),frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"type-id","type-id",2030062700),frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"type-id","type-id",2030062700))], null);
});
/**
 * Creates a channel which will change put a new value to the output channel
 * after timeout has passed. Each value change resets the timeout. If value
 * changes more frequently only the latest value is put out.
 * When input channel closes, the output channel is closed.
 */
frontend.extensions.zotero.api.debounce = (function frontend$extensions$zotero$api$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__34483__auto___111670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_111396){
var state_val_111397 = (state_111396[(1)]);
if((state_val_111397 === (7))){
var inst_111341 = (state_111396[(2)]);
var state_111396__$1 = state_111396;
var statearr_111398_111671 = state_111396__$1;
(statearr_111398_111671[(2)] = inst_111341);

(statearr_111398_111671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (20))){
var state_111396__$1 = state_111396;
var statearr_111399_111672 = state_111396__$1;
(statearr_111399_111672[(2)] = null);

(statearr_111399_111672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (1))){
var inst_111336 = null;
var state_111396__$1 = (function (){var statearr_111400 = state_111396;
(statearr_111400[(7)] = inst_111336);

return statearr_111400;
})();
var statearr_111401_111673 = state_111396__$1;
(statearr_111401_111673[(2)] = null);

(statearr_111401_111673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (4))){
var state_111396__$1 = state_111396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_111396__$1,(7),in$);
} else {
if((state_val_111397 === (15))){
var inst_111358 = (state_111396[(8)]);
var inst_111344 = (state_111396[(9)]);
var inst_111379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_111358,(0),null);
var state_111396__$1 = (function (){var statearr_111402 = state_111396;
(statearr_111402[(10)] = inst_111379);

return statearr_111402;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_111396__$1,(18),out,inst_111344);
} else {
if((state_val_111397 === (21))){
var inst_111388 = (state_111396[(2)]);
var state_111396__$1 = state_111396;
var statearr_111403_111674 = state_111396__$1;
(statearr_111403_111674[(2)] = inst_111388);

(statearr_111403_111674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (13))){
var inst_111370 = cljs.core.async.close_BANG_(out);
var state_111396__$1 = state_111396;
var statearr_111404_111675 = state_111396__$1;
(statearr_111404_111675[(2)] = inst_111370);

(statearr_111404_111675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (6))){
var inst_111353 = (state_111396[(11)]);
var inst_111345 = (state_111396[(12)]);
var inst_111344 = (state_111396[(2)]);
var inst_111345__$1 = cljs.core.async.timeout(ms);
var inst_111353__$1 = in$;
var inst_111354 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_111355 = [inst_111353__$1,inst_111345__$1];
var inst_111356 = (new cljs.core.PersistentVector(null,2,(5),inst_111354,inst_111355,null));
var state_111396__$1 = (function (){var statearr_111405 = state_111396;
(statearr_111405[(9)] = inst_111344);

(statearr_111405[(12)] = inst_111345__$1);

(statearr_111405[(11)] = inst_111353__$1);

return statearr_111405;
})();
return cljs.core.async.ioc_alts_BANG_(state_111396__$1,(8),inst_111356);
} else {
if((state_val_111397 === (17))){
var inst_111390 = (state_111396[(2)]);
var state_111396__$1 = state_111396;
var statearr_111406_111676 = state_111396__$1;
(statearr_111406_111676[(2)] = inst_111390);

(statearr_111406_111676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (3))){
var inst_111394 = (state_111396[(2)]);
var state_111396__$1 = state_111396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_111396__$1,inst_111394);
} else {
if((state_val_111397 === (12))){
var inst_111366 = (state_111396[(13)]);
var inst_111336 = inst_111366;
var state_111396__$1 = (function (){var statearr_111407 = state_111396;
(statearr_111407[(7)] = inst_111336);

return statearr_111407;
})();
var statearr_111408_111677 = state_111396__$1;
(statearr_111408_111677[(2)] = null);

(statearr_111408_111677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (2))){
var inst_111336 = (state_111396[(7)]);
var inst_111338 = (inst_111336 == null);
var state_111396__$1 = state_111396;
if(cljs.core.truth_(inst_111338)){
var statearr_111409_111678 = state_111396__$1;
(statearr_111409_111678[(1)] = (4));

} else {
var statearr_111410_111679 = state_111396__$1;
(statearr_111410_111679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (19))){
var inst_111359 = (state_111396[(14)]);
var state_111396__$1 = state_111396;
var statearr_111411_111680 = state_111396__$1;
(statearr_111411_111680[(2)] = inst_111359);

(statearr_111411_111680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (11))){
var inst_111392 = (state_111396[(2)]);
var state_111396__$1 = state_111396;
var statearr_111412_111681 = state_111396__$1;
(statearr_111412_111681[(2)] = inst_111392);

(statearr_111412_111681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (9))){
var inst_111358 = (state_111396[(8)]);
var inst_111366 = (state_111396[(13)]);
var inst_111366__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_111358,(0),null);
var state_111396__$1 = (function (){var statearr_111413 = state_111396;
(statearr_111413[(13)] = inst_111366__$1);

return statearr_111413;
})();
if(cljs.core.truth_(inst_111366__$1)){
var statearr_111414_111682 = state_111396__$1;
(statearr_111414_111682[(1)] = (12));

} else {
var statearr_111415_111683 = state_111396__$1;
(statearr_111415_111683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (5))){
var inst_111336 = (state_111396[(7)]);
var state_111396__$1 = state_111396;
var statearr_111416_111684 = state_111396__$1;
(statearr_111416_111684[(2)] = inst_111336);

(statearr_111416_111684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (14))){
var inst_111372 = (state_111396[(2)]);
var state_111396__$1 = state_111396;
var statearr_111417_111685 = state_111396__$1;
(statearr_111417_111685[(2)] = inst_111372);

(statearr_111417_111685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (16))){
var inst_111360 = (state_111396[(15)]);
var inst_111384 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_111360,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_111396__$1 = state_111396;
if(inst_111384){
var statearr_111418_111686 = state_111396__$1;
(statearr_111418_111686[(1)] = (19));

} else {
var statearr_111419_111687 = state_111396__$1;
(statearr_111419_111687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (10))){
var inst_111360 = (state_111396[(15)]);
var inst_111345 = (state_111396[(12)]);
var inst_111374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_111360,inst_111345);
var state_111396__$1 = state_111396;
if(inst_111374){
var statearr_111420_111688 = state_111396__$1;
(statearr_111420_111688[(1)] = (15));

} else {
var statearr_111421_111689 = state_111396__$1;
(statearr_111421_111689[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (18))){
var inst_111381 = (state_111396[(2)]);
var inst_111336 = null;
var state_111396__$1 = (function (){var statearr_111422 = state_111396;
(statearr_111422[(16)] = inst_111381);

(statearr_111422[(7)] = inst_111336);

return statearr_111422;
})();
var statearr_111423_111690 = state_111396__$1;
(statearr_111423_111690[(2)] = null);

(statearr_111423_111690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111397 === (8))){
var inst_111358 = (state_111396[(8)]);
var inst_111360 = (state_111396[(15)]);
var inst_111353 = (state_111396[(11)]);
var inst_111358__$1 = (state_111396[(2)]);
var inst_111359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_111358__$1,(0),null);
var inst_111360__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_111358__$1,(1),null);
var inst_111361 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_111360__$1,inst_111353);
var state_111396__$1 = (function (){var statearr_111424 = state_111396;
(statearr_111424[(8)] = inst_111358__$1);

(statearr_111424[(14)] = inst_111359);

(statearr_111424[(15)] = inst_111360__$1);

return statearr_111424;
})();
if(inst_111361){
var statearr_111425_111691 = state_111396__$1;
(statearr_111425_111691[(1)] = (9));

} else {
var statearr_111426_111692 = state_111396__$1;
(statearr_111426_111692[(1)] = (10));

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
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto__ = null;
var frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto____0 = (function (){
var statearr_111427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111427[(0)] = frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto__);

(statearr_111427[(1)] = (1));

return statearr_111427;
});
var frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto____1 = (function (state_111396){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_111396);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e111428){var ex__34382__auto__ = e111428;
var statearr_111429_111693 = state_111396;
(statearr_111429_111693[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_111396[(4)]))){
var statearr_111430_111694 = state_111396;
(statearr_111430_111694[(1)] = cljs.core.first((state_111396[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111695 = state_111396;
state_111396 = G__111695;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto__ = function(state_111396){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto____1.call(this,state_111396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto____0;
frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto____1;
return frontend$extensions$zotero$api$debounce_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_111431 = f__34484__auto__();
(statearr_111431[(6)] = c__34483__auto___111670);

return statearr_111431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return out;
});
frontend.extensions.zotero.api.parse_start = (function frontend$extensions$zotero$api$parse_start(headers,next_or_prev){
var include_text = (function (){var G__111432 = next_or_prev;
var G__111432__$1 = (((G__111432 instanceof cljs.core.Keyword))?G__111432.fqn:null);
switch (G__111432__$1) {
case "next":
return "rel=\"next\"";

break;
case "prev":
return "rel=\"prev\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__111432__$1)].join('')));

}
})();
var links = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,headers)),",");
var next_link = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (l){
return clojure.string.includes_QMARK_(l,include_text);
}),links));
if(cljs.core.truth_(next_link)){
var start = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(next_link,"<");
var end = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(next_link,">;");
var next_url = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(next_link,(start + (1)),end);
var or__5043__auto__ = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(cljs_http.client.parse_url(next_url)));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "0";
}
} else {
return null;
}
});
frontend.extensions.zotero.api.results_count = (function frontend$extensions$zotero$api$results_count(headers){
return frontend.util.safe_parse_int(new cljs.core.Keyword(null,"total-results","total-results",-1147068713).cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,headers)));
});
frontend.extensions.zotero.api.get_STAR_ = (function frontend$extensions$zotero$api$get_STAR_(var_args){
var G__111434 = arguments.length;
switch (G__111434) {
case 2:
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (config,api){
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(config,api,null);
}));

(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (config,api,query_params){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_111493){
var state_val_111494 = (state_111493[(1)]);
if((state_val_111494 === (7))){
var inst_111461 = (state_111493[(7)]);
var state_111493__$1 = state_111493;
var statearr_111495_111698 = state_111493__$1;
(statearr_111495_111698[(2)] = inst_111461);

(statearr_111495_111698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (1))){
var inst_111437 = config;
var inst_111438 = cljs.core.__destructure_map(inst_111437);
var inst_111439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111438,new cljs.core.Keyword(null,"api-version","api-version",108847181));
var inst_111440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111438,new cljs.core.Keyword(null,"base","base",185279322));
var inst_111441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111438,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_111442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111438,new cljs.core.Keyword(null,"type-id","type-id",2030062700));
var inst_111443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111438,new cljs.core.Keyword(null,"api-key","api-key",1037904031));
var inst_111444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111438,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_111445 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_111441,new cljs.core.Keyword(null,"user","user",1532431356));
var state_111493__$1 = (function (){var statearr_111496 = state_111493;
(statearr_111496[(8)] = inst_111439);

(statearr_111496[(9)] = inst_111440);

(statearr_111496[(10)] = inst_111442);

(statearr_111496[(11)] = inst_111443);

(statearr_111496[(12)] = inst_111444);

return statearr_111496;
})();
if(inst_111445){
var statearr_111497_111699 = state_111493__$1;
(statearr_111497_111699[(1)] = (3));

} else {
var statearr_111498_111700 = state_111493__$1;
(statearr_111498_111700[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (4))){
var state_111493__$1 = state_111493;
var statearr_111499_111701 = state_111493__$1;
(statearr_111499_111701[(2)] = "/groups/");

(statearr_111499_111701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (15))){
var inst_111483 = (state_111493[(13)]);
var inst_111469 = (state_111493[(14)]);
var inst_111485 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_111483,new cljs.core.Keyword(null,"count","count",2139924085),inst_111469);
var state_111493__$1 = state_111493;
var statearr_111500_111702 = state_111493__$1;
(statearr_111500_111702[(2)] = inst_111485);

(statearr_111500_111702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (13))){
var inst_111478 = (state_111493[(15)]);
var state_111493__$1 = state_111493;
var statearr_111501_111703 = state_111493__$1;
(statearr_111501_111703[(2)] = inst_111478);

(statearr_111501_111703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (6))){
var inst_111463 = (state_111493[(16)]);
var inst_111464 = (state_111493[(17)]);
var inst_111467 = (state_111493[(18)]);
var inst_111466 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_kebab_case_keyword,inst_111463);
var inst_111467__$1 = frontend.extensions.zotero.api.parse_start(inst_111464,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_111468 = frontend.extensions.zotero.api.parse_start(inst_111464,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var inst_111469 = frontend.extensions.zotero.api.results_count(inst_111464);
var inst_111471 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_111472 = [inst_111466];
var inst_111473 = cljs.core.PersistentHashMap.fromArrays(inst_111471,inst_111472);
var state_111493__$1 = (function (){var statearr_111502 = state_111493;
(statearr_111502[(18)] = inst_111467__$1);

(statearr_111502[(19)] = inst_111468);

(statearr_111502[(14)] = inst_111469);

(statearr_111502[(20)] = inst_111473);

return statearr_111502;
})();
if(cljs.core.truth_(inst_111467__$1)){
var statearr_111503_111704 = state_111493__$1;
(statearr_111503_111704[(1)] = (9));

} else {
var statearr_111504_111705 = state_111493__$1;
(statearr_111504_111705[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (17))){
var inst_111488 = (state_111493[(2)]);
var state_111493__$1 = state_111493;
var statearr_111505_111706 = state_111493__$1;
(statearr_111505_111706[(2)] = inst_111488);

(statearr_111505_111706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (3))){
var state_111493__$1 = state_111493;
var statearr_111506_111707 = state_111493__$1;
(statearr_111506_111707[(2)] = "/users/");

(statearr_111506_111707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (12))){
var inst_111478 = (state_111493[(15)]);
var inst_111468 = (state_111493[(19)]);
var inst_111480 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_111478,new cljs.core.Keyword(null,"prev","prev",-1597069226),inst_111468);
var state_111493__$1 = state_111493;
var statearr_111507_111708 = state_111493__$1;
(statearr_111507_111708[(2)] = inst_111480);

(statearr_111507_111708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (2))){
var inst_111461 = (state_111493[(7)]);
var inst_111460 = (state_111493[(2)]);
var inst_111461__$1 = cljs.core.__destructure_map(inst_111460);
var inst_111462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111461__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_111463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111461__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_111464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111461__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var state_111493__$1 = (function (){var statearr_111508 = state_111493;
(statearr_111508[(7)] = inst_111461__$1);

(statearr_111508[(16)] = inst_111463);

(statearr_111508[(17)] = inst_111464);

return statearr_111508;
})();
if(cljs.core.truth_(inst_111462)){
var statearr_111509_111709 = state_111493__$1;
(statearr_111509_111709[(1)] = (6));

} else {
var statearr_111510_111710 = state_111493__$1;
(statearr_111510_111710[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (11))){
var inst_111468 = (state_111493[(19)]);
var inst_111478 = (state_111493[(2)]);
var state_111493__$1 = (function (){var statearr_111511 = state_111493;
(statearr_111511[(15)] = inst_111478);

return statearr_111511;
})();
if(cljs.core.truth_(inst_111468)){
var statearr_111512_111711 = state_111493__$1;
(statearr_111512_111711[(1)] = (12));

} else {
var statearr_111513_111712 = state_111493__$1;
(statearr_111513_111712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (9))){
var inst_111473 = (state_111493[(20)]);
var inst_111467 = (state_111493[(18)]);
var inst_111475 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_111473,new cljs.core.Keyword(null,"next","next",-117701485),inst_111467);
var state_111493__$1 = state_111493;
var statearr_111514_111713 = state_111493__$1;
(statearr_111514_111713[(2)] = inst_111475);

(statearr_111514_111713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (5))){
var inst_111440 = (state_111493[(9)]);
var inst_111442 = (state_111493[(10)]);
var inst_111443 = (state_111493[(11)]);
var inst_111439 = (state_111493[(8)]);
var inst_111444 = (state_111493[(12)]);
var inst_111449 = (state_111493[(2)]);
var inst_111450 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_111440),inst_111449,cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_111442),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api)].join('');
var inst_111451 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_111452 = ["Zotero-API-Key","Zotero-API-Version"];
var inst_111453 = [inst_111443,inst_111439];
var inst_111454 = cljs.core.PersistentHashMap.fromArrays(inst_111452,inst_111453);
var inst_111455 = camel_snake_kebab.extras.transform_keys(camel_snake_kebab.core.__GT_camelCaseString,query_params);
var inst_111456 = [inst_111444,false,inst_111454,inst_111455];
var inst_111457 = cljs.core.PersistentHashMap.fromArrays(inst_111451,inst_111456);
var inst_111458 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_111450,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_111457], 0));
var state_111493__$1 = state_111493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_111493__$1,(2),inst_111458);
} else {
if((state_val_111494 === (14))){
var inst_111469 = (state_111493[(14)]);
var inst_111483 = (state_111493[(2)]);
var state_111493__$1 = (function (){var statearr_111515 = state_111493;
(statearr_111515[(13)] = inst_111483);

return statearr_111515;
})();
if(cljs.core.truth_(inst_111469)){
var statearr_111516_111714 = state_111493__$1;
(statearr_111516_111714[(1)] = (15));

} else {
var statearr_111517_111715 = state_111493__$1;
(statearr_111517_111715[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (16))){
var inst_111483 = (state_111493[(13)]);
var state_111493__$1 = state_111493;
var statearr_111518_111716 = state_111493__$1;
(statearr_111518_111716[(2)] = inst_111483);

(statearr_111518_111716[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (10))){
var inst_111473 = (state_111493[(20)]);
var state_111493__$1 = state_111493;
var statearr_111519_111717 = state_111493__$1;
(statearr_111519_111717[(2)] = inst_111473);

(statearr_111519_111717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111494 === (8))){
var inst_111491 = (state_111493[(2)]);
var state_111493__$1 = state_111493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_111493__$1,inst_111491);
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
var frontend$extensions$zotero$api$state_machine__34379__auto__ = null;
var frontend$extensions$zotero$api$state_machine__34379__auto____0 = (function (){
var statearr_111520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111520[(0)] = frontend$extensions$zotero$api$state_machine__34379__auto__);

(statearr_111520[(1)] = (1));

return statearr_111520;
});
var frontend$extensions$zotero$api$state_machine__34379__auto____1 = (function (state_111493){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_111493);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e111521){var ex__34382__auto__ = e111521;
var statearr_111522_111718 = state_111493;
(statearr_111522_111718[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_111493[(4)]))){
var statearr_111523_111719 = state_111493;
(statearr_111523_111719[(1)] = cljs.core.first((state_111493[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111720 = state_111493;
state_111493 = G__111720;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$zotero$api$state_machine__34379__auto__ = function(state_111493){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$state_machine__34379__auto____1.call(this,state_111493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$state_machine__34379__auto____0;
frontend$extensions$zotero$api$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$state_machine__34379__auto____1;
return frontend$extensions$zotero$api$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_111524 = f__34484__auto__();
(statearr_111524[(6)] = c__34483__auto__);

return statearr_111524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}));

(frontend.extensions.zotero.api.get_STAR_.cljs$lang$maxFixedArity = 3);

frontend.extensions.zotero.api.item = (function frontend$extensions$zotero$api$item(key){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.api.config(),["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')));
});
frontend.extensions.zotero.api.all_top_items_count = (function frontend$extensions$zotero$api$all_top_items_count(){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_111534){
var state_val_111535 = (state_111534[(1)]);
if((state_val_111535 === (1))){
var inst_111525 = frontend.extensions.zotero.api.config();
var inst_111526 = [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"item-type","item-type",-73995695)];
var inst_111527 = [(1),"-attachment"];
var inst_111528 = cljs.core.PersistentHashMap.fromArrays(inst_111526,inst_111527);
var inst_111529 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_111525,"/items/top",inst_111528);
var state_111534__$1 = state_111534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_111534__$1,(2),inst_111529);
} else {
if((state_val_111535 === (2))){
var inst_111531 = (state_111534[(2)]);
var inst_111532 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(inst_111531);
var state_111534__$1 = state_111534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_111534__$1,inst_111532);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto____0 = (function (){
var statearr_111536 = [null,null,null,null,null,null,null];
(statearr_111536[(0)] = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto__);

(statearr_111536[(1)] = (1));

return statearr_111536;
});
var frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto____1 = (function (state_111534){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_111534);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e111537){var ex__34382__auto__ = e111537;
var statearr_111538_111721 = state_111534;
(statearr_111538_111721[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_111534[(4)]))){
var statearr_111539_111722 = state_111534;
(statearr_111539_111722[(1)] = cljs.core.first((state_111534[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111723 = state_111534;
state_111534 = G__111723;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto__ = function(state_111534){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto____1.call(this,state_111534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto____0;
frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto____1;
return frontend$extensions$zotero$api$all_top_items_count_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_111540 = f__34484__auto__();
(statearr_111540[(6)] = c__34483__auto__);

return statearr_111540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.extensions.zotero.api.all_top_items = (function frontend$extensions$zotero$api$all_top_items(){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_111580){
var state_val_111581 = (state_111580[(1)]);
if((state_val_111581 === (7))){
var inst_111576 = (state_111580[(2)]);
var state_111580__$1 = state_111580;
var statearr_111582_111724 = state_111580__$1;
(statearr_111582_111724[(2)] = inst_111576);

(statearr_111582_111724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (1))){
var inst_111541 = cljs.core.PersistentVector.EMPTY;
var inst_111542 = "0";
var inst_111543 = inst_111541;
var state_111580__$1 = (function (){var statearr_111583 = state_111580;
(statearr_111583[(7)] = inst_111542);

(statearr_111583[(8)] = inst_111543);

return statearr_111583;
})();
var statearr_111584_111725 = state_111580__$1;
(statearr_111584_111725[(2)] = null);

(statearr_111584_111725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (4))){
var inst_111552 = (state_111580[(2)]);
var inst_111553 = cljs.core.__destructure_map(inst_111552);
var inst_111554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111553,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_111555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111553,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_111556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111553,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_111557 = inst_111554 === false;
var state_111580__$1 = (function (){var statearr_111585 = state_111580;
(statearr_111585[(9)] = inst_111555);

(statearr_111585[(10)] = inst_111556);

return statearr_111585;
})();
if(cljs.core.truth_(inst_111557)){
var statearr_111586_111726 = state_111580__$1;
(statearr_111586_111726[(1)] = (5));

} else {
var statearr_111587_111727 = state_111580__$1;
(statearr_111587_111727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (13))){
var inst_111572 = (state_111580[(2)]);
var state_111580__$1 = state_111580;
var statearr_111588_111728 = state_111580__$1;
(statearr_111588_111728[(2)] = inst_111572);

(statearr_111588_111728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (6))){
var inst_111555 = (state_111580[(9)]);
var state_111580__$1 = state_111580;
if(cljs.core.truth_(inst_111555)){
var statearr_111589_111729 = state_111580__$1;
(statearr_111589_111729[(1)] = (8));

} else {
var statearr_111590_111730 = state_111580__$1;
(statearr_111590_111730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (3))){
var inst_111578 = (state_111580[(2)]);
var state_111580__$1 = state_111580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_111580__$1,inst_111578);
} else {
if((state_val_111581 === (12))){
var state_111580__$1 = state_111580;
var statearr_111591_111731 = state_111580__$1;
(statearr_111591_111731[(2)] = null);

(statearr_111591_111731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (2))){
var inst_111542 = (state_111580[(7)]);
var inst_111546 = frontend.extensions.zotero.api.config();
var inst_111547 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_111548 = ["-attachment",inst_111542];
var inst_111549 = cljs.core.PersistentHashMap.fromArrays(inst_111547,inst_111548);
var inst_111550 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_111546,"/items/top",inst_111549);
var state_111580__$1 = state_111580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_111580__$1,(4),inst_111550);
} else {
if((state_val_111581 === (11))){
var inst_111543 = (state_111580[(8)]);
var inst_111556 = (state_111580[(10)]);
var inst_111567 = cljs.core.PersistentVector.EMPTY;
var inst_111568 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_111543,inst_111556);
var inst_111569 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_111567,inst_111568);
var state_111580__$1 = state_111580;
var statearr_111592_111732 = state_111580__$1;
(statearr_111592_111732[(2)] = inst_111569);

(statearr_111592_111732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (9))){
var state_111580__$1 = state_111580;
var statearr_111593_111733 = state_111580__$1;
(statearr_111593_111733[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (5))){
var inst_111543 = (state_111580[(8)]);
var state_111580__$1 = state_111580;
var statearr_111595_111734 = state_111580__$1;
(statearr_111595_111734[(2)] = inst_111543);

(statearr_111595_111734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (10))){
var inst_111574 = (state_111580[(2)]);
var state_111580__$1 = state_111580;
var statearr_111596_111735 = state_111580__$1;
(statearr_111596_111735[(2)] = inst_111574);

(statearr_111596_111735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111581 === (8))){
var inst_111543 = (state_111580[(8)]);
var inst_111556 = (state_111580[(10)]);
var inst_111555 = (state_111580[(9)]);
var inst_111561 = cljs.core.PersistentVector.EMPTY;
var inst_111562 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_111543,inst_111556);
var inst_111563 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_111561,inst_111562);
var inst_111542 = inst_111555;
var inst_111543__$1 = inst_111563;
var state_111580__$1 = (function (){var statearr_111597 = state_111580;
(statearr_111597[(7)] = inst_111542);

(statearr_111597[(8)] = inst_111543__$1);

return statearr_111597;
})();
var statearr_111598_111736 = state_111580__$1;
(statearr_111598_111736[(2)] = null);

(statearr_111598_111736[(1)] = (2));


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
});
return (function() {
var frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto__ = null;
var frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto____0 = (function (){
var statearr_111599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_111599[(0)] = frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto__);

(statearr_111599[(1)] = (1));

return statearr_111599;
});
var frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto____1 = (function (state_111580){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_111580);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e111600){var ex__34382__auto__ = e111600;
var statearr_111601_111737 = state_111580;
(statearr_111601_111737[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_111580[(4)]))){
var statearr_111602_111738 = state_111580;
(statearr_111602_111738[(1)] = cljs.core.first((state_111580[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111739 = state_111580;
state_111580 = G__111739;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto__ = function(state_111580){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto____1.call(this,state_111580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto____0;
frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto____1;
return frontend$extensions$zotero$api$all_top_items_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_111603 = f__34484__auto__();
(statearr_111603[(6)] = c__34483__auto__);

return statearr_111603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
/**
 * Query all top level items except attachments
 */
frontend.extensions.zotero.api.query_top_items = (function frontend$extensions$zotero$api$query_top_items(var_args){
var G__111605 = arguments.length;
switch (G__111605) {
case 1:
return frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$1 = (function (term){
return frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2(term,"0");
}));

(frontend.extensions.zotero.api.query_top_items.cljs$core$IFn$_invoke$arity$2 = (function (term,start){
return frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(frontend.extensions.zotero.api.config(),"/items/top",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qmode","qmode",1066956365),"everything",new cljs.core.Keyword(null,"q","q",689001697),term,new cljs.core.Keyword(null,"limit","limit",-1355822363),(10),new cljs.core.Keyword(null,"item-type","item-type",-73995695),"-attachment",new cljs.core.Keyword(null,"start","start",-355208981),start], null));
}));

(frontend.extensions.zotero.api.query_top_items.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.api.all_children_items = (function frontend$extensions$zotero$api$all_children_items(key,type){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_111646){
var state_val_111647 = (state_111646[(1)]);
if((state_val_111647 === (7))){
var inst_111642 = (state_111646[(2)]);
var state_111646__$1 = state_111646;
var statearr_111648_111741 = state_111646__$1;
(statearr_111648_111741[(2)] = inst_111642);

(statearr_111648_111741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (1))){
var inst_111606 = cljs.core.PersistentVector.EMPTY;
var inst_111607 = "0";
var inst_111608 = inst_111606;
var state_111646__$1 = (function (){var statearr_111649 = state_111646;
(statearr_111649[(7)] = inst_111607);

(statearr_111649[(8)] = inst_111608);

return statearr_111649;
})();
var statearr_111650_111742 = state_111646__$1;
(statearr_111650_111742[(2)] = null);

(statearr_111650_111742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (4))){
var inst_111618 = (state_111646[(2)]);
var inst_111619 = cljs.core.__destructure_map(inst_111618);
var inst_111620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111619,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_111621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111619,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_111622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111619,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_111623 = inst_111620 === false;
var state_111646__$1 = (function (){var statearr_111651 = state_111646;
(statearr_111651[(9)] = inst_111621);

(statearr_111651[(10)] = inst_111622);

return statearr_111651;
})();
if(cljs.core.truth_(inst_111623)){
var statearr_111652_111743 = state_111646__$1;
(statearr_111652_111743[(1)] = (5));

} else {
var statearr_111653_111744 = state_111646__$1;
(statearr_111653_111744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (13))){
var inst_111638 = (state_111646[(2)]);
var state_111646__$1 = state_111646;
var statearr_111654_111745 = state_111646__$1;
(statearr_111654_111745[(2)] = inst_111638);

(statearr_111654_111745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (6))){
var inst_111621 = (state_111646[(9)]);
var state_111646__$1 = state_111646;
if(cljs.core.truth_(inst_111621)){
var statearr_111655_111746 = state_111646__$1;
(statearr_111655_111746[(1)] = (8));

} else {
var statearr_111656_111747 = state_111646__$1;
(statearr_111656_111747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (3))){
var inst_111644 = (state_111646[(2)]);
var state_111646__$1 = state_111646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_111646__$1,inst_111644);
} else {
if((state_val_111647 === (12))){
var state_111646__$1 = state_111646;
var statearr_111657_111748 = state_111646__$1;
(statearr_111657_111748[(2)] = null);

(statearr_111657_111748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (2))){
var inst_111607 = (state_111646[(7)]);
var inst_111611 = frontend.extensions.zotero.api.config();
var inst_111612 = ["/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"/children"].join('');
var inst_111613 = [new cljs.core.Keyword(null,"item-type","item-type",-73995695),new cljs.core.Keyword(null,"start","start",-355208981)];
var inst_111614 = [type,inst_111607];
var inst_111615 = cljs.core.PersistentHashMap.fromArrays(inst_111613,inst_111614);
var inst_111616 = frontend.extensions.zotero.api.get_STAR_.cljs$core$IFn$_invoke$arity$3(inst_111611,inst_111612,inst_111615);
var state_111646__$1 = state_111646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_111646__$1,(4),inst_111616);
} else {
if((state_val_111647 === (11))){
var inst_111608 = (state_111646[(8)]);
var inst_111622 = (state_111646[(10)]);
var inst_111633 = cljs.core.PersistentVector.EMPTY;
var inst_111634 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_111608,inst_111622);
var inst_111635 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_111633,inst_111634);
var state_111646__$1 = state_111646;
var statearr_111658_111749 = state_111646__$1;
(statearr_111658_111749[(2)] = inst_111635);

(statearr_111658_111749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (9))){
var state_111646__$1 = state_111646;
var statearr_111659_111750 = state_111646__$1;
(statearr_111659_111750[(1)] = (11));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (5))){
var inst_111608 = (state_111646[(8)]);
var state_111646__$1 = state_111646;
var statearr_111661_111751 = state_111646__$1;
(statearr_111661_111751[(2)] = inst_111608);

(statearr_111661_111751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (10))){
var inst_111640 = (state_111646[(2)]);
var state_111646__$1 = state_111646;
var statearr_111662_111752 = state_111646__$1;
(statearr_111662_111752[(2)] = inst_111640);

(statearr_111662_111752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111647 === (8))){
var inst_111608 = (state_111646[(8)]);
var inst_111622 = (state_111646[(10)]);
var inst_111621 = (state_111646[(9)]);
var inst_111627 = cljs.core.PersistentVector.EMPTY;
var inst_111628 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_111608,inst_111622);
var inst_111629 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_111627,inst_111628);
var inst_111607 = inst_111621;
var inst_111608__$1 = inst_111629;
var state_111646__$1 = (function (){var statearr_111663 = state_111646;
(statearr_111663[(7)] = inst_111607);

(statearr_111663[(8)] = inst_111608__$1);

return statearr_111663;
})();
var statearr_111664_111753 = state_111646__$1;
(statearr_111664_111753[(2)] = null);

(statearr_111664_111753[(1)] = (2));


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
});
return (function() {
var frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto__ = null;
var frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto____0 = (function (){
var statearr_111665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_111665[(0)] = frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto__);

(statearr_111665[(1)] = (1));

return statearr_111665;
});
var frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto____1 = (function (state_111646){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_111646);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e111666){var ex__34382__auto__ = e111666;
var statearr_111667_111754 = state_111646;
(statearr_111667_111754[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_111646[(4)]))){
var statearr_111668_111755 = state_111646;
(statearr_111668_111755[(1)] = cljs.core.first((state_111646[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__111756 = state_111646;
state_111646 = G__111756;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto__ = function(state_111646){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto____1.call(this,state_111646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto____0;
frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto____1;
return frontend$extensions$zotero$api$all_children_items_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_111669 = f__34484__auto__();
(statearr_111669[(6)] = c__34483__auto__);

return statearr_111669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.extensions.zotero.api.notes = (function frontend$extensions$zotero$api$notes(key){
return frontend.extensions.zotero.api.all_children_items(key,"note");
});
frontend.extensions.zotero.api.attachments = (function frontend$extensions$zotero$api$attachments(key){
return frontend.extensions.zotero.api.all_children_items(key,"attachment");
});

//# sourceMappingURL=frontend.extensions.zotero.api.js.map
