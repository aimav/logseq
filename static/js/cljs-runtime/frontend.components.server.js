goog.provide('frontend.components.server');
frontend.components.server.panel_of_tokens = rum.core.lazy_build(rum.core.build_defcs,(function (_state,close_panel){
var server_state = frontend.state.sub(new cljs.core.Keyword("electron","server","electron/server",1484164422));
var _STAR_tokens = new cljs.core.Keyword("frontend.components.server","tokens","frontend.components.server/tokens",1256431253).cljs$core$IFn$_invoke$arity$1(_state);
var changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_tokens),new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(server_state));
return daiquiri.core.create_element("div",{'className':"cp__server-tokens-panel -mx-2"},[daiquiri.core.create_element("h2",{'className':"text-3xl -translate-y-4"},["Authorization tokens"]),(function (){var update_value_BANG_ = (function (idx,k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_tokens,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,k], null),v);
});
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$server$iter__118276(s__118277){
return (new cljs.core.LazySeq(null,(function (){
var s__118277__$1 = s__118277;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__118277__$1);
if(temp__5804__auto__){
var s__118277__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__118277__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__118277__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__118279 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__118278 = (0);
while(true){
if((i__118278 < size__5519__auto__)){
var vec__118280 = cljs.core._nth(c__5518__auto__,i__118278);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118280,(0),null);
var map__118283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118280,(1),null);
var map__118283__$1 = cljs.core.__destructure_map(map__118283);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118283__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118283__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__118279,daiquiri.core.create_element("div",{'key':idx,'className':"item py-2 flex space-x-2 items-center"},[daiquiri.core.create_element("input",{'autoFocus':true,'placeholder':"name",'value':name,'onChange':rum.core.mark_sync_update(((function (i__118278,vec__118280,idx,map__118283,map__118283__$1,value,name,c__5518__auto__,size__5519__auto__,b__118279,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_){
return (function (p1__118270_SHARP_){
var value__$1 = p1__118270_SHARP_.target.value;
return update_value_BANG_(idx,new cljs.core.Keyword(null,"name","name",1843675177),value__$1);
});})(i__118278,vec__118280,idx,map__118283,map__118283__$1,value,name,c__5518__auto__,size__5519__auto__,b__118279,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_))
),'className':"form-input basis-36"},[]),daiquiri.core.create_element("input",{'placeholder':"value",'value':value,'onChange':rum.core.mark_sync_update(((function (i__118278,vec__118280,idx,map__118283,map__118283__$1,value,name,c__5518__auto__,size__5519__auto__,b__118279,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_){
return (function (p1__118271_SHARP_){
var value__$1 = p1__118271_SHARP_.target.value;
return update_value_BANG_(idx,new cljs.core.Keyword(null,"value","value",305978217),value__$1);
});})(i__118278,vec__118280,idx,map__118283,map__118283__$1,value,name,c__5518__auto__,size__5519__auto__,b__118279,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_))
),'className':"form-input"},[]),daiquiri.core.create_element("button",{'onClick':((function (i__118278,vec__118280,idx,map__118283,map__118283__$1,value,name,c__5518__auto__,size__5519__auto__,b__118279,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_){
return (function (){
return cljs.core.reset_BANG_(_STAR_tokens,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(_STAR_tokens))));
});})(i__118278,vec__118280,idx,map__118283,map__118283__$1,value,name,c__5518__auto__,size__5519__auto__,b__118279,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_))
,'className':"px-2 opacity-50 hover:opacity-90 active:opacity-100"},[(function (){var attrs118284 = frontend.ui.icon("trash-x");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs118284))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs118284], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs118284))?null:[daiquiri.interpreter.interpret(attrs118284)]));
})()])]));

var G__118331 = (i__118278 + (1));
i__118278 = G__118331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__118279),frontend$components$server$iter__118276(cljs.core.chunk_rest(s__118277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__118279),null);
}
} else {
var vec__118285 = cljs.core.first(s__118277__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118285,(0),null);
var map__118288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118285,(1),null);
var map__118288__$1 = cljs.core.__destructure_map(map__118288);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118288__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(daiquiri.core.create_element("div",{'key':idx,'className':"item py-2 flex space-x-2 items-center"},[daiquiri.core.create_element("input",{'autoFocus':true,'placeholder':"name",'value':name,'onChange':rum.core.mark_sync_update(((function (vec__118285,idx,map__118288,map__118288__$1,value,name,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_){
return (function (p1__118270_SHARP_){
var value__$1 = p1__118270_SHARP_.target.value;
return update_value_BANG_(idx,new cljs.core.Keyword(null,"name","name",1843675177),value__$1);
});})(vec__118285,idx,map__118288,map__118288__$1,value,name,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_))
),'className':"form-input basis-36"},[]),daiquiri.core.create_element("input",{'placeholder':"value",'value':value,'onChange':rum.core.mark_sync_update(((function (vec__118285,idx,map__118288,map__118288__$1,value,name,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_){
return (function (p1__118271_SHARP_){
var value__$1 = p1__118271_SHARP_.target.value;
return update_value_BANG_(idx,new cljs.core.Keyword(null,"value","value",305978217),value__$1);
});})(vec__118285,idx,map__118288,map__118288__$1,value,name,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_))
),'className':"form-input"},[]),daiquiri.core.create_element("button",{'onClick':((function (vec__118285,idx,map__118288,map__118288__$1,value,name,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_){
return (function (){
return cljs.core.reset_BANG_(_STAR_tokens,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(_STAR_tokens))));
});})(vec__118285,idx,map__118288,map__118288__$1,value,name,s__118277__$2,temp__5804__auto__,update_value_BANG_,server_state,_STAR_tokens,changed_QMARK_))
,'className':"px-2 opacity-50 hover:opacity-90 active:opacity-100"},[(function (){var attrs118284 = frontend.ui.icon("trash-x");
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs118284))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center"], null)], null),attrs118284], 0))):{'className':"flex items-center"}),((cljs.core.map_QMARK_(attrs118284))?null:[daiquiri.interpreter.interpret(attrs118284)]));
})()])]),frontend$components$server$iter__118276(cljs.core.rest(s__118277__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_tokens)));
})());
})(),(function (){var attrs118275 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("+ Add new token",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_tokens,cljs.core.conj,cljs.core.PersistentArrayMap.EMPTY);
}),new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq"], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs118275))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-end","pt-6","space-x-3"], null)], null),attrs118275], 0))):{'className':"flex justify-end pt-6 space-x-3"}),((cljs.core.map_QMARK_(attrs118275))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Save",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","set-config","server/set-config",1464784658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.deref(_STAR_tokens)], null)], 0)),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Update tokens successfully!",new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (p1__118272_SHARP_){
return console.error(p1__118272_SHARP_);
})),(function (){
return (close_panel.cljs$core$IFn$_invoke$arity$0 ? close_panel.cljs$core$IFn$_invoke$arity$0() : close_panel.call(null));
}));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(changed_QMARK_))], 0)))]:[daiquiri.interpreter.interpret(attrs118275),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Save",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","set-config","server/set-config",1464784658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.deref(_STAR_tokens)], null)], 0)),(function (){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Update tokens successfully!",new cljs.core.Keyword(null,"success","success",1890645906));
})),(function (p1__118272_SHARP_){
return console.error(p1__118272_SHARP_);
})),(function (){
return (close_panel.cljs$core$IFn$_invoke$arity$0 ? close_panel.cljs$core$IFn$_invoke$arity$0() : close_panel.call(null));
}));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(changed_QMARK_))], 0)))]));
})()]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.server","tokens","frontend.components.server/tokens",1256431253)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (s){
var _STAR_tokens = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frontend.components.server","tokens","frontend.components.server/tokens",1256431253)) : s.call(null,new cljs.core.Keyword("frontend.components.server","tokens","frontend.components.server/tokens",1256431253)));
cljs.core.reset_BANG_(_STAR_tokens,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","server","electron/server",1484164422),new cljs.core.Keyword(null,"tokens","tokens",-818939304)], null)));

return s;
})], null)], null),"frontend.components.server/panel-of-tokens");
frontend.components.server.panel_of_configs = rum.core.lazy_build(rum.core.build_defcs,(function (_state,close_panel){
var server_state = frontend.state.sub(new cljs.core.Keyword("electron","server","electron/server",1484164422));
var _STAR_configs = new cljs.core.Keyword("frontend.components.server","configs","frontend.components.server/configs",-195082786).cljs$core$IFn$_invoke$arity$1(_state);
var map__118294 = cljs.core.deref(_STAR_configs);
var map__118294__$1 = cljs.core.__destructure_map(map__118294);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118294__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118294__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var autostart = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118294__$1,new cljs.core.Keyword(null,"autostart","autostart",-2028194117));
var hp_changed_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(host,new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(server_state))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.safe_parse_int((function (){var or__5043__auto____$1 = port;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return (0);
}
})()),frontend.util.safe_parse_int((function (){var or__5043__auto____$1 = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(server_state);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return (0);
}
})()))));
var changed_QMARK_ = (function (){var or__5043__auto__ = hp_changed_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__118289_SHARP_){
var G__118295 = p1__118289_SHARP_;
if((p1__118289_SHARP_ == null)){
return cljs.core.not(G__118295);
} else {
return G__118295;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [autostart,new cljs.core.Keyword(null,"autostart","autostart",-2028194117).cljs$core$IFn$_invoke$arity$1(server_state)], null)));
}
})();
return daiquiri.core.create_element("div",{'className':"cp__server-configs-panel -mx-2"},[daiquiri.core.create_element("h2",{'className':"text-3xl -translate-y-4"},["Server configurations"]),daiquiri.core.create_element("div",{'className':"item flex items-center space-x-3"},[daiquiri.core.create_element("label",{'className':"basis-96"},[daiquiri.core.create_element("strong",null,["Host"]),daiquiri.core.create_element("input",{'value':host,'onChange':rum.core.mark_sync_update((function (p1__118290_SHARP_){
var value = p1__118290_SHARP_.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_configs,cljs.core.assoc,new cljs.core.Keyword(null,"host","host",-1558485167),value);
})),'className':"form-input"},[])]),daiquiri.core.create_element("label",null,[daiquiri.core.create_element("strong",null,["Port (1 ~ 65535)"]),daiquiri.core.create_element("input",{'autoFocus':true,'value':port,'min':"1",'max':"65535",'type':"number",'onChange':rum.core.mark_sync_update((function (p1__118291_SHARP_){
var value = p1__118291_SHARP_.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_configs,cljs.core.assoc,new cljs.core.Keyword(null,"port","port",1534937262),value);
})),'className':"form-input"},[])])]),daiquiri.core.create_element("p",{'className':"py-3 px-1"},[daiquiri.core.create_element("label",{'className':"flex space-x-2 items-center"},[daiquiri.core.create_element("input",{'type':"checkbox",'onChange':rum.core.mark_sync_update((function (p1__118292_SHARP_){
var checked = p1__118292_SHARP_.target.checked;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_configs,cljs.core.assoc,new cljs.core.Keyword(null,"autostart","autostart",-2028194117),checked);
})),'checked':(!(autostart === false)),'className':"form-checkbox"},[]),daiquiri.core.create_element("strong",{'className':"select-none"},["Auto start server with the app launched"])])]),(function (){var attrs118298 = frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Reset",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"intent","intent",-390846953),"logseq",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(_STAR_configs,cljs.core.select_keys(server_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"autostart","autostart",-2028194117)], null)));
})], 0));
return daiquiri.core.create_element("p",((cljs.core.map_QMARK_(attrs118298))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","justify-end","pt-6","space-x-3"], null)], null),attrs118298], 0))):{'className':"flex justify-end pt-6 space-x-3"}),((cljs.core.map_QMARK_(attrs118298))?[daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Save & Apply",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(changed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var configs = cljs.core.select_keys(cljs.core.deref(_STAR_configs),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"autostart","autostart",-2028194117)], null));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","set-config","server/set-config",1464784658),configs], 0)),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((close_panel.cljs$core$IFn$_invoke$arity$0 ? close_panel.cljs$core$IFn$_invoke$arity$0() : close_panel.call(null)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000)),(function (___$1){
return promesa.protocols._promise(((hp_changed_QMARK_)?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"restart","restart",-1779883612)], 0)):null));
}));
}));
}));
})),(function (p1__118293_SHARP_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__118293_SHARP_),new cljs.core.Keyword(null,"error","error",-978969032));
}));
})], 0)))]:[daiquiri.interpreter.interpret(attrs118298),daiquiri.interpreter.interpret(frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic("Save & Apply",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(changed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var configs = cljs.core.select_keys(cljs.core.deref(_STAR_configs),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"autostart","autostart",-2028194117)], null));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","set-config","server/set-config",1464784658),configs], 0)),(function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((close_panel.cljs$core$IFn$_invoke$arity$0 ? close_panel.cljs$core$IFn$_invoke$arity$0() : close_panel.call(null)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000)),(function (___$1){
return promesa.protocols._promise(((hp_changed_QMARK_)?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"restart","restart",-1779883612)], 0)):null));
}));
}));
}));
})),(function (p1__118293_SHARP_){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__118293_SHARP_),new cljs.core.Keyword(null,"error","error",-978969032));
}));
})], 0)))]));
})()]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.components.server","configs","frontend.components.server/configs",-195082786)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (s){
var _STAR_configs = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("frontend.components.server","configs","frontend.components.server/configs",-195082786)) : s.call(null,new cljs.core.Keyword("frontend.components.server","configs","frontend.components.server/configs",-195082786)));
cljs.core.reset_BANG_(_STAR_configs,new cljs.core.Keyword("electron","server","electron/server",1484164422).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state)));

return s;
})], null)], null),"frontend.components.server/panel-of-configs");
frontend.components.server.server_indicator = rum.core.lazy_build(rum.core.build_defc,(function (server_state){
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((1000)),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","load-state","server/load-state",135727163)], 0)),(function (___$1){
return promesa.protocols._promise((function (){var t = setTimeout((function (){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","server","electron/server",1484164422),new cljs.core.Keyword(null,"autostart","autostart",-2028194117)], null)))){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"restart","restart",-1779883612)], 0));
} else {
return null;
}
}),(1000));
return (function (){
return clearTimeout(t);
});
})());
}));
}));
}));
}),cljs.core.PersistentVector.EMPTY);

var map__118311 = server_state;
var map__118311__$1 = cljs.core.__destructure_map(map__118311);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118311__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118311__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(status));
var running_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"running","running",1554969103),status__$1);
var href = (function (){var and__5041__auto__ = running_QMARK_;
if(and__5041__auto__){
return ["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(server_state)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(server_state))].join('');
} else {
return and__5041__auto__;
}
})();
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(error)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(["[Server] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join(''),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error], null));

return daiquiri.core.create_element("div",{'className':"cp__server-indicator"},[frontend.ui.dropdown_with_links((function (p__118318){
var map__118319 = p__118318;
var map__118319__$1 = cljs.core.__destructure_map(map__118319);
var toggle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118319__$1,new cljs.core.Keyword(null,"toggle-fn","toggle-fn",-1172657425));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.icon","button.button.icon",117367436),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));
})], null),frontend.ui.icon(((running_QMARK_)?"api":"api-off"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(22)], null))], null);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hr","hr",1377740067),true], null),((running_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Stop server",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"stop","stop",-2140911342)], 0));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-red-500.flex.items-center","span.text-red-500.flex.items-center",-491946714),frontend.ui.icon("player-stop")], null)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Start server",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("server","do","server/do",1556149508),new cljs.core.Keyword(null,"restart","restart",-1779883612)], 0));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-green-500.flex.items-center","span.text-green-500.flex.items-center",-945500541),frontend.ui.icon("player-play")], null)], null)
),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Authorization tokens",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (close){
return frontend.components.server.panel_of_tokens(close);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("key")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Server configurations",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.state.set_modal_BANG_.cljs$core$IFn$_invoke$arity$2((function (close){
return frontend.components.server.panel_of_configs(close);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"center?","center?",-323116631),true], null));
})], null),new cljs.core.Keyword(null,"icon","icon",1679606541),frontend.ui.icon("server-cog")], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"links-header","links-header",-1729119536),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.links-header.flex.justify-center.py-2","div.links-header.flex.justify-center.py-2",62632997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ml-1.text-sm","span.ml-1.text-sm",-564388341),(((!(running_QMARK_)))?clojure.string.upper_case((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(server_state);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "stopped";
}
})()):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hover:underline","a.hover:underline",-1510791830),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),href], null))], null)], null)], null))]);
}),null,"frontend.components.server/server-indicator");

//# sourceMappingURL=frontend.components.server.js.map
