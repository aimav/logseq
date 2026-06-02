goog.provide('frontend.extensions.code');
goog.scope(function(){
  frontend.extensions.code.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
var module$node_modules$codemirror$addon$edit$closebrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$closebrackets", {});
var module$node_modules$codemirror$addon$edit$matchbrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$matchbrackets", {});
var module$node_modules$codemirror$addon$selection$active_line=shadow.js.require("module$node_modules$codemirror$addon$selection$active_line", {});
var module$node_modules$codemirror$addon$hint$show_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$show_hint", {});
var module$node_modules$codemirror$mode$apl$apl=shadow.js.require("module$node_modules$codemirror$mode$apl$apl", {});
var module$node_modules$codemirror$mode$asciiarmor$asciiarmor=shadow.js.require("module$node_modules$codemirror$mode$asciiarmor$asciiarmor", {});
var module$node_modules$codemirror$mode$asn_1$asn_1=shadow.js.require("module$node_modules$codemirror$mode$asn_1$asn_1", {});
var module$node_modules$codemirror$mode$asterisk$asterisk=shadow.js.require("module$node_modules$codemirror$mode$asterisk$asterisk", {});
var module$node_modules$codemirror$mode$brainfuck$brainfuck=shadow.js.require("module$node_modules$codemirror$mode$brainfuck$brainfuck", {});
var module$node_modules$codemirror$mode$clike$clike=shadow.js.require("module$node_modules$codemirror$mode$clike$clike", {});
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$codemirror$mode$cmake$cmake=shadow.js.require("module$node_modules$codemirror$mode$cmake$cmake", {});
var module$node_modules$codemirror$mode$cobol$cobol=shadow.js.require("module$node_modules$codemirror$mode$cobol$cobol", {});
var module$node_modules$codemirror$mode$coffeescript$coffeescript=shadow.js.require("module$node_modules$codemirror$mode$coffeescript$coffeescript", {});
var module$node_modules$codemirror$mode$commonlisp$commonlisp=shadow.js.require("module$node_modules$codemirror$mode$commonlisp$commonlisp", {});
var module$node_modules$codemirror$mode$crystal$crystal=shadow.js.require("module$node_modules$codemirror$mode$crystal$crystal", {});
var module$node_modules$codemirror$mode$css$css=shadow.js.require("module$node_modules$codemirror$mode$css$css", {});
var module$node_modules$codemirror$mode$cypher$cypher=shadow.js.require("module$node_modules$codemirror$mode$cypher$cypher", {});
var module$node_modules$codemirror$mode$d$d=shadow.js.require("module$node_modules$codemirror$mode$d$d", {});
var module$node_modules$codemirror$mode$dart$dart=shadow.js.require("module$node_modules$codemirror$mode$dart$dart", {});
var module$node_modules$codemirror$mode$diff$diff=shadow.js.require("module$node_modules$codemirror$mode$diff$diff", {});
var module$node_modules$codemirror$mode$django$django=shadow.js.require("module$node_modules$codemirror$mode$django$django", {});
var module$node_modules$codemirror$mode$dockerfile$dockerfile=shadow.js.require("module$node_modules$codemirror$mode$dockerfile$dockerfile", {});
var module$node_modules$codemirror$mode$dtd$dtd=shadow.js.require("module$node_modules$codemirror$mode$dtd$dtd", {});
var module$node_modules$codemirror$mode$dylan$dylan=shadow.js.require("module$node_modules$codemirror$mode$dylan$dylan", {});
var module$node_modules$codemirror$mode$ebnf$ebnf=shadow.js.require("module$node_modules$codemirror$mode$ebnf$ebnf", {});
var module$node_modules$codemirror$mode$ecl$ecl=shadow.js.require("module$node_modules$codemirror$mode$ecl$ecl", {});
var module$node_modules$codemirror$mode$eiffel$eiffel=shadow.js.require("module$node_modules$codemirror$mode$eiffel$eiffel", {});
var module$node_modules$codemirror$mode$elm$elm=shadow.js.require("module$node_modules$codemirror$mode$elm$elm", {});
var module$node_modules$codemirror$mode$erlang$erlang=shadow.js.require("module$node_modules$codemirror$mode$erlang$erlang", {});
var module$node_modules$codemirror$mode$factor$factor=shadow.js.require("module$node_modules$codemirror$mode$factor$factor", {});
var module$node_modules$codemirror$mode$fcl$fcl=shadow.js.require("module$node_modules$codemirror$mode$fcl$fcl", {});
var module$node_modules$codemirror$mode$forth$forth=shadow.js.require("module$node_modules$codemirror$mode$forth$forth", {});
var module$node_modules$codemirror$mode$fortran$fortran=shadow.js.require("module$node_modules$codemirror$mode$fortran$fortran", {});
var module$node_modules$codemirror$mode$gas$gas=shadow.js.require("module$node_modules$codemirror$mode$gas$gas", {});
var module$node_modules$codemirror$mode$gfm$gfm=shadow.js.require("module$node_modules$codemirror$mode$gfm$gfm", {});
var module$node_modules$codemirror$mode$gherkin$gherkin=shadow.js.require("module$node_modules$codemirror$mode$gherkin$gherkin", {});
var module$node_modules$codemirror$mode$go$go=shadow.js.require("module$node_modules$codemirror$mode$go$go", {});
var module$node_modules$codemirror$mode$groovy$groovy=shadow.js.require("module$node_modules$codemirror$mode$groovy$groovy", {});
var module$node_modules$codemirror$mode$haml$haml=shadow.js.require("module$node_modules$codemirror$mode$haml$haml", {});
var module$node_modules$codemirror$mode$handlebars$handlebars=shadow.js.require("module$node_modules$codemirror$mode$handlebars$handlebars", {});
var module$node_modules$codemirror$mode$haskell_literate$haskell_literate=shadow.js.require("module$node_modules$codemirror$mode$haskell_literate$haskell_literate", {});
var module$node_modules$codemirror$mode$haskell$haskell=shadow.js.require("module$node_modules$codemirror$mode$haskell$haskell", {});
var module$node_modules$codemirror$mode$haxe$haxe=shadow.js.require("module$node_modules$codemirror$mode$haxe$haxe", {});
var module$node_modules$codemirror$mode$htmlembedded$htmlembedded=shadow.js.require("module$node_modules$codemirror$mode$htmlembedded$htmlembedded", {});
var module$node_modules$codemirror$mode$htmlmixed$htmlmixed=shadow.js.require("module$node_modules$codemirror$mode$htmlmixed$htmlmixed", {});
var module$node_modules$codemirror$mode$http$http=shadow.js.require("module$node_modules$codemirror$mode$http$http", {});
var module$node_modules$codemirror$mode$idl$idl=shadow.js.require("module$node_modules$codemirror$mode$idl$idl", {});
var module$node_modules$codemirror$mode$javascript$javascript=shadow.js.require("module$node_modules$codemirror$mode$javascript$javascript", {});
var module$node_modules$codemirror$mode$jinja2$jinja2=shadow.js.require("module$node_modules$codemirror$mode$jinja2$jinja2", {});
var module$node_modules$codemirror$mode$jsx$jsx=shadow.js.require("module$node_modules$codemirror$mode$jsx$jsx", {});
var module$node_modules$codemirror$mode$julia$julia=shadow.js.require("module$node_modules$codemirror$mode$julia$julia", {});
var module$node_modules$codemirror$mode$livescript$livescript=shadow.js.require("module$node_modules$codemirror$mode$livescript$livescript", {});
var module$node_modules$codemirror$mode$lua$lua=shadow.js.require("module$node_modules$codemirror$mode$lua$lua", {});
var module$node_modules$codemirror$mode$markdown$markdown=shadow.js.require("module$node_modules$codemirror$mode$markdown$markdown", {});
var module$node_modules$codemirror$mode$mathematica$mathematica=shadow.js.require("module$node_modules$codemirror$mode$mathematica$mathematica", {});
var module$node_modules$codemirror$mode$mbox$mbox=shadow.js.require("module$node_modules$codemirror$mode$mbox$mbox", {});
var module$node_modules$codemirror$mode$meta=shadow.js.require("module$node_modules$codemirror$mode$meta", {});
var module$node_modules$codemirror$mode$mirc$mirc=shadow.js.require("module$node_modules$codemirror$mode$mirc$mirc", {});
var module$node_modules$codemirror$mode$mllike$mllike=shadow.js.require("module$node_modules$codemirror$mode$mllike$mllike", {});
var module$node_modules$codemirror$mode$modelica$modelica=shadow.js.require("module$node_modules$codemirror$mode$modelica$modelica", {});
var module$node_modules$codemirror$mode$mscgen$mscgen=shadow.js.require("module$node_modules$codemirror$mode$mscgen$mscgen", {});
var module$node_modules$codemirror$mode$mumps$mumps=shadow.js.require("module$node_modules$codemirror$mode$mumps$mumps", {});
var module$node_modules$codemirror$mode$nginx$nginx=shadow.js.require("module$node_modules$codemirror$mode$nginx$nginx", {});
var module$node_modules$codemirror$mode$nsis$nsis=shadow.js.require("module$node_modules$codemirror$mode$nsis$nsis", {});
var module$node_modules$codemirror$mode$ntriples$ntriples=shadow.js.require("module$node_modules$codemirror$mode$ntriples$ntriples", {});
var module$node_modules$codemirror$mode$octave$octave=shadow.js.require("module$node_modules$codemirror$mode$octave$octave", {});
var module$node_modules$codemirror$mode$oz$oz=shadow.js.require("module$node_modules$codemirror$mode$oz$oz", {});
var module$node_modules$codemirror$mode$pascal$pascal=shadow.js.require("module$node_modules$codemirror$mode$pascal$pascal", {});
var module$node_modules$codemirror$mode$pegjs$pegjs=shadow.js.require("module$node_modules$codemirror$mode$pegjs$pegjs", {});
var module$node_modules$codemirror$mode$perl$perl=shadow.js.require("module$node_modules$codemirror$mode$perl$perl", {});
var module$node_modules$codemirror$mode$php$php=shadow.js.require("module$node_modules$codemirror$mode$php$php", {});
var module$node_modules$codemirror$mode$pig$pig=shadow.js.require("module$node_modules$codemirror$mode$pig$pig", {});
var module$node_modules$codemirror$mode$powershell$powershell=shadow.js.require("module$node_modules$codemirror$mode$powershell$powershell", {});
var module$node_modules$codemirror$mode$properties$properties=shadow.js.require("module$node_modules$codemirror$mode$properties$properties", {});
var module$node_modules$codemirror$mode$protobuf$protobuf=shadow.js.require("module$node_modules$codemirror$mode$protobuf$protobuf", {});
var module$node_modules$codemirror$mode$pug$pug=shadow.js.require("module$node_modules$codemirror$mode$pug$pug", {});
var module$node_modules$codemirror$mode$puppet$puppet=shadow.js.require("module$node_modules$codemirror$mode$puppet$puppet", {});
var module$node_modules$codemirror$mode$python$python=shadow.js.require("module$node_modules$codemirror$mode$python$python", {});
var module$node_modules$codemirror$mode$q$q=shadow.js.require("module$node_modules$codemirror$mode$q$q", {});
var module$node_modules$codemirror$mode$r$r=shadow.js.require("module$node_modules$codemirror$mode$r$r", {});
var module$node_modules$codemirror$mode$rpm$rpm=shadow.js.require("module$node_modules$codemirror$mode$rpm$rpm", {});
var module$node_modules$codemirror$mode$rst$rst=shadow.js.require("module$node_modules$codemirror$mode$rst$rst", {});
var module$node_modules$codemirror$mode$ruby$ruby=shadow.js.require("module$node_modules$codemirror$mode$ruby$ruby", {});
var module$node_modules$codemirror$mode$rust$rust=shadow.js.require("module$node_modules$codemirror$mode$rust$rust", {});
var module$node_modules$codemirror$mode$sas$sas=shadow.js.require("module$node_modules$codemirror$mode$sas$sas", {});
var module$node_modules$codemirror$mode$sass$sass=shadow.js.require("module$node_modules$codemirror$mode$sass$sass", {});
var module$node_modules$codemirror$mode$scheme$scheme=shadow.js.require("module$node_modules$codemirror$mode$scheme$scheme", {});
var module$node_modules$codemirror$mode$shell$shell=shadow.js.require("module$node_modules$codemirror$mode$shell$shell", {});
var module$node_modules$codemirror$mode$sieve$sieve=shadow.js.require("module$node_modules$codemirror$mode$sieve$sieve", {});
var module$node_modules$codemirror$mode$slim$slim=shadow.js.require("module$node_modules$codemirror$mode$slim$slim", {});
var module$node_modules$codemirror$mode$smalltalk$smalltalk=shadow.js.require("module$node_modules$codemirror$mode$smalltalk$smalltalk", {});
var module$node_modules$codemirror$mode$smarty$smarty=shadow.js.require("module$node_modules$codemirror$mode$smarty$smarty", {});
var module$node_modules$codemirror$mode$solr$solr=shadow.js.require("module$node_modules$codemirror$mode$solr$solr", {});
var module$node_modules$codemirror$mode$soy$soy=shadow.js.require("module$node_modules$codemirror$mode$soy$soy", {});
var module$node_modules$codemirror$mode$sparql$sparql=shadow.js.require("module$node_modules$codemirror$mode$sparql$sparql", {});
var module$node_modules$codemirror$mode$spreadsheet$spreadsheet=shadow.js.require("module$node_modules$codemirror$mode$spreadsheet$spreadsheet", {});
var module$node_modules$codemirror$mode$sql$sql=shadow.js.require("module$node_modules$codemirror$mode$sql$sql", {});
var module$node_modules$codemirror$mode$stex$stex=shadow.js.require("module$node_modules$codemirror$mode$stex$stex", {});
var module$node_modules$codemirror$mode$stylus$stylus=shadow.js.require("module$node_modules$codemirror$mode$stylus$stylus", {});
var module$node_modules$codemirror$mode$swift$swift=shadow.js.require("module$node_modules$codemirror$mode$swift$swift", {});
var module$node_modules$codemirror$mode$tcl$tcl=shadow.js.require("module$node_modules$codemirror$mode$tcl$tcl", {});
var module$node_modules$codemirror$mode$textile$textile=shadow.js.require("module$node_modules$codemirror$mode$textile$textile", {});
var module$node_modules$codemirror$mode$tiddlywiki$tiddlywiki=shadow.js.require("module$node_modules$codemirror$mode$tiddlywiki$tiddlywiki", {});
var module$node_modules$codemirror$mode$tiki$tiki=shadow.js.require("module$node_modules$codemirror$mode$tiki$tiki", {});
var module$node_modules$codemirror$mode$toml$toml=shadow.js.require("module$node_modules$codemirror$mode$toml$toml", {});
var module$node_modules$codemirror$mode$tornado$tornado=shadow.js.require("module$node_modules$codemirror$mode$tornado$tornado", {});
var module$node_modules$codemirror$mode$troff$troff=shadow.js.require("module$node_modules$codemirror$mode$troff$troff", {});
var module$node_modules$codemirror$mode$ttcn_cfg$ttcn_cfg=shadow.js.require("module$node_modules$codemirror$mode$ttcn_cfg$ttcn_cfg", {});
var module$node_modules$codemirror$mode$ttcn$ttcn=shadow.js.require("module$node_modules$codemirror$mode$ttcn$ttcn", {});
var module$node_modules$codemirror$mode$turtle$turtle=shadow.js.require("module$node_modules$codemirror$mode$turtle$turtle", {});
var module$node_modules$codemirror$mode$twig$twig=shadow.js.require("module$node_modules$codemirror$mode$twig$twig", {});
var module$node_modules$codemirror$mode$vb$vb=shadow.js.require("module$node_modules$codemirror$mode$vb$vb", {});
var module$node_modules$codemirror$mode$vbscript$vbscript=shadow.js.require("module$node_modules$codemirror$mode$vbscript$vbscript", {});
var module$node_modules$codemirror$mode$velocity$velocity=shadow.js.require("module$node_modules$codemirror$mode$velocity$velocity", {});
var module$node_modules$codemirror$mode$verilog$verilog=shadow.js.require("module$node_modules$codemirror$mode$verilog$verilog", {});
var module$node_modules$codemirror$mode$vhdl$vhdl=shadow.js.require("module$node_modules$codemirror$mode$vhdl$vhdl", {});
var module$node_modules$codemirror$mode$vue$vue=shadow.js.require("module$node_modules$codemirror$mode$vue$vue", {});
var module$node_modules$codemirror$mode$wast$wast=shadow.js.require("module$node_modules$codemirror$mode$wast$wast", {});
var module$node_modules$codemirror$mode$webidl$webidl=shadow.js.require("module$node_modules$codemirror$mode$webidl$webidl", {});
var module$node_modules$codemirror$mode$xml$xml=shadow.js.require("module$node_modules$codemirror$mode$xml$xml", {});
var module$node_modules$codemirror$mode$xquery$xquery=shadow.js.require("module$node_modules$codemirror$mode$xquery$xquery", {});
var module$node_modules$codemirror$mode$yacas$yacas=shadow.js.require("module$node_modules$codemirror$mode$yacas$yacas", {});
var module$node_modules$codemirror$mode$yaml_frontmatter$yaml_frontmatter=shadow.js.require("module$node_modules$codemirror$mode$yaml_frontmatter$yaml_frontmatter", {});
var module$node_modules$codemirror$mode$yaml$yaml=shadow.js.require("module$node_modules$codemirror$mode$yaml$yaml", {});
var module$node_modules$codemirror$mode$z80$z80=shadow.js.require("module$node_modules$codemirror$mode$z80$z80", {});
frontend.extensions.code.from_textarea = frontend.extensions.code.goog$module$goog$object.get(module$node_modules$codemirror$lib$codemirror,"fromTextArea");
frontend.extensions.code.Pos = frontend.extensions.code.goog$module$goog$object.get(module$node_modules$codemirror$lib$codemirror,"Pos");
frontend.extensions.code.textarea_ref_name = "textarea";
frontend.extensions.code.codemirror_ref_name = "codemirror-instance";
(window.CodeMirror = module$node_modules$codemirror$lib$codemirror);
/**
 * All tokens from the beginning of the document to the cursur(inclusive).
 */
frontend.extensions.code.all_tokens_by_cursur = (function frontend$extensions$code$all_tokens_by_cursur(cm){
var cur = cm.getCursor();
var line = cur.line;
var pos = cur.ch;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__126499_SHARP_){
return cm.getLineTokens(p1__126499_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(line)], 0)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__126500_SHARP_){
return (p1__126500_SHARP_.end <= pos);
}),cm.getLineTokens(line)));
});
/**
 * Parse tokens into document state of the last token.
 */
frontend.extensions.code.tokens__GT_doc_state = (function frontend$extensions$code$tokens__GT_doc_state(tokens){
var init_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),(new cljs.core.List(null,new cljs.core.Keyword(null,"ok","ok",967785236),null,(1),null))], null);
var state = init_state;
var tokens__$1 = tokens;
while(true){
if(cljs.core.empty_QMARK_(tokens__$1)){
return state;
} else {
var token = cljs.core.first(tokens__$1);
var token_type = token.type;
var token_string = token.string;
var current_state = cljs.core.first(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state));
var next_state = (((((token_type == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"comment")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"meta")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"error","error",-978969032)))))))))?state:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"bracket"))?(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",token_string);
if(and__5041__auto__){
return cljs.core.some(((function (state,tokens__$1,and__5041__auto__,token,token_type,token_string,current_state,init_state){
return (function (p1__126501_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null], null), null),p1__126501_SHARP_);
});})(state,tokens__$1,and__5041__auto__,token,token_type,token_string,current_state,init_state))
,new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"ignore-map","ignore-map",-1199019590))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",token_string))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"map","map",1371690461))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",token_string))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"list","list",765357683))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",token_string))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"vector","vector",1902966158))):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ignore-map","ignore-map",-1199019590),current_state)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null),token_string))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.pop(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state))):((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",token_string)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),current_state)))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",token_string)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"list","list",765357683),current_state)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",token_string)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vector","vector",1902966158),current_state))))))))?(function (){var new_state_stack = cljs.core.pop(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new_state_stack),new cljs.core.Keyword(null,"key","key",-1516042587))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.pop(new_state_stack),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454),cljs.core.pop(new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454).cljs$core$IFn$_invoke$arity$1(state))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.pop(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state)));
}
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"error","error",-978969032)))
)))))):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"map","map",1371690461))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"atom"))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"key","key",-1516042587)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454).cljs$core$IFn$_invoke$arity$1(state),token_string)], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"key","key",-1516042587)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.pop(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454),cljs.core.pop(new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454).cljs$core$IFn$_invoke$arity$1(state))], 0)):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"list","list",765357683))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"vector","vector",1902966158))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.Keyword(null,"ignore-map","ignore-map",-1199019590)))))))?state:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"state-stack","state-stack",489104326),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-stack","state-stack",489104326).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"error","error",-978969032)))
)))));
var G__126535 = next_state;
var G__126536 = cljs.core.rest(tokens__$1);
state = G__126535;
tokens__$1 = G__126536;
continue;
}
break;
}
});
/**
 * Parse tokens into document state of last token.
 */
frontend.extensions.code.doc_state_at_cursor = (function frontend$extensions$code$doc_state_at_cursor(cm){
var tokens = frontend.extensions.code.all_tokens_by_cursur(cm);
var map__126502 = frontend.extensions.code.tokens__GT_doc_state(tokens);
var map__126502__$1 = cljs.core.__destructure_map(map__126502);
var current_config_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126502__$1,new cljs.core.Keyword(null,"current-config-path","current-config-path",387759454));
var state_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126502__$1,new cljs.core.Keyword(null,"state-stack","state-stack",489104326));
var doc_state = cljs.core.first(state_stack);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_config_path,doc_state], null);
});
frontend.extensions.code.malli_type__GT_completion_postfix = (function frontend$extensions$code$malli_type__GT_completion_postfix(type){
var G__126503 = type;
var G__126503__$1 = (((G__126503 instanceof cljs.core.Keyword))?G__126503.fqn:null);
switch (G__126503__$1) {
case "string":
return "\"\"";

break;
case "map-of":
return "{}";

break;
case "map":
return "{}";

break;
case "set":
return "#{}";

break;
case "vector":
return "[]";

break;
default:
return null;

}
});
module$node_modules$codemirror$lib$codemirror.registerHelper("hint","clojure",(function (cm,_options){
var cur = cm.getCursor();
var token = cm.getTokenAt(cur);
var token_type = token.type;
var token_string = token.string;
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var vec__126504 = frontend.extensions.code.doc_state_at_cursor(cm);
var config_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126504,(0),null);
var doc_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126504,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,"atom")) && (((clojure.string.starts_with_QMARK_(token_string,":")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(doc_state,new cljs.core.Keyword(null,"key","key",-1516042587))))))){
malli.core.walk.cljs$core$IFn$_invoke$arity$2(frontend.schema.handler.common_config.Config_edn,(function (schema,properties,_children,_opts){
var schema_path_126538 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,properties);
if(cljs.core.empty_QMARK_(schema_path_126538)){
} else {
if(cljs.core.empty_QMARK_(config_path)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,cljs.core.first(schema_path_126538),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(config_path),(1))){
if(clojure.string.starts_with_QMARK_(cljs.core.first(schema_path_126538),cljs.core.first(config_path))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,cljs.core.first(schema_path_126538),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(config_path),(2))){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(schema_path_126538),(2))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(schema_path_126538),cljs.core.first(config_path))) && (clojure.string.starts_with_QMARK_(cljs.core.second(schema_path_126538),cljs.core.second(config_path))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,cljs.core.second(schema_path_126538),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
} else {
}
} else {
}
}
}
}

return null;
}));

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(result)))){
var from = (new frontend.extensions.code.Pos(cur.line,token.start));
var to = (new frontend.extensions.code.Pos(cur.line,token.end));
var add_postfix_after_QMARK_ = (token.end <= cur.ch);
var doc = cm.getValue();
var list = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (text){
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(result),text);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),((add_postfix_after_QMARK_)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.extensions.code.malli_type__GT_completion_postfix(type))].join(''):null)].join(''),new cljs.core.Keyword(null,"displayText","displayText",45566701),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (text){
return cljs.core.re_find(cljs.core.re_pattern(["[^;]*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\\s"].join('')),doc);
}),cljs.core.keys(cljs.core.deref(result)))));
var completion = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),list,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null));
return completion;
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = (token_type == null);
if(and__5041__auto__){
var and__5041__auto____$1 = clojure.string.blank_QMARK_(clojure.string.trim(token_string));
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core.not_empty(config_path);
if(cljs.core.truth_(and__5041__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(doc_state,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
malli.core.walk.cljs$core$IFn$_invoke$arity$2(frontend.schema.handler.common_config.Config_edn,(function (schema,properties,_children,_opts){
var schema_path = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,properties);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(config_path,schema_path)){
var G__126507_126539 = malli.core.type.cljs$core$IFn$_invoke$arity$1(schema);
var G__126507_126540__$1 = (((G__126507_126539 instanceof cljs.core.Keyword))?G__126507_126539.fqn:null);
switch (G__126507_126540__$1) {
case "boolean":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.assoc,"true",null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["false",null], 0));

break;
case "enum":
var map__126508_126542 = malli.util.to_map_syntax.cljs$core$IFn$_invoke$arity$1(schema);
var map__126508_126543__$1 = cljs.core.__destructure_map(map__126508_126542);
var children_126544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__126508_126543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var seq__126509_126545 = cljs.core.seq(children_126544);
var chunk__126510_126546 = null;
var count__126511_126547 = (0);
var i__126512_126548 = (0);
while(true){
if((i__126512_126548 < count__126511_126547)){
var child_126549 = chunk__126510_126546.cljs$core$IIndexed$_nth$arity$2(null,i__126512_126548);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_126549),null);


var G__126550 = seq__126509_126545;
var G__126551 = chunk__126510_126546;
var G__126552 = count__126511_126547;
var G__126553 = (i__126512_126548 + (1));
seq__126509_126545 = G__126550;
chunk__126510_126546 = G__126551;
count__126511_126547 = G__126552;
i__126512_126548 = G__126553;
continue;
} else {
var temp__5804__auto___126554 = cljs.core.seq(seq__126509_126545);
if(temp__5804__auto___126554){
var seq__126509_126555__$1 = temp__5804__auto___126554;
if(cljs.core.chunked_seq_QMARK_(seq__126509_126555__$1)){
var c__5565__auto___126556 = cljs.core.chunk_first(seq__126509_126555__$1);
var G__126557 = cljs.core.chunk_rest(seq__126509_126555__$1);
var G__126558 = c__5565__auto___126556;
var G__126559 = cljs.core.count(c__5565__auto___126556);
var G__126560 = (0);
seq__126509_126545 = G__126557;
chunk__126510_126546 = G__126558;
count__126511_126547 = G__126559;
i__126512_126548 = G__126560;
continue;
} else {
var child_126561 = cljs.core.first(seq__126509_126555__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(result,cljs.core.assoc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_126561),null);


var G__126562 = cljs.core.next(seq__126509_126555__$1);
var G__126563 = null;
var G__126564 = (0);
var G__126565 = (0);
seq__126509_126545 = G__126562;
chunk__126510_126546 = G__126563;
count__126511_126547 = G__126564;
i__126512_126548 = G__126565;
continue;
}
} else {
}
}
break;
}

break;
default:

}
} else {
}

return null;
}));

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(result)))){
var from = (new frontend.extensions.code.Pos(cur.line,cur.ch));
var to = (new frontend.extensions.code.Pos(cur.line,cur.ch));
var list = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"displayText","displayText",45566701),text], null);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(result))));
var completion = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),list,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null));
return completion;
} else {
return null;
}
} else {
return null;
}
}
}));
frontend.extensions.code.complete_after = (function frontend$extensions$code$complete_after(cm,pred){
if(cljs.core.truth_((function (){var or__5043__auto__ = cljs.core.not(pred);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$0 ? pred.cljs$core$IFn$_invoke$arity$0() : pred.call(null));
}
})())){
setTimeout((function (){
if(cljs.core.not(cm.state.completionActive)){
return cm.showHint(({"completeSingle": false}));
} else {
return null;
}
}),(100));
} else {
}

return module$node_modules$codemirror$lib$codemirror.Pass;
});
frontend.extensions.code.extra_codemirror_options = (function frontend$extensions$code$extra_codemirror_options(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("editor","extra-codemirror-options","editor/extra-codemirror-options",388833047),cljs.core.PersistentArrayMap.EMPTY);
});
frontend.extensions.code.text__GT_cm_mode = (function frontend$extensions$code$text__GT_cm_mode(var_args){
var G__126514 = arguments.length;
switch (G__126514) {
case 1:
return frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$1 = (function (text){
return frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2(text,new cljs.core.Keyword(null,"name","name",1843675177));
}));

(frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2 = (function (text,by){
if(cljs.core.truth_(text)){
var mode = clojure.string.lower_case(text);
var find_fn_name = (function (){var G__126515 = by;
var G__126515__$1 = (((G__126515 instanceof cljs.core.Keyword))?G__126515.fqn:null);
switch (G__126515__$1) {
case "name":
return "findModeByName";

break;
case "ext":
return "findModeByExtension";

break;
case "file-name":
return "findModeByFileName";

break;
default:
return "findModeByName";

}
})();
var find_fn = frontend.extensions.code.goog$module$goog$object.get(module$node_modules$codemirror$lib$codemirror,find_fn_name);
var cm_mode = (find_fn.cljs$core$IFn$_invoke$arity$1 ? find_fn.cljs$core$IFn$_invoke$arity$1(mode) : find_fn.call(null,mode));
if(cljs.core.truth_(cm_mode)){
return cm_mode.mime;
} else {
return mode;
}
} else {
return null;
}
}));

(frontend.extensions.code.text__GT_cm_mode.cljs$lang$maxFixedArity = 2);

frontend.extensions.code.render_BANG_ = (function frontend$extensions$code$render_BANG_(state){
var vec__126516 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126516,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126516,(1),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126516,(2),null);
var _code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126516,(3),null);
var theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126516,(4),null);
var user_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126516,(5),null);
var default_open_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword("editor","code-mode?","editor/code-mode?",1404453234).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)));
} else {
return and__5041__auto__;
}
})();
var _ = frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","code-mode?","editor/code-mode?",1404453234),false);
var original_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"data-lang","data-lang",969460304));
var mode = (cljs.core.truth_(new cljs.core.Keyword(null,"file?","file?",1755223728).cljs$core$IFn$_invoke$arity$1(config))?frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2(original_mode,new cljs.core.Keyword(null,"ext","ext",-996964541)):frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2(original_mode,new cljs.core.Keyword(null,"name","name",1843675177)));
var lisp_like_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["clojure",null,"lisp",null,"edn",null,"scheme",null], null), null),mode);
var config_edit_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword(null,"file?","file?",1755223728).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return clojure.string.ends_with_QMARK_(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(config),"config.edn");
} else {
return and__5041__auto__;
}
})();
var textarea = goog.dom.getElement(id);
var radix_color = frontend.state.sub(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984));
var default_cm_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(radix_color)?["lsradix ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme)].join(''):["solarized ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme)].join('')),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),lisp_like_QMARK_,new cljs.core.Keyword(null,"styleActiveLine","styleActiveLine",-677594147),true], null);
var cm_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_cm_options,frontend.extensions.code.extra_codemirror_options(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(-1),new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Esc",(function (cm){
frontend.extensions.code.goog$module$goog$object.set(cm,"escPressed",true);

frontend.handler.code.save_code_editor_BANG_();

var temp__5804__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto__)){
var block_id = temp__5804__auto__;
var block = (function (){var G__126519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__126519) : frontend.db.pull.call(null,G__126519));
})();
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"max","max",61366548),block_id) : frontend.handler.editor.edit_block_BANG_.call(null,block,new cljs.core.Keyword(null,"max","max",61366548),block_id));
} else {
return null;
}
})], null),(cljs.core.truth_(config_edit_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, ["':'",frontend.extensions.code.complete_after,"Ctrl-Space","autocomplete"], null):null)], 0))], null),((frontend.config.publishing_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"cursorBlinkRate","cursorBlinkRate",1916335188),(-1)], null):null),(cljs.core.truth_(config_edit_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hintOptions","hintOptions",-1460249832),cljs.core.PersistentArrayMap.EMPTY], null):null),user_options], 0));
var editor = (cljs.core.truth_(textarea)?(function (){var G__126520 = textarea;
var G__126521 = cljs.core.clj__GT_js(cm_options);
return (frontend.extensions.code.from_textarea.cljs$core$IFn$_invoke$arity$2 ? frontend.extensions.code.from_textarea.cljs$core$IFn$_invoke$arity$2(G__126520,G__126521) : frontend.extensions.code.from_textarea.call(null,G__126520,G__126521));
})():null);
if(cljs.core.truth_(editor)){
var textarea_ref_126568 = rum.core.ref_node(state,frontend.extensions.code.textarea_ref_name);
var element_126569 = editor.getWrapperElement();
frontend.extensions.code.goog$module$goog$object.set(textarea_ref_126568,frontend.extensions.code.codemirror_ref_name,editor);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"calc")){
editor.on("change",(function (_cm,_e){
var new_code = editor.getValue();
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"calc-atom","calc-atom",202304533).cljs$core$IFn$_invoke$arity$1(state),frontend.extensions.calc.eval_lines(new_code));
}));
} else {
}

editor.on("blur",(function (cm,e){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),frontend.state.get_current_route())) || (cljs.core.not(frontend.extensions.code.goog$module$goog$object.get(cm,"escPressed"))))){
frontend.handler.code.save_code_editor_BANG_();
} else {
}

frontend.state.set_block_component_editing_mode_BANG_(false);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346),null);
}));

editor.on("focus",(function (_e){
frontend.state.set_block_component_editing_mode_BANG_(true);

return frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","code-block-context","editor/code-block-context",-1384305346),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editor","editor",-989377770),editor,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
}));

element_126569.addEventListener("keydown",(function (e){
var key_code = e.code;
var meta_or_ctrl_pressed_QMARK_ = (function (){var or__5043__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return e.metaKey;
}
})();
if(cljs.core.truth_(meta_or_ctrl_pressed_QMARK_)){
var G__126522 = key_code;
switch (G__126522) {
case "BracketLeft":
return frontend.util.stop(e);

break;
case "BracketRight":
return frontend.util.stop(e);

break;
default:
return null;

}
} else {
return null;
}
}));

element_126569.addEventListener("mousedown",(function (e){
frontend.util.stop(e);

frontend.state.clear_selection_BANG_();

var temp__5804__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__126523 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
return (frontend.db.get_block_by_uuid.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_by_uuid.cljs$core$IFn$_invoke$arity$1(G__126523) : frontend.db.get_block_by_uuid.call(null,G__126523));
})());
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var block = temp__5804__auto__;
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5(id,editor.getValue(),block,null,false);
} else {
return null;
}
}));

element_126569.addEventListener("touchstart",(function (e){
return e.stopPropagation();
}));

editor.save();

editor.refresh();

if(cljs.core.truth_(default_open_QMARK_)){
editor.focus();
} else {
}
} else {
}

return editor;
});
frontend.extensions.code.load_and_render_BANG_ = (function frontend$extensions$code$load_and_render_BANG_(state){
var editor_atom = new cljs.core.Keyword(null,"editor-atom","editor-atom",1409591060).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.deref(editor_atom))){
return null;
} else {
var editor = frontend.extensions.code.render_BANG_(state);
return cljs.core.reset_BANG_(editor_atom,editor);
}
});
frontend.extensions.code.get_theme_BANG_ = (function frontend$extensions$code$get_theme_BANG_(){
if(cljs.core.truth_(frontend.state.sub(new cljs.core.Keyword("ui","radix-color","ui/radix-color",1454689984)))){
return ["lsradix ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)))].join('');
} else {
return ["solarized ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.state.sub(new cljs.core.Keyword("ui","theme","ui/theme",-1247877132)))].join('');
}
});
frontend.extensions.code.editor = rum.core.lazy_build(rum.core.build_defcs,(function (state,_config,id,attr,code,_theme,_options){
var attrs126524 = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr);
if(cljs.core.truth_(temp__5804__auto__)){
var mode = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"calc")){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__code-lang","div.extensions__code-lang",1159233563),clojure.string.lower_case(mode)], null);
}
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs126524))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__code"], null)], null),attrs126524], 0))):{'className':"extensions__code"}),((cljs.core.map_QMARK_(attrs126524))?[daiquiri.core.create_element("div",{'className':"code-editor flex flex-1 flex-row w-full"},[(function (){var attrs126525 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ref","ref",1289896967),frontend.extensions.code.textarea_ref_name,new cljs.core.Keyword(null,"default-value","default-value",232220170),code], null),attr], 0));
return daiquiri.core.create_element("textarea",((cljs.core.map_QMARK_(attrs126525))?daiquiri.interpreter.element_attributes(attrs126525):null),((cljs.core.map_QMARK_(attrs126525))?null:[daiquiri.interpreter.interpret(attrs126525)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr),"calc"))?frontend.extensions.calc.results(new cljs.core.Keyword(null,"calc-atom","calc-atom",202304533).cljs$core$IFn$_invoke$arity$1(state)):null)])]:[daiquiri.interpreter.interpret(attrs126524),daiquiri.core.create_element("div",{'className':"code-editor flex flex-1 flex-row w-full"},[(function (){var attrs126526 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ref","ref",1289896967),frontend.extensions.code.textarea_ref_name,new cljs.core.Keyword(null,"default-value","default-value",232220170),code], null),attr], 0));
return daiquiri.core.create_element("textarea",((cljs.core.map_QMARK_(attrs126526))?daiquiri.interpreter.element_attributes(attrs126526):null),((cljs.core.map_QMARK_(attrs126526))?null:[daiquiri.interpreter.interpret(attrs126526)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr),"calc"))?frontend.extensions.calc.results(new cljs.core.Keyword(null,"calc-atom","calc-atom",202304533).cljs$core$IFn$_invoke$arity$1(state)):null)])]));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var vec__126527 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126527,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126527,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126527,(2),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126527,(3),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126527,(4),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126527,(5),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"editor-atom","editor-atom",1409591060),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"calc-atom","calc-atom",202304533),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.calc.eval_lines(code)),new cljs.core.Keyword(null,"code-options","code-options",1113362965),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"last-theme","last-theme",-1086226741),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.code.get_theme_BANG_())], 0));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.extensions.code.load_and_render_BANG_(state);

return state;
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
var next_theme_126571 = frontend.extensions.code.get_theme_BANG_();
var last_theme_126572 = cljs.core.deref(new cljs.core.Keyword(null,"last-theme","last-theme",-1086226741).cljs$core$IFn$_invoke$arity$1(state));
var editor_126573 = (function (){var G__126530 = state;
var G__126530__$1 = (((G__126530 == null))?null:new cljs.core.Keyword(null,"editor-atom","editor-atom",1409591060).cljs$core$IFn$_invoke$arity$1(G__126530));
if((G__126530__$1 == null)){
return null;
} else {
return cljs.core.deref(G__126530__$1);
}
})();
if(cljs.core.truth_((function (){var and__5041__auto__ = editor_126573;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_theme_126571,last_theme_126572);
} else {
return and__5041__auto__;
}
})())){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"last-theme","last-theme",-1086226741).cljs$core$IFn$_invoke$arity$1(state),next_theme_126571);

editor_126573.setOption("theme",next_theme_126571);
} else {
}

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"code-options","code-options",1113362965).cljs$core$IFn$_invoke$arity$1(state),cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"file?","file?",1755223728).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state))))){
} else {
var code_126574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(3));
var editor_126575 = cljs.core.deref(new cljs.core.Keyword(null,"editor-atom","editor-atom",1409591060).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_((function (){var and__5041__auto__ = editor_126575;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(editor_126575.getValue(),code_126574);
} else {
return and__5041__auto__;
}
})())){
editor_126575.setValue(code_126574);
} else {
}
}

return state;
})], null)], null),"frontend.extensions.code/editor");
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("codemirror","focus","codemirror/focus",-19393885),(function (p__126531){
var vec__126532 = p__126531;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__126532,(0),null);
var block = frontend.state.get_edit_block();
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
frontend.state.clear_edit_BANG_();

return setTimeout((function (){
var block_node = frontend.util.get_first_block_by_id(block_uuid);
var textarea_ref = block_node.querySelector("textarea");
var temp__5804__auto__ = frontend.extensions.code.goog$module$goog$object.get(textarea_ref,frontend.extensions.code.codemirror_ref_name);
if(cljs.core.truth_(temp__5804__auto__)){
var codemirror_ref = temp__5804__auto__;
return codemirror_ref.focus();
} else {
return null;
}
}),(100));
}));

//# sourceMappingURL=frontend.extensions.code.js.map
