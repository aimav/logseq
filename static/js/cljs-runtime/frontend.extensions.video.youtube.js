goog.provide('frontend.extensions.video.youtube');
goog.scope(function(){
  frontend.extensions.video.youtube.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.extensions.video.youtube.load_yt_script = (function frontend$extensions$video$youtube$load_yt_script(){
console.log("load yt script");

var tag = document.createElement("script");
var first_script_tag = cljs.core.first(document.getElementsByTagName("script"));
var parent_node = first_script_tag.parentNode;
(tag.src = "https://www.youtube.com/iframe_api");

return parent_node.insertBefore(tag,first_script_tag);
});
frontend.extensions.video.youtube.load_youtube_api = (function frontend$extensions$video$youtube$load_youtube_api(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(window.YT)){
cljs.core.async.close_BANG_(c);
} else {
(window.onYouTubeIframeAPIReady = (function (){
return cljs.core.async.close_BANG_(c);
}));

frontend.extensions.video.youtube.load_yt_script();
}

return c;
});
frontend.extensions.video.youtube.register_player = (function frontend$extensions$video$youtube$register_player(state){
try{var id = cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var node = rum.core.dom_node(state);
if(cljs.core.truth_(node)){
var player = (new window.YT.Player(node,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, ["onReady",(function (_e){
return console.log(id," ready");
})], null)], null))));
return frontend.state.update_state_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("youtube","players","youtube/players",1844913740)], null),(function (players){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(players,id,player);
}));
} else {
return null;
}
}catch (e101561){var _e = e101561;
return null;
}});
frontend.extensions.video.youtube.youtube_video = rum.core.lazy_build(rum.core.build_defcs,(function (state,id,p__101563){
var map__101564 = p__101563;
var map__101564__$1 = cljs.core.__destructure_map(map__101564);
var _opts = map__101564__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101564__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101564__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101564__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var width__$1 = (function (){var or__5043__auto__ = width;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var x__5131__auto__ = (frontend.util.get_width() - (96));
var y__5132__auto__ = (560);
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
}
})();
var height__$1 = (function (){var or__5043__auto__ = height;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return ((width__$1 * ((315) / (560))) | (0));
}
})();
var url = ["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"?enablejsapi=1"].join('');
var url__$1 = (cljs.core.truth_(start)?[url,"&start=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)].join(''):url);
return daiquiri.core.create_element("iframe",{'id':["youtube-player-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),'allowFullScreen':"allowfullscreen",'allow':"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope",'frameBorder':"0",'src':url__$1,'height':height__$1,'width':width__$1},[]);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,rum.core.local.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword("frontend.extensions.video.youtube","player","frontend.extensions.video.youtube/player",-814163162)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var c__34483__auto___101601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_101570){
var state_val_101571 = (state_101570[(1)]);
if((state_val_101571 === (1))){
var inst_101565 = frontend.extensions.video.youtube.load_youtube_api();
var state_101570__$1 = state_101570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_101570__$1,(2),inst_101565);
} else {
if((state_val_101571 === (2))){
var inst_101567 = (state_101570[(2)]);
var inst_101568 = frontend.extensions.video.youtube.register_player(state);
var state_101570__$1 = (function (){var statearr_101573 = state_101570;
(statearr_101573[(7)] = inst_101567);

return statearr_101573;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_101570__$1,inst_101568);
} else {
return null;
}
}
});
return (function() {
var frontend$extensions$video$youtube$state_machine__34379__auto__ = null;
var frontend$extensions$video$youtube$state_machine__34379__auto____0 = (function (){
var statearr_101574 = [null,null,null,null,null,null,null,null];
(statearr_101574[(0)] = frontend$extensions$video$youtube$state_machine__34379__auto__);

(statearr_101574[(1)] = (1));

return statearr_101574;
});
var frontend$extensions$video$youtube$state_machine__34379__auto____1 = (function (state_101570){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_101570);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e101575){var ex__34382__auto__ = e101575;
var statearr_101576_101602 = state_101570;
(statearr_101576_101602[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_101570[(4)]))){
var statearr_101577_101603 = state_101570;
(statearr_101577_101603[(1)] = cljs.core.first((state_101570[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101604 = state_101570;
state_101570 = G__101604;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$video$youtube$state_machine__34379__auto__ = function(state_101570){
switch(arguments.length){
case 0:
return frontend$extensions$video$youtube$state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$video$youtube$state_machine__34379__auto____1.call(this,state_101570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$video$youtube$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$video$youtube$state_machine__34379__auto____0;
frontend$extensions$video$youtube$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$video$youtube$state_machine__34379__auto____1;
return frontend$extensions$video$youtube$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_101578 = f__34484__auto__();
(statearr_101578[(6)] = c__34483__auto___101601);

return statearr_101578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));


return state;
})], null)], null),"frontend.extensions.video.youtube/youtube-video");
frontend.extensions.video.youtube.seconds__GT_display = (function frontend$extensions$video$youtube$seconds__GT_display(seconds){
var seconds__$1 = (seconds | (0));
var hours = cljs.core.quot(seconds__$1,(3600));
var minutes = cljs.core.mod(cljs.core.quot(seconds__$1,(60)),(60));
var seconds__$2 = cljs.core.mod(seconds__$1,(60));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
if((((idx > (0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"00")))){
return v;
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
if((v < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hours,minutes,seconds__$2], null))));
});
frontend.extensions.video.youtube.dom_after_video_node_QMARK_ = (function frontend$extensions$video$youtube$dom_after_video_node_QMARK_(video_node,target){
return (!(((video_node.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING) === (0))));
});
frontend.extensions.video.youtube.get_player = (function frontend$extensions$video$youtube$get_player(target){
var temp__5804__auto__ = cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__101583_SHARP_){
return frontend.extensions.video.youtube.dom_after_video_node_QMARK_(p1__101583_SHARP_,target);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (node){
var src = frontend.extensions.video.youtube.goog$module$goog$object.get(node,"src","");
return clojure.string.includes_QMARK_(src,"youtube.com");
}),document.getElementsByTagName("iframe"))));
if(cljs.core.truth_(temp__5804__auto__)){
var iframe = temp__5804__auto__;
var id = frontend.extensions.video.youtube.goog$module$goog$object.get(iframe,"id","");
var id__$1 = clojure.string.replace_first(id,/youtube-player-/,"");
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.Keyword("youtube","players","youtube/players",1844913740)),id__$1);
} else {
return null;
}
});
frontend.extensions.video.youtube.timestamp = rum.core.lazy_build(rum.core.build_defc,(function (seconds){
return daiquiri.core.create_element("a",{'onClick':(function (e){
frontend.util.stop(e);

var temp__5804__auto__ = frontend.extensions.video.youtube.get_player(e.target);
if(cljs.core.truth_(temp__5804__auto__)){
var player = temp__5804__auto__;
return player.seekTo(seconds,true);
} else {
return null;
}
}),'className':"svg-small youtube-timestamp"},[daiquiri.interpreter.interpret(frontend.components.svg.clock),frontend.extensions.video.youtube.seconds__GT_display(seconds)]);
}),null,"frontend.extensions.video.youtube/timestamp");
frontend.extensions.video.youtube.gen_youtube_ts_macro = (function frontend$extensions$video$youtube$gen_youtube_ts_macro(){
var temp__5802__auto__ = frontend.extensions.video.youtube.get_player(frontend.state.get_input());
if(cljs.core.truth_(temp__5802__auto__)){
var player = temp__5802__auto__;
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("{{youtube-timestamp %s}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Math.floor(player.getCurrentTime())], 0));
} else {
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("Please embed a YouTube video at first, then use this icon.\nRemember: You can paste a raw YouTube url as embedded video on mobile.",new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return null;
} else {
return null;
}
}
});
frontend.extensions.video.youtube.parse_timestamp = (function frontend$extensions$video$youtube$parse_timestamp(timestamp){
var reg = /^(?:(\d+):)?([0-5]?\d):([0-5]?\d)$/;
var reg_number = /^\d+$/;
var timestamp__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(timestamp);
var total_seconds = (function (){var G__101600 = cljs.core.re_matches(reg_number,timestamp__$1);
if((G__101600 == null)){
return null;
} else {
return frontend.util.safe_parse_int(G__101600);
}
})();
var vec__101594 = cljs.core.re_matches(reg,timestamp__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101594,(0),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101594,(1),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101594,(2),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101594,(3),null);
var vec__101597 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__101589_SHARP_){
if((p1__101589_SHARP_ == null)){
return (0);
} else {
return frontend.util.safe_parse_int(p1__101589_SHARP_);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hours,minutes,seconds], null));
var hours__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101597,(0),null);
var minutes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101597,(1),null);
var seconds__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101597,(2),null);
if(cljs.core.truth_(total_seconds)){
return total_seconds;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = minutes__$1;
if(cljs.core.truth_(and__5041__auto__)){
return seconds__$1;
} else {
return and__5041__auto__;
}
})())){
return ((((3600) * hours__$1) + ((60) * minutes__$1)) + seconds__$1);
} else {
return null;

}
}
});

//# sourceMappingURL=frontend.extensions.video.youtube.js.map
