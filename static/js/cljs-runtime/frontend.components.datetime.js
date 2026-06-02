goog.provide('frontend.components.datetime');
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.datetime !== 'undefined') && (typeof frontend.components.datetime.default_timestamp_value !== 'undefined')){
} else {
frontend.components.datetime.default_timestamp_value = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),"",new cljs.core.Keyword(null,"repeater","repeater",-1071171146),cljs.core.PersistentArrayMap.EMPTY], null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.datetime !== 'undefined') && (typeof frontend.components.datetime._STAR_timestamp !== 'undefined')){
} else {
frontend.components.datetime._STAR_timestamp = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.components.datetime.default_timestamp_value);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.datetime !== 'undefined') && (typeof frontend.components.datetime._STAR_show_time_QMARK_ !== 'undefined')){
} else {
frontend.components.datetime._STAR_show_time_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.datetime.time_input = rum.core.lazy_build(rum.core.build_defc,(function (default_value){
var show_QMARK_ = rum.core.react(frontend.components.datetime._STAR_show_time_QMARK_);
if(cljs.core.truth_((function (){var or__5043__auto__ = show_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (!(clojure.string.blank_QMARK_(default_value)));
}
})())){
return daiquiri.core.create_element("div",{'style':{'height':(32)},'className':"flex flex-row"},[daiquiri.core.create_element("input",{'id':"time",'defaultValue':default_value,'onChange':rum.core.mark_sync_update((function (event){
frontend.util.stop(event);

var value = frontend.util.evalue(event);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),value);
})),'className':"form-input w-20 ms:w-60"},[]),daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_time_QMARK_,false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),null);
}),'className':"ml-2 self-center"},[daiquiri.interpreter.interpret(frontend.components.svg.close)])]);
} else {
return daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_time_QMARK_,true);

var map__110337 = frontend.date.get_local_date();
var map__110337__$1 = cljs.core.__destructure_map(map__110337);
var hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110337__$1,new cljs.core.Keyword(null,"hour","hour",-555989214));
var minute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110337__$1,new cljs.core.Keyword(null,"minute","minute",-642875969));
var result = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":",frontend.util.zero_pad(minute)].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),result);
}),'className':"text-sm"},["Add time"]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.datetime/time-input");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.datetime !== 'undefined') && (typeof frontend.components.datetime._STAR_show_repeater_QMARK_ !== 'undefined')){
} else {
frontend.components.datetime._STAR_show_repeater_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.components.datetime.repeater_cp = rum.core.lazy_build(rum.core.build_defc,(function (p__110338){
var map__110339 = p__110338;
var map__110339__$1 = cljs.core.__destructure_map(map__110339);
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110339__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110339__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110339__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var show_QMARK_ = rum.core.react(frontend.components.datetime._STAR_show_repeater_QMARK_);
if(cljs.core.truth_((function (){var or__5043__auto__ = show_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = num;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = duration;
if(cljs.core.truth_(and__5041__auto____$1)){
return kind;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
})())){
return daiquiri.core.create_element("div",{'className':"w full flex flex-row justify-left"},[daiquiri.core.create_element("input",{'id':"repeater-num",'defaultValue':num,'onChange':rum.core.mark_sync_update((function (event){
var value = frontend.util.evalue(event);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeater","repeater",-1071171146),new cljs.core.Keyword(null,"num","num",1985240673)], null),value);
})),'className':"form-input w-8 mr-2 px-1 sm:w-20 sm:px-2 text-center"},[]),frontend.ui.select(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),duration)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"selected","selected",574897764),"selected");
} else {
return item;
}
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"h"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"d"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"w"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"m"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"y"], null)], null)),(function (_e,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeater","repeater",-1071171146),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),value);
}),null),daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_repeater_QMARK_,false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"repeater","repeater",-1071171146),cljs.core.PersistentArrayMap.EMPTY);
}),'className':"ml-2 self-center"},[daiquiri.interpreter.interpret(frontend.components.svg.close)])]);
} else {
return daiquiri.core.create_element("a",{'onClick':(function (){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_repeater_QMARK_,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.components.datetime._STAR_timestamp,cljs.core.assoc,new cljs.core.Keyword(null,"repeater","repeater",-1071171146),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),".+",new cljs.core.Keyword(null,"num","num",1985240673),(1),new cljs.core.Keyword(null,"duration","duration",1444101068),"d"], null));
}),'className':"text-sm"},["Add repeater"]);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.datetime/repeater-cp");
frontend.components.datetime.clear_timestamp_BANG_ = (function frontend$components$datetime$clear_timestamp_BANG_(){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_timestamp,frontend.components.datetime.default_timestamp_value);

cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_time_QMARK_,false);

cljs.core.reset_BANG_(frontend.components.datetime._STAR_show_repeater_QMARK_,false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),null);
});
/**
 * Submit handler of date picker
 */
frontend.components.datetime.on_submit = (function frontend$components$datetime$on_submit(e){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

var map__110340_110348 = cljs.core.deref(frontend.components.datetime._STAR_timestamp);
var map__110340_110349__$1 = cljs.core.__destructure_map(map__110340_110348);
var timestamp_110350 = map__110340_110349__$1;
var repeater_110351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110340_110349__$1,new cljs.core.Keyword(null,"repeater","repeater",-1071171146));
var date_110352 = new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var timestamp_110353__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(timestamp_110350,new cljs.core.Keyword(null,"date","date",-1463434462),(function (){var or__5043__auto__ = date_110352;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs_time.core.today();
}
})());
var kind_110354 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("w",new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(repeater_110351)))?"++":".+");
var timestamp_110355__$2 = cljs.core.assoc_in(timestamp_110353__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeater","repeater",-1071171146),new cljs.core.Keyword(null,"kind","kind",-717265803)], null),kind_110354);
var text_110356 = frontend.handler.repeated.timestamp_map__GT_text(timestamp_110355__$2);
var block_data_110357 = frontend.state.get_timestamp_block();
var map__110341_110358 = block_data_110357;
var map__110341_110359__$1 = cljs.core.__destructure_map(map__110341_110358);
var block_110360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110341_110359__$1,new cljs.core.Keyword(null,"block","block",664686210));
var typ_110361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110341_110359__$1,new cljs.core.Keyword(null,"typ","typ",-1304536900));
var show_QMARK__110362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110341_110359__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var editing_block_id_110363 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block());
var block_id_110364 = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_110360);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return editing_block_id_110363;
}
})();
var typ_110365__$1 = (function (){var or__5043__auto__ = cljs.core.deref(frontend.commands._STAR_current_command);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return typ_110361;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.state.editing_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_block_id_110363,block_id_110364);
} else {
return and__5041__auto__;
}
})())){
frontend.handler.editor.set_editing_block_timestamp_BANG_(typ_110365__$1,text_110356);
} else {
frontend.handler.editor.set_block_timestamp_BANG_(block_id_110364,typ_110365__$1,text_110356);
}

if(cljs.core.truth_(show_QMARK__110362)){
cljs.core.reset_BANG_(show_QMARK__110362,false);
} else {
}

frontend.components.datetime.clear_timestamp_BANG_();

frontend.state.set_timestamp_block_BANG_(null);

return frontend.commands.restore_state();
});
frontend.components.datetime.time_repeater = rum.core.lazy_build(rum.core.build_defc,(function (){
var map__110342 = rum.core.react(frontend.components.datetime._STAR_timestamp);
var map__110342__$1 = cljs.core.__destructure_map(map__110342);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110342__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var repeater = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110342__$1,new cljs.core.Keyword(null,"repeater","repeater",-1071171146));
return daiquiri.core.create_element("div",{'id':"time-repeater",'className':"py-1 px-4"},[daiquiri.core.create_element("p",{'className':"text-sm opacity-50 font-medium mt-4"},["Time:"]),frontend.components.datetime.time_input(time),daiquiri.core.create_element("p",{'className':"text-sm opacity-50 font-medium mt-4"},["Repeater:"]),frontend.components.datetime.repeater_cp(repeater),(function (){var attrs110347 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Submit",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.components.datetime.on_submit], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs110347))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mt-4"], null)], null),attrs110347], 0))):{'className':"mt-4"}),((cljs.core.map_QMARK_(attrs110347))?null:[daiquiri.interpreter.interpret(attrs110347)]));
})()]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
var temp__5804__auto__ = frontend.state.get_input();
if(cljs.core.truth_(temp__5804__auto__)){
var input = temp__5804__auto__;
return setTimeout((function (){
return frontend.mixins.on_enter.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198),input,new cljs.core.Keyword(null,"on-enter","on-enter",-928988216),frontend.components.datetime.on_submit], 0));
}),(100));
} else {
return null;
}
}))], null),"frontend.components.datetime/time-repeater");
frontend.components.datetime.date_picker = rum.core.lazy_build(rum.core.build_defc,(function (dom_id,format,_ts){
var current_command = cljs.core.deref(frontend.commands._STAR_current_command);
var deadline_or_schedule_QMARK_ = (function (){var and__5041__auto__ = current_command;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["deadline",null,"scheduled",null], null), null),clojure.string.lower_case(current_command));
} else {
return and__5041__auto__;
}
})();
var date = frontend.state.sub(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581));
return daiquiri.core.create_element("div",{'id':"date-time-picker",'onClick':(function (e){
return frontend.util.stop(e);
}),'onMouseDown':(function (e){
return e.stopPropagation();
}),'className':"flex flex-col sm:flex-row"},[daiquiri.interpreter.interpret(frontend.ui.datepicker(date,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deadline-or-schedule?","deadline-or-schedule?",1308283544),deadline_or_schedule_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e,date__$1){
frontend.util.stop(e);

var date__$2 = cljs_time.core.to_default_time_zone(date__$1);
var journal = frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(date__$2);
if(cljs.core.truth_(deadline_or_schedule_QMARK_)){
return null;
} else {
frontend.handler.editor.insert_command_BANG_(dom_id,logseq.graph_parser.util.page_ref.__GT_page_ref(journal),format,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"page-ref","page-ref",-1047131151)], null));

frontend.state.clear_editor_action_BANG_();

return cljs.core.reset_BANG_(frontend.commands._STAR_current_command,null);
}
})], null))),(cljs.core.truth_(deadline_or_schedule_QMARK_)?frontend.components.datetime.time_repeater():null)]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var ts_110366 = cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
frontend.components.datetime.clear_timestamp_BANG_();

if(cljs.core.truth_(ts_110366)){
cljs.core.reset_BANG_(frontend.components.datetime._STAR_timestamp,ts_110366);
} else {
cljs.core.reset_BANG_(frontend.components.datetime._STAR_timestamp,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),"",new cljs.core.Keyword(null,"repeater","repeater",-1071171146),cljs.core.PersistentArrayMap.EMPTY], null));
}

if(cljs.core.truth_(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))){
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581),cljs.core.get.cljs$core$IFn$_invoke$arity$3(ts_110366,new cljs.core.Keyword(null,"date","date",-1463434462),cljs_time.core.today()));
}

return state;
})], null)], null),"frontend.components.datetime/date-picker");

//# sourceMappingURL=frontend.components.datetime.js.map
