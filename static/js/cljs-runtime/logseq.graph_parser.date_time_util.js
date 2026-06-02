goog.provide('logseq.graph_parser.date_time_util');
/**
 * Copy of util/time-ms. Too basic to couple this to main app
 */
logseq.graph_parser.date_time_util.time_ms = (function logseq$graph_parser$date_time_util$time_ms(){
return cljs_time.coerce.to_long(cljs_time.core.now());
});
logseq.graph_parser.date_time_util.safe_journal_title_formatters = (function logseq$graph_parser$date_time_util$safe_journal_title_formatters(date_formatter){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_formatter,"MMM do, yyyy","yyyy-MM-dd","yyyy_MM_dd"], null)));
});
logseq.graph_parser.date_time_util.journal_title__GT_ = (function logseq$graph_parser$date_time_util$journal_title__GT_(journal_title,then_fn,formatters){
if(clojure.string.blank_QMARK_(journal_title)){
return null;
} else {
var temp__5804__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (formatter){
try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(formatter),logseq.graph_parser.util.capitalize_all(journal_title));
}catch (e69243){var _e = e69243;
return null;
}}),formatters)));
if(cljs.core.truth_(temp__5804__auto__)){
var time = temp__5804__auto__;
return (then_fn.cljs$core$IFn$_invoke$arity$1 ? then_fn.cljs$core$IFn$_invoke$arity$1(time) : then_fn.call(null,time));
} else {
return null;
}
}
});
logseq.graph_parser.date_time_util.journal_title__GT_int = (function logseq$graph_parser$date_time_util$journal_title__GT_int(journal_title,formatters){
if(cljs.core.truth_(journal_title)){
var journal_title__$1 = logseq.graph_parser.util.capitalize_all(journal_title);
return logseq.graph_parser.date_time_util.journal_title__GT_(journal_title__$1,(function (p1__69244_SHARP_){
return cljs.core.parse_long(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),p1__69244_SHARP_));
}),formatters);
} else {
return null;
}
});
logseq.graph_parser.date_time_util.format = (function logseq$graph_parser$date_time_util$format(date,date_formatter){
if(cljs.core.truth_(date_formatter)){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(date_formatter),date);
} else {
return null;
}
});
logseq.graph_parser.date_time_util.int__GT_journal_title = (function logseq$graph_parser$date_time_util$int__GT_journal_title(day,date_formatter){
if(cljs.core.truth_(day)){
return logseq.graph_parser.date_time_util.format(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)),date_formatter);
} else {
return null;
}
});
logseq.graph_parser.date_time_util.get_weekday = (function logseq$graph_parser$date_time_util$get_weekday(date){
return date.toLocaleString("en-us",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weekday","weekday",-1413046442),"long"], null)));
});
logseq.graph_parser.date_time_util.get_date = (function logseq$graph_parser$date_time_util$get_date(var_args){
var G__69246 = arguments.length;
switch (G__69246) {
case 0:
return logseq.graph_parser.date_time_util.get_date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.graph_parser.date_time_util.get_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.date_time_util.get_date.cljs$core$IFn$_invoke$arity$0 = (function (){
return logseq.graph_parser.date_time_util.get_date.cljs$core$IFn$_invoke$arity$1((new Date()));
}));

(logseq.graph_parser.date_time_util.get_date.cljs$core$IFn$_invoke$arity$1 = (function (date){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"year","year",335913393),date.getFullYear(),new cljs.core.Keyword(null,"month","month",-1960248533),(date.getMonth() + (1)),new cljs.core.Keyword(null,"day","day",-274800446),date.getDate(),new cljs.core.Keyword(null,"weekday","weekday",-1413046442),logseq.graph_parser.date_time_util.get_weekday(date)], null);
}));

(logseq.graph_parser.date_time_util.get_date.cljs$lang$maxFixedArity = 1);

logseq.graph_parser.date_time_util.year_month_day_padded = (function logseq$graph_parser$date_time_util$year_month_day_padded(var_args){
var G__69248 = arguments.length;
switch (G__69248) {
case 0:
return logseq.graph_parser.date_time_util.year_month_day_padded.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.graph_parser.date_time_util.year_month_day_padded.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.date_time_util.year_month_day_padded.cljs$core$IFn$_invoke$arity$0 = (function (){
return logseq.graph_parser.date_time_util.year_month_day_padded.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.date_time_util.get_date.cljs$core$IFn$_invoke$arity$0());
}));

(logseq.graph_parser.date_time_util.year_month_day_padded.cljs$core$IFn$_invoke$arity$1 = (function (date){
var map__69249 = date;
var map__69249__$1 = cljs.core.__destructure_map(map__69249);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69249__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69249__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69249__$1,new cljs.core.Keyword(null,"day","day",-274800446));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),logseq.graph_parser.util.zero_pad(month),new cljs.core.Keyword(null,"day","day",-274800446),logseq.graph_parser.util.zero_pad(day)], null);
}));

(logseq.graph_parser.date_time_util.year_month_day_padded.cljs$lang$maxFixedArity = 1);

logseq.graph_parser.date_time_util.ymd = (function logseq$graph_parser$date_time_util$ymd(var_args){
var G__69251 = arguments.length;
switch (G__69251) {
case 0:
return logseq.graph_parser.date_time_util.ymd.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return logseq.graph_parser.date_time_util.ymd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.graph_parser.date_time_util.ymd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(logseq.graph_parser.date_time_util.ymd.cljs$core$IFn$_invoke$arity$0 = (function (){
return logseq.graph_parser.date_time_util.ymd.cljs$core$IFn$_invoke$arity$1((new Date()));
}));

(logseq.graph_parser.date_time_util.ymd.cljs$core$IFn$_invoke$arity$1 = (function (date){
return logseq.graph_parser.date_time_util.ymd.cljs$core$IFn$_invoke$arity$2(date,"/");
}));

(logseq.graph_parser.date_time_util.ymd.cljs$core$IFn$_invoke$arity$2 = (function (date,sep){
var map__69252 = logseq.graph_parser.date_time_util.year_month_day_padded.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.date_time_util.get_date.cljs$core$IFn$_invoke$arity$1(date));
var map__69252__$1 = cljs.core.__destructure_map(map__69252);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69252__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69252__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69252__$1,new cljs.core.Keyword(null,"day","day",-274800446));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('');
}));

(logseq.graph_parser.date_time_util.ymd.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=logseq.graph_parser.date_time_util.js.map
