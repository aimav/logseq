goog.provide('frontend.components.repo');
goog.scope(function(){
  frontend.components.repo.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.components.repo.normalized_graph_label = rum.core.lazy_build(rum.core.build_defc,(function (p__118910,on_click){
var map__118911 = p__118910;
var map__118911__$1 = cljs.core.__destructure_map(map__118911);
var graph = map__118911__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118911__$1,new cljs.core.Keyword(null,"url","url",276297046));
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118911__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118911__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118911__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
if(cljs.core.truth_(graph)){
var local_QMARK_ = frontend.config.local_db_QMARK_(url);
var attrs118909 = ((local_QMARK_)?(function (){var local_dir = frontend.config.get_local_dir(url);
var graph_name = frontend.util.text.get_graph_name_from_path(url);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),local_dir,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(graph) : on_click.call(null,graph));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),graph_name,(cljs.core.truth_(GraphName)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.px-1","strong.px-1",1812175159),"(",GraphName,")"], null):null)], null),(cljs.core.truth_(remote_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.pr-1.flex.items-center","strong.pr-1.flex.items-center",1744293922),frontend.ui.icon("cloud")], null):null)], null);
})():new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),GraphUUID,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(graph) : on_click.call(null,graph));
})], null),(function (){var G__118912 = (function (){var or__5043__auto__ = url;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return GraphName;
}
})();
return (frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_repo_path.cljs$core$IFn$_invoke$arity$1(G__118912) : frontend.db.get_repo_path.call(null,G__118912));
})(),(cljs.core.truth_(remote_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.pl-1.flex.items-center","strong.pl-1.flex.items-center",-1246633632),frontend.ui.icon("cloud")], null):null)], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs118909))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs118909], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs118909))?null:[daiquiri.interpreter.interpret(attrs118909)]));
} else {
return null;
}
}),null,"frontend.components.repo/normalized-graph-label");
/**
 * Graph list in `All graphs` page
 */
frontend.components.repo.repos_inner = rum.core.lazy_build(rum.core.build_defc,(function (repos){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$repo$iter__118913(s__118914){
return (new cljs.core.LazySeq(null,(function (){
var s__118914__$1 = s__118914;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__118914__$1);
if(temp__5804__auto__){
var s__118914__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__118914__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__118914__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__118916 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__118915 = (0);
while(true){
if((i__118915 < size__5519__auto__)){
var map__118917 = cljs.core._nth(c__5518__auto__,i__118915);
var map__118917__$1 = cljs.core.__destructure_map(map__118917);
var repo = map__118917__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118917__$1,new cljs.core.Keyword(null,"url","url",276297046));
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118917__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118917__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118917__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var only_cloud_QMARK_ = (function (){var and__5041__auto__ = remote_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (url == null);
} else {
return and__5041__auto__;
}
})();
cljs.core.chunk_append(b__118916,daiquiri.core.create_element("div",{'key':(function (){var or__5043__auto__ = url;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return GraphUUID;
}
})(),'className':"flex justify-between mb-4 items-center"},[frontend.components.repo.normalized_graph_label(repo,((function (i__118915,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__){
return (function (){
if(cljs.core.truth_(only_cloud_QMARK_)){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","pull-down-remote-graph","graph/pull-down-remote-graph",-1238246835),repo], null));
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),url], null));
}
});})(i__118915,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__))
),daiquiri.core.create_element("div",{'className':"controls"},[daiquiri.core.create_element("div",{'className':"flex flex-row items-center"},[frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.max-w-xs","div.text-sm.max-w-xs",410996616),(cljs.core.truth_(only_cloud_QMARK_)?"Deletes this remote graph. Note this can't be recovered.":"Removes Logseq's access to the local file path of your graph. It won't remove your local files.")], null),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-400.ml-4.font-medium.text-sm.whitespace-nowrap","a.text-gray-400.ml-4.font-medium.text-sm.whitespace-nowrap",305983685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__118915,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__){
return (function (){
if(cljs.core.truth_(only_cloud_QMARK_)){
var confirm_fn = ((function (i__118915,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__){
return (function (){
return frontend.ui.make_confirm_modal(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(700)], null)], null),["Are you sure to permanently delete the graph \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(GraphName),"\" from our server?"].join('')], null),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.small.mt-1","div.small.mt-1",-279726177),"Notice that we can't recover this graph after being deleted. Make sure you have backups before deleting it."], null),new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),((function (i__118915,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__){
return (function (_,p__118978){
var map__118979 = p__118978;
var map__118979__$1 = cljs.core.__destructure_map(map__118979);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118979__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);

var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (i__118915,c__34483__auto__,map__118979,map__118979__$1,close_fn,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__){
return (function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = ((function (i__118915,c__34483__auto__,map__118979,map__118979__$1,close_fn,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__){
return (function (state_118990){
var state_val_118991 = (state_118990[(1)]);
if((state_val_118991 === (1))){
var inst_118980 = frontend.handler.file_sync._LT_delete_graph(GraphUUID);
var state_118990__$1 = state_118990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118990__$1,(2),inst_118980);
} else {
if((state_val_118991 === (2))){
var inst_118982 = (state_118990[(2)]);
var inst_118983 = frontend.state.delete_repo_BANG_(repo);
var inst_118984 = frontend.state.delete_remote_graph_BANG_(repo);
var inst_118985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_118986 = [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"loading","loading",-737050189)];
var inst_118987 = (new cljs.core.PersistentVector(null,2,(5),inst_118985,inst_118986,null));
var inst_118988 = frontend.state.set_state_BANG_(inst_118987,false);
var state_118990__$1 = (function (){var statearr_118992 = state_118990;
(statearr_118992[(7)] = inst_118982);

(statearr_118992[(8)] = inst_118983);

(statearr_118992[(9)] = inst_118984);

return statearr_118992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_118990__$1,inst_118988);
} else {
return null;
}
}
});})(i__118915,c__34483__auto__,map__118979,map__118979__$1,close_fn,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__))
;
return ((function (i__118915,switch__34378__auto__,c__34483__auto__,map__118979,map__118979__$1,close_fn,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__){
return (function() {
var frontend$components$repo$iter__118913_$_state_machine__34379__auto__ = null;
var frontend$components$repo$iter__118913_$_state_machine__34379__auto____0 = (function (){
var statearr_118993 = [null,null,null,null,null,null,null,null,null,null];
(statearr_118993[(0)] = frontend$components$repo$iter__118913_$_state_machine__34379__auto__);

(statearr_118993[(1)] = (1));

return statearr_118993;
});
var frontend$components$repo$iter__118913_$_state_machine__34379__auto____1 = (function (state_118990){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_118990);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e118994){var ex__34382__auto__ = e118994;
var statearr_118995_119055 = state_118990;
(statearr_118995_119055[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_118990[(4)]))){
var statearr_118996_119056 = state_118990;
(statearr_118996_119056[(1)] = cljs.core.first((state_118990[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__119057 = state_118990;
state_118990 = G__119057;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$repo$iter__118913_$_state_machine__34379__auto__ = function(state_118990){
switch(arguments.length){
case 0:
return frontend$components$repo$iter__118913_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$repo$iter__118913_$_state_machine__34379__auto____1.call(this,state_118990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$repo$iter__118913_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$repo$iter__118913_$_state_machine__34379__auto____0;
frontend$components$repo$iter__118913_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$repo$iter__118913_$_state_machine__34379__auto____1;
return frontend$components$repo$iter__118913_$_state_machine__34379__auto__;
})()
;})(i__118915,switch__34378__auto__,c__34483__auto__,map__118979,map__118979__$1,close_fn,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__))
})();
var state__34485__auto__ = (function (){var statearr_118997 = f__34484__auto__();
(statearr_118997[(6)] = c__34483__auto__);

return statearr_118997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
});})(i__118915,c__34483__auto__,map__118979,map__118979__$1,close_fn,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__))
);

return c__34483__auto__;
});})(i__118915,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__))
], null));
});})(i__118915,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__))
;
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(confirm_fn());
} else {
var current_repo = frontend.state.get_current_repo();
frontend.handler.repo.remove_repo_BANG_(repo);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","unlinked","graph/unlinked",-2077575387),repo,current_repo], null));
}
});})(i__118915,only_cloud_QMARK_,map__118917,map__118917__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,c__5518__auto__,size__5519__auto__,b__118916,s__118914__$2,temp__5804__auto__))
], null),(cljs.core.truth_(only_cloud_QMARK_)?"Remove":"Unlink")], null))])])]));

var G__119058 = (i__118915 + (1));
i__118915 = G__119058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__118916),frontend$components$repo$iter__118913(cljs.core.chunk_rest(s__118914__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__118916),null);
}
} else {
var map__118998 = cljs.core.first(s__118914__$2);
var map__118998__$1 = cljs.core.__destructure_map(map__118998);
var repo = map__118998__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118998__$1,new cljs.core.Keyword(null,"url","url",276297046));
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118998__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118998__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118998__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var only_cloud_QMARK_ = (function (){var and__5041__auto__ = remote_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return (url == null);
} else {
return and__5041__auto__;
}
})();
return cljs.core.cons(daiquiri.core.create_element("div",{'key':(function (){var or__5043__auto__ = url;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return GraphUUID;
}
})(),'className':"flex justify-between mb-4 items-center"},[frontend.components.repo.normalized_graph_label(repo,((function (only_cloud_QMARK_,map__118998,map__118998__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,s__118914__$2,temp__5804__auto__){
return (function (){
if(cljs.core.truth_(only_cloud_QMARK_)){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","pull-down-remote-graph","graph/pull-down-remote-graph",-1238246835),repo], null));
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),url], null));
}
});})(only_cloud_QMARK_,map__118998,map__118998__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,s__118914__$2,temp__5804__auto__))
),daiquiri.core.create_element("div",{'className':"controls"},[daiquiri.core.create_element("div",{'className':"flex flex-row items-center"},[frontend.ui.tippy(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.max-w-xs","div.text-sm.max-w-xs",410996616),(cljs.core.truth_(only_cloud_QMARK_)?"Deletes this remote graph. Note this can't be recovered.":"Removes Logseq's access to the local file path of your graph. It won't remove your local files.")], null),new cljs.core.Keyword(null,"class","class",-2030961996),"tippy-hover",new cljs.core.Keyword(null,"interactive","interactive",-2024078362),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-400.ml-4.font-medium.text-sm.whitespace-nowrap","a.text-gray-400.ml-4.font-medium.text-sm.whitespace-nowrap",305983685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (only_cloud_QMARK_,map__118998,map__118998__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,s__118914__$2,temp__5804__auto__){
return (function (){
if(cljs.core.truth_(only_cloud_QMARK_)){
var confirm_fn = (function (){
return frontend.ui.make_confirm_modal(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(700)], null)], null),["Are you sure to permanently delete the graph \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(GraphName),"\" from our server?"].join('')], null),new cljs.core.Keyword(null,"sub-title","sub-title",-1781490288),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.small.mt-1","div.small.mt-1",-279726177),"Notice that we can't recover this graph after being deleted. Make sure you have backups before deleting it."], null),new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),(function (_,p__119019){
var map__119020 = p__119019;
var map__119020__$1 = cljs.core.__destructure_map(map__119020);
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119020__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);

var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_119031){
var state_val_119032 = (state_119031[(1)]);
if((state_val_119032 === (1))){
var inst_119021 = frontend.handler.file_sync._LT_delete_graph(GraphUUID);
var state_119031__$1 = state_119031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119031__$1,(2),inst_119021);
} else {
if((state_val_119032 === (2))){
var inst_119023 = (state_119031[(2)]);
var inst_119024 = frontend.state.delete_repo_BANG_(repo);
var inst_119025 = frontend.state.delete_remote_graph_BANG_(repo);
var inst_119026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119027 = [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"loading","loading",-737050189)];
var inst_119028 = (new cljs.core.PersistentVector(null,2,(5),inst_119026,inst_119027,null));
var inst_119029 = frontend.state.set_state_BANG_(inst_119028,false);
var state_119031__$1 = (function (){var statearr_119033 = state_119031;
(statearr_119033[(7)] = inst_119023);

(statearr_119033[(8)] = inst_119024);

(statearr_119033[(9)] = inst_119025);

return statearr_119033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_119031__$1,inst_119029);
} else {
return null;
}
}
});
return (function() {
var frontend$components$repo$iter__118913_$_state_machine__34379__auto__ = null;
var frontend$components$repo$iter__118913_$_state_machine__34379__auto____0 = (function (){
var statearr_119034 = [null,null,null,null,null,null,null,null,null,null];
(statearr_119034[(0)] = frontend$components$repo$iter__118913_$_state_machine__34379__auto__);

(statearr_119034[(1)] = (1));

return statearr_119034;
});
var frontend$components$repo$iter__118913_$_state_machine__34379__auto____1 = (function (state_119031){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_119031);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e119035){var ex__34382__auto__ = e119035;
var statearr_119036_119059 = state_119031;
(statearr_119036_119059[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_119031[(4)]))){
var statearr_119037_119060 = state_119031;
(statearr_119037_119060[(1)] = cljs.core.first((state_119031[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__119061 = state_119031;
state_119031 = G__119061;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$repo$iter__118913_$_state_machine__34379__auto__ = function(state_119031){
switch(arguments.length){
case 0:
return frontend$components$repo$iter__118913_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$repo$iter__118913_$_state_machine__34379__auto____1.call(this,state_119031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$repo$iter__118913_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$repo$iter__118913_$_state_machine__34379__auto____0;
frontend$components$repo$iter__118913_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$repo$iter__118913_$_state_machine__34379__auto____1;
return frontend$components$repo$iter__118913_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_119038 = f__34484__auto__();
(statearr_119038[(6)] = c__34483__auto__);

return statearr_119038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
})], null));
});
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$1(confirm_fn());
} else {
var current_repo = frontend.state.get_current_repo();
frontend.handler.repo.remove_repo_BANG_(repo);

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","unlinked","graph/unlinked",-2077575387),repo,current_repo], null));
}
});})(only_cloud_QMARK_,map__118998,map__118998__$1,repo,url,remote_QMARK_,GraphUUID,GraphName,s__118914__$2,temp__5804__auto__))
], null),(cljs.core.truth_(only_cloud_QMARK_)?"Remove":"Unlink")], null))])])]),frontend$components$repo$iter__118913(cljs.core.rest(s__118914__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(repos);
})());
}),null,"frontend.components.repo/repos-inner");
frontend.components.repo.repos = rum.core.lazy_build(rum.core.build_defc,(function (){
var login_QMARK_ = cljs.core.boolean$(frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946)));
var repos = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
var repos__$1 = frontend.util.distinct_by(new cljs.core.Keyword(null,"url","url",276297046),repos);
var remotes = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null));
var remotes_loading_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"loading","loading",-737050189)], null));
var repos__$2 = ((((login_QMARK_) && (cljs.core.seq(remotes))))?frontend.handler.repo.combine_local__AMPERSAND__remote_graphs(repos__$1,remotes):repos__$1);
var repos__$3 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__119039_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__119039_SHARP_),frontend.config.local_repo);
}),repos__$2);
var map__119040 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,new cljs.core.Keyword(null,"remote?","remote?",-517415110)),repos__$3);
var map__119040__$1 = cljs.core.__destructure_map(map__119040);
var remote_graphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119040__$1,true);
var local_graphs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119040__$1,false);
if(cljs.core.seq(repos__$3)){
return daiquiri.core.create_element("div",{'id':"graphs"},[(function (){var attrs119041 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","all-graphs","graph/all-graphs",-193046305)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs119041))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs119041], 0))):{'className':"title"}),((cljs.core.map_QMARK_(attrs119041))?null:[daiquiri.interpreter.interpret(attrs119041)]));
})(),daiquiri.core.create_element("div",{'className':"pl-1 content mt-3"},[daiquiri.core.create_element("div",null,[(function (){var attrs119042 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","local-graphs","graph/local-graphs",-729146600)], 0));
return daiquiri.core.create_element("h2",((cljs.core.map_QMARK_(attrs119042))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-lg","font-medium","my-4"], null)], null),attrs119042], 0))):{'className':"text-lg font-medium my-4"}),((cljs.core.map_QMARK_(attrs119042))?null:[daiquiri.interpreter.interpret(attrs119042)]));
})(),((cljs.core.seq(local_graphs))?frontend.components.repo.repos_inner(local_graphs):null),(function (){var attrs119043 = (cljs.core.truth_((function (){var or__5043__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-8","div.mr-8",674865009),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"open-a-directory","open-a-directory",981257354)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","setup-a-repo","graph/setup-a-repo",992514529)], null));
})], 0))], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119043))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","my-4"], null)], null),attrs119043], 0))):{'className':"flex flex-row my-4"}),((cljs.core.map_QMARK_(attrs119043))?null:[daiquiri.interpreter.interpret(attrs119043)]));
})()]),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.handler.file_sync.enable_sync_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return login_QMARK_;
} else {
return and__5041__auto__;
}
})())?daiquiri.core.create_element("div",null,[daiquiri.core.create_element("hr",null,null),daiquiri.core.create_element("div",{'className':"flex align-items justify-between"},[(function (){var attrs119046 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","remote-graphs","graph/remote-graphs",-1737922715)], 0));
return daiquiri.core.create_element("h2",((cljs.core.map_QMARK_(attrs119046))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-lg","font-medium","my-4"], null)], null),attrs119046], 0))):{'className':"text-lg font-medium my-4"}),((cljs.core.map_QMARK_(attrs119046))?null:[daiquiri.interpreter.interpret(attrs119046)]));
})(),(function (){var attrs119047 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),"Refresh",(cljs.core.truth_(remotes_loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.pl-2","small.pl-2",-778303966),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(null)], null):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),remotes_loading_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.file_sync.load_session_graphs();
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119047))?daiquiri.interpreter.element_attributes(attrs119047):null),((cljs.core.map_QMARK_(attrs119047))?null:[daiquiri.interpreter.interpret(attrs119047)]));
})()]),frontend.components.repo.repos_inner(remote_graphs)]):null)])]);
} else {
return frontend.components.widgets.add_graph();
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.repo/repos");
frontend.components.repo.check_multiple_windows_QMARK_ = (function frontend$components$repo$check_multiple_windows_QMARK_(state){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["graphHasMultipleWindows",frontend.state.get_current_repo()], 0)),(function (multiple_windows_QMARK_){
return promesa.protocols._promise(cljs.core.reset_BANG_(new cljs.core.Keyword("frontend.components.repo","electron-multiple-windows?","frontend.components.repo/electron-multiple-windows?",-1493955536).cljs$core$IFn$_invoke$arity$1(state),multiple_windows_QMARK_));
}));
}));
} else {
return null;
}
});
frontend.components.repo.repos_dropdown_links = (function frontend$components$repo$repos_dropdown_links(repos,current_repo,_STAR_multiple_windows_QMARK_){
var switch_repos = (((!((current_repo == null))))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (repo){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(repo));
}),repos):repos);
var repo_links = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__119048){
var map__119049 = p__119048;
var map__119049__$1 = cljs.core.__destructure_map(map__119049);
var graph = map__119049__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119049__$1,new cljs.core.Keyword(null,"url","url",276297046));
var remote_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119049__$1,new cljs.core.Keyword(null,"remote?","remote?",-517415110));
var GraphName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119049__$1,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337));
var GraphUUID = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119049__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531));
var local_QMARK_ = frontend.config.local_db_QMARK_(url);
var repo_url = ((local_QMARK_)?(frontend.db.get_repo_name.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_repo_name.cljs$core$IFn$_invoke$arity$1(url) : frontend.db.get_repo_name.call(null,url)):GraphName);
var short_repo_name = ((local_QMARK_)?frontend.util.text.get_graph_name_from_path(repo_url):GraphName);
if(cljs.core.truth_(short_repo_name)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center.whitespace-nowrap","span.flex.items-center.whitespace-nowrap",2107913396),short_repo_name,(cljs.core.truth_(remote_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1.flex.items-center","span.pl-1.flex.items-center",-1526306913),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(GraphName),"> #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(GraphUUID)].join('')], null),frontend.ui.icon("cloud",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(18)], null))], null):null)], null),new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248),repo_url,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(frontend.components.repo.goog$module$goog$object.get(e,"shiftKey"))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),url], null));
} else {
if((!(local_QMARK_))){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","pull-down-remote-graph","graph/pull-down-remote-graph",-1238246835),graph], null));
} else {
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),url], null));
}
}
})], null)], null);
} else {
return null;
}
}),switch_repos);
var refresh_link = (function (){var nfs_repo_QMARK_ = frontend.config.local_db_QMARK_(current_repo);
if(cljs.core.truth_((function (){var and__5041__auto__ = nfs_repo_QMARK_;
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,frontend.config.local_repo);
if(and__5041__auto____$1){
var or__5043__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sync-from-local-files","sync-from-local-files",1514882504)], 0)),new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sync-from-local-files-detail","sync-from-local-files-detail",-231071564)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ask-for-re-fresh","graph/ask-for-re-fresh",-32382338)], null));
})], null)], null);
} else {
return null;
}
})();
var reindex_link = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-index","re-index",-1408098109)], 0)),new cljs.core.Keyword(null,"hover-detail","hover-detail",-1668874248),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"re-index-detail","re-index-detail",555553184)], 0)),new cljs.core.Keyword(null,"options","options",99638489),(function (){var G__119050 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ask-for-re-index","graph/ask-for-re-index",2038098533),_STAR_multiple_windows_QMARK_,null], null));
})], null);
return G__119050;
})()], null);
var new_window_link = (cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(frontend.util.mac_QMARK_);
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"open-new-window","open-new-window",-483331731)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),null], null));
})], null)], null):null);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(repo_links,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(repo_links))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null):null),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-graph","new-graph",1985980678)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","setup-a-repo","graph/setup-a-repo",992514529)], null));
})], null)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-graph","new-graph",1985980678)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repos","repos",647483789))], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-graphs","all-graphs",-291694455)], 0)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repos","repos",647483789))], null)], null),refresh_link,reindex_link,new_window_link], null)));
});
frontend.components.repo.repos_dropdown = rum.core.lazy_build(rum.core.build_defcs,(function (state){
var multiple_windows_QMARK_ = new cljs.core.Keyword("frontend.components.repo","electron-multiple-windows?","frontend.components.repo/electron-multiple-windows?",-1493955536).cljs$core$IFn$_invoke$arity$1(state);
var current_repo = frontend.state.sub(new cljs.core.Keyword("git","current-repo","git/current-repo",107438825));
var login_QMARK_ = cljs.core.boolean$(frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946)));
var remotes_loading_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"loading","loading",-737050189)], null));
if(cljs.core.truth_((function (){var or__5043__auto__ = login_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return current_repo;
}
})())){
var repos = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"me","me",-139006693),new cljs.core.Keyword(null,"repos","repos",647483789)], null));
var remotes = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","remote-graphs","file-sync/remote-graphs",795261543),new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null));
var repos__$1 = ((((cljs.core.seq(remotes)) && (login_QMARK_)))?frontend.handler.repo.combine_local__AMPERSAND__remote_graphs(repos,remotes):repos);
var links = frontend.components.repo.repos_dropdown_links(repos__$1,current_repo,multiple_windows_QMARK_);
var render_content = (function (p__119052){
var map__119053 = p__119052;
var map__119053__$1 = cljs.core.__destructure_map(map__119053);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119053__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
var remote_QMARK_ = new cljs.core.Keyword(null,"remote?","remote?",-517415110).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__119051_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__119051_SHARP_));
}),repos__$1)));
var repo_name = (frontend.db.get_repo_name.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_repo_name.cljs$core$IFn$_invoke$arity$1(current_repo) : frontend.db.get_repo_name.call(null,current_repo));
var short_repo_name = (cljs.core.truth_(repo_name)?(frontend.db.get_short_repo_name.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_short_repo_name.cljs$core$IFn$_invoke$arity$1(repo_name) : frontend.db.get_short_repo_name.call(null,repo_name)):"Select a Graph");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item.group.flex.items-center.p-2.text-sm.font-medium.rounded-md","a.item.group.flex.items-center.p-2.text-sm.font-medium.rounded-md",85701145),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.components.repo.check_multiple_windows_QMARK_(state);

return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
}),new cljs.core.Keyword(null,"title","title",636505583),repo_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-center","div.flex.flex-row.items-center",2086153476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.relative.graph-icon.rounded","div.flex.relative.graph-icon.rounded",2001358886),(function (){var icon = "database";
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null);
return frontend.ui.icon(icon,opts);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graphs","div.graphs",2051391861),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#repo-switch.block.pr-2.whitespace-nowrap","span#repo-switch.block.pr-2.whitespace-nowrap",886377000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#repo-name.font-medium","span#repo-name.font-medium",-1930713868),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.overflow-hidden.text-ellipsis","span.overflow-hidden.text-ellipsis",1998457561),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.config.local_repo,short_repo_name))?"Demo":short_repo_name)], null),(cljs.core.truth_(remote_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1","span.pl-1",-1236384439),frontend.ui.icon("cloud")], null):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dropdown-caret.ml-2","span.dropdown-caret.ml-2",724124714),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top-color","border-top-color",-804629899),"#6b7280"], null)], null)], null)], null)], null)], null)], null);
});
var links_header = (function (){var G__119054 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"modal-class","modal-class",226435127),frontend.util.hiccup__GT_class("origin-top-right.absolute.left-0.mt-2.rounded-md.shadow-lg")], null);
if((cljs.core.count(repos__$1) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__119054,new cljs.core.Keyword(null,"links-header","links-header",-1729119536),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium.text-sm.opacity-70.px-4.pt-2.pb-1.flex.flex-row.justify-between.items-center","div.font-medium.text-sm.opacity-70.px-4.pt-2.pb-1.flex.flex-row.justify-between.items-center",1443651070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("left-side-bar","switch","left-side-bar/switch",1182960689)], 0))], null),(cljs.core.truth_((function (){var and__5041__auto__ = frontend.handler.file_sync.enable_sync_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return login_QMARK_;
} else {
return and__5041__auto__;
}
})())?(cljs.core.truth_(remotes_loading_QMARK_)?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(""):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex","a.flex",-995526906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Refresh remote graphs",new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.file_sync.load_session_graphs], null),frontend.ui.icon("refresh")], null)):null)], null));
} else {
return G__119054;
}
})();
if(cljs.core.seq(repos__$1)){
return frontend.ui.dropdown_with_links(render_content,links,links_header);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword("frontend.components.repo","electron-multiple-windows?","frontend.components.repo/electron-multiple-windows?",-1493955536))], null),"frontend.components.repo/repos-dropdown");

//# sourceMappingURL=frontend.components.repo.js.map
