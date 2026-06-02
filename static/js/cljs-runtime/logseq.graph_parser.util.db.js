goog.provide('logseq.graph_parser.util.db');
/**
 * Returns the milliseconds representation of the provided time, in the local timezone.
 * For example, if you run this function at 10pm EDT in the EDT timezone on May 31st,
 * it will return 1622433600000, which is equivalent to Mon May 31 2021 00 :00:00.
 */
logseq.graph_parser.util.db.date_at_local_ms = (function logseq$graph_parser$util$db$date_at_local_ms(var_args){
var G__69579 = arguments.length;
switch (G__69579) {
case 4:
return logseq.graph_parser.util.db.date_at_local_ms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return logseq.graph_parser.util.db.date_at_local_ms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.util.db.date_at_local_ms.cljs$core$IFn$_invoke$arity$4 = (function (hours,mins,secs,millisecs){
return logseq.graph_parser.util.db.date_at_local_ms.cljs$core$IFn$_invoke$arity$5(Date.now(),hours,mins,secs,millisecs);
}));

(logseq.graph_parser.util.db.date_at_local_ms.cljs$core$IFn$_invoke$arity$5 = (function (date,hours,mins,secs,millisecs){
return (new Date(date)).setHours(hours,mins,secs,millisecs);
}));

(logseq.graph_parser.util.db.date_at_local_ms.cljs$lang$maxFixedArity = 5);

/**
 * Given a date object, returns its journal page integer
 */
logseq.graph_parser.util.db.date__GT_int = (function logseq$graph_parser$util$db$date__GT_int(date){
return cljs.core.parse_long(clojure.string.replace(logseq.graph_parser.date_time_util.ymd.cljs$core$IFn$_invoke$arity$1(date),"/",""));
});
logseq.graph_parser.util.db.old__GT_new_relative_date_format = (function logseq$graph_parser$util$db$old__GT_new_relative_date_format(input){
var count = cljs.core.re_find(/^\d+/,cljs.core.name(input));
var plus_minus = (cljs.core.truth_(cljs.core.re_find(/after/,cljs.core.name(input)))?"+":"-");
var ms_QMARK_ = clojure.string.ends_with_QMARK_(cljs.core.name(input),"-ms");
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"today","today",945271563),[plus_minus,cljs.core.str.cljs$core$IFn$_invoke$arity$1(count),"d",((ms_QMARK_)?"-ms":"")].join(''));
});
logseq.graph_parser.util.db.get_relative_date = (function logseq$graph_parser$util$db$get_relative_date(input){
var G__69580 = (function (){var or__5043__auto__ = cljs.core.namespace(input);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "today";
}
})();
switch (G__69580) {
case "today":
return cljs_time.core.today();

break;
default:
throw (new Error(["No matching clause: ",G__69580].join('')));

}
});
logseq.graph_parser.util.db.get_offset_date = (function logseq$graph_parser$util$db$get_offset_date(relative_date,direction,amount,unit){
var offset_fn = (function (){var G__69581 = direction;
switch (G__69581) {
case "+":
return cljs_time.core.plus;

break;
case "-":
return cljs_time.core.minus;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69581)].join('')));

}
})();
var offset_amount = cljs.core.parse_long(amount);
var offset_unit_fn = (function (){var G__69582 = unit;
switch (G__69582) {
case "d":
return cljs_time.core.days;

break;
case "w":
return cljs_time.core.weeks;

break;
case "m":
return cljs_time.core.months;

break;
case "y":
return cljs_time.core.years;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69582)].join('')));

}
})();
var G__69583 = (function (){var G__69584 = relative_date;
var G__69585 = (offset_unit_fn.cljs$core$IFn$_invoke$arity$1 ? offset_unit_fn.cljs$core$IFn$_invoke$arity$1(offset_amount) : offset_unit_fn.call(null,offset_amount));
return (offset_fn.cljs$core$IFn$_invoke$arity$2 ? offset_fn.cljs$core$IFn$_invoke$arity$2(G__69584,G__69585) : offset_fn.call(null,G__69584,G__69585));
})();
return (offset_fn.cljs$core$IFn$_invoke$arity$1 ? offset_fn.cljs$core$IFn$_invoke$arity$1(G__69583) : offset_fn.call(null,G__69583));
});
/**
 * There are currently several time suffixes being used in inputs:
 *   - ms: milliseconds, will return a time relative to the direction the date is being adjusted
 *   - start: will return the time at the start of the day [00:00:00.000]
 *   - end: will return the time at the end of the day [23:59:59.999]
 *   - HHMM: will return the specified time at the turn of the minute [HH:MM:00.000]
 *   - HHMMSS: will return the specified time at the turm of the second [HH:MM:SS.000]
 *   - HHMMSSmmm: will return the specified time at the turn of the millisecond [HH:MM:SS.mmm]
 *   
 *   The latter three will be capped to the maximum allowed for each unit so they will always be valid times
 */
logseq.graph_parser.util.db.get_ts_units = (function logseq$graph_parser$util$db$get_ts_units(offset_direction,offset_time){
var G__69586 = offset_time;
switch (G__69586) {
case "ms":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_direction,"+")){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(59),(59),(999)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null);
}

break;
case "start":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null);

break;
case "end":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(59),(59),(999)], null);

break;
default:
var vec__69587 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset_time),"000000000"].join('');
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69587,(0),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69587,(1),null);
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69587,(2),null);
var m2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69587,(3),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69587,(4),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69587,(5),null);
var ms1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69587,(6),null);
var ms2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69587,(7),null);
var ms3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69587,(8),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5131__auto__ = (23);
var y__5132__auto__ = cljs.core.parse_long([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h2)].join(''));
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})(),(function (){var x__5131__auto__ = (59);
var y__5132__auto__ = cljs.core.parse_long([cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m2)].join(''));
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})(),(function (){var x__5131__auto__ = (59);
var y__5132__auto__ = cljs.core.parse_long([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2)].join(''));
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})(),(function (){var x__5131__auto__ = (999);
var y__5132__auto__ = cljs.core.parse_long([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ms3)].join(''));
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})()], null);

}
});
logseq.graph_parser.util.db.keyword_input_dispatch = (function logseq$graph_parser$util$db$keyword_input_dispatch(input){
if(cljs.core.truth_((function (){var fexpr__69590 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"parent-block","parent-block",-1919487774),null,new cljs.core.Keyword(null,"current-block","current-block",1027687970),null,new cljs.core.Keyword(null,"today","today",945271563),null,new cljs.core.Keyword(null,"tomorrow","tomorrow",-1509090259),null,new cljs.core.Keyword(null,"query-page","query-page",1890357937),null,new cljs.core.Keyword(null,"yesterday","yesterday",288588595),null,new cljs.core.Keyword(null,"right-now-ms","right-now-ms",870086395),null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),null], null), null);
return (fexpr__69590.cljs$core$IFn$_invoke$arity$1 ? fexpr__69590.cljs$core$IFn$_invoke$arity$1(input) : fexpr__69590.call(null,input));
})())){
return input;
} else {
if(cljs.core.truth_(cljs.core.re_find(/^[+-]\d+[dwmy]?$/,cljs.core.name(input)))){
return new cljs.core.Keyword(null,"relative-date","relative-date",1684694144);
} else {
if(cljs.core.truth_(cljs.core.re_find(/^[+-]\d+[dwmy]-(ms|start|end|\d{2}|\d{4}|\d{6}|\d{9})?$/,cljs.core.name(input)))){
return new cljs.core.Keyword(null,"relative-date-time","relative-date-time",510847038);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-of-today-ms","start-of-today-ms",-794505898),input)){
return new cljs.core.Keyword(null,"today-time","today-time",-70316549);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-of-today-ms","end-of-today-ms",-45150561),input)){
return new cljs.core.Keyword(null,"today-time","today-time",-70316549);
} else {
if(cljs.core.truth_(cljs.core.re_find(/^today-(start|end|\d{2}|\d{4}|\d{6}|\d{9})$/,cljs.core.name(input)))){
return new cljs.core.Keyword(null,"today-time","today-time",-70316549);
} else {
if(cljs.core.truth_(cljs.core.re_find(/^\d+d(-before|-after|-before-ms|-after-ms)?$/,cljs.core.name(input)))){
return new cljs.core.Keyword(null,"DEPRECATED-relative-date","DEPRECATED-relative-date",654143435);
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
if((typeof logseq !== 'undefined') && (typeof logseq.graph_parser !== 'undefined') && (typeof logseq.graph_parser.util !== 'undefined') && (typeof logseq.graph_parser.util.db !== 'undefined') && (typeof logseq.graph_parser.util.db.resolve_keyword_input !== 'undefined')){
} else {
logseq.graph_parser.util.db.resolve_keyword_input = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__69591 = cljs.core.get_global_hierarchy;
return (fexpr__69591.cljs$core$IFn$_invoke$arity$0 ? fexpr__69591.cljs$core$IFn$_invoke$arity$0() : fexpr__69591.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("logseq.graph-parser.util.db","resolve-keyword-input"),(function (_db,input,_opts){
return logseq.graph_parser.util.db.keyword_input_dispatch(input);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(function (_,___$1,p__69592){
var map__69593 = p__69592;
var map__69593__$1 = cljs.core.__destructure_map(map__69593);
var current_page_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69593__$1,new cljs.core.Keyword(null,"current-page-fn","current-page-fn",1987406514));
if(cljs.core.truth_(current_page_fn)){
var G__69594 = (current_page_fn.cljs$core$IFn$_invoke$arity$0 ? current_page_fn.cljs$core$IFn$_invoke$arity$0() : current_page_fn.call(null));
if((G__69594 == null)){
return null;
} else {
return clojure.string.lower_case(G__69594);
}
} else {
return null;
}
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"query-page","query-page",1890357937),(function (db,_,p__69595){
var map__69596 = p__69595;
var map__69596__$1 = cljs.core.__destructure_map(map__69596);
var current_block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69596__$1,new cljs.core.Keyword(null,"current-block-uuid","current-block-uuid",-559721957));
var temp__5804__auto__ = (function (){var and__5041__auto__ = current_block_uuid;
if(cljs.core.truth_(and__5041__auto__)){
var G__69597 = db;
var G__69598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),current_block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__69597,G__69598) : datascript.core.entity.call(null,G__69597,G__69598));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var current_block = temp__5804__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("block","name","block/name",1619760316)], null));
} else {
return null;
}
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970),(function (db,_,p__69599){
var map__69600 = p__69599;
var map__69600__$1 = cljs.core.__destructure_map(map__69600);
var current_block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69600__$1,new cljs.core.Keyword(null,"current-block-uuid","current-block-uuid",-559721957));
if(cljs.core.truth_(current_block_uuid)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__69601 = db;
var G__69602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),current_block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__69601,G__69602) : datascript.core.entity.call(null,G__69601,G__69602));
})());
} else {
return null;
}
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"parent-block","parent-block",-1919487774),(function (db,_,p__69603){
var map__69604 = p__69603;
var map__69604__$1 = cljs.core.__destructure_map(map__69604);
var current_block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69604__$1,new cljs.core.Keyword(null,"current-block-uuid","current-block-uuid",-559721957));
if(cljs.core.truth_(current_block_uuid)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1((function (){var G__69605 = db;
var G__69606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),current_block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__69605,G__69606) : datascript.core.entity.call(null,G__69605,G__69606));
})()));
} else {
return null;
}
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"today","today",945271563),(function (_,___$1,___$2){
return logseq.graph_parser.util.db.date__GT_int(cljs_time.core.today());
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"yesterday","yesterday",288588595),(function (_,___$1,___$2){
return logseq.graph_parser.util.db.date__GT_int(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tomorrow","tomorrow",-1509090259),(function (_,___$1,___$2){
return logseq.graph_parser.util.db.date__GT_int(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"right-now-ms","right-now-ms",870086395),(function (_,___$1,___$2){
return logseq.graph_parser.date_time_util.time_ms();
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"today-time","today-time",-70316549),(function (_db,input,_opts){
var vec__69607 = (function (){var G__69610 = input;
var G__69610__$1 = (((G__69610 instanceof cljs.core.Keyword))?G__69610.fqn:null);
switch (G__69610__$1) {
case "start-of-today-ms":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null);

break;
case "end-of-today-ms":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(59),(59),(999)], null);

break;
default:
return logseq.graph_parser.util.db.get_ts_units(null,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(input),(6)));

}
})();
var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69607,(0),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69607,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69607,(2),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69607,(3),null);
return logseq.graph_parser.util.db.date_at_local_ms.cljs$core$IFn$_invoke$arity$5(cljs_time.core.today(),hh,mm,ss,ms);
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"relative-date","relative-date",1684694144),(function (_,input,___$1){
var relative_to = logseq.graph_parser.util.db.get_relative_date(input);
var vec__69611 = cljs.core.re_find(/^([+-])(\d+)([dwmy])$/,cljs.core.name(input));
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69611,(0),null);
var offset_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69611,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69611,(2),null);
var offset_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69611,(3),null);
var offset_date = logseq.graph_parser.util.db.get_offset_date(relative_to,offset_direction,offset,offset_unit);
return logseq.graph_parser.util.db.date__GT_int(offset_date);
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"relative-date-time","relative-date-time",510847038),(function (_,input,___$1){
var relative_to = logseq.graph_parser.util.db.get_relative_date(input);
var vec__69614 = cljs.core.re_find(/^([+-])(\d+)([dwmy])-(ms|start|end|\d{2,9})$/,cljs.core.name(input));
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69614,(0),null);
var offset_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69614,(1),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69614,(2),null);
var offset_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69614,(3),null);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69614,(4),null);
var offset_date = logseq.graph_parser.util.db.get_offset_date(relative_to,offset_direction,offset,offset_unit);
var vec__69617 = logseq.graph_parser.util.db.get_ts_units(offset_direction,ts);
var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69617,(0),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69617,(1),null);
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69617,(2),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69617,(3),null);
return logseq.graph_parser.util.db.date_at_local_ms.cljs$core$IFn$_invoke$arity$5(offset_date,hh,mm,ss,ms);
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"DEPRECATED-relative-date","DEPRECATED-relative-date",654143435),(function (db,input,opts){
return logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IFn$_invoke$arity$3(db,logseq.graph_parser.util.db.old__GT_new_relative_date_format(input),opts);
}));
logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1,___$2){
return null;
}));
/**
 * Main fn for resolving advanced query :inputs
 */
logseq.graph_parser.util.db.resolve_input = (function logseq$graph_parser$util$db$resolve_input(db,input,p__69620){
var map__69621 = p__69620;
var map__69621__$1 = cljs.core.__destructure_map(map__69621);
var current_block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69621__$1,new cljs.core.Keyword(null,"current-block-uuid","current-block-uuid",-559721957));
var current_page_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69621__$1,new cljs.core.Keyword(null,"current-page-fn","current-page-fn",1987406514),cljs.core.constantly(null));
if((input instanceof cljs.core.Keyword)){
var or__5043__auto__ = logseq.graph_parser.util.db.resolve_keyword_input.cljs$core$IFn$_invoke$arity$3(db,input,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-block-uuid","current-block-uuid",-559721957),current_block_uuid,new cljs.core.Keyword(null,"current-page-fn","current-page-fn",1987406514),current_page_fn], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return input;
}
} else {
if(((typeof input === 'string') && (logseq.graph_parser.util.page_ref.page_ref_QMARK_(input)))){
return clojure.string.lower_case(logseq.graph_parser.util.page_ref.get_page_name(input));
} else {
return input;

}
}
});

//# sourceMappingURL=logseq.graph_parser.util.db.js.map
