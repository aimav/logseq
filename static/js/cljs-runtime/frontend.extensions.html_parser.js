goog.provide('frontend.extensions.html_parser');
if((typeof frontend !== 'undefined') && (typeof frontend.extensions !== 'undefined') && (typeof frontend.extensions.html_parser !== 'undefined') && (typeof frontend.extensions.html_parser._STAR_inside_pre_QMARK_ !== 'undefined')){
} else {
frontend.extensions.html_parser._STAR_inside_pre_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.extensions.html_parser.hiccup_without_style = (function frontend$extensions$html_parser$hiccup_without_style(hiccup){
return clojure.walk.postwalk((function (f){
if(cljs.core.map_QMARK_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,f,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (key){
return clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),":data-");
}),cljs.core.keys(f)),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996)], 0)));
} else {
return f;
}
}),hiccup);
});
frontend.extensions.html_parser.export_hiccup = (function frontend$extensions$html_parser$export_hiccup(hiccup){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#+BEGIN_EXPORT hiccup\n%s\n#+END_EXPORT",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.html_parser.hiccup_without_style(hiccup))], 0));
});
frontend.extensions.html_parser.denied_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"applet","applet",434416644),null,new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"frame","frame",-1711082588),null,new cljs.core.Keyword(null,"script","script",-1304443801),null,new cljs.core.Keyword(null,"frameset","frameset",-708194935),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"head","head",-771383919),null,new cljs.core.Keyword(null,"link","link",-1769163468),null,new cljs.core.Keyword(null,"comment","comment",532206069),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"base","base",185279322),null,new cljs.core.Keyword(null,"embed","embed",-1354913349),null,new cljs.core.Keyword(null,"xml","xml",-1170142052),null,new cljs.core.Keyword(null,"object","object",1474613949),null], null), null);
frontend.extensions.html_parser.hiccup__GT_doc_inner = (function frontend$extensions$html_parser$hiccup__GT_doc_inner(format,hiccup,opts){
var transform_fn = (function (hiccup__$1,opts__$1){
return (frontend.extensions.html_parser.hiccup__GT_doc_inner.cljs$core$IFn$_invoke$arity$3 ? frontend.extensions.html_parser.hiccup__GT_doc_inner.cljs$core$IFn$_invoke$arity$3(format,hiccup__$1,opts__$1) : frontend.extensions.html_parser.hiccup__GT_doc_inner.call(null,format,hiccup__$1,opts__$1));
});
var block_pattern = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"#":frontend.config.get_block_pattern(format));
var map_join = (function() { 
var G__108741__delegate = function (children,p__108693){
var map__108694 = p__108693;
var map__108694__$1 = cljs.core.__destructure_map(map__108694);
var list_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108694__$1,new cljs.core.Keyword(null,"list?","list?",-1642026156));
var opts_SINGLEQUOTE_ = (cljs.core.truth_(list_QMARK_)?(function (){var level = ((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})() + (1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"level","level",1290497552),level);
})():opts);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108688_SHARP_){
return transform_fn(p1__108688_SHARP_,opts_SINGLEQUOTE_);
}),children));
};
var G__108741 = function (children,var_args){
var p__108693 = null;
if (arguments.length > 1) {
var G__108742__i = 0, G__108742__a = new Array(arguments.length -  1);
while (G__108742__i < G__108742__a.length) {G__108742__a[G__108742__i] = arguments[G__108742__i + 1]; ++G__108742__i;}
  p__108693 = new cljs.core.IndexedSeq(G__108742__a,0,null);
} 
return G__108741__delegate.call(this,children,p__108693);};
G__108741.cljs$lang$maxFixedArity = 1;
G__108741.cljs$lang$applyTo = (function (arglist__108743){
var children = cljs.core.first(arglist__108743);
var p__108693 = cljs.core.rest(arglist__108743);
return G__108741__delegate(children,p__108693);
});
G__108741.cljs$core$IFn$_invoke$arity$variadic = G__108741__delegate;
return G__108741;
})()
;
var block_transform = (function (level,children){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(level,block_pattern)))," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108689_SHARP_){
return transform_fn(p1__108689_SHARP_,opts);
}),children)),"\n"].join('');
});
var emphasis_transform = (function (tag,attrs,children){
var style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
var vec__108695 = (cljs.core.truth_(style)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_find(/font-weight:\s*(([6789]\d\d)|1000|(semi)?bold)\b/,style),cljs.core.re_find(/font-style:\s*italic\b/,style),cljs.core.re_find(/text-decoration(-line)?:\s*underline\b/,style),cljs.core.re_find(/text-decoration:\s*line-through\b/,style),cljs.core.re_find(/background-color:\s*yellow\b/,style)], null):null);
var bold_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108695,(0),null);
var italic_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108695,(1),null);
var underline_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108695,(2),null);
var strike_through_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108695,(3),null);
var mark_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108695,(4),null);
var pattern = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strong","strong",269529000),null,new cljs.core.Keyword(null,"b","b",1482224470),null], null), null),tag))?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"font-weight: normal");
} else {
return and__5041__auto__;
}
})())?null:frontend.config.get_bold(format)):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"i","i",-1386841315),null], null), null),tag))?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"font-style: normal");
} else {
return and__5041__auto__;
}
})())?null:(cljs.core.truth_(bold_QMARK_)?frontend.config.get_bold(format):frontend.config.get_italic(format))):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ins","ins",-1021983570),null,new cljs.core.Keyword(null,"u","u",-1156634785),null], null), null),tag))?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"text-decoration: normal");
} else {
return and__5041__auto__;
}
})())?null:frontend.config.get_underline(format)):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"del","del",574975584),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"strike","strike",-1173815471),null], null), null),tag))?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"text-decoration: normal");
} else {
return and__5041__auto__;
}
})())?null:frontend.config.get_strike_through(format)):(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mark","mark",-373816345),null], null), null),tag);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return mark_QMARK_;
}
})())?(cljs.core.truth_((function (){var and__5041__auto__ = style;
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.includes_QMARK_(style,"background-color: transparent");
} else {
return and__5041__auto__;
}
})())?null:frontend.config.get_highlight(format)):((((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"span","span",1394872991),null], null), null),tag)) && ((!(cljs.core.every_QMARK_(clojure.string.blank_QMARK_,children))))))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(bold_QMARK_)?frontend.config.get_bold(format):null),(cljs.core.truth_(italic_QMARK_)?frontend.config.get_italic(format):null),(cljs.core.truth_(underline_QMARK_)?frontend.config.get_underline(format):null),(cljs.core.truth_(strike_through_QMARK_)?frontend.config.get_strike_through(format):null),(cljs.core.truth_(mark_QMARK_)?frontend.config.get_highlight(format):null)], null)):null
))))));
var pattern__$1 = ((typeof pattern === 'string')?pattern:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,pattern));
var children_SINGLEQUOTE_ = map_join(children);
if(cljs.core.truth_(cljs.core.not_empty(children_SINGLEQUOTE_))){
if(clojure.string.blank_QMARK_(pattern__$1)){
return children_SINGLEQUOTE_;
} else {
if(clojure.string.starts_with_QMARK_(children_SINGLEQUOTE_,pattern__$1)){
return children_SINGLEQUOTE_;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(children_SINGLEQUOTE_),clojure.string.reverse(pattern__$1)].join('');

}
}
} else {
return null;
}
});
var wrapper = (function (tag,content){
var content__$1 = ((cljs.core.contains_QMARK_(frontend.extensions.html_parser.denied_tags,tag))?null:(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"p","p",151049309));
if(and__5041__auto__){
return new cljs.core.Keyword(null,"in-table?","in-table?",-1975579419).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__5041__auto__;
}
})())?content:((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),null,new cljs.core.Keyword(null,"figure","figure",-561394079),null,new cljs.core.Keyword(null,"aside","aside",1414397537),null,new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),null,new cljs.core.Keyword(null,"hr","hr",1377740067),null,new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"ul","ul",-1349521403),null,new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"footer","footer",1606445390),null,new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"ol","ol",932524051),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),null,new cljs.core.Keyword(null,"dl","dl",-2140151713),null], null), null),tag))?["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"\n\n"].join(''):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thead","thead",-291875296),null,new cljs.core.Keyword(null,"li","li",723558921),null,new cljs.core.Keyword(null,"tr","tr",-1424774646),null], null), null),tag))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),"\n"].join(''):content
))));
var G__108698 = content__$1;
var G__108698__$1 = (((G__108698 == null))?null:clojure.string.replace(G__108698,"<!--StartFragment-->",""));
if((G__108698__$1 == null)){
return null;
} else {
return clojure.string.replace(G__108698__$1,"<!--EndFragment-->","");
}
});
var single_hiccup_transform = (function (x){
if(cljs.core.vector_QMARK_(x)){
var vec__108699 = x;
var seq__108700 = cljs.core.seq(vec__108699);
var first__108701 = cljs.core.first(seq__108700);
var seq__108700__$1 = cljs.core.next(seq__108700);
var tag = first__108701;
var first__108701__$1 = cljs.core.first(seq__108700__$1);
var seq__108700__$2 = cljs.core.next(seq__108700__$1);
var attrs = first__108701__$1;
var children = seq__108700__$2;
var result = (function (){try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"head","head",-771383919))){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e108705){if((e108705 instanceof Error)){
var e__103681__auto__ = e108705;
if((e__103681__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h1","h1",-1896887462))){
return block_transform((1),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108706){if((e108706 instanceof Error)){
var e__103681__auto____$1 = e108706;
if((e__103681__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h2","h2",-372662728))){
return block_transform((2),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108707){if((e108707 instanceof Error)){
var e__103681__auto____$2 = e108707;
if((e__103681__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h3","h3",2067611163))){
return block_transform((3),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108708){if((e108708 instanceof Error)){
var e__103681__auto____$3 = e108708;
if((e__103681__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h4","h4",2004862993))){
return block_transform((4),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108709){if((e108709 instanceof Error)){
var e__103681__auto____$4 = e108709;
if((e__103681__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h5","h5",-1829156625))){
return block_transform((5),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108710){if((e108710 instanceof Error)){
var e__103681__auto____$5 = e108710;
if((e__103681__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"h6","h6",557293780))){
return block_transform((6),children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108711){if((e108711 instanceof Error)){
var e__103681__auto____$6 = e108711;
if((e__103681__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"a","a",-2123407586))){
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs);
var label = (function (){var or__5043__auto__ = clojure.string.trim(map_join(children));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var has_img_tag_QMARK_ = frontend.util.safe_re_find(/\[:img/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
if(clojure.string.blank_QMARK_(href)){
return null;
} else {
if(cljs.core.truth_(has_img_tag_QMARK_)){
return frontend.extensions.html_parser.export_hiccup(x);
} else {
var G__108736 = format;
var G__108736__$1 = (((G__108736 instanceof cljs.core.Keyword))?G__108736.fqn:null);
switch (G__108736__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,href], 0));

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([href,label], 0));

break;
default:
return null;

}
}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e108712){if((e108712 instanceof Error)){
var e__103681__auto____$7 = e108712;
if((e__103681__auto____$7 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"img","img",1442687358))){
var src = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(attrs);
var alt = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})();
var unsafe_data_url_QMARK_ = ((clojure.string.starts_with_QMARK_(src,"data:")) && (cljs.core.not(cljs.core.re_find(/^data:.*?;base64,/,src))));
if(unsafe_data_url_QMARK_){
return null;
} else {
var G__108735 = format;
var G__108735__$1 = (((G__108735 instanceof cljs.core.Keyword))?G__108735.fqn:null);
switch (G__108735__$1) {
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("![%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alt,src], 0));

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src,alt], 0));

break;
default:
return null;

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e108713){if((e108713 instanceof Error)){
var e__103681__auto____$8 = e108713;
if((e__103681__auto____$8 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"p","p",151049309))){
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map_join(children)], 0));
} else {
throw cljs.core.match.backtrack;

}
}catch (e108714){if((e108714 instanceof Error)){
var e__103681__auto____$9 = e108714;
if((e__103681__auto____$9 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"hr","hr",1377740067))){
return frontend.config.get_hr(format);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108715){if((e108715 instanceof Error)){
var e__103681__auto____$10 = e108715;
if((e__103681__auto____$10 === cljs.core.match.backtrack)){
try{if((function (p1__108690_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"del","del",574975584),null,new cljs.core.Keyword(null,"mark","mark",-373816345),null,new cljs.core.Keyword(null,"strong","strong",269529000),null,new cljs.core.Keyword(null,"em","em",707813035),null,new cljs.core.Keyword(null,"ins","ins",-1021983570),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"strike","strike",-1173815471),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"i","i",-1386841315),null,new cljs.core.Keyword(null,"span","span",1394872991),null,new cljs.core.Keyword(null,"u","u",-1156634785),null], null), null),p1__108690_SHARP_);
})(tag)){
return emphasis_transform(tag,attrs,children);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108716){if((e108716 instanceof Error)){
var e__103681__auto____$11 = e108716;
if((e__103681__auto____$11 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"code","code",1586293142))){
if(cljs.core.truth_(cljs.core.deref(frontend.extensions.html_parser._STAR_inside_pre_QMARK_))){
return map_join(children);
} else {
if(typeof cljs.core.first(children) === 'string'){
var pattern = frontend.config.get_code(format);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pattern)].join('');
} else {
return map_join(children);

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e108717){if((e108717 instanceof Error)){
var e__103681__auto____$12 = e108717;
if((e__103681__auto____$12 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"pre","pre",2118456869))){
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,true);

var content = clojure.string.trim(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(map_join(children)));
cljs.core.reset_BANG_(frontend.extensions.html_parser._STAR_inside_pre_QMARK_,false);

var G__108734 = format;
var G__108734__$1 = (((G__108734 instanceof cljs.core.Keyword))?G__108734.fqn:null);
switch (G__108734__$1) {
case "markdown":
if(frontend.util.starts_with_QMARK_(content,"```")){
return content;
} else {
return ["```\n",content,"\n```"].join('');
}

break;
case "org":
if(frontend.util.starts_with_QMARK_(content,"#+BEGIN_SRC")){
return content;
} else {
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#+BEGIN_SRC\n%s\n#+END_SRC",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0));
}

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e108718){if((e108718 instanceof Error)){
var e__103681__auto____$13 = e108718;
if((e__103681__auto____$13 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"blockquote","blockquote",372264190))){
var G__108733 = format;
var G__108733__$1 = (((G__108733 instanceof cljs.core.Keyword))?G__108733.fqn:null);
switch (G__108733__$1) {
case "markdown":
return ["> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children))].join('');

break;
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("#+BEGIN_QUOTE\n%s\n#+END_QUOTE",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map_join(children)], 0));

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e108719){if((e108719 instanceof Error)){
var e__103681__auto____$14 = e108719;
if((e__103681__auto____$14 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"li","li",723558921))){
var tabs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})() - (1)),"\t"));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tabs),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"markdown","markdown",1227225089)))?"-":"*")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children))].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e108720){if((e108720 instanceof Error)){
var e__103681__auto____$15 = e108720;
if((e__103681__auto____$15 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"br","br",934104792))){
return "\n";
} else {
throw cljs.core.match.backtrack;

}
}catch (e108721){if((e108721 instanceof Error)){
var e__103681__auto____$16 = e108721;
if((e__103681__auto____$16 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dt","dt",-368444759))){
var G__108732 = format;
var G__108732__$1 = (((G__108732 instanceof cljs.core.Keyword))?G__108732.fqn:null);
switch (G__108732__$1) {
case "org":
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children))," "].join('');

break;
case "markdown":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),"\n"].join('');

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e108722){if((e108722 instanceof Error)){
var e__103681__auto____$17 = e108722;
if((e__103681__auto____$17 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dd","dd",-1340437629))){
var G__108731 = format;
var G__108731__$1 = (((G__108731 instanceof cljs.core.Keyword))?G__108731.fqn:null);
switch (G__108731__$1) {
case "markdown":
return [": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),"\n"].join('');

break;
case "org":
return [":: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),"\n"].join('');

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e108723){if((e108723 instanceof Error)){
var e__103681__auto____$18 = e108723;
if((e__103681__auto____$18 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"thead","thead",-291875296))){
var G__108730 = format;
var G__108730__$1 = (((G__108730 instanceof cljs.core.Keyword))?G__108730.fqn:null);
switch (G__108730__$1) {
case "markdown":
var columns = cljs.core.count(cljs.core.last(cljs.core.first(children)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),["| ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(columns,"----"))," |"].join('')].join('');

break;
case "org":
var columns = cljs.core.count(cljs.core.last(cljs.core.first(children)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_join(children)),["|",clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(columns,"----")),"|"].join('')].join('');

break;
default:
return null;

}
} else {
throw cljs.core.match.backtrack;

}
}catch (e108724){if((e108724 instanceof Error)){
var e__103681__auto____$19 = e108724;
if((e__103681__auto____$19 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"tr","tr",-1424774646))){
return ["| ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__108691_SHARP_){
return transform_fn(p1__108691_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"in-table?","in-table?",-1975579419),true));
}),children))," |"].join('');
} else {
throw cljs.core.match.backtrack;

}
}catch (e108725){if((e108725 instanceof Error)){
var e__103681__auto____$20 = e108725;
if((e__103681__auto____$20 === cljs.core.match.backtrack)){
try{if((function (p1__108692_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),null,new cljs.core.Keyword(null,"figure","figure",-561394079),null,new cljs.core.Keyword(null,"aside","aside",1414397537),null,new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),null,new cljs.core.Keyword(null,"footer","footer",1606445390),null,new cljs.core.Keyword(null,"header","header",119441134),null,new cljs.core.Keyword(null,"center","center",-748944368),null], null), null),p1__108692_SHARP_);
})(tag)){
throw (new Error(["HTML->Hiccup: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," not supported yet"].join('')));
} else {
throw cljs.core.match.backtrack;

}
}catch (e108726){if((e108726 instanceof Error)){
var e__103681__auto____$21 = e108726;
if((e__103681__auto____$21 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"ul","ul",-1349521403))){
return map_join(children,new cljs.core.Keyword(null,"list?","list?",-1642026156),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108727){if((e108727 instanceof Error)){
var e__103681__auto____$22 = e108727;
if((e__103681__auto____$22 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"ol","ol",932524051))){
return map_join(children,new cljs.core.Keyword(null,"list?","list?",-1642026156),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108728){if((e108728 instanceof Error)){
var e__103681__auto____$23 = e108728;
if((e__103681__auto____$23 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_(tag,new cljs.core.Keyword(null,"dl","dl",-2140151713))){
return map_join(children,new cljs.core.Keyword(null,"list?","list?",-1642026156),true);
} else {
throw cljs.core.match.backtrack;

}
}catch (e108729){if((e108729 instanceof Error)){
var e__103681__auto____$24 = e108729;
if((e__103681__auto____$24 === cljs.core.match.backtrack)){
return map_join(children);
} else {
throw e__103681__auto____$24;
}
} else {
throw e108729;

}
}} else {
throw e__103681__auto____$23;
}
} else {
throw e108728;

}
}} else {
throw e__103681__auto____$22;
}
} else {
throw e108727;

}
}} else {
throw e__103681__auto____$21;
}
} else {
throw e108726;

}
}} else {
throw e__103681__auto____$20;
}
} else {
throw e108725;

}
}} else {
throw e__103681__auto____$19;
}
} else {
throw e108724;

}
}} else {
throw e__103681__auto____$18;
}
} else {
throw e108723;

}
}} else {
throw e__103681__auto____$17;
}
} else {
throw e108722;

}
}} else {
throw e__103681__auto____$16;
}
} else {
throw e108721;

}
}} else {
throw e__103681__auto____$15;
}
} else {
throw e108720;

}
}} else {
throw e__103681__auto____$14;
}
} else {
throw e108719;

}
}} else {
throw e__103681__auto____$13;
}
} else {
throw e108718;

}
}} else {
throw e__103681__auto____$12;
}
} else {
throw e108717;

}
}} else {
throw e__103681__auto____$11;
}
} else {
throw e108716;

}
}} else {
throw e__103681__auto____$10;
}
} else {
throw e108715;

}
}} else {
throw e__103681__auto____$9;
}
} else {
throw e108714;

}
}} else {
throw e__103681__auto____$8;
}
} else {
throw e108713;

}
}} else {
throw e__103681__auto____$7;
}
} else {
throw e108712;

}
}} else {
throw e__103681__auto____$6;
}
} else {
throw e108711;

}
}} else {
throw e__103681__auto____$5;
}
} else {
throw e108710;

}
}} else {
throw e__103681__auto____$4;
}
} else {
throw e108709;

}
}} else {
throw e__103681__auto____$3;
}
} else {
throw e108708;

}
}} else {
throw e__103681__auto____$2;
}
} else {
throw e108707;

}
}} else {
throw e__103681__auto____$1;
}
} else {
throw e108706;

}
}} else {
throw e__103681__auto__;
}
} else {
throw e108705;

}
}})();
return wrapper(tag,result);
} else {
if(typeof x === 'string'){
return x;
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hiccup->doc error: ",x], 0));

}
}
});
var result = ((cljs.core.vector_QMARK_(cljs.core.first(hiccup)))?(function (){var iter__5520__auto__ = (function frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__108737(s__108738){
return (new cljs.core.LazySeq(null,(function (){
var s__108738__$1 = s__108738;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__108738__$1);
if(temp__5804__auto__){
var s__108738__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__108738__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__108738__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__108740 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__108739 = (0);
while(true){
if((i__108739 < size__5519__auto__)){
var x = cljs.core._nth(c__5518__auto__,i__108739);
cljs.core.chunk_append(b__108740,single_hiccup_transform(x));

var G__108751 = (i__108739 + (1));
i__108739 = G__108751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__108740),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__108737(cljs.core.chunk_rest(s__108738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__108740),null);
}
} else {
var x = cljs.core.first(s__108738__$2);
return cljs.core.cons(single_hiccup_transform(x),frontend$extensions$html_parser$hiccup__GT_doc_inner_$_iter__108737(cljs.core.rest(s__108738__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(hiccup);
})():single_hiccup_transform(hiccup));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,result);
});
frontend.extensions.html_parser.hiccup__GT_doc = (function frontend$extensions$html_parser$hiccup__GT_doc(format,hiccup){
var s = frontend.extensions.html_parser.hiccup__GT_doc_inner(format,hiccup,cljs.core.PersistentArrayMap.EMPTY);
if(clojure.string.blank_QMARK_(s)){
return "";
} else {
return clojure.string.replace(clojure.string.trim(s),/\n\n+/,"\n\n");
}
});
frontend.extensions.html_parser.html_decode_hiccup = (function frontend$extensions$html_parser$html_decode_hiccup(hiccup){
return clojure.walk.postwalk((function (f){
if(typeof f === 'string'){
return goog.string.unescapeEntities(f);
} else {
return f;
}
}),hiccup);
});
frontend.extensions.html_parser.remove_ending_dash_lines = (function frontend$extensions$html_parser$remove_ending_dash_lines(s){
if(typeof s === 'string'){
return clojure.string.replace(s,/(\n*-\s*\n*)*$/,"");
} else {
return s;
}
});
frontend.extensions.html_parser.convert = (function frontend$extensions$html_parser$convert(format,html){
if(clojure.string.blank_QMARK_(html)){
return null;
} else {
var hiccup = hickory.core.as_hiccup(hickory.core.parse(html));
var decoded_hiccup = frontend.extensions.html_parser.html_decode_hiccup(hiccup);
var result = frontend.extensions.html_parser.hiccup__GT_doc(format,decoded_hiccup);
return frontend.extensions.html_parser.remove_ending_dash_lines(result);
}
});

//# sourceMappingURL=frontend.extensions.html_parser.js.map
