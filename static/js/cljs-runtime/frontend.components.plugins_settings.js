goog.provide('frontend.components.plugins_settings');
frontend.components.plugins_settings.dom_purify = (function frontend$components$plugins_settings$dom_purify(html,opts){
try{return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(DOMPurify,"sanitize",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html,cljs_bean.core.__GT_js(opts)], 0));
}catch (e110413){if((e110413 instanceof Error)){
var e = e110413;
console.warn(e);

return html;
} else {
throw e110413;

}
}});
frontend.components.plugins_settings.html_content = rum.core.lazy_build(rum.core.build_defc,(function (html){
return daiquiri.core.create_element("div",{'dangerouslySetInnerHTML':{'__html':frontend.components.plugins_settings.dom_purify(html,null)},'className':"html-content pl-1 flex-1 text-sm"},[]);
}),null,"frontend.components.plugins-settings/html-content");
frontend.components.plugins_settings.edit_settings_file = rum.core.lazy_build(rum.core.build_defc,(function (pid,p__110414){
var map__110415 = p__110414;
var map__110415__$1 = cljs.core.__destructure_map(map__110415);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110415__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return daiquiri.core.create_element("a",{'onClick':(function (){
return frontend.handler.plugin.open_settings_file_in_default_app_BANG_(pid);
}),'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-sm","hover:underline",class$], null))},["Edit settings.json"]);
}),null,"frontend.components.plugins-settings/edit-settings-file");
frontend.components.plugins_settings.render_item_input = rum.core.lazy_build(rum.core.build_defc,(function (val,p__110418,update_setting_BANG_){
var map__110419 = p__110418;
var map__110419__$1 = cljs.core.__destructure_map(map__110419);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110419__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110419__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110419__$1,new cljs.core.Keyword(null,"title","title",636505583));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110419__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110419__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var inputAs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110419__$1,new cljs.core.Keyword(null,"inputAs","inputAs",1243305598));
return daiquiri.core.create_element("div",{'data-key':key,'key':key,'className':"desc-item as-input"},[daiquiri.core.create_element("h2",null,[(function (){var attrs110420 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs110420))?daiquiri.interpreter.element_attributes(attrs110420):null),((cljs.core.map_QMARK_(attrs110420))?null:[daiquiri.interpreter.interpret(attrs110420)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon("caret-right")),(function (){var attrs110421 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110421))?daiquiri.interpreter.element_attributes(attrs110421):null),((cljs.core.map_QMARK_(attrs110421))?null:[daiquiri.interpreter.interpret(attrs110421)]));
})()]),daiquiri.core.create_element("label",{'className':"form-control"},[frontend.components.plugins_settings.html_content(description),(function (){var input_as = frontend.util.safe_lower_case((function (){var or__5043__auto__ = inputAs;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.name(type);
}
})());
var input_as__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_as,"string"))?new cljs.core.Keyword(null,"text","text",-1790561697):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(input_as));
return daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_as__$1,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?new cljs.core.Keyword(null,"textarea","textarea",-650375824):new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-input","form-input",-226883230),(!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),input_as__$1)))], null)], null)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.name(input_as__$1),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),(function (){var or__5043__auto__ = val;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
})(),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__110416_SHARP_){
return p1__110416_SHARP_.stopPropagation();
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),goog.functions.debounce((function (p1__110417_SHARP_){
var G__110422 = key;
var G__110423 = frontend.util.evalue(p1__110417_SHARP_);
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__110422,G__110423) : update_setting_BANG_.call(null,G__110422,G__110423));
}),(1000))], null)], null));
})()])]);
}),null,"frontend.components.plugins-settings/render-item-input");
frontend.components.plugins_settings.render_item_toggle = rum.core.lazy_build(rum.core.build_defc,(function (val,p__110424,update_setting_BANG_){
var map__110425 = p__110424;
var map__110425__$1 = cljs.core.__destructure_map(map__110425);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110425__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110425__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110425__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110425__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var val__$1 = ((cljs.core.boolean_QMARK_(val))?val:cljs.core.boolean$(default$));
return daiquiri.core.create_element("div",{'data-key':key,'className':"desc-item as-toggle"},[daiquiri.core.create_element("h2",null,[(function (){var attrs110431 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs110431))?daiquiri.interpreter.element_attributes(attrs110431):null),((cljs.core.map_QMARK_(attrs110431))?null:[daiquiri.interpreter.interpret(attrs110431)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon("caret-right")),(function (){var attrs110432 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110432))?daiquiri.interpreter.element_attributes(attrs110432):null),((cljs.core.map_QMARK_(attrs110432))?null:[daiquiri.interpreter.interpret(attrs110432)]));
})()]),(function (){var attrs110430 = frontend.ui.checkbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),val__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__110433 = key;
var G__110434 = (!(val__$1));
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(G__110433,G__110434) : update_setting_BANG_.call(null,G__110433,G__110434));
})], null));
return daiquiri.core.create_element("label",((cljs.core.map_QMARK_(attrs110430))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["form-control"], null)], null),attrs110430], 0))):{'className':"form-control"}),((cljs.core.map_QMARK_(attrs110430))?[frontend.components.plugins_settings.html_content(description)]:[daiquiri.interpreter.interpret(attrs110430),frontend.components.plugins_settings.html_content(description)]));
})()]);
}),null,"frontend.components.plugins-settings/render-item-toggle");
frontend.components.plugins_settings.render_item_enum = rum.core.lazy_build(rum.core.build_defc,(function (val,p__110437,update_setting_BANG_){
var map__110438 = p__110437;
var map__110438__$1 = cljs.core.__destructure_map(map__110438);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110438__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110438__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110438__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110438__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var enumChoices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110438__$1,new cljs.core.Keyword(null,"enumChoices","enumChoices",-177859500));
var enumPicker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110438__$1,new cljs.core.Keyword(null,"enumPicker","enumPicker",-719781503));
var val__$1 = (function (){var or__5043__auto__ = val;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
})();
var vals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,((cljs.core.sequential_QMARK_(val__$1))?val__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val__$1], null)));
var options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),v,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.contains_QMARK_(vals,v)], null);
}),enumChoices);
var picker = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(enumPicker);
return daiquiri.core.create_element("div",{'data-key':key,'className':"desc-item as-enum"},[daiquiri.core.create_element("h2",null,[(function (){var attrs110439 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs110439))?daiquiri.interpreter.element_attributes(attrs110439):null),((cljs.core.map_QMARK_(attrs110439))?null:[daiquiri.interpreter.interpret(attrs110439)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon("caret-right")),(function (){var attrs110440 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110440))?daiquiri.interpreter.element_attributes(attrs110440):null),((cljs.core.map_QMARK_(attrs110440))?null:[daiquiri.interpreter.interpret(attrs110440)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[daiquiri.interpreter.interpret(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radio","radio",1323726374),null,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null], null), null),picker))?new cljs.core.Keyword(null,"div.wrap","div.wrap",1832950772):new cljs.core.Keyword(null,"label.wrap","label.wrap",-1504723647)),frontend.components.plugins_settings.html_content(description),(function (){var G__110441 = picker;
var G__110441__$1 = (((G__110441 instanceof cljs.core.Keyword))?G__110441.fqn:null);
switch (G__110441__$1) {
case "radio":
return frontend.ui.radio_list(options,(function (p1__110435_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__110435_SHARP_) : update_setting_BANG_.call(null,key,p1__110435_SHARP_));
}),null);

break;
case "checkbox":
return frontend.ui.checkbox_list(options,(function (p1__110436_SHARP_){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,p1__110436_SHARP_) : update_setting_BANG_.call(null,key,p1__110436_SHARP_));
}),null);

break;
default:
return frontend.ui.select(options,(function (_,value){
return (update_setting_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_setting_BANG_.cljs$core$IFn$_invoke$arity$2(key,value) : update_setting_BANG_.call(null,key,value));
}),null);

}
})()], null))])]);
}),null,"frontend.components.plugins-settings/render-item-enum");
frontend.components.plugins_settings.render_item_object = rum.core.lazy_build(rum.core.build_defc,(function (_val,p__110442,pid){
var map__110443 = p__110442;
var map__110443__$1 = cljs.core.__destructure_map(map__110443);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110443__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110443__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110443__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var _default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110443__$1,new cljs.core.Keyword(null,"_default","_default",308892991));
return daiquiri.core.create_element("div",{'data-key':key,'className':"desc-item as-object"},[daiquiri.core.create_element("h2",null,[(function (){var attrs110444 = key;
return daiquiri.core.create_element("code",((cljs.core.map_QMARK_(attrs110444))?daiquiri.interpreter.element_attributes(attrs110444):null),((cljs.core.map_QMARK_(attrs110444))?null:[daiquiri.interpreter.interpret(attrs110444)]));
})(),daiquiri.interpreter.interpret(frontend.ui.icon("caret-right")),(function (){var attrs110445 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs110445))?daiquiri.interpreter.element_attributes(attrs110445):null),((cljs.core.map_QMARK_(attrs110445))?null:[daiquiri.interpreter.interpret(attrs110445)]));
})()]),daiquiri.core.create_element("div",{'className':"form-control"},[frontend.components.plugins_settings.html_content(description),daiquiri.core.create_element("div",{'className':"pl-1"},[frontend.components.plugins_settings.edit_settings_file(pid,null)])])]);
}),null,"frontend.components.plugins-settings/render-item-object");
frontend.components.plugins_settings.render_item_heading = rum.core.lazy_build(rum.core.build_defc,(function (p__110446){
var map__110447 = p__110446;
var map__110447__$1 = cljs.core.__destructure_map(map__110447);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110447__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110447__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110447__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return daiquiri.core.create_element("div",{'data-key':key,'className':"heading-item"},[(function (){var attrs110448 = title;
return daiquiri.core.create_element("h2",((cljs.core.map_QMARK_(attrs110448))?daiquiri.interpreter.element_attributes(attrs110448):null),((cljs.core.map_QMARK_(attrs110448))?null:[daiquiri.interpreter.interpret(attrs110448)]));
})(),frontend.components.plugins_settings.html_content(description)]);
}),null,"frontend.components.plugins-settings/render-item-heading");
frontend.components.plugins_settings.settings_container = rum.core.lazy_build(rum.core.build_defc,(function (schema,pl){
var plugin_settings = pl.settings;
var pid = pl.id;
var vec__110450 = rum.core.use_state(cljs_bean.core.__GT_clj(plugin_settings.toJSON()));
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110450,(0),null);
var set_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110450,(1),null);
var update_setting_BANG_ = (function (k,v){
return plugin_settings.set(cljs.core.name(k),cljs_bean.core.__GT_js(v));
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var on_change = (function (s){
var temp__5804__auto__ = cljs_bean.core.__GT_clj(s);
if(cljs.core.truth_(temp__5804__auto__)){
var s__$1 = temp__5804__auto__;
return (set_settings.cljs$core$IFn$_invoke$arity$1 ? set_settings.cljs$core$IFn$_invoke$arity$1(s__$1) : set_settings.call(null,s__$1));
} else {
return null;
}
});
plugin_settings.on("change",on_change);

return (function (){
return plugin_settings.off("change",on_change);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pid], null));

if(cljs.core.seq(schema)){
return daiquiri.core.create_element("div",{'className':"cp__plugins-settings-inner"},[daiquiri.core.create_element("span",{'className':"edit-file"},[frontend.components.plugins_settings.edit_settings_file(pid,null)]),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$components$plugins_settings$iter__110455(s__110456){
return (new cljs.core.LazySeq(null,(function (){
var s__110456__$1 = s__110456;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__110456__$1);
if(temp__5804__auto__){
var s__110456__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110456__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__110456__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__110458 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__110457 = (0);
while(true){
if((i__110457 < size__5519__auto__)){
var desc = cljs.core._nth(c__5518__auto__,i__110457);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
var desc__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"description","description",-1428560544),((function (i__110457,key,val,type,desc,c__5518__auto__,size__5519__auto__,b__110458,s__110456__$2,temp__5804__auto__,plugin_settings,pid,vec__110450,settings,set_settings,update_setting_BANG_){
return (function (p1__110449_SHARP_){
return frontend.handler.plugin.markdown_to_html(p1__110449_SHARP_);
});})(i__110457,key,val,type,desc,c__5518__auto__,size__5519__auto__,b__110458,s__110456__$2,temp__5804__auto__,plugin_settings,pid,vec__110450,settings,set_settings,update_setting_BANG_))
);
cljs.core.chunk_append(b__110458,(function (){var pred__110459 = cljs.core.contains_QMARK_;
var expr__110460 = type;
if(cljs.core.truth_((function (){var G__110462 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__110463 = expr__110460;
return (pred__110459.cljs$core$IFn$_invoke$arity$2 ? pred__110459.cljs$core$IFn$_invoke$arity$2(G__110462,G__110463) : pred__110459.call(null,G__110462,G__110463));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc__$1,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__110464 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__110465 = expr__110460;
return (pred__110459.cljs$core$IFn$_invoke$arity$2 ? pred__110459.cljs$core$IFn$_invoke$arity$2(G__110464,G__110465) : pred__110459.call(null,G__110464,G__110465));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc__$1,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__110466 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__110467 = expr__110460;
return (pred__110459.cljs$core$IFn$_invoke$arity$2 ? pred__110459.cljs$core$IFn$_invoke$arity$2(G__110466,G__110467) : pred__110459.call(null,G__110466,G__110467));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc__$1,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__110468 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__110469 = expr__110460;
return (pred__110459.cljs$core$IFn$_invoke$arity$2 ? pred__110459.cljs$core$IFn$_invoke$arity$2(G__110468,G__110469) : pred__110459.call(null,G__110468,G__110469));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc__$1,pid);
} else {
if(cljs.core.truth_((function (){var G__110470 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null);
var G__110471 = expr__110460;
return (pred__110459.cljs$core$IFn$_invoke$arity$2 ? pred__110459.cljs$core$IFn$_invoke$arity$2(G__110470,G__110471) : pred__110459.call(null,G__110470,G__110471));
})())){
return frontend.components.plugins_settings.render_item_heading(desc__$1);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
}
})());

var G__110486 = (i__110457 + (1));
i__110457 = G__110486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110458),frontend$components$plugins_settings$iter__110455(cljs.core.chunk_rest(s__110456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110458),null);
}
} else {
var desc = cljs.core.first(s__110456__$2);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(desc);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(desc));
var desc__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(desc,new cljs.core.Keyword(null,"description","description",-1428560544),((function (key,val,type,desc,s__110456__$2,temp__5804__auto__,plugin_settings,pid,vec__110450,settings,set_settings,update_setting_BANG_){
return (function (p1__110449_SHARP_){
return frontend.handler.plugin.markdown_to_html(p1__110449_SHARP_);
});})(key,val,type,desc,s__110456__$2,temp__5804__auto__,plugin_settings,pid,vec__110450,settings,set_settings,update_setting_BANG_))
);
return cljs.core.cons((function (){var pred__110472 = cljs.core.contains_QMARK_;
var expr__110473 = type;
if(cljs.core.truth_((function (){var G__110475 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null);
var G__110476 = expr__110473;
return (pred__110472.cljs$core$IFn$_invoke$arity$2 ? pred__110472.cljs$core$IFn$_invoke$arity$2(G__110475,G__110476) : pred__110472.call(null,G__110475,G__110476));
})())){
return frontend.components.plugins_settings.render_item_input(val,desc__$1,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__110477 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
var G__110478 = expr__110473;
return (pred__110472.cljs$core$IFn$_invoke$arity$2 ? pred__110472.cljs$core$IFn$_invoke$arity$2(G__110477,G__110478) : pred__110472.call(null,G__110477,G__110478));
})())){
return frontend.components.plugins_settings.render_item_toggle(val,desc__$1,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__110479 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),null], null), null);
var G__110480 = expr__110473;
return (pred__110472.cljs$core$IFn$_invoke$arity$2 ? pred__110472.cljs$core$IFn$_invoke$arity$2(G__110479,G__110480) : pred__110472.call(null,G__110479,G__110480));
})())){
return frontend.components.plugins_settings.render_item_enum(val,desc__$1,update_setting_BANG_);
} else {
if(cljs.core.truth_((function (){var G__110481 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
var G__110482 = expr__110473;
return (pred__110472.cljs$core$IFn$_invoke$arity$2 ? pred__110472.cljs$core$IFn$_invoke$arity$2(G__110481,G__110482) : pred__110472.call(null,G__110481,G__110482));
})())){
return frontend.components.plugins_settings.render_item_object(val,desc__$1,pid);
} else {
if(cljs.core.truth_((function (){var G__110483 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),null], null), null);
var G__110484 = expr__110473;
return (pred__110472.cljs$core$IFn$_invoke$arity$2 ? pred__110472.cljs$core$IFn$_invoke$arity$2(G__110483,G__110484) : pred__110472.call(null,G__110483,G__110484));
})())){
return frontend.components.plugins_settings.render_item_heading(desc__$1);
} else {
return daiquiri.core.create_element("p",null,[["#Not Handled#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')]);
}
}
}
}
}
})(),frontend$components$plugins_settings$iter__110455(cljs.core.rest(s__110456__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(schema);
})())]);
} else {
return daiquiri.core.create_element("h2",{'className':"font-bold text-lg py-4 warning"},["No Settings Schema!"]);
}
}),null,"frontend.components.plugins-settings/settings-container");

//# sourceMappingURL=frontend.components.plugins_settings.js.map
