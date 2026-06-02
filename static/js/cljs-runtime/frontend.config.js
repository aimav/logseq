goog.provide('frontend.config');
/**
 * @define {boolean}
 */
frontend.config.DEV_RELEASE = goog.define("frontend.config.DEV_RELEASE",false);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.dev_release_QMARK_ !== 'undefined')){
} else {
frontend.config.dev_release_QMARK_ = frontend.config.DEV_RELEASE;
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.dev_QMARK_ !== 'undefined')){
} else {
frontend.config.dev_QMARK_ = (function (){var or__5043__auto__ = frontend.config.dev_release_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return goog.DEBUG;
}
})();
}
/**
 * @define {boolean}
 */
frontend.config.PUBLISHING = goog.define("frontend.config.PUBLISHING",false);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.publishing_QMARK_ !== 'undefined')){
} else {
frontend.config.publishing_QMARK_ = frontend.config.PUBLISHING;
}
/**
 * @define {string}
 */
frontend.config.REVISION = goog.define("frontend.config.REVISION","unknown");
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.revision !== 'undefined')){
} else {
frontend.config.revision = frontend.config.REVISION;
}
cljs.core.reset_BANG_(frontend.state.publishing_QMARK_,frontend.config.publishing_QMARK_);
/**
 * @define {boolean}
 */
frontend.config.TEST = goog.define("frontend.config.TEST",false);
frontend.config.test_QMARK_ = frontend.config.TEST;
/**
 * @define {boolean}
 */
frontend.config.ENABLE_FILE_SYNC_PRODUCTION = goog.define("frontend.config.ENABLE_FILE_SYNC_PRODUCTION",false);
frontend.config.ENABLE_SETTINGS_ACCOUNT_TAB = false;
if(frontend.config.ENABLE_FILE_SYNC_PRODUCTION){
frontend.config.FILE_SYNC_PROD_QMARK_ = true;

frontend.config.LOGIN_URL = "https://logseq-prod.auth.us-east-1.amazoncognito.com/login?client_id=3c7np6bjtb4r1k1bi9i049ops5&response_type=code&scope=email+openid+phone&redirect_uri=logseq%3A%2F%2Fauth-callback";

frontend.config.API_DOMAIN = "api.logseq.com";

frontend.config.WS_URL = "wss://ws.logseq.com/file-sync?graphuuid=%s";

frontend.config.COGNITO_IDP = "https://cognito-idp.us-east-1.amazonaws.com/";

frontend.config.COGNITO_CLIENT_ID = "69cs1lgme7p8kbgld8n5kseii6";

frontend.config.REGION = "us-east-1";

frontend.config.USER_POOL_ID = "us-east-1_dtagLnju8";

frontend.config.IDENTITY_POOL_ID = "us-east-1:d6d3b034-1631-402b-b838-b44513e93ee0";

frontend.config.OAUTH_DOMAIN = "logseq-prod.auth.us-east-1.amazoncognito.com";

frontend.config.CONNECTIVITY_TESTING_S3_URL = "https://logseq-connectivity-testing-prod.s3.us-east-1.amazonaws.com/logseq-connectivity-testing";
} else {
frontend.config.FILE_SYNC_PROD_QMARK_ = false;

frontend.config.LOGIN_URL = "https://logseq-test2.auth.us-east-2.amazoncognito.com/login?client_id=3ji1a0059hspovjq5fhed3uil8&response_type=code&scope=email+openid+phone&redirect_uri=logseq%3A%2F%2Fauth-callback";

frontend.config.API_DOMAIN = "api-dev.logseq.com";

frontend.config.WS_URL = "wss://ws-dev.logseq.com/file-sync?graphuuid=%s";

frontend.config.COGNITO_IDP = "https://cognito-idp.us-east-2.amazonaws.com/";

frontend.config.COGNITO_CLIENT_ID = "1qi1uijg8b6ra70nejvbptis0q";

frontend.config.REGION = "us-east-2";

frontend.config.USER_POOL_ID = "us-east-2_kAqZcxIeM";

frontend.config.IDENTITY_POOL_ID = "us-east-2:cc7d2ad3-84d0-4faf-98fe-628f6b52c0a5";

frontend.config.OAUTH_DOMAIN = "logseq-test2.auth.us-east-2.amazoncognito.com";

frontend.config.CONNECTIVITY_TESTING_S3_URL = "https://logseq-connectivity-testing-prod.s3.us-east-1.amazonaws.com/logseq-connectivity-testing";
}
/**
 * @define {boolean}
 */
frontend.config.ENABLE_PLUGINS = goog.define("frontend.config.ENABLE_PLUGINS",true);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.feature_plugin_system_on_QMARK_ !== 'undefined')){
} else {
frontend.config.feature_plugin_system_on_QMARK_ = frontend.config.ENABLE_PLUGINS;
}
frontend.config.global_config_enabled_QMARK_ = frontend.util.electron_QMARK_;
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.lsp_enabled_QMARK_ !== 'undefined')){
} else {
frontend.config.lsp_enabled_QMARK_ = (function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = (!(frontend.config.feature_plugin_system_on_QMARK_ === false));
if(and__5041__auto____$1){
return frontend.state.lsp_enabled_QMARK__or_theme();
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
}
frontend.config.plugin_config_enabled_QMARK_ = (function frontend$config$plugin_config_enabled_QMARK_(){
var and__5041__auto__ = frontend.config.lsp_enabled_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.global_config_enabled_QMARK_();
} else {
return and__5041__auto__;
}
});
frontend.config.app_name = "logseq";
frontend.config.website = (cljs.core.truth_(frontend.config.dev_QMARK_)?"http://localhost:3000":frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("https://%s.com",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name], 0)));
frontend.config.asset_domain = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("https://asset.%s.com",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name], 0));
frontend.config.asset_uri = (function frontend$config$asset_uri(path){
if(frontend.config.publishing_QMARK_){
return path;
} else {
if(frontend.util.file_protocol_QMARK_()){
return clojure.string.replace(path,"/static/","./");
} else {
if(cljs.core.truth_(frontend.config.dev_QMARK_)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.asset_domain),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
}

}
}
});
frontend.config.markup_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"asciidoc","asciidoc",1736965296),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"rst","rst",-824162183),null,new cljs.core.Keyword(null,"adoc","adoc",-1288345346),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null);
frontend.config.doc_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"one","one",935007904),null,new cljs.core.Keyword(null,"pptx","pptx",1751889346),null,new cljs.core.Keyword(null,"ppt","ppt",976691076),null,new cljs.core.Keyword(null,"xlsx","xlsx",847128521),null,new cljs.core.Keyword(null,"pdf","pdf",1586765132),null,new cljs.core.Keyword(null,"epub","epub",-826123950),null,new cljs.core.Keyword(null,"xls","xls",732635219),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"docx","docx",-566057986),null], null), null);
frontend.config.image_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bmp","bmp",1866754050),null,new cljs.core.Keyword(null,"png","png",551930691),null,new cljs.core.Keyword(null,"gif","gif",1261828260),null,new cljs.core.Keyword(null,"heic","heic",-732723099),null,new cljs.core.Keyword(null,"webp","webp",1501869900),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"jpeg","jpeg",-646816934),null,new cljs.core.Keyword(null,"jpg","jpg",-1835942949),null], null), null);
frontend.config.audio_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"wav","wav",270623362),null,new cljs.core.Keyword(null,"aac","aac",-1635091669),null,new cljs.core.Keyword(null,"m4a","m4a",-91255727),null,new cljs.core.Keyword(null,"ogg","ogg",1456573938),null,new cljs.core.Keyword(null,"flac","flac",-535998251),null,new cljs.core.Keyword(null,"mpeg","mpeg",-1021588107),null,new cljs.core.Keyword(null,"wma","wma",1555140921),null,new cljs.core.Keyword(null,"mp3","mp3",-879934022),null], null), null);
frontend.config.video_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"webm","webm",-1239807004),null,new cljs.core.Keyword(null,"mp4","mp4",1038217575),null,new cljs.core.Keyword(null,"flv","flv",-1359021239),null,new cljs.core.Keyword(null,"mkv","mkv",-781662669),null,new cljs.core.Keyword(null,"mov","mov",605355799),null,new cljs.core.Keyword(null,"avi","avi",-1885261478),null], null), null);
frontend.config.media_formats = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(logseq.graph_parser.config.img_formats(),frontend.config.audio_formats,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.video_formats], 0));
frontend.config.extname_of_supported_QMARK_ = (function frontend$config$extname_of_supported_QMARK_(var_args){
var G__68962 = arguments.length;
switch (G__68962) {
case 1:
return frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (input){
return frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.config.image_formats,frontend.config.doc_formats,frontend.config.audio_formats,frontend.config.video_formats,frontend.config.markup_formats,logseq.graph_parser.config.text_formats()], null));
}));

(frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (input,formats){
var temp__5804__auto__ = (function (){var G__68963 = (function (){var G__68964 = input;
if(((typeof input === 'string') && ((!(clojure.string.blank_QMARK_(input)))))){
return clojure.string.replace_first(G__68964,".","");
} else {
return G__68964;
}
})();
var G__68963__$1 = (((G__68963 == null))?null:frontend.util.safe_lower_case(G__68963));
if((G__68963__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__68963__$1);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var input__$1 = temp__5804__auto__;
return cljs.core.boolean$(cljs.core.some((function (s){
return cljs.core.contains_QMARK_(s,input__$1);
}),formats));
} else {
return null;
}
}));

(frontend.config.extname_of_supported_QMARK_.cljs$lang$maxFixedArity = 2);

frontend.config.ext_of_video_QMARK_ = (function frontend$config$ext_of_video_QMARK_(var_args){
var G__68966 = arguments.length;
switch (G__68966) {
case 1:
return frontend.config.ext_of_video_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.config.ext_of_video_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.ext_of_video_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (s){
return frontend.config.ext_of_video_QMARK_.cljs$core$IFn$_invoke$arity$2(s,true);
}));

(frontend.config.ext_of_video_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (s,html5_QMARK_){
var temp__5804__auto__ = (function (){var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
return frontend.util.get_file_ext(s);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var s__$1 = temp__5804__auto__;
var video_formats = (function (){var G__68967 = frontend.config.video_formats;
if(cljs.core.truth_(html5_QMARK_)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__68967,new cljs.core.Keyword(null,"mkv","mkv",-781662669));
} else {
return G__68967;
}
})();
return frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$2(s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [video_formats], null));
} else {
return null;
}
}));

(frontend.config.ext_of_video_QMARK_.cljs$lang$maxFixedArity = 2);

frontend.config.ext_of_audio_QMARK_ = (function frontend$config$ext_of_audio_QMARK_(var_args){
var G__68969 = arguments.length;
switch (G__68969) {
case 1:
return frontend.config.ext_of_audio_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.config.ext_of_audio_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.ext_of_audio_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (s){
return frontend.config.ext_of_audio_QMARK_.cljs$core$IFn$_invoke$arity$2(s,true);
}));

(frontend.config.ext_of_audio_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (s,html5_QMARK_){
var temp__5804__auto__ = (function (){var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
return frontend.util.get_file_ext(s);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var s__$1 = temp__5804__auto__;
var audio_formats = (function (){var G__68970 = frontend.config.audio_formats;
if(cljs.core.truth_(html5_QMARK_)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(G__68970,new cljs.core.Keyword(null,"wma","wma",1555140921),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ogg","ogg",1456573938)], 0));
} else {
return G__68970;
}
})();
return frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$2(s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [audio_formats], null));
} else {
return null;
}
}));

(frontend.config.ext_of_audio_QMARK_.cljs$lang$maxFixedArity = 2);

frontend.config.ext_of_image_QMARK_ = (function frontend$config$ext_of_image_QMARK_(s){
var temp__5804__auto__ = (function (){var and__5041__auto__ = typeof s === 'string';
if(and__5041__auto__){
return frontend.util.get_file_ext(s);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var s__$1 = temp__5804__auto__;
return frontend.config.extname_of_supported_QMARK_.cljs$core$IFn$_invoke$arity$2(s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.config.image_formats], null));
} else {
return null;
}
});
/**
 * Triggering condition: Mobile phones
 * *** Warning!!! ***
 * For UX logic only! Don't use for FS logic
 * iPad / Android Pad doesn't trigger!
 * 
 * Same as config/mobile?
 */
frontend.config.mobile_QMARK_ = ((frontend.util.node_test_QMARK_)?null:frontend.util.safe_re_find(/Mobi/,navigator.userAgent));
frontend.config.get_block_pattern = (function frontend$config$get_block_pattern(format){
return logseq.graph_parser.config.get_block_pattern((function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})());
});
frontend.config.get_hr = (function frontend$config$get_hr(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__68971 = format__$1;
var G__68971__$1 = (((G__68971 instanceof cljs.core.Keyword))?G__68971.fqn:null);
switch (G__68971__$1) {
case "org":
return "-----";

break;
case "markdown":
return "---";

break;
default:
return "";

}
});
frontend.config.get_bold = (function frontend$config$get_bold(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__68972 = format__$1;
var G__68972__$1 = (((G__68972 instanceof cljs.core.Keyword))?G__68972.fqn:null);
switch (G__68972__$1) {
case "org":
return "*";

break;
case "markdown":
return "**";

break;
default:
return "";

}
});
frontend.config.get_italic = (function frontend$config$get_italic(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__68973 = format__$1;
var G__68973__$1 = (((G__68973 instanceof cljs.core.Keyword))?G__68973.fqn:null);
switch (G__68973__$1) {
case "org":
return "/";

break;
case "markdown":
return "*";

break;
default:
return "";

}
});
frontend.config.get_underline = (function frontend$config$get_underline(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__68974 = format__$1;
var G__68974__$1 = (((G__68974 instanceof cljs.core.Keyword))?G__68974.fqn:null);
switch (G__68974__$1) {
case "org":
return "_";

break;
case "markdown":
return "";

break;
default:
return "";

}
});
frontend.config.get_strike_through = (function frontend$config$get_strike_through(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__68975 = format__$1;
var G__68975__$1 = (((G__68975 instanceof cljs.core.Keyword))?G__68975.fqn:null);
switch (G__68975__$1) {
case "org":
return "+";

break;
case "markdown":
return "~~";

break;
default:
return "";

}
});
frontend.config.get_highlight = (function frontend$config$get_highlight(format){
var G__68976 = format;
var G__68976__$1 = (((G__68976 instanceof cljs.core.Keyword))?G__68976.fqn:null);
switch (G__68976__$1) {
case "org":
return "^^";

break;
case "markdown":
return "==";

break;
default:
return "";

}
});
frontend.config.get_code = (function frontend$config$get_code(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__68977 = format__$1;
var G__68977__$1 = (((G__68977 instanceof cljs.core.Keyword))?G__68977.fqn:null);
switch (G__68977__$1) {
case "org":
return "~";

break;
case "markdown":
return "`";

break;
default:
return "";

}
});
frontend.config.get_empty_link_and_forward_pos = (function frontend$config$get_empty_link_and_forward_pos(format){
var G__68978 = format;
var G__68978__$1 = (((G__68978 instanceof cljs.core.Keyword))?G__68978.fqn:null);
switch (G__68978__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[[][]]",(2)], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[]()",(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.link_format = (function frontend$config$link_format(format,label,link){
if(cljs.core.truth_(cljs.core.not_empty(label))){
var G__68979 = format;
var G__68979__$1 = (((G__68979 instanceof cljs.core.Keyword))?G__68979.fqn:null);
switch (G__68979__$1) {
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link,label], 0));

break;
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,link], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68979__$1)].join('')));

}
} else {
return link;
}
});
frontend.config.with_default_link = (function frontend$config$with_default_link(format,link){
var G__68980 = format;
var G__68980__$1 = (((G__68980 instanceof cljs.core.Keyword))?G__68980.fqn:null);
switch (G__68980__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link], 0)),((4) + cljs.core.count(link))], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link], 0)),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.with_label_link = (function frontend$config$with_label_link(format,label,link){
var G__68981 = format;
var G__68981__$1 = (((G__68981 instanceof cljs.core.Keyword))?G__68981.fqn:null);
switch (G__68981__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link,label], 0)),(((4) + cljs.core.count(link)) + cljs.core.count(label))], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,link], 0)),(((4) + cljs.core.count(link)) + cljs.core.count(label))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.with_default_label = (function frontend$config$with_default_label(format,label){
var G__68982 = format;
var G__68982__$1 = (((G__68982 instanceof cljs.core.Keyword))?G__68982.fqn:null);
switch (G__68982__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)),(2)], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s]()",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)),((3) + cljs.core.count(label))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.properties_wrapper_pattern = (function frontend$config$properties_wrapper_pattern(format){
var G__68983 = format;
var G__68983__$1 = (((G__68983 instanceof cljs.core.Keyword))?G__68983.fqn:null);
switch (G__68983__$1) {
case "markdown":
return "---\n%s\n---";

break;
default:
return "%s";

}
});
frontend.config.get_file_extension = (function frontend$config$get_file_extension(format){
var G__68984 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__68984__$1 = (((G__68984 instanceof cljs.core.Keyword))?G__68984.fqn:null);
switch (G__68984__$1) {
case "markdown":
return "md";

break;
default:
return cljs.core.name(format);

}
});
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.default_journals_directory !== 'undefined')){
} else {
frontend.config.default_journals_directory = "journals";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.default_pages_directory !== 'undefined')){
} else {
frontend.config.default_pages_directory = "pages";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.default_whiteboards_directory !== 'undefined')){
} else {
frontend.config.default_whiteboards_directory = "whiteboards";
}
frontend.config.get_pages_directory = (function frontend$config$get_pages_directory(){
var or__5043__auto__ = frontend.state.get_pages_directory();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.config.default_pages_directory;
}
});
frontend.config.get_journals_directory = (function frontend$config$get_journals_directory(){
var or__5043__auto__ = frontend.state.get_journals_directory();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.config.default_journals_directory;
}
});
frontend.config.get_whiteboards_directory = (function frontend$config$get_whiteboards_directory(){
var or__5043__auto__ = frontend.state.get_whiteboards_directory();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.config.default_whiteboards_directory;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_repo !== 'undefined')){
} else {
frontend.config.local_repo = "local";
}
/**
 * Demo graph or nil graph?
 */
frontend.config.demo_graph_QMARK_ = (function frontend$config$demo_graph_QMARK_(var_args){
var G__68986 = arguments.length;
switch (G__68986) {
case 0:
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (repo_url){
return (((repo_url == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo_url,frontend.config.local_repo)));
}));

(frontend.config.demo_graph_QMARK_.cljs$lang$maxFixedArity = 1);

if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.recycle_dir !== 'undefined')){
} else {
frontend.config.recycle_dir = ".recycle";
}
frontend.config.config_file = "config.edn";
frontend.config.custom_css_file = "custom.css";
frontend.config.export_css_file = "export.css";
frontend.config.custom_js_file = "custom.js";
frontend.config.config_default_content = "{:meta/version 1\n\n ;; Set the preferred format.\n ;; Available options:\n ;; - Markdown (default)\n ;; - Org\n ;; :preferred-format \"Markdown\"\n\n ;; Set the preferred workflow style.\n ;; Available options:\n ;; - :now for NOW/LATER style (default)\n ;; - :todo for TODO/DOING style\n :preferred-workflow :now\n\n ;; Exclude directories/files.\n ;; Example usage:\n ;; :hidden [\"/archived\" \"/test.md\" \"../assets/archived\"]\n :hidden []\n\n ;; Define the default journal page template.\n ;; Enter the template name between the quotes.\n :default-templates\n {:journals \"\"}\n\n ;; Set a custom date format for the journal page title.\n ;; Default value: \"MMM do, yyyy\"\n ;; e.g., \"Jan 19th, 2038\"\n ;; Example usage e.g., \"Tue 19th, Jan 2038\"\n ;; :journal/page-title-format \"EEE do, MMM yyyy\"\n\n ;; Specify the journal filename format using a valid date format string.\n ;; !Warning:\n ;;   This configuration is not retroactive and affects only new journals.\n ;;   To show old journal files in the app, manually rename the files in the\n ;;   journal directory to match the new format.\n ;; Default value: \"yyyy_MM_dd\"\n ;; :journal/file-name-format \"yyyy_MM_dd\"\n\n ;; Enable tooltip preview on hover.\n ;; Default value: true\n :ui/enable-tooltip? true\n\n ;; Display brackets [[]] around page references.\n ;; Default value: true\n ;; :ui/show-brackets? true\n\n ;; Display all lines of a block when referencing ((block)).\n ;; Default value: false\n :ui/show-full-blocks? false\n\n ;; Automatically expand block references when zooming in.\n ;; Default value: true\n :ui/auto-expand-block-refs? true\n\n ;; Enable Block timestamps.\n ;; Default value: false\n :feature/enable-block-timestamps? false\n\n ;; Disable accent marks when searching.\n ;; After changing this setting, rebuild the search index by pressing (^C ^S).\n ;; Default value: true\n :feature/enable-search-remove-accents? true\n\n ;; Enable journals.\n ;; Default value: true\n ;; :feature/enable-journals? true\n\n ;; Enable flashcards.\n ;; Default value: true\n ;; :feature/enable-flashcards? true\n\n ;; Enable whiteboards.\n ;; Default value: true\n ;; :feature/enable-whiteboards? true\n\n ;; Disable the journal's built-in 'Scheduled tasks and deadlines' query.\n ;; Default value: false\n ;; :feature/disable-scheduled-and-deadline-query? false\n\n ;; Specify the number of days displayed in the future for\n ;; the 'scheduled tasks and deadlines' query.\n ;; Example usage:\n ;; Display all scheduled and deadline blocks for the next 14 days:\n ;; :scheduled/future-days 14\n ;; Default value: 7\n ;; :scheduled/future-days 7\n\n ;; Specify the first day of the week.\n ;; Available options:\n ;;  - integer from 0 to 6 (Monday to Sunday)\n ;; Default value: 6 (Sunday)\n :start-of-week 6\n\n ;; Specify a custom CSS import.\n ;; This option takes precedence over the local `logseq/custom.css` file.\n ;; Example usage:\n ;; :custom-css-url \"@import url('https://cdn.jsdelivr.net/gh/dracula/logseq@master/custom.css');\"\n\n ;; Specify a custom JS import.\n ;; This option takes precedence over the local `logseq/custom.js` file.\n ;; Example usage:\n ;; :custom-js-url \"https://cdn.logseq.com/custom.js\"\n\n ;; Set a custom Arweave gateway\n ;; Default gateway: https://arweave.net\n ;; :arweave/gateway \"https://arweave.net\"\n\n ;; Set bullet indentation when exporting\n ;; Available options:\n ;;  - `:eight-spaces` as eight spaces\n ;;  - `:four-spaces` as four spaces\n ;;  - `:two-spaces` as two spaces\n ;;  - `:tab` as a tab character (default)\n ;; :export/bullet-indentation :tab\n\n ;; Publish all pages within the Graph\n ;; Regardless of whether individual pages have been marked as public.\n ;; Default value: false\n ;; :publishing/all-pages-public? false\n\n ;; Define the default home page and sidebar status.\n ;; If unspecified, the journal page will be loaded on startup and the right sidebar will stay hidden.\n ;; The `:page` value represents the name of the page displayed at startup.\n ;; Available options for `:sidebar` are:\n ;; - \"Contents\" to display the Contents page in the right sidebar.\n ;; - A specific page name to display in the right sidebar.\n ;; - An array of multiple pages, e.g., [\"Contents\" \"Page A\" \"Page B\"].\n ;; If `:sidebar` remains unset, the right sidebar will stay hidden.\n ;; Examples:\n ;; 1. Set \"Changelog\" as the home page and display \"Contents\" in the right sidebar:\n ;; :default-home {:page \"Changelog\", :sidebar \"Contents\"}\n ;; 2. Set \"Jun 3rd, 2021\" as the home page without the right sidebar:\n ;; :default-home {:page \"Jun 3rd, 2021\"}\n ;; 3. Set \"home\" as the home page and display multiple pages in the right sidebar:\n ;; :default-home {:page \"home\", :sidebar [\"Page A\" \"Page B\"]}\n\n ;; Set the default location for storing notes.\n ;; Default value: \"pages\"\n ;; :pages-directory \"pages\"\n\n ;; Set the default location for storing journals.\n ;; Default value: \"journals\"\n ;; :journals-directory \"journals\"\n\n ;; Set the default location for storing whiteboards.\n ;; Default value: \"whiteboards\"\n ;; :whiteboards-directory \"whiteboards\"\n\n ;; Enabling this option converts\n ;; [[Grant Ideas]] to [[file:./grant_ideas.org][Grant Ideas]] for org-mode.\n ;; For more information, visit https://github.com/logseq/logseq/issues/672\n ;; :org-mode/insert-file-link? false\n\n ;; Configure custom shortcuts.\n ;; Syntax:\n ;; 1. + indicates simultaneous key presses, e.g., `Ctrl+Shift+a`.\n ;; 2. A space between keys represents key chords, e.g., `t s` means\n ;;    pressing `t` followed by `s`.\n ;; 3. mod refers to `Ctrl` for Windows/Linux and `Command` for Mac.\n ;; 4. Use false to disable a specific shortcut.\n ;; 5. You can define multiple bindings for a single action, e.g., [\"ctrl+j\" \"down\"].\n ;; The full list of configurable shortcuts is available at:\n ;; https://github.com/logseq/logseq/blob/master/src/main/frontend/modules/shortcut/config.cljs\n ;; Example:\n ;; :shortcuts\n ;; {:editor/new-block       \"enter\"\n ;;  :editor/new-line        \"shift+enter\"\n ;;  :editor/insert-link     \"mod+shift+k\"\n ;;  :editor/highlight       false\n ;;  :ui/toggle-settings     \"t s\"\n ;;  :editor/up              [\"ctrl+k\" \"up\"]\n ;;  :editor/down            [\"ctrl+j\" \"down\"]\n ;;  :editor/left            [\"ctrl+h\" \"left\"]\n ;;  :editor/right           [\"ctrl+l\" \"right\"]}\n :shortcuts {}\n\n ;; Configure the behavior of pressing Enter in document mode.\n ;; if set to true, pressing Enter will create a new block.\n ;; Default value: false\n :shortcut/doc-mode-enter-for-new-block? false\n\n ;; Block content larger than `block/content-max-length` will not be searchable\n ;; or editable for performance.\n ;; Default value: 10000\n :block/content-max-length 10000\n\n ;; Display command documentation on hover.\n ;; Default value: true\n :ui/show-command-doc? true\n\n ;; Display empty bullet points.\n ;; Default value: false\n :ui/show-empty-bullets? false\n\n ;; Pre-defined :view function to use with advanced queries.\n :query/views\n {:pprint\n  (fn [r] [:pre.code (pprint r)])}\n\n ;; Advanced queries `:result-transform` function.\n ;; Transform the query result before displaying it.\n :query/result-transforms\n {:sort-by-priority\n  (fn [result] (sort-by (fn [h] (get h :block/priority \"Z\")) result))}\n\n ;; The following queries will be displayed at the bottom of today's journal page.\n ;; The \"NOW\" query returns tasks with \"NOW\" or \"DOING\" status.\n ;; The \"NEXT\" query returns tasks with \"NOW\", \"LATER\", or \"TODO\" status.\n :default-queries\n {:journals\n  [{:title \"\uD83D\uDD28 NOW\"\n    :query [:find (pull ?h [*])\n            :in $ ?start ?today\n            :where\n            [?h :block/marker ?marker]\n            [(contains? #{\"NOW\" \"DOING\"} ?marker)]\n            [?h :block/page ?p]\n            [?p :block/journal? true]\n            [?p :block/journal-day ?d]\n            [(>= ?d ?start)]\n            [(<= ?d ?today)]]\n    :inputs [:14d :today]\n    :result-transform (fn [result]\n                        (sort-by (fn [h]\n                                   (get h :block/priority \"Z\")) result))\n    :group-by-page? false\n    :collapsed? false}\n   {:title \"\uD83D\uDCC5 NEXT\"\n    :query [:find (pull ?h [*])\n            :in $ ?start ?next\n            :where\n            [?h :block/marker ?marker]\n            [(contains? #{\"NOW\" \"LATER\" \"TODO\"} ?marker)]\n            [?h :block/page ?p]\n            [?p :block/journal? true]\n            [?p :block/journal-day ?d]\n            [(> ?d ?start)]\n            [(< ?d ?next)]]\n    :inputs [:today :7d-after]\n    :group-by-page? false\n    :collapsed? false}]}\n\n ;; Add custom commands to the command palette\n ;; Example usage:\n ;; :commands\n ;; [\n ;;  [\"js\" \"Javascript\"]\n ;;  [\"md\" \"Markdown\"]\n ;;  ]\n :commands []\n\n ;; Enable collapsing blocks with titles but no children.\n ;; By default, only blocks with children can be collapsed.\n ;; Setting `:outliner/block-title-collapse-enabled?` to true allows collapsing\n ;; blocks with titles (multiple lines) and content. For example:\n ;; - block title\n ;;   block content\n ;; Default value: false\n :outliner/block-title-collapse-enabled? false\n\n ;; Macros replace texts and will make you more productive.\n ;; Example usage:\n ;; Change the :macros value below to:\n ;; {\"poem\" \"Rose is $1, violet's $2. Life's ordered: Org assists you.\"}\n ;; input \"{{poem red,blue}}\"\n ;; becomes\n ;; Rose is red, violet's blue. Life's ordered: Org assists you.\n :macros {}\n\n ;; Configure the default expansion level for linked references.\n ;; For example, consider the following block hierarchy:\n ;; - a [[page]] (level 1)\n ;;   - b        (level 2)\n ;;     - c      (level 3)\n ;;       - d    (level 4)\n ;;\n ;; With the default value of level 2, block b will be collapsed.\n ;; If the level's value is set to 3, block c will be collapsed.\n ;; Default value: 2\n :ref/default-open-blocks-level 2\n\n ;; Configure the threshold for linked references before collapsing.\n ;; Default value: 100\n :ref/linked-references-collapsed-threshold 50\n\n ;; Graph view configuration.\n ;; Example usage:\n ;; :graph/settings\n ;; {:orphan-pages?   true   ; Default value: true\n ;;  :builtin-pages?  false  ; Default value: false\n ;;  :excluded-pages? false  ; Default value: false\n ;;  :journal?        false} ; Default value: false\n\n ;; Graph view configuration.\n ;; Example usage:\n ;; :graph/forcesettings\n ;; {:link-dist       180    ; Default value: 180\n ;;  :charge-strength -600   ; Default value: -600\n ;;  :charge-range    600}   ; Default value: 600\n\n ;; Favorites to list on the left sidebar\n :favorites []\n\n ;; Set flashcards interval.\n ;; Expected value:\n ;; - Float between 0 and 1\n ;; higher values result in faster changes to the next review interval.\n ;; Default value: 0.5\n ;; :srs/learning-fraction 0.5\n\n ;; Set the initial interval after the first successful review of a card.\n ;; Default value: 4\n ;; :srs/initial-interval 4\n\n ;; Hide specific block properties.\n ;; Example usage:\n ;; :block-hidden-properties #{:public :icon}\n\n ;; Create a page for all properties.\n ;; Default value: true\n :property-pages/enabled? true\n\n ;; Properties to exclude from having property pages\n ;; Example usage:\n ;; :property-pages/excludelist #{:duration :author}\n\n ;; By default, property value separated by commas will not be treated as\n ;; page references. You can add properties to enable it.\n ;; Example usage:\n ;; :property/separated-by-commas #{:alias :tags}\n\n ;; Properties that are ignored when parsing property values for references\n ;; Example usage:\n ;; :ignored-page-references-keywords #{:author :website}\n\n ;; logbook configuration.\n ;; :logbook/settings\n ;; {:with-second-support? false ;limit logbook to minutes, seconds will be eliminated\n ;;  :enabled-in-all-blocks true ;display logbook in all blocks after timetracking\n ;;  :enabled-in-timestamped-blocks false ;don't display logbook at all\n ;; }\n\n ;; Mobile photo upload configuration.\n ;; :mobile/photo\n ;; {:allow-editing? true\n ;;  :quality        80}\n\n ;; Mobile features options\n ;; Gestures\n ;; Example usage:\n ;; :mobile\n ;; {:gestures/disabled-in-block-with-tags [\"kanban\"]}\n\n ;; Extra CodeMirror options\n ;; See https://codemirror.net/5/doc/manual.html#config for possible options\n ;; Example usage:\n ;; :editor/extra-codemirror-options\n ;; {:lineWrapping  false  ; Default value: false\n ;;  :lineNumbers   true   ; Default value: true\n ;;  :readOnly      false} ; Default value: false\n\n ;; Enable logical outdenting\n ;; Default value: false\n ;; :editor/logical-outdenting? false\n\n ;; Prefer pasting the file when text and a file are in the clipboard.\n ;; Default value: false\n ;; :editor/preferred-pasting-file? false\n\n ;; Quick capture templates for receiving content from other apps.\n ;; Each template contains three elements {time}, {text} and {url}, which can be auto-expanded\n ;; by receiving content from other apps. Note: the {} cannot be omitted.\n ;; - {time}: capture time\n ;; - {date}: capture date using current date format, use `[[{date}]]` to get a page reference\n ;; - {text}: text that users selected before sharing.\n ;; - {url}: URL or assets path for media files stored in Logseq.\n ;; You can also reorder them or use only one or two of them in the template.\n ;; You can also insert or format any text in the template, as shown in the following examples.\n ;; :quick-capture-templates\n ;; {:text \"[[quick capture]] **{time}**: {text} from {url}\"\n ;;  :media \"[[quick capture]] **{time}**: {url}\"}\n\n ;; Quick capture options.\n ;; - insert-today?   Insert the capture at the end of today's journal page (boolean).\n ;; - redirect-page?  Redirect to the quick capture page after capturing (boolean).\n ;; - default-page    The default page to capture to if insert-today? is false (string).\n ;; :quick-capture-options\n ;; {:insert-today? false           ;; Default value: true\n ;;  :redirect-page? false          ;; Default value: false\n ;;  :default-page \"quick capture\"} ;; Default page: \"quick capture\"\n\n ;; File sync options\n ;; Ignore these files when syncing, regexp is supported.\n ;; :file-sync/ignore-files []\n\n ;; Configure the Enter key behavior for\n ;; context-aware editing with DWIM (Do What I Mean).\n ;; context-aware Enter key behavior implies that pressing Enter will\n ;; have different outcomes based on the context.\n ;; For instance, pressing Enter within a list generates a new list item,\n ;; whereas pressing Enter in a block reference opens the referenced block.\n ;; :dwim/settings\n ;; {:admonition&src?  true        ;; Default value: true\n ;;  :markup?          false       ;; Default value: false\n ;;  :block-ref?       true        ;; Default value: true\n ;;  :page-ref?        true        ;; Default value: true\n ;;  :properties?      true        ;; Default value: true\n ;;  :list?            false}      ;; Default value: false\n\n ;; Configure the escaping method for special characters in page titles.\n ;; Warning:\n ;;   This is a dangerous operation. To modify the setting,\n ;;   access the 'Filename format' setting and follow the instructions.\n ;;   Otherwise, You may need to manually rename all affected files and\n ;;   re-index them on all clients after synchronization.\n ;;   Incorrect handling may result in messy page titles.\n ;; Available options:\n ;;   - :triple-lowbar (default)\n ;;      ;use triple underscore `___` for slash `/` in page title\n ;;      ;use Percent-encoding for other invalid characters\n :file/name-format :triple-lowbar}\n";
frontend.config.config_default_content_md5 = (function (){var md5 = (new goog.crypt.Md5());
md5.update(goog.crypt.stringToUtf8ByteArray(frontend.config.config_default_content));

return goog.crypt.byteArrayToHex(md5.digest());
})();
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.idb_db_prefix !== 'undefined')){
} else {
frontend.config.idb_db_prefix = "logseq-db/";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_db_prefix !== 'undefined')){
} else {
frontend.config.local_db_prefix = "logseq_local_";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_handle !== 'undefined')){
} else {
frontend.config.local_handle = "handle";
}
frontend.config.local_db_QMARK_ = (function frontend$config$local_db_QMARK_(s){
return ((typeof s === 'string') && (clojure.string.starts_with_QMARK_(s,frontend.config.local_db_prefix)));
});
frontend.config.get_local_asset_absolute_path = (function frontend$config$get_local_asset_absolute_path(s){
return ["/",clojure.string.replace(s,/^[.\/]*/,"")].join('');
});
frontend.config.get_local_dir = (function frontend$config$get_local_dir(s){
return clojure.string.replace(s,frontend.config.local_db_prefix,"");
});
frontend.config.get_local_repo = (function frontend$config$get_local_repo(dir){
return [frontend.config.local_db_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join('');
});
frontend.config.get_repo_dir = (function frontend$config$get_repo_dir(repo_url){
if((repo_url == null)){
console.error("BUG: nil repo");

return null;
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})())){
return frontend.config.get_local_dir(repo_url);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})())){
var dir = frontend.config.get_local_dir(repo_url);
if(clojure.string.starts_with_QMARK_(dir,"file://")){
return dir;
} else {
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic("file://",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dir], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo_url,"local")){
return "memory:///local";
} else {
if(frontend.config.local_db_QMARK_(repo_url)){
return clojure.string.replace_first(repo_url,frontend.config.local_db_prefix,"");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo_url,"test-db")){
return "/test-db";
} else {
console.error("BUG: This should be unreachable! get-repo-dir",repo_url);

return ["/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.take_last((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(repo_url,/\//)))].join('');

}
}
}
}
}
}
});
frontend.config.get_string_repo_dir = (function frontend$config$get_string_repo_dir(repo_dir){
if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
return [((frontend.mobile.util.in_iCloud_container_path_QMARK_(repo_dir))?"iCloud":(cljs.core.truth_(frontend.mobile.util.native_iphone_QMARK_())?"On My iPhone":(cljs.core.truth_(frontend.mobile.util.native_ipad_QMARK_())?"On My iPad":"Local"
))),["/",clojure.string.capitalize(frontend.config.app_name),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.util.safe_decode_uri_component(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(repo_dir,"Documents/"))))].join('')].join('');
} else {
return frontend.config.get_repo_dir(frontend.config.get_local_repo(repo_dir));
}
});
frontend.config.get_repo_fpath = (function frontend$config$get_repo_fpath(repo_url,path){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_repo_dir(repo_url),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
frontend.config.get_repo_config_path = (function frontend$config$get_repo_config_path(){
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.app_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.config_file], 0));
});
frontend.config.get_custom_css_path = (function frontend$config$get_custom_css_path(var_args){
var G__68988 = arguments.length;
switch (G__68988) {
case 0:
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
var temp__5804__auto__ = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var repo_dir = temp__5804__auto__;
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name,frontend.config.custom_css_file], 0));
} else {
return null;
}
}));

(frontend.config.get_custom_css_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_export_css_path = (function frontend$config$get_export_css_path(var_args){
var G__68990 = arguments.length;
switch (G__68990) {
case 0:
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
var temp__5804__auto__ = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var repo_dir = temp__5804__auto__;
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name,frontend.config.export_css_file], 0));
} else {
return null;
}
}));

(frontend.config.get_export_css_path.cljs$lang$maxFixedArity = 1);

/**
 * Resolve all relative links in custom.css to assets:// URL
 */
frontend.config.expand_relative_assets_path = (function frontend$config$expand_relative_assets_path(source){
if(clojure.string.blank_QMARK_(source)){
return null;
} else {
var protocol = (function (){var and__5041__auto__ = typeof source === 'string';
if(and__5041__auto__){
var and__5041__auto____$1 = (!(clojure.string.blank_QMARK_(source)));
if(and__5041__auto____$1){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return "assets://";
} else {
return "file://";
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})();
var assets_link_fn = (function (_){
var graph_root = frontend.config.get_repo_dir(frontend.state.get_current_repo());
var protocol__$1 = ((clojure.string.starts_with_QMARK_(graph_root,"file:"))?"":protocol);
var full_path = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(protocol__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph_root,"assets"], 0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__68992 = full_path;
if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
return frontend.mobile.util.convert_file_src(G__68992);
} else {
return G__68992;
}
})()),"/"].join('');
});
return clojure.string.replace(source,/\.\.\/assets\//,assets_link_fn);
}
});
frontend.config.get_current_repo_assets_root = (function frontend$config$get_current_repo_assets_root(){
var temp__5804__auto__ = (function (){var and__5041__auto__ = frontend.config.local_db_QMARK_(frontend.state.get_current_repo());
if(and__5041__auto__){
return frontend.config.get_repo_dir(frontend.state.get_current_repo());
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var repo_dir = temp__5804__auto__;
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["assets"], 0));
} else {
return null;
}
});
frontend.config.get_custom_js_path = (function frontend$config$get_custom_js_path(var_args){
var G__68994 = arguments.length;
switch (G__68994) {
case 0:
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
var temp__5804__auto__ = frontend.config.get_repo_dir(repo);
if(cljs.core.truth_(temp__5804__auto__)){
var repo_dir = temp__5804__auto__;
return logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name,frontend.config.custom_js_file], 0));
} else {
return null;
}
}));

(frontend.config.get_custom_js_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_block_hidden_properties = (function frontend$config$get_block_hidden_properties(){
return new cljs.core.Keyword(null,"block-hidden-properties","block-hidden-properties",-155956857).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0());
});

//# sourceMappingURL=frontend.config.js.map
