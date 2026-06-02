goog.provide('frontend.components.file_sync');
frontend.components.file_sync.clone_local_icloud_graph_panel = rum.core.lazy_build(rum.core.build_defc,(function (repo,graph_name,close_fn){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var G__116064 = frontend.state.sub(new cljs.core.Keyword("file-sync","jstour-inst","file-sync/jstour-inst",-1545838291));
if((G__116064 == null)){
return null;
} else {
return G__116064.complete();
}
}),cljs.core.PersistentVector.EMPTY);

var graph_dir = frontend.config.get_repo_dir(repo);
var vec__116065 = rum.core.use_state("");
var selected_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116065,(0),null);
var set_selected_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116065,(1),null);
var selected_path_QMARK_ = (((!(clojure.string.blank_QMARK_(selected_path)))) && ((!(frontend.mobile.util.in_iCloud_container_path_QMARK_(selected_path)))));
var on_confirm = (function (){
var temp__5804__auto__ = (function (){var and__5041__auto__ = selected_path_QMARK_;
if(and__5041__auto__){
return [clojure.string.replace(selected_path,/\/+$/,""),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_name)].join('');
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var dest_dir = temp__5804__auto__;
return (cljs.core.truth_(frontend.util.electron_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"copyDirectory","copyDirectory",1154233935),graph_dir,dest_dir], 0)):(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?frontend.fs.copy_BANG_(repo,graph_dir,dest_dir):null
)).then((function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["Cloned to => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dest_dir)].join(''),new cljs.core.Keyword(null,"success","success",1890645906));

frontend.handler.web.nfs.ls_dir_files_with_path_BANG_.cljs$core$IFn$_invoke$arity$1(dest_dir);

frontend.handler.repo.remove_repo_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),repo], null));

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
})).catch((function (p1__116062_SHARP_){
return console.error(p1__116062_SHARP_);
}));
} else {
return null;
}
});
return daiquiri.core.create_element("div",{'className':"cp__file-sync-related-normal-modal"},[daiquiri.core.create_element("div",{'className':"flex justify-center pb-4"},[(function (){var attrs116073 = frontend.ui.icon("folders");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116073))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-wrap"], null)], null),attrs116073], 0))):{'className':"icon-wrap"}),((cljs.core.map_QMARK_(attrs116073))?null:[daiquiri.interpreter.interpret(attrs116073)]));
})()]),daiquiri.core.create_element("h1",{'className':"text-xl font-semibold opacity-90 text-center py-2"},["Clone your local graph away from ",daiquiri.core.create_element("strong",null,["\u2601\uFE0F"])," iCloud!"]),daiquiri.core.create_element("h2",{'className':"text-center opacity-70 text-xs leading-5"},["Unfortunately, Logseq Sync and iCloud don't work perfectly together at the moment. To make sure",daiquiri.core.create_element("br",null,null),"You can always delete the remote graph at a later point."]),daiquiri.core.create_element("div",{'className':"folder-tip flex flex-col items-center"},[daiquiri.core.create_element("h3",null,[(function (){var attrs116081 = frontend.ui.icon("folder");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116081))?daiquiri.interpreter.element_attributes(attrs116081):null),((cljs.core.map_QMARK_(attrs116081))?[(function (){var attrs116082 = logseq.graph_parser.util.safe_decode_uri_component(graph_name);
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs116082))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-0","5"], null)], null),attrs116082], 0))):{'className':"pl-0 5"}),((cljs.core.map_QMARK_(attrs116082))?null:[daiquiri.interpreter.interpret(attrs116082)]));
})()]:[daiquiri.interpreter.interpret(attrs116081),(function (){var attrs116083 = logseq.graph_parser.util.safe_decode_uri_component(graph_name);
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs116083))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-0","5"], null)], null),attrs116083], 0))):{'className':"pl-0 5"}),((cljs.core.map_QMARK_(attrs116083))?null:[daiquiri.interpreter.interpret(attrs116083)]));
})()]));
})()]),(function (){var attrs116074 = frontend.config.get_string_repo_dir(repo);
return daiquiri.core.create_element("h4",((cljs.core.map_QMARK_(attrs116074))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-6"], null)], null),attrs116074], 0))):{'className':"px-6"}),((cljs.core.map_QMARK_(attrs116074))?null:[daiquiri.interpreter.interpret(attrs116074)]));
})(),(((!(clojure.string.blank_QMARK_(selected_path))))?(function (){var attrs116075 = ((frontend.mobile.util.in_iCloud_container_path_QMARK_(selected_path))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-block.pr-1.text-error.scale-75","span.inline-block.pr-1.text-error.scale-75",-1956736057),frontend.ui.icon("alert-circle")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-block.pr-1.text-success.scale-75","span.inline-block.pr-1.text-success.scale-75",1932768332),frontend.ui.icon("circle-check")], null));
return daiquiri.core.create_element("h5",((cljs.core.map_QMARK_(attrs116075))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-xs","pt-1","-mb-1","flex","items-center","leading-none"], null)], null),attrs116075], 0))):{'className':"text-xs pt-1 -mb-1 flex items-center leading-none"}),((cljs.core.map_QMARK_(attrs116075))?[daiquiri.interpreter.interpret(selected_path)]:[daiquiri.interpreter.interpret(attrs116075),daiquiri.interpreter.interpret(selected_path)]));
})():null),(function (){var attrs116080 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inline-flex.items-center.leading-none.opacity-90","span.inline-flex.items-center.leading-none.opacity-90",1106304784),"Select new parent folder outside of iCloud",frontend.ui.icon("arrow-right")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["openDialog"], 0)),(function (path){
return promesa.protocols._promise((set_selected_path.cljs$core$IFn$_invoke$arity$1 ? set_selected_path.cljs$core$IFn$_invoke$arity$1(path) : set_selected_path.call(null,path)));
}));
}));
} else {
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(frontend.mobile.util.folder_picker.pickFolder(),(function (p1__116063_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__116063_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
})),(function (p__116084){
var map__116085 = p__116084;
var map__116085__$1 = cljs.core.__destructure_map(map__116085);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116085__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var _localDocumentsPath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116085__$1,new cljs.core.Keyword(null,"_localDocumentsPath","_localDocumentsPath",-419062105));
return promesa.protocols._promise((set_selected_path.cljs$core$IFn$_invoke$arity$1 ? set_selected_path.cljs$core$IFn$_invoke$arity$1(path) : set_selected_path.call(null,path)));
}));
}));
} else {
return null;

}
}
})], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116080))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["out-icloud"], null)], null),attrs116080], 0))):{'className':"out-icloud"}),((cljs.core.map_QMARK_(attrs116080))?null:[daiquiri.interpreter.interpret(attrs116080)]));
})()]),(function (){var attrs116072 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Cancel",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50",new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs116072))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","space-x-2","pt-6","flex","justify-center","sm:justify-end","-mb-2"], null)], null),attrs116072], 0))):{'className':"flex items-center space-x-2 pt-6 flex justify-center sm:justify-end -mb-2"}),((cljs.core.map_QMARK_(attrs116072))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Clone graph",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(selected_path_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_confirm], 0)))]:[daiquiri.interpreter.interpret(attrs116072),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Clone graph",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(selected_path_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_confirm], 0)))]));
})()]);
}),null,"frontend.components.file-sync/clone-local-icloud-graph-panel");
frontend.components.file_sync.create_remote_graph_panel = rum.core.lazy_build(rum.core.build_defc,(function (repo,graph_name,close_fn){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var G__116086 = frontend.state.sub(new cljs.core.Keyword("file-sync","jstour-inst","file-sync/jstour-inst",-1545838291));
if((G__116086 == null)){
return null;
} else {
return G__116086.complete();
}
}),cljs.core.PersistentVector.EMPTY);

var on_confirm = (function (){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_116122){
var state_val_116123 = (state_116122[(1)]);
if((state_val_116123 === (7))){
var state_116122__$1 = state_116122;
var statearr_116124_116476 = state_116122__$1;
(statearr_116124_116476[(2)] = null);

(statearr_116124_116476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116123 === (1))){
var inst_116087 = (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
var inst_116088 = frontend.mobile.util.in_iCloud_container_path_QMARK_(repo);
var state_116122__$1 = (function (){var statearr_116125 = state_116122;
(statearr_116125[(7)] = inst_116087);

return statearr_116125;
})();
if(inst_116088){
var statearr_116126_116477 = state_116122__$1;
(statearr_116126_116477[(1)] = (2));

} else {
var statearr_116127_116478 = state_116122__$1;
(statearr_116127_116478[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116123 === (4))){
var inst_116120 = (state_116122[(2)]);
var state_116122__$1 = state_116122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_116122__$1,inst_116120);
} else {
if((state_val_116123 === (6))){
var inst_116101 = frontend.fs.sync._LT_sync_start();
var state_116122__$1 = state_116122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116122__$1,(9),inst_116101);
} else {
if((state_val_116123 === (3))){
var inst_116092 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_116093 = [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword("graph","create-remote?","graph/create-remote?",-1583424902)];
var inst_116094 = (new cljs.core.PersistentVector(null,2,(5),inst_116092,inst_116093,null));
var inst_116095 = frontend.state.set_state_BANG_(inst_116094,true);
var inst_116096 = frontend.handler.file_sync.create_graph(graph_name);
var state_116122__$1 = (function (){var statearr_116128 = state_116122;
(statearr_116128[(8)] = inst_116095);

return statearr_116128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116122__$1,(5),inst_116096);
} else {
if((state_val_116123 === (2))){
var inst_116090 = (frontend.components.file_sync.open_icloud_graph_clone_picker.cljs$core$IFn$_invoke$arity$1 ? frontend.components.file_sync.open_icloud_graph_clone_picker.cljs$core$IFn$_invoke$arity$1(repo) : frontend.components.file_sync.open_icloud_graph_clone_picker.call(null,repo));
var state_116122__$1 = state_116122;
var statearr_116129_116479 = state_116122__$1;
(statearr_116129_116479[(2)] = inst_116090);

(statearr_116129_116479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116123 === (9))){
var inst_116099 = (state_116122[(9)]);
var inst_116103 = (state_116122[(2)]);
var inst_116104 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_116105 = [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword("graph","create-remote?","graph/create-remote?",-1583424902)];
var inst_116106 = (new cljs.core.PersistentVector(null,2,(5),inst_116104,inst_116105,null));
var inst_116107 = frontend.state.set_state_BANG_(inst_116106,false);
var inst_116108 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"GraphName","GraphName",-960661337)];
var inst_116109 = [inst_116099,graph_name];
var inst_116110 = cljs.core.PersistentHashMap.fromArrays(inst_116108,inst_116109);
var inst_116111 = frontend.state.add_remote_graph_BANG_(inst_116110);
var inst_116112 = (function (){var temp__5804__auto__ = inst_116099;
var GraphUUID = inst_116099;
return (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r),repo)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),GraphUUID,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name,new cljs.core.Keyword(null,"remote?","remote?",-517415110),true], 0));
} else {
return r;
}
});
})();
var inst_116113 = frontend.state.get_repos();
var inst_116114 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_116112,inst_116113);
var inst_116115 = frontend.state.set_repos_BANG_(inst_116114);
var state_116122__$1 = (function (){var statearr_116130 = state_116122;
(statearr_116130[(10)] = inst_116103);

(statearr_116130[(11)] = inst_116107);

(statearr_116130[(12)] = inst_116111);

return statearr_116130;
})();
var statearr_116131_116480 = state_116122__$1;
(statearr_116131_116480[(2)] = inst_116115);

(statearr_116131_116480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116123 === (5))){
var inst_116099 = (state_116122[(9)]);
var inst_116098 = (state_116122[(2)]);
var inst_116099__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_116098,(2));
var state_116122__$1 = (function (){var statearr_116132 = state_116122;
(statearr_116132[(9)] = inst_116099__$1);

return statearr_116132;
})();
if(cljs.core.truth_(inst_116099__$1)){
var statearr_116133_116481 = state_116122__$1;
(statearr_116133_116481[(1)] = (6));

} else {
var statearr_116134_116482 = state_116122__$1;
(statearr_116134_116482[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116123 === (8))){
var inst_116118 = (state_116122[(2)]);
var state_116122__$1 = state_116122;
var statearr_116135_116483 = state_116122__$1;
(statearr_116135_116483[(2)] = inst_116118);

(statearr_116135_116483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$components$file_sync$state_machine__34379__auto__ = null;
var frontend$components$file_sync$state_machine__34379__auto____0 = (function (){
var statearr_116136 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_116136[(0)] = frontend$components$file_sync$state_machine__34379__auto__);

(statearr_116136[(1)] = (1));

return statearr_116136;
});
var frontend$components$file_sync$state_machine__34379__auto____1 = (function (state_116122){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_116122);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e116137){var ex__34382__auto__ = e116137;
var statearr_116138_116484 = state_116122;
(statearr_116138_116484[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_116122[(4)]))){
var statearr_116139_116485 = state_116122;
(statearr_116139_116485[(1)] = cljs.core.first((state_116122[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__116486 = state_116122;
state_116122 = G__116486;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$file_sync$state_machine__34379__auto__ = function(state_116122){
switch(arguments.length){
case 0:
return frontend$components$file_sync$state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$file_sync$state_machine__34379__auto____1.call(this,state_116122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$file_sync$state_machine__34379__auto____0;
frontend$components$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$file_sync$state_machine__34379__auto____1;
return frontend$components$file_sync$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_116140 = f__34484__auto__();
(statearr_116140[(6)] = c__34483__auto__);

return statearr_116140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
return daiquiri.core.create_element("div",{'className':"cp__file-sync-related-normal-modal"},[daiquiri.core.create_element("div",{'className':"flex justify-center pb-4"},[(function (){var attrs116146 = frontend.ui.icon("cloud-upload",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116146))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-wrap"], null)], null),attrs116146], 0))):{'className':"icon-wrap"}),((cljs.core.map_QMARK_(attrs116146))?null:[daiquiri.interpreter.interpret(attrs116146)]));
})()]),daiquiri.core.create_element("h1",{'className':"text-xl font-semibold opacity-90 text-center py-2"},["Are you sure you want to create a new remote graph?"]),daiquiri.core.create_element("h2",{'className':"text-center opacity-70 text-xs"},["By continuing this action you will create an encrypted cloud version of your current local graph.",daiquiri.core.create_element("br",null,null),"You can always delete the remote graph at a later point."]),daiquiri.core.create_element("div",{'className':"folder-tip flex flex-col items-center"},[daiquiri.core.create_element("h3",null,[(function (){var attrs116148 = frontend.ui.icon("folder");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116148))?daiquiri.interpreter.element_attributes(attrs116148):null),((cljs.core.map_QMARK_(attrs116148))?[(function (){var attrs116149 = graph_name;
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs116149))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-0","5"], null)], null),attrs116149], 0))):{'className':"pl-0 5"}),((cljs.core.map_QMARK_(attrs116149))?null:[daiquiri.interpreter.interpret(attrs116149)]));
})()]:[daiquiri.interpreter.interpret(attrs116148),(function (){var attrs116150 = graph_name;
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs116150))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-0","5"], null)], null),attrs116150], 0))):{'className':"pl-0 5"}),((cljs.core.map_QMARK_(attrs116150))?null:[daiquiri.interpreter.interpret(attrs116150)]));
})()]));
})(),(function (){var attrs116151 = frontend.ui.icon("arrow-right");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116151))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opacity-50","scale-75"], null)], null),attrs116151], 0))):{'className':"opacity-50 scale-75"}),((cljs.core.map_QMARK_(attrs116151))?null:[daiquiri.interpreter.interpret(attrs116151)]));
})(),(function (){var attrs116152 = frontend.ui.icon("cloud-lock");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116152))?daiquiri.interpreter.element_attributes(attrs116152):null),((cljs.core.map_QMARK_(attrs116152))?null:[daiquiri.interpreter.interpret(attrs116152)]));
})()]),(function (){var attrs116147 = frontend.config.get_string_repo_dir(repo);
return daiquiri.core.create_element("h4",((cljs.core.map_QMARK_(attrs116147))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-4"], null)], null),attrs116147], 0))):{'className':"px-4"}),((cljs.core.map_QMARK_(attrs116147))?null:[daiquiri.interpreter.interpret(attrs116147)]));
})()]),(function (){var attrs116145 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Cancel",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-50",new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs116145))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","space-x-2","pt-6","flex","justify-center","sm:justify-end","-mb-2"], null)], null),attrs116145], 0))):{'className':"flex items-center space-x-2 pt-6 flex justify-center sm:justify-end -mb-2"}),((cljs.core.map_QMARK_(attrs116145))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Create remote graph",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_confirm], 0)))]:[daiquiri.interpreter.interpret(attrs116145),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Create remote graph",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_confirm], 0)))]));
})()]);
}),null,"frontend.components.file-sync/create-remote-graph-panel");
frontend.components.file_sync.indicator_progress_pie = rum.core.lazy_build(rum.core.build_defc,(function (percentage){
var _STAR_el = rum.core.use_ref(null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = rum.core.deref(_STAR_el);
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return (el.style.backgroundImage = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("conic-gradient(var(--ls-pie-fg-color) %s%, var(--ls-pie-bg-color) %s%)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([percentage,percentage], 0)));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [percentage], null));

return daiquiri.core.create_element("span",{'ref':_STAR_el,'className':"cp__file-sync-indicator-progress-pie"},[]);
}),null,"frontend.components.file-sync/indicator-progress-pie");
frontend.components.file_sync.last_synced_cp = rum.core.lazy_build(rum.core.build_defc,(function (){
var last_synced_at = frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),frontend.state.get_current_file_sync_graph_uuid(),new cljs.core.Keyword("file-sync","last-synced-at","file-sync/last-synced-at",1623190259)], null));
var last_synced_at__$1 = (cljs.core.truth_(last_synced_at)?frontend.util.time_ago(cljs_time.coerce.from_long((last_synced_at * (1000)))):"just now");
return daiquiri.core.create_element("div",{'className':"cl"},[daiquiri.core.create_element("span",{'className':"opacity-60"},["Last change was"]),(function (){var attrs116155 = last_synced_at__$1;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116155))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1"], null)], null),attrs116155], 0))):{'className':"pl-1"}),((cljs.core.map_QMARK_(attrs116155))?null:[attrs116155]));
})()]);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.file-sync/last-synced-cp");
frontend.components.file_sync.sync_now = rum.core.lazy_build(rum.core.build_defc,(function (){
return daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Sync now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"block cursor-pointer",new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.async.offer_BANG_(frontend.fs.sync.immediately_local__GT_remote_chan,true);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null)], 0)));
}),null,"frontend.components.file-sync/sync-now");
frontend.components.file_sync._STAR_last_calculated_time = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.components.file_sync.indicator_progress_pane = rum.core.lazy_build(rum.core.build_defc,(function (sync_state,sync_progress,p__116159){
var map__116160 = p__116159;
var map__116160__$1 = cljs.core.__destructure_map(map__116160);
var idle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116160__$1,new cljs.core.Keyword(null,"idle?","idle?",1779138705));
var syncing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116160__$1,new cljs.core.Keyword(null,"syncing?","syncing?",-474023112));
var no_active_files_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116160__$1,new cljs.core.Keyword(null,"no-active-files?","no-active-files?",1828838351));
var online_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116160__$1,new cljs.core.Keyword(null,"online?","online?",-1144837492));
var history_files_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116160__$1,new cljs.core.Keyword(null,"history-files?","history-files?",682465563));
var queuing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116160__$1,new cljs.core.Keyword(null,"queuing?","queuing?",-550117936));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return (function (){
return cljs.core.reset_BANG_(frontend.components.file_sync._STAR_last_calculated_time,null);
});
}),cljs.core.PersistentVector.EMPTY);

var uploading_files = new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256).cljs$core$IFn$_invoke$arity$1(sync_state);
var downloading_files = new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085).cljs$core$IFn$_invoke$arity$1(sync_state);
var uploading_QMARK_ = cljs.core.seq(uploading_files);
var downloading_QMARK_ = cljs.core.seq(downloading_files);
var progressing_QMARK_ = ((uploading_QMARK_) || (downloading_QMARK_));
var full_upload_files = new cljs.core.Keyword(null,"full-local->remote-files","full-local->remote-files",224642435).cljs$core$IFn$_invoke$arity$1(sync_state);
var full_download_files = new cljs.core.Keyword(null,"full-remote->local-files","full-remote->local-files",1421172401).cljs$core$IFn$_invoke$arity$1(sync_state);
var calc_progress_total = (function (){
if(uploading_QMARK_){
return cljs.core.count(full_upload_files);
} else {
if(downloading_QMARK_){
return cljs.core.count(full_download_files);
} else {
return (0);

}
}
});
var calc_progress_finished = (function (){
var current_sync_files = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),((cljs.core.seq(full_upload_files)) || (cljs.core.seq(full_download_files)))));
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__116156_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"percent","percent",2031453817).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__116156_SHARP_)),(100))) && (cljs.core.contains_QMARK_(current_sync_files,cljs.core.first(p1__116156_SHARP_))));
}),sync_progress));
});
var calc_time_left = (function (){
var last_calculated_at = new cljs.core.Keyword(null,"calculated-at","calculated-at",1296184984).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.components.file_sync._STAR_last_calculated_time));
var now = cljs_time.coerce.to_epoch(cljs_time.core.now());
if(cljs.core.truth_((function (){var and__5041__auto__ = last_calculated_at;
if(cljs.core.truth_(and__5041__auto__)){
return ((now - last_calculated_at) < (10));
} else {
return and__5041__auto__;
}
})())){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.components.file_sync._STAR_last_calculated_time));
} else {
var result = frontend.handler.file_sync.calculate_time_left(sync_state,sync_progress);
cljs.core.reset_BANG_(frontend.components.file_sync._STAR_last_calculated_time,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"calculated-at","calculated-at",1296184984),now,new cljs.core.Keyword(null,"result","result",1415092211),result], null));

return result;
}
});
var p_total = (cljs.core.truth_(syncing_QMARK_)?calc_progress_total():(0));
var p_finished = (cljs.core.truth_(syncing_QMARK_)?calc_progress_finished():(0));
var tip_b_AMPERSAND_p = (cljs.core.truth_((function (){var and__5041__auto__ = syncing_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return progressing_QMARK_;
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s of %s files",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_finished,p_total], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar","div.progress-bar",929518721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((p_total > (0)))?((p_finished / p_total) * (100)):(0))),"%"].join('')], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60","span.opacity-60",-1080417386),"all file edits"], null),frontend.components.file_sync.last_synced_cp()], null));
var _STAR_el_ref = rum.core.use_ref(null);
var vec__116161 = rum.core.use_state((function (p1__116157_SHARP_){
if((p1__116157_SHARP_ == null)){
return true;
} else {
return p1__116157_SHARP_;
}
})(frontend.storage.get(new cljs.core.Keyword("ui","file-sync-active-file-list?","ui/file-sync-active-file-list?",2000179644))));
var list_active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116161,(0),null);
var set_list_active_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116161,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = (function (){var G__116164 = rum.core.deref(_STAR_el_ref);
var G__116164__$1 = (((G__116164 == null))?null:G__116164.closest(".menu-links-outer"));
if((G__116164__$1 == null)){
return null;
} else {
return G__116164__$1.classList;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var outer_class_list = temp__5804__auto__;
(function (p1__116158_SHARP_){
if(cljs.core.truth_(list_active_QMARK_)){
return outer_class_list.add(p1__116158_SHARP_);
} else {
return outer_class_list.remove(p1__116158_SHARP_);
}
})("is-list-active");

return frontend.storage.set(new cljs.core.Keyword("ui","file-sync-active-file-list?","ui/file-sync-active-file-list?",2000179644),list_active_QMARK_);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_active_QMARK_], null));

var idle__AMPERSAND__no_active_QMARK_ = (function (){var and__5041__auto__ = idle_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return no_active_files_QMARK_;
} else {
return and__5041__auto__;
}
})();
var waiting_QMARK_ = cljs.core.not((function (){var or__5043__auto__ = cljs.core.not(online_QMARK_);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = idle__AMPERSAND__no_active_QMARK_;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return syncing_QMARK_;
}
}
})());
return daiquiri.core.create_element("div",{'ref':_STAR_el_ref,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__file-sync-indicator-progress-pane",(cljs.core.truth_((function (){var and__5041__auto__ = syncing_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return progressing_QMARK_;
} else {
return and__5041__auto__;
}
})())?"is-progress-active":null)], null))},[daiquiri.core.create_element("div",{'className':"a"},[daiquiri.core.create_element("div",{'className':"al"},[daiquiri.core.create_element("strong",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(idle__AMPERSAND__no_active_QMARK_)?"is-no-active":null)], null))},[((cljs.core.not(online_QMARK_))?daiquiri.interpreter.interpret(frontend.ui.icon("wifi-off")):((uploading_QMARK_)?daiquiri.interpreter.interpret(frontend.ui.icon("arrow-up")):((downloading_QMARK_)?daiquiri.interpreter.interpret(frontend.ui.icon("arrow-down")):daiquiri.interpreter.interpret(frontend.ui.icon("thumb-up"))
)))]),daiquiri.core.create_element("span",null,[((cljs.core.not(online_QMARK_))?"Currently having connection issues...":(cljs.core.truth_(idle__AMPERSAND__no_active_QMARK_)?"Everything is synced!":(cljs.core.truth_(syncing_QMARK_)?"Currently syncing your graph...":"Waiting..."
)))])]),(function (){var attrs116165 = (cljs.core.truth_(queuing_QMARK_)?frontend.components.file_sync.sync_now():null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116165))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ar"], null)], null),attrs116165], 0))):{'className':"ar"}),((cljs.core.map_QMARK_(attrs116165))?null:[daiquiri.interpreter.interpret(attrs116165)]));
})()]),((waiting_QMARK_)?null:daiquiri.core.create_element("div",{'className':"b dark:text-gray-200"},[daiquiri.core.create_element("div",{'className':"bl"},[(function (){var attrs116166 = (cljs.core.truth_(no_active_files_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-100.pr-1","span.opacity-100.pr-1",-148417813),"Successfully processed"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-60.pr-1","span.opacity-60.pr-1",1607561462),"Processed"], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116166))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs116166], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs116166))?null:[daiquiri.interpreter.interpret(attrs116166)]));
})(),daiquiri.interpreter.interpret(cljs.core.first(tip_b_AMPERSAND_p))]),daiquiri.core.create_element("div",{'className':"br"},[(function (){var attrs116167 = (cljs.core.truth_(syncing_QMARK_)?calc_time_left():null);
return daiquiri.core.create_element("small",((cljs.core.map_QMARK_(attrs116167))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opacity-50"], null)], null),attrs116167], 0))):{'className':"opacity-50"}),((cljs.core.map_QMARK_(attrs116167))?null:[daiquiri.interpreter.interpret(attrs116167)]));
})()])])),daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",((waiting_QMARK_)?"pt-2":null)], null))},[daiquiri.interpreter.interpret(cljs.core.second(tip_b_AMPERSAND_p)),(cljs.core.truth_((function (){var or__5043__auto__ = history_files_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not(no_active_files_QMARK_);
}
})())?daiquiri.core.create_element("span",{'onClick':(function (){
var G__116168 = cljs.core.not(list_active_QMARK_);
return (set_list_active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_list_active_QMARK_.cljs$core$IFn$_invoke$arity$1(G__116168) : set_list_active_QMARK_.call(null,G__116168));
}),'className':"inline-flex pl-2 active:opacity-50"},[(cljs.core.truth_(list_active_QMARK_)?daiquiri.interpreter.interpret(frontend.ui.icon("chevron-up",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null)], null))):daiquiri.interpreter.interpret(frontend.ui.icon("chevron-left",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null)], null))))]):null)])]);
}),null,"frontend.components.file-sync/indicator-progress-pane");
frontend.components.file_sync.sort_files = (function frontend$components$file_sync$sort_files(files){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (f){
var or__5043__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
}),cljs.core._GT_,files);
});
frontend.components.file_sync.indicator = rum.core.lazy_build(rum.core.build_defcs,(function (_state){
var _ = frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var online_QMARK_ = frontend.state.sub(new cljs.core.Keyword("network","online?","network/online?",1306822774));
var enabled_progress_panel_QMARK_ = true;
var current_repo = frontend.state.get_current_repo();
var creating_remote_graph_QMARK_ = frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","loading?","ui/loading?",1905710757),new cljs.core.Keyword("graph","create-remote?","graph/create-remote?",-1583424902)], null));
var current_graph_id = frontend.state.sub_current_file_sync_graph_uuid();
var sync_state = frontend.state.sub_file_sync_state(current_graph_id);
var sync_progress = frontend.state.sub(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","graph-state","file-sync/graph-state",-1768817840),current_graph_id,new cljs.core.Keyword("file-sync","progress","file-sync/progress",-1051866953)], null));
var ___$1 = rum.core.react(frontend.handler.file_sync.refresh_file_sync_component);
var synced_file_graph_QMARK_ = frontend.handler.file_sync.synced_file_graph_QMARK_(current_repo);
var uploading_files = frontend.components.file_sync.sort_files(new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256).cljs$core$IFn$_invoke$arity$1(sync_state));
var downloading_files = frontend.components.file_sync.sort_files(new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085).cljs$core$IFn$_invoke$arity$1(sync_state));
var queuing_files = new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812).cljs$core$IFn$_invoke$arity$1(sync_state);
var history_files = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(sync_state);
var status = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(sync_state);
var status__$1 = (function (){var or__5043__auto__ = (status == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(status));
}
})();
var off_QMARK_ = frontend.fs.sync.sync_off_QMARK_(sync_state);
var full_syncing_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906),null,new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000),null], null), null),status__$1);
var syncing_QMARK_ = ((full_syncing_QMARK_) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451),null,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356),null], null), null),status__$1)));
var idle_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idle","idle",-2007156861),null], null), null),status__$1);
var need_password_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-password","need-password",-2018968752),null], null), null),status__$1)) && (cljs.core.not(frontend.fs.sync.graph_encrypted_QMARK_())));
var queuing_QMARK_ = ((idle_QMARK_) && (cljs.core.boolean$(cljs.core.seq(queuing_files))));
var no_active_files_QMARK_ = cljs.core.empty_QMARK_(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(downloading_files,queuing_files,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uploading_files], 0)));
var create_remote_graph_fn = (function (){
if(cljs.core.truth_((function (){var and__5041__auto__ = current_repo;
if(cljs.core.truth_(and__5041__auto__)){
return (!(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(current_repo)));
} else {
return and__5041__auto__;
}
})())){
var graph_name = decodeURI((frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(current_repo) : frontend.util.node_path.basename.call(null,current_repo)));
var confirm_fn = (function (close_fn){
return frontend.components.file_sync.create_remote_graph_panel(current_repo,graph_name,close_fn);
});
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2(confirm_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"center?","center?",-323116631),true,new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false], null));
} else {
return null;
}
});
var turn_on = goog.functions.debounce((function (){
if(cljs.core.truth_(frontend.handler.file_sync.current_graph_sync_on_QMARK_())){
return null;
} else {
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_116255){
var state_val_116256 = (state_116255[(1)]);
if((state_val_116256 === (7))){
var state_116255__$1 = state_116255;
var statearr_116257_116487 = state_116255__$1;
(statearr_116257_116487[(2)] = null);

(statearr_116257_116487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (20))){
var inst_116206 = (state_116255[(7)]);
var state_116255__$1 = state_116255;
var statearr_116258_116488 = state_116255__$1;
(statearr_116258_116488[(2)] = inst_116206);

(statearr_116258_116488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (27))){
var inst_116169 = (state_116255[(8)]);
var inst_116226 = cljs.core.deref(inst_116169);
var inst_116227 = cljs.core.second(inst_116226);
var state_116255__$1 = state_116255;
if(cljs.core.truth_(inst_116227)){
var statearr_116259_116489 = state_116255__$1;
(statearr_116259_116489[(1)] = (29));

} else {
var statearr_116260_116490 = state_116255__$1;
(statearr_116260_116490[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (1))){
var inst_116169 = (state_116255[(8)]);
var inst_116169__$1 = frontend.fs.sync.graphs_txid;
var inst_116170 = inst_116169__$1.frontend$util$persist_var$ILoad$_load$arity$1(null);
var inst_116171 = cljs.core.async.interop.p__GT_c(inst_116170);
var state_116255__$1 = (function (){var statearr_116261 = state_116255;
(statearr_116261[(8)] = inst_116169__$1);

return statearr_116261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116255__$1,(2),inst_116171);
} else {
if((state_val_116256 === (24))){
var inst_116219 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
var statearr_116262_116491 = state_116255__$1;
(statearr_116262_116491[(2)] = inst_116219);

(statearr_116262_116491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (4))){
var inst_116181 = frontend.handler.user._LT_user_uuid();
var state_116255__$1 = state_116255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116255__$1,(6),inst_116181);
} else {
if((state_val_116256 === (15))){
var inst_116199 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
var statearr_116263_116492 = state_116255__$1;
(statearr_116263_116492[(2)] = inst_116199);

(statearr_116263_116492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (21))){
var inst_116222 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
if(cljs.core.truth_(inst_116222)){
var statearr_116264_116493 = state_116255__$1;
(statearr_116264_116493[(1)] = (26));

} else {
var statearr_116265_116494 = state_116255__$1;
(statearr_116265_116494[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (31))){
var inst_116247 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
var statearr_116266_116495 = state_116255__$1;
(statearr_116266_116495[(2)] = inst_116247);

(statearr_116266_116495[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (32))){
var state_116255__$1 = state_116255;
var statearr_116267_116496 = state_116255__$1;
(statearr_116267_116496[(2)] = null);

(statearr_116267_116496[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (33))){
var state_116255__$1 = state_116255;
var statearr_116268_116497 = state_116255__$1;
(statearr_116268_116497[(1)] = (35));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (13))){
var inst_116169 = (state_116255[(8)]);
var inst_116188 = (state_116255[(9)]);
var inst_116193 = cljs.core.deref(inst_116169);
var inst_116194 = cljs.core.first(inst_116193);
var inst_116195 = frontend.fs.sync.check_graph_belong_to_current_user(inst_116188,inst_116194);
var inst_116196 = (!(inst_116195));
var state_116255__$1 = state_116255;
var statearr_116270_116498 = state_116255__$1;
(statearr_116270_116498[(2)] = inst_116196);

(statearr_116270_116498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (22))){
var inst_116169 = (state_116255[(8)]);
var inst_116212 = cljs.core.deref(inst_116169);
var inst_116213 = cljs.core.second(inst_116212);
var inst_116214 = frontend.fs.sync._LT_check_remote_graph_exists(inst_116213);
var state_116255__$1 = state_116255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116255__$1,(25),inst_116214);
} else {
if((state_val_116256 === (36))){
var state_116255__$1 = state_116255;
var statearr_116271_116499 = state_116255__$1;
(statearr_116271_116499[(2)] = null);

(statearr_116271_116499[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (29))){
var inst_116169 = (state_116255[(8)]);
var inst_116229 = (function (){var graphs_txid = inst_116169;
return (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(r),current_repo)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),new cljs.core.Keyword(null,"remote?","remote?",-517415110)], 0));
} else {
return r;
}
});
})();
var inst_116230 = frontend.state.get_repos();
var inst_116231 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_116229,inst_116230);
var inst_116232 = frontend.state.set_repos_BANG_(inst_116231);
var inst_116233 = create_remote_graph_fn();
var state_116255__$1 = (function (){var statearr_116272 = state_116255;
(statearr_116272[(10)] = inst_116232);

return statearr_116272;
})();
var statearr_116273_116500 = state_116255__$1;
(statearr_116273_116500[(2)] = inst_116233);

(statearr_116273_116500[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (6))){
var inst_116183 = (state_116255[(11)]);
var inst_116183__$1 = (state_116255[(2)]);
var inst_116184 = (inst_116183__$1 instanceof cljs.core.ExceptionInfo);
var state_116255__$1 = (function (){var statearr_116274 = state_116255;
(statearr_116274[(11)] = inst_116183__$1);

return statearr_116274;
})();
if(cljs.core.truth_(inst_116184)){
var statearr_116275_116501 = state_116255__$1;
(statearr_116275_116501[(1)] = (7));

} else {
var statearr_116276_116502 = state_116255__$1;
(statearr_116276_116502[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (28))){
var inst_116249 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
var statearr_116277_116503 = state_116255__$1;
(statearr_116277_116503[(2)] = inst_116249);

(statearr_116277_116503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (25))){
var inst_116216 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
var statearr_116278_116504 = state_116255__$1;
(statearr_116278_116504[(2)] = inst_116216);

(statearr_116278_116504[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (34))){
var inst_116245 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
var statearr_116279_116505 = state_116255__$1;
(statearr_116279_116505[(2)] = inst_116245);

(statearr_116279_116505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (17))){
var inst_116169 = (state_116255[(8)]);
var inst_116206 = (state_116255[(7)]);
var inst_116205 = cljs.core.deref(inst_116169);
var inst_116206__$1 = cljs.core.second(inst_116205);
var state_116255__$1 = (function (){var statearr_116280 = state_116255;
(statearr_116280[(7)] = inst_116206__$1);

return statearr_116280;
})();
if(cljs.core.truth_(inst_116206__$1)){
var statearr_116281_116506 = state_116255__$1;
(statearr_116281_116506[(1)] = (19));

} else {
var statearr_116282_116507 = state_116255__$1;
(statearr_116282_116507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (3))){
var inst_116176 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_116177 = [new cljs.core.Keyword("file-sync","onboarding-tip","file-sync/onboarding-tip",-1267073709),new cljs.core.Keyword(null,"unavailable","unavailable",1529915531)];
var inst_116178 = (new cljs.core.PersistentVector(null,2,(5),inst_116176,inst_116177,null));
var inst_116179 = frontend.state.pub_event_BANG_(inst_116178);
var state_116255__$1 = state_116255;
var statearr_116283_116508 = state_116255__$1;
(statearr_116283_116508[(2)] = inst_116179);

(statearr_116283_116508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (12))){
var inst_116202 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
if(cljs.core.truth_(inst_116202)){
var statearr_116284_116509 = state_116255__$1;
(statearr_116284_116509[(1)] = (16));

} else {
var statearr_116285_116510 = state_116255__$1;
(statearr_116285_116510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (2))){
var inst_116173 = (state_116255[(2)]);
var inst_116174 = cljs.core.deref(frontend.handler.file_sync._STAR_beta_unavailable_QMARK_);
var state_116255__$1 = (function (){var statearr_116286 = state_116255;
(statearr_116286[(12)] = inst_116173);

return statearr_116286;
})();
if(cljs.core.truth_(inst_116174)){
var statearr_116287_116511 = state_116255__$1;
(statearr_116287_116511[(1)] = (3));

} else {
var statearr_116288_116512 = state_116255__$1;
(statearr_116288_116512[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (23))){
var inst_116210 = (state_116255[(13)]);
var state_116255__$1 = state_116255;
var statearr_116289_116513 = state_116255__$1;
(statearr_116289_116513[(2)] = inst_116210);

(statearr_116289_116513[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (35))){
var inst_116240 = create_remote_graph_fn();
var state_116255__$1 = state_116255;
var statearr_116290_116514 = state_116255__$1;
(statearr_116290_116514[(2)] = inst_116240);

(statearr_116290_116514[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (19))){
var inst_116169 = (state_116255[(8)]);
var inst_116210 = (state_116255[(13)]);
var inst_116208 = cljs.core.deref(inst_116169);
var inst_116209 = cljs.core.second(inst_116208);
var inst_116210__$1 = frontend.fs.sync.graph_sync_off_QMARK_(inst_116209);
var state_116255__$1 = (function (){var statearr_116291 = state_116255;
(statearr_116291[(13)] = inst_116210__$1);

return statearr_116291;
})();
if(inst_116210__$1){
var statearr_116292_116515 = state_116255__$1;
(statearr_116292_116515[(1)] = (22));

} else {
var statearr_116293_116516 = state_116255__$1;
(statearr_116293_116516[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (11))){
var inst_116190 = (state_116255[(14)]);
var state_116255__$1 = state_116255;
var statearr_116294_116517 = state_116255__$1;
(statearr_116294_116517[(2)] = inst_116190);

(statearr_116294_116517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (9))){
var inst_116169 = (state_116255[(8)]);
var inst_116190 = (state_116255[(14)]);
var inst_116188 = (state_116255[(2)]);
var inst_116189 = cljs.core.deref(inst_116169);
var inst_116190__$1 = cljs.core.first(inst_116189);
var state_116255__$1 = (function (){var statearr_116295 = state_116255;
(statearr_116295[(9)] = inst_116188);

(statearr_116295[(14)] = inst_116190__$1);

return statearr_116295;
})();
if(cljs.core.truth_(inst_116190__$1)){
var statearr_116296_116518 = state_116255__$1;
(statearr_116296_116518[(1)] = (10));

} else {
var statearr_116297_116519 = state_116255__$1;
(statearr_116297_116519[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (5))){
var inst_116253 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_116255__$1,inst_116253);
} else {
if((state_val_116256 === (14))){
var inst_116188 = (state_116255[(9)]);
var state_116255__$1 = state_116255;
var statearr_116298_116520 = state_116255__$1;
(statearr_116298_116520[(2)] = inst_116188);

(statearr_116298_116520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (26))){
var inst_116224 = frontend.fs.sync._LT_sync_start();
var state_116255__$1 = state_116255;
var statearr_116299_116521 = state_116255__$1;
(statearr_116299_116521[(2)] = inst_116224);

(statearr_116299_116521[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (16))){
var state_116255__$1 = state_116255;
var statearr_116300_116522 = state_116255__$1;
(statearr_116300_116522[(2)] = null);

(statearr_116300_116522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (30))){
var inst_116169 = (state_116255[(8)]);
var inst_116235 = cljs.core.deref(inst_116169);
var inst_116236 = cljs.core.second(inst_116235);
var state_116255__$1 = state_116255;
if(cljs.core.truth_(inst_116236)){
var statearr_116301_116523 = state_116255__$1;
(statearr_116301_116523[(1)] = (32));

} else {
var statearr_116302_116524 = state_116255__$1;
(statearr_116302_116524[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (10))){
var inst_116188 = (state_116255[(9)]);
var state_116255__$1 = state_116255;
if(cljs.core.truth_(inst_116188)){
var statearr_116303_116525 = state_116255__$1;
(statearr_116303_116525[(1)] = (13));

} else {
var statearr_116304_116526 = state_116255__$1;
(statearr_116304_116526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (18))){
var inst_116251 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
var statearr_116305_116527 = state_116255__$1;
(statearr_116305_116527[(2)] = inst_116251);

(statearr_116305_116527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (37))){
var inst_116243 = (state_116255[(2)]);
var state_116255__$1 = state_116255;
var statearr_116306_116528 = state_116255__$1;
(statearr_116306_116528[(2)] = inst_116243);

(statearr_116306_116528[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116256 === (8))){
var inst_116183 = (state_116255[(11)]);
var state_116255__$1 = state_116255;
var statearr_116307_116529 = state_116255__$1;
(statearr_116307_116529[(2)] = inst_116183);

(statearr_116307_116529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$components$file_sync$state_machine__34379__auto__ = null;
var frontend$components$file_sync$state_machine__34379__auto____0 = (function (){
var statearr_116308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_116308[(0)] = frontend$components$file_sync$state_machine__34379__auto__);

(statearr_116308[(1)] = (1));

return statearr_116308;
});
var frontend$components$file_sync$state_machine__34379__auto____1 = (function (state_116255){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_116255);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e116309){var ex__34382__auto__ = e116309;
var statearr_116310_116530 = state_116255;
(statearr_116310_116530[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_116255[(4)]))){
var statearr_116311_116531 = state_116255;
(statearr_116311_116531[(1)] = cljs.core.first((state_116255[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__116532 = state_116255;
state_116255 = G__116532;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$file_sync$state_machine__34379__auto__ = function(state_116255){
switch(arguments.length){
case 0:
return frontend$components$file_sync$state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$file_sync$state_machine__34379__auto____1.call(this,state_116255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$file_sync$state_machine__34379__auto____0;
frontend$components$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$file_sync$state_machine__34379__auto____1;
return frontend$components$file_sync$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_116312 = f__34484__auto__();
(statearr_116312[(6)] = c__34483__auto__);

return statearr_116312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}
}),(1500));
if(cljs.core.truth_(creating_remote_graph_QMARK_)){
return daiquiri.interpreter.interpret(frontend.ui.loading.cljs$core$IFn$_invoke$arity$1(""));
} else {
return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__file-sync-indicator",frontend.util.classnames(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-enabled-progress-pane","is-enabled-progress-pane",1275548472),enabled_progress_panel_QMARK_,new cljs.core.Keyword(null,"has-active-files","has-active-files",-177039525),(!(no_active_files_QMARK_))], null),["status-of-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__5041__auto__ = (status__$1 instanceof cljs.core.Keyword);
if(and__5041__auto__){
return cljs.core.name(status__$1);
} else {
return and__5041__auto__;
}
})())].join('')], null))], null))},[(((((!(frontend.config.publishing_QMARK_))) && (frontend.handler.user.logged_in_QMARK_())))?frontend.ui.dropdown_with_links((function (p__116319){
var map__116320 = p__116319;
var map__116320__$1 = cljs.core.__destructure_map(map__116320);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116320__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
if((!(off_QMARK_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.cloud.on","a.button.cloud.on",-435823998),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_fn,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"syncing","syncing",-291323582),syncing_QMARK_,new cljs.core.Keyword(null,"is-full","is-full",436383631),full_syncing_QMARK_,new cljs.core.Keyword(null,"queuing","queuing",-1502477638),queuing_QMARK_,new cljs.core.Keyword(null,"idle","idle",-2007156861),(((!(queuing_QMARK_))) && (idle_QMARK_))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("cloud",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),frontend.ui.icon_size], null))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.cloud.off","a.button.cloud.off",2106434377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),turn_on], null),frontend.ui.icon("cloud-off",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),frontend.ui.icon_size], null))], null);
}
}),(function (){var G__116321 = cljs.core.vec(((((no_active_files_QMARK_) && (idle_QMARK_)))?null:((need_password_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file-item.flex.items-center.leading-none.pt-3","div.file-item.flex.items-center.leading-none.pt-3",-1729973654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(-8)], null)], null),frontend.ui.icon("lock",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1.font-semibold","span.pl-1.font-semibold",-1207931896),"Password is required"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.fs.sync.sync_need_password_BANG_], null)], null)], null):(((!(no_active_files_QMARK_)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file-item.is-first","div.file-item.is-first",-135141546),""], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"is-first-placeholder"], null)], null)], null):null))));
if(cljs.core.truth_(synced_file_graph_QMARK_)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__116321,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file-item","div.file-item",992852419),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["downloading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')], null),f], null),new cljs.core.Keyword(null,"key","key",-1516042587),["downloading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),((enabled_progress_panel_QMARK_)?(function (){var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sync_progress,f);
var percent = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"percent","percent",2031453817).cljs$core$IFn$_invoke$arity$1(progress);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
if(((typeof percent === 'number') && ((percent < (100))))){
return frontend.components.file_sync.indicator_progress_pie(percent);
} else {
return frontend.ui.icon("circle-check");
}
})():frontend.ui.icon("arrow-narrow-down"))], null);
}),downloading_files),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
var icon = (function (){var G__116322 = e.type;
switch (G__116322) {
case "add":
return "plus";

break;
case "unlink":
return "minus";

break;
default:
return "edit";

}
})();
var path = frontend.fs.sync.relative_path(e);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file-item","div.file-item",992852419),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["queue-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')], null),path], null),new cljs.core.Keyword(null,"key","key",-1516042587),["queue-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon(icon)], null);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),queuing_files)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file-item","div.file-item",992852419),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["uploading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')], null),f], null),new cljs.core.Keyword(null,"key","key",-1516042587),["uploading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),((enabled_progress_panel_QMARK_)?(function (){var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sync_progress,f);
var percent = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"percent","percent",2031453817).cljs$core$IFn$_invoke$arity$1(progress);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
if(((typeof percent === 'number') && ((percent < (100))))){
return frontend.components.file_sync.indicator_progress_pie(percent);
} else {
return frontend.ui.icon("circle-check");
}
})():frontend.ui.icon("arrow-up"))], null);
}),uploading_files),((cljs.core.seq(history_files))?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,f){
new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(f);

var temp__5804__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(temp__5804__auto__)){
var path = temp__5804__auto__;
var full_path = (function (){var G__116323 = frontend.config.get_repo_dir(current_repo);
var G__116324 = path;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__116323,G__116324) : frontend.util.node_path.join.call(null,G__116323,G__116324));
})();
var page_name = (frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file_page.cljs$core$IFn$_invoke$arity$1(full_path) : frontend.db.get_file_page.call(null,full_path));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.files-history.cursor-pointer","div.files-history.cursor-pointer",-1415790468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"is-first":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(page_name)){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page_name], null));
} else {
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),full_path], null));
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-sync-item","span.file-sync-item",-1634303923),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opacity-50","div.opacity-50",-874367312),frontend.ui.humanity_time_ago(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(f),null)], null)], null)], null);
} else {
return null;
}
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),history_files)):null)], 0));
} else {
return G__116321;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outer-header","outer-header",-1732961785),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.components.file_sync.indicator_progress_pane(sync_state,sync_progress,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"idle?","idle?",1779138705),idle_QMARK_,new cljs.core.Keyword(null,"syncing?","syncing?",-474023112),syncing_QMARK_,new cljs.core.Keyword(null,"need-password?","need-password?",97580677),need_password_QMARK_,new cljs.core.Keyword(null,"full-sync?","full-sync?",-234400018),full_syncing_QMARK_,new cljs.core.Keyword(null,"online?","online?",-1144837492),online_QMARK_,new cljs.core.Keyword(null,"queuing?","queuing?",-550117936),queuing_QMARK_,new cljs.core.Keyword(null,"no-active-files?","no-active-files?",1828838351),no_active_files_QMARK_,new cljs.core.Keyword(null,"history-files?","history-files?",682465563),cljs.core.seq(history_files)], null)),(cljs.core.truth_((function (){var and__5041__auto__ = (!(enabled_progress_panel_QMARK_));
if(and__5041__auto__){
var and__5041__auto____$1 = synced_file_graph_QMARK_;
if(cljs.core.truth_(and__5041__auto____$1)){
return queuing_QMARK_;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.head-ctls","div.head-ctls",-822457687),frontend.components.file_sync.sync_now()], null):null)], null)], null)):null)]);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (){
return cljs.core.identity("file-sync-indicator");
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var unsub_fn = frontend.handler.file_sync.setup_file_sync_event_listeners();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("frontend.components.file-sync","unsub-events","frontend.components.file-sync/unsub-events",-1321825907),unsub_fn);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.components.file-sync","unsub-events","frontend.components.file-sync/unsub-events",-1321825907).cljs$core$IFn$_invoke$arity$1(state),null);

return state;
})], null)], null),"frontend.components.file-sync/indicator");
frontend.components.file_sync.pick_local_graph_for_sync = rum.core.lazy_build(rum.core.build_defc,(function (graph){
return daiquiri.core.create_element("div",{'className':"cp__file-sync-related-normal-modal"},[daiquiri.core.create_element("div",{'className':"flex justify-center pb-4"},[(function (){var attrs116331 = frontend.ui.icon("cloud-download",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(22)], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116331))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-wrap"], null)], null),attrs116331], 0))):{'className':"icon-wrap"}),((cljs.core.map_QMARK_(attrs116331))?null:[daiquiri.interpreter.interpret(attrs116331)]));
})()]),(function (){var attrs116325 = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("Sync graph \"%s\" to local",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"GraphName","GraphName",-960661337).cljs$core$IFn$_invoke$arity$1(graph)], 0));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs116325))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mb-5","text-2xl","text-center","font-bold"], null)], null),attrs116325], 0))):{'className':"mb-5 text-2xl text-center font-bold"}),((cljs.core.map_QMARK_(attrs116325))?null:[daiquiri.interpreter.interpret(attrs116325)]));
})(),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Open a local directory",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),"block w-full mt-4",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"lg","lg",-80787836),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
frontend.state.close_modal_BANG_();

frontend.fs.sync._LT_sync_stop();

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.page.ls_dir_files_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__116334){
var map__116335 = p__116334;
var map__116335__$1 = cljs.core.__destructure_map(map__116335);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__116335__$1,new cljs.core.Keyword(null,"url","url",276297046));
frontend.handler.file_sync.init_remote_graph(url,graph);

return setTimeout((function (){
return frontend.handler.repo.refresh_repos_BANG_();
}),(200));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open-dir","on-open-dir",1666374285),(function (result){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.components.file-sync","on-open-dir","frontend.components.file-sync/on-open-dir",-1815698275),result], 0));

var empty_dir_QMARK_ = cljs.core.not(cljs.core.seq(new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(result)));
var root = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(result);
if(clojure.string.blank_QMARK_(root)){
return promesa.core.rejected((new Error(null)));
} else {
if(empty_dir_QMARK_){
return promesa.core.resolved(null);
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"readGraphTxIdInfo","readGraphTxIdInfo",-419437463),root], 0)):frontend.util.fs.read_graphs_txid_info(root)),(function (info){
if((((info == null)) || ((((cljs.core.second(info) == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(info),new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(graph))))))){
if(cljs.core.truth_(confirm("This directory is not empty, are you sure to sync the remote graph to it? Make sure to back up the directory first."))){
return promesa.core.resolved(null);
} else {
return promesa.core.rejected((new Error(null)));
}
} else {
return null;
}
}));

}
}
})], null)),(function (){
return null;
}));
})], 0))),(function (){var attrs116326 = frontend.ui.icon("alert-circle");
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116326))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-xs","opacity-50","px-1","flex-row","flex","items-center","p-2"], null)], null),attrs116326], 0))):{'className':"text-xs opacity-50 px-1 flex-row flex items-center p-2"}),((cljs.core.map_QMARK_(attrs116326))?[daiquiri.core.create_element("span",{'className':"ml-1"},[" An empty directory or an existing remote graph!"])]:[daiquiri.interpreter.interpret(attrs116326),daiquiri.core.create_element("span",{'className':"ml-1"},[" An empty directory or an existing remote graph!"])]));
})()]);
}),null,"frontend.components.file-sync/pick-local-graph-for-sync");
frontend.components.file_sync.pick_dest_to_sync_panel = (function frontend$components$file_sync$pick_dest_to_sync_panel(graph){
return (function (){
return frontend.components.file_sync.pick_local_graph_for_sync(graph);
});
});
frontend.components.file_sync.page_history_list = rum.core.lazy_build(rum.core.build_defc,(function (graph_uuid,page_entity,set_list_ready_QMARK_,set_page){
var vec__116346 = rum.core.use_state(null);
var version_files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116346,(0),null);
var set_version_files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116346,(1),null);
var vec__116349 = rum.core.use_state(null);
var current_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116349,(0),null);
var set_current_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116349,(1),null);
var vec__116352 = rum.core.use_state(false);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116352,(0),null);
var set_loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116352,(1),null);
var set_page_fn = (function (page_meta){
(set_current_page.cljs$core$IFn$_invoke$arity$1 ? set_current_page.cljs$core$IFn$_invoke$arity$1(page_meta) : set_current_page.call(null,page_meta));

return (set_page.cljs$core$IFn$_invoke$arity$1 ? set_page.cljs$core$IFn$_invoke$arity$1(page_meta) : set_page.call(null,page_meta));
});
var get_version_key = (function (p1__116336_SHARP_){
var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(p1__116336_SHARP_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(p1__116336_SHARP_);
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(loading_QMARK_)){
} else {
var c__34483__auto___116534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_116377){
var state_val_116378 = (state_116377[(1)]);
if((state_val_116378 === (1))){
var inst_116355 = (set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_loading_QMARK_.call(null,true));
var state_116377__$1 = (function (){var statearr_116379 = state_116377;
(statearr_116379[(7)] = inst_116355);

return statearr_116379;
})();
var statearr_116380_116535 = state_116377__$1;
(statearr_116380_116535[(2)] = null);

(statearr_116380_116535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116378 === (2))){
var _ = (function (){var statearr_116381 = state_116377;
(statearr_116381[(4)] = cljs.core.cons((4),(state_116377[(4)])));

return statearr_116381;
})();
var ___$1 = (function (){var statearr_116382 = state_116377;
(statearr_116382[(4)] = cljs.core.cons((5),(state_116377[(4)])));

return statearr_116382;
})();
var inst_116366 = frontend.handler.file_sync._LT_fetch_page_file_versions(graph_uuid,page_entity);
var state_116377__$1 = state_116377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116377__$1,(6),inst_116366);
} else {
if((state_val_116378 === (3))){
var inst_116375 = (state_116377[(2)]);
var state_116377__$1 = state_116377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_116377__$1,inst_116375);
} else {
if((state_val_116378 === (4))){
var _ = (function (){var statearr_116384 = state_116377;
(statearr_116384[(4)] = cljs.core.rest((state_116377[(4)])));

return statearr_116384;
})();
var inst_116357 = (state_116377[(2)]);
var inst_116358 = (set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_QMARK_.call(null,false));
var ___$1 = (function (){var temp__5804__auto__ = (state_116377[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__33611__auto__ = temp__5804__auto__;
throw e__33611__auto__;
} else {
return null;
}
})();
var state_116377__$1 = (function (){var statearr_116385 = state_116377;
(statearr_116385[(8)] = inst_116358);

return statearr_116385;
})();
var statearr_116386_116536 = state_116377__$1;
(statearr_116386_116536[(2)] = inst_116357);

(statearr_116386_116536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116378 === (5))){
var _ = (function (){var statearr_116387 = state_116377;
(statearr_116387[(4)] = cljs.core.rest((state_116377[(4)])));

return statearr_116387;
})();
var state_116377__$1 = state_116377;
var ex116383 = (state_116377__$1[(2)]);
var statearr_116388_116537 = state_116377__$1;
(statearr_116388_116537[(5)] = ex116383);


throw ex116383;


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116378 === (6))){
var inst_116368 = (state_116377[(2)]);
var inst_116369 = (set_version_files.cljs$core$IFn$_invoke$arity$1 ? set_version_files.cljs$core$IFn$_invoke$arity$1(inst_116368) : set_version_files.call(null,inst_116368));
var inst_116370 = cljs.core.first(inst_116368);
var inst_116371 = set_page_fn(inst_116370);
var inst_116372 = (set_list_ready_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_list_ready_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_list_ready_QMARK_.call(null,true));
var _ = (function (){var statearr_116389 = state_116377;
(statearr_116389[(4)] = cljs.core.rest((state_116377[(4)])));

return statearr_116389;
})();
var state_116377__$1 = (function (){var statearr_116390 = state_116377;
(statearr_116390[(9)] = inst_116369);

(statearr_116390[(10)] = inst_116371);

return statearr_116390;
})();
var statearr_116391_116538 = state_116377__$1;
(statearr_116391_116538[(2)] = inst_116372);

(statearr_116391_116538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$components$file_sync$state_machine__34379__auto__ = null;
var frontend$components$file_sync$state_machine__34379__auto____0 = (function (){
var statearr_116392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_116392[(0)] = frontend$components$file_sync$state_machine__34379__auto__);

(statearr_116392[(1)] = (1));

return statearr_116392;
});
var frontend$components$file_sync$state_machine__34379__auto____1 = (function (state_116377){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_116377);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e116393){var ex__34382__auto__ = e116393;
var statearr_116394_116539 = state_116377;
(statearr_116394_116539[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_116377[(4)]))){
var statearr_116395_116540 = state_116377;
(statearr_116395_116540[(1)] = cljs.core.first((state_116377[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__116541 = state_116377;
state_116377 = G__116541;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$file_sync$state_machine__34379__auto__ = function(state_116377){
switch(arguments.length){
case 0:
return frontend$components$file_sync$state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$file_sync$state_machine__34379__auto____1.call(this,state_116377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$file_sync$state_machine__34379__auto____0;
frontend$components$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$file_sync$state_machine__34379__auto____1;
return frontend$components$file_sync$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_116396 = f__34484__auto__();
(statearr_116396[(6)] = c__34483__auto___116534);

return statearr_116396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

}

return (function (){
return cljs.core.List.EMPTY;
});
}),cljs.core.PersistentVector.EMPTY);

var attrs116345 = (cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),frontend.ui.loading.cljs$core$IFn$_invoke$arity$0()], null):(function (){var iter__5520__auto__ = (function frontend$components$file_sync$iter__116397(s__116398){
return (new cljs.core.LazySeq(null,(function (){
var s__116398__$1 = s__116398;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__116398__$1);
if(temp__5804__auto__){
var s__116398__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__116398__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__116398__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__116400 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__116399 = (0);
while(true){
if((i__116399 < size__5519__auto__)){
var version = cljs.core._nth(c__5518__auto__,i__116399);
cljs.core.chunk_append(b__116400,(function (){var version_uuid = get_version_key(version);
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.version-list-item","div.version-list-item",-454444581),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item-link.block.fade-link.flex.justify-between","a.item-link.block.fade-link.flex.justify-between",1384569968),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),version_uuid,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),(function (){var and__5041__auto__ = current_page;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(version_uuid,get_version_key(current_page));
} else {
return and__5041__auto__;
}
})()], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__116399,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__116400,s__116398__$2,temp__5804__auto__,vec__116346,version_files,set_version_files,vec__116349,current_page,set_current_page,vec__116352,loading_QMARK_,set_loading_QMARK_,set_page_fn,get_version_key){
return (function (){
return set_page_fn(version);
});})(i__116399,version_uuid,local_QMARK_,version,c__5518__auto__,size__5519__auto__,b__116400,s__116398__$2,temp__5804__auto__,vec__116346,version_files,set_version_files,vec__116349,current_page,set_current_page,vec__116352,loading_QMARK_,set_loading_QMARK_,set_page_fn,get_version_key))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.pt-1","div.text-sm.pt-1",632701368),frontend.ui.humanity_time_ago((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})(),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-50.translate-y-1.flex.items-center.space-x-1","small.opacity-50.translate-y-1.flex.items-center.space-x-1",799238304),((local_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.icon("git-commit"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"local"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.icon("cloud"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"remote"], null)], null))], null)], null)], null);
})());

var G__116542 = (i__116399 + (1));
i__116399 = G__116542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__116400),frontend$components$file_sync$iter__116397(cljs.core.chunk_rest(s__116398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__116400),null);
}
} else {
var version = cljs.core.first(s__116398__$2);
return cljs.core.cons((function (){var version_uuid = get_version_key(version);
var local_QMARK_ = (!((new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(version) == null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.version-list-item","div.version-list-item",-454444581),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version_uuid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item-link.block.fade-link.flex.justify-between","a.item-link.block.fade-link.flex.justify-between",1384569968),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),version_uuid,new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),(function (){var and__5041__auto__ = current_page;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(version_uuid,get_version_key(current_page));
} else {
return and__5041__auto__;
}
})()], null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (version_uuid,local_QMARK_,version,s__116398__$2,temp__5804__auto__,vec__116346,version_files,set_version_files,vec__116349,current_page,set_current_page,vec__116352,loading_QMARK_,set_loading_QMARK_,set_page_fn,get_version_key){
return (function (){
return set_page_fn(version);
});})(version_uuid,local_QMARK_,version,s__116398__$2,temp__5804__auto__,vec__116346,version_files,set_version_files,vec__116349,current_page,set_current_page,vec__116352,loading_QMARK_,set_loading_QMARK_,set_page_fn,get_version_key))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.pt-1","div.text-sm.pt-1",632701368),frontend.ui.humanity_time_ago((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"CreateTime","CreateTime",462769722).cljs$core$IFn$_invoke$arity$1(version);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"create-time","create-time",875410581).cljs$core$IFn$_invoke$arity$1(version);
}
})(),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-50.translate-y-1.flex.items-center.space-x-1","small.opacity-50.translate-y-1.flex.items-center.space-x-1",799238304),((local_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.icon("git-commit"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"local"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.icon("cloud"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"remote"], null)], null))], null)], null)], null);
})(),frontend$components$file_sync$iter__116397(cljs.core.rest(s__116398__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(version_files);
})());
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116345))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["version-list"], null)], null),attrs116345], 0))):{'className':"version-list"}),((cljs.core.map_QMARK_(attrs116345))?null:[daiquiri.interpreter.interpret(attrs116345)]));
}),null,"frontend.components.file-sync/page-history-list");
frontend.components.file_sync.pick_page_histories_for_sync = rum.core.lazy_build(rum.core.build_defc,(function (repo_url,graph_uuid,page_name,page_entity){
var vec__116404 = rum.core.use_state(null);
var selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116404,(0),null);
var set_selected_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116404,(1),null);
var get_version_key = (function (p1__116401_SHARP_){
var or__5043__auto__ = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(p1__116401_SHARP_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(p1__116401_SHARP_);
}
});
var file_uuid = new cljs.core.Keyword(null,"FileUUID","FileUUID",-1923309150).cljs$core$IFn$_invoke$arity$1(selected_page);
var version_uuid = new cljs.core.Keyword(null,"VersionUUID","VersionUUID",-2097775813).cljs$core$IFn$_invoke$arity$1(selected_page);
var vec__116407 = rum.core.use_state(null);
var version_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116407,(0),null);
var set_version_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116407,(1),null);
var vec__116410 = rum.core.use_state(false);
var list_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116410,(0),null);
var set_list_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116410,(1),null);
var vec__116413 = rum.core.use_state(false);
var content_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116413,(0),null);
var set_content_ready_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116413,(1),null);
var _STAR_ref_contents = rum.core.use_ref(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var original_page_name = (function (){var or__5043__auto__ = new cljs.core.Keyword("block","original-name","block/original-name",-1620099234).cljs$core$IFn$_invoke$arity$1(page_entity);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return page_name;
}
})();
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(selected_page)){
(set_content_ready_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_content_ready_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_content_ready_QMARK_.call(null,false));

var k = get_version_key(selected_page);
var loaded_contents = cljs.core.deref(rum.core.deref(_STAR_ref_contents));
if(cljs.core.contains_QMARK_(loaded_contents,k)){
var G__116416_116543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(loaded_contents,k);
(set_version_content.cljs$core$IFn$_invoke$arity$1 ? set_version_content.cljs$core$IFn$_invoke$arity$1(G__116416_116543) : set_version_content.call(null,G__116416_116543));

return setTimeout((function (){
return (set_content_ready_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_content_ready_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_content_ready_QMARK_.call(null,true));
}),(100));
} else {
var load_file = (function (repo_url__$1,file){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.util.fs.read_repo_file(repo_url__$1,file),(function (content){
(set_version_content.cljs$core$IFn$_invoke$arity$1 ? set_version_content.cljs$core$IFn$_invoke$arity$1(content) : set_version_content.call(null,content));

(set_content_ready_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_content_ready_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_content_ready_QMARK_.call(null,true));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rum.core.deref(_STAR_ref_contents),cljs.core.assoc,k,content);
}));
});
if(cljs.core.truth_((function (){var and__5041__auto__ = file_uuid;
if(cljs.core.truth_(and__5041__auto__)){
return version_uuid;
} else {
return and__5041__auto__;
}
})())){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_116426){
var state_val_116427 = (state_116426[(1)]);
if((state_val_116427 === (1))){
var inst_116417 = frontend.handler.file_sync.download_version_file.cljs$core$IFn$_invoke$arity$4(graph_uuid,file_uuid,version_uuid,true);
var state_116426__$1 = state_116426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_116426__$1,(2),inst_116417);
} else {
if((state_val_116427 === (2))){
var inst_116419 = (state_116426[(7)]);
var inst_116419__$1 = (state_116426[(2)]);
var state_116426__$1 = (function (){var statearr_116428 = state_116426;
(statearr_116428[(7)] = inst_116419__$1);

return statearr_116428;
})();
if(cljs.core.truth_(inst_116419__$1)){
var statearr_116429_116544 = state_116426__$1;
(statearr_116429_116544[(1)] = (3));

} else {
var statearr_116430_116545 = state_116426__$1;
(statearr_116430_116545[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116427 === (3))){
var inst_116419 = (state_116426[(7)]);
var inst_116421 = load_file(repo_url,inst_116419);
var state_116426__$1 = state_116426;
var statearr_116431_116546 = state_116426__$1;
(statearr_116431_116546[(2)] = inst_116421);

(statearr_116431_116546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116427 === (4))){
var state_116426__$1 = state_116426;
var statearr_116432_116547 = state_116426__$1;
(statearr_116432_116547[(2)] = null);

(statearr_116432_116547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_116427 === (5))){
var inst_116424 = (state_116426[(2)]);
var state_116426__$1 = state_116426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_116426__$1,inst_116424);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$components$file_sync$state_machine__34379__auto__ = null;
var frontend$components$file_sync$state_machine__34379__auto____0 = (function (){
var statearr_116433 = [null,null,null,null,null,null,null,null];
(statearr_116433[(0)] = frontend$components$file_sync$state_machine__34379__auto__);

(statearr_116433[(1)] = (1));

return statearr_116433;
});
var frontend$components$file_sync$state_machine__34379__auto____1 = (function (state_116426){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_116426);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e116434){var ex__34382__auto__ = e116434;
var statearr_116435_116548 = state_116426;
(statearr_116435_116548[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_116426[(4)]))){
var statearr_116436_116549 = state_116426;
(statearr_116436_116549[(1)] = cljs.core.first((state_116426[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__116550 = state_116426;
state_116426 = G__116550;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$components$file_sync$state_machine__34379__auto__ = function(state_116426){
switch(arguments.length){
case 0:
return frontend$components$file_sync$state_machine__34379__auto____0.call(this);
case 1:
return frontend$components$file_sync$state_machine__34379__auto____1.call(this,state_116426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$components$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$components$file_sync$state_machine__34379__auto____0;
frontend$components$file_sync$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$components$file_sync$state_machine__34379__auto____1;
return frontend$components$file_sync$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_116437 = f__34484__auto__();
(statearr_116437[(6)] = c__34483__auto__);

return statearr_116437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
} else {
var temp__5804__auto__ = new cljs.core.Keyword(null,"relative-path","relative-path",1848635172).cljs$core$IFn$_invoke$arity$1(selected_page);
if(cljs.core.truth_(temp__5804__auto__)){
var relative_path = temp__5804__auto__;
return load_file(repo_url,relative_path);
} else {
return null;
}
}
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_page], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
frontend.state.update_state_BANG_(new cljs.core.Keyword("editor","hidden-editors","editor/hidden-editors",254075860),(function (p1__116402_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__116402_SHARP_,page_name);
}));

return (function (){
return frontend.state.update_state_BANG_(new cljs.core.Keyword("editor","hidden-editors","editor/hidden-editors",254075860),(function (p1__116403_SHARP_){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__116403_SHARP_,page_name);
}));
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_name], null));

return daiquiri.core.create_element("div",{'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__file-sync-page-histories","flex-wrap",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-list-ready","is-list-ready",219673575),list_ready_QMARK_], null)], null))], null))},[(function (){var attrs116438 = frontend.ui.icon("history");
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs116438))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["absolute","top-0","left-0","text-xl","px-4","py-4","leading-4"], null)], null),attrs116438], 0))):{'className':"absolute top-0 left-0 text-xl px-4 py-4 leading-4"}),((cljs.core.map_QMARK_(attrs116438))?[" History for page ",(function (){var attrs116439 = original_page_name;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116439))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-medium"], null)], null),attrs116439], 0))):{'className':"font-medium"}),((cljs.core.map_QMARK_(attrs116439))?null:[daiquiri.interpreter.interpret(attrs116439)]));
})()]:[daiquiri.interpreter.interpret(attrs116438)," History for page ",(function (){var attrs116440 = original_page_name;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116440))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-medium"], null)], null),attrs116440], 0))):{'className':"font-medium"}),((cljs.core.map_QMARK_(attrs116440))?null:[daiquiri.interpreter.interpret(attrs116440)]));
})()]));
})(),daiquiri.core.create_element("div",{'className':"cp__file-sync-page-histories-left flex-wrap"},[frontend.components.file_sync.page_history_list(graph_uuid,page_entity,set_list_ready_QMARK_,set_selected_page),(function (){var attrs116442 = (function (){var temp__5804__auto__ = (function (){var and__5041__auto__ = selected_page;
if(cljs.core.truth_(and__5041__auto__)){
return get_version_key(selected_page);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var inst_id = temp__5804__auto__;
if(cljs.core.truth_(content_ready_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.raw-content-editor","div.relative.raw-content-editor",1936421322),frontend.components.lazy_editor.editor(null,inst_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lang","data-lang",969460304),"markdown"], null),version_content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),true,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.top-1.right-1.opacity-50.hover:opacity-100","div.absolute.top-1.right-1.opacity-50.hover:opacity-100",2040158965),frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Restore",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync-graph","restore-file","file-sync-graph/restore-file",691096310),frontend.state.get_current_repo(),page_entity,version_content], null));
})], 0))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.p-15.items-center.justify-center","span.flex.p-15.items-center.justify-center",-1593905937),frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("")], null);
}
} else {
return null;
}
})();
return daiquiri.core.create_element("article",((cljs.core.map_QMARK_(attrs116442))?daiquiri.interpreter.element_attributes(attrs116442):null),((cljs.core.map_QMARK_(attrs116442))?null:[daiquiri.interpreter.interpret(attrs116442)]));
})()]),daiquiri.core.create_element("div",{'className':"cp__file-sync-page-histories-right"},[daiquiri.core.create_element("h1",{'className':"title text-xl"},["Current version"]),frontend.components.page.page_blocks_cp(frontend.state.get_current_repo(),page_entity,null)]),(function (){var attrs116441 = frontend.ui.loading.cljs$core$IFn$_invoke$arity$0();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116441))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","h-full","justify-center","w-full","absolute","ready-loading"], null)], null),attrs116441], 0))):{'className':"flex items-center h-full justify-center w-full absolute ready-loading"}),((cljs.core.map_QMARK_(attrs116441))?null:[daiquiri.interpreter.interpret(attrs116441)]));
})()]);
}),null,"frontend.components.file-sync/pick-page-histories-for-sync");
frontend.components.file_sync.pick_page_histories_panel = (function frontend$components$file_sync$pick_page_histories_panel(graph_uuid,page_name){
return (function (){
var temp__5802__auto__ = frontend.db.model.get_page(page_name);
if(cljs.core.truth_(temp__5802__auto__)){
var page_entity = temp__5802__auto__;
return frontend.components.file_sync.pick_page_histories_for_sync(frontend.state.get_current_repo(),graph_uuid,page_name,page_entity);
} else {
return frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),["The page (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name),") does not exist!"].join(''));
}
});
});
frontend.components.file_sync.onboarding_welcome_logseq_sync = rum.core.lazy_build(rum.core.build_defc,(function (close_fn){
var vec__116445 = rum.core.use_state(false);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116445,(0),null);
var set_loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__116445,(1),null);
return daiquiri.core.create_element("div",{'className':"cp__file-sync-welcome-logseq-sync"},[daiquiri.core.create_element("span",{'className':"head-bg"},[daiquiri.core.create_element("strong",null,["CLOSED BETA"])]),daiquiri.core.create_element("h1",{'className':"text-2xl font-bold flex-col sm:flex-row"},[daiquiri.core.create_element("span",{'className':"opacity-80"},["Welcome to "]),daiquiri.core.create_element("span",{'className':"pl-2 dark:text-white text-gray-800"},["Logseq Sync! \uD83D\uDC4B"])]),daiquiri.core.create_element("h2",null,["No more cloud storage worries. With Logseq's encrypted file syncing, ",daiquiri.core.create_element("br",null,null),"you'll always have your notes backed up and available in real-time on any device."]),(function (){var attrs116454 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Later",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn,new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-60"], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116454))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-6","flex","justify-center","space-x-2","sm:justify-end"], null)], null),attrs116454], 0))):{'className':"pt-6 flex justify-center space-x-2 sm:justify-end"}),((cljs.core.map_QMARK_(attrs116454))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Start syncing",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_loading_QMARK_.call(null,true));

var result = new cljs.core.Keyword("user","info","user/info",-345834271).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var ex_time = new cljs.core.Keyword(null,"ExpireTime","ExpireTime",-1718142784).cljs$core$IFn$_invoke$arity$1(result);
if(((typeof ex_time === 'number') && (((ex_time * (1000)) < Date.now())))){
cljs.core.vreset_BANG_(frontend.handler.file_sync._STAR_beta_unavailable_QMARK_,true);

(frontend.components.file_sync.maybe_onboarding_show.cljs$core$IFn$_invoke$arity$1 ? frontend.components.file_sync.maybe_onboarding_show.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unavailable","unavailable",1529915531)) : frontend.components.file_sync.maybe_onboarding_show.call(null,new cljs.core.Keyword(null,"unavailable","unavailable",1529915531)));
} else {
(frontend.components.file_sync.maybe_onboarding_show.cljs$core$IFn$_invoke$arity$1 ? frontend.components.file_sync.maybe_onboarding_show.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sync-initiate","sync-initiate",1636471756)) : frontend.components.file_sync.maybe_onboarding_show.call(null,new cljs.core.Keyword(null,"sync-initiate","sync-initiate",1636471756)));
}

(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

return (set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_QMARK_.call(null,false));
})], 0)))]:[daiquiri.interpreter.interpret(attrs116454),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Start syncing",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),loading_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_loading_QMARK_.call(null,true));

var result = new cljs.core.Keyword("user","info","user/info",-345834271).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var ex_time = new cljs.core.Keyword(null,"ExpireTime","ExpireTime",-1718142784).cljs$core$IFn$_invoke$arity$1(result);
if(((typeof ex_time === 'number') && (((ex_time * (1000)) < Date.now())))){
cljs.core.vreset_BANG_(frontend.handler.file_sync._STAR_beta_unavailable_QMARK_,true);

(frontend.components.file_sync.maybe_onboarding_show.cljs$core$IFn$_invoke$arity$1 ? frontend.components.file_sync.maybe_onboarding_show.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unavailable","unavailable",1529915531)) : frontend.components.file_sync.maybe_onboarding_show.call(null,new cljs.core.Keyword(null,"unavailable","unavailable",1529915531)));
} else {
(frontend.components.file_sync.maybe_onboarding_show.cljs$core$IFn$_invoke$arity$1 ? frontend.components.file_sync.maybe_onboarding_show.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sync-initiate","sync-initiate",1636471756)) : frontend.components.file_sync.maybe_onboarding_show.call(null,new cljs.core.Keyword(null,"sync-initiate","sync-initiate",1636471756)));
}

(close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));

return (set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_loading_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_loading_QMARK_.call(null,false));
})], 0)))]));
})()]);
}),null,"frontend.components.file-sync/onboarding-welcome-logseq-sync");
frontend.components.file_sync.onboarding_unavailable_file_sync = rum.core.lazy_build(rum.core.build_defc,(function (close_fn){
return daiquiri.core.create_element("div",{'className':"cp__file-sync-unavailable-logseq-sync"},[daiquiri.core.create_element("span",{'className':"head-bg"},null),daiquiri.core.create_element("h1",{'className':"text-2xl font-bold"},[daiquiri.core.create_element("span",{'className':"pr-2 dark:text-white text-gray-800"},["Logseq Sync"]),daiquiri.core.create_element("span",{'className':"opacity-80"},["is not yet available for you. \uD83D\uDE14 "])]),daiquiri.core.create_element("h2",null,["Thanks for creating an account! To ensure that our file syncing service runs well when we release it",daiquiri.core.create_element("br",null,null),"to our users, we need a little more time to test it. That\u2019s why we decided to first roll it out only to our ",daiquiri.core.create_element("br",null,null),"charitable OpenCollective sponsors and backers. We can notify you once it becomes available for you."]),(function (){var attrs116461 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Close",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn,new cljs.core.Keyword(null,"background","background",-863952629),"gray",new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-60"], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116461))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-6","flex","justify-end","space-x-2"], null)], null),attrs116461], 0))):{'className':"pt-6 flex justify-end space-x-2"}),((cljs.core.map_QMARK_(attrs116461))?null:[daiquiri.interpreter.interpret(attrs116461)]));
})()]);
}),null,"frontend.components.file-sync/onboarding-unavailable-file-sync");
frontend.components.file_sync.onboarding_congrats_successful_sync = rum.core.lazy_build(rum.core.build_defc,(function (close_fn){
return daiquiri.core.create_element("div",{'className':"cp__file-sync-related-normal-modal"},[daiquiri.core.create_element("div",{'className':"flex justify-center pb-4"},[(function (){var attrs116467 = frontend.ui.icon("checkup-list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(28)], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116467))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["icon-wrap"], null)], null),attrs116467], 0))):{'className':"icon-wrap"}),((cljs.core.map_QMARK_(attrs116467))?null:[daiquiri.interpreter.interpret(attrs116467)]));
})()]),daiquiri.core.create_element("h1",{'className':"text-xl font-semibold opacity-90 text-center py-2"},[daiquiri.core.create_element("span",{'className':"dark:opacity-80"},["Congrats on your first successful sync!"])]),daiquiri.core.create_element("h2",{'className':"text-center dark:opacity-70 text-sm opacity-90"},[daiquiri.core.create_element("div",null,["By using this graph with Logseq Sync you can now transition seamlessly between your different "]),daiquiri.core.create_element("div",null,[daiquiri.core.create_element("span",null,["devices. Go to the "]),daiquiri.core.create_element("span",{'className':"dark:text-white"},["All Graphs "]),daiquiri.core.create_element("span",null,["pages to manage your remote graph or switch to another local graph "])]),daiquiri.core.create_element("div",null,["and sync it as well."])]),daiquiri.core.create_element("div",{'className':"cloud-tip rounded-md mt-6 py-4"},[daiquiri.core.create_element("div",{'className':"items-center opacity-90 flex justify-center"},[(function (){var attrs116468 = frontend.ui.icon("bell-ringing",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold"], null));
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs116468))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pr-2","flex"], null)], null),attrs116468], 0))):{'className':"pr-2 flex"}),((cljs.core.map_QMARK_(attrs116468))?null:[daiquiri.interpreter.interpret(attrs116468)]));
})(),daiquiri.core.create_element("strong",null,["Logseq Sync is still in Beta and we're working on a Pro plan!"])])]),(function (){var attrs116466 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Done",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], 0));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs116466))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pt-6","flex","justify-end","space-x-2"], null)], null),attrs116466], 0))):{'className':"pt-6 flex justify-end space-x-2"}),((cljs.core.map_QMARK_(attrs116466))?null:[daiquiri.interpreter.interpret(attrs116466)]));
})()]);
}),null,"frontend.components.file-sync/onboarding-congrats-successful-sync");
frontend.components.file_sync.open_icloud_graph_clone_picker = (function frontend$components$file_sync$open_icloud_graph_clone_picker(var_args){
var G__116472 = arguments.length;
switch (G__116472) {
case 0:
return frontend.components.file_sync.open_icloud_graph_clone_picker.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.components.file_sync.open_icloud_graph_clone_picker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.components.file_sync.open_icloud_graph_clone_picker.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.components.file_sync.open_icloud_graph_clone_picker.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.components.file_sync.open_icloud_graph_clone_picker.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.mobile.util.in_iCloud_container_path_QMARK_(repo);
} else {
return and__5041__auto__;
}
})())){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (close_fn){
return frontend.components.file_sync.clone_local_icloud_graph_panel(repo,(frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(repo) : frontend.util.node_path.basename.call(null,repo)),close_fn);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"close-btn?","close-btn?",336318726),false,new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
} else {
return null;
}
}));

(frontend.components.file_sync.open_icloud_graph_clone_picker.cljs$lang$maxFixedArity = 1);

frontend.components.file_sync.make_onboarding_panel = (function frontend$components$file_sync$make_onboarding_panel(type){
return (function (close_fn){
var G__116473 = type;
var G__116473__$1 = (((G__116473 instanceof cljs.core.Keyword))?G__116473.fqn:null);
switch (G__116473__$1) {
case "welcome":
return frontend.components.file_sync.onboarding_welcome_logseq_sync(close_fn);

break;
case "unavailable":
return frontend.components.file_sync.onboarding_unavailable_file_sync(close_fn);

break;
case "congrats":
return frontend.components.file_sync.onboarding_congrats_successful_sync(close_fn);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xl.font-bold","h1.text-xl.font-bold",-807773808),"Not handled!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),"Got it!"], null)], null);

}
});
});
frontend.components.file_sync.maybe_onboarding_show = (function frontend$components$file_sync$maybe_onboarding_show(type){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.sub(new cljs.core.Keyword("file-sync","onboarding-state","file-sync/onboarding-state",-864081833)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)))){
return null;
} else {
try{var current_repo = frontend.state.get_current_repo();
var local_repo_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_repo,frontend.config.local_repo);
var login_QMARK_ = cljs.core.boolean$(frontend.state.sub(new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946)));
if(login_QMARK_){
var G__116475_116553 = type;
var G__116475_116554__$1 = (((G__116475_116553 instanceof cljs.core.Keyword))?G__116475_116553.fqn:null);
switch (G__116475_116554__$1) {
case "welcome":
if(cljs.core.truth_((function (){var or__5043__auto__ = local_repo_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531).cljs$core$IFn$_invoke$arity$1(frontend.handler.repo.get_detail_graph_info(current_repo));
}
})())){
throw (new Error("current repo have been local or remote graph"));
} else {
}

break;
case "sync-initiate":
case "sync-learn":
case "sync-history":
frontend.components.onboarding.quick_tour.ready((function (){
frontend.components.onboarding.quick_tour.start_file_sync(type);

return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","onboarding-state","file-sync/onboarding-state",-864081833),type], null),true);
}));

throw (new Error(null));

break;
default:

}

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","onboarding-tip","file-sync/onboarding-tip",-1267073709),type], null));

return frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file-sync","onboarding-state","file-sync/onboarding-state",-864081833),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)], null),true);
} else {
return null;
}
}catch (e116474){var e = e116474;
return console.warn("[onboarding SKIP] ",cljs.core.name(type),e);
}}
});

//# sourceMappingURL=frontend.components.file_sync.js.map
