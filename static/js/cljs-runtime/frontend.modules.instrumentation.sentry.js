goog.provide('frontend.modules.instrumentation.sentry');
var module$node_modules$$sentry$react$dist$index=shadow.js.require("module$node_modules$$sentry$react$dist$index", {});
/**
 * @define {string}
 */
frontend.modules.instrumentation.sentry.SENTRY_DSN = goog.define("frontend.modules.instrumentation.sentry.SENTRY_DSN","");
frontend.modules.instrumentation.sentry.config = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"dsn","dsn",1561266567),frontend.modules.instrumentation.sentry.SENTRY_DSN,new cljs.core.Keyword(null,"release","release",-1534371381),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("logseq%s@%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?"-android":(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?"-ios":""
)),frontend.version.version], 0)),new cljs.core.Keyword(null,"environment","environment",-666037640),(cljs.core.truth_(frontend.config.dev_QMARK_)?"development":"production"),new cljs.core.Keyword(null,"initialScope","initialScope",-1985815457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.not_empty(frontend.config.revision))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"revision","revision",-1350113114),frontend.config.revision], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"platform","platform",-1086422114),(cljs.core.truth_(frontend.util.electron_QMARK_())?"electron":(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?"mobile":"web"
)),new cljs.core.Keyword(null,"publishing","publishing",-244219384),frontend.config.publishing_QMARK_], null)], 0))], null),new cljs.core.Keyword(null,"debug","debug",-1608172596),frontend.config.dev_QMARK_,new cljs.core.Keyword(null,"tracesSampleRate","tracesSampleRate",446547798),1.0,new cljs.core.Keyword(null,"beforeSend","beforeSend",-1560616376),(function (event){
try{var temp__5804__auto___116649 = cljs.core.re_matches(/file:\/\/.*?\/(app\/electron|static\/index)\.html(.*)/,event.request.url);
if(cljs.core.truth_(temp__5804__auto___116649)){
var vec__116558_116650 = temp__5804__auto___116649;
var __116651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116558_116650,(0),null);
var __116652__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116558_116650,(1),null);
var query_and_fragment_116653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116558_116650,(2),null);
(event.request.url = ["http://localhost/electron.html",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_and_fragment_116653)].join(''));
} else {
}

var _STAR_filtered_116654 = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var values_116655 = event.exception.values;
var seq__116561_116656 = cljs.core.seq(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(values_116655));
var chunk__116562_116657 = null;
var count__116563_116658 = (0);
var i__116564_116659 = (0);
while(true){
if((i__116564_116659 < count__116563_116658)){
var vec__116605_116660 = chunk__116562_116657.cljs$core$IIndexed$_nth$arity$2(null,i__116564_116659);
var idx_116661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116605_116660,(0),null);
var value_116662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116605_116660,(1),null);
var mf_116663 = (function (){var G__116608 = value_116662;
if((G__116608 == null)){
return null;
} else {
return G__116608.mechanism.data.function;
}
})();
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["setInterval",null], null), null),mf_116663)){
_STAR_filtered_116654.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_STAR_filtered_116654.cljs$core$IDeref$_deref$arity$1(null),idx_116661));
} else {
}

var seq__116609_116664 = cljs.core.seq(value_116662.stacktrace.frames);
var chunk__116610_116665 = null;
var count__116611_116666 = (0);
var i__116612_116667 = (0);
while(true){
if((i__116612_116667 < count__116611_116666)){
var frame_116668 = chunk__116610_116665.cljs$core$IIndexed$_nth$arity$2(null,i__116612_116667);
if(cljs.core.truth_(cljs.core.not_empty(frame_116668.filename))){
var temp__5804__auto___116669 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_116668.filename);
if(cljs.core.truth_(temp__5804__auto___116669)){
var vec__116619_116670 = temp__5804__auto___116669;
var __116671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116619_116670,(0),null);
var filename_116672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116619_116670,(1),null);
(frame_116668.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_116672)].join(''));

(frame_116668.lineno = (frame_116668.lineno - (2)));
} else {
}
} else {
}


var G__116673 = seq__116609_116664;
var G__116674 = chunk__116610_116665;
var G__116675 = count__116611_116666;
var G__116676 = (i__116612_116667 + (1));
seq__116609_116664 = G__116673;
chunk__116610_116665 = G__116674;
count__116611_116666 = G__116675;
i__116612_116667 = G__116676;
continue;
} else {
var temp__5804__auto___116677 = cljs.core.seq(seq__116609_116664);
if(temp__5804__auto___116677){
var seq__116609_116678__$1 = temp__5804__auto___116677;
if(cljs.core.chunked_seq_QMARK_(seq__116609_116678__$1)){
var c__5565__auto___116679 = cljs.core.chunk_first(seq__116609_116678__$1);
var G__116680 = cljs.core.chunk_rest(seq__116609_116678__$1);
var G__116681 = c__5565__auto___116679;
var G__116682 = cljs.core.count(c__5565__auto___116679);
var G__116683 = (0);
seq__116609_116664 = G__116680;
chunk__116610_116665 = G__116681;
count__116611_116666 = G__116682;
i__116612_116667 = G__116683;
continue;
} else {
var frame_116684 = cljs.core.first(seq__116609_116678__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_116684.filename))){
var temp__5804__auto___116685__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_116684.filename);
if(cljs.core.truth_(temp__5804__auto___116685__$1)){
var vec__116622_116686 = temp__5804__auto___116685__$1;
var __116687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116622_116686,(0),null);
var filename_116688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116622_116686,(1),null);
(frame_116684.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_116688)].join(''));

(frame_116684.lineno = (frame_116684.lineno - (2)));
} else {
}
} else {
}


var G__116689 = cljs.core.next(seq__116609_116678__$1);
var G__116690 = null;
var G__116691 = (0);
var G__116692 = (0);
seq__116609_116664 = G__116689;
chunk__116610_116665 = G__116690;
count__116611_116666 = G__116691;
i__116612_116667 = G__116692;
continue;
}
} else {
}
}
break;
}


var G__116693 = seq__116561_116656;
var G__116694 = chunk__116562_116657;
var G__116695 = count__116563_116658;
var G__116696 = (i__116564_116659 + (1));
seq__116561_116656 = G__116693;
chunk__116562_116657 = G__116694;
count__116563_116658 = G__116695;
i__116564_116659 = G__116696;
continue;
} else {
var temp__5804__auto___116697 = cljs.core.seq(seq__116561_116656);
if(temp__5804__auto___116697){
var seq__116561_116698__$1 = temp__5804__auto___116697;
if(cljs.core.chunked_seq_QMARK_(seq__116561_116698__$1)){
var c__5565__auto___116699 = cljs.core.chunk_first(seq__116561_116698__$1);
var G__116700 = cljs.core.chunk_rest(seq__116561_116698__$1);
var G__116701 = c__5565__auto___116699;
var G__116702 = cljs.core.count(c__5565__auto___116699);
var G__116703 = (0);
seq__116561_116656 = G__116700;
chunk__116562_116657 = G__116701;
count__116563_116658 = G__116702;
i__116564_116659 = G__116703;
continue;
} else {
var vec__116625_116704 = cljs.core.first(seq__116561_116698__$1);
var idx_116705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116625_116704,(0),null);
var value_116706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116625_116704,(1),null);
var mf_116707 = (function (){var G__116628 = value_116706;
if((G__116628 == null)){
return null;
} else {
return G__116628.mechanism.data.function;
}
})();
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["setInterval",null], null), null),mf_116707)){
_STAR_filtered_116654.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_STAR_filtered_116654.cljs$core$IDeref$_deref$arity$1(null),idx_116705));
} else {
}

var seq__116629_116708 = cljs.core.seq(value_116706.stacktrace.frames);
var chunk__116630_116709 = null;
var count__116631_116710 = (0);
var i__116632_116711 = (0);
while(true){
if((i__116632_116711 < count__116631_116710)){
var frame_116712 = chunk__116630_116709.cljs$core$IIndexed$_nth$arity$2(null,i__116632_116711);
if(cljs.core.truth_(cljs.core.not_empty(frame_116712.filename))){
var temp__5804__auto___116713__$1 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_116712.filename);
if(cljs.core.truth_(temp__5804__auto___116713__$1)){
var vec__116639_116714 = temp__5804__auto___116713__$1;
var __116715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116639_116714,(0),null);
var filename_116716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116639_116714,(1),null);
(frame_116712.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_116716)].join(''));

(frame_116712.lineno = (frame_116712.lineno - (2)));
} else {
}
} else {
}


var G__116717 = seq__116629_116708;
var G__116718 = chunk__116630_116709;
var G__116719 = count__116631_116710;
var G__116720 = (i__116632_116711 + (1));
seq__116629_116708 = G__116717;
chunk__116630_116709 = G__116718;
count__116631_116710 = G__116719;
i__116632_116711 = G__116720;
continue;
} else {
var temp__5804__auto___116721__$1 = cljs.core.seq(seq__116629_116708);
if(temp__5804__auto___116721__$1){
var seq__116629_116722__$1 = temp__5804__auto___116721__$1;
if(cljs.core.chunked_seq_QMARK_(seq__116629_116722__$1)){
var c__5565__auto___116723 = cljs.core.chunk_first(seq__116629_116722__$1);
var G__116724 = cljs.core.chunk_rest(seq__116629_116722__$1);
var G__116725 = c__5565__auto___116723;
var G__116726 = cljs.core.count(c__5565__auto___116723);
var G__116727 = (0);
seq__116629_116708 = G__116724;
chunk__116630_116709 = G__116725;
count__116631_116710 = G__116726;
i__116632_116711 = G__116727;
continue;
} else {
var frame_116728 = cljs.core.first(seq__116629_116722__$1);
if(cljs.core.truth_(cljs.core.not_empty(frame_116728.filename))){
var temp__5804__auto___116729__$2 = cljs.core.re_matches(/file:\/\/.*?\/app\/(js\/.*\.js)/,frame_116728.filename);
if(cljs.core.truth_(temp__5804__auto___116729__$2)){
var vec__116642_116730 = temp__5804__auto___116729__$2;
var __116731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116642_116730,(0),null);
var filename_116732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116642_116730,(1),null);
(frame_116728.filename = ["/static/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename_116732)].join(''));

(frame_116728.lineno = (frame_116728.lineno - (2)));
} else {
}
} else {
}


var G__116733 = cljs.core.next(seq__116629_116722__$1);
var G__116734 = null;
var G__116735 = (0);
var G__116736 = (0);
seq__116629_116708 = G__116733;
chunk__116630_116709 = G__116734;
count__116631_116710 = G__116735;
i__116632_116711 = G__116736;
continue;
}
} else {
}
}
break;
}


var G__116737 = cljs.core.next(seq__116561_116698__$1);
var G__116738 = null;
var G__116739 = (0);
var G__116740 = (0);
seq__116561_116656 = G__116737;
chunk__116562_116657 = G__116738;
count__116563_116658 = G__116739;
i__116564_116659 = G__116740;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___116741 = cljs.core.seq(cljs.core.deref(_STAR_filtered_116654));
if(temp__5804__auto___116741){
var filtered_116742 = temp__5804__auto___116741;
var seq__116645_116743 = cljs.core.seq(filtered_116742);
var chunk__116646_116744 = null;
var count__116647_116745 = (0);
var i__116648_116746 = (0);
while(true){
if((i__116648_116746 < count__116647_116745)){
var k_116747 = chunk__116646_116744.cljs$core$IIndexed$_nth$arity$2(null,i__116648_116746);
delete values_116655[k_116747];


var G__116748 = seq__116645_116743;
var G__116749 = chunk__116646_116744;
var G__116750 = count__116647_116745;
var G__116751 = (i__116648_116746 + (1));
seq__116645_116743 = G__116748;
chunk__116646_116744 = G__116749;
count__116647_116745 = G__116750;
i__116648_116746 = G__116751;
continue;
} else {
var temp__5804__auto___116752__$1 = cljs.core.seq(seq__116645_116743);
if(temp__5804__auto___116752__$1){
var seq__116645_116753__$1 = temp__5804__auto___116752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__116645_116753__$1)){
var c__5565__auto___116754 = cljs.core.chunk_first(seq__116645_116753__$1);
var G__116755 = cljs.core.chunk_rest(seq__116645_116753__$1);
var G__116756 = c__5565__auto___116754;
var G__116757 = cljs.core.count(c__5565__auto___116754);
var G__116758 = (0);
seq__116645_116743 = G__116755;
chunk__116646_116744 = G__116756;
count__116647_116745 = G__116757;
i__116648_116746 = G__116758;
continue;
} else {
var k_116759 = cljs.core.first(seq__116645_116753__$1);
delete values_116655[k_116759];


var G__116760 = cljs.core.next(seq__116645_116753__$1);
var G__116761 = null;
var G__116762 = (0);
var G__116763 = (0);
seq__116645_116743 = G__116760;
chunk__116646_116744 = G__116761;
count__116647_116745 = G__116762;
i__116648_116746 = G__116763;
continue;
}
} else {
}
}
break;
}
} else {
}
}catch (e116557){var e_116764 = e116557;
console.error(e_116764);
}
return event;
})], null);
frontend.modules.instrumentation.sentry.init = (function frontend$modules$instrumentation$sentry$init(){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(frontend.config.dev_QMARK_);
if(and__5041__auto__){
return cljs.core.not_empty(frontend.modules.instrumentation.sentry.SENTRY_DSN);
} else {
return and__5041__auto__;
}
})())){
var config = cljs.core.clj__GT_js(frontend.modules.instrumentation.sentry.config);
return module$node_modules$$sentry$react$dist$index.init(config);
} else {
return null;
}
});
frontend.modules.instrumentation.sentry.set_user_BANG_ = (function frontend$modules$instrumentation$sentry$set_user_BANG_(id){
return module$node_modules$$sentry$react$dist$index.configureScope((function (scope){
return scope.setUser(({"id": id}));
}));
});

//# sourceMappingURL=frontend.modules.instrumentation.sentry.js.map
