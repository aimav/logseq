goog.provide('frontend.extensions.handbooks.core');
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.handbooks !== 'undefined') && (typeof frontend.extensions.handbooks.core !== 'undefined') && (typeof frontend.extensions.handbooks.core._STAR_config !== 'undefined')){
} else {
frontend.extensions.handbooks.core._STAR_config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.extensions.handbooks.core.get_handbooks_endpoint = (function frontend$extensions$handbooks$core$get_handbooks_endpoint(resource){
return [(cljs.core.truth_(frontend.storage.get(new cljs.core.Keyword(null,"handbooks-dev-watch?","handbooks-dev-watch?",-372916840)))?"http://localhost:1337":"https://handbooks.pages.dev"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource)].join('');
});
frontend.extensions.handbooks.core.resolve_asset_url = (function frontend$extensions$handbooks$core$resolve_asset_url(path){
if(clojure.string.starts_with_QMARK_(path,"http")){
return path;
} else {
return [frontend.extensions.handbooks.core.get_handbooks_endpoint("/"),clojure.string.replace_first(clojure.string.replace_first(path,"./",""),/^\/+/,"")].join('');
}
});
frontend.extensions.handbooks.core.inflate_content_assets_urls = (function frontend$extensions$handbooks$core$inflate_content_assets_urls(content){
var temp__5802__auto__ = (function (){var and__5041__auto__ = (!(clojure.string.blank_QMARK_(content)));
if(and__5041__auto__){
return cljs.core.re_seq(/src=\"([^\"]+)\"/,content);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var matches = temp__5802__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (content__$1,matched){
var temp__5802__auto____$1 = cljs.core.second(matched);
if(cljs.core.truth_(temp__5802__auto____$1)){
var matched__$1 = temp__5802__auto____$1;
return clojure.string.replace(content__$1,matched__$1,frontend.extensions.handbooks.core.resolve_asset_url(matched__$1));
} else {
return content__$1;
}
}),content,matches);
} else {
return content;
}
});
frontend.extensions.handbooks.core.parse_key_from_href = (function frontend$extensions$handbooks$core$parse_key_from_href(href,base){
if(((typeof href === 'string') && ((!(clojure.string.blank_QMARK_(href)))))){
var temp__5804__auto__ = (function (){var G__119506 = href;
var G__119506__$1 = (((G__119506 == null))?null:clojure.string.trim(G__119506));
if((G__119506__$1 == null)){
return null;
} else {
return clojure.string.replace(G__119506__$1,/.edn$/,"");
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var href__$1 = temp__5804__auto__;
var G__119507 = ((clojure.string.starts_with_QMARK_(href__$1,"@"))?clojure.string.replace(href__$1,/^[@\\/]+/,""):(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(base,href__$1) : frontend.util.node_path.join.call(null,base,href__$1)));
var G__119507__$1 = (((G__119507 == null))?null:clojure.string.lower_case(G__119507));
if((G__119507__$1 == null)){
return null;
} else {
return camel_snake_kebab.core.__GT_snake_case_string(G__119507__$1);
}
} else {
return null;
}
} else {
return null;
}
});
frontend.extensions.handbooks.core.parse_parent_key = (function frontend$extensions$handbooks$core$parse_parent_key(s){
if(((typeof s === 'string') && (clojure.string.includes_QMARK_(s,"/")))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,"/"));
} else {
return s;
}
});
frontend.extensions.handbooks.core.bind_parent_key = (function frontend$extensions$handbooks$core$bind_parent_key(p__119508){
var map__119509 = p__119508;
var map__119509__$1 = cljs.core.__destructure_map(map__119509);
var node = map__119509__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119509__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__119510 = node;
if(((typeof key === 'string') && (clojure.string.includes_QMARK_(key,"/")))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__119510,new cljs.core.Keyword(null,"parent","parent",-878878779),frontend.extensions.handbooks.core.parse_parent_key(key));
} else {
return G__119510;
}
});
frontend.extensions.handbooks.core.load_glide_assets_BANG_ = (function frontend$extensions$handbooks$core$load_glide_assets_BANG_(){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.css_load$.cljs$core$IFn$_invoke$arity$1([frontend.util.JS_ROOT,"/glide/glide.core.min.css"].join('')),(function (_){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(frontend.util.css_load$.cljs$core$IFn$_invoke$arity$1([frontend.util.JS_ROOT,"/glide/glide.theme.min.css"].join('')),(function (___$1){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((window["Glide"]))?null:frontend.util.js_load$([frontend.util.JS_ROOT,"/glide/glide.min.js"].join(''))),(function (___$2){
return promesa.protocols._promise(null);
}));
}));
}));
}));
});
frontend.extensions.handbooks.core.topic_card = rum.core.lazy_build(rum.core.build_defc,(function (p__119512,nav_fn_BANG_,opts){
var map__119513 = p__119512;
var map__119513__$1 = cljs.core.__destructure_map(map__119513);
var _topic = map__119513__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119513__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119513__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119513__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var cover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119513__$1,new cljs.core.Keyword(null,"cover","cover",-823541365));
var attrs119511 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-click","on-click",1632826543),nav_fn_BANG_], null),opts], 0));
return daiquiri.core.create_element("button",((cljs.core.map_QMARK_(attrs119511))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w-full","topic-card","flex","text-left"], null)], null),attrs119511], 0))):{'className':"w-full topic-card flex text-left"}),((cljs.core.map_QMARK_(attrs119511))?[(cljs.core.truth_(cover)?daiquiri.core.create_element("div",{'className':"l flex items-center"},[daiquiri.core.create_element("img",{'src':frontend.extensions.handbooks.core.resolve_asset_url(cover)},[])]):null),daiquiri.core.create_element("div",{'className':"r flex flex-col"},[(function (){var attrs119514 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs119514))?daiquiri.interpreter.element_attributes(attrs119514):null),((cljs.core.map_QMARK_(attrs119514))?null:[daiquiri.interpreter.interpret(attrs119514)]));
})(),(function (){var attrs119515 = description;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs119515))?daiquiri.interpreter.element_attributes(attrs119515):null),((cljs.core.map_QMARK_(attrs119515))?null:[daiquiri.interpreter.interpret(attrs119515)]));
})()])]:[daiquiri.interpreter.interpret(attrs119511),(cljs.core.truth_(cover)?daiquiri.core.create_element("div",{'className':"l flex items-center"},[daiquiri.core.create_element("img",{'src':frontend.extensions.handbooks.core.resolve_asset_url(cover)},[])]):null),daiquiri.core.create_element("div",{'className':"r flex flex-col"},[(function (){var attrs119516 = title;
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs119516))?daiquiri.interpreter.element_attributes(attrs119516):null),((cljs.core.map_QMARK_(attrs119516))?null:[daiquiri.interpreter.interpret(attrs119516)]));
})(),(function (){var attrs119517 = description;
return daiquiri.core.create_element("span",((cljs.core.map_QMARK_(attrs119517))?daiquiri.interpreter.element_attributes(attrs119517):null),((cljs.core.map_QMARK_(attrs119517))?null:[daiquiri.interpreter.interpret(attrs119517)]));
})()])]));
}),null,"frontend.extensions.handbooks.core/topic-card");
frontend.extensions.handbooks.core.pane_category_topics = rum.core.lazy_build(rum.core.build_defc,(function (handbook_nodes,pane_state,nav_BANG_){
return daiquiri.core.create_element("div",{'className':"pane pane-category-topics"},[(function (){var attrs119534 = (function (){var category_key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(pane_state));
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,category_key);
if(cljs.core.truth_(temp__5804__auto__)){
var category = temp__5804__auto__;
var iter__5520__auto__ = (function frontend$extensions$handbooks$core$iter__119535(s__119536){
return (new cljs.core.LazySeq(null,(function (){
var s__119536__$1 = s__119536;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__119536__$1);
if(temp__5804__auto____$1){
var s__119536__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__119536__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119536__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119538 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119537 = (0);
while(true){
if((i__119537 < size__5519__auto__)){
var topic = cljs.core._nth(c__5518__auto__,i__119537);
cljs.core.chunk_append(b__119538,rum.core.with_key(frontend.extensions.handbooks.core.topic_card(topic,((function (i__119537,topic,c__5518__auto__,size__5519__auto__,b__119538,s__119536__$2,temp__5804__auto____$1,category,temp__5804__auto__,category_key){
return (function (){
var G__119539 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(category)], null);
var G__119540 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__119539,G__119540) : nav_BANG_.call(null,G__119539,G__119540));
});})(i__119537,topic,c__5518__auto__,size__5519__auto__,b__119538,s__119536__$2,temp__5804__auto____$1,category,temp__5804__auto__,category_key))
,null),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)));

var G__119789 = (i__119537 + (1));
i__119537 = G__119789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119538),frontend$extensions$handbooks$core$iter__119535(cljs.core.chunk_rest(s__119536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119538),null);
}
} else {
var topic = cljs.core.first(s__119536__$2);
return cljs.core.cons(rum.core.with_key(frontend.extensions.handbooks.core.topic_card(topic,((function (topic,s__119536__$2,temp__5804__auto____$1,category,temp__5804__auto__,category_key){
return (function (){
var G__119541 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(category)], null);
var G__119542 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__119541,G__119542) : nav_BANG_.call(null,G__119541,G__119542));
});})(topic,s__119536__$2,temp__5804__auto____$1,category,temp__5804__auto__,category_key))
,null),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)),frontend$extensions$handbooks$core$iter__119535(cljs.core.rest(s__119536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(category));
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119534))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["topics-list"], null)], null),attrs119534], 0))):{'className':"topics-list"}),((cljs.core.map_QMARK_(attrs119534))?null:[daiquiri.interpreter.interpret(attrs119534)]));
})()]);
}),null,"frontend.extensions.handbooks.core/pane-category-topics");
frontend.extensions.handbooks.core.media_render = rum.core.lazy_build(rum.core.build_defc,(function (src){
var src__$1 = frontend.util.trim_safe(src);
var extname = (function (){var G__119543 = src__$1;
var G__119543__$1 = (((G__119543 == null))?null:(frontend.util.full_path_extname.cljs$core$IFn$_invoke$arity$1 ? frontend.util.full_path_extname.cljs$core$IFn$_invoke$arity$1(G__119543) : frontend.util.full_path_extname.call(null,G__119543)));
if((G__119543__$1 == null)){
return null;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__119543__$1,(1));
}
})();
var youtube_id = (function (){var and__5041__auto__ = clojure.string.includes_QMARK_(src__$1,"youtube.com/watch?v=");
if(and__5041__auto__){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(src__$1,((2) + clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(src__$1,"v=")));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = extname;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(frontend.config.video_formats,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(extname));
} else {
return and__5041__auto__;
}
})())){
return daiquiri.core.create_element("video",{'src':src__$1,'controls':true},[]);
} else {
if(typeof youtube_id === 'string'){
return frontend.extensions.video.youtube.youtube_video(youtube_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(235)], null));
} else {
return daiquiri.core.create_element("img",{'src':src__$1},[]);

}
}
}),null,"frontend.extensions.handbooks.core/media-render");
frontend.extensions.handbooks.core.chapter_select = rum.core.lazy_build(rum.core.build_defc,(function (topic,children,on_select){
var vec__119545 = rum.core.use_state(false);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119545,(0),null);
var set_open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119545,(1),null);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var temp__5804__auto__ = document.querySelector("[data-identity=logseq-handbooks]");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
var h = (function (p1__119544_SHARP_){
if(cljs.core.truth_((function (){var G__119548 = p1__119544_SHARP_.target;
if((G__119548 == null)){
return null;
} else {
return document.querySelector(".chapters-select").contains(G__119548);
}
})())){
return null;
} else {
return (set_open_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_open_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_open_QMARK_.call(null,false));
}
});
el.addEventListener("click",h);

return (function (){
return el.removeEventListener("click",h);
});
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return daiquiri.core.create_element("div",{'className':"chapters-select w-full"},[daiquiri.core.create_element("a",{'onClick':(function (){
var G__119549 = cljs.core.not(open_QMARK_);
return (set_open_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_open_QMARK_.cljs$core$IFn$_invoke$arity$1(G__119549) : set_open_QMARK_.call(null,G__119549));
}),'tabIndex':"0",'className':"select-trigger"},[daiquiri.core.create_element("small",null,["Current chapter"]),(function (){var attrs119552 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic);
return daiquiri.core.create_element("strong",((cljs.core.map_QMARK_(attrs119552))?daiquiri.interpreter.element_attributes(attrs119552):null),((cljs.core.map_QMARK_(attrs119552))?null:[daiquiri.interpreter.interpret(attrs119552)]));
})(),(cljs.core.truth_(open_QMARK_)?daiquiri.interpreter.interpret(frontend.ui.icon("chevron-down")):daiquiri.interpreter.interpret(frontend.ui.icon("chevron-left"))),(cljs.core.truth_(open_QMARK_)?daiquiri.core.create_element("ul",null,[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$handbooks$core$iter__119553(s__119554){
return (new cljs.core.LazySeq(null,(function (){
var s__119554__$1 = s__119554;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119554__$1);
if(temp__5804__auto__){
var s__119554__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119554__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119554__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119556 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119555 = (0);
while(true){
if((i__119555 < size__5519__auto__)){
var c = cljs.core._nth(c__5518__auto__,i__119555);
cljs.core.chunk_append(b__119556,((((cljs.core.seq(c)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)))))?daiquiri.core.create_element("li",{'key':new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c)},[daiquiri.core.create_element("a",{'tabIndex':"0",'onClick':((function (i__119555,c,c__5518__auto__,size__5519__auto__,b__119556,s__119554__$2,temp__5804__auto__,vec__119545,open_QMARK_,set_open_QMARK_){
return (function (){
var G__119557 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c);
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__119557) : on_select.call(null,G__119557));
});})(i__119555,c,c__5518__auto__,size__5519__auto__,b__119556,s__119554__$2,temp__5804__auto__,vec__119545,open_QMARK_,set_open_QMARK_))
,'className':"flex"},[daiquiri.interpreter.interpret((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c);
}
})())])]):null));

var G__119790 = (i__119555 + (1));
i__119555 = G__119790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119556),frontend$extensions$handbooks$core$iter__119553(cljs.core.chunk_rest(s__119554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119556),null);
}
} else {
var c = cljs.core.first(s__119554__$2);
return cljs.core.cons(((((cljs.core.seq(c)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)))))?daiquiri.core.create_element("li",{'key':new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c)},[daiquiri.core.create_element("a",{'tabIndex':"0",'onClick':((function (c,s__119554__$2,temp__5804__auto__,vec__119545,open_QMARK_,set_open_QMARK_){
return (function (){
var G__119558 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c);
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__119558) : on_select.call(null,G__119558));
});})(c,s__119554__$2,temp__5804__auto__,vec__119545,open_QMARK_,set_open_QMARK_))
,'className':"flex"},[daiquiri.interpreter.interpret((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(c);
}
})())])]):null),frontend$extensions$handbooks$core$iter__119553(cljs.core.rest(s__119554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(children);
})())]):null)])]);
}),null,"frontend.extensions.handbooks.core/chapter-select");
frontend.extensions.handbooks.core.pane_topic_detail = rum.core.lazy_build(rum.core.build_defc,(function (handbook_nodes,pane_state,nav_BANG_){
var vec__119560 = rum.core.use_state(false);
var deps_pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119560,(0),null);
var set_deps_pending_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119560,(1),null);
var _STAR_id_ref = rum.core.use_ref(["glide--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now())].join(''));
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
(set_deps_pending_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_deps_pending_QMARK_.cljs$core$IFn$_invoke$arity$1(true) : set_deps_pending_QMARK_.call(null,true));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.extensions.handbooks.core.load_glide_assets_BANG_(),(function (){
return setTimeout((function (){
if(cljs.core.truth_(document.getElementById(rum.core.deref(_STAR_id_ref)))){
var G__119563 = (new window.Glide(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rum.core.deref(_STAR_id_ref))].join('')));
G__119563.mount();

return G__119563;
} else {
return null;
}
}),(50));
})),(function (){
return (set_deps_pending_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_deps_pending_QMARK_.cljs$core$IFn$_invoke$arity$1(false) : set_deps_pending_QMARK_.call(null,false));
}));
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return setTimeout((function (){
var G__119564 = document.querySelector(".cp__handbooks-content");
if((G__119564 == null)){
return null;
} else {
return G__119564.scrollTo((0),(0));
}
}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane_state], null));

return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(pane_state));
if(cljs.core.truth_(temp__5804__auto__)){
var topic_key = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,topic_key);
if(cljs.core.truth_(temp__5804__auto____$1)){
var topic = temp__5804__auto____$1;
var chapters = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(topic);
var has_chapters_QMARK_ = cljs.core.seq(chapters);
var topic__$1 = ((has_chapters_QMARK_)?cljs.core.first(chapters):topic);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(frontend.extensions.handbooks.core.bind_parent_key(topic__$1)));
var chapters__$1 = (function (){var or__5043__auto__ = chapters;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(parent);
}
})();
var parent_key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(parent);
var parent_category_QMARK_ = (!(clojure.string.includes_QMARK_(parent_key,"/")));
var show_chapters_QMARK_ = (((!(parent_category_QMARK_))) && (cljs.core.seq(chapters__$1)));
var chapters_len = cljs.core.count(chapters__$1);
var chapter_current_idx = (((chapters_len === (0)))?null:frontend.util.find_index((function (p1__119559_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__119559_SHARP_),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic__$1));
}),chapters__$1));
if(cljs.core.truth_(deps_pending_QMARK_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane.pane-topic-detail","div.pane.pane-topic-detail",-1359891875),((show_chapters_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-2xl.pb-3.font-semibold","h1.text-2xl.pb-3.font-semibold",1202289385),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic__$1)], null)),((show_chapters_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chapters-wrap.py-2","div.chapters-wrap.py-2",-36217700),frontend.extensions.handbooks.core.chapter_select(topic__$1,chapters__$1,(function (k){
var temp__5804__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,k);
if(cljs.core.truth_(temp__5804__auto____$2)){
var chapter = temp__5804__auto____$2;
var G__119579 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),chapter,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(parent)], null);
var G__119580 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__119579,G__119580) : nav_BANG_.call(null,G__119579,G__119580));
} else {
return null;
}
}))], null):null),(function (){var temp__5804__auto____$2 = new cljs.core.Keyword(null,"demos","demos",2019929767).cljs$core$IFn$_invoke$arity$1(topic__$1);
if(cljs.core.truth_(temp__5804__auto____$2)){
var demos = temp__5804__auto____$2;
var demos__$1 = (function (){var G__119581 = demos;
if(typeof demos === 'string'){
return (new cljs.core.List(null,G__119581,null,(1),null));
} else {
return G__119581;
}
})();
if((cljs.core.count(demos__$1) > (1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.demos.glide","div.flex.demos.glide",-1625455235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),rum.core.deref(_STAR_id_ref)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.glide__track","div.glide__track",-633527809),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-glide-el","data-glide-el",-1091179891),"track"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.glide__slides","div.glide__slides",-999448224),(function (){var iter__5520__auto__ = (function frontend$extensions$handbooks$core$iter__119582(s__119583){
return (new cljs.core.LazySeq(null,(function (){
var s__119583__$1 = s__119583;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__119583__$1);
if(temp__5804__auto____$3){
var s__119583__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__119583__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119583__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119585 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119584 = (0);
while(true){
if((i__119584 < size__5519__auto__)){
var demo = cljs.core._nth(c__5518__auto__,i__119584);
cljs.core.chunk_append(b__119585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item.glide__slide","div.item.glide__slide",-1497684829),frontend.extensions.handbooks.core.media_render(frontend.extensions.handbooks.core.resolve_asset_url(demo))], null));

var G__119791 = (i__119584 + (1));
i__119584 = G__119791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119585),frontend$extensions$handbooks$core$iter__119582(cljs.core.chunk_rest(s__119583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119585),null);
}
} else {
var demo = cljs.core.first(s__119583__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item.glide__slide","div.item.glide__slide",-1497684829),frontend.extensions.handbooks.core.media_render(frontend.extensions.handbooks.core.resolve_asset_url(demo))], null),frontend$extensions$handbooks$core$iter__119582(cljs.core.rest(s__119583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(demos__$1);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.glide__bullets","div.glide__bullets",-2112036241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-glide-el","data-glide-el",-1091179891),"controls[nav]"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.glide__bullet","button.glide__bullet",-1928516082),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-glide-dir","data-glide-dir",653306489),["=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null),(idx + (1))], null);
}),demos__$1)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.demos.pt-1","div.flex.demos.pt-1",1609910240),frontend.extensions.handbooks.core.media_render(frontend.extensions.handbooks.core.resolve_asset_url(cljs.core.first(demos__$1)))], null);
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content-wrap","div.content-wrap",1869004654),(function (){var temp__5804__auto____$2 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(topic__$1);
if(cljs.core.truth_(temp__5804__auto____$2)){
var content = temp__5804__auto____$2;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.markdown-body","div.content.markdown-body",1198787733),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),frontend.extensions.handbooks.core.inflate_content_assets_urls(content)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var temp__5804__auto____$3 = e.target;
if(cljs.core.truth_(temp__5804__auto____$3)){
var target = temp__5804__auto____$3;
var temp__5802__auto__ = target.closest("img");
if(cljs.core.truth_(temp__5802__auto__)){
var img = temp__5802__auto__;
return frontend.extensions.lightbox.preview_images_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),img.src,new cljs.core.Keyword(null,"w","w",354169001),img.naturalWidth,new cljs.core.Keyword(null,"h","h",1109658740),img.naturalHeight], null)], null));
} else {
var temp__5804__auto____$4 = (function (){var G__119586 = target.closest("a");
if((G__119586 == null)){
return null;
} else {
return G__119586.getAttribute("href");
}
})();
if(cljs.core.truth_(temp__5804__auto____$4)){
var link = temp__5804__auto____$4;
var temp__5804__auto____$5 = (function (){var and__5041__auto__ = (!(clojure.string.starts_with_QMARK_(link,"http")));
if(and__5041__auto__){
return frontend.extensions.handbooks.core.parse_key_from_href(link,parent_key);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$5)){
var to_k = temp__5804__auto____$5;
var temp__5802__auto___119792__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbook_nodes,to_k);
if(cljs.core.truth_(temp__5802__auto___119792__$1)){
var to_119793 = temp__5802__auto___119792__$1;
var G__119587_119794 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),to_119793,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(parent)], null);
var G__119588_119795 = pane_state;
(nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__119587_119794,G__119588_119795) : nav_BANG_.call(null,G__119587_119794,G__119588_119795));
} else {
console.error("ERROR: handbook link resource not found: ",to_k,link);
}

return frontend.util.stop(e);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
})], null)], null),(function (){var temp__5804__auto____$3 = (function (){var and__5041__auto__ = (chapters_len > (1));
if(and__5041__auto__){
return chapter_current_idx;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$3)){
var idx = temp__5804__auto____$3;
var prev = (((idx === (0)))?null:(idx - (1)));
var next = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(chapters_len - (1))))?null:(idx + (1)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls.flex.justify-between.pt-4","div.controls.flex.justify-between.pt-4",-1953435199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(prev)?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),frontend.ui.icon("arrow-left"),"Prev chapter"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__119589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chapters__$1,prev),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(parent)], null);
var G__119590 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__119589,G__119590) : nav_BANG_.call(null,G__119589,G__119590));
})], 0)):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(next)?frontend.ui.button.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.items-center","span.flex.items-center",-463750193),"Next chapter",frontend.ui.icon("arrow-right")], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"small?","small?",95242445),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__119591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chapters__$1,next),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(parent)], null);
var G__119592 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__119591,G__119592) : nav_BANG_.call(null,G__119591,G__119592));
})], 0)):null)], null)], null);
} else {
return null;
}
})()], null);
} else {
return null;
}
})()], null)], null);
}
} else {
return null;
}
} else {
return null;
}
})());
}),null,"frontend.extensions.handbooks.core/pane-topic-detail");
frontend.extensions.handbooks.core.pane_dashboard = rum.core.lazy_build(rum.core.build_defc,(function (handbooks_nodes,pane_state,nav_to_pane_BANG_){
return daiquiri.interpreter.interpret((function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,"__root");
if(cljs.core.truth_(temp__5804__auto__)){
var root = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane.dashboard-pane","div.pane.dashboard-pane",2038750316),(function (){var temp__5804__auto____$1 = new cljs.core.Keyword(null,"popular-topics","popular-topics",-562514196).cljs$core$IFn$_invoke$arity$1(root);
if(cljs.core.truth_(temp__5804__auto____$1)){
var popular_topics = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","popular-topics","handbook/popular-topics",-564403500)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topics-list","div.topics-list",-199461940),(function (){var iter__5520__auto__ = (function frontend$extensions$handbooks$core$iter__119611(s__119612){
return (new cljs.core.LazySeq(null,(function (){
var s__119612__$1 = s__119612;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__119612__$1);
if(temp__5804__auto____$2){
var s__119612__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__119612__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119612__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119614 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119613 = (0);
while(true){
if((i__119613 < size__5519__auto__)){
var topic_key = cljs.core._nth(c__5518__auto__,i__119613);
cljs.core.chunk_append(b__119614,(function (){var temp__5804__auto____$3 = (function (){var and__5041__auto__ = typeof topic_key === 'string';
if(and__5041__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,camel_snake_kebab.core.__GT_snake_case_string(frontend.util.safe_lower_case(topic_key)));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$3)){
var topic = temp__5804__auto____$3;
return frontend.extensions.handbooks.core.topic_card(topic,((function (i__119613,topic,temp__5804__auto____$3,topic_key,c__5518__auto__,size__5519__auto__,b__119614,s__119612__$2,temp__5804__auto____$2,popular_topics,temp__5804__auto____$1,root,temp__5804__auto__){
return (function (){
var G__119615 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","title","handbook/title",630546951)], 0))], null);
var G__119616 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null);
return (nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2(G__119615,G__119616) : nav_to_pane_BANG_.call(null,G__119615,G__119616));
});})(i__119613,topic,temp__5804__auto____$3,topic_key,c__5518__auto__,size__5519__auto__,b__119614,s__119612__$2,temp__5804__auto____$2,popular_topics,temp__5804__auto____$1,root,temp__5804__auto__))
,null);
} else {
return null;
}
})());

var G__119796 = (i__119613 + (1));
i__119613 = G__119796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119614),frontend$extensions$handbooks$core$iter__119611(cljs.core.chunk_rest(s__119612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119614),null);
}
} else {
var topic_key = cljs.core.first(s__119612__$2);
return cljs.core.cons((function (){var temp__5804__auto____$3 = (function (){var and__5041__auto__ = typeof topic_key === 'string';
if(and__5041__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,camel_snake_kebab.core.__GT_snake_case_string(frontend.util.safe_lower_case(topic_key)));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto____$3)){
var topic = temp__5804__auto____$3;
return frontend.extensions.handbooks.core.topic_card(topic,((function (topic,temp__5804__auto____$3,topic_key,s__119612__$2,temp__5804__auto____$2,popular_topics,temp__5804__auto____$1,root,temp__5804__auto__){
return (function (){
var G__119617 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","title","handbook/title",630546951)], 0))], null);
var G__119618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null);
return (nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2(G__119617,G__119618) : nav_to_pane_BANG_.call(null,G__119617,G__119618));
});})(topic,temp__5804__auto____$3,topic_key,s__119612__$2,temp__5804__auto____$2,popular_topics,temp__5804__auto____$1,root,temp__5804__auto__))
,null);
} else {
return null;
}
})(),frontend$extensions$handbooks$core$iter__119611(cljs.core.rest(s__119612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(popular_topics);
})()], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","help-categories","handbook/help-categories",227903835)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.categories-list","div.categories-list",-1909249109),(function (){var categories = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(root);
var categories__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(categories),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Keyboard shortcuts"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(cljs.core.deref(frontend.modules.shortcut.config._STAR_config))))," shortcuts"], null),new cljs.core.Keyword(null,"color","color",1011675173),"#2563EB",new cljs.core.Keyword(null,"icon","icon",1679606541),"command"], null));
var iter__5520__auto__ = (function frontend$extensions$handbooks$core$iter__119619(s__119620){
return (new cljs.core.LazySeq(null,(function (){
var s__119620__$1 = s__119620;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__119620__$1);
if(temp__5804__auto____$1){
var s__119620__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__119620__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119620__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119622 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119621 = (0);
while(true){
if((i__119621 < size__5519__auto__)){
var map__119623 = cljs.core._nth(c__5518__auto__,i__119621);
var map__119623__$1 = cljs.core.__destructure_map(map__119623);
var category = map__119623__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119623__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119623__$1,new cljs.core.Keyword(null,"title","title",636505583));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119623__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119623__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119623__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var total = (cljs.core.truth_(cljs.core.counted_QMARK_)?cljs.core.count(children):(0));
cljs.core.chunk_append(b__119622,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.category-card.text-left","button.category-card.text-left",-2091900834),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),(function (){var or__5043__auto__ = frontend.ui.__GT_block_background_color(color);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "var(--ls-secondary-background-color)";
}
})()], null),new cljs.core.Keyword(null,"data-total","data-total",1198476295),total,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__119621,total,map__119623,map__119623__$1,category,key,title,children,color,icon,c__5518__auto__,size__5519__auto__,b__119622,s__119620__$2,temp__5804__auto____$1,categories,categories__$1,root,temp__5804__auto__){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504))){
frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));

frontend.state.open_right_sidebar_BANG_();

return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),"shortcut-settings",new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734));
} else {
var G__119624 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topics","topics",625768208),category,title], null);
var G__119625 = pane_state;
return (nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2(G__119624,G__119625) : nav_to_pane_BANG_.call(null,G__119624,G__119625));
}
});})(i__119621,total,map__119623,map__119623__$1,category,key,title,children,color,icon,c__5518__auto__,size__5519__auto__,b__119622,s__119620__$2,temp__5804__auto____$1,categories,categories__$1,root,temp__5804__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon-wrap","div.icon-wrap",1583346389),frontend.ui.icon((function (){var or__5043__auto__ = icon;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "chart-bubble";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-wrap","div.text-wrap",-1396076251),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title], null),((cljs.core.vector_QMARK_(children))?children:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","topics","handbook/topics",627523704)], 0))))].join('')], null)
)], null)], null));

var G__119797 = (i__119621 + (1));
i__119621 = G__119797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119622),frontend$extensions$handbooks$core$iter__119619(cljs.core.chunk_rest(s__119620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119622),null);
}
} else {
var map__119626 = cljs.core.first(s__119620__$2);
var map__119626__$1 = cljs.core.__destructure_map(map__119626);
var category = map__119626__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119626__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119626__$1,new cljs.core.Keyword(null,"title","title",636505583));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119626__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119626__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119626__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var total = (cljs.core.truth_(cljs.core.counted_QMARK_)?cljs.core.count(children):(0));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.category-card.text-left","button.category-card.text-left",-2091900834),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),(function (){var or__5043__auto__ = frontend.ui.__GT_block_background_color(color);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "var(--ls-secondary-background-color)";
}
})()], null),new cljs.core.Keyword(null,"data-total","data-total",1198476295),total,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (total,map__119626,map__119626__$1,category,key,title,children,color,icon,s__119620__$2,temp__5804__auto____$1,categories,categories__$1,root,temp__5804__auto__){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"ls-shortcuts","ls-shortcuts",-1222790504))){
frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));

frontend.state.open_right_sidebar_BANG_();

return frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),"shortcut-settings",new cljs.core.Keyword(null,"shortcut-settings","shortcut-settings",-1663349734));
} else {
var G__119627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topics","topics",625768208),category,title], null);
var G__119628 = pane_state;
return (nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_to_pane_BANG_.cljs$core$IFn$_invoke$arity$2(G__119627,G__119628) : nav_to_pane_BANG_.call(null,G__119627,G__119628));
}
});})(total,map__119626,map__119626__$1,category,key,title,children,color,icon,s__119620__$2,temp__5804__auto____$1,categories,categories__$1,root,temp__5804__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon-wrap","div.icon-wrap",1583346389),frontend.ui.icon((function (){var or__5043__auto__ = icon;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "chart-bubble";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-wrap","div.text-wrap",-1396076251),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title], null),((cljs.core.vector_QMARK_(children))?children:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(total)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.safe_lower_case(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","topics","handbook/topics",627523704)], 0))))].join('')], null)
)], null)], null),frontend$extensions$handbooks$core$iter__119619(cljs.core.rest(s__119620__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(categories__$1);
})()], null)], null);
} else {
return null;
}
})());
}),null,"frontend.extensions.handbooks.core/pane-dashboard");
frontend.extensions.handbooks.core.pane_settings = rum.core.lazy_build(rum.core.build_defc,(function (dev_watch_QMARK_,set_dev_watch_QMARK_){
return daiquiri.core.create_element("div",{'className':"pane pane-settings"},[daiquiri.core.create_element("div",{'className':"item"},[daiquiri.core.create_element("p",{'className':"flex items-center space-x-3 mb-0"},[daiquiri.core.create_element("strong",null,["Writing mode (preview in time)"]),daiquiri.interpreter.interpret(frontend.ui.toggle.cljs$core$IFn$_invoke$arity$3(dev_watch_QMARK_,(function (){
var G__119632 = cljs.core.not(dev_watch_QMARK_);
return (set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1(G__119632) : set_dev_watch_QMARK_.call(null,G__119632));
}),true))]),daiquiri.core.create_element("small",{'className':"opacity-30"},[["Resources from ",frontend.extensions.handbooks.core.get_handbooks_endpoint("/")].join('')])])]);
}),null,"frontend.extensions.handbooks.core/pane-settings");
frontend.extensions.handbooks.core.search_bar = rum.core.lazy_build(rum.core.build_defc,(function (pane_state,nav_BANG_,handbooks_nodes,search_state,set_search_state_BANG_){
var _STAR_input_ref = rum.core.use_ref(null);
var vec__119637 = rum.core.use_state("");
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119637,(0),null);
var set_q_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119637,(1),null);
var vec__119640 = rum.core.use_state(null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119640,(0),null);
var set_results_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119640,(1),null);
var vec__119643 = rum.core.use_state((0));
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119643,(0),null);
var set_selected_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119643,(1),null);
var select_fn_BANG_ = (function (p1__119633_SHARP_){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.seq(results);
if(and__5041__auto__){
return (cljs.core.count(results) - (1));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var ldx = temp__5804__auto__;
var G__119646 = (function (){var G__119647 = p1__119633_SHARP_;
var G__119647__$1 = (((G__119647 instanceof cljs.core.Keyword))?G__119647.fqn:null);
switch (G__119647__$1) {
case "up":
if((selected === (0))){
return ldx;
} else {
var x__5128__auto__ = (selected - (1));
var y__5129__auto__ = (0);
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
}

break;
case "down":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,ldx)){
return (0);
} else {
var x__5131__auto__ = (selected + (1));
var y__5132__auto__ = ldx;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
})();
return (set_selected_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_BANG_.cljs$core$IFn$_invoke$arity$1(G__119646) : set_selected_BANG_.call(null,G__119646));
} else {
return null;
}
});
var q__$1 = frontend.util.trim_safe(q);
var active_QMARK_ = (!(clojure.string.blank_QMARK_(frontend.util.trim_safe(q__$1))));
var reset_q_BANG_ = (function (){
var G__119648 = (rum.core.deref(_STAR_input_ref).value = "");
return (set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1(G__119648) : set_q_BANG_.call(null,G__119648));
});
var focus_q_BANG_ = (function (){
var G__119649 = rum.core.deref(_STAR_input_ref);
if((G__119649 == null)){
return null;
} else {
return G__119649.focus();
}
});
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return focus_q_BANG_();
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pane_state], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var pane_nodes = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.second(pane_state));
var pane_nodes__$1 = (function (){var and__5041__auto__ = cljs.core.seq(pane_nodes);
if(and__5041__auto__){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__119634_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__119634_SHARP_),p1__119634_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pane_nodes], 0));
} else {
return and__5041__auto__;
}
})();
var G__119650_119799 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_], null)], 0));
(set_search_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_search_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119650_119799) : set_search_state_BANG_.call(null,G__119650_119799));

if(((cljs.core.seq(handbooks_nodes)) && (active_QMARK_))){
var G__119651_119800 = frontend.search.fuzzy_search.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5043__auto__ = pane_nodes__$1;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,"__root"));
}
})(),q__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"limit","limit",-1355822363),(30),new cljs.core.Keyword(null,"extract-fn","extract-fn",-339752723),new cljs.core.Keyword(null,"title","title",636505583)], 0));
(set_results_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_results_BANG_.cljs$core$IFn$_invoke$arity$1(G__119651_119800) : set_results_BANG_.call(null,G__119651_119800));
} else {
(set_results_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_results_BANG_.cljs$core$IFn$_invoke$arity$1(null) : set_results_BANG_.call(null,null));
}

return (set_selected_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_selected_BANG_.cljs$core$IFn$_invoke$arity$1((0)) : set_selected_BANG_.call(null,(0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [q__$1], null));

return daiquiri.core.create_element("div",{'className':"search"},[daiquiri.core.create_element("div",{'className':"input-wrap relative"},[daiquiri.core.create_element("span",{'style':{'top':(6),'left':(7)},'className':"icon absolute opacity-90"},[daiquiri.interpreter.interpret(frontend.ui.icon("search",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)))]),daiquiri.core.create_element("input",{'placeholder':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","search","handbook/search",1571568150)], 0)),'autoFocus':true,'defaultValue':q__$1,'onChange':rum.core.mark_sync_update((function (p1__119635_SHARP_){
var G__119652 = frontend.util.evalue(p1__119635_SHARP_);
return (set_q_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_q_BANG_.cljs$core$IFn$_invoke$arity$1(G__119652) : set_q_BANG_.call(null,G__119652));
})),'onKeyDown':(function (p1__119636_SHARP_){
var G__119653 = p1__119636_SHARP_.keyCode;
switch (G__119653) {
case (27):
if((!(active_QMARK_))){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));
} else {
return reset_q_BANG_();
}

break;
case (38):
frontend.util.stop(p1__119636_SHARP_);

return select_fn_BANG_(new cljs.core.Keyword(null,"up","up",-269712113));

break;
case (40):
frontend.util.stop(p1__119636_SHARP_);

return select_fn_BANG_(new cljs.core.Keyword(null,"down","down",1565245570));

break;
case (13):
var temp__5804__auto__ = (function (){var and__5041__auto__ = active_QMARK_;
if(and__5041__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,selected);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var topic = temp__5804__auto__;
frontend.util.stop(p1__119636_SHARP_);

var G__119654 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic)], null);
var G__119655 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__119654,G__119655) : nav_BANG_.call(null,G__119654,G__119655));
} else {
return null;
}

break;
default:
return new cljs.core.Keyword(null,"dune","dune",1737226819);

}
}),'ref':_STAR_input_ref},[]),((active_QMARK_)?daiquiri.core.create_element("button",{'style':{'right':(6),'top':(7)},'onClick':(function (){
reset_q_BANG_();

return focus_q_BANG_();
}),'className':"icon absolute opacity-50 hover:opacity-80 select-none"},[daiquiri.interpreter.interpret(frontend.ui.icon("x",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)))]):null)]),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(search_state))?daiquiri.core.create_element("div",{'className':"search-results-wrap"},[daiquiri.core.create_element("div",{'className':"results-wrap"},[cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function frontend$extensions$handbooks$core$iter__119656(s__119657){
return (new cljs.core.LazySeq(null,(function (){
var s__119657__$1 = s__119657;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__119657__$1);
if(temp__5804__auto__){
var s__119657__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__119657__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__119657__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__119659 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__119658 = (0);
while(true){
if((i__119658 < size__5519__auto__)){
var vec__119660 = cljs.core._nth(c__5518__auto__,i__119658);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119660,(0),null);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119660,(1),null);
cljs.core.chunk_append(b__119659,rum.core.with_key(frontend.extensions.handbooks.core.topic_card(topic,((function (i__119658,vec__119660,idx,topic,c__5518__auto__,size__5519__auto__,b__119659,s__119657__$2,temp__5804__auto__,_STAR_input_ref,vec__119637,q,set_q_BANG_,vec__119640,results,set_results_BANG_,vec__119643,selected,set_selected_BANG_,select_fn_BANG_,q__$1,active_QMARK_,reset_q_BANG_,focus_q_BANG_){
return (function (){
var G__119665 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic)], null);
var G__119666 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__119665,G__119666) : nav_BANG_.call(null,G__119665,G__119666));
});})(i__119658,vec__119660,idx,topic,c__5518__auto__,size__5519__auto__,b__119659,s__119657__$2,temp__5804__auto__,_STAR_input_ref,vec__119637,q,set_q_BANG_,vec__119640,results,set_results_BANG_,vec__119643,selected,set_selected_BANG_,select_fn_BANG_,q__$1,active_QMARK_,reset_q_BANG_,focus_q_BANG_))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,idx)], null)], null))], null)),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)));

var G__119802 = (i__119658 + (1));
i__119658 = G__119802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__119659),frontend$extensions$handbooks$core$iter__119656(cljs.core.chunk_rest(s__119657__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__119659),null);
}
} else {
var vec__119667 = cljs.core.first(s__119657__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119667,(0),null);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119667,(1),null);
return cljs.core.cons(rum.core.with_key(frontend.extensions.handbooks.core.topic_card(topic,((function (vec__119667,idx,topic,s__119657__$2,temp__5804__auto__,_STAR_input_ref,vec__119637,q,set_q_BANG_,vec__119640,results,set_results_BANG_,vec__119643,selected,set_selected_BANG_,select_fn_BANG_,q__$1,active_QMARK_,reset_q_BANG_,focus_q_BANG_){
return (function (){
var G__119672 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),topic,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(topic)], null);
var G__119673 = pane_state;
return (nav_BANG_.cljs$core$IFn$_invoke$arity$2 ? nav_BANG_.cljs$core$IFn$_invoke$arity$2(G__119672,G__119673) : nav_BANG_.call(null,G__119672,G__119673));
});})(vec__119667,idx,topic,s__119657__$2,temp__5804__auto__,_STAR_input_ref,vec__119637,q,set_q_BANG_,vec__119640,results,set_results_BANG_,vec__119643,selected,set_selected_BANG_,select_fn_BANG_,q__$1,active_QMARK_,reset_q_BANG_,focus_q_BANG_))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,idx)], null)], null))], null)),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(topic)),frontend$extensions$handbooks$core$iter__119656(cljs.core.rest(s__119657__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(results));
})())])]):null)]);
}),null,"frontend.extensions.handbooks.core/search-bar");
frontend.extensions.handbooks.core.link_card = rum.core.lazy_build(rum.core.build_defc,(function (opts,child){
var map__119677 = opts;
var map__119677__$1 = cljs.core.__destructure_map(map__119677);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119677__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var attrs119676 = (function (){var G__119678 = opts;
if(typeof href === 'string'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__119678,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.util.open_url(href);
}));
} else {
return G__119678;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119676))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["link-card"], null)], null),attrs119676], 0))):{'className':"link-card"}),((cljs.core.map_QMARK_(attrs119676))?[daiquiri.interpreter.interpret(child)]:[daiquiri.interpreter.interpret(attrs119676),daiquiri.interpreter.interpret(child)]));
}),null,"frontend.extensions.handbooks.core/link-card");
frontend.extensions.handbooks.core.panes_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.pane_dashboard], null),new cljs.core.Keyword(null,"topics","topics",625768208),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.pane_category_topics], null),new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.pane_topic_detail], null),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.extensions.handbooks.core.pane_settings], null)], null);
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.handbooks !== 'undefined') && (typeof frontend.extensions.handbooks.core !== 'undefined') && (typeof frontend.extensions.handbooks.core.discord_endpoint !== 'undefined')){
} else {
frontend.extensions.handbooks.core.discord_endpoint = "https://plugins.logseq.io/ds";
}
frontend.extensions.handbooks.core.footer_link_cards = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__119681 = frontend.rum.use_atom(frontend.extensions.handbooks.core._STAR_config);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119681,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119681,(1),null);
var discord_count = new cljs.core.Keyword(null,"discord-online","discord-online",2134040021).cljs$core$IFn$_invoke$arity$1(config);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if((((discord_count == null)) || (((Date.now() - new cljs.core.Keyword(null,"discord-online-created","discord-online-created",-1284739526).cljs$core$IFn$_invoke$arity$1(config)) > (((10) * (60)) * (1000)))))){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(window.fetch(frontend.extensions.handbooks.core.discord_endpoint),(function (p1__119679_SHARP_){
return p1__119679_SHARP_.json();
})),(function (p1__119680_SHARP_){
var temp__5804__auto__ = p1__119680_SHARP_.approximate_presence_count;
if(cljs.core.truth_(temp__5804__auto__)){
var count = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(frontend.extensions.handbooks.core._STAR_config,cljs.core.assoc,new cljs.core.Keyword(null,"discord-online","discord-online",2134040021),count.toLocaleString(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"discord-online-created","discord-online-created",-1284739526),Date.now()], 0));
} else {
return null;
}
}));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [discord_count], null));

return daiquiri.core.create_element(daiquiri.core.fragment,null,[daiquiri.core.create_element("div",{'style':{'paddingTop':"4px"},'className':"flex space-x-3"},[frontend.extensions.handbooks.core.link_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://discord.gg/KpN4eHY"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner.flex.space-x-1.flex-col","div.inner.flex.space-x-1.flex-col",1191635754),frontend.ui.icon("brand-discord",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-30",new cljs.core.Keyword(null,"size","size",1098693007),(26)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.font-medium.py-1","h1.font-medium.py-1",255670902),"Chat on Discord"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xs.leading-4.opacity-40","h2.text-xs.leading-4.opacity-40",-972896950),"Ask quick questions, meet fellow users, and learn new workflows."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.flex.items-center.pt-1.5","small.flex.items-center.pt-1.5",-524446070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.block.rounded-full.bg-green-500","i.block.rounded-full.bg-green-500",1711595098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"8px",new cljs.core.Keyword(null,"height","height",1025178622),"8px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-2.opacity-90","span.pl-2.opacity-90",-756222661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.opacity-60","strong.opacity-60",972256666),(function (){var or__5043__auto__ = discord_count;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "?";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70.font-light","span.opacity-70.font-light",1749010421)," users online"], null)], null)], null)], null)),frontend.extensions.handbooks.core.link_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1",new cljs.core.Keyword(null,"href","href",-793805698),"https://discuss.logseq.com"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner.flex.space-x-1.flex-col","div.inner.flex.space-x-1.flex-col",1191635754),frontend.ui.icon("message-dots",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"opacity-30",new cljs.core.Keyword(null,"size","size",1098693007),(26)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.font-medium.py-1","h1.font-medium.py-1",255670902),"Visit the forum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xs.leading-4.opacity-40","h2.text-xs.leading-4.opacity-40",-972896950),"Give feedback, request features, and have in-depth conversations."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.flex.items-center.pt-1.5","small.flex.items-center.pt-1.5",-524446070),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.flex.items-center.opacity-50","i.flex.items-center.opacity-50",279473892),frontend.ui.icon("bolt",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(14)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-1.opacity-90","span.pl-1.opacity-90",1964490413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.opacity-60","strong.opacity-60",972256666),"800+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.opacity-70.font-light","span.opacity-70.font-light",1749010421)," monthly posts"], null)], null)], null)], null))])]);
}),null,"frontend.extensions.handbooks.core/footer-link-cards");
frontend.extensions.handbooks.core.content = rum.core.lazy_build(rum.core.build_defc,(function (){
var vec__119690 = rum.core.use_state(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),null,frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","title","handbook/title",630546951)], 0))], null));
var active_pane_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119690,(0),null);
var set_active_pane_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119690,(1),null);
var vec__119693 = rum.core.use_state(null);
var handbooks_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119693,(0),null);
var set_handbooks_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119693,(1),null);
var vec__119696 = rum.core.use_state(null);
var handbooks_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119696,(0),null);
var set_handbooks_nodes_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119696,(1),null);
var vec__119699 = rum.core.use_state(cljs.core.List.EMPTY);
var history_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119699,(0),null);
var set_history_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119699,(1),null);
var vec__119702 = rum.core.use_state(frontend.storage.get(new cljs.core.Keyword(null,"handbooks-dev-watch?","handbooks-dev-watch?",-372916840)));
var dev_watch_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119702,(0),null);
var set_dev_watch_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119702,(1),null);
var vec__119705 = rum.core.use_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),false], null));
var search_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119705,(0),null);
var set_search_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119705,(1),null);
var reset_handbooks_BANG_ = (function (){
var G__119711 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"data","data",-232669377),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null);
return (set_handbooks_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_handbooks_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119711) : set_handbooks_state_BANG_.call(null,G__119711));
});
var update_handbooks_BANG_ = (function (p1__119684_SHARP_){
var G__119712 = (function (v){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,p1__119684_SHARP_], 0));
});
return (set_handbooks_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_handbooks_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119712) : set_handbooks_state_BANG_.call(null,G__119712));
});
var load_handbooks_BANG_ = (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(handbooks_state))){
return null;
} else {
reset_handbooks_BANG_();

update_handbooks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"pending","pending",-220036727)], null));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(fetch(frontend.extensions.handbooks.core.get_handbooks_endpoint("/handbooks.edn")),(function (res){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(res.text(),(function (data){
return promesa.protocols._promise(update_handbooks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(data)], null)));
}));
}));
})),(function (p1__119685_SHARP_){
return update_handbooks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__119685_SHARP_)], null));
})),(function (){
return update_handbooks_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503)], null));
}));
}
});
var active_pane_name = cljs.core.first(active_pane_state);
var pane_render = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.extensions.handbooks.core.panes_mapping,active_pane_name));
var pane_dashboard_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),active_pane_name);
var pane_settings_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings","settings",1556144875),active_pane_name);
var pane_topic_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),active_pane_name);
var force_nav_dashboard_BANG_ = (function (){
var G__119713_119803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null);
(set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119713_119803) : set_active_pane_state_BANG_.call(null,G__119713_119803));

var G__119714 = cljs.core.List.EMPTY;
return (set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119714) : set_history_state_BANG_.call(null,G__119714));
});
var handbooks_loaded_QMARK_ = ((cljs.core.seq(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(handbooks_state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(handbooks_state))));
var handbooks_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(handbooks_state);
var nav_to_pane_BANG_ = (function (next_state,prev_state){
var next_key_119804 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(next_state));
var prev_key_119805 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(prev_state));
var in_chapters_QMARK__119806 = (function (){var and__5041__auto__ = prev_key_119805;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = next_key_119804;
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = clojure.string.includes_QMARK_(prev_key_119805,"/");
if(and__5041__auto____$2){
var or__5043__auto__ = clojure.string.starts_with_QMARK_(next_key_119804,prev_key_119805);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.handbooks.core.parse_parent_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_key_119805,next_key_119804], null)));
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(in_chapters_QMARK__119806)){
} else {
var G__119715_119807 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(history_state),prev_state);
(set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119715_119807) : set_history_state_BANG_.call(null,G__119715_119807));
}

return (set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1(next_state) : set_active_pane_state_BANG_.call(null,next_state));
});
var vec__119708 = rum.core.use_state(false);
var scrolled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119708,(0),null);
var set_scrolled_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119708,(1),null);
var on_scroll = rum.core.use_memo.cljs$core$IFn$_invoke$arity$2((function (){
return frontend.util.debounce.cljs$core$IFn$_invoke$arity$2((100),(function (e){
var G__119716 = (!((e.target.scrollTop < (10))));
return (set_scrolled_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_scrolled_BANG_.cljs$core$IFn$_invoke$arity$1(G__119716) : set_scrolled_BANG_.call(null,G__119716));
}));
}),cljs.core.PersistentVector.EMPTY);
rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
return load_handbooks_BANG_();
}),cljs.core.PersistentVector.EMPTY);

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.seq(handbooks_nodes)){
var c = new cljs.core.Keyword("handbook","route-chan","handbook/route-chan",1649058330).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
var c__34483__auto___119808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_119742){
var state_val_119743 = (state_119742[(1)]);
if((state_val_119743 === (7))){
var inst_119738 = (state_119742[(2)]);
var state_119742__$1 = state_119742;
var statearr_119744_119809 = state_119742__$1;
(statearr_119744_119809[(2)] = inst_119738);

(statearr_119744_119809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119743 === (1))){
var state_119742__$1 = state_119742;
var statearr_119745_119810 = state_119742__$1;
(statearr_119745_119810[(2)] = null);

(statearr_119745_119810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119743 === (4))){
var inst_119719 = (state_119742[(7)]);
var inst_119719__$1 = (state_119742[(2)]);
var inst_119720 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_119719__$1,new cljs.core.Keyword(null,"return","return",-1891502105));
var state_119742__$1 = (function (){var statearr_119746 = state_119742;
(statearr_119746[(7)] = inst_119719__$1);

return statearr_119746;
})();
if(inst_119720){
var statearr_119747_119811 = state_119742__$1;
(statearr_119747_119811[(1)] = (5));

} else {
var statearr_119748_119812 = state_119742__$1;
(statearr_119748_119812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119743 === (6))){
var state_119742__$1 = state_119742;
var statearr_119749_119813 = state_119742__$1;
(statearr_119749_119813[(2)] = null);

(statearr_119749_119813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119743 === (3))){
var inst_119740 = (state_119742[(2)]);
var state_119742__$1 = state_119742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119742__$1,inst_119740);
} else {
if((state_val_119743 === (2))){
var state_119742__$1 = state_119742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119742__$1,(4),c);
} else {
if((state_val_119743 === (9))){
var state_119742__$1 = state_119742;
var statearr_119750_119814 = state_119742__$1;
(statearr_119750_119814[(2)] = null);

(statearr_119750_119814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119743 === (5))){
var inst_119719 = (state_119742[(7)]);
var inst_119722 = (state_119742[(8)]);
var inst_119722__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(handbooks_nodes,inst_119719);
var state_119742__$1 = (function (){var statearr_119751 = state_119742;
(statearr_119751[(8)] = inst_119722__$1);

return statearr_119751;
})();
if(cljs.core.truth_(inst_119722__$1)){
var statearr_119752_119815 = state_119742__$1;
(statearr_119752_119815[(1)] = (8));

} else {
var statearr_119753_119816 = state_119742__$1;
(statearr_119753_119816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119743 === (10))){
var inst_119734 = (state_119742[(2)]);
var state_119742__$1 = (function (){var statearr_119754 = state_119742;
(statearr_119754[(9)] = inst_119734);

return statearr_119754;
})();
var statearr_119755_119817 = state_119742__$1;
(statearr_119755_119817[(2)] = null);

(statearr_119755_119817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119743 === (8))){
var inst_119722 = (state_119742[(8)]);
var inst_119724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119725 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","title","handbook/title",630546951)], 0));
var inst_119726 = [new cljs.core.Keyword(null,"topic-detail","topic-detail",-2143221053),inst_119722,inst_119725];
var inst_119727 = (new cljs.core.PersistentVector(null,3,(5),inst_119724,inst_119726,null));
var inst_119728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119729 = [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)];
var inst_119730 = (new cljs.core.PersistentVector(null,1,(5),inst_119728,inst_119729,null));
var inst_119731 = nav_to_pane_BANG_(inst_119727,inst_119730);
var state_119742__$1 = state_119742;
var statearr_119756_119818 = state_119742__$1;
(statearr_119756_119818[(2)] = inst_119731);

(statearr_119756_119818[(1)] = (10));


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
});
return (function() {
var frontend$extensions$handbooks$core$state_machine__34379__auto__ = null;
var frontend$extensions$handbooks$core$state_machine__34379__auto____0 = (function (){
var statearr_119757 = [null,null,null,null,null,null,null,null,null,null];
(statearr_119757[(0)] = frontend$extensions$handbooks$core$state_machine__34379__auto__);

(statearr_119757[(1)] = (1));

return statearr_119757;
});
var frontend$extensions$handbooks$core$state_machine__34379__auto____1 = (function (state_119742){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_119742);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e119758){var ex__34382__auto__ = e119758;
var statearr_119759_119819 = state_119742;
(statearr_119759_119819[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_119742[(4)]))){
var statearr_119760_119820 = state_119742;
(statearr_119760_119820[(1)] = cljs.core.first((state_119742[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__119821 = state_119742;
state_119742 = G__119821;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$handbooks$core$state_machine__34379__auto__ = function(state_119742){
switch(arguments.length){
case 0:
return frontend$extensions$handbooks$core$state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$handbooks$core$state_machine__34379__auto____1.call(this,state_119742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$handbooks$core$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$handbooks$core$state_machine__34379__auto____0;
frontend$extensions$handbooks$core$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$handbooks$core$state_machine__34379__auto____1;
return frontend$extensions$handbooks$core$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_119761 = f__34484__auto__();
(statearr_119761[(6)] = c__34483__auto___119808);

return statearr_119761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return (function (){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_119765){
var state_val_119766 = (state_119765[(1)]);
if((state_val_119766 === (1))){
var state_119765__$1 = state_119765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_119765__$1,(2),c,new cljs.core.Keyword(null,"return","return",-1891502105));
} else {
if((state_val_119766 === (2))){
var inst_119763 = (state_119765[(2)]);
var state_119765__$1 = state_119765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119765__$1,inst_119763);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$handbooks$core$state_machine__34379__auto__ = null;
var frontend$extensions$handbooks$core$state_machine__34379__auto____0 = (function (){
var statearr_119767 = [null,null,null,null,null,null,null];
(statearr_119767[(0)] = frontend$extensions$handbooks$core$state_machine__34379__auto__);

(statearr_119767[(1)] = (1));

return statearr_119767;
});
var frontend$extensions$handbooks$core$state_machine__34379__auto____1 = (function (state_119765){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_119765);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e119768){var ex__34382__auto__ = e119768;
var statearr_119769_119822 = state_119765;
(statearr_119769_119822[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_119765[(4)]))){
var statearr_119770_119823 = state_119765;
(statearr_119770_119823[(1)] = cljs.core.first((state_119765[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__119824 = state_119765;
state_119765 = G__119824;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$handbooks$core$state_machine__34379__auto__ = function(state_119765){
switch(arguments.length){
case 0:
return frontend$extensions$handbooks$core$state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$handbooks$core$state_machine__34379__auto____1.call(this,state_119765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$handbooks$core$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$handbooks$core$state_machine__34379__auto____0;
frontend$extensions$handbooks$core$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$handbooks$core$state_machine__34379__auto____1;
return frontend$extensions$handbooks$core$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_119771 = f__34484__auto__();
(statearr_119771[(6)] = c__34483__auto__);

return statearr_119771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handbooks_nodes], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
var _STAR_cnt_len = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var check_BANG_ = (function (){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.bind.cljs$core$IFn$_invoke$arity$2(null,(function (___37159__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(fetch(frontend.extensions.handbooks.core.get_handbooks_endpoint("/handbooks.edn"),({"method": "HEAD"})),(function (res){
return promesa.protocols._promise((function (){var temp__5804__auto__ = res.headers.get("content-length");
if(cljs.core.truth_(temp__5804__auto__)){
var cl = temp__5804__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cnt_len),cl)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[Handbooks] dev reload!"], 0));

load_handbooks_BANG_();
} else {
}

return cljs.core.reset_BANG_(_STAR_cnt_len,cl);
} else {
return null;
}
})());
}));
})),(function (p1__119686_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[Handbooks] dev check Error:",p1__119686_SHARP_], 0));
}));
});
var timer0 = (cljs.core.truth_(dev_watch_QMARK_)?setInterval(check_BANG_,(2000)):(0));
return (function (){
return clearInterval(timer0);
});
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dev_watch_QMARK_], null));

rum.core.use_effect_BANG_.cljs$core$IFn$_invoke$arity$2((function (){
if(cljs.core.truth_(handbooks_data)){
var nodes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__119687_SHARP_,p2__119688_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__119687_SHARP_,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__119688_SHARP_);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "__root";
}
})(),frontend.extensions.handbooks.core.bind_parent_key(p2__119688_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),handbooks_data));
(set_handbooks_nodes_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_handbooks_nodes_BANG_.cljs$core$IFn$_invoke$arity$1(nodes) : set_handbooks_nodes_BANG_.call(null,nodes));

return (window.handbook_nodes = cljs_bean.core.__GT_js(nodes));
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handbooks_data], null));

return daiquiri.core.create_element("div",{'onScroll':on_scroll,'className':daiquiri.util.join_classes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__handbooks-content",frontend.util.classnames(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search-active","search-active",913672682),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(search_state),new cljs.core.Keyword(null,"scrolled","scrolled",1345586855),scrolled_QMARK_], null)], null))], null))},[daiquiri.core.create_element("div",{'className':"pane-wrap"},[daiquiri.core.create_element("div",{'className':"hd flex justify-between select-none draggable-handle"},[(function (){var attrs119780 = ((pane_dashboard_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","title","handbook/title",630546951)], 0))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.active:opacity-80.flex.items-center.cursor-pointer","button.active:opacity-80.flex.items-center.cursor-pointer",42988709),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var prev = cljs.core.first(history_state);
var prev__$1 = (function (){var G__119782 = prev;
if((cljs.core.seq(prev) == null)){
var fexpr__119783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null);
return (fexpr__119783.cljs$core$IFn$_invoke$arity$1 ? fexpr__119783.cljs$core$IFn$_invoke$arity$1(G__119782) : fexpr__119783.call(null,G__119782));
} else {
return G__119782;
}
})();
(set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_active_pane_state_BANG_.cljs$core$IFn$_invoke$arity$1(prev__$1) : set_active_pane_state_BANG_.call(null,prev__$1));

var G__119784 = cljs.core.rest(history_state);
return (set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_history_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__119784) : set_history_state_BANG_.call(null,G__119784));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-2.flex.items-center","span.pr-2.flex.items-center",1598272298),frontend.ui.icon("chevron-left")], null),(function (){var title = (function (){var or__5043__auto__ = cljs.core.last(active_pane_state);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","title","handbook/title",630546951)], 0));
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return "";
}
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.truncate.title","span.truncate.title",900934232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null),title], null);
})()], null));
return daiquiri.core.create_element("h1",((cljs.core.map_QMARK_(attrs119780))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-xl","flex","items-center","font-bold"], null)], null),attrs119780], 0))):{'className':"text-xl flex items-center font-bold"}),((cljs.core.map_QMARK_(attrs119780))?null:[daiquiri.interpreter.interpret(attrs119780)]));
})(),(function (){var attrs119781 = (((cljs.core.count(history_state) > (1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.flex.items-center","a.flex.items-center",46069439),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","home","handbook/home",-85236773)], 0)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return force_nav_dashboard_BANG_();
})], null),frontend.ui.icon("home")], null):null);
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119781))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","space-x-3"], null)], null),attrs119781], 0))):{'className':"flex items-center space-x-3"}),((cljs.core.map_QMARK_(attrs119781))?[((pane_topic_QMARK_)?daiquiri.core.create_element("a",{'aria-label':"Copy topic link",'tabIndex':"0",'onClick':(function (){
var s = ["logseq://handbook/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(active_pane_state)))].join('');
frontend.util.copy_to_clipboard_BANG_(s);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.block","strong.block",-1457813199),"Handbook link copied!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.opacity-50","label.opacity-50",-1137064458),s], null)], null),new cljs.core.Keyword(null,"success","success",1890645906));
}),'className':"flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon("copy"))]):null),(cljs.core.truth_(frontend.state.developer_mode_QMARK_())?daiquiri.core.create_element("a",{'aria-label':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","settings","handbook/settings",1558555811)], 0)),'tabIndex':"0",'onClick':(function (){
return nav_to_pane_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),null,"Settings"], null),active_pane_state);
}),'className':"flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings"))]):null),daiquiri.core.create_element("a",{'aria-label':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","close","handbook/close",1837454534)], 0)),'tabIndex':"0",'onClick':(function (){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));
}),'className':"flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon("x"))])]:[daiquiri.interpreter.interpret(attrs119781),((pane_topic_QMARK_)?daiquiri.core.create_element("a",{'aria-label':"Copy topic link",'tabIndex':"0",'onClick':(function (){
var s = ["logseq://handbook/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second(active_pane_state)))].join('');
frontend.util.copy_to_clipboard_BANG_(s);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.block","strong.block",-1457813199),"Handbook link copied!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.opacity-50","label.opacity-50",-1137064458),s], null)], null),new cljs.core.Keyword(null,"success","success",1890645906));
}),'className':"flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon("copy"))]):null),(cljs.core.truth_(frontend.state.developer_mode_QMARK_())?daiquiri.core.create_element("a",{'aria-label':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","settings","handbook/settings",1558555811)], 0)),'tabIndex':"0",'onClick':(function (){
return nav_to_pane_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),null,"Settings"], null),active_pane_state);
}),'className':"flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon("settings"))]):null),daiquiri.core.create_element("a",{'aria-label':frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("handbook","close","handbook/close",1837454534)], 0)),'tabIndex':"0",'onClick':(function (){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));
}),'className':"flex items-center"},[daiquiri.interpreter.interpret(frontend.ui.icon("x"))])]));
})()]),(((((!(pane_settings_QMARK_))) && ((!(handbooks_loaded_QMARK_)))))?(function (){var attrs119772 = ((cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(handbooks_state)))?frontend.ui.loading.cljs$core$IFn$_invoke$arity$1("Loading ..."):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(handbooks_state)], null));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs119772))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","items-center","justify-center","pt-32"], null)], null),attrs119772], 0))):{'className':"flex items-center justify-center pt-32"}),((cljs.core.map_QMARK_(attrs119772))?null:[daiquiri.interpreter.interpret(attrs119772)]));
})():null),((((pane_settings_QMARK_) || (handbooks_loaded_QMARK_)))?(function (){var attrs119773 = ((((pane_dashboard_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"topics","topics",625768208),active_pane_name))))?frontend.extensions.handbooks.core.search_bar(active_pane_state,nav_to_pane_BANG_,handbooks_nodes,search_state,set_search_state_BANG_):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs119773))?daiquiri.interpreter.element_attributes(attrs119773):null),((cljs.core.map_QMARK_(attrs119773))?[(cljs.core.truth_(pane_render)?daiquiri.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pane_render,(function (){var G__119786 = active_pane_name;
var G__119786__$1 = (((G__119786 instanceof cljs.core.Keyword))?G__119786.fqn:null);
switch (G__119786__$1) {
case "settings":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dev_watch_QMARK_,(function (p1__119689_SHARP_){
(set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__119689_SHARP_) : set_dev_watch_QMARK_.call(null,p1__119689_SHARP_));

return frontend.storage.set(new cljs.core.Keyword(null,"handbooks-dev-watch?","handbooks-dev-watch?",-372916840),p1__119689_SHARP_);
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handbooks_nodes,active_pane_state,nav_to_pane_BANG_], null);

}
})())):null)]:[daiquiri.interpreter.interpret(attrs119773),(cljs.core.truth_(pane_render)?daiquiri.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pane_render,(function (){var G__119788 = active_pane_name;
var G__119788__$1 = (((G__119788 instanceof cljs.core.Keyword))?G__119788.fqn:null);
switch (G__119788__$1) {
case "settings":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dev_watch_QMARK_,(function (p1__119689_SHARP_){
(set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? set_dev_watch_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__119689_SHARP_) : set_dev_watch_QMARK_.call(null,p1__119689_SHARP_));

return frontend.storage.set(new cljs.core.Keyword(null,"handbooks-dev-watch?","handbooks-dev-watch?",-372916840),p1__119689_SHARP_);
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handbooks_nodes,active_pane_state,nav_to_pane_BANG_], null);

}
})())):null)]));
})():null)]),((handbooks_loaded_QMARK_)?((pane_dashboard_QMARK_)?daiquiri.core.create_element("div",{'className':"ft"},[frontend.extensions.handbooks.core.footer_link_cards()]):null):null)]);
}),null,"frontend.extensions.handbooks.core/content");

//# sourceMappingURL=frontend.extensions.handbooks.core.js.map
