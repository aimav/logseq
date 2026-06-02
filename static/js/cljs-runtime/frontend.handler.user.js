goog.provide('frontend.handler.user');
frontend.handler.user.set_preferred_format_BANG_ = (function frontend$handler$user$set_preferred_format_BANG_(format){
if(cljs.core.truth_(format)){
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121),format);

return frontend.state.set_preferred_format_BANG_(format);
} else {
return null;
}
});
frontend.handler.user.set_preferred_workflow_BANG_ = (function frontend$handler$user$set_preferred_workflow_BANG_(workflow){
if(cljs.core.truth_(workflow)){
frontend.handler.config.set_config_BANG_(new cljs.core.Keyword(null,"preferred-workflow","preferred-workflow",-1794663444),workflow);

return frontend.state.set_preferred_workflow_BANG_(workflow);
} else {
return null;
}
});
frontend.handler.user.decode_username = (function frontend$handler$user$decode_username(username){
var arr = (new Uint8Array(cljs.core.count(username)));
var seq__91029_91363 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(username)));
var chunk__91030_91364 = null;
var count__91031_91365 = (0);
var i__91032_91366 = (0);
while(true){
if((i__91032_91366 < count__91031_91365)){
var i_91367 = chunk__91030_91364.cljs$core$IIndexed$_nth$arity$2(null,i__91032_91366);
(arr[i_91367] = username.charCodeAt(i_91367));


var G__91368 = seq__91029_91363;
var G__91369 = chunk__91030_91364;
var G__91370 = count__91031_91365;
var G__91371 = (i__91032_91366 + (1));
seq__91029_91363 = G__91368;
chunk__91030_91364 = G__91369;
count__91031_91365 = G__91370;
i__91032_91366 = G__91371;
continue;
} else {
var temp__5804__auto___91372 = cljs.core.seq(seq__91029_91363);
if(temp__5804__auto___91372){
var seq__91029_91373__$1 = temp__5804__auto___91372;
if(cljs.core.chunked_seq_QMARK_(seq__91029_91373__$1)){
var c__5565__auto___91374 = cljs.core.chunk_first(seq__91029_91373__$1);
var G__91375 = cljs.core.chunk_rest(seq__91029_91373__$1);
var G__91376 = c__5565__auto___91374;
var G__91377 = cljs.core.count(c__5565__auto___91374);
var G__91378 = (0);
seq__91029_91363 = G__91375;
chunk__91030_91364 = G__91376;
count__91031_91365 = G__91377;
i__91032_91366 = G__91378;
continue;
} else {
var i_91379 = cljs.core.first(seq__91029_91373__$1);
(arr[i_91379] = username.charCodeAt(i_91379));


var G__91380 = cljs.core.next(seq__91029_91373__$1);
var G__91381 = null;
var G__91382 = (0);
var G__91383 = (0);
seq__91029_91363 = G__91380;
chunk__91030_91364 = G__91381;
count__91031_91365 = G__91382;
i__91032_91366 = G__91383;
continue;
}
} else {
}
}
break;
}

return (new TextDecoder("utf-8")).decode(arr);
});
frontend.handler.user.parse_jwt = (function frontend$handler$user$parse_jwt(jwt){
var G__91034 = jwt;
var G__91034__$1 = (((G__91034 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__91034,"."));
var G__91034__$2 = (((G__91034__$1 == null))?null:cljs.core.second(G__91034__$1));
var G__91034__$3 = (((G__91034__$2 == null))?null:(function (p1__91033_SHARP_){
return goog.crypt.base64.decodeString(p1__91033_SHARP_,true);
})(G__91034__$2));
var G__91034__$4 = (((G__91034__$3 == null))?null:JSON.parse(G__91034__$3));
var G__91034__$5 = (((G__91034__$4 == null))?null:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(G__91034__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
if((G__91034__$5 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__91034__$5,new cljs.core.Keyword(null,"cognito:username","cognito:username",-2023950904),frontend.handler.user.decode_username);
}
});
frontend.handler.user.expired_QMARK_ = (function frontend$handler$user$expired_QMARK_(parsed_jwt){
var G__91035 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__91035__$1 = (((G__91035 == null))?null:cljs_time.coerce.from_long(G__91035));
if((G__91035__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__91035__$1,cljs_time.core.now());
}
});
/**
 * return true when jwt will expire after 1h
 */
frontend.handler.user.almost_expired_QMARK_ = (function frontend$handler$user$almost_expired_QMARK_(parsed_jwt){
var G__91036 = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(parsed_jwt));
var G__91036__$1 = (((G__91036 == null))?null:cljs_time.coerce.from_long(G__91036));
if((G__91036__$1 == null)){
return null;
} else {
return cljs_time.core.before_QMARK_(G__91036__$1,cljs_time.core.from_now(cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((1))));
}
});
frontend.handler.user.almost_expired_or_expired_QMARK_ = (function frontend$handler$user$almost_expired_or_expired_QMARK_(parsed_jwt){
var or__5043__auto__ = frontend.handler.user.almost_expired_QMARK_(parsed_jwt);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.user.expired_QMARK_(parsed_jwt);
}
});
frontend.handler.user.email = (function frontend$handler$user$email(){
var G__91037 = frontend.state.get_auth_id_token();
var G__91037__$1 = (((G__91037 == null))?null:frontend.handler.user.parse_jwt(G__91037));
if((G__91037__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(G__91037__$1);
}
});
frontend.handler.user.username = (function frontend$handler$user$username(){
var G__91038 = frontend.state.get_auth_id_token();
var G__91038__$1 = (((G__91038 == null))?null:frontend.handler.user.parse_jwt(G__91038));
if((G__91038__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"cognito:username","cognito:username",-2023950904).cljs$core$IFn$_invoke$arity$1(G__91038__$1);
}
});
frontend.handler.user.user_uuid = (function frontend$handler$user$user_uuid(){
var G__91039 = frontend.state.get_auth_id_token();
var G__91039__$1 = (((G__91039 == null))?null:frontend.handler.user.parse_jwt(G__91039));
if((G__91039__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(G__91039__$1);
}
});
frontend.handler.user.logged_in_QMARK_ = (function frontend$handler$user$logged_in_QMARK_(){
return (!((frontend.state.get_auth_refresh_token() == null)));
});
frontend.handler.user.set_token_to_localstorage_BANG_ = (function frontend$handler$user$set_token_to_localstorage_BANG_(var_args){
var G__91041 = arguments.length;
switch (G__91041) {
case 2:
return frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id_token,access_token){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),"set-token-to-localstorage!"], 0));

localStorage.setItem("id-token",id_token);

return localStorage.setItem("access-token",access_token);
}));

(frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id_token,access_token,refresh_token){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),"set-token-to-localstorage!"], 0));

localStorage.setItem("id-token",id_token);

localStorage.setItem("access-token",access_token);

return localStorage.setItem("refresh-token",refresh_token);
}));

(frontend.handler.user.set_token_to_localstorage_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Clear tokens for cognito's localstorage, prefix is 'CognitoIdentityServiceProvider'
 */
frontend.handler.user.clear_cognito_tokens_BANG_ = (function frontend$handler$user$clear_cognito_tokens_BANG_(){
var prefix = "CognitoIdentityServiceProvider.";
var seq__91042 = cljs.core.seq(Object.keys(localStorage));
var chunk__91043 = null;
var count__91044 = (0);
var i__91045 = (0);
while(true){
if((i__91045 < count__91044)){
var key = chunk__91043.cljs$core$IIndexed$_nth$arity$2(null,i__91045);
if(clojure.string.starts_with_QMARK_(key,prefix)){
localStorage.removeItem(key);
} else {
}


var G__91385 = seq__91042;
var G__91386 = chunk__91043;
var G__91387 = count__91044;
var G__91388 = (i__91045 + (1));
seq__91042 = G__91385;
chunk__91043 = G__91386;
count__91044 = G__91387;
i__91045 = G__91388;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__91042);
if(temp__5804__auto__){
var seq__91042__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91042__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__91042__$1);
var G__91389 = cljs.core.chunk_rest(seq__91042__$1);
var G__91390 = c__5565__auto__;
var G__91391 = cljs.core.count(c__5565__auto__);
var G__91392 = (0);
seq__91042 = G__91389;
chunk__91043 = G__91390;
count__91044 = G__91391;
i__91045 = G__91392;
continue;
} else {
var key = cljs.core.first(seq__91042__$1);
if(clojure.string.starts_with_QMARK_(key,prefix)){
localStorage.removeItem(key);
} else {
}


var G__91393 = cljs.core.next(seq__91042__$1);
var G__91394 = null;
var G__91395 = (0);
var G__91396 = (0);
seq__91042 = G__91393;
chunk__91043 = G__91394;
count__91044 = G__91395;
i__91045 = G__91396;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.user.clear_tokens = (function frontend$handler$user$clear_tokens(var_args){
var G__91047 = arguments.length;
switch (G__91047) {
case 0:
return frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$0 = (function (){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

frontend.state.set_auth_refresh_token(null);

frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3("","","");

return frontend.handler.user.clear_cognito_tokens_BANG_();
}));

(frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$1 = (function (except_refresh_token_QMARK_){
frontend.state.set_auth_id_token(null);

frontend.state.set_auth_access_token(null);

if(cljs.core.truth_(except_refresh_token_QMARK_)){
} else {
frontend.state.set_auth_refresh_token(null);
}

if(cljs.core.truth_(except_refresh_token_QMARK_)){
return frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$2("","");
} else {
return frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3("","","");
}
}));

(frontend.handler.user.clear_tokens.cljs$lang$maxFixedArity = 1);

frontend.handler.user.set_tokens_BANG_ = (function frontend$handler$user$set_tokens_BANG_(var_args){
var G__91049 = arguments.length;
switch (G__91049) {
case 2:
return frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id_token,access_token){
frontend.state.set_auth_id_token(id_token);

frontend.state.set_auth_access_token(access_token);

return frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$2(id_token,access_token);
}));

(frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id_token,access_token,refresh_token){
frontend.state.set_auth_id_token(id_token);

frontend.state.set_auth_access_token(access_token);

frontend.state.set_auth_refresh_token(refresh_token);

return frontend.handler.user.set_token_to_localstorage_BANG_.cljs$core$IFn$_invoke$arity$3(id_token,access_token,refresh_token);
}));

(frontend.handler.user.set_tokens_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * return refreshed id-token, access-token
 */
frontend.handler.user._LT_refresh_tokens = (function frontend$handler$user$_LT_refresh_tokens(refresh_token){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(["https://",frontend.config.OAUTH_DOMAIN,"/oauth2/token"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grant_type","grant_type",-293641122),"refresh_token",new cljs.core.Keyword(null,"client_id","client_id",48809273),frontend.config.COGNITO_CLIENT_ID,new cljs.core.Keyword(null,"refresh_token","refresh_token",-162233815),refresh_token], null)], null)], 0));
});
/**
 * Refresh id-token and access-token
 */
frontend.handler.user._LT_refresh_id_token_AMPERSAND_access_token = (function frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token(){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_91136){
var state_val_91137 = (state_91136[(1)]);
if((state_val_91137 === (7))){
var inst_91056 = (state_91136[(7)]);
var state_91136__$1 = state_91136;
var statearr_91138_91399 = state_91136__$1;
(statearr_91138_91399[(2)] = inst_91056);

(statearr_91138_91399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (20))){
var inst_91091 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
if(cljs.core.truth_(inst_91091)){
var statearr_91139_91400 = state_91136__$1;
(statearr_91139_91400[(1)] = (21));

} else {
var statearr_91140_91401 = state_91136__$1;
(statearr_91140_91401[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (27))){
var inst_91054 = (state_91136[(8)]);
var inst_91107 = (state_91136[(9)]);
var inst_91106 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91107__$1 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_91106);
var state_91136__$1 = (function (){var statearr_91141 = state_91136;
(statearr_91141[(9)] = inst_91107__$1);

return statearr_91141;
})();
if(cljs.core.truth_(inst_91107__$1)){
var statearr_91142_91402 = state_91136__$1;
(statearr_91142_91402[(1)] = (30));

} else {
var statearr_91143_91403 = state_91136__$1;
(statearr_91143_91403[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (1))){
var inst_91050 = (state_91136[(10)]);
var inst_91050__$1 = frontend.state.get_auth_refresh_token();
var state_91136__$1 = (function (){var statearr_91144 = state_91136;
(statearr_91144[(10)] = inst_91050__$1);

return statearr_91144;
})();
if(cljs.core.truth_(inst_91050__$1)){
var statearr_91145_91404 = state_91136__$1;
(statearr_91145_91404[(1)] = (2));

} else {
var statearr_91146_91405 = state_91136__$1;
(statearr_91146_91405[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (24))){
var inst_91103 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3("exceptional status when refresh-token",new cljs.core.Keyword(null,"warning","warning",-1685650671),true);
var state_91136__$1 = state_91136;
var statearr_91147_91406 = state_91136__$1;
(statearr_91147_91406[(2)] = inst_91103);

(statearr_91147_91406[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (4))){
var inst_91134 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91136__$1,inst_91134);
} else {
if((state_val_91137 === (15))){
var inst_91076 = frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$0();
var state_91136__$1 = state_91136;
var statearr_91148_91407 = state_91136__$1;
(statearr_91148_91407[(2)] = inst_91076);

(statearr_91148_91407[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (21))){
var inst_91054 = (state_91136[(8)]);
var inst_91093 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91094 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91095 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91096 = new cljs.core.Keyword(null,"error-text","error-text",2021893718).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91097 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"refresh-token-failed","refresh-token-failed",-110191038),new cljs.core.Keyword(null,"status","status",-1997798413),inst_91093,new cljs.core.Keyword(null,"body","body",-2049205669),inst_91094,new cljs.core.Keyword(null,"error-code","error-code",180497232),inst_91095,new cljs.core.Keyword(null,"error-text","error-text",2021893718),inst_91096], 0));
var state_91136__$1 = (function (){var statearr_91149 = state_91136;
(statearr_91149[(11)] = inst_91097);

return statearr_91149;
})();
var statearr_91150_91408 = state_91136__$1;
(statearr_91150_91408[(2)] = null);

(statearr_91150_91408[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (31))){
var inst_91107 = (state_91136[(9)]);
var state_91136__$1 = state_91136;
var statearr_91151_91409 = state_91136__$1;
(statearr_91151_91409[(2)] = inst_91107);

(statearr_91151_91409[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (32))){
var inst_91113 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
if(cljs.core.truth_(inst_91113)){
var statearr_91152_91410 = state_91136__$1;
(statearr_91152_91410[(1)] = (33));

} else {
var statearr_91153_91411 = state_91136__$1;
(statearr_91153_91411[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (33))){
var inst_91054 = (state_91136[(8)]);
var inst_91115 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91116 = new cljs.core.Keyword(null,"id_token","id_token",148712273).cljs$core$IFn$_invoke$arity$1(inst_91115);
var inst_91117 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91118 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_91117);
var inst_91119 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$2(inst_91116,inst_91118);
var state_91136__$1 = state_91136;
var statearr_91154_91412 = state_91136__$1;
(statearr_91154_91412[(2)] = inst_91119);

(statearr_91154_91412[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (13))){
var inst_91065 = (state_91136[(12)]);
var state_91136__$1 = state_91136;
var statearr_91155_91413 = state_91136__$1;
(statearr_91155_91413[(2)] = inst_91065);

(statearr_91155_91413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (22))){
var inst_91054 = (state_91136[(8)]);
var inst_91099 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91100 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_91099) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_91099));
var inst_91101 = cljs.core.not(inst_91100);
var state_91136__$1 = state_91136;
if(inst_91101){
var statearr_91156_91414 = state_91136__$1;
(statearr_91156_91414[(1)] = (24));

} else {
var statearr_91157_91415 = state_91136__$1;
(statearr_91157_91415[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (29))){
var inst_91125 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
var statearr_91158_91416 = state_91136__$1;
(statearr_91158_91416[(2)] = inst_91125);

(statearr_91158_91416[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (6))){
var inst_91054 = (state_91136[(8)]);
var inst_91058 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91059 = ((500) > inst_91058);
var state_91136__$1 = state_91136;
var statearr_91159_91417 = state_91136__$1;
(statearr_91159_91417[(2)] = inst_91059);

(statearr_91159_91417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (28))){
var state_91136__$1 = state_91136;
var statearr_91160_91418 = state_91136__$1;
(statearr_91160_91418[(2)] = null);

(statearr_91160_91418[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (25))){
var state_91136__$1 = state_91136;
var statearr_91161_91419 = state_91136__$1;
(statearr_91161_91419[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (34))){
var state_91136__$1 = state_91136;
var statearr_91163_91420 = state_91136__$1;
(statearr_91163_91420[(2)] = null);

(statearr_91163_91420[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (17))){
var inst_91079 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
var statearr_91164_91421 = state_91136__$1;
(statearr_91164_91421[(2)] = inst_91079);

(statearr_91164_91421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (3))){
var state_91136__$1 = state_91136;
var statearr_91165_91422 = state_91136__$1;
(statearr_91165_91422[(2)] = null);

(statearr_91165_91422[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (12))){
var inst_91054 = (state_91136[(8)]);
var inst_91067 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91068 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_91067);
var inst_91069 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_91068,"invalid_grant");
var state_91136__$1 = state_91136;
var statearr_91166_91423 = state_91136__$1;
(statearr_91166_91423[(2)] = inst_91069);

(statearr_91166_91423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (2))){
var inst_91050 = (state_91136[(10)]);
var inst_91052 = frontend.handler.user._LT_refresh_tokens(inst_91050);
var state_91136__$1 = state_91136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91136__$1,(5),inst_91052);
} else {
if((state_val_91137 === (23))){
var inst_91129 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
var statearr_91167_91424 = state_91136__$1;
(statearr_91167_91424[(2)] = inst_91129);

(statearr_91167_91424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (35))){
var inst_91122 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
var statearr_91168_91425 = state_91136__$1;
(statearr_91168_91425[(2)] = inst_91122);

(statearr_91168_91425[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (19))){
var inst_91083 = (state_91136[(13)]);
var state_91136__$1 = state_91136;
var statearr_91169_91426 = state_91136__$1;
(statearr_91169_91426[(2)] = inst_91083);

(statearr_91169_91426[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (11))){
var inst_91131 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
var statearr_91170_91427 = state_91136__$1;
(statearr_91170_91427[(2)] = inst_91131);

(statearr_91170_91427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (9))){
var inst_91054 = (state_91136[(8)]);
var inst_91065 = (state_91136[(12)]);
var inst_91064 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91065__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((400),inst_91064);
var state_91136__$1 = (function (){var statearr_91171 = state_91136;
(statearr_91171[(12)] = inst_91065__$1);

return statearr_91171;
})();
if(inst_91065__$1){
var statearr_91172_91428 = state_91136__$1;
(statearr_91172_91428[(1)] = (12));

} else {
var statearr_91173_91429 = state_91136__$1;
(statearr_91173_91429[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (5))){
var inst_91054 = (state_91136[(8)]);
var inst_91056 = (state_91136[(7)]);
var inst_91054__$1 = (state_91136[(2)]);
var inst_91055 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_91054__$1);
var inst_91056__$1 = ((400) <= inst_91055);
var state_91136__$1 = (function (){var statearr_91174 = state_91136;
(statearr_91174[(8)] = inst_91054__$1);

(statearr_91174[(7)] = inst_91056__$1);

return statearr_91174;
})();
if(cljs.core.truth_(inst_91056__$1)){
var statearr_91175_91430 = state_91136__$1;
(statearr_91175_91430[(1)] = (6));

} else {
var statearr_91176_91431 = state_91136__$1;
(statearr_91176_91431[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (14))){
var inst_91054 = (state_91136[(8)]);
var inst_91072 = (state_91136[(2)]);
var inst_91073 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91074 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"refresh-token-failed","refresh-token-failed",-110191038),new cljs.core.Keyword(null,"status","status",-1997798413),inst_91073], 0));
var state_91136__$1 = (function (){var statearr_91177 = state_91136;
(statearr_91177[(14)] = inst_91074);

return statearr_91177;
})();
if(cljs.core.truth_(inst_91072)){
var statearr_91178_91432 = state_91136__$1;
(statearr_91178_91432[(1)] = (15));

} else {
var statearr_91179_91433 = state_91136__$1;
(statearr_91179_91433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (26))){
var inst_91127 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
var statearr_91180_91434 = state_91136__$1;
(statearr_91180_91434[(2)] = inst_91127);

(statearr_91180_91434[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (16))){
var state_91136__$1 = state_91136;
var statearr_91181_91435 = state_91136__$1;
(statearr_91181_91435[(2)] = null);

(statearr_91181_91435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (30))){
var inst_91054 = (state_91136[(8)]);
var inst_91109 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91110 = new cljs.core.Keyword(null,"access_token","access_token",1591156073).cljs$core$IFn$_invoke$arity$1(inst_91109);
var state_91136__$1 = state_91136;
var statearr_91182_91436 = state_91136__$1;
(statearr_91182_91436[(2)] = inst_91110);

(statearr_91182_91436[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (10))){
var inst_91054 = (state_91136[(8)]);
var inst_91083 = (state_91136[(13)]);
var inst_91081 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_91054);
var inst_91082 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_91081) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_91081));
var inst_91083__$1 = cljs.core.not(inst_91082);
var state_91136__$1 = (function (){var statearr_91183 = state_91136;
(statearr_91183[(13)] = inst_91083__$1);

return statearr_91183;
})();
if(inst_91083__$1){
var statearr_91184_91437 = state_91136__$1;
(statearr_91184_91437[(1)] = (18));

} else {
var statearr_91185_91438 = state_91136__$1;
(statearr_91185_91438[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (18))){
var inst_91085 = frontend.state.get_auth_id_token();
var inst_91086 = frontend.handler.user.parse_jwt(inst_91085);
var inst_91087 = frontend.handler.user.expired_QMARK_(inst_91086);
var inst_91088 = cljs.core.not(inst_91087);
var state_91136__$1 = state_91136;
var statearr_91186_91439 = state_91136__$1;
(statearr_91186_91439[(2)] = inst_91088);

(statearr_91186_91439[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91137 === (8))){
var inst_91062 = (state_91136[(2)]);
var state_91136__$1 = state_91136;
if(cljs.core.truth_(inst_91062)){
var statearr_91187_91440 = state_91136__$1;
(statearr_91187_91440[(1)] = (9));

} else {
var statearr_91188_91441 = state_91136__$1;
(statearr_91188_91441[(1)] = (10));

}

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
});
return (function() {
var frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto__ = null;
var frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto____0 = (function (){
var statearr_91189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91189[(0)] = frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto__);

(statearr_91189[(1)] = (1));

return statearr_91189;
});
var frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto____1 = (function (state_91136){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_91136);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e91190){var ex__34382__auto__ = e91190;
var statearr_91191_91442 = state_91136;
(statearr_91191_91442[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_91136[(4)]))){
var statearr_91192_91443 = state_91136;
(statearr_91192_91443[(1)] = cljs.core.first((state_91136[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91444 = state_91136;
state_91136 = G__91444;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto__ = function(state_91136){
switch(arguments.length){
case 0:
return frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto____1.call(this,state_91136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto____0;
frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto____1;
return frontend$handler$user$_LT_refresh_id_token_AMPERSAND_access_token_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_91193 = f__34484__auto__();
(statearr_91193[(6)] = c__34483__auto__);

return statearr_91193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
/**
 * Refresh id-token&access-token, pull latest repos, returns nil when tokens are not available.
 */
frontend.handler.user.restore_tokens_from_localstorage = (function frontend$handler$user$restore_tokens_from_localstorage(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["restore-tokens-from-localstorage"], 0));

var refresh_token = localStorage.getItem("refresh-token");
if(cljs.core.truth_(refresh_token)){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_91207){
var state_val_91208 = (state_91207[(1)]);
if((state_val_91208 === (1))){
var inst_91194 = frontend.handler.user._LT_refresh_id_token_AMPERSAND_access_token();
var state_91207__$1 = state_91207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91207__$1,(2),inst_91194);
} else {
if((state_val_91208 === (2))){
var inst_91196 = (state_91207[(2)]);
var inst_91197 = frontend.handler.user.user_uuid();
var state_91207__$1 = (function (){var statearr_91209 = state_91207;
(statearr_91209[(7)] = inst_91196);

return statearr_91209;
})();
if(cljs.core.truth_(inst_91197)){
var statearr_91210_91445 = state_91207__$1;
(statearr_91210_91445[(1)] = (3));

} else {
var statearr_91211_91446 = state_91207__$1;
(statearr_91211_91446[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91208 === (3))){
var inst_91199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91200 = [new cljs.core.Keyword("user","fetch-info-and-graphs","user/fetch-info-and-graphs",-1029959720)];
var inst_91201 = (new cljs.core.PersistentVector(null,1,(5),inst_91199,inst_91200,null));
var inst_91202 = frontend.state.pub_event_BANG_(inst_91201);
var state_91207__$1 = state_91207;
var statearr_91212_91447 = state_91207__$1;
(statearr_91212_91447[(2)] = inst_91202);

(statearr_91212_91447[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91208 === (4))){
var state_91207__$1 = state_91207;
var statearr_91213_91448 = state_91207__$1;
(statearr_91213_91448[(2)] = null);

(statearr_91213_91448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91208 === (5))){
var inst_91205 = (state_91207[(2)]);
var state_91207__$1 = state_91207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91207__$1,inst_91205);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto__ = null;
var frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto____0 = (function (){
var statearr_91215 = [null,null,null,null,null,null,null,null];
(statearr_91215[(0)] = frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto__);

(statearr_91215[(1)] = (1));

return statearr_91215;
});
var frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto____1 = (function (state_91207){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_91207);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e91216){var ex__34382__auto__ = e91216;
var statearr_91217_91449 = state_91207;
(statearr_91217_91449[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_91207[(4)]))){
var statearr_91218_91450 = state_91207;
(statearr_91218_91450[(1)] = cljs.core.first((state_91207[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91451 = state_91207;
state_91207 = G__91451;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto__ = function(state_91207){
switch(arguments.length){
case 0:
return frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto____1.call(this,state_91207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto____0;
frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto____1;
return frontend$handler$user$restore_tokens_from_localstorage_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_91219 = f__34484__auto__();
(statearr_91219[(6)] = c__34483__auto__);

return statearr_91219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
} else {
return null;
}
});
/**
 * Has refresh-token
 */
frontend.handler.user.has_refresh_token_QMARK_ = (function frontend$handler$user$has_refresh_token_QMARK_(){
return cljs.core.boolean$(localStorage.getItem("refresh-token"));
});
frontend.handler.user.login_callback = (function frontend$handler$user$login_callback(session){
frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"jwtToken","jwtToken",-2095982914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idToken","idToken",922710925).cljs$core$IFn$_invoke$arity$1(session)),new cljs.core.Keyword(null,"jwtToken","jwtToken",-2095982914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"accessToken","accessToken",1833707055).cljs$core$IFn$_invoke$arity$1(session)),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"refreshToken","refreshToken",-1274875461).cljs$core$IFn$_invoke$arity$1(session)));

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","fetch-info-and-graphs","user/fetch-info-and-graphs",-1029959720)], null));
});
frontend.handler.user.login_with_username_password_e2e = (function frontend$handler$user$login_with_username_password_e2e(username,password,client_id,client_secret){
var text_encoder = (new TextEncoder());
var key = text_encoder.encode(client_secret);
var hasher = (new goog.crypt.Sha256());
var hmacer = (new goog.crypt.Hmac(hasher,key));
var secret_hash = goog.crypt.base64.encodeByteArray(hmacer.getHmac([cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id)].join('')));
var payload = new cljs.core.PersistentArrayMap(null, 3, ["AuthParameters",new cljs.core.PersistentArrayMap(null, 3, ["USERNAME",username,"PASSWORD",password,"SECRET_HASH",secret_hash], null),"AuthFlow","USER_PASSWORD_AUTH","ClientId",client_id], null);
var headers = new cljs.core.PersistentArrayMap(null, 2, ["X-Amz-Target","AWSCognitoIdentityProviderService.InitiateAuth","Content-Type","application/x-amz-json-1.1"], null);
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_91261){
var state_val_91262 = (state_91261[(1)]);
if((state_val_91262 === (1))){
var inst_91220 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_91221 = cljs.core.clj__GT_js(payload);
var inst_91222 = JSON.stringify(inst_91221);
var inst_91223 = [headers,inst_91222];
var inst_91224 = cljs.core.PersistentHashMap.fromArrays(inst_91220,inst_91223);
var inst_91225 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(frontend.config.COGNITO_IDP,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_91224], 0));
var state_91261__$1 = state_91261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91261__$1,(2),inst_91225);
} else {
if((state_val_91262 === (2))){
var inst_91227 = (state_91261[(7)]);
var inst_91227__$1 = (state_91261[(2)]);
var inst_91228 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_91227__$1);
var inst_91229 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_91228);
var state_91261__$1 = (function (){var statearr_91265 = state_91261;
(statearr_91265[(7)] = inst_91227__$1);

return statearr_91265;
})();
if(inst_91229){
var statearr_91266_91452 = state_91261__$1;
(statearr_91266_91452[(1)] = (3));

} else {
var statearr_91267_91453 = state_91261__$1;
(statearr_91267_91453[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91262 === (3))){
var state_91261__$1 = state_91261;
var statearr_91269_91454 = state_91261__$1;
(statearr_91269_91454[(2)] = null);

(statearr_91269_91454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91262 === (4))){
var inst_91232 = (new Error("Assert failed: (= 200 (:status resp))"));
var inst_91233 = (function(){throw inst_91232})();
var state_91261__$1 = state_91261;
var statearr_91271_91455 = state_91261__$1;
(statearr_91271_91455[(2)] = inst_91233);

(statearr_91271_91455[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91262 === (5))){
var inst_91227 = (state_91261[(7)]);
var inst_91235 = (state_91261[(2)]);
var inst_91236 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_91227);
var inst_91237 = JSON.parse(inst_91236);
var inst_91238 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_91237);
var inst_91239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91240 = ["AuthenticationResult","AccessToken"];
var inst_91241 = (new cljs.core.PersistentVector(null,2,(5),inst_91239,inst_91240,null));
var inst_91242 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_91238,inst_91241);
var inst_91244 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91245 = ["AuthenticationResult","IdToken"];
var inst_91246 = (new cljs.core.PersistentVector(null,2,(5),inst_91244,inst_91245,null));
var inst_91247 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_91238,inst_91246);
var inst_91248 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91249 = ["AuthenticationResult","RefreshToken"];
var inst_91250 = (new cljs.core.PersistentVector(null,2,(5),inst_91248,inst_91249,null));
var inst_91251 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_91238,inst_91250);
var inst_91252 = frontend.handler.user.set_tokens_BANG_.cljs$core$IFn$_invoke$arity$3(inst_91247,inst_91242,inst_91251);
var inst_91253 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91254 = [new cljs.core.Keyword("user","fetch-info-and-graphs","user/fetch-info-and-graphs",-1029959720)];
var inst_91255 = (new cljs.core.PersistentVector(null,1,(5),inst_91253,inst_91254,null));
var inst_91256 = frontend.state.pub_event_BANG_(inst_91255);
var inst_91257 = [new cljs.core.Keyword(null,"id-token","id-token",-339268306),new cljs.core.Keyword(null,"access-token","access-token",-654201199),new cljs.core.Keyword(null,"refresh-token","refresh-token",-1032003584)];
var inst_91258 = [inst_91247,inst_91242,inst_91251];
var inst_91259 = cljs.core.PersistentHashMap.fromArrays(inst_91257,inst_91258);
var state_91261__$1 = (function (){var statearr_91272 = state_91261;
(statearr_91272[(8)] = inst_91235);

(statearr_91272[(9)] = inst_91252);

(statearr_91272[(10)] = inst_91256);

return statearr_91272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_91261__$1,inst_91259);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto__ = null;
var frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto____0 = (function (){
var statearr_91273 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91273[(0)] = frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto__);

(statearr_91273[(1)] = (1));

return statearr_91273;
});
var frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto____1 = (function (state_91261){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_91261);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e91274){var ex__34382__auto__ = e91274;
var statearr_91275_91456 = state_91261;
(statearr_91275_91456[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_91261[(4)]))){
var statearr_91276_91457 = state_91261;
(statearr_91276_91457[(1)] = cljs.core.first((state_91261[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91458 = state_91261;
state_91261 = G__91458;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto__ = function(state_91261){
switch(arguments.length){
case 0:
return frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto____1.call(this,state_91261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto____0;
frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto____1;
return frontend$handler$user$login_with_username_password_e2e_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_91277 = f__34484__auto__();
(statearr_91277[(6)] = c__34483__auto__);

return statearr_91277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
goog.exportSymbol('frontend.handler.user.login_with_username_password_e2e', frontend.handler.user.login_with_username_password_e2e);
frontend.handler.user.logout = (function frontend$handler$user$logout(){
frontend.handler.user.clear_tokens.cljs$core$IFn$_invoke$arity$0();

frontend.state.clear_user_info_BANG_();

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","logout","user/logout",1413770948)], null));
});
frontend.handler.user.upgrade = (function frontend$handler$user$upgrade(){
var base_upgrade_url = "https://logseqdemo.lemonsqueezy.com/checkout/buy/13e194b5-c927-41a8-af58-ed1a36d6000d";
var user_uuid = frontend.handler.user.user_uuid();
var url = (function (){var G__91278 = base_upgrade_url;
if(cljs.core.truth_(user_uuid)){
return [G__91278,"?checkout[custom][user_uuid]=",cljs.core.name(user_uuid)].join('');
} else {
return G__91278;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ~~~ LEMON: ",url," ~~~ "], 0));

return window.open(url);
});
frontend.handler.user._LT_ensure_id_AMPERSAND_access_token = (function frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token(){
var id_token = frontend.state.get_auth_id_token();
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_91315){
var state_val_91316 = (state_91315[(1)]);
if((state_val_91316 === (7))){
var inst_91313 = (state_91315[(2)]);
var state_91315__$1 = state_91315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91315__$1,inst_91313);
} else {
if((state_val_91316 === (1))){
var inst_91279 = (state_91315[(7)]);
var inst_91279__$1 = (id_token == null);
var state_91315__$1 = (function (){var statearr_91317 = state_91315;
(statearr_91317[(7)] = inst_91279__$1);

return statearr_91317;
})();
if(cljs.core.truth_(inst_91279__$1)){
var statearr_91318_91459 = state_91315__$1;
(statearr_91318_91459[(1)] = (2));

} else {
var statearr_91319_91460 = state_91315__$1;
(statearr_91319_91460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (4))){
var inst_91285 = (state_91315[(2)]);
var state_91315__$1 = state_91315;
if(cljs.core.truth_(inst_91285)){
var statearr_91320_91461 = state_91315__$1;
(statearr_91320_91461[(1)] = (5));

} else {
var statearr_91321_91462 = state_91315__$1;
(statearr_91321_91462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (13))){
var state_91315__$1 = state_91315;
var statearr_91322_91463 = state_91315__$1;
(statearr_91322_91463[(2)] = null);

(statearr_91322_91463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (6))){
var state_91315__$1 = state_91315;
var statearr_91323_91464 = state_91315__$1;
(statearr_91323_91464[(2)] = null);

(statearr_91323_91464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (3))){
var inst_91282 = frontend.handler.user.parse_jwt(id_token);
var inst_91283 = frontend.handler.user.almost_expired_or_expired_QMARK_(inst_91282);
var state_91315__$1 = state_91315;
var statearr_91324_91465 = state_91315__$1;
(statearr_91324_91465[(2)] = inst_91283);

(statearr_91324_91465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (12))){
var inst_91304 = [new cljs.core.Keyword(null,"anom","anom",230108965)];
var inst_91305 = [new cljs.core.Keyword(null,"expired-token","expired-token",-311690611)];
var inst_91306 = cljs.core.PersistentHashMap.fromArrays(inst_91304,inst_91305);
var inst_91307 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("empty or expired token and refresh failed",inst_91306);
var state_91315__$1 = state_91315;
var statearr_91325_91466 = state_91315__$1;
(statearr_91325_91466[(2)] = inst_91307);

(statearr_91325_91466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (2))){
var inst_91279 = (state_91315[(7)]);
var state_91315__$1 = state_91315;
var statearr_91326_91467 = state_91315__$1;
(statearr_91326_91467[(2)] = inst_91279);

(statearr_91326_91467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (11))){
var inst_91302 = (state_91315[(2)]);
var state_91315__$1 = state_91315;
if(cljs.core.truth_(inst_91302)){
var statearr_91327_91468 = state_91315__$1;
(statearr_91327_91468[(1)] = (12));

} else {
var statearr_91328_91469 = state_91315__$1;
(statearr_91328_91469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (9))){
var inst_91295 = (state_91315[(8)]);
var state_91315__$1 = state_91315;
var statearr_91329_91470 = state_91315__$1;
(statearr_91329_91470[(2)] = inst_91295);

(statearr_91329_91470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (5))){
var inst_91287 = cljs_time.core.now();
var inst_91288 = cljs_time.coerce.to_string(inst_91287);
var inst_91289 = ["refresh tokens... ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91288)].join('');
var inst_91290 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_91289], 0));
var inst_91291 = frontend.handler.user._LT_refresh_id_token_AMPERSAND_access_token();
var state_91315__$1 = (function (){var statearr_91330 = state_91315;
(statearr_91330[(9)] = inst_91290);

return statearr_91330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91315__$1,(8),inst_91291);
} else {
if((state_val_91316 === (14))){
var inst_91310 = (state_91315[(2)]);
var state_91315__$1 = state_91315;
var statearr_91331_91471 = state_91315__$1;
(statearr_91331_91471[(2)] = inst_91310);

(statearr_91331_91471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (10))){
var inst_91298 = frontend.state.get_auth_id_token();
var inst_91299 = frontend.handler.user.parse_jwt(inst_91298);
var inst_91300 = frontend.handler.user.expired_QMARK_(inst_91299);
var state_91315__$1 = state_91315;
var statearr_91332_91472 = state_91315__$1;
(statearr_91332_91472[(2)] = inst_91300);

(statearr_91332_91472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91316 === (8))){
var inst_91295 = (state_91315[(8)]);
var inst_91293 = (state_91315[(2)]);
var inst_91294 = frontend.state.get_auth_id_token();
var inst_91295__$1 = (inst_91294 == null);
var state_91315__$1 = (function (){var statearr_91333 = state_91315;
(statearr_91333[(10)] = inst_91293);

(statearr_91333[(8)] = inst_91295__$1);

return statearr_91333;
})();
if(cljs.core.truth_(inst_91295__$1)){
var statearr_91334_91473 = state_91315__$1;
(statearr_91334_91473[(1)] = (9));

} else {
var statearr_91335_91474 = state_91315__$1;
(statearr_91335_91474[(1)] = (10));

}

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
});
return (function() {
var frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto__ = null;
var frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto____0 = (function (){
var statearr_91336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91336[(0)] = frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto__);

(statearr_91336[(1)] = (1));

return statearr_91336;
});
var frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto____1 = (function (state_91315){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_91315);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e91337){var ex__34382__auto__ = e91337;
var statearr_91338_91475 = state_91315;
(statearr_91338_91475[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_91315[(4)]))){
var statearr_91339_91476 = state_91315;
(statearr_91339_91476[(1)] = cljs.core.first((state_91315[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91477 = state_91315;
state_91315 = G__91477;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto__ = function(state_91315){
switch(arguments.length){
case 0:
return frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto____1.call(this,state_91315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto____0;
frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto____1;
return frontend$handler$user$_LT_ensure_id_AMPERSAND_access_token_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_91340 = f__34484__auto__();
(statearr_91340[(6)] = c__34483__auto__);

return statearr_91340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.user._LT_user_uuid = (function frontend$handler$user$_LT_user_uuid(){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_91351){
var state_val_91352 = (state_91351[(1)]);
if((state_val_91352 === (1))){
var inst_91341 = frontend.handler.user._LT_ensure_id_AMPERSAND_access_token();
var state_91351__$1 = state_91351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91351__$1,(2),inst_91341);
} else {
if((state_val_91352 === (2))){
var inst_91343 = (state_91351[(7)]);
var inst_91343__$1 = (state_91351[(2)]);
var inst_91344 = (inst_91343__$1 == null);
var state_91351__$1 = (function (){var statearr_91353 = state_91351;
(statearr_91353[(7)] = inst_91343__$1);

return statearr_91353;
})();
if(cljs.core.truth_(inst_91344)){
var statearr_91354_91478 = state_91351__$1;
(statearr_91354_91478[(1)] = (3));

} else {
var statearr_91355_91479 = state_91351__$1;
(statearr_91355_91479[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91352 === (3))){
var inst_91346 = frontend.handler.user.user_uuid();
var state_91351__$1 = state_91351;
var statearr_91356_91480 = state_91351__$1;
(statearr_91356_91480[(2)] = inst_91346);

(statearr_91356_91480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91352 === (4))){
var inst_91343 = (state_91351[(7)]);
var state_91351__$1 = state_91351;
var statearr_91357_91481 = state_91351__$1;
(statearr_91357_91481[(2)] = inst_91343);

(statearr_91357_91481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91352 === (5))){
var inst_91349 = (state_91351[(2)]);
var state_91351__$1 = state_91351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91351__$1,inst_91349);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto__ = null;
var frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto____0 = (function (){
var statearr_91358 = [null,null,null,null,null,null,null,null];
(statearr_91358[(0)] = frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto__);

(statearr_91358[(1)] = (1));

return statearr_91358;
});
var frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto____1 = (function (state_91351){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_91351);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e91359){var ex__34382__auto__ = e91359;
var statearr_91360_91482 = state_91351;
(statearr_91360_91482[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_91351[(4)]))){
var statearr_91361_91483 = state_91351;
(statearr_91361_91483[(1)] = cljs.core.first((state_91351[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91484 = state_91351;
state_91351 = G__91484;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto__ = function(state_91351){
switch(arguments.length){
case 0:
return frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto____1.call(this,state_91351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto____0;
frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto____1;
return frontend$handler$user$_LT_user_uuid_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_91362 = f__34484__auto__();
(statearr_91362[(6)] = c__34483__auto__);

return statearr_91362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.handler.user.alpha_user_QMARK_ = (function frontend$handler$user$alpha_user_QMARK_(){
var or__5043__auto__ = frontend.config.dev_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.contains_QMARK_(frontend.state.user_groups(),"alpha-tester");
}
});
frontend.handler.user.beta_user_QMARK_ = (function frontend$handler$user$beta_user_QMARK_(){
var or__5043__auto__ = frontend.config.dev_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.contains_QMARK_(frontend.state.user_groups(),"beta-tester");
}
});
frontend.handler.user.alpha_or_beta_user_QMARK_ = (function frontend$handler$user$alpha_or_beta_user_QMARK_(){
var or__5043__auto__ = frontend.handler.user.alpha_user_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.handler.user.beta_user_QMARK_();
}
});

//# sourceMappingURL=frontend.handler.user.js.map
