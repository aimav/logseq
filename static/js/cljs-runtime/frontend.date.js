goog.provide('frontend.date');
goog.scope(function(){
  frontend.date.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$chrono_node$dist$index=shadow.js.require("module$node_modules$chrono_node$dist$index", {});
frontend.date.nld_parse = (function frontend$date$nld_parse(s){
if(typeof s === 'string'){
var fexpr__69269 = frontend.date.goog$module$goog$object.get(module$node_modules$chrono_node$dist$index,"parseDate");
return (fexpr__69269.cljs$core$IFn$_invoke$arity$1 ? fexpr__69269.cljs$core$IFn$_invoke$arity$1(s) : fexpr__69269.call(null,s));
} else {
return null;
}
});
frontend.date.custom_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ");
frontend.date.journal_title_formatters = (function frontend$date$journal_title_formatters(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(frontend.state.get_date_formatter(),(new cljs.core.List(null,"do MMM yyyy",(new cljs.core.List(null,"do MMMM yyyy",(new cljs.core.List(null,"MMM do, yyyy",(new cljs.core.List(null,"MMMM do, yyyy",(new cljs.core.List(null,"E, dd-MM-yyyy",(new cljs.core.List(null,"E, dd.MM.yyyy",(new cljs.core.List(null,"E, MM/dd/yyyy",(new cljs.core.List(null,"E, yyyy/MM/dd",(new cljs.core.List(null,"EEE, dd-MM-yyyy",(new cljs.core.List(null,"EEE, dd.MM.yyyy",(new cljs.core.List(null,"EEE, MM/dd/yyyy",(new cljs.core.List(null,"EEE, yyyy/MM/dd",(new cljs.core.List(null,"EEEE, dd-MM-yyyy",(new cljs.core.List(null,"EEEE, dd.MM.yyyy",(new cljs.core.List(null,"EEEE, MM/dd/yyyy",(new cljs.core.List(null,"EEEE, yyyy/MM/dd",(new cljs.core.List(null,"dd-MM-yyyy",(new cljs.core.List(null,"MM/dd/yyyy",(new cljs.core.List(null,"MM-dd-yyyy",(new cljs.core.List(null,"MM_dd_yyyy",(new cljs.core.List(null,"yyyy/MM/dd",(new cljs.core.List(null,"yyyy-MM-dd",(new cljs.core.List(null,"yyyy-MM-dd EEEE",(new cljs.core.List(null,"yyyy_MM_dd",(new cljs.core.List(null,"yyyyMMdd",(new cljs.core.List(null,"yyyy\u5E74MM\u6708dd\u65E5",null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(10),null)),(11),null)),(12),null)),(13),null)),(14),null)),(15),null)),(16),null)),(17),null)),(18),null)),(19),null)),(20),null)),(21),null)),(22),null)),(23),null)),(24),null)),(25),null)),(26),null))));
});
frontend.date.get_date_time_string = (function frontend$date$get_date_time_string(var_args){
var G__69273 = arguments.length;
switch (G__69273) {
case 0:
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
}));

(frontend.date.get_date_time_string.cljs$core$IFn$_invoke$arity$1 = (function (date_time){
return cljs_time.format.unparse(frontend.date.custom_formatter,date_time);
}));

(frontend.date.get_date_time_string.cljs$lang$maxFixedArity = 1);

/**
 * Accepts a :date-time-no-ms string representation, or a cljs-time date object
 */
frontend.date.get_locale_string = (function frontend$date$get_locale_string(input){
try{return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMM do, yyyy"),cljs_time.core.to_default_time_zone((function (){var G__69277 = input;
if(typeof input === 'string'){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671)) : cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",1655953671))),G__69277);
} else {
return G__69277;
}
})()));
}catch (e69276){var _e = e69276;
return null;
}});
frontend.date.custom_formatter_2 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd-HH-mm-ss");
frontend.date.get_date_time_string_2 = (function frontend$date$get_date_time_string_2(){
return cljs_time.format.unparse(frontend.date.custom_formatter_2,cljs_time.local.local_now());
});
frontend.date.custom_formatter_3 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd E HH:mm");
frontend.date.get_date_time_string_3 = (function frontend$date$get_date_time_string_3(){
return cljs_time.format.unparse(frontend.date.custom_formatter_3,cljs_time.local.local_now());
});
frontend.date.custom_formatter_4 = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd E HH:mm:ss");
frontend.date.get_date_time_string_4 = (function frontend$date$get_date_time_string_4(){
return cljs_time.format.unparse(frontend.date.custom_formatter_4,cljs_time.local.local_now());
});
frontend.date.journal_name = (function frontend$date$journal_name(var_args){
var G__69282 = arguments.length;
switch (G__69282) {
case 0:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.local.local_now());
}));

(frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1 = (function (date){
var formatter = frontend.state.get_date_formatter();
try{return logseq.graph_parser.date_time_util.format(date,formatter);
}catch (e69283){var e = e69283;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.date",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-journal-date","parse-journal-date",-1090640805),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Failed to parse date to journal name.",new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"format","format",-1306924766),formatter], null),new cljs.core.Keyword(null,"line","line",212345235),95], null)),null);

throw e;
}}));

(frontend.date.journal_name.cljs$lang$maxFixedArity = 1);

frontend.date.journal_name_s = (function frontend$date$journal_name_s(s){
try{return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),s));
}catch (e69285){var _e = e69285;
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.date",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-journal-date","parse-journal-date",-1090640805),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Unable to parse date to journal name, skipping.",new cljs.core.Keyword(null,"date-str","date-str",1641747607),s], null),new cljs.core.Keyword(null,"line","line",212345235),104], null)),null);

return null;
}});
frontend.date.today = (function frontend$date$today(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$0();
});
frontend.date.tomorrow = (function frontend$date$tomorrow(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
frontend.date.yesterday = (function frontend$date$yesterday(){
return frontend.date.journal_name.cljs$core$IFn$_invoke$arity$1(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
frontend.date.get_local_date = (function frontend$date$get_local_date(){
var date = (new Date());
var year = date.getFullYear();
var month = (date.getMonth() + (1));
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"day","day",-274800446),day,new cljs.core.Keyword(null,"hour","hour",-555989214),hour,new cljs.core.Keyword(null,"minute","minute",-642875969),minute], null);
});
frontend.date.get_current_time = (function frontend$date$get_current_time(){
var d = (new Date());
return d.toLocaleTimeString(frontend.date.goog$module$goog$object.get(window.navigator,"language"),cljs_bean.core.__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hour","hour",-555989214),"2-digit",new cljs.core.Keyword(null,"minute","minute",-642875969),"2-digit",new cljs.core.Keyword(null,"hourCycle","hourCycle",-1723448226),"h23"], null)));
});
/**
 * Given raw date string, return a normalized date string at best effort.
 * Warning: this is a function with heavy cost (likely 50ms). Use with caution
 */
frontend.date.normalize_date = (function frontend$date$normalize_date(s){
return cljs.core.some((function (formatter){
try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(formatter),s);
}catch (e69291){var _e = e69291;
return false;
}}),frontend.date.journal_title_formatters());
});
/**
 * Normalize journal title at best effort. Return nil if title is not a valid date.
 * Return goog.date.Date.
 * 
 * Return format: 20220812T000000
 */
frontend.date.normalize_journal_title = (function frontend$date$normalize_journal_title(title){
var and__5041__auto__ = title;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.date.normalize_date(logseq.graph_parser.util.capitalize_all(title));
} else {
return and__5041__auto__;
}
});
/**
 * This is a loose rule, requires double check by journal-title->custom-format.
 * 
 * BUG: This also accepts strings like 3/4/5 as journal titles
 */
frontend.date.valid_journal_title_QMARK_ = (function frontend$date$valid_journal_title_QMARK_(title){
return cljs.core.boolean$(frontend.date.normalize_journal_title(title));
});
frontend.date.journal_title__GT_ = (function frontend$date$journal_title__GT_(var_args){
var G__69296 = arguments.length;
switch (G__69296) {
case 2:
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2 = (function (journal_title,then_fn){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3(journal_title,then_fn,logseq.graph_parser.date_time_util.safe_journal_title_formatters(frontend.state.get_date_formatter()));
}));

(frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$3 = (function (journal_title,then_fn,formatters){
return logseq.graph_parser.date_time_util.journal_title__GT_(journal_title,then_fn,formatters);
}));

(frontend.date.journal_title__GT_.cljs$lang$maxFixedArity = 3);

frontend.date.journal_title__GT_int = (function frontend$date$journal_title__GT_int(journal_title){
return logseq.graph_parser.date_time_util.journal_title__GT_int(journal_title,logseq.graph_parser.date_time_util.safe_journal_title_formatters(frontend.state.get_date_formatter()));
});
/**
 * journal-day format yyyyMMdd
 */
frontend.date.journal_day__GT_ts = (function frontend$date$journal_day__GT_ts(day){
if(cljs.core.truth_(day)){
return cljs_time.coerce.to_long(cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)));
} else {
return null;
}
});
frontend.date.journal_title__GT_long = (function frontend$date$journal_title__GT_long(journal_title){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,(function (p1__69297_SHARP_){
return cljs_time.coerce.to_long(p1__69297_SHARP_);
}));
});
frontend.date.default_journal_filename_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy_MM_dd");
/**
 * Journal title to filename format
 */
frontend.date.journal_title__GT_default = (function frontend$date$journal_title__GT_default(journal_title){
var formatter = (function (){var temp__5802__auto__ = frontend.state.get_journal_file_name_format();
if(cljs.core.truth_(temp__5802__auto__)){
var format = temp__5802__auto__;
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format);
} else {
return frontend.date.default_journal_filename_formatter;
}
})();
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,(function (p1__69298_SHARP_){
return cljs_time.format.unparse(formatter,p1__69298_SHARP_);
}));
});
/**
 * Date object to filename format
 */
frontend.date.date__GT_file_name = (function frontend$date$date__GT_file_name(date){
var formatter = (function (){var temp__5802__auto__ = frontend.state.get_journal_file_name_format();
if(cljs.core.truth_(temp__5802__auto__)){
var format = temp__5802__auto__;
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format);
} else {
return frontend.date.default_journal_filename_formatter;
}
})();
return cljs_time.format.unparse(formatter,date);
});
frontend.date.journal_title__GT_custom_format = (function frontend$date$journal_title__GT_custom_format(journal_title){
return frontend.date.journal_title__GT_.cljs$core$IFn$_invoke$arity$2(journal_title,(function (p1__69299_SHARP_){
return logseq.graph_parser.date_time_util.format(p1__69299_SHARP_,frontend.state.get_date_formatter());
}));
});
frontend.date.int__GT_local_time_2 = (function frontend$date$int__GT_local_time_2(n){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm"),cljs_time.core.to_default_time_zone(cljs_time.coerce.from_long(n)));
});
frontend.date.iso_parser = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSS'Z'");
frontend.date.parse_iso = (function frontend$date$parse_iso(string){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(frontend.date.iso_parser,string);
});

//# sourceMappingURL=frontend.date.js.map
