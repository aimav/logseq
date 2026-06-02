goog.provide('frontend.search.agency');
frontend.search.agency.get_registered_engines = (function frontend$search$agency$get_registered_engines(repo){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.search.node.__GT_Node(repo):frontend.search.browser.__GT_Browser(repo)),(cljs.core.truth_(frontend.state.lsp_enabled_QMARK_)?(function (){var iter__5520__auto__ = (function frontend$search$agency$get_registered_engines_$_iter__101876(s__101877){
return (new cljs.core.LazySeq(null,(function (){
var s__101877__$1 = s__101877;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__101877__$1);
if(temp__5804__auto__){
var s__101877__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__101877__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__101877__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__101879 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__101878 = (0);
while(true){
if((i__101878 < size__5519__auto__)){
var s = cljs.core._nth(c__5518__auto__,i__101878);
cljs.core.chunk_append(b__101879,frontend.search.plugin.__GT_Plugin(s,repo));

var G__101917 = (i__101878 + (1));
i__101878 = G__101917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__101879),frontend$search$agency$get_registered_engines_$_iter__101876(cljs.core.chunk_rest(s__101877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__101879),null);
}
} else {
var s = cljs.core.first(s__101877__$2);
return cljs.core.cons(frontend.search.plugin.__GT_Plugin(s,repo),frontend$search$agency$get_registered_engines_$_iter__101876(cljs.core.rest(s__101877__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(frontend.state.get_all_plugin_services_with_type(new cljs.core.Keyword(null,"search","search",1564939822)));
})():null)], null);
});
frontend.search.agency.get_flatten_registered_engines = (function frontend$search$agency$get_flatten_registered_engines(repo){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(frontend.search.agency.get_registered_engines(repo)));
});

/**
* @constructor
 * @implements {frontend.search.protocol.Engine}
*/
frontend.search.agency.Agency = (function (repo){
this.repo = repo;
});
(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$query$arity$3 = (function (_this,q,opts){
var self__ = this;
var _this__$1 = this;
var vec__101880 = frontend.search.agency.get_registered_engines(self__.repo);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101880,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101880,(1),null);
var seq__101883_101918 = cljs.core.seq(e2);
var chunk__101884_101919 = null;
var count__101885_101920 = (0);
var i__101886_101921 = (0);
while(true){
if((i__101886_101921 < count__101885_101920)){
var e_101922 = chunk__101884_101919.cljs$core$IIndexed$_nth$arity$2(null,i__101886_101921);
frontend.search.protocol.query(e_101922,q,opts);


var G__101923 = seq__101883_101918;
var G__101924 = chunk__101884_101919;
var G__101925 = count__101885_101920;
var G__101926 = (i__101886_101921 + (1));
seq__101883_101918 = G__101923;
chunk__101884_101919 = G__101924;
count__101885_101920 = G__101925;
i__101886_101921 = G__101926;
continue;
} else {
var temp__5804__auto___101927 = cljs.core.seq(seq__101883_101918);
if(temp__5804__auto___101927){
var seq__101883_101928__$1 = temp__5804__auto___101927;
if(cljs.core.chunked_seq_QMARK_(seq__101883_101928__$1)){
var c__5565__auto___101929 = cljs.core.chunk_first(seq__101883_101928__$1);
var G__101930 = cljs.core.chunk_rest(seq__101883_101928__$1);
var G__101931 = c__5565__auto___101929;
var G__101932 = cljs.core.count(c__5565__auto___101929);
var G__101933 = (0);
seq__101883_101918 = G__101930;
chunk__101884_101919 = G__101931;
count__101885_101920 = G__101932;
i__101886_101921 = G__101933;
continue;
} else {
var e_101934 = cljs.core.first(seq__101883_101928__$1);
frontend.search.protocol.query(e_101934,q,opts);


var G__101935 = cljs.core.next(seq__101883_101928__$1);
var G__101936 = null;
var G__101937 = (0);
var G__101938 = (0);
seq__101883_101918 = G__101935;
chunk__101884_101919 = G__101936;
count__101885_101920 = G__101937;
i__101886_101921 = G__101938;
continue;
}
} else {
}
}
break;
}

return frontend.search.protocol.query(e1,q,opts);
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$query_page$arity$3 = (function (_this,q,opts){
var self__ = this;
var _this__$1 = this;
var vec__101887 = frontend.search.agency.get_registered_engines(self__.repo);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101887,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101887,(1),null);
var seq__101890_101939 = cljs.core.seq(e2);
var chunk__101891_101940 = null;
var count__101892_101941 = (0);
var i__101893_101942 = (0);
while(true){
if((i__101893_101942 < count__101892_101941)){
var e_101943 = chunk__101891_101940.cljs$core$IIndexed$_nth$arity$2(null,i__101893_101942);
frontend.search.protocol.query_page(e_101943,q,opts);


var G__101944 = seq__101890_101939;
var G__101945 = chunk__101891_101940;
var G__101946 = count__101892_101941;
var G__101947 = (i__101893_101942 + (1));
seq__101890_101939 = G__101944;
chunk__101891_101940 = G__101945;
count__101892_101941 = G__101946;
i__101893_101942 = G__101947;
continue;
} else {
var temp__5804__auto___101948 = cljs.core.seq(seq__101890_101939);
if(temp__5804__auto___101948){
var seq__101890_101949__$1 = temp__5804__auto___101948;
if(cljs.core.chunked_seq_QMARK_(seq__101890_101949__$1)){
var c__5565__auto___101950 = cljs.core.chunk_first(seq__101890_101949__$1);
var G__101951 = cljs.core.chunk_rest(seq__101890_101949__$1);
var G__101952 = c__5565__auto___101950;
var G__101953 = cljs.core.count(c__5565__auto___101950);
var G__101954 = (0);
seq__101890_101939 = G__101951;
chunk__101891_101940 = G__101952;
count__101892_101941 = G__101953;
i__101893_101942 = G__101954;
continue;
} else {
var e_101955 = cljs.core.first(seq__101890_101949__$1);
frontend.search.protocol.query_page(e_101955,q,opts);


var G__101956 = cljs.core.next(seq__101890_101949__$1);
var G__101957 = null;
var G__101958 = (0);
var G__101959 = (0);
seq__101890_101939 = G__101956;
chunk__101891_101940 = G__101957;
count__101892_101941 = G__101958;
i__101893_101942 = G__101959;
continue;
}
} else {
}
}
break;
}

return frontend.search.protocol.query_page(e1,q,opts);
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var vec__101894 = frontend.search.agency.get_registered_engines(self__.repo);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101894,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101894,(1),null);
var seq__101897_101960 = cljs.core.seq(e2);
var chunk__101898_101961 = null;
var count__101899_101962 = (0);
var i__101900_101963 = (0);
while(true){
if((i__101900_101963 < count__101899_101962)){
var e_101964 = chunk__101898_101961.cljs$core$IIndexed$_nth$arity$2(null,i__101900_101963);
frontend.search.protocol.rebuild_blocks_indice_BANG_(e_101964);


var G__101965 = seq__101897_101960;
var G__101966 = chunk__101898_101961;
var G__101967 = count__101899_101962;
var G__101968 = (i__101900_101963 + (1));
seq__101897_101960 = G__101965;
chunk__101898_101961 = G__101966;
count__101899_101962 = G__101967;
i__101900_101963 = G__101968;
continue;
} else {
var temp__5804__auto___101969 = cljs.core.seq(seq__101897_101960);
if(temp__5804__auto___101969){
var seq__101897_101970__$1 = temp__5804__auto___101969;
if(cljs.core.chunked_seq_QMARK_(seq__101897_101970__$1)){
var c__5565__auto___101971 = cljs.core.chunk_first(seq__101897_101970__$1);
var G__101972 = cljs.core.chunk_rest(seq__101897_101970__$1);
var G__101973 = c__5565__auto___101971;
var G__101974 = cljs.core.count(c__5565__auto___101971);
var G__101975 = (0);
seq__101897_101960 = G__101972;
chunk__101898_101961 = G__101973;
count__101899_101962 = G__101974;
i__101900_101963 = G__101975;
continue;
} else {
var e_101976 = cljs.core.first(seq__101897_101970__$1);
frontend.search.protocol.rebuild_blocks_indice_BANG_(e_101976);


var G__101977 = cljs.core.next(seq__101897_101970__$1);
var G__101978 = null;
var G__101979 = (0);
var G__101980 = (0);
seq__101897_101960 = G__101977;
chunk__101898_101961 = G__101978;
count__101899_101962 = G__101979;
i__101900_101963 = G__101980;
continue;
}
} else {
}
}
break;
}

return frontend.search.protocol.rebuild_blocks_indice_BANG_(e1);
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 = (function (_this,data){
var self__ = this;
var _this__$1 = this;
var seq__101901 = cljs.core.seq(frontend.search.agency.get_flatten_registered_engines(self__.repo));
var chunk__101902 = null;
var count__101903 = (0);
var i__101904 = (0);
while(true){
if((i__101904 < count__101903)){
var e = chunk__101902.cljs$core$IIndexed$_nth$arity$2(null,i__101904);
frontend.search.protocol.transact_blocks_BANG_(e,data);


var G__101981 = seq__101901;
var G__101982 = chunk__101902;
var G__101983 = count__101903;
var G__101984 = (i__101904 + (1));
seq__101901 = G__101981;
chunk__101902 = G__101982;
count__101903 = G__101983;
i__101904 = G__101984;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__101901);
if(temp__5804__auto__){
var seq__101901__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__101901__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__101901__$1);
var G__101985 = cljs.core.chunk_rest(seq__101901__$1);
var G__101986 = c__5565__auto__;
var G__101987 = cljs.core.count(c__5565__auto__);
var G__101988 = (0);
seq__101901 = G__101985;
chunk__101902 = G__101986;
count__101903 = G__101987;
i__101904 = G__101988;
continue;
} else {
var e = cljs.core.first(seq__101901__$1);
frontend.search.protocol.transact_blocks_BANG_(e,data);


var G__101989 = cljs.core.next(seq__101901__$1);
var G__101990 = null;
var G__101991 = (0);
var G__101992 = (0);
seq__101901 = G__101989;
chunk__101902 = G__101990;
count__101903 = G__101991;
i__101904 = G__101992;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$transact_pages_BANG_$arity$2 = (function (_this,data){
var self__ = this;
var _this__$1 = this;
var seq__101905 = cljs.core.seq(frontend.search.agency.get_flatten_registered_engines(self__.repo));
var chunk__101906 = null;
var count__101907 = (0);
var i__101908 = (0);
while(true){
if((i__101908 < count__101907)){
var e = chunk__101906.cljs$core$IIndexed$_nth$arity$2(null,i__101908);
frontend.search.protocol.transact_pages_BANG_(e,data);


var G__101993 = seq__101905;
var G__101994 = chunk__101906;
var G__101995 = count__101907;
var G__101996 = (i__101908 + (1));
seq__101905 = G__101993;
chunk__101906 = G__101994;
count__101907 = G__101995;
i__101908 = G__101996;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__101905);
if(temp__5804__auto__){
var seq__101905__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__101905__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__101905__$1);
var G__101997 = cljs.core.chunk_rest(seq__101905__$1);
var G__101998 = c__5565__auto__;
var G__101999 = cljs.core.count(c__5565__auto__);
var G__102000 = (0);
seq__101905 = G__101997;
chunk__101906 = G__101998;
count__101907 = G__101999;
i__101908 = G__102000;
continue;
} else {
var e = cljs.core.first(seq__101905__$1);
frontend.search.protocol.transact_pages_BANG_(e,data);


var G__102001 = cljs.core.next(seq__101905__$1);
var G__102002 = null;
var G__102003 = (0);
var G__102004 = (0);
seq__101905 = G__102001;
chunk__101906 = G__102002;
count__101907 = G__102003;
i__101908 = G__102004;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var seq__101909 = cljs.core.seq(frontend.search.agency.get_flatten_registered_engines(self__.repo));
var chunk__101910 = null;
var count__101911 = (0);
var i__101912 = (0);
while(true){
if((i__101912 < count__101911)){
var e = chunk__101910.cljs$core$IIndexed$_nth$arity$2(null,i__101912);
frontend.search.protocol.truncate_blocks_BANG_(e);


var G__102005 = seq__101909;
var G__102006 = chunk__101910;
var G__102007 = count__101911;
var G__102008 = (i__101912 + (1));
seq__101909 = G__102005;
chunk__101910 = G__102006;
count__101911 = G__102007;
i__101912 = G__102008;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__101909);
if(temp__5804__auto__){
var seq__101909__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__101909__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__101909__$1);
var G__102009 = cljs.core.chunk_rest(seq__101909__$1);
var G__102010 = c__5565__auto__;
var G__102011 = cljs.core.count(c__5565__auto__);
var G__102012 = (0);
seq__101909 = G__102009;
chunk__101910 = G__102010;
count__101911 = G__102011;
i__101912 = G__102012;
continue;
} else {
var e = cljs.core.first(seq__101909__$1);
frontend.search.protocol.truncate_blocks_BANG_(e);


var G__102013 = cljs.core.next(seq__101909__$1);
var G__102014 = null;
var G__102015 = (0);
var G__102016 = (0);
seq__101909 = G__102013;
chunk__101910 = G__102014;
count__101911 = G__102015;
i__101912 = G__102016;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.search.agency.Agency.prototype.frontend$search$protocol$Engine$remove_db_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var seq__101913 = cljs.core.seq(frontend.search.agency.get_flatten_registered_engines(self__.repo));
var chunk__101914 = null;
var count__101915 = (0);
var i__101916 = (0);
while(true){
if((i__101916 < count__101915)){
var e = chunk__101914.cljs$core$IIndexed$_nth$arity$2(null,i__101916);
frontend.search.protocol.remove_db_BANG_(e);


var G__102017 = seq__101913;
var G__102018 = chunk__101914;
var G__102019 = count__101915;
var G__102020 = (i__101916 + (1));
seq__101913 = G__102017;
chunk__101914 = G__102018;
count__101915 = G__102019;
i__101916 = G__102020;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__101913);
if(temp__5804__auto__){
var seq__101913__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__101913__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__101913__$1);
var G__102021 = cljs.core.chunk_rest(seq__101913__$1);
var G__102022 = c__5565__auto__;
var G__102023 = cljs.core.count(c__5565__auto__);
var G__102024 = (0);
seq__101913 = G__102021;
chunk__101914 = G__102022;
count__101915 = G__102023;
i__101916 = G__102024;
continue;
} else {
var e = cljs.core.first(seq__101913__$1);
frontend.search.protocol.remove_db_BANG_(e);


var G__102025 = cljs.core.next(seq__101913__$1);
var G__102026 = null;
var G__102027 = (0);
var G__102028 = (0);
seq__101913 = G__102025;
chunk__101914 = G__102026;
count__101915 = G__102027;
i__101916 = G__102028;
continue;
}
} else {
return null;
}
}
break;
}
}));

(frontend.search.agency.Agency.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repo","repo",-358529152,null)], null);
}));

(frontend.search.agency.Agency.cljs$lang$type = true);

(frontend.search.agency.Agency.cljs$lang$ctorStr = "frontend.search.agency/Agency");

(frontend.search.agency.Agency.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.search.agency/Agency");
}));

/**
 * Positional factory function for frontend.search.agency/Agency.
 */
frontend.search.agency.__GT_Agency = (function frontend$search$agency$__GT_Agency(repo){
return (new frontend.search.agency.Agency(repo));
});


//# sourceMappingURL=frontend.search.agency.js.map
