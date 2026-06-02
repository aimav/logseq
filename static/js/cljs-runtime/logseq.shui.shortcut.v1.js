goog.provide('logseq.shui.shortcut.v1');
logseq.shui.shortcut.v1.mac_QMARK_ = goog.userAgent.MAC;
logseq.shui.shortcut.v1.print_shortcut_key = (function logseq$shui$shortcut$v1$print_shortcut_key(key){
var result = ((cljs.core.coll_QMARK_(key))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",key):(function (){var G__109547 = ((typeof key === 'string')?clojure.string.lower_case(key):key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__109547)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2193",G__109547)){
return "\u2193";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("space",G__109547)){
return "Space";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tab",G__109547)){
return "Tab";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2318",G__109547)){
if(cljs.core.truth_(logseq.shui.shortcut.v1.mac_QMARK_)){
return "\u2318";
} else {
return "Ctrl";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("right",G__109547)){
return "\u2192";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("up",G__109547)){
return "\u2191";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("comma",G__109547)){
return ",";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("opt",G__109547)){
if(cljs.core.truth_(logseq.shui.shortcut.v1.mac_QMARK_)){
return "Opt";
} else {
return "Alt";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("command",G__109547)){
if(cljs.core.truth_(logseq.shui.shortcut.v1.mac_QMARK_)){
return "\u2318";
} else {
return "Ctrl";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2192",G__109547)){
return "\u2192";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2303",G__109547)){
return "Ctrl";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u23CE",G__109547)){
return "\u23CE";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2190",G__109547)){
return "\u2190";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("return",G__109547)){
return "\u23CE";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("grave-accent",G__109547)){
return "`";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("option",G__109547)){
if(cljs.core.truth_(logseq.shui.shortcut.v1.mac_QMARK_)){
return "Opt";
} else {
return "Alt";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("single-quote",G__109547)){
return "'";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u21E7",G__109547)){
return "\u21E7";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("page-up",G__109547)){
return "\uF571";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("open-square-bracket",G__109547)){
return "[";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("semicolon",G__109547)){
return ";";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("shift",G__109547)){
return "\u21E7";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dash",G__109547)){
return "-";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("alt",G__109547)){
if(cljs.core.truth_(logseq.shui.shortcut.v1.mac_QMARK_)){
return "Opt";
} else {
return "Alt";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2325",G__109547)){
if(cljs.core.truth_(logseq.shui.shortcut.v1.mac_QMARK_)){
return "Opt";
} else {
return "Alt";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("control",G__109547)){
return "Ctrl";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("slash",G__109547)){
return "/";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("mod",G__109547)){
if(cljs.core.truth_(logseq.shui.shortcut.v1.mac_QMARK_)){
return "\u2318";
} else {
return "Ctrl";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cmd",G__109547)){
if(cljs.core.truth_(logseq.shui.shortcut.v1.mac_QMARK_)){
return "\u2318";
} else {
return "Ctrl";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("down",G__109547)){
return "\u2193";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u2191",G__109547)){
return "\u2191";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("meta",G__109547)){
if(cljs.core.truth_(logseq.shui.shortcut.v1.mac_QMARK_)){
return "\u2318";
} else {
return "\u229E";
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("page-down",G__109547)){
return "\uF572";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ctrl",G__109547)){
return "Ctrl";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("period",G__109547)){
return ".";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("backslash",G__109547)){
return "\\";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("close-square-bracket",G__109547)){
return "]";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",G__109547)){
return "Space";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("enter",G__109547)){
return "\u23CE";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("equals",G__109547)){
return "=";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("left",G__109547)){
return "\u2190";
} else {
return cljs.core.name(key);

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
}
}
}
}
}
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((result).length),(1))){
return result;
} else {
return clojure.string.capitalize(result);
}
});
logseq.shui.shortcut.v1.to_string = (function logseq$shui$shortcut$v1$to_string(input){
if(typeof input === 'string'){
return input;
} else {
if((input instanceof cljs.core.Keyword)){
return cljs.core.name(input);
} else {
if((input instanceof cljs.core.Symbol)){
return cljs.core.name(input);
} else {
if(typeof input === 'number'){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(input);
} else {
if(cljs.core.uuid_QMARK_(input)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(input);
} else {
if((input == null)){
return "";
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input], 0));

}
}
}
}
}
}
});
logseq.shui.shortcut.v1.parse_shortcuts = (function logseq$shui$shortcut$v1$parse_shortcuts(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109548_SHARP_){
if(clojure.string.includes_QMARK_(p1__109548_SHARP_,"+")){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__109548_SHARP_,/\+/);
} else {
return p1__109548_SHARP_;
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(x,/ /));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ \| /));
});
logseq.shui.shortcut.v1.part = rum.core.lazy_build(rum.core.build_defc,(function (ks,size,p__109549){
var map__109550 = p__109549;
var map__109550__$1 = cljs.core.__destructure_map(map__109550);
var interactive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109550__$1,new cljs.core.Keyword(null,"interactive?","interactive?",367617676));
var tiles = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.shui.shortcut.v1.print_shortcut_key,ks);
var interactive_QMARK___$1 = interactive_QMARK_ === true;
return daiquiri.interpreter.interpret((function (){var G__109563 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),((interactive_QMARK___$1)?new cljs.core.Keyword(null,"default","default",-1987822328):new cljs.core.Keyword(null,"text","text",-1790561697)),new cljs.core.Keyword(null,"class","class",-2030961996),["bg-gray-03 text-gray-10 px-1.5 py-0 leading-4 h-5 rounded font-normal ",((interactive_QMARK___$1)?"hover:bg-gray-04 active:bg-gray-03 hover:text-gray-12":"bg-transparent cursor-default active:bg-gray-03 hover:text-gray-11 opacity-80")].join(''),new cljs.core.Keyword(null,"size","size",1098693007),size], null);
var G__109564 = (function (){var iter__5520__auto__ = (function logseq$shui$shortcut$v1$iter__109565(s__109566){
return (new cljs.core.LazySeq(null,(function (){
var s__109566__$1 = s__109566;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109566__$1);
if(temp__5804__auto__){
var s__109566__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109566__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109566__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109568 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109567 = (0);
while(true){
if((i__109567 < size__5519__auto__)){
var vec__109569 = cljs.core._nth(c__5518__auto__,i__109567);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109569,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109569,(1),null);
cljs.core.chunk_append(b__109568,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((((0) < index))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ui__button__tile-separator","span.ui__button__tile-separator",607084689)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ui__button__tile","span.ui__button__tile",-240828239),tile], null)], null));

var G__109604 = (i__109567 + (1));
i__109567 = G__109604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109568),logseq$shui$shortcut$v1$iter__109565(cljs.core.chunk_rest(s__109566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109568),null);
}
} else {
var vec__109572 = cljs.core.first(s__109566__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109572,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109572,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((((0) < index))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ui__button__tile-separator","span.ui__button__tile-separator",607084689)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ui__button__tile","span.ui__button__tile",-240828239),tile], null)], null),logseq$shui$shortcut$v1$iter__109565(cljs.core.rest(s__109566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tiles));
})();
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__109563,G__109564) : logseq.shui.ui.button.call(null,G__109563,G__109564));
})());
}),null,"logseq.shui.shortcut.v1/part");
logseq.shui.shortcut.v1.root = rum.core.lazy_build(rum.core.build_defc,(function() { 
var G__109605__delegate = function (shortcut,p__109576){
var map__109577 = p__109576;
var map__109577__$1 = cljs.core.__destructure_map(map__109577);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109577__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109577__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"gray","gray",1013268388));
var interactive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109577__$1,new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true);
if(cljs.core.seq(shortcut)){
var shortcuts = ((cljs.core.coll_QMARK_(shortcut))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shortcut], null):logseq.shui.shortcut.v1.parse_shortcuts(shortcut));
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),interactive_QMARK_], null);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function logseq$shui$shortcut$v1$iter__109578(s__109579){
return (new cljs.core.LazySeq(null,(function (){
var s__109579__$1 = s__109579;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__109579__$1);
if(temp__5804__auto__){
var s__109579__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109579__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109579__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109581 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109580 = (0);
while(true){
if((i__109580 < size__5519__auto__)){
var vec__109582 = cljs.core._nth(c__5518__auto__,i__109580);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109582,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109582,(1),null);
cljs.core.chunk_append(b__109581,(function (){var attrs109575 = ((((0) < index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-11.text-sm","div.text-gray-11.text-sm",1077511791),"|"], null):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs109575))?daiquiri.interpreter.element_attributes(attrs109575):null),((cljs.core.map_QMARK_(attrs109575))?[((cljs.core.coll_QMARK_(cljs.core.first(binding)))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__109580,attrs109575,vec__109582,index,binding,c__5518__auto__,size__5519__auto__,b__109581,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_){
return (function logseq$shui$shortcut$v1$iter__109578_$_iter__109585(s__109586){
return (new cljs.core.LazySeq(null,((function (i__109580,attrs109575,vec__109582,index,binding,c__5518__auto__,size__5519__auto__,b__109581,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_){
return (function (){
var s__109586__$1 = s__109586;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__109586__$1);
if(temp__5804__auto____$1){
var s__109586__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__109586__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__109586__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__109588 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__109587 = (0);
while(true){
if((i__109587 < size__5519__auto____$1)){
var ks = cljs.core._nth(c__5518__auto____$1,i__109587);
cljs.core.chunk_append(b__109588,logseq.shui.shortcut.v1.part(ks,size,opts));

var G__109606 = (i__109587 + (1));
i__109587 = G__109606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109588),logseq$shui$shortcut$v1$iter__109578_$_iter__109585(cljs.core.chunk_rest(s__109586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109588),null);
}
} else {
var ks = cljs.core.first(s__109586__$2);
return cljs.core.cons(logseq.shui.shortcut.v1.part(ks,size,opts),logseq$shui$shortcut$v1$iter__109578_$_iter__109585(cljs.core.rest(s__109586__$2)));
}
} else {
return null;
}
break;
}
});})(i__109580,attrs109575,vec__109582,index,binding,c__5518__auto__,size__5519__auto__,b__109581,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_))
,null,null));
});})(i__109580,attrs109575,vec__109582,index,binding,c__5518__auto__,size__5519__auto__,b__109581,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_))
;
return iter__5520__auto__(binding);
})()):logseq.shui.shortcut.v1.part(binding,size,opts))]:[daiquiri.interpreter.interpret(attrs109575),((cljs.core.coll_QMARK_(cljs.core.first(binding)))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (i__109580,attrs109575,vec__109582,index,binding,c__5518__auto__,size__5519__auto__,b__109581,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_){
return (function logseq$shui$shortcut$v1$iter__109578_$_iter__109589(s__109590){
return (new cljs.core.LazySeq(null,((function (i__109580,attrs109575,vec__109582,index,binding,c__5518__auto__,size__5519__auto__,b__109581,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_){
return (function (){
var s__109590__$1 = s__109590;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__109590__$1);
if(temp__5804__auto____$1){
var s__109590__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__109590__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__109590__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__109592 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__109591 = (0);
while(true){
if((i__109591 < size__5519__auto____$1)){
var ks = cljs.core._nth(c__5518__auto____$1,i__109591);
cljs.core.chunk_append(b__109592,logseq.shui.shortcut.v1.part(ks,size,opts));

var G__109607 = (i__109591 + (1));
i__109591 = G__109607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109592),logseq$shui$shortcut$v1$iter__109578_$_iter__109589(cljs.core.chunk_rest(s__109590__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109592),null);
}
} else {
var ks = cljs.core.first(s__109590__$2);
return cljs.core.cons(logseq.shui.shortcut.v1.part(ks,size,opts),logseq$shui$shortcut$v1$iter__109578_$_iter__109589(cljs.core.rest(s__109590__$2)));
}
} else {
return null;
}
break;
}
});})(i__109580,attrs109575,vec__109582,index,binding,c__5518__auto__,size__5519__auto__,b__109581,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_))
,null,null));
});})(i__109580,attrs109575,vec__109582,index,binding,c__5518__auto__,size__5519__auto__,b__109581,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_))
;
return iter__5520__auto__(binding);
})()):logseq.shui.shortcut.v1.part(binding,size,opts))]));
})());

var G__109608 = (i__109580 + (1));
i__109580 = G__109608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109581),logseq$shui$shortcut$v1$iter__109578(cljs.core.chunk_rest(s__109579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109581),null);
}
} else {
var vec__109593 = cljs.core.first(s__109579__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109593,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109593,(1),null);
return cljs.core.cons((function (){var attrs109575 = ((((0) < index))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-gray-11.text-sm","div.text-gray-11.text-sm",1077511791),"|"], null):null);
return daiquiri.core.create_element(daiquiri.core.fragment,((cljs.core.map_QMARK_(attrs109575))?daiquiri.interpreter.element_attributes(attrs109575):null),((cljs.core.map_QMARK_(attrs109575))?[((cljs.core.coll_QMARK_(cljs.core.first(binding)))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (attrs109575,vec__109593,index,binding,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_){
return (function logseq$shui$shortcut$v1$iter__109578_$_iter__109596(s__109597){
return (new cljs.core.LazySeq(null,(function (){
var s__109597__$1 = s__109597;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__109597__$1);
if(temp__5804__auto____$1){
var s__109597__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__109597__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109597__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109599 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109598 = (0);
while(true){
if((i__109598 < size__5519__auto__)){
var ks = cljs.core._nth(c__5518__auto__,i__109598);
cljs.core.chunk_append(b__109599,logseq.shui.shortcut.v1.part(ks,size,opts));

var G__109609 = (i__109598 + (1));
i__109598 = G__109609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109599),logseq$shui$shortcut$v1$iter__109578_$_iter__109596(cljs.core.chunk_rest(s__109597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109599),null);
}
} else {
var ks = cljs.core.first(s__109597__$2);
return cljs.core.cons(logseq.shui.shortcut.v1.part(ks,size,opts),logseq$shui$shortcut$v1$iter__109578_$_iter__109596(cljs.core.rest(s__109597__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(attrs109575,vec__109593,index,binding,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_))
;
return iter__5520__auto__(binding);
})()):logseq.shui.shortcut.v1.part(binding,size,opts))]:[daiquiri.interpreter.interpret(attrs109575),((cljs.core.coll_QMARK_(cljs.core.first(binding)))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = ((function (attrs109575,vec__109593,index,binding,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_){
return (function logseq$shui$shortcut$v1$iter__109578_$_iter__109600(s__109601){
return (new cljs.core.LazySeq(null,(function (){
var s__109601__$1 = s__109601;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__109601__$1);
if(temp__5804__auto____$1){
var s__109601__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__109601__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__109601__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__109603 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__109602 = (0);
while(true){
if((i__109602 < size__5519__auto__)){
var ks = cljs.core._nth(c__5518__auto__,i__109602);
cljs.core.chunk_append(b__109603,logseq.shui.shortcut.v1.part(ks,size,opts));

var G__109610 = (i__109602 + (1));
i__109602 = G__109610;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__109603),logseq$shui$shortcut$v1$iter__109578_$_iter__109600(cljs.core.chunk_rest(s__109601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__109603),null);
}
} else {
var ks = cljs.core.first(s__109601__$2);
return cljs.core.cons(logseq.shui.shortcut.v1.part(ks,size,opts),logseq$shui$shortcut$v1$iter__109578_$_iter__109600(cljs.core.rest(s__109601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(attrs109575,vec__109593,index,binding,s__109579__$2,temp__5804__auto__,shortcuts,opts,map__109577,map__109577__$1,size,theme,interactive_QMARK_))
;
return iter__5520__auto__(binding);
})()):logseq.shui.shortcut.v1.part(binding,size,opts))]));
})(),logseq$shui$shortcut$v1$iter__109578(cljs.core.rest(s__109579__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,shortcuts));
})());
} else {
return null;
}
};
var G__109605 = function (shortcut,var_args){
var p__109576 = null;
if (arguments.length > 1) {
var G__109611__i = 0, G__109611__a = new Array(arguments.length -  1);
while (G__109611__i < G__109611__a.length) {G__109611__a[G__109611__i] = arguments[G__109611__i + 1]; ++G__109611__i;}
  p__109576 = new cljs.core.IndexedSeq(G__109611__a,0,null);
} 
return G__109605__delegate.call(this,shortcut,p__109576);};
G__109605.cljs$lang$maxFixedArity = 1;
G__109605.cljs$lang$applyTo = (function (arglist__109612){
var shortcut = cljs.core.first(arglist__109612);
var p__109576 = cljs.core.rest(arglist__109612);
return G__109605__delegate(shortcut,p__109576);
});
G__109605.cljs$core$IFn$_invoke$arity$variadic = G__109605__delegate;
return G__109605;
})()
,null,"logseq.shui.shortcut.v1/root");

//# sourceMappingURL=logseq.shui.shortcut.v1.js.map
