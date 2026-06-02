goog.provide('frontend.extensions.zotero.handler');
frontend.extensions.zotero.handler.add = (function frontend$extensions$zotero$handler$add(page_name,type,item){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_111875){
var state_val_111876 = (state_111875[(1)]);
if((state_val_111876 === (7))){
var inst_111790 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244));
var state_111875__$1 = state_111875;
var statearr_111877_112113 = state_111875__$1;
(statearr_111877_112113[(2)] = inst_111790);

(statearr_111877_112113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (20))){
var inst_111870 = (state_111875[(2)]);
var state_111875__$1 = state_111875;
var statearr_111878_112114 = state_111875__$1;
(statearr_111878_112114[(2)] = inst_111870);

(statearr_111878_112114[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (27))){
var inst_111824 = (state_111875[(7)]);
var inst_111840 = (state_111875[(8)]);
var inst_111840__$1 = cljs.core.seq(inst_111824);
var state_111875__$1 = (function (){var statearr_111879 = state_111875;
(statearr_111879[(8)] = inst_111840__$1);

return statearr_111879;
})();
if(inst_111840__$1){
var statearr_111880_112115 = state_111875__$1;
(statearr_111880_112115[(1)] = (29));

} else {
var statearr_111881_112116 = state_111875__$1;
(statearr_111881_112116[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (1))){
var inst_111781 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
var inst_111782 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(item);
var inst_111783 = new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(inst_111782);
var state_111875__$1 = (function (){var statearr_111882 = state_111875;
(statearr_111882[(9)] = inst_111781);

(statearr_111882[(10)] = inst_111783);

return statearr_111882;
})();
var G__111883_112117 = type;
var G__111883_112118__$1 = (((G__111883_112117 instanceof cljs.core.Keyword))?G__111883_112117.fqn:null);
switch (G__111883_112118__$1) {
case "notes":
var statearr_111884_112120 = state_111875__$1;
(statearr_111884_112120[(1)] = (3));


break;
case "attachments":
var statearr_111885_112121 = state_111875__$1;
(statearr_111885_112121[(1)] = (4));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__111883_112118__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (24))){
var inst_111827 = (state_111875[(11)]);
var inst_111826 = (state_111875[(12)]);
var inst_111829 = (inst_111827 < inst_111826);
var inst_111830 = inst_111829;
var state_111875__$1 = state_111875;
if(cljs.core.truth_(inst_111830)){
var statearr_111886_112122 = state_111875__$1;
(statearr_111886_112122[(1)] = (26));

} else {
var statearr_111887_112123 = state_111875__$1;
(statearr_111887_112123[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (4))){
var state_111875__$1 = state_111875;
var statearr_111888_112124 = state_111875__$1;
(statearr_111888_112124[(2)] = frontend.extensions.zotero.api.attachments);

(statearr_111888_112124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (15))){
var state_111875__$1 = state_111875;
var statearr_111889_112125 = state_111875__$1;
(statearr_111889_112125[(2)] = null);

(statearr_111889_112125[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (21))){
var inst_111810 = (state_111875[(13)]);
var inst_111823 = cljs.core.seq(inst_111810);
var inst_111824 = inst_111823;
var inst_111825 = null;
var inst_111826 = (0);
var inst_111827 = (0);
var state_111875__$1 = (function (){var statearr_111890 = state_111875;
(statearr_111890[(7)] = inst_111824);

(statearr_111890[(14)] = inst_111825);

(statearr_111890[(12)] = inst_111826);

(statearr_111890[(11)] = inst_111827);

return statearr_111890;
})();
var statearr_111891_112126 = state_111875__$1;
(statearr_111891_112126[(2)] = null);

(statearr_111891_112126[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (31))){
var inst_111860 = (state_111875[(2)]);
var state_111875__$1 = state_111875;
var statearr_111892_112127 = state_111875__$1;
(statearr_111892_112127[(2)] = inst_111860);

(statearr_111892_112127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (32))){
var inst_111840 = (state_111875[(8)]);
var inst_111844 = cljs.core.chunk_first(inst_111840);
var inst_111845 = cljs.core.chunk_rest(inst_111840);
var inst_111846 = cljs.core.count(inst_111844);
var inst_111824 = inst_111845;
var inst_111825 = inst_111844;
var inst_111826 = inst_111846;
var inst_111827 = (0);
var state_111875__$1 = (function (){var statearr_111893 = state_111875;
(statearr_111893[(7)] = inst_111824);

(statearr_111893[(14)] = inst_111825);

(statearr_111893[(12)] = inst_111826);

(statearr_111893[(11)] = inst_111827);

return statearr_111893;
})();
var statearr_111894_112128 = state_111875__$1;
(statearr_111894_112128[(2)] = null);

(statearr_111894_112128[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (33))){
var inst_111840 = (state_111875[(8)]);
var inst_111817 = (state_111875[(15)]);
var inst_111849 = cljs.core.first(inst_111840);
var inst_111850 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_111851 = [inst_111817,false,false];
var inst_111852 = cljs.core.PersistentHashMap.fromArrays(inst_111850,inst_111851);
var inst_111853 = frontend.handler.editor.api_insert_new_block_BANG_(inst_111849,inst_111852);
var inst_111854 = cljs.core.next(inst_111840);
var inst_111824 = inst_111854;
var inst_111825 = null;
var inst_111826 = (0);
var inst_111827 = (0);
var state_111875__$1 = (function (){var statearr_111895 = state_111875;
(statearr_111895[(16)] = inst_111853);

(statearr_111895[(7)] = inst_111824);

(statearr_111895[(14)] = inst_111825);

(statearr_111895[(12)] = inst_111826);

(statearr_111895[(11)] = inst_111827);

return statearr_111895;
})();
var statearr_111896_112129 = state_111875__$1;
(statearr_111896_112129[(2)] = null);

(statearr_111896_112129[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (13))){
var inst_111804 = (state_111875[(2)]);
var state_111875__$1 = state_111875;
if(cljs.core.truth_(inst_111804)){
var statearr_111897_112130 = state_111875__$1;
(statearr_111897_112130[(1)] = (14));

} else {
var statearr_111898_112131 = state_111875__$1;
(statearr_111898_112131[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (22))){
var state_111875__$1 = state_111875;
var statearr_111899_112132 = state_111875__$1;
(statearr_111899_112132[(2)] = null);

(statearr_111899_112132[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (29))){
var inst_111840 = (state_111875[(8)]);
var inst_111842 = cljs.core.chunked_seq_QMARK_(inst_111840);
var state_111875__$1 = state_111875;
if(inst_111842){
var statearr_111900_112133 = state_111875__$1;
(statearr_111900_112133[(1)] = (32));

} else {
var statearr_111901_112134 = state_111875__$1;
(statearr_111901_112134[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (6))){
var inst_111788 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518));
var state_111875__$1 = state_111875;
var statearr_111902_112135 = state_111875__$1;
(statearr_111902_112135[(2)] = inst_111788);

(statearr_111902_112135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (28))){
var inst_111862 = (state_111875[(2)]);
var state_111875__$1 = state_111875;
var statearr_111903_112136 = state_111875__$1;
(statearr_111903_112136[(2)] = inst_111862);

(statearr_111903_112136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (25))){
var inst_111864 = (state_111875[(2)]);
var state_111875__$1 = state_111875;
var statearr_111904_112137 = state_111875__$1;
(statearr_111904_112137[(2)] = inst_111864);

(statearr_111904_112137[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (34))){
var inst_111857 = (state_111875[(2)]);
var state_111875__$1 = state_111875;
var statearr_111905_112138 = state_111875__$1;
(statearr_111905_112138[(2)] = inst_111857);

(statearr_111905_112138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (17))){
var inst_111810 = (state_111875[(13)]);
var inst_111808 = (state_111875[(2)]);
var inst_111809 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.extractor.extract,inst_111808);
var inst_111810__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,inst_111809);
var inst_111811 = cljs.core.not_empty(inst_111810__$1);
var state_111875__$1 = (function (){var statearr_111906 = state_111875;
(statearr_111906[(13)] = inst_111810__$1);

return statearr_111906;
})();
if(cljs.core.truth_(inst_111811)){
var statearr_111907_112139 = state_111875__$1;
(statearr_111907_112139[(1)] = (18));

} else {
var statearr_111908_112140 = state_111875__$1;
(statearr_111908_112140[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (3))){
var state_111875__$1 = state_111875;
var statearr_111909_112141 = state_111875__$1;
(statearr_111909_112141[(2)] = frontend.extensions.zotero.api.notes);

(statearr_111909_112141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (12))){
var inst_111799 = (state_111875[(17)]);
var state_111875__$1 = state_111875;
var statearr_111910_112142 = state_111875__$1;
(statearr_111910_112142[(2)] = inst_111799);

(statearr_111910_112142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (2))){
var inst_111787 = (state_111875[(2)]);
var state_111875__$1 = (function (){var statearr_111911 = state_111875;
(statearr_111911[(18)] = inst_111787);

return statearr_111911;
})();
var G__111912_112143 = type;
var G__111912_112144__$1 = (((G__111912_112143 instanceof cljs.core.Keyword))?G__111912_112143.fqn:null);
switch (G__111912_112144__$1) {
case "notes":
var statearr_111913_112146 = state_111875__$1;
(statearr_111913_112146[(1)] = (6));


break;
case "attachments":
var statearr_111914_112147 = state_111875__$1;
(statearr_111914_112147[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__111912_112144__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (23))){
var inst_111867 = (state_111875[(2)]);
var state_111875__$1 = state_111875;
var statearr_111915_112148 = state_111875__$1;
(statearr_111915_112148[(2)] = inst_111867);

(statearr_111915_112148[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (19))){
var state_111875__$1 = state_111875;
var statearr_111916_112149 = state_111875__$1;
(statearr_111916_112149[(2)] = null);

(statearr_111916_112149[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (11))){
var inst_111783 = (state_111875[(10)]);
var inst_111801 = (inst_111783 > (0));
var state_111875__$1 = state_111875;
var statearr_111917_112150 = state_111875__$1;
(statearr_111917_112150[(2)] = inst_111801);

(statearr_111917_112150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (9))){
var inst_111794 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915));
var state_111875__$1 = state_111875;
var statearr_111918_112151 = state_111875__$1;
(statearr_111918_112151[(2)] = inst_111794);

(statearr_111918_112151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (5))){
var inst_111793 = (state_111875[(2)]);
var state_111875__$1 = (function (){var statearr_111922 = state_111875;
(statearr_111922[(19)] = inst_111793);

return statearr_111922;
})();
var G__111923_112152 = type;
var G__111923_112153__$1 = (((G__111923_112152 instanceof cljs.core.Keyword))?G__111923_112152.fqn:null);
switch (G__111923_112153__$1) {
case "notes":
var statearr_111924_112155 = state_111875__$1;
(statearr_111924_112155[(1)] = (9));


break;
case "attachments":
var statearr_111925_112156 = state_111875__$1;
(statearr_111925_112156[(1)] = (10));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__111923_112153__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (14))){
var inst_111787 = (state_111875[(18)]);
var inst_111781 = (state_111875[(9)]);
var inst_111806 = (inst_111787.cljs$core$IFn$_invoke$arity$1 ? inst_111787.cljs$core$IFn$_invoke$arity$1(inst_111781) : inst_111787.call(null,inst_111781));
var state_111875__$1 = state_111875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_111875__$1,(17),inst_111806);
} else {
if((state_val_111876 === (26))){
var inst_111825 = (state_111875[(14)]);
var inst_111827 = (state_111875[(11)]);
var inst_111817 = (state_111875[(15)]);
var inst_111824 = (state_111875[(7)]);
var inst_111826 = (state_111875[(12)]);
var inst_111832 = cljs.core._nth(inst_111825,inst_111827);
var inst_111833 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_111834 = [inst_111817,false,false];
var inst_111835 = cljs.core.PersistentHashMap.fromArrays(inst_111833,inst_111834);
var inst_111836 = frontend.handler.editor.api_insert_new_block_BANG_(inst_111832,inst_111835);
var inst_111837 = (inst_111827 + (1));
var tmp111919 = inst_111826;
var tmp111920 = inst_111825;
var tmp111921 = inst_111824;
var inst_111824__$1 = tmp111921;
var inst_111825__$1 = tmp111920;
var inst_111826__$1 = tmp111919;
var inst_111827__$1 = inst_111837;
var state_111875__$1 = (function (){var statearr_111926 = state_111875;
(statearr_111926[(20)] = inst_111836);

(statearr_111926[(7)] = inst_111824__$1);

(statearr_111926[(14)] = inst_111825__$1);

(statearr_111926[(12)] = inst_111826__$1);

(statearr_111926[(11)] = inst_111827__$1);

return statearr_111926;
})();
var statearr_111927_112157 = state_111875__$1;
(statearr_111927_112157[(2)] = null);

(statearr_111927_112157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (16))){
var inst_111873 = (state_111875[(2)]);
var state_111875__$1 = state_111875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_111875__$1,inst_111873);
} else {
if((state_val_111876 === (30))){
var state_111875__$1 = state_111875;
var statearr_111928_112158 = state_111875__$1;
(statearr_111928_112158[(2)] = null);

(statearr_111928_112158[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (10))){
var inst_111796 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115));
var state_111875__$1 = state_111875;
var statearr_111929_112159 = state_111875__$1;
(statearr_111929_112159[(2)] = inst_111796);

(statearr_111929_112159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (18))){
var inst_111793 = (state_111875[(19)]);
var inst_111817 = (state_111875[(15)]);
var inst_111813 = [new cljs.core.Keyword(null,"page","page",849072397)];
var inst_111814 = [page_name];
var inst_111815 = cljs.core.PersistentHashMap.fromArrays(inst_111813,inst_111814);
var inst_111816 = frontend.handler.editor.api_insert_new_block_BANG_(inst_111793,inst_111815);
var inst_111817__$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(inst_111816);
var state_111875__$1 = (function (){var statearr_111930 = state_111875;
(statearr_111930[(15)] = inst_111817__$1);

return statearr_111930;
})();
if(cljs.core.truth_(inst_111817__$1)){
var statearr_111931_112160 = state_111875__$1;
(statearr_111931_112160[(1)] = (21));

} else {
var statearr_111932_112161 = state_111875__$1;
(statearr_111932_112161[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111876 === (8))){
var inst_111799 = (state_111875[(17)]);
var inst_111799__$1 = (state_111875[(2)]);
var state_111875__$1 = (function (){var statearr_111933 = state_111875;
(statearr_111933[(17)] = inst_111799__$1);

return statearr_111933;
})();
if(cljs.core.truth_(inst_111799__$1)){
var statearr_111934_112162 = state_111875__$1;
(statearr_111934_112162[(1)] = (11));

} else {
var statearr_111935_112163 = state_111875__$1;
(statearr_111935_112163[(1)] = (12));

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
});
return (function() {
var frontend$extensions$zotero$handler$add_$_state_machine__34379__auto__ = null;
var frontend$extensions$zotero$handler$add_$_state_machine__34379__auto____0 = (function (){
var statearr_111936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_111936[(0)] = frontend$extensions$zotero$handler$add_$_state_machine__34379__auto__);

(statearr_111936[(1)] = (1));

return statearr_111936;
});
var frontend$extensions$zotero$handler$add_$_state_machine__34379__auto____1 = (function (state_111875){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_111875);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e111937){var ex__34382__auto__ = e111937;
var statearr_111938_112164 = state_111875;
(statearr_111938_112164[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_111875[(4)]))){
var statearr_111939_112165 = state_111875;
(statearr_111939_112165[(1)] = cljs.core.first((state_111875[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112166 = state_111875;
state_111875 = G__112166;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_$_state_machine__34379__auto__ = function(state_111875){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_$_state_machine__34379__auto____1.call(this,state_111875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_$_state_machine__34379__auto____0;
frontend$extensions$zotero$handler$add_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_$_state_machine__34379__auto____1;
return frontend$extensions$zotero$handler$add_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_111940 = f__34484__auto__();
(statearr_111940[(6)] = c__34483__auto__);

return statearr_111940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});
frontend.extensions.zotero.handler.handle_command_zotero = (function frontend$extensions$zotero$handler$handle_command_zotero(id,page_name){
frontend.state.clear_editor_action_BANG_();

return frontend.handler.editor.insert_command_BANG_(id,logseq.graph_parser.util.page_ref.__GT_page_ref(page_name),null,cljs.core.PersistentArrayMap.EMPTY);
});
frontend.extensions.zotero.handler.create_abstract_note_BANG_ = (function frontend$extensions$zotero$handler$create_abstract_note_BANG_(page_name,abstract_note){
if(clojure.string.blank_QMARK_(abstract_note)){
return null;
} else {
var block = frontend.handler.editor.api_insert_new_block_BANG_("[[Abstract]]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_name], null));
return frontend.handler.editor.api_insert_new_block_BANG_(abstract_note,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
}
});
frontend.extensions.zotero.handler.create_page = (function frontend$extensions$zotero$handler$create_page(page_name,properties){
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),false,new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
});
frontend.extensions.zotero.handler.create_zotero_page = (function frontend$extensions$zotero$handler$create_zotero_page(var_args){
var G__111942 = arguments.length;
switch (G__111942) {
case 1:
return frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$1 = (function (item){
return frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(item,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2 = (function (item,p__111943){
var map__111944 = p__111943;
var map__111944__$1 = cljs.core.__destructure_map(map__111944);
var block_dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111944__$1,new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027));
var insert_command_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__111944__$1,new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),true);
var notification_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__111944__$1,new cljs.core.Keyword(null,"notification?","notification?",1061685314),true);
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_111994){
var state_val_111995 = (state_111994[(1)]);
if((state_val_111995 === (7))){
var inst_111948 = (state_111994[(7)]);
var inst_111950 = (state_111994[(8)]);
var inst_111971 = (state_111994[(2)]);
var inst_111972 = frontend.extensions.zotero.handler.create_abstract_note_BANG_(inst_111948,inst_111950);
var inst_111973 = frontend.extensions.zotero.handler.add(inst_111948,new cljs.core.Keyword(null,"attachments","attachments",-1535547830),item);
var state_111994__$1 = (function (){var statearr_111996 = state_111994;
(statearr_111996[(9)] = inst_111971);

(statearr_111996[(10)] = inst_111972);

return statearr_111996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_111994__$1,(11),inst_111973);
} else {
if((state_val_111995 === (1))){
var inst_111947 = (state_111994[(11)]);
var inst_111948 = (state_111994[(7)]);
var inst_111946 = frontend.extensions.zotero.extractor.extract.cljs$core$IFn$_invoke$arity$1(item);
var inst_111947__$1 = cljs.core.__destructure_map(inst_111946);
var inst_111948__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111947__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var inst_111949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111947__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var inst_111950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_111947__$1,new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968));
var inst_111951 = clojure.string.blank_QMARK_(inst_111948__$1);
var state_111994__$1 = (function (){var statearr_111997 = state_111994;
(statearr_111997[(11)] = inst_111947__$1);

(statearr_111997[(7)] = inst_111948__$1);

(statearr_111997[(12)] = inst_111949);

(statearr_111997[(8)] = inst_111950);

return statearr_111997;
})();
if(inst_111951){
var statearr_111998_112168 = state_111994__$1;
(statearr_111998_112168[(1)] = (2));

} else {
var statearr_111999_112169 = state_111994__$1;
(statearr_111999_112169[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (4))){
var inst_111992 = (state_111994[(2)]);
var state_111994__$1 = state_111994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_111994__$1,inst_111992);
} else {
if((state_val_111995 === (15))){
var inst_111984 = (state_111994[(2)]);
var state_111994__$1 = (function (){var statearr_112000 = state_111994;
(statearr_112000[(13)] = inst_111984);

return statearr_112000;
})();
if(cljs.core.truth_(notification_QMARK_)){
var statearr_112001_112170 = state_111994__$1;
(statearr_112001_112170[(1)] = (16));

} else {
var statearr_112002_112171 = state_111994__$1;
(statearr_112002_112171[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (13))){
var inst_111948 = (state_111994[(7)]);
var inst_111980 = frontend.extensions.zotero.handler.handle_command_zotero(block_dom_id,inst_111948);
var inst_111981 = frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_111994__$1 = (function (){var statearr_112003 = state_111994;
(statearr_112003[(14)] = inst_111980);

return statearr_112003;
})();
var statearr_112004_112172 = state_111994__$1;
(statearr_112004_112172[(2)] = inst_111981);

(statearr_112004_112172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (6))){
var inst_111948 = (state_111994[(7)]);
var inst_111949 = (state_111994[(12)]);
var inst_111969 = frontend.extensions.zotero.handler.create_page(inst_111948,inst_111949);
var state_111994__$1 = state_111994;
var statearr_112005_112173 = state_111994__$1;
(statearr_112005_112173[(2)] = inst_111969);

(statearr_112005_112173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (17))){
var state_111994__$1 = state_111994;
var statearr_112006_112174 = state_111994__$1;
(statearr_112006_112174[(2)] = null);

(statearr_112006_112174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (3))){
var inst_111948 = (state_111994[(7)]);
var inst_111954 = clojure.string.lower_case(inst_111948);
var inst_111955 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_111954) : frontend.db.page_exists_QMARK_.call(null,inst_111954));
var state_111994__$1 = state_111994;
if(cljs.core.truth_(inst_111955)){
var statearr_112007_112175 = state_111994__$1;
(statearr_112007_112175[(1)] = (5));

} else {
var statearr_112008_112176 = state_111994__$1;
(statearr_112008_112176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (12))){
var inst_111978 = (state_111994[(2)]);
var state_111994__$1 = (function (){var statearr_112009 = state_111994;
(statearr_112009[(15)] = inst_111978);

return statearr_112009;
})();
if(cljs.core.truth_(insert_command_QMARK_)){
var statearr_112010_112177 = state_111994__$1;
(statearr_112010_112177[(1)] = (13));

} else {
var statearr_112011_112178 = state_111994__$1;
(statearr_112011_112178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (2))){
var state_111994__$1 = state_111994;
var statearr_112012_112179 = state_111994__$1;
(statearr_112012_112179[(2)] = null);

(statearr_112012_112179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (11))){
var inst_111948 = (state_111994[(7)]);
var inst_111975 = (state_111994[(2)]);
var inst_111976 = frontend.extensions.zotero.handler.add(inst_111948,new cljs.core.Keyword(null,"notes","notes",-1039600523),item);
var state_111994__$1 = (function (){var statearr_112013 = state_111994;
(statearr_112013[(16)] = inst_111975);

return statearr_112013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_111994__$1,(12),inst_111976);
} else {
if((state_val_111995 === (9))){
var inst_111948 = (state_111994[(7)]);
var inst_111949 = (state_111994[(12)]);
var inst_111962 = [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"properties","properties",685819552)];
var inst_111963 = [inst_111948,inst_111949];
var inst_111964 = cljs.core.PersistentHashMap.fromArrays(inst_111962,inst_111963);
var inst_111965 = frontend.handler.editor.api_insert_new_block_BANG_("",inst_111964);
var state_111994__$1 = state_111994;
var statearr_112014_112180 = state_111994__$1;
(statearr_112014_112180[(2)] = inst_111965);

(statearr_112014_112180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (5))){
var inst_111957 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409));
var state_111994__$1 = state_111994;
if(cljs.core.truth_(inst_111957)){
var statearr_112015_112181 = state_111994__$1;
(statearr_112015_112181[(1)] = (8));

} else {
var statearr_112016_112182 = state_111994__$1;
(statearr_112016_112182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (14))){
var state_111994__$1 = state_111994;
var statearr_112017_112183 = state_111994__$1;
(statearr_112017_112183[(2)] = null);

(statearr_112017_112183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (16))){
var inst_111948 = (state_111994[(7)]);
var inst_111986 = ["Successfully added zotero item to page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_111948)].join('');
var inst_111987 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_111986,new cljs.core.Keyword(null,"success","success",1890645906));
var state_111994__$1 = state_111994;
var statearr_112018_112184 = state_111994__$1;
(statearr_112018_112184[(2)] = inst_111987);

(statearr_112018_112184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (10))){
var inst_111967 = (state_111994[(2)]);
var state_111994__$1 = state_111994;
var statearr_112019_112185 = state_111994__$1;
(statearr_112019_112185[(2)] = inst_111967);

(statearr_112019_112185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (18))){
var inst_111990 = (state_111994[(2)]);
var state_111994__$1 = state_111994;
var statearr_112020_112186 = state_111994__$1;
(statearr_112020_112186[(2)] = inst_111990);

(statearr_112020_112186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_111995 === (8))){
var inst_111947 = (state_111994[(11)]);
var inst_111948 = (state_111994[(7)]);
var inst_111949 = (state_111994[(12)]);
var inst_111950 = (state_111994[(8)]);
var inst_111959 = (function (){var map__111945 = inst_111947;
var page_name = inst_111948;
var properties = inst_111949;
var abstract_note = inst_111950;
return (function (){
return frontend.extensions.zotero.handler.create_page(page_name,properties);
});
})();
var inst_111960 = frontend.handler.page.delete_BANG_(inst_111948,inst_111959);
var state_111994__$1 = state_111994;
var statearr_112021_112187 = state_111994__$1;
(statearr_112021_112187[(2)] = inst_111960);

(statearr_112021_112187[(1)] = (10));


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
});
return (function() {
var frontend$extensions$zotero$handler$state_machine__34379__auto__ = null;
var frontend$extensions$zotero$handler$state_machine__34379__auto____0 = (function (){
var statearr_112022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112022[(0)] = frontend$extensions$zotero$handler$state_machine__34379__auto__);

(statearr_112022[(1)] = (1));

return statearr_112022;
});
var frontend$extensions$zotero$handler$state_machine__34379__auto____1 = (function (state_111994){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_111994);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e112023){var ex__34382__auto__ = e112023;
var statearr_112024_112188 = state_111994;
(statearr_112024_112188[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_111994[(4)]))){
var statearr_112025_112189 = state_111994;
(statearr_112025_112189[(1)] = cljs.core.first((state_111994[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112190 = state_111994;
state_111994 = G__112190;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$state_machine__34379__auto__ = function(state_111994){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$state_machine__34379__auto____1.call(this,state_111994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$state_machine__34379__auto____0;
frontend$extensions$zotero$handler$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$state_machine__34379__auto____1;
return frontend$extensions$zotero$handler$state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_112026 = f__34484__auto__();
(statearr_112026[(6)] = c__34483__auto__);

return statearr_112026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.handler.add_all = (function frontend$extensions$zotero$handler$add_all(progress){
var c__34483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34484__auto__ = (function (){var switch__34378__auto__ = (function (state_112084){
var state_val_112085 = (state_112084[(1)]);
if((state_val_112085 === (7))){
var inst_112080 = (state_112084[(2)]);
var state_112084__$1 = state_112084;
var statearr_112086_112191 = state_112084__$1;
(statearr_112086_112191[(2)] = inst_112080);

(statearr_112086_112191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (1))){
var inst_112027 = frontend.extensions.zotero.api.all_top_items();
var state_112084__$1 = state_112084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_112084__$1,(2),inst_112027);
} else {
if((state_val_112085 === (4))){
var inst_112082 = (state_112084[(2)]);
var state_112084__$1 = state_112084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_112084__$1,inst_112082);
} else {
if((state_val_112085 === (15))){
var inst_112055 = (state_112084[(7)]);
var inst_112070 = (state_112084[(2)]);
var inst_112071 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_112072 = cljs.core.next(inst_112055);
var inst_112036 = inst_112072;
var inst_112037 = null;
var inst_112038 = (0);
var inst_112039 = (0);
var state_112084__$1 = (function (){var statearr_112087 = state_112084;
(statearr_112087[(8)] = inst_112070);

(statearr_112087[(9)] = inst_112071);

(statearr_112087[(10)] = inst_112036);

(statearr_112087[(11)] = inst_112037);

(statearr_112087[(12)] = inst_112038);

(statearr_112087[(13)] = inst_112039);

return statearr_112087;
})();
var statearr_112088_112192 = state_112084__$1;
(statearr_112088_112192[(2)] = null);

(statearr_112088_112192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (13))){
var inst_112055 = (state_112084[(7)]);
var inst_112064 = cljs.core.first(inst_112055);
var inst_112065 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_112066 = [false,false];
var inst_112067 = cljs.core.PersistentHashMap.fromArrays(inst_112065,inst_112066);
var inst_112068 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_112064,inst_112067);
var state_112084__$1 = state_112084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_112084__$1,(15),inst_112068);
} else {
if((state_val_112085 === (6))){
var inst_112036 = (state_112084[(10)]);
var inst_112055 = (state_112084[(7)]);
var inst_112055__$1 = cljs.core.seq(inst_112036);
var state_112084__$1 = (function (){var statearr_112089 = state_112084;
(statearr_112089[(7)] = inst_112055__$1);

return statearr_112089;
})();
if(inst_112055__$1){
var statearr_112090_112193 = state_112084__$1;
(statearr_112090_112193[(1)] = (9));

} else {
var statearr_112091_112194 = state_112084__$1;
(statearr_112091_112194[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (3))){
var inst_112039 = (state_112084[(13)]);
var inst_112038 = (state_112084[(12)]);
var inst_112041 = (inst_112039 < inst_112038);
var inst_112042 = inst_112041;
var state_112084__$1 = state_112084;
if(cljs.core.truth_(inst_112042)){
var statearr_112092_112195 = state_112084__$1;
(statearr_112092_112195[(1)] = (5));

} else {
var statearr_112093_112196 = state_112084__$1;
(statearr_112093_112196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (12))){
var inst_112055 = (state_112084[(7)]);
var inst_112059 = cljs.core.chunk_first(inst_112055);
var inst_112060 = cljs.core.chunk_rest(inst_112055);
var inst_112061 = cljs.core.count(inst_112059);
var inst_112036 = inst_112060;
var inst_112037 = inst_112059;
var inst_112038 = inst_112061;
var inst_112039 = (0);
var state_112084__$1 = (function (){var statearr_112094 = state_112084;
(statearr_112094[(10)] = inst_112036);

(statearr_112094[(11)] = inst_112037);

(statearr_112094[(12)] = inst_112038);

(statearr_112094[(13)] = inst_112039);

return statearr_112094;
})();
var statearr_112095_112197 = state_112084__$1;
(statearr_112095_112197[(2)] = null);

(statearr_112095_112197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (2))){
var inst_112029 = (state_112084[(2)]);
var inst_112030 = cljs.core.reset_BANG_(progress,(30));
var inst_112035 = cljs.core.seq(inst_112029);
var inst_112036 = inst_112035;
var inst_112037 = null;
var inst_112038 = (0);
var inst_112039 = (0);
var state_112084__$1 = (function (){var statearr_112096 = state_112084;
(statearr_112096[(14)] = inst_112030);

(statearr_112096[(10)] = inst_112036);

(statearr_112096[(11)] = inst_112037);

(statearr_112096[(12)] = inst_112038);

(statearr_112096[(13)] = inst_112039);

return statearr_112096;
})();
var statearr_112097_112198 = state_112084__$1;
(statearr_112097_112198[(2)] = null);

(statearr_112097_112198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (11))){
var inst_112078 = (state_112084[(2)]);
var state_112084__$1 = state_112084;
var statearr_112098_112199 = state_112084__$1;
(statearr_112098_112199[(2)] = inst_112078);

(statearr_112098_112199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (9))){
var inst_112055 = (state_112084[(7)]);
var inst_112057 = cljs.core.chunked_seq_QMARK_(inst_112055);
var state_112084__$1 = state_112084;
if(inst_112057){
var statearr_112099_112200 = state_112084__$1;
(statearr_112099_112200[(1)] = (12));

} else {
var statearr_112100_112201 = state_112084__$1;
(statearr_112100_112201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (5))){
var inst_112037 = (state_112084[(11)]);
var inst_112039 = (state_112084[(13)]);
var inst_112044 = cljs.core._nth(inst_112037,inst_112039);
var inst_112045 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_112046 = [false,false];
var inst_112047 = cljs.core.PersistentHashMap.fromArrays(inst_112045,inst_112046);
var inst_112048 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_112044,inst_112047);
var state_112084__$1 = state_112084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_112084__$1,(8),inst_112048);
} else {
if((state_val_112085 === (14))){
var inst_112075 = (state_112084[(2)]);
var state_112084__$1 = state_112084;
var statearr_112104_112202 = state_112084__$1;
(statearr_112104_112202[(2)] = inst_112075);

(statearr_112104_112202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (10))){
var state_112084__$1 = state_112084;
var statearr_112105_112203 = state_112084__$1;
(statearr_112105_112203[(2)] = null);

(statearr_112105_112203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112085 === (8))){
var inst_112039 = (state_112084[(13)]);
var inst_112036 = (state_112084[(10)]);
var inst_112037 = (state_112084[(11)]);
var inst_112038 = (state_112084[(12)]);
var inst_112050 = (state_112084[(2)]);
var inst_112051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_112052 = (inst_112039 + (1));
var tmp112101 = inst_112037;
var tmp112102 = inst_112038;
var tmp112103 = inst_112036;
var inst_112036__$1 = tmp112103;
var inst_112037__$1 = tmp112101;
var inst_112038__$1 = tmp112102;
var inst_112039__$1 = inst_112052;
var state_112084__$1 = (function (){var statearr_112106 = state_112084;
(statearr_112106[(15)] = inst_112050);

(statearr_112106[(16)] = inst_112051);

(statearr_112106[(10)] = inst_112036__$1);

(statearr_112106[(11)] = inst_112037__$1);

(statearr_112106[(12)] = inst_112038__$1);

(statearr_112106[(13)] = inst_112039__$1);

return statearr_112106;
})();
var statearr_112107_112204 = state_112084__$1;
(statearr_112107_112204[(2)] = null);

(statearr_112107_112204[(1)] = (3));


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
});
return (function() {
var frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto__ = null;
var frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto____0 = (function (){
var statearr_112108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112108[(0)] = frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto__);

(statearr_112108[(1)] = (1));

return statearr_112108;
});
var frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto____1 = (function (state_112084){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__(state_112084);
if(cljs.core.keyword_identical_QMARK_(result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e112109){var ex__34382__auto__ = e112109;
var statearr_112110_112205 = state_112084;
(statearr_112110_112205[(2)] = ex__34382__auto__);


if(cljs.core.seq((state_112084[(4)]))){
var statearr_112111_112206 = state_112084;
(statearr_112111_112206[(1)] = cljs.core.first((state_112084[(4)])));

} else {
throw ex__34382__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112207 = state_112084;
state_112084 = G__112207;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto__ = function(state_112084){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto____1.call(this,state_112084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto____0;
frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto____1;
return frontend$extensions$zotero$handler$add_all_$_state_machine__34379__auto__;
})()
})();
var state__34485__auto__ = (function (){var statearr_112112 = f__34484__auto__();
(statearr_112112[(6)] = c__34483__auto__);

return statearr_112112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34485__auto__);
}));

return c__34483__auto__;
});

//# sourceMappingURL=frontend.extensions.zotero.handler.js.map
