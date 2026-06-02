goog.provide('frontend.ui.date_picker');
frontend.ui.date_picker.month_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM yyyy");
frontend.ui.date_picker.week_format = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("ww");
frontend.ui.date_picker.month_label = (function frontend$ui$date_picker$month_label(date){
return cljs_time.format.unparse(frontend.ui.date_picker.month_format,date);
});
frontend.ui.date_picker.dec_month = (function frontend$ui$date_picker$dec_month(date){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
frontend.ui.date_picker.inc_month = (function frontend$ui$date_picker$inc_month(date){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
frontend.ui.date_picker.inc_date = (function frontend$ui$date_picker$inc_date(date,n){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(n));
});
/**
 * If date fails pred, subtract period until true, otherwise answer date
 */
frontend.ui.date_picker.previous = (function frontend$ui$date_picker$previous(var_args){
var G__109508 = arguments.length;
switch (G__109508) {
case 1:
return frontend.ui.date_picker.previous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.ui.date_picker.previous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.ui.date_picker.previous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.ui.date_picker.previous.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return frontend.ui.date_picker.previous.cljs$core$IFn$_invoke$arity$2(pred,frontend.util.now__GT_utc());
}));

(frontend.ui.date_picker.previous.cljs$core$IFn$_invoke$arity$2 = (function (pred,date){
return frontend.ui.date_picker.previous.cljs$core$IFn$_invoke$arity$3(pred,date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
}));

(frontend.ui.date_picker.previous.cljs$core$IFn$_invoke$arity$3 = (function (pred,date,period){
while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(date) : pred.call(null,date)))){
return date;
} else {
var G__109539 = pred;
var G__109540 = cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date,period);
var G__109541 = period;
pred = G__109539;
date = G__109540;
period = G__109541;
continue;
}
break;
}
}));

(frontend.ui.date_picker.previous.cljs$lang$maxFixedArity = 3);

frontend.ui.date_picker._EQ_date = (function frontend$ui$date_picker$_EQ_date(date1,date2){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(date1),cljs_time.core.year(date2))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date1),cljs_time.core.month(date2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day(date1),cljs_time.core.day(date2))))));
});
frontend.ui.date_picker._LT__EQ_date = (function frontend$ui$date_picker$_LT__EQ_date(date1,date2){
var or__5043__auto__ = frontend.ui.date_picker._EQ_date(date1,date2);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs_time.core.before_QMARK_(date1,date2);
}
});
frontend.ui.date_picker._GT__EQ_date = (function frontend$ui$date_picker$_GT__EQ_date(date1,date2){
var or__5043__auto__ = frontend.ui.date_picker._EQ_date(date1,date2);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs_time.core.after_QMARK_(date1,date2);
}
});
frontend.ui.date_picker.days_vector = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Mo","Mo",706762113),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"M",new cljs.core.Keyword(null,"name","name",1843675177),"MON"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Tu","Tu",-1088052995),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"TUE"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"We","We",-705480743),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"W",new cljs.core.Keyword(null,"name","name",1843675177),"WED"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Th","Th",1409372402),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"T",new cljs.core.Keyword(null,"name","name",1843675177),"THU"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Fr","Fr",1051514106),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"F",new cljs.core.Keyword(null,"name","name",1843675177),"FRI"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Sa","Sa",1909936819),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SAT"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Su","Su",1604604633),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),"S",new cljs.core.Keyword(null,"name","name",1843675177),"SUN"], null)], null);
frontend.ui.date_picker.rotate = (function frontend$ui$date_picker$rotate(n,coll){
var c = cljs.core.count(coll);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(c,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(n,c),cljs.core.cycle(coll)));
});
frontend.ui.date_picker.is_day_pred = (function frontend$ui$date_picker$is_day_pred(d){
return (function (p1__109509_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day_of_week(p1__109509_SHARP_),(d + (1)));
});
});
frontend.ui.date_picker._STAR_internal_model = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("date-picker","date","date-picker/date",-1622069581));
frontend.ui.date_picker.main_div_with = (function frontend$ui$date_picker$main_div_with(table_div,class$,style,attr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rc-datepicker-wrapper","div.rc-datepicker-wrapper",-1038824530),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-datepicker datepicker noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"position","position",-2011731912),"static"], null),style], 0))], null),attr], 0)),table_div], null)], null)], null);
});
/**
 * Answer 2 x rows showing month with nav buttons and days NOTE: not internationalized
 */
frontend.ui.date_picker.table_thead = rum.core.lazy_build(rum.core.build_defc,(function (display_month,p__109511){
var map__109512 = p__109511;
var map__109512__$1 = cljs.core.__destructure_map(map__109512);
var show_weeks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109512__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109512__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109512__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109512__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824));
var prev_date = frontend.ui.date_picker.dec_month(display_month);
var minimum__$1 = frontend.util.deref_or_value(minimum);
var maximum__$1 = frontend.util.deref_or_value(maximum);
var prev_enabled_QMARK_ = (cljs.core.truth_(minimum__$1)?cljs_time.core.after_QMARK_(prev_date,frontend.ui.date_picker.dec_month(minimum__$1)):true);
var next_date = frontend.ui.date_picker.inc_month(display_month);
var next_enabled_QMARK_ = (cljs.core.truth_(maximum__$1)?cljs_time.core.before_QMARK_(next_date,maximum__$1):true);
var template_row = (cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
var attrs109510 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(template_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["prev ",(cljs.core.truth_(prev_enabled_QMARK_)?"available selectable":"disabled")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(prev_enabled_QMARK_)){
return cljs.core.reset_BANG_(frontend.ui.date_picker._STAR_internal_model,prev_date);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold","span.font-bold",-460884588),"<"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"month",new cljs.core.Keyword(null,"col-span","col-span",-232603210),"5"], null),frontend.ui.date_picker.month_label(display_month)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["next ",(cljs.core.truth_(next_enabled_QMARK_)?"available selectable":"disabled")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(next_enabled_QMARK_)){
return cljs.core.reset_BANG_(frontend.ui.date_picker._STAR_internal_model,next_date);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold","span.font-bold",-460884588),">"], null)], null)], 0));
return daiquiri.core.create_element("thead",((cljs.core.map_QMARK_(attrs109510))?daiquiri.interpreter.element_attributes(attrs109510):null),((cljs.core.map_QMARK_(attrs109510))?[daiquiri.interpreter.interpret(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(template_row,(function (){var iter__5520__auto__ = (function frontend$ui$date_picker$iter__109517(s__109518){
return (new cljs.core.LazySeq(null,(function (){
var s__109518__$1 = s__109518;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109518__$1);
if(temp__5804__auto__){
var s__109518__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109518__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109518__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109520 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109519 = (0);
while(true){
if((i__109519 < size__5519__auto__)){
var day = cljs.core._nth(c__5518__auto__,i__109519);
cljs.core.chunk_append(b__109520,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)));

var G__109542 = (i__109519 + (1));
i__109519 = G__109542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109520),frontend$ui$date_picker$iter__109517(cljs.core.chunk_rest(s__109518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109520),null);
}
} else {
var day = cljs.core.first(s__109518__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)),frontend$ui$date_picker$iter__109517(cljs.core.rest(s__109518__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.ui.date_picker.rotate(start_of_week,frontend.ui.date_picker.days_vector));
})()))]:[daiquiri.interpreter.interpret(attrs109510),daiquiri.interpreter.interpret(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(template_row,(function (){var iter__5520__auto__ = (function frontend$ui$date_picker$iter__109525(s__109526){
return (new cljs.core.LazySeq(null,(function (){
var s__109526__$1 = s__109526;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109526__$1);
if(temp__5804__auto__){
var s__109526__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109526__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109526__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109528 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109527 = (0);
while(true){
if((i__109527 < size__5519__auto__)){
var day = cljs.core._nth(c__5518__auto__,i__109527);
cljs.core.chunk_append(b__109528,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)));

var G__109543 = (i__109527 + (1));
i__109527 = G__109543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109528),frontend$ui$date_picker$iter__109525(cljs.core.chunk_rest(s__109526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109528),null);
}
} else {
var day = cljs.core.first(s__109526__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day-enabled"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(day))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(day)], null)),frontend$ui$date_picker$iter__109525(cljs.core.rest(s__109526__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.ui.date_picker.rotate(start_of_week,frontend.ui.date_picker.days_vector));
})()))]));
}),null,"frontend.ui.date-picker/table-thead");
frontend.ui.date_picker.table_td = (function frontend$ui$date_picker$table_td(date,focus_month,selected,today,p__109529,disabled_QMARK_,on_change){
var map__109530 = p__109529;
var map__109530__$1 = cljs.core.__destructure_map(map__109530);
var attributes = map__109530__$1;
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109530__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109530__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var minimum__$1 = frontend.util.deref_or_value(minimum);
var maximum__$1 = frontend.util.deref_or_value(maximum);
var enabled_min = (cljs.core.truth_(minimum__$1)?frontend.ui.date_picker._GT__EQ_date(date,minimum__$1):true);
var enabled_max = (cljs.core.truth_(maximum__$1)?frontend.ui.date_picker._LT__EQ_date(date,maximum__$1):true);
var enabled_day = (function (){var and__5041__auto__ = enabled_min;
if(cljs.core.truth_(and__5041__auto__)){
return enabled_max;
} else {
return and__5041__auto__;
}
})();
var disabled_day_QMARK_ = (cljs.core.truth_(enabled_day)?cljs.core.not((function (){var fexpr__109531 = new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes);
return (fexpr__109531.cljs$core$IFn$_invoke$arity$1 ? fexpr__109531.cljs$core$IFn$_invoke$arity$1(date) : fexpr__109531.call(null,date));
})()):true);
var classes = (cljs.core.truth_(disabled_QMARK_)?"off":((disabled_day_QMARK_)?"off":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focus_month,cljs_time.core.month(date)))?"available":"available off"
)));
var classes__$1 = (cljs.core.truth_((function (){var and__5041__auto__ = selected;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.ui.date_picker._EQ_date(selected,date);
} else {
return and__5041__auto__;
}
})())?[classes," active start-date end-date"].join(''):(cljs.core.truth_((function (){var and__5041__auto__ = today;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.ui.date_picker._EQ_date(date,today);
} else {
return and__5041__auto__;
}
})())?[classes," today"].join(''):classes
));
var on_click = (function (e){
if(cljs.core.truth_((function (){var or__5043__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return disabled_day_QMARK_;
}
})())){
return null;
} else {
cljs.core.reset_BANG_(frontend.ui.date_picker._STAR_internal_model,date);

return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(e,date) : on_change.call(null,e,date));
}
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),classes__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),cljs_time.core.day(date)], null);
});
frontend.ui.date_picker.week_td = (function frontend$ui$date_picker$week_td(date){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"week"], null),cljs_time.format.unparse(frontend.ui.date_picker.week_format,date)], null);
});
/**
 * Return 7 columns of date cells from date inclusive
 */
frontend.ui.date_picker.table_tr = (function frontend$ui$date_picker$table_tr(date,focus_month,selected,attributes,disabled_QMARK_,on_change){
var table_row = (cljs.core.truth_(new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221).cljs$core$IFn$_invoke$arity$1(attributes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),frontend.ui.date_picker.week_td(date)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null));
var row_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109532_SHARP_){
return frontend.ui.date_picker.inc_date(date,p1__109532_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
var today = (cljs.core.truth_(new cljs.core.Keyword(null,"show-today?","show-today?",513056415).cljs$core$IFn$_invoke$arity$1(attributes))?frontend.util.now__GT_utc():null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(table_row,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109533_SHARP_){
return frontend.ui.date_picker.table_td(p1__109533_SHARP_,focus_month,selected,today,attributes,disabled_QMARK_,on_change);
}),row_dates));
});
/**
 * Return matrix of 6 rows x 7 cols table cells representing 41 days from start-date inclusive
 */
frontend.ui.date_picker.table_tbody = rum.core.lazy_build(rum.core.build_defc,(function (display_month,selected,attributes,disabled_QMARK_,on_change){
var start_of_week = new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824).cljs$core$IFn$_invoke$arity$1(attributes);
var current_start = frontend.ui.date_picker.previous.cljs$core$IFn$_invoke$arity$2(frontend.ui.date_picker.is_day_pred(start_of_week),display_month);
var focus_month = cljs_time.core.month(display_month);
var row_start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109534_SHARP_){
return frontend.ui.date_picker.inc_date(current_start,((7) * p1__109534_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
return daiquiri.interpreter.interpret(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109535_SHARP_){
return frontend.ui.date_picker.table_tr(p1__109535_SHARP_,focus_month,selected,attributes,disabled_QMARK_,on_change);
}),row_start_dates)));
}),null,"frontend.ui.date-picker/table-tbody");
/**
 * Augment passed attributes with extra info/defaults
 */
frontend.ui.date_picker.configure = (function frontend$ui$date_picker$configure(attributes){
var selectable_fn = ((cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes)))?new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738).cljs$core$IFn$_invoke$arity$1(attributes):cljs.core.constantly(true));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attributes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),selectable_fn], null)], 0));
});
frontend.ui.date_picker.date_picker = rum.core.lazy_build(rum.core.build_defc,(function (_model,p__109536){
var map__109537 = p__109536;
var map__109537__$1 = cljs.core.__destructure_map(map__109537);
var args = map__109537__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109537__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109537__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109537__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),frontend.state.get_start_of_week());
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109537__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109537__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109537__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var internal_model = frontend.util.react(frontend.ui.date_picker._STAR_internal_model);
var display_month = cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = internal_model;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.util.now__GT_utc();
}
})());
var props_with_defaults = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),start_of_week], null)], 0));
var configuration = frontend.ui.date_picker.configure(props_with_defaults);
return daiquiri.interpreter.interpret(frontend.ui.date_picker.main_div_with(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-auto","table.table-auto",-490665373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-condensed"], null),frontend.ui.date_picker.table_thead(display_month,configuration),frontend.ui.date_picker.table_tbody(display_month,internal_model,configuration,disabled_QMARK_,on_change)], null),class$,style,attr));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
cljs.core.reset_BANG_(frontend.ui.date_picker._STAR_internal_model,cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)));

return state;
})], null),frontend.modules.shortcut.core.mixin.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shortcut.handler","date-picker","shortcut.handler/date-picker",139075040),false)], null),"frontend.ui.date-picker/date-picker");

//# sourceMappingURL=frontend.ui.date_picker.js.map
