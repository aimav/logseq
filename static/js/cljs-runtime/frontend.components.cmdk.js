goog.provide('frontend.components.cmdk');
goog.scope(function(){
  frontend.components.cmdk.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.cmdk.translate = (function frontend$components$cmdk$translate(t,p__115358){
var map__115359 = p__115358;
var map__115359__$1 = cljs.core.__destructure_map(map__115359);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115359__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115359__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
if(cljs.core.truth_(id)){
var desc_i18n = (function (){var G__115360 = frontend.modules.shortcut.utils.decorate_namespace(id);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__115360) : t.call(null,G__115360));
})();
if(clojure.string.starts_with_QMARK_(desc_i18n,"{Missing key")){
return desc;
} else {
return desc_i18n;
}
} else {
return null;
}
});
frontend.components.cmdk.GROUP_LIMIT = (5);
frontend.components.cmdk.search_actions = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Search only pages",new cljs.core.Keyword(null,"info","info",-317069002),"Add filter to search",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"page",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"search",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"pages","pages",-285406513)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Search only current page",new cljs.core.Keyword(null,"info","info",-317069002),"Add filter to search",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"page",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"search",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Search only blocks",new cljs.core.Keyword(null,"info","info",-317069002),"Add filter to search",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"block",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"search",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Search only commands",new cljs.core.Keyword(null,"info","info",-317069002),"Add filter to search",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"command",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"search",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"commands","commands",161008658)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Search only whiteboards",new cljs.core.Keyword(null,"info","info",-317069002),"Add filter to search",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"whiteboard",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"search",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Search only files",new cljs.core.Keyword(null,"info","info",-317069002),"Add filter to search",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"icon","icon",1679606541),"file",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"search",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"files","files",-472457450)], null)], null)], null);
frontend.components.cmdk.filters = frontend.components.cmdk.search_actions;
frontend.components.cmdk.default_results = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"recents","recents",1354038854),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.Keyword(null,"favorites","favorites",1740773480),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"show","show",-576705889),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"items","items",1031954938),null], null)], null);
frontend.components.cmdk.lower_case_str = (function frontend$components$cmdk$lower_case_str(x){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x).toLowerCase();
});
frontend.components.cmdk.create_items = (function frontend$components$cmdk$create_items(q){
if(clojure.string.blank_QMARK_(q)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Create page",new cljs.core.Keyword(null,"icon","icon",1679606541),"new-page",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"info","info",-317069002),["Create page called '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),"'"].join(''),new cljs.core.Keyword(null,"source-create","source-create",-1664647972),new cljs.core.Keyword(null,"page","page",849072397)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Create whiteboard",new cljs.core.Keyword(null,"icon","icon",1679606541),"new-whiteboard",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"info","info",-317069002),["Create whiteboard called '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q),"'"].join(''),new cljs.core.Keyword(null,"source-create","source-create",-1664647972),new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928)], null)], null);
}
});
frontend.components.cmdk.state__GT_results_ordered = (function frontend$components$cmdk$state__GT_results_ordered(state,search_mode){
var sidebar_QMARK_ = new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)));
var results = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state));
var input = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state));
var filter = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state));
var filter_group = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(filter);
var index = cljs.core.volatile_BANG_((-1));
var visible_items = (function (group){
var map__115362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,group);
var map__115362__$1 = cljs.core.__destructure_map(map__115362);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115362__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115362__$1,new cljs.core.Keyword(null,"show","show",-576705889));
if(cljs.core.truth_((function (){var or__5043__auto__ = sidebar_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,filter_group);
}
})())){
return items;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"more","more",-2058821800),show)){
return items;
} else {
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),items);

}
}
});
var page_exists_QMARK_ = ((clojure.string.blank_QMARK_(input))?null:(function (){var G__115363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),clojure.string.trim(input)], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__115363) : frontend.db.entity.call(null,G__115363));
})());
var include_slash_QMARK_ = ((clojure.string.includes_QMARK_(input,"/")) || (clojure.string.starts_with_QMARK_(input,"/")));
var order_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(search_mode,new cljs.core.Keyword(null,"graph","graph",1558099509)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pages",new cljs.core.Keyword(null,"pages","pages",-285406513),visible_items(new cljs.core.Keyword(null,"pages","pages",-285406513))], null)], null):((include_slash_QMARK_)?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(page_exists_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pages",new cljs.core.Keyword(null,"pages","pages",-285406513),visible_items(new cljs.core.Keyword(null,"pages","pages",-285406513))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Filters",new cljs.core.Keyword(null,"filters","filters",974726919),visible_items(new cljs.core.Keyword(null,"filters","filters",974726919))], null)),(cljs.core.truth_(page_exists_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Filters",new cljs.core.Keyword(null,"filters","filters",974726919),visible_items(new cljs.core.Keyword(null,"filters","filters",974726919))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pages",new cljs.core.Keyword(null,"pages","pages",-285406513),visible_items(new cljs.core.Keyword(null,"pages","pages",-285406513))], null)),(cljs.core.truth_(page_exists_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Create",new cljs.core.Keyword(null,"create","create",-1301499256),frontend.components.cmdk.create_items(input)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current page",new cljs.core.Keyword(null,"current-page","current-page",-101294180),visible_items(new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Blocks",new cljs.core.Keyword(null,"blocks","blocks",-610462153),visible_items(new cljs.core.Keyword(null,"blocks","blocks",-610462153))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Files",new cljs.core.Keyword(null,"files","files",-472457450),visible_items(new cljs.core.Keyword(null,"files","files",-472457450))], null)], null):(cljs.core.truth_(filter_group)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_group,new cljs.core.Keyword(null,"blocks","blocks",-610462153)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current page",new cljs.core.Keyword(null,"current-page","current-page",-101294180),visible_items(new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_group,new cljs.core.Keyword(null,"current-page","current-page",-101294180)))?"Current page":cljs.core.name(filter_group)),filter_group,visible_items(filter_group)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_group,new cljs.core.Keyword(null,"pages","pages",-285406513)))?(cljs.core.truth_(page_exists_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Create",new cljs.core.Keyword(null,"create","create",-1301499256),frontend.components.cmdk.create_items(input)], null)):null)], null):cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pages",new cljs.core.Keyword(null,"pages","pages",-285406513),visible_items(new cljs.core.Keyword(null,"pages","pages",-285406513))], null),(cljs.core.truth_(page_exists_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Create",new cljs.core.Keyword(null,"create","create",-1301499256),frontend.components.cmdk.create_items(input)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Commands",new cljs.core.Keyword(null,"commands","commands",161008658),visible_items(new cljs.core.Keyword(null,"commands","commands",161008658))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current page",new cljs.core.Keyword(null,"current-page","current-page",-101294180),visible_items(new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Blocks",new cljs.core.Keyword(null,"blocks","blocks",-610462153),visible_items(new cljs.core.Keyword(null,"blocks","blocks",-610462153))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Files",new cljs.core.Keyword(null,"files","files",-472457450),visible_items(new cljs.core.Keyword(null,"files","files",-472457450))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Recents",new cljs.core.Keyword(null,"recents","recents",1354038854),visible_items(new cljs.core.Keyword(null,"recents","recents",1354038854))], null)], null))
)));
var order = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,order_STAR_);
var iter__5520__auto__ = (function frontend$components$cmdk$state__GT_results_ordered_$_iter__115364(s__115365){
return (new cljs.core.LazySeq(null,(function (){
var s__115365__$1 = s__115365;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115365__$1);
if(temp__5804__auto__){
var s__115365__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115365__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115365__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115367 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115366 = (0);
while(true){
if((i__115366 < size__5519__auto__)){
var vec__115368 = cljs.core._nth(c__5518__auto__,i__115366);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115368,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115368,(1),null);
var group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115368,(2),null);
cljs.core.chunk_append(b__115367,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_name,group_key,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_key,new cljs.core.Keyword(null,"create","create",-1301499256)))?cljs.core.count(group_items):cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_key,new cljs.core.Keyword(null,"items","items",1031954938)], null)))),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__115366,vec__115368,group_name,group_key,group_items,c__5518__auto__,size__5519__auto__,b__115367,s__115365__$2,temp__5804__auto__,sidebar_QMARK_,results,input,filter,filter_group,index,visible_items,page_exists_QMARK_,include_slash_QMARK_,order_STAR_,order){
return (function (p1__115361_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__115361_SHARP_,new cljs.core.Keyword(null,"item-index","item-index",411110314),index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(index.cljs$core$IDeref$_deref$arity$1(null) + (1))));
});})(i__115366,vec__115368,group_name,group_key,group_items,c__5518__auto__,size__5519__auto__,b__115367,s__115365__$2,temp__5804__auto__,sidebar_QMARK_,results,input,filter,filter_group,index,visible_items,page_exists_QMARK_,include_slash_QMARK_,order_STAR_,order))
,group_items)], null));

var G__115509 = (i__115366 + (1));
i__115366 = G__115509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115367),frontend$components$cmdk$state__GT_results_ordered_$_iter__115364(cljs.core.chunk_rest(s__115365__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115367),null);
}
} else {
var vec__115371 = cljs.core.first(s__115365__$2);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115371,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115371,(1),null);
var group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115371,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_name,group_key,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_key,new cljs.core.Keyword(null,"create","create",-1301499256)))?cljs.core.count(group_items):cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_key,new cljs.core.Keyword(null,"items","items",1031954938)], null)))),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__115371,group_name,group_key,group_items,s__115365__$2,temp__5804__auto__,sidebar_QMARK_,results,input,filter,filter_group,index,visible_items,page_exists_QMARK_,include_slash_QMARK_,order_STAR_,order){
return (function (p1__115361_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__115361_SHARP_,new cljs.core.Keyword(null,"item-index","item-index",411110314),index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(index.cljs$core$IDeref$_deref$arity$1(null) + (1))));
});})(vec__115371,group_name,group_key,group_items,s__115365__$2,temp__5804__auto__,sidebar_QMARK_,results,input,filter,filter_group,index,visible_items,page_exists_QMARK_,include_slash_QMARK_,order_STAR_,order))
,group_items)], null),frontend$components$cmdk$state__GT_results_ordered_$_iter__115364(cljs.core.rest(s__115365__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(order);
});
frontend.components.cmdk.state__GT_highlighted_item = (function frontend$components$cmdk$state__GT_highlighted_item(state){
var or__5043__auto__ = (function (){var G__115374 = state;
var G__115374__$1 = (((G__115374 == null))?null:new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(G__115374));
if((G__115374__$1 == null)){
return null;
} else {
return cljs.core.deref(G__115374__$1);
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var G__115375 = frontend.components.cmdk.state__GT_results_ordered(state,new cljs.core.Keyword("search","mode","search/mode",1628111395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));
var G__115375__$1 = (((G__115375 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.last,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__115375], 0)));
if((G__115375__$1 == null)){
return null;
} else {
return cljs.core.first(G__115375__$1);
}
}
});
frontend.components.cmdk.state__GT_action = (function frontend$components$cmdk$state__GT_action(state){
var highlighted_item = frontend.components.cmdk.state__GT_highlighted_item(state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-page","source-page",1338615502).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-search","source-search",-401166475).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"search","search",1564939822);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-command","source-command",969630731).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"trigger","trigger",103466139);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-create","source-create",-1664647972).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"create","create",-1301499256);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(highlighted_item))){
return new cljs.core.Keyword(null,"filter","filter",-948537934);
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
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.cmdk !== 'undefined') && (typeof frontend.components.cmdk.load_results !== 'undefined')){
} else {
frontend.components.cmdk.load_results = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__115376 = cljs.core.get_global_hierarchy;
return (fexpr__115376.cljs$core$IFn$_invoke$arity$0 ? fexpr__115376.cljs$core$IFn$_invoke$arity$0() : fexpr__115376.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.components.cmdk","load-results"),(function (group,_state){
return group;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"initial","initial",1854648214),(function (_,state){
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state);
var recent_searches = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (q){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"data","data",-232669377),q], null);
}),(frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recent","search","recent/search",360685449)) : frontend.db.get_key_value.call(null,new cljs.core.Keyword("recent","search","recent/search",360685449))));
var recent_pages = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"data","data",-232669377),page], null);
}),(frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.get_key_value.call(null,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842))));
var recent_items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115377_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"source-recent","source-recent",-733268596),new cljs.core.Keyword(null,"source-page","source-page",1338615502),new cljs.core.Keyword(null,"source-search","source-search",-401166475)],[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__115377_SHARP_)))?"page":"history"),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__115377_SHARP_),p1__115377_SHARP_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__115377_SHARP_)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__115377_SHARP_):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__115377_SHARP_)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__115377_SHARP_):null)]);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recent_searches,recent_pages));
var command_items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115378_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword(null,"source-command","source-command",969630731)],["command",new cljs.core.Keyword(null,"gray","gray",1013268388),frontend.components.cmdk.translate(frontend.context.i18n.t,p1__115378_SHARP_),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697).cljs$core$IFn$_invoke$arity$1(p1__115378_SHARP_),p1__115378_SHARP_]);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("window","close","window/close",2123760926),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c));
}),frontend.handler.command_palette.top_commands((1000))));
return cljs.core.reset_BANG_(_BANG_results,cljs.core.assoc_in(cljs.core.assoc_in(frontend.components.cmdk.default_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recents","recents",1354038854),new cljs.core.Keyword(null,"items","items",1031954938)], null),recent_items),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",161008658),new cljs.core.Keyword(null,"items","items",1031954938)], null),command_items));
}));
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"commands","commands",161008658),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

var commands = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115379_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__115379_SHARP_,new cljs.core.Keyword(null,"t","t",-1397832519),frontend.components.cmdk.translate(frontend.context.i18n.t,p1__115379_SHARP_));
}),frontend.handler.command_palette.top_commands((1000)));
var search_results = ((clojure.string.blank_QMARK_(cljs.core.deref(_BANG_input)))?commands:frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(commands,cljs.core.deref(_BANG_input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"t","t",-1397832519)], null)], 0)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"items","items",1031954938)],[new cljs.core.Keyword(null,"success","success",1890645906),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115380_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword(null,"source-command","source-command",969630731)],["command",new cljs.core.Keyword(null,"gray","gray",1013268388),frontend.components.cmdk.translate(frontend.context.i18n.t,p1__115380_SHARP_),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697).cljs$core$IFn$_invoke$arity$1(p1__115380_SHARP_),p1__115380_SHARP_]);
}),search_results)])], 0));
}));
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pages","pages",-285406513),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state);
var repo = frontend.state.get_current_repo();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.page_search.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_input)),(function (pages){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (page){
var entity = (function (){var G__115381 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__115381) : frontend.db.entity.call(null,G__115381));
})();
var whiteboard_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(entity),"whiteboard");
var source_page = frontend.db.model.get_alias_source_page(repo,page);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"source-page","source-page",1338615502)],[((whiteboard_QMARK_)?"whiteboard":"page"),new cljs.core.Keyword(null,"gray","gray",1013268388),page,(cljs.core.truth_(source_page)?new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(source_page):page)]);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,pages)),(function (items){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items], null)], 0)));
}));
}));
}));
}));
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","original-name","block/original-name",-1620099234),frontend.db.model.get_all_whiteboards(frontend.state.get_current_repo())),(function (whiteboards){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(whiteboards,cljs.core.deref(_BANG_input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(100)], null)], 0)),(function (pages){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (page){
var entity = (function (){var G__115382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__115382) : frontend.db.entity.call(null,G__115382));
})();
var whiteboard_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(entity),"whiteboard");
if(whiteboard_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"source-page","source-page",1338615502)],["whiteboard",new cljs.core.Keyword(null,"gray","gray",1013268388),page,page]);
} else {
return null;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,pages)),(function (items){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items], null)], 0)));
}));
}));
}));
}));
}));
/**
 * Return hiccup of highlighted page content FTS result
 */
frontend.components.cmdk.highlight_page_content_query = (function frontend$components$cmdk$highlight_page_content_query(content,q){
if(((clojure.string.blank_QMARK_(content)) || (clojure.string.blank_QMARK_(q)))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var content__$1 = content;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__115386 = frontend.util.text.cut_by(content__$1,"$pfts_2lqh>$","$<pfts_2lqh$");
var b_cut = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115386,(0),null);
var hl_cut = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115386,(1),null);
var e_cut = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115386,(2),null);
var hiccups_add = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((clojure.string.blank_QMARK_(b_cut))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),b_cut], null)),((clojure.string.blank_QMARK_(hl_cut))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark.p-0.rounded-none","mark.p-0.rounded-none",-1487431150),hl_cut], null))], null);
var hiccups_add__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,hiccups_add);
var new_result = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(result,hiccups_add__$1);
if((!(clojure.string.blank_QMARK_(e_cut)))){
var G__115510 = e_cut;
var G__115511 = new_result;
content__$1 = G__115510;
result = G__115511;
continue;
} else {
return new_result;
}
break;
}
})()], null);
}
});
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"blocks","blocks",-610462153),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state);
var repo = frontend.state.get_current_repo();
var current_page = frontend.util.page.get_current_page_id();
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(100)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.block_search(repo,cljs.core.deref(_BANG_input),opts),(function (blocks){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks),(function (blocks__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(((cljs.core.empty_QMARK_(blocks__$1))?frontend.search.page_content_search(repo,cljs.core.deref(_BANG_input),opts):blocks__$1),(function (blocks__$2){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
var id = ((cljs.core.uuid_QMARK_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item)))?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item):cljs.core.uuid(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item)));
var block = (function (){var G__115389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__115389) : frontend.db.entity.call(null,G__115389));
})();
var snippet = (function (){var G__115390 = new cljs.core.Keyword("block","snippet","block/snippet",598660151).cljs$core$IFn$_invoke$arity$1(item);
if((G__115390 == null)){
return null;
} else {
return frontend.components.cmdk.highlight_page_content_query(G__115390,cljs.core.deref(_BANG_input));
}
})();
if(cljs.core.truth_(block)){
var G__115391 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"icon","icon",1679606541),"block",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var or__5043__auto__ = snippet;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
}
})(),new cljs.core.Keyword(null,"header","header",119441134),frontend.components.block.breadcrumb(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search?","search?",785472524),true], null),repo,id,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),(function (){var G__115392 = block;
var G__115392__$1 = (((G__115392 == null))?null:new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(G__115392));
if((G__115392__$1 == null)){
return null;
} else {
var fexpr__115393 = cljs.core.PersistentHashSet.createAsIfByAssoc([current_page]);
return (fexpr__115393.cljs$core$IFn$_invoke$arity$1 ? fexpr__115393.cljs$core$IFn$_invoke$arity$1(G__115392__$1) : fexpr__115393.call(null,G__115392__$1));
}
})(),new cljs.core.Keyword(null,"source-block","source-block",-878290804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))], null)], null);
if(cljs.core.truth_(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__115391,new cljs.core.Keyword(null,"source-page","source-page",1338615502),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cross-blocks?","cross-blocks?",1587802608),true], 0));
} else {
return G__115391;
}
} else {
return null;
}
}),blocks__$2)),(function (items){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),items),(function (items_on_other_pages){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),items),(function (items_on_current_page){
return promesa.protocols._promise((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items_on_other_pages], null)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items_on_current_page], null)], 0));
})()
);
}));
}));
}));
}));
}));
}));
}));
}));
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"files","files",-472457450),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.file_search.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_input),(99)),(function (files_STAR_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (f){
var and__5041__auto__ = f;
if(cljs.core.truth_(and__5041__auto__)){
return ((clojure.string.ends_with_QMARK_(f,".edn")) && (((clojure.string.starts_with_QMARK_(f,"whiteboards/")) || (((clojure.string.starts_with_QMARK_(f,"assets/")) || (((clojure.string.starts_with_QMARK_(f,"logseq/version-files")) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["logseq/metadata.edn",null,"logseq/pages-metadata.edn",null,"logseq/graphs-txid.edn",null], null), null),f)))))))));
} else {
return and__5041__auto__;
}
}),files_STAR_),(function (files){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"file-path","file-path",-2005501162)],["file",new cljs.core.Keyword(null,"gray","gray",1013268388),file,file]);
}),files),(function (items){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items], null)], 0)));
}));
}));
}));
}));
}));
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recents","recents",1354038854),(function (group,state){
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state);
var recent_searches = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (q){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"data","data",-232669377),q], null);
}),(frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recent","search","recent/search",360685449)) : frontend.db.get_key_value.call(null,new cljs.core.Keyword("recent","search","recent/search",360685449))));
var recent_pages = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (page){
var temp__5804__auto__ = (function (){var G__115396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(page) : frontend.util.page_name_sanity_lc.call(null,page))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__115396) : frontend.db.entity.call(null,G__115396));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page_entity = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity)], null);
} else {
return null;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,(frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_key_value.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("recent","pages","recent/pages",-1506088842)) : frontend.db.get_key_value.call(null,new cljs.core.Keyword("recent","pages","recent/pages",-1506088842))))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__115395_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"source-recent","source-recent",-733268596),new cljs.core.Keyword(null,"source-page","source-page",1338615502),new cljs.core.Keyword(null,"source-search","source-search",-401166475)],[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__115395_SHARP_)))?"page":"history"),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__115395_SHARP_),p1__115395_SHARP_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__115395_SHARP_)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__115395_SHARP_):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__115395_SHARP_)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__115395_SHARP_):null)]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__115394_SHARP_){
return clojure.string.includes_QMARK_(frontend.components.cmdk.lower_case_str(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__115394_SHARP_)),frontend.components.cmdk.lower_case_str(cljs.core.deref(_BANG_input)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recent_searches,recent_pages)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items], null)], 0));
}));
frontend.components.cmdk.get_filter_q = (function frontend$components$cmdk$get_filter_q(input){
var or__5043__auto__ = ((clojure.string.starts_with_QMARK_(input,"/"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(input,(1)):null);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.last(logseq.graph_parser.util.split_last("/",input));
}
});
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"filters","filters",974726919),(function (group,state){
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var input = cljs.core.deref(_BANG_input);
var q = (function (){var or__5043__auto__ = frontend.components.cmdk.get_filter_q(input);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var matched_items = ((clojure.string.blank_QMARK_(q))?frontend.components.cmdk.filters:frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic(frontend.components.cmdk.filters,q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], 0)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,group,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),matched_items], null)], 0));
}));
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(function (group,state){
var temp__5802__auto__ = frontend.util.page.get_current_page_id();
if(cljs.core.truth_(temp__5802__auto__)){
var current_page = temp__5802__auto__;
var _BANG_results = new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var repo = frontend.state.get_current_repo();
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"limit","limit",-1355822363),(100),new cljs.core.Keyword(null,"page","page",849072397),current_page], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_results,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"loading","loading",-737050189));

return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.search.block_search(repo,cljs.core.deref(_BANG_input),opts),(function (blocks){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,blocks),(function (blocks__$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var id = ((cljs.core.uuid_QMARK_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))?new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block):cljs.core.uuid(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"icon","icon",1679606541),"block",new cljs.core.Keyword(null,"icon-theme","icon-theme",1771652151),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"header","header",119441134),frontend.components.block.breadcrumb(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search?","search?",785472524),true], null),repo,id,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),true,new cljs.core.Keyword(null,"source-block","source-block",-878290804),block], null);
}),blocks__$1),(function (items){
return promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_results,cljs.core.update,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"items","items",1031954938),items], null)], 0)));
}));
}));
}));
}));
} else {
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state),null);
}
}));
frontend.components.cmdk.load_results.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,state){
if(cljs.core.not((function (){var G__115397 = state;
var G__115397__$1 = (((G__115397 == null))?null:new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(G__115397));
var G__115397__$2 = (((G__115397__$1 == null))?null:cljs.core.deref(G__115397__$1));
if((G__115397__$2 == null)){
return null;
} else {
return cljs.core.seq(G__115397__$2);
}
})())){
return frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initial","initial",1854648214),state);
} else {
var filter_group = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(filter_group)){
return frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(filter_group,state);
} else {
frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"commands","commands",161008658),state);

frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blocks","blocks",-610462153),state);

frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pages","pages",-285406513),state);

frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filters","filters",974726919),state);

frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"files","files",-472457450),state);

frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recents","recents",1354038854),state);

return frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654),state);
}
}
}));
frontend.components.cmdk.copy_block_ref = (function frontend$components$cmdk$copy_block_ref(state){
var temp__5804__auto__ = (function (){var G__115398 = state;
var G__115398__$1 = (((G__115398 == null))?null:frontend.components.cmdk.state__GT_highlighted_item(G__115398));
var G__115398__$2 = (((G__115398__$1 == null))?null:new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(G__115398__$1));
var G__115398__$3 = (((G__115398__$2 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__115398__$2));
if((G__115398__$3 == null)){
return null;
} else {
return cljs.core.uuid(G__115398__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block_uuid = temp__5804__auto__;
frontend.handler.editor.copy_block_ref_BANG_.cljs$core$IFn$_invoke$arity$2(block_uuid,logseq.graph_parser.util.block_ref.__GT_block_ref);

return frontend.state.close_modal_BANG_();
} else {
return null;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.cmdk !== 'undefined') && (typeof frontend.components.cmdk.handle_action !== 'undefined')){
} else {
frontend.components.cmdk.handle_action = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__115399 = cljs.core.get_global_hierarchy;
return (fexpr__115399.cljs$core$IFn$_invoke$arity$0 ? fexpr__115399.cljs$core$IFn$_invoke$arity$0() : fexpr__115399.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.components.cmdk","handle-action"),(function (action,_state,_event){
return action;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open-page","open-page",408877301),(function (_,state,_event){
var temp__5804__auto__ = (function (){var G__115400 = state;
var G__115400__$1 = (((G__115400 == null))?null:frontend.components.cmdk.state__GT_highlighted_item(G__115400));
if((G__115400__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"source-page","source-page",1338615502).cljs$core$IFn$_invoke$arity$1(G__115400__$1);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page_name = temp__5804__auto__;
var redirect_page_name_115512 = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page_name);
var page_115513 = (function (){var G__115401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(redirect_page_name_115512) : frontend.util.page_name_sanity_lc.call(null,redirect_page_name_115512))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__115401) : frontend.db.entity.call(null,G__115401));
})();
var original_name_115514 = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_115513);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(page_115513),"whiteboard")){
frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$1(original_name_115514);
} else {
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(original_name_115514);
}

return frontend.state.close_modal_BANG_();
} else {
return null;
}
}));
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open-block","open-block",1952534985),(function (_,state,_event){
var block_id = (function (){var G__115402 = state;
var G__115402__$1 = (((G__115402 == null))?null:frontend.components.cmdk.state__GT_highlighted_item(G__115402));
var G__115402__$2 = (((G__115402__$1 == null))?null:new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(G__115402__$1));
var G__115402__$3 = (((G__115402__$2 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__115402__$2));
if((G__115402__$3 == null)){
return null;
} else {
return cljs.core.uuid(G__115402__$3);
}
})();
var ___$1 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id], 0));
var get_block_page = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.db.model.get_block_page,frontend.state.get_current_repo());
var block = (function (){var G__115403 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__115403) : frontend.db.entity.call(null,G__115403));
})();
if(cljs.core.truth_(block)){
var temp__5804__auto__ = (function (){var G__115404 = block_id;
if((G__115404 == null)){
return null;
} else {
return get_block_page(G__115404);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page = temp__5804__auto__;
var page_name_115515 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(page),"whiteboard")){
frontend.handler.route.redirect_to_whiteboard_BANG_.cljs$core$IFn$_invoke$arity$2(page_name_115515,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id], null));
} else {
if(cljs.core.truth_(frontend.db.model.parents_collapsed_QMARK_(frontend.state.get_current_repo(),block_id))){
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
} else {
frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$2(page_name_115515,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),["ls-block-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(block_id)].join('')], null));

}
}

return frontend.state.close_modal_BANG_();
} else {
return null;
}
} else {
return null;
}
}));
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open-page-right","open-page-right",1037849418),(function (_,state,_event){
var temp__5804__auto__ = (function (){var G__115405 = state;
var G__115405__$1 = (((G__115405 == null))?null:frontend.components.cmdk.state__GT_highlighted_item(G__115405));
if((G__115405__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"source-page","source-page",1338615502).cljs$core$IFn$_invoke$arity$1(G__115405__$1);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var page_name = temp__5804__auto__;
var redirect_page_name_115516 = frontend.db.model.get_redirect_page_name.cljs$core$IFn$_invoke$arity$1(page_name);
var page_115517 = (function (){var G__115406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),(frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1 ? frontend.util.page_name_sanity_lc.cljs$core$IFn$_invoke$arity$1(redirect_page_name_115516) : frontend.util.page_name_sanity_lc.call(null,redirect_page_name_115516))], null);
return (frontend.db.entity.cljs$core$IFn$_invoke$arity$1 ? frontend.db.entity.cljs$core$IFn$_invoke$arity$1(G__115406) : frontend.db.entity.call(null,G__115406));
})();
if(cljs.core.truth_(page_115517)){
frontend.handler.editor.open_block_in_sidebar_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_115517));
} else {
}

return frontend.state.close_modal_BANG_();
} else {
return null;
}
}));
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open-block-right","open-block-right",-1593533049),(function (_,state,_event){
var temp__5804__auto__ = (function (){var G__115407 = state;
var G__115407__$1 = (((G__115407 == null))?null:frontend.components.cmdk.state__GT_highlighted_item(G__115407));
var G__115407__$2 = (((G__115407__$1 == null))?null:new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(G__115407__$1));
var G__115407__$3 = (((G__115407__$2 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__115407__$2));
if((G__115407__$3 == null)){
return null;
} else {
return cljs.core.uuid(G__115407__$3);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block_uuid = temp__5804__auto__;
frontend.handler.editor.open_block_in_sidebar_BANG_(block_uuid);

return frontend.state.close_modal_BANG_();
} else {
return null;
}
}));
frontend.components.cmdk.open_file = (function frontend$components$cmdk$open_file(file_path){
if(((clojure.string.ends_with_QMARK_(file_path,".edn")) || (((clojure.string.ends_with_QMARK_(file_path,".js")) || (clojure.string.ends_with_QMARK_(file_path,".css")))))){
return frontend.handler.route.redirect_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),file_path], null)], null));
} else {
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var file_fpath = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_repo_dir(frontend.state.get_current_repo()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_path], 0));
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openFileInFolder",file_fpath], 0));
} else {
return null;
}
}
});
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open","open",-1763596448),(function (_,state,event){
var temp__5804__auto__ = (function (){var G__115408 = state;
if((G__115408 == null)){
return null;
} else {
return frontend.components.cmdk.state__GT_highlighted_item(G__115408);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var item = temp__5804__auto__;
var page_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"source-page","source-page",1338615502).cljs$core$IFn$_invoke$arity$1(item));
var cross_blocks_QMARK_ = new cljs.core.Keyword(null,"cross-blocks?","cross-blocks?",1587802608).cljs$core$IFn$_invoke$arity$1(item);
var block_QMARK_ = ((cljs.core.boolean$(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core.not(cross_blocks_QMARK_)));
var shift_QMARK_ = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","shift?","frontend.components.cmdk/shift?",147854587).cljs$core$IFn$_invoke$arity$1(state));
var shift_or_sidebar_QMARK_ = (function (){var or__5043__auto__ = shift_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.boolean$(new cljs.core.Keyword(null,"open-sidebar?","open-sidebar?",1933561166).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(state)));
}
})();
var search_mode = new cljs.core.Keyword("search","mode","search/mode",1628111395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var graph_view_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(search_mode,new cljs.core.Keyword(null,"graph","graph",1558099509));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(item))){
frontend.components.cmdk.open_file(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(item));

return frontend.state.close_modal_BANG_();
} else {
if(((graph_view_QMARK_) && (((page_QMARK_) && (cljs.core.not(shift_QMARK_)))))){
frontend.state.add_graph_search_filter_BANG_(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state)));

return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state),"");
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = shift_or_sidebar_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return block_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return frontend.components.cmdk.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"open-block-right","open-block-right",-1593533049),state,event);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = shift_or_sidebar_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return page_QMARK_;
} else {
return and__5041__auto__;
}
})())){
return frontend.components.cmdk.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"open-page-right","open-page-right",1037849418),state,event);
} else {
if(block_QMARK_){
return frontend.components.cmdk.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"open-block","open-block",1952534985),state,event);
} else {
if(page_QMARK_){
return frontend.components.cmdk.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"open-page","open-page",408877301),state,event);
} else {
return null;
}
}
}
}
}
}
} else {
return null;
}
}));
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"search","search",1564939822),(function (_,state,_event){
var temp__5804__auto__ = (function (){var G__115409 = state;
if((G__115409 == null)){
return null;
} else {
return frontend.components.cmdk.state__GT_highlighted_item(G__115409);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var item = temp__5804__auto__;
var search_query = new cljs.core.Keyword(null,"source-search","source-search",-401166475).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state),search_query);
} else {
return null;
}
}));
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"trigger","trigger",103466139),(function (_,state,_event){
var command = (function (){var G__115410 = state;
var G__115410__$1 = (((G__115410 == null))?null:frontend.components.cmdk.state__GT_highlighted_item(G__115410));
if((G__115410__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"source-command","source-command",969630731).cljs$core$IFn$_invoke$arity$1(G__115410__$1);
}
})();
var temp__5804__auto__ = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(command);
if(cljs.core.truth_(temp__5804__auto__)){
var action = temp__5804__auto__;
(action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));

if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("go","flashcards","go/flashcards",2038317222),null,new cljs.core.Keyword("ui","toggle-settings","ui/toggle-settings",-173409909),null,new cljs.core.Keyword("graph","open","graph/open",-1870468846),null,new cljs.core.Keyword("graph","remove","graph/remove",-246951656),null], null), null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(command))){
return null;
} else {
return frontend.state.close_modal_BANG_();
}
} else {
return null;
}
}));
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (_,state,_event){
var item = frontend.components.cmdk.state__GT_highlighted_item(state);
var create_whiteboard_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whiteboard","whiteboard",-1766646928),new cljs.core.Keyword(null,"source-create","source-create",-1664647972).cljs$core$IFn$_invoke$arity$1(item));
var create_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"source-create","source-create",-1664647972).cljs$core$IFn$_invoke$arity$1(item));
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
if(create_whiteboard_QMARK_){
frontend.handler.whiteboard.create_new_whiteboard_and_redirect_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_input));
} else {
if(create_page_QMARK_){
frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_input),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),true], null));
} else {
}
}

return frontend.state.close_modal_BANG_();
}));
frontend.components.cmdk.get_filter_user_input = (function frontend$components$cmdk$get_filter_user_input(input){
if(clojure.string.includes_QMARK_(input,"/")){
return cljs.core.first(logseq.graph_parser.util.split_last("/",input));
} else {
if(clojure.string.starts_with_QMARK_(input,"/")){
return "";
} else {
return input;

}
}
});
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"filter","filter",-948537934),(function (_,state,_event){
var item = (function (){var G__115411 = state;
if((G__115411 == null)){
return null;
} else {
return frontend.components.cmdk.state__GT_highlighted_item(G__115411);
}
})();
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.reset_BANG_(_BANG_input,frontend.components.cmdk.get_filter_user_input(cljs.core.deref(_BANG_input)));

var _BANG_filter = new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state);
var group = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"group","group",582596132)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_filter,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group);

return frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(group,state);
}));
frontend.components.cmdk.handle_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,state,event){
var temp__5804__auto__ = frontend.components.cmdk.state__GT_action(state);
if(cljs.core.truth_(temp__5804__auto__)){
var action = temp__5804__auto__;
return frontend.components.cmdk.handle_action.cljs$core$IFn$_invoke$arity$3(action,state,event);
} else {
return null;
}
}));
frontend.components.cmdk.scroll_into_view_when_invisible = (function frontend$components$cmdk$scroll_into_view_when_invisible(state,target){
var _STAR_container_ref = new cljs.core.Keyword("frontend.components.cmdk","scroll-container-ref","frontend.components.cmdk/scroll-container-ref",-837956287).cljs$core$IFn$_invoke$arity$1(state);
var container_rect = cljs.core.deref(_STAR_container_ref).getBoundingClientRect();
var t1 = container_rect.top;
var b1 = container_rect.bottom;
var target_rect = target.getBoundingClientRect();
var t2 = target_rect.top;
var b2 = target_rect.bottom;
if((((t1 <= t2)) && ((((t2 <= b2)) && ((b2 <= b1)))))){
return null;
} else {
return target.scrollIntoView(({"inline": "nearest", "behavior": "smooth"}));
}
});
frontend.components.cmdk.mouse_active_effect_BANG_ = rum.core.lazy_build(rum.core.build_defc,(function (_STAR_mouse_active_QMARK_,deps){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return cljs.core.reset_BANG_(_STAR_mouse_active_QMARK_,false);
}),deps);

return null;
}),null,"frontend.components.cmdk/mouse-active-effect!");
frontend.components.cmdk.result_group = rum.core.lazy_build(rum.core.build_defcs,(function (state_SINGLEQUOTE_,state,title,group,visible_items,first_item,sidebar_QMARK_){
var map__115412 = (function (){var G__115413 = state;
var G__115413__$1 = (((G__115413 == null))?null:new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(G__115413));
var G__115413__$2 = (((G__115413__$1 == null))?null:cljs.core.deref(G__115413__$1));
if((G__115413__$2 == null)){
return null;
} else {
return (group.cljs$core$IFn$_invoke$arity$1 ? group.cljs$core$IFn$_invoke$arity$1(G__115413__$2) : group.call(null,G__115413__$2));
}
})();
var map__115412__$1 = cljs.core.__destructure_map(map__115412);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115412__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115412__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var highlighted_item = (function (){var or__5043__auto__ = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return first_item;
}
})();
var highlighted_group = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","highlighted-group","frontend.components.cmdk/highlighted-group",-1481740507).cljs$core$IFn$_invoke$arity$1(state));
var _STAR_mouse_active_QMARK_ = new cljs.core.Keyword("frontend.components.cmdk","mouse-active?","frontend.components.cmdk/mouse-active?",378608270).cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_);
var filter = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state));
var can_show_less_QMARK_ = (frontend.components.cmdk.GROUP_LIMIT < cljs.core.count(visible_items));
var can_show_more_QMARK_ = (cljs.core.count(visible_items) < cljs.core.count(items));
var show_less = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.Keyword(null,"less","less",-428869198));
});
var show_more = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.Keyword(null,"more","more",-2058821800));
});
return daiquiri.core.create_element(daiquiri.core.fragment,null,[frontend.components.cmdk.mouse_active_effect_BANG_(_STAR_mouse_active_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlighted_item], null)),daiquiri.core.create_element("div",{'onMouseMove':(function (){
return cljs.core.reset_BANG_(_STAR_mouse_active_QMARK_,true);
}),'className':"border-b border-gray-06 pb-1 last:border-b-0"},[daiquiri.core.create_element("div",{'className':"text-xs py-1.5 px-3 flex justify-between items-center gap-2 text-gray-11 bg-gray-02 h-8"},[daiquiri.core.create_element("div",{'onClick':(function (_e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"more","more",-2058821800),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"less","less",-428869198),new cljs.core.Keyword(null,"more","more",-2058821800)], null));
}),'className':"font-bold text-gray-11 pl-0.5 cursor-pointer select-none"},[daiquiri.interpreter.interpret(title)]),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256)))?daiquiri.core.create_element("div",{'style':{'fontSize':"0.7rem"},'className':"pl-1.5 text-gray-12 rounded-full"},[((((100) <= cljs.core.count(items)))?"99+":cljs.core.count(items))]):null),daiquiri.core.create_element("div",{'className':"flex-1"},null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,highlighted_group)) && (((((can_show_more_QMARK_) || (can_show_less_QMARK_))) && (((cljs.core.empty_QMARK_(filter)) && (cljs.core.not(sidebar_QMARK_))))))))?daiquiri.core.create_element("a",{'onClick':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show,new cljs.core.Keyword(null,"more","more",-2058821800)))?show_less:show_more),'className':"text-link select-node opacity-50 hover:opacity-90"},[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show,new cljs.core.Keyword(null,"more","more",-2058821800)))?daiquiri.core.create_element("div",{'className':"flex flex-row gap-1 items-center"},["Show less",daiquiri.interpreter.interpret(logseq.shui.core.shortcut("mod up",null))]):daiquiri.core.create_element("div",{'className':"flex flex-row gap-1 items-center"},["Show more",daiquiri.interpreter.interpret(logseq.shui.core.shortcut("mod down",null))]))]):null)]),daiquiri.core.create_element("div",{'className':"search-results"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$cmdk$iter__115416(s__115417){
return (new cljs.core.LazySeq(null,(function (){
var s__115417__$1 = s__115417;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115417__$1);
if(temp__5804__auto__){
var s__115417__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115417__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115417__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115419 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115418 = (0);
while(true){
if((i__115418 < size__5519__auto__)){
var item = cljs.core._nth(c__5518__auto__,i__115418);
var highlighted_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,highlighted_item);
cljs.core.chunk_append(b__115419,(function (){var item__$1 = logseq.shui.core.list_item(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256)))?null:cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"compact","compact",-348732150),true,new cljs.core.Keyword(null,"rounded","rounded",85415706),false,new cljs.core.Keyword(null,"hoverable","hoverable",1153998892),cljs.core.deref(_STAR_mouse_active_QMARK_),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),highlighted_QMARK_,new cljs.core.Keyword(null,"on-highlight-dep","on-highlight-dep",-869993420),highlighted_item,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__115418,highlighted_QMARK_,item,c__5518__auto__,size__5519__auto__,b__115419,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more){
return (function (e){
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state),item);

frontend.components.cmdk.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"default","default",-1987822328),state,item);

var temp__5804__auto____$1 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5804__auto____$1)){
var on_click = temp__5804__auto____$1;
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(e) : on_click.call(null,e));
} else {
return null;
}
});})(i__115418,highlighted_QMARK_,item,c__5518__auto__,size__5519__auto__,b__115419,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more))
,new cljs.core.Keyword(null,"on-highlight","on-highlight",-1064936151),((function (i__115418,highlighted_QMARK_,item,c__5518__auto__,size__5519__auto__,b__115419,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more){
return (function (ref){
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","highlighted-group","frontend.components.cmdk/highlighted-group",-1481740507).cljs$core$IFn$_invoke$arity$1(state),group);

if(cljs.core.truth_((function (){var and__5041__auto__ = ref;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = ref.current;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"mouse-enter-triggered-highlight","mouse-enter-triggered-highlight",687876854).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.components.cmdk.scroll_into_view_when_invisible(state,ref.current);
} else {
return null;
}
});})(i__115418,highlighted_QMARK_,item,c__5518__auto__,size__5519__auto__,b__115419,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more))
], 0)),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"blocks","blocks",-610462153))){
return frontend.ui.lazy_visible(((function (i__115418,item__$1,highlighted_QMARK_,item,c__5518__auto__,size__5519__auto__,b__115419,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more){
return (function (){
return item__$1;
});})(i__115418,item__$1,highlighted_QMARK_,item,c__5518__auto__,size__5519__auto__,b__115419,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-once?","trigger-once?",1582103477),true], null));
} else {
return daiquiri.interpreter.interpret(item__$1);
}
})());

var G__115518 = (i__115418 + (1));
i__115418 = G__115518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115419),frontend$components$cmdk$iter__115416(cljs.core.chunk_rest(s__115417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115419),null);
}
} else {
var item = cljs.core.first(s__115417__$2);
var highlighted_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,highlighted_item);
return cljs.core.cons((function (){var item__$1 = logseq.shui.core.list_item(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"create","create",-1301499256)))?null:cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"compact","compact",-348732150),true,new cljs.core.Keyword(null,"rounded","rounded",85415706),false,new cljs.core.Keyword(null,"hoverable","hoverable",1153998892),cljs.core.deref(_STAR_mouse_active_QMARK_),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733),highlighted_QMARK_,new cljs.core.Keyword(null,"on-highlight-dep","on-highlight-dep",-869993420),highlighted_item,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (highlighted_QMARK_,item,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more){
return (function (e){
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state),item);

frontend.components.cmdk.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"default","default",-1987822328),state,item);

var temp__5804__auto____$1 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(temp__5804__auto____$1)){
var on_click = temp__5804__auto____$1;
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(e) : on_click.call(null,e));
} else {
return null;
}
});})(highlighted_QMARK_,item,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more))
,new cljs.core.Keyword(null,"on-highlight","on-highlight",-1064936151),((function (highlighted_QMARK_,item,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more){
return (function (ref){
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","highlighted-group","frontend.components.cmdk/highlighted-group",-1481740507).cljs$core$IFn$_invoke$arity$1(state),group);

if(cljs.core.truth_((function (){var and__5041__auto__ = ref;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = ref.current;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"mouse-enter-triggered-highlight","mouse-enter-triggered-highlight",687876854).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state))));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return frontend.components.cmdk.scroll_into_view_when_invisible(state,ref.current);
} else {
return null;
}
});})(highlighted_QMARK_,item,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more))
], 0)),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"blocks","blocks",-610462153))){
return frontend.ui.lazy_visible(((function (item__$1,highlighted_QMARK_,item,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more){
return (function (){
return item__$1;
});})(item__$1,highlighted_QMARK_,item,s__115417__$2,temp__5804__auto__,map__115412,map__115412__$1,show,items,highlighted_item,highlighted_group,_STAR_mouse_active_QMARK_,filter,can_show_less_QMARK_,can_show_more_QMARK_,show_less,show_more))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-once?","trigger-once?",1582103477),true], null));
} else {
return daiquiri.interpreter.interpret(item__$1);
}
})(),frontend$components$cmdk$iter__115416(cljs.core.rest(s__115417__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(visible_items);
})())])])]);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.cmdk","mouse-active?","frontend.components.cmdk/mouse-active?",378608270))], null),"frontend.components.cmdk/result-group");
frontend.components.cmdk.move_highlight = (function frontend$components$cmdk$move_highlight(state,n){
var items = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.last,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.components.cmdk.state__GT_results_ordered(state,new cljs.core.Keyword("search","mode","search/mode",1628111395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)))], 0));
var highlighted_item = (function (){var G__115420 = state;
var G__115420__$1 = (((G__115420 == null))?null:new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(G__115420));
var G__115420__$2 = (((G__115420__$1 == null))?null:cljs.core.deref(G__115420__$1));
if((G__115420__$2 == null)){
return null;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__115420__$2,new cljs.core.Keyword(null,"mouse-enter-triggered-highlight","mouse-enter-triggered-highlight",687876854));
}
})();
var current_item_index = (function (){var G__115421 = highlighted_item;
if((G__115421 == null)){
return null;
} else {
return items.indexOf(G__115421);
}
})();
var next_item_index = (function (){var G__115422 = (function (){var or__5043__auto__ = current_item_index;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var G__115422__$1 = (((G__115422 == null))?null:(G__115422 + n));
if((G__115422__$1 == null)){
return null;
} else {
return cljs.core.mod(G__115422__$1,cljs.core.count(items));
}
})();
var temp__5802__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(items,next_item_index,null);
if(cljs.core.truth_(temp__5802__auto__)){
var next_highlighted_item = temp__5802__auto__;
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state),next_highlighted_item);
} else {
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state),null);
}
});
frontend.components.cmdk.handle_input_change = (function frontend$components$cmdk$handle_input_change(var_args){
var G__115424 = arguments.length;
switch (G__115424) {
case 2:
return frontend.components.cmdk.handle_input_change.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.components.cmdk.handle_input_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.cmdk.handle_input_change.cljs$core$IFn$_invoke$arity$2 = (function (state,e){
return frontend.components.cmdk.handle_input_change.cljs$core$IFn$_invoke$arity$3(state,e,e.target.value);
}));

(frontend.components.cmdk.handle_input_change.cljs$core$IFn$_invoke$arity$3 = (function (state,e,input){
var composing_QMARK_ = frontend.util.native_event_is_composing_QMARK_(e);
var e_type = frontend.components.cmdk.goog$module$goog$object.getValueByKeys(e,"type");
var _BANG_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var _BANG_load_results_throttled = new cljs.core.Keyword("frontend.components.cmdk","load-results-throttled","frontend.components.cmdk/load-results-throttled",-1843149239).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.reset_BANG_(_BANG_input,input);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","input-changed?","frontend.components.cmdk/input-changed?",409092290).cljs$core$IFn$_invoke$arity$1(state),true);

if(cljs.core.truth_(cljs.core.deref(_BANG_load_results_throttled))){
} else {
cljs.core.reset_BANG_(_BANG_load_results_throttled,goog.functions.throttle(frontend.components.cmdk.load_results,(50)));
}

if(((cljs.core.not(composing_QMARK_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e_type,"compositionend")))){
var temp__5804__auto__ = cljs.core.deref(_BANG_load_results_throttled);
if(cljs.core.truth_(temp__5804__auto__)){
var load_results_throttled = temp__5804__auto__;
return (load_results_throttled.cljs$core$IFn$_invoke$arity$2 ? load_results_throttled.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),state) : load_results_throttled.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),state));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.components.cmdk.handle_input_change.cljs$lang$maxFixedArity = 3);

frontend.components.cmdk.keydown_handler = (function frontend$components$cmdk$keydown_handler(state,e){
var shift_QMARK_ = e.shiftKey;
var meta_QMARK_ = frontend.util.meta_key_QMARK_(e);
var ctrl_QMARK_ = e.ctrlKey;
var keyname = e.key;
var enter_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"Enter");
var esc_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"Escape");
var composing_QMARK_ = frontend.util.goog_event_is_composing_QMARK_.cljs$core$IFn$_invoke$arity$1(e);
var highlighted_group = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","highlighted-group","frontend.components.cmdk/highlighted-group",-1481740507).cljs$core$IFn$_invoke$arity$1(state));
var show_less = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlighted_group,new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.Keyword(null,"less","less",-428869198));
});
var show_more = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020).cljs$core$IFn$_invoke$arity$1(state),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlighted_group,new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.Keyword(null,"more","more",-2058821800));
});
var input = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state));
var as_keydown_QMARK_ = (function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"ArrowDown");
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = ctrl_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"n");
} else {
return and__5041__auto__;
}
}
})();
var as_keyup_QMARK_ = (function (){var or__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"ArrowUp");
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = ctrl_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"p");
} else {
return and__5041__auto__;
}
}
})();
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","shift?","frontend.components.cmdk/shift?",147854587).cljs$core$IFn$_invoke$arity$1(state),shift_QMARK_);

cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","meta?","frontend.components.cmdk/meta?",-205586890).cljs$core$IFn$_invoke$arity$1(state),meta_QMARK_);

if(cljs.core.truth_((function (){var or__5043__auto__ = as_keydown_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return as_keyup_QMARK_;
}
})())){
frontend.util.stop(e);
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = meta_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return enter_QMARK_;
} else {
return and__5041__auto__;
}
})())){
var repo = frontend.state.get_current_repo();
frontend.state.close_modal_BANG_();

return frontend.state.sidebar_add_block_BANG_(repo,input,new cljs.core.Keyword(null,"search","search",1564939822));
} else {
if(cljs.core.truth_(as_keydown_QMARK_)){
if(cljs.core.truth_(meta_QMARK_)){
return show_more();
} else {
return frontend.components.cmdk.move_highlight(state,(1));
}
} else {
if(cljs.core.truth_(as_keyup_QMARK_)){
if(cljs.core.truth_(meta_QMARK_)){
return show_less();
} else {
return frontend.components.cmdk.move_highlight(state,(-1));
}
} else {
if(((enter_QMARK_) && (cljs.core.not(composing_QMARK_)))){
frontend.components.cmdk.handle_action.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"default","default",-1987822328),state,e);

return frontend.util.stop_propagation(e);
} else {
if(esc_QMARK_){
var filter = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state));
if(clojure.string.blank_QMARK_(input)){
} else {
frontend.util.stop(e);

frontend.components.cmdk.handle_input_change.cljs$core$IFn$_invoke$arity$3(state,null,"");
}

if(cljs.core.truth_((function (){var and__5041__auto__ = filter;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.blank_QMARK_(input);
} else {
return and__5041__auto__;
}
})())){
frontend.util.stop(e);

return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state),null);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = meta_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(keyname,"c");
} else {
return and__5041__auto__;
}
})())){
frontend.components.cmdk.copy_block_ref(state);

return frontend.util.stop_propagation(e);
} else {
return null;

}
}
}
}
}
}
});
frontend.components.cmdk.keyup_handler = (function frontend$components$cmdk$keyup_handler(state,e){
var shift_QMARK_ = e.shiftKey;
var meta_QMARK_ = frontend.util.meta_key_QMARK_(e);
cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","shift?","frontend.components.cmdk/shift?",147854587).cljs$core$IFn$_invoke$arity$1(state),shift_QMARK_);

return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","meta?","frontend.components.cmdk/meta?",-205586890).cljs$core$IFn$_invoke$arity$1(state),meta_QMARK_);
});
frontend.components.cmdk.input_placeholder = (function frontend$components$cmdk$input_placeholder(sidebar_QMARK_){
var search_mode = new cljs.core.Keyword("search","mode","search/mode",1628111395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(search_mode,new cljs.core.Keyword(null,"graph","graph",1558099509))) && (cljs.core.not(sidebar_QMARK_)))){
return "Add graph filter";
} else {
return "What are you looking for?";

}
});
frontend.components.cmdk.input_row = rum.core.lazy_build(rum.core.build_defc,(function (state,all_items,opts){
var highlighted_item = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state));
var input = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state));
var input_ref = new cljs.core.Keyword("frontend.components.cmdk","input-ref","frontend.components.cmdk/input-ref",1439793623).cljs$core$IFn$_invoke$arity$1(state);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = highlighted_item;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),all_items.indexOf(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(highlighted_item,new cljs.core.Keyword(null,"mouse-enter-triggered-highlight","mouse-enter-triggered-highlight",687876854))));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state),null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [all_items], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.components.cmdk.load_results.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),state);
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'className':"bg-gray-02 border-b border-1 border-gray-07"},[daiquiri.core.create_element("input",{'placeholder':frontend.components.cmdk.input_placeholder(false),'onCompositionEnd':(function (e){
return frontend.components.cmdk.handle_input_change.cljs$core$IFn$_invoke$arity$2(state,e);
}),'ref':(function (p1__115425_SHARP_){
if(cljs.core.truth_(cljs.core.deref(input_ref))){
return null;
} else {
return cljs.core.reset_BANG_(input_ref,p1__115425_SHARP_);
}
}),'autoFocus':true,'autoComplete':"off",'value':input,'onBlur':(function (_e){
var temp__5804__auto__ = new cljs.core.Keyword(null,"on-input-blur","on-input-blur",938716471).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var on_blur = temp__5804__auto__;
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(input) : on_blur.call(null,input));
} else {
return null;
}
}),'className':"text-xl bg-transparent border-none w-full outline-none px-3 py-3",'id':"search",'onKeyDown':(function (e){
var value = cljs.core.deref(input_ref).value;
var last_char = cljs.core.last(value);
var backspace_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.ekey(e),"Backspace");
var filter_group = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state)));
var slash_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.ekey(e),"/");
var namespace_page_matched_QMARK_ = ((((slash_QMARK_) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whiteboards","whiteboards",710207654),null,new cljs.core.Keyword(null,"pages","pages",-285406513),null], null), null),filter_group))))?cljs.core.some((function (p1__115426_SHARP_){
return clojure.string.includes_QMARK_(p1__115426_SHARP_,"/");
}),frontend.search.page_search.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"/"].join(''))):null);
if(cljs.core.truth_((function (){var and__5041__auto__ = filter_group;
if(cljs.core.truth_(and__5041__auto__)){
return ((((slash_QMARK_) && (cljs.core.not(namespace_page_matched_QMARK_)))) || (((((backspace_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_char,"/")))) || (((backspace_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,"")))))));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state),null);
} else {
return null;
}
}),'onChange':rum.core.mark_sync_update((function (e){
var new_value = e.target.value;
frontend.components.cmdk.handle_input_change.cljs$core$IFn$_invoke$arity$2(state,e);

var temp__5804__auto__ = new cljs.core.Keyword(null,"on-input-change","on-input-change",-1203383147).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var on_change = temp__5804__auto__;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
return null;
}
}))},[])]);
}),null,"frontend.components.cmdk/input-row");
frontend.components.cmdk.rand_tip = (function frontend$components$cmdk$rand_tip(){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center.opacity-50.hover:opacity-100","div.flex.flex-row.gap-1.items-center.opacity-50.hover:opacity-100",815335268),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Type"], null),logseq.shui.core.shortcut("/"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"to filter search results"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.gap-1.items-center.opacity-50.hover:opacity-100","div.flex.flex-row.gap-1.items-center.opacity-50.hover:opacity-100",815335268),logseq.shui.core.shortcut(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mod","enter"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"to open search in the sidebar"], null)], null)], null));
});
frontend.components.cmdk.tip = rum.core.lazy_build(rum.core.build_defcs,(function (inner_state,state){
var filter = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(filter)){
return daiquiri.core.create_element("div",{'className':"flex flex-row gap-1 items-center opacity-50 hover:opacity-100"},[daiquiri.core.create_element("div",null,["Type"]),daiquiri.interpreter.interpret(logseq.shui.core.shortcut("esc",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tiled","tiled",249698823),false], null))),daiquiri.core.create_element("div",null,["to clear search filter"])]);
} else {
return daiquiri.interpreter.interpret(new cljs.core.Keyword("frontend.components.cmdk","rand-tip","frontend.components.cmdk/rand-tip",-242198082).cljs$core$IFn$_invoke$arity$1(inner_state));

}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.cmdk","rand-tip","frontend.components.cmdk/rand-tip",-242198082),frontend.components.cmdk.rand_tip());
})], null)], null),"frontend.components.cmdk/tip");
frontend.components.cmdk.hint_button = rum.core.lazy_build(rum.core.build_defc,(function (text,shortcut,opts){
return daiquiri.interpreter.interpret((function (){var G__115441 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"hint-button [&>span:first-child]:hover:opacity-100 opacity-40 hover:opacity-80",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null),opts], 0));
var G__115442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60","span.opacity-60",-1080417386),text], null),(cljs.core.truth_(cljs.core.not_empty(shortcut))?(function (){var iter__5520__auto__ = (function frontend$components$cmdk$iter__115443(s__115444){
return (new cljs.core.LazySeq(null,(function (){
var s__115444__$1 = s__115444;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115444__$1);
if(temp__5804__auto__){
var s__115444__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115444__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115444__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115446 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115445 = (0);
while(true){
if((i__115445 < size__5519__auto__)){
var key = cljs.core._nth(c__5518__auto__,i__115445);
cljs.core.chunk_append(b__115446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__button-shortcut-key","div.ui__button-shortcut-key",-67904771),(function (){var G__115447 = key;
switch (G__115447) {
case "cmd":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(goog.userAgent.MAC)?"\u2318":"Ctrl")], null);

break;
case "shift":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E7"], null);

break;
case "return":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u23CE"], null);

break;
case "esc":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tracking-tightest","div.tracking-tightest",173762221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scaleX(0.8) scaleY(1.2) ",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"ESC"], null);

break;
default:
var G__115448 = key;
if(typeof key === 'string'){
return G__115448.toUpperCase();
} else {
return G__115448;
}

}
})()], null));

var G__115521 = (i__115445 + (1));
i__115445 = G__115521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115446),frontend$components$cmdk$iter__115443(cljs.core.chunk_rest(s__115444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115446),null);
}
} else {
var key = cljs.core.first(s__115444__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui__button-shortcut-key","div.ui__button-shortcut-key",-67904771),(function (){var G__115449 = key;
switch (G__115449) {
case "cmd":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(goog.userAgent.MAC)?"\u2318":"Ctrl")], null);

break;
case "shift":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u21E7"], null);

break;
case "return":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u23CE"], null);

break;
case "esc":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tracking-tightest","div.tracking-tightest",173762221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scaleX(0.8) scaleY(1.2) ",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null)], null),"ESC"], null);

break;
default:
var G__115450 = key;
if(typeof key === 'string'){
return G__115450.toUpperCase();
} else {
return G__115450;
}

}
})()], null),frontend$components$cmdk$iter__115443(cljs.core.rest(s__115444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(shortcut);
})():null)], null);
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__115441,G__115442) : logseq.shui.ui.button.call(null,G__115441,G__115442));
})());
}),null,"frontend.components.cmdk/hint-button");
frontend.components.cmdk.hints = rum.core.lazy_build(rum.core.build_defc,(function (state){
var action = frontend.components.cmdk.state__GT_action(state);
var button_fn = (function() { 
var G__115523__delegate = function (text,shortcut,p__115452){
var map__115453 = p__115452;
var map__115453__$1 = cljs.core.__destructure_map(map__115453);
var opts = map__115453__$1;
return frontend.components.cmdk.hint_button(text,shortcut,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__115451_SHARP_){
return frontend.components.cmdk.handle_action.cljs$core$IFn$_invoke$arity$3(action,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"opts","opts",155075701),opts),p1__115451_SHARP_);
}),new cljs.core.Keyword(null,"muted","muted",1275109029),true], null));
};
var G__115523 = function (text,shortcut,var_args){
var p__115452 = null;
if (arguments.length > 2) {
var G__115524__i = 0, G__115524__a = new Array(arguments.length -  2);
while (G__115524__i < G__115524__a.length) {G__115524__a[G__115524__i] = arguments[G__115524__i + 2]; ++G__115524__i;}
  p__115452 = new cljs.core.IndexedSeq(G__115524__a,0,null);
} 
return G__115523__delegate.call(this,text,shortcut,p__115452);};
G__115523.cljs$lang$maxFixedArity = 2;
G__115523.cljs$lang$applyTo = (function (arglist__115525){
var text = cljs.core.first(arglist__115525);
arglist__115525 = cljs.core.next(arglist__115525);
var shortcut = cljs.core.first(arglist__115525);
var p__115452 = cljs.core.rest(arglist__115525);
return G__115523__delegate(text,shortcut,p__115452);
});
G__115523.cljs$core$IFn$_invoke$arity$variadic = G__115523__delegate;
return G__115523;
})()
;
if(cljs.core.truth_(action)){
return daiquiri.core.create_element("div",{'className':"hints"},[daiquiri.core.create_element("div",{'className':"text-sm leading-6"},[daiquiri.core.create_element("div",{'className':"flex flex-row gap-1 items-center"},[daiquiri.core.create_element("div",{'className':"font-medium text-gray-12"},["Tip:"]),frontend.components.cmdk.tip(state)])]),daiquiri.core.create_element("div",{'style':{'marginRight':(-6)},'className':"gap-2 hidden md:flex"},[(function (){var G__115481 = action;
var G__115481__$1 = (((G__115481 instanceof cljs.core.Keyword))?G__115481.fqn:null);
switch (G__115481__$1) {
case "open":
var attrs115460 = button_fn("Open",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null));
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs115460))?daiquiri.interpreter.element_attributes(attrs115460):null),((cljs.core.map_QMARK_(attrs115460))?[daiquiri.interpreter.interpret(button_fn("Open in sidebar",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shift","return"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-sidebar?","open-sidebar?",1933561166),true], null))),(cljs.core.truth_(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state))))?daiquiri.interpreter.interpret(button_fn("Copy ref",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2318","c"], null))):null)]:[daiquiri.interpreter.interpret(attrs115460),daiquiri.interpreter.interpret(button_fn("Open in sidebar",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["shift","return"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-sidebar?","open-sidebar?",1933561166),true], null))),(cljs.core.truth_(new cljs.core.Keyword(null,"source-block","source-block",-878290804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375).cljs$core$IFn$_invoke$arity$1(state))))?daiquiri.interpreter.interpret(button_fn("Copy ref",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u2318","c"], null))):null)]));

break;
case "search":
var attrs115465 = button_fn("Search",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null));
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs115465))?daiquiri.interpreter.element_attributes(attrs115465):null),((cljs.core.map_QMARK_(attrs115465))?null:[daiquiri.interpreter.interpret(attrs115465)]));

break;
case "trigger":
var attrs115470 = button_fn("Trigger",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null));
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs115470))?daiquiri.interpreter.element_attributes(attrs115470):null),((cljs.core.map_QMARK_(attrs115470))?null:[daiquiri.interpreter.interpret(attrs115470)]));

break;
case "create":
var attrs115475 = button_fn("Create",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null));
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs115475))?daiquiri.interpreter.element_attributes(attrs115475):null),((cljs.core.map_QMARK_(attrs115475))?null:[daiquiri.interpreter.interpret(attrs115475)]));

break;
case "filter":
var attrs115480 = button_fn("Filter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["return"], null));
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs115480))?daiquiri.interpreter.element_attributes(attrs115480):null),((cljs.core.map_QMARK_(attrs115480))?null:[daiquiri.interpreter.interpret(attrs115480)]));

break;
default:
return null;

}
})()])]);
} else {
return null;
}
}),null,"frontend.components.cmdk/hints");
frontend.components.cmdk.search_only = rum.core.lazy_build(rum.core.build_defc,(function (state,group_name){
return daiquiri.core.create_element("div",{'className':"flex flex-row gap-1 items-center"},[daiquiri.core.create_element("div",null,["Search only:"]),(function (){var attrs115484 = group_name;
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs115484))?daiquiri.interpreter.element_attributes(attrs115484):null),((cljs.core.map_QMARK_(attrs115484))?null:[daiquiri.interpreter.interpret(attrs115484)]));
})(),daiquiri.interpreter.interpret((function (){var G__115487 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 scale-75",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state),null);
})], null);
var G__115488 = logseq.shui.ui.tabler_icon("x");
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__115487,G__115488) : logseq.shui.ui.button.call(null,G__115487,G__115488));
})())]);
}),null,"frontend.components.cmdk/search-only");
frontend.components.cmdk.cmdk = rum.core.lazy_build(rum.core.build_defcs,(function (state,p__115491){
var map__115492 = p__115491;
var map__115492__$1 = cljs.core.__destructure_map(map__115492);
var opts = map__115492__$1;
var sidebar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__115492__$1,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672));
var _STAR_input = new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248).cljs$core$IFn$_invoke$arity$1(state);
var _input = rum.core.react(_STAR_input);
var search_mode = new cljs.core.Keyword("search","mode","search/mode",1628111395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var group_filter = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(rum.core.react(new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405).cljs$core$IFn$_invoke$arity$1(state)));
var results_ordered = frontend.components.cmdk.state__GT_results_ordered(state,search_mode);
var all_items = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.last,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results_ordered], 0));
var first_item = cljs.core.first(all_items);
return daiquiri.core.create_element("div",{'ref':(function (p1__115489_SHARP_){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","ref","frontend.components.cmdk/ref",-27187732).cljs$core$IFn$_invoke$arity$1(state)))){
return null;
} else {
return cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.cmdk","ref","frontend.components.cmdk/ref",-27187732).cljs$core$IFn$_invoke$arity$1(state),p1__115489_SHARP_);
}
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__cmdk",(function (){var G__115493 = "w-full h-full relative flex flex-col justify-start";
if(cljs.core.not(sidebar_QMARK_)){
return [G__115493," rounded-lg"].join('');
} else {
return G__115493;
}
})()], null))},[frontend.components.cmdk.input_row(state,all_items,opts),daiquiri.core.create_element("div",{'ref':(function (p1__115490_SHARP_){
var _STAR_ref = new cljs.core.Keyword("frontend.components.cmdk","scroll-container-ref","frontend.components.cmdk/scroll-container-ref",-837956287).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.deref(_STAR_ref))){
return null;
} else {
return cljs.core.reset_BANG_(_STAR_ref,p1__115490_SHARP_);
}
}),'style':{'background':"var(--lx-gray-02)",'scrollPaddingBlock':(32)},'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__115494 = "w-full flex-1 overflow-y-auto min-h-[65dvh] max-h-[65dvh]";
if(cljs.core.not(sidebar_QMARK_)){
return [G__115494," pb-14"].join('');
} else {
return G__115494;
}
})()], null))},[(cljs.core.truth_(group_filter)?daiquiri.core.create_element("div",{'className':"flex flex-col px-3 py-1 opacity-70 text-sm"},[frontend.components.cmdk.search_only(state,clojure.string.capitalize(cljs.core.name(group_filter)))]):null),(function (){var items = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__115495){
var vec__115496 = p__115495;
var _group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115496,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115496,(1),null);
var group_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115496,(2),null);
var _group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115496,(3),null);
var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),group_count);
if(and__5041__auto__){
if(cljs.core.not(group_filter)){
return true;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_filter,group_key)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_filter,new cljs.core.Keyword(null,"blocks","blocks",-610462153))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_key,new cljs.core.Keyword(null,"current-page","current-page",-101294180))))) || (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"create","create",-1301499256),null,new cljs.core.Keyword(null,"pages","pages",-285406513),null], null), null),group_filter)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_key,new cljs.core.Keyword(null,"create","create",-1301499256))))))));
}
} else {
return and__5041__auto__;
}
}),results_ordered);
if(cljs.core.seq(items)){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$cmdk$iter__115499(s__115500){
return (new cljs.core.LazySeq(null,(function (){
var s__115500__$1 = s__115500;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__115500__$1);
if(temp__5804__auto__){
var s__115500__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__115500__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__115500__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__115502 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__115501 = (0);
while(true){
if((i__115501 < size__5519__auto__)){
var vec__115503 = cljs.core._nth(c__5518__auto__,i__115501);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115503,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115503,(1),null);
var _group_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115503,(2),null);
var group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115503,(3),null);
cljs.core.chunk_append(b__115502,(function (){var title = clojure.string.capitalize(group_name);
return frontend.components.cmdk.result_group(state,title,group_key,group_items,first_item,sidebar_QMARK_);
})());

var G__115527 = (i__115501 + (1));
i__115501 = G__115527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__115502),frontend$components$cmdk$iter__115499(cljs.core.chunk_rest(s__115500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__115502),null);
}
} else {
var vec__115506 = cljs.core.first(s__115500__$2);
var group_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115506,(0),null);
var group_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115506,(1),null);
var _group_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115506,(2),null);
var group_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115506,(3),null);
return cljs.core.cons((function (){var title = clojure.string.capitalize(group_name);
return frontend.components.cmdk.result_group(state,title,group_key,group_items,first_item,sidebar_QMARK_);
})(),frontend$components$cmdk$iter__115499(cljs.core.rest(s__115500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(items);
})());
} else {
return daiquiri.core.create_element("div",{'className':"flex flex-col p-4 opacity-50"},[((clojure.string.blank_QMARK_(rum.core.react(_STAR_input)))?null:"No matched results")]);
}
})()]),(cljs.core.truth_(sidebar_QMARK_)?null:frontend.components.cmdk.hints(state))]);
}),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.static$,rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))))){
} else {
frontend.modules.shortcut.core.unlisten_all_BANG_.cljs$core$IFn$_invoke$arity$0();
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))))){
} else {
frontend.modules.shortcut.core.listen_all_BANG_();
}

return state;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var search_mode = new cljs.core.Keyword("search","mode","search/mode",1628111395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var opts = cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("frontend.components.cmdk","ref","frontend.components.cmdk/ref",-27187732),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.components.cmdk","filter","frontend.components.cmdk/filter",-1728637405),(cljs.core.truth_((function (){var and__5041__auto__ = search_mode;
if(cljs.core.truth_(and__5041__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"global","global",93595047),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null),search_mode)))) && (cljs.core.not(new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(opts))));
} else {
return and__5041__auto__;
}
})())?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),search_mode], null)):cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)),new cljs.core.Keyword("frontend.components.cmdk","input","frontend.components.cmdk/input",330366248),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"initial-input","initial-input",1864686534).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})())], 0));
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
frontend.state.set_state_BANG_(new cljs.core.Keyword("search","mode","search/mode",1628111395),null);

return state;
})], null),frontend.mixins.event_mixin.cljs$core$IFn$_invoke$arity$1((function (state){
var ref = cljs.core.deref(new cljs.core.Keyword("frontend.components.cmdk","ref","frontend.components.cmdk/ref",-27187732).cljs$core$IFn$_invoke$arity$1(state));
frontend.mixins.on_key_down.cljs$core$IFn$_invoke$arity$3(state,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),ref,new cljs.core.Keyword(null,"all-handler","all-handler",396726950),(function (e,_key){
return frontend.components.cmdk.keydown_handler(state,e);
})], null));

return frontend.mixins.on_key_up(state,cljs.core.PersistentArrayMap.EMPTY,(function (e,_key){
return frontend.components.cmdk.keyup_handler(state,e);
}));
})),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.cmdk","shift?","frontend.components.cmdk/shift?",147854587)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.cmdk","meta?","frontend.components.cmdk/meta?",-205586890)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.cmdk","highlighted-group","frontend.components.cmdk/highlighted-group",-1481740507)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.cmdk","highlighted-item","frontend.components.cmdk/highlighted-item",776424375)),rum.core.local.cljs$core$IFn$_invoke$arity$2(frontend.components.cmdk.default_results,new cljs.core.Keyword("frontend.components.cmdk","results","frontend.components.cmdk/results",199280020)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.cmdk","load-results-throttled","frontend.components.cmdk/load-results-throttled",-1843149239)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.cmdk","scroll-container-ref","frontend.components.cmdk/scroll-container-ref",-837956287)),rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.cmdk","input-ref","frontend.components.cmdk/input-ref",1439793623)),rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.cmdk","input-changed?","frontend.components.cmdk/input-changed?",409092290))], null),"frontend.components.cmdk/cmdk");
frontend.components.cmdk.cmdk_modal = rum.core.lazy_build(rum.core.build_defc,(function (props){
return daiquiri.core.create_element("div",{'className':"cp__cmdk__modal rounded-lg w-[90dvw] max-w-4xl relative"},[frontend.components.cmdk.cmdk(props)]);
}),null,"frontend.components.cmdk/cmdk-modal");
frontend.components.cmdk.cmdk_block = rum.core.lazy_build(rum.core.build_defc,(function (props){
return daiquiri.core.create_element("div",{'className':"cp__cmdk__block rounded-md"},[frontend.components.cmdk.cmdk(props)]);
}),null,"frontend.components.cmdk/cmdk-block");

//# sourceMappingURL=frontend.components.cmdk.js.map
