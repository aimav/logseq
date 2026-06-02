goog.provide('frontend.search.protocol');

/**
 * @interface
 */
frontend.search.protocol.Engine = function(){};

var frontend$search$protocol$Engine$query$dyn_101675 = (function (this$,q,option){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.search.protocol.query[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,q,option) : m__5391__auto__.call(null,this$,q,option));
} else {
var m__5389__auto__ = (frontend.search.protocol.query["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,q,option) : m__5389__auto__.call(null,this$,q,option));
} else {
throw cljs.core.missing_protocol("Engine.query",this$);
}
}
});
frontend.search.protocol.query = (function frontend$search$protocol$query(this$,q,option){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$query$arity$3 == null)))))){
return this$.frontend$search$protocol$Engine$query$arity$3(this$,q,option);
} else {
return frontend$search$protocol$Engine$query$dyn_101675(this$,q,option);
}
});

var frontend$search$protocol$Engine$query_page$dyn_101676 = (function (this$,q,option){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.search.protocol.query_page[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,q,option) : m__5391__auto__.call(null,this$,q,option));
} else {
var m__5389__auto__ = (frontend.search.protocol.query_page["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,q,option) : m__5389__auto__.call(null,this$,q,option));
} else {
throw cljs.core.missing_protocol("Engine.query-page",this$);
}
}
});
frontend.search.protocol.query_page = (function frontend$search$protocol$query_page(this$,q,option){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$query_page$arity$3 == null)))))){
return this$.frontend$search$protocol$Engine$query_page$arity$3(this$,q,option);
} else {
return frontend$search$protocol$Engine$query_page$dyn_101676(this$,q,option);
}
});

var frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$dyn_101677 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.search.protocol.rebuild_blocks_indice_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.search.protocol.rebuild_blocks_indice_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Engine.rebuild-blocks-indice!",this$);
}
}
});
frontend.search.protocol.rebuild_blocks_indice_BANG_ = (function frontend$search$protocol$rebuild_blocks_indice_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1 == null)))))){
return this$.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1(this$);
} else {
return frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$dyn_101677(this$);
}
});

var frontend$search$protocol$Engine$transact_blocks_BANG_$dyn_101678 = (function (this$,data){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.search.protocol.transact_blocks_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__5391__auto__.call(null,this$,data));
} else {
var m__5389__auto__ = (frontend.search.protocol.transact_blocks_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__5389__auto__.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("Engine.transact-blocks!",this$);
}
}
});
frontend.search.protocol.transact_blocks_BANG_ = (function frontend$search$protocol$transact_blocks_BANG_(this$,data){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 == null)))))){
return this$.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2(this$,data);
} else {
return frontend$search$protocol$Engine$transact_blocks_BANG_$dyn_101678(this$,data);
}
});

var frontend$search$protocol$Engine$truncate_blocks_BANG_$dyn_101679 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.search.protocol.truncate_blocks_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.search.protocol.truncate_blocks_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Engine.truncate-blocks!",this$);
}
}
});
frontend.search.protocol.truncate_blocks_BANG_ = (function frontend$search$protocol$truncate_blocks_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1 == null)))))){
return this$.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1(this$);
} else {
return frontend$search$protocol$Engine$truncate_blocks_BANG_$dyn_101679(this$);
}
});

var frontend$search$protocol$Engine$transact_pages_BANG_$dyn_101680 = (function (this$,data){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.search.protocol.transact_pages_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__5391__auto__.call(null,this$,data));
} else {
var m__5389__auto__ = (frontend.search.protocol.transact_pages_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,data) : m__5389__auto__.call(null,this$,data));
} else {
throw cljs.core.missing_protocol("Engine.transact-pages!",this$);
}
}
});
frontend.search.protocol.transact_pages_BANG_ = (function frontend$search$protocol$transact_pages_BANG_(this$,data){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$transact_pages_BANG_$arity$2 == null)))))){
return this$.frontend$search$protocol$Engine$transact_pages_BANG_$arity$2(this$,data);
} else {
return frontend$search$protocol$Engine$transact_pages_BANG_$dyn_101680(this$,data);
}
});

var frontend$search$protocol$Engine$remove_db_BANG_$dyn_101681 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.search.protocol.remove_db_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.search.protocol.remove_db_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Engine.remove-db!",this$);
}
}
});
frontend.search.protocol.remove_db_BANG_ = (function frontend$search$protocol$remove_db_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$search$protocol$Engine$remove_db_BANG_$arity$1 == null)))))){
return this$.frontend$search$protocol$Engine$remove_db_BANG_$arity$1(this$);
} else {
return frontend$search$protocol$Engine$remove_db_BANG_$dyn_101681(this$);
}
});


//# sourceMappingURL=frontend.search.protocol.js.map
