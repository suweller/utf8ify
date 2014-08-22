// Compiled by ClojureScript 0.0-2277
goog.provide('perfection.core');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.util');
goog.require('cljs.core.async');
goog.require('crate.core');
goog.require('crate.core');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
perfection.core.xy_message = (function xy_message(ch,msg_name,xy_obj){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$58,xy_obj.pageX,cljs.core.constant$keyword$59,xy_obj.pageY], null)], null));
});
perfection.core.touch_xy_message = (function touch_xy_message(ch,msg_name,xy_obj){return perfection.core.xy_message(ch,msg_name,(xy_obj.originalEvent.touches[(0)]));
});
perfection.core.mousemove_handler = (function mousemove_handler(in_chan,jqevent){if((jqevent.which > (0)))
{return perfection.core.xy_message(in_chan,cljs.core.constant$keyword$60,jqevent);
} else
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(in_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null));
}
});
perfection.core.draw_event_capture = (function draw_event_capture(in_chan,selector){var end_handler = (function (_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(in_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null));
});jayq.core.bind(jayq.core.$.cljs$core$IFn$_invoke$arity$1(selector),"mousemove",((function (end_handler){
return (function (p1__8859_SHARP_){return perfection.core.mousemove_handler(in_chan,p1__8859_SHARP_);
});})(end_handler))
);
jayq.core.bind(jayq.core.$.cljs$core$IFn$_invoke$arity$1(selector),"mousedown",((function (end_handler){
return (function (p1__8860_SHARP_){return perfection.core.xy_message(in_chan,cljs.core.constant$keyword$60,p1__8860_SHARP_);
});})(end_handler))
);
jayq.core.bind(jayq.core.$.cljs$core$IFn$_invoke$arity$1(selector),"mouseup",end_handler);
jayq.core.bind(jayq.core.$.cljs$core$IFn$_invoke$arity$1(selector),"touchmove",((function (end_handler){
return (function (p1__8861_SHARP_){return perfection.core.touch_xy_message(in_chan,cljs.core.constant$keyword$60,p1__8861_SHARP_);
});})(end_handler))
);
return jayq.core.bind(jayq.core.$.cljs$core$IFn$_invoke$arity$1(selector),"touchend",end_handler);
});
perfection.core.get_drawing = (function get_drawing(input_chan,out_chan){var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_8914){var state_val_8915 = (state_8914[(1)]);if((state_val_8915 === (8)))
{var inst_8906 = (state_8914[(2)]);var inst_8899 = inst_8906;var state_8914__$1 = (function (){var statearr_8916 = state_8914;(statearr_8916[(7)] = inst_8899);
return statearr_8916;
})();var statearr_8917_8932 = state_8914__$1;(statearr_8917_8932[(2)] = null);
(statearr_8917_8932[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_8915 === (7)))
{var inst_8910 = (state_8914[(2)]);var state_8914__$1 = state_8914;var statearr_8918_8933 = state_8914__$1;(statearr_8918_8933[(2)] = inst_8910);
(statearr_8918_8933[(1)] = (4));
return cljs.core.constant$keyword$31;
} else
{if((state_val_8915 === (6)))
{var state_8914__$1 = state_8914;var statearr_8919_8934 = state_8914__$1;(statearr_8919_8934[(2)] = null);
(statearr_8919_8934[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_8915 === (5)))
{var state_8914__$1 = state_8914;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8914__$1,(8),input_chan);
} else
{if((state_val_8915 === (4)))
{var inst_8912 = (state_8914[(2)]);var state_8914__$1 = state_8914;return cljs.core.async.impl.ioc_helpers.return_chan(state_8914__$1,inst_8912);
} else
{if((state_val_8915 === (3)))
{var inst_8899 = (state_8914[(7)]);var inst_8901 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_chan,inst_8899);var inst_8902 = cljs.core.first(inst_8899);var inst_8903 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8902,cljs.core.constant$keyword$60);var state_8914__$1 = (function (){var statearr_8920 = state_8914;(statearr_8920[(8)] = inst_8901);
return statearr_8920;
})();if(inst_8903)
{var statearr_8921_8935 = state_8914__$1;(statearr_8921_8935[(1)] = (5));
} else
{var statearr_8922_8936 = state_8914__$1;(statearr_8922_8936[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_8915 === (2)))
{var inst_8898 = (state_8914[(2)]);var inst_8899 = inst_8898;var state_8914__$1 = (function (){var statearr_8923 = state_8914;(statearr_8923[(7)] = inst_8899);
return statearr_8923;
})();var statearr_8924_8937 = state_8914__$1;(statearr_8924_8937[(2)] = null);
(statearr_8924_8937[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_8915 === (1)))
{var state_8914__$1 = state_8914;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8914__$1,(2),input_chan);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_8928 = [null,null,null,null,null,null,null,null,null];(statearr_8928[(0)] = state_machine__5694__auto__);
(statearr_8928[(1)] = (1));
return statearr_8928;
});
var state_machine__5694__auto____1 = (function (state_8914){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_8914);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e8929){if((e8929 instanceof Object))
{var ex__5697__auto__ = e8929;var statearr_8930_8938 = state_8914;(statearr_8930_8938[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_8914);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e8929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__8939 = state_8914;
state_8914 = G__8939;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_8914){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_8914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_8931 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_8931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_8931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
perfection.core.draw_chan = (function draw_chan(selector){var input_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var out_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();perfection.core.draw_event_capture(input_chan,selector);
var c__5708__auto___9034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___9034,input_chan,out_chan){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___9034,input_chan,out_chan){
return (function (state_9014){var state_val_9015 = (state_9014[(1)]);if((state_val_9015 === (9)))
{var inst_9009 = (state_9014[(2)]);var inst_8994 = inst_9009;var state_9014__$1 = (function (){var statearr_9016 = state_9014;(statearr_9016[(7)] = inst_8994);
return statearr_9016;
})();var statearr_9017_9035 = state_9014__$1;(statearr_9017_9035[(2)] = null);
(statearr_9017_9035[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9015 === (8)))
{var inst_9004 = (state_9014[(2)]);var state_9014__$1 = state_9014;var statearr_9018_9036 = state_9014__$1;(statearr_9018_9036[(2)] = inst_9004);
(statearr_9018_9036[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9015 === (7)))
{var inst_9007 = (state_9014[(2)]);var state_9014__$1 = (function (){var statearr_9019 = state_9014;(statearr_9019[(8)] = inst_9007);
return statearr_9019;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9014__$1,(9),input_chan);
} else
{if((state_val_9015 === (6)))
{var state_9014__$1 = state_9014;var statearr_9020_9037 = state_9014__$1;(statearr_9020_9037[(2)] = null);
(statearr_9020_9037[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9015 === (5)))
{var inst_8994 = (state_9014[(7)]);var inst_9001 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_chan,inst_8994);var inst_9002 = perfection.core.get_drawing(input_chan,out_chan);var state_9014__$1 = (function (){var statearr_9021 = state_9014;(statearr_9021[(9)] = inst_9001);
return statearr_9021;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9014__$1,(8),inst_9002);
} else
{if((state_val_9015 === (4)))
{var inst_9012 = (state_9014[(2)]);var state_9014__$1 = state_9014;return cljs.core.async.impl.ioc_helpers.return_chan(state_9014__$1,inst_9012);
} else
{if((state_val_9015 === (3)))
{var inst_8994 = (state_9014[(7)]);var inst_8997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8994,(0),null);var inst_8998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8994,(1),null);var inst_8999 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_8997,cljs.core.constant$keyword$60);var state_9014__$1 = (function (){var statearr_9022 = state_9014;(statearr_9022[(10)] = inst_8998);
return statearr_9022;
})();if(inst_8999)
{var statearr_9023_9038 = state_9014__$1;(statearr_9023_9038[(1)] = (5));
} else
{var statearr_9024_9039 = state_9014__$1;(statearr_9024_9039[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_9015 === (2)))
{var inst_8991 = (state_9014[(2)]);var inst_8992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8991,(0),null);var inst_8993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_8991,(1),null);var inst_8994 = inst_8991;var state_9014__$1 = (function (){var statearr_9025 = state_9014;(statearr_9025[(11)] = inst_8993);
(statearr_9025[(12)] = inst_8992);
(statearr_9025[(7)] = inst_8994);
return statearr_9025;
})();var statearr_9026_9040 = state_9014__$1;(statearr_9026_9040[(2)] = null);
(statearr_9026_9040[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9015 === (1)))
{var state_9014__$1 = state_9014;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9014__$1,(2),input_chan);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___9034,input_chan,out_chan))
;return ((function (switch__5693__auto__,c__5708__auto___9034,input_chan,out_chan){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_9030 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9030[(0)] = state_machine__5694__auto__);
(statearr_9030[(1)] = (1));
return statearr_9030;
});
var state_machine__5694__auto____1 = (function (state_9014){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_9014);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e9031){if((e9031 instanceof Object))
{var ex__5697__auto__ = e9031;var statearr_9032_9041 = state_9014;(statearr_9032_9041[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_9014);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e9031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__9042 = state_9014;
state_9014 = G__9042;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_9014){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_9014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___9034,input_chan,out_chan))
})();var state__5710__auto__ = (function (){var statearr_9033 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_9033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___9034);
return statearr_9033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___9034,input_chan,out_chan))
);
return out_chan;
});
perfection.core.draw_point = (function draw_point(selector,color,coord,p__9043){var map__9045 = p__9043;var map__9045__$1 = ((cljs.core.seq_QMARK_(map__9045))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9045):map__9045);var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9045__$1,cljs.core.constant$keyword$62);var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9045__$1,cljs.core.constant$keyword$63);return jayq.core.append(jayq.core.$.cljs$core$IFn$_invoke$arity$1(selector),crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(color))),cljs.core.constant$keyword$27,("top: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$59) : coord.call(null,cljs.core.constant$keyword$59)) - top) - (5)))+"px;left: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((coord.cljs$core$IFn$_invoke$arity$1 ? coord.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$58) : coord.call(null,cljs.core.constant$keyword$58)) - left) - (5)))+"px;")], null)], null)], 0)));
});
perfection.core.draw_points = (function draw_points(selector,drawing_chan,color){var offset = jayq.core.offset.cljs$core$IFn$_invoke$arity$1(jayq.core.$.cljs$core$IFn$_invoke$arity$1(selector));var width = (jayq.core.$.cljs$core$IFn$_invoke$arity$1(selector).width() + (offset.cljs$core$IFn$_invoke$arity$1 ? offset.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$62) : offset.call(null,cljs.core.constant$keyword$62)));var height = (jayq.core.$.cljs$core$IFn$_invoke$arity$1(selector).height() + (offset.cljs$core$IFn$_invoke$arity$1 ? offset.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$63) : offset.call(null,cljs.core.constant$keyword$63)));var in_range = ((function (offset,width,height){
return (function (p1__9046_SHARP_){return ((((offset.cljs$core$IFn$_invoke$arity$1 ? offset.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$63) : offset.call(null,cljs.core.constant$keyword$63)) < (p1__9046_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9046_SHARP_.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$59) : p1__9046_SHARP_.call(null,cljs.core.constant$keyword$59)))) && (((p1__9046_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9046_SHARP_.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$59) : p1__9046_SHARP_.call(null,cljs.core.constant$keyword$59)) < height))) && ((((offset.cljs$core$IFn$_invoke$arity$1 ? offset.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$62) : offset.call(null,cljs.core.constant$keyword$62)) < (p1__9046_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9046_SHARP_.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$58) : p1__9046_SHARP_.call(null,cljs.core.constant$keyword$58)))) && (((p1__9046_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9046_SHARP_.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$58) : p1__9046_SHARP_.call(null,cljs.core.constant$keyword$58)) < width)));
});})(offset,width,height))
;var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,offset,width,height,in_range){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,offset,width,height,in_range){
return (function (state_9128){var state_val_9129 = (state_9128[(1)]);if((state_val_9129 === (7)))
{var inst_9124 = (state_9128[(2)]);var state_9128__$1 = state_9128;var statearr_9130_9151 = state_9128__$1;(statearr_9130_9151[(2)] = inst_9124);
(statearr_9130_9151[(1)] = (4));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9129 === (1)))
{var state_9128__$1 = state_9128;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9128__$1,(2),drawing_chan);
} else
{if((state_val_9129 === (4)))
{var inst_9126 = (state_9128[(2)]);var state_9128__$1 = state_9128;return cljs.core.async.impl.ioc_helpers.return_chan(state_9128__$1,inst_9126);
} else
{if((state_val_9129 === (6)))
{var state_9128__$1 = state_9128;var statearr_9131_9152 = state_9128__$1;(statearr_9131_9152[(2)] = null);
(statearr_9131_9152[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9129 === (3)))
{var inst_9106 = (state_9128[(7)]);var inst_9109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9106,(0),null);var inst_9110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9106,(1),null);var inst_9111 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9109,cljs.core.constant$keyword$60);var state_9128__$1 = (function (){var statearr_9132 = state_9128;(statearr_9132[(8)] = inst_9110);
return statearr_9132;
})();if(inst_9111)
{var statearr_9133_9153 = state_9128__$1;(statearr_9133_9153[(1)] = (5));
} else
{var statearr_9134_9154 = state_9128__$1;(statearr_9134_9154[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_9129 === (2)))
{var inst_9103 = (state_9128[(2)]);var inst_9104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9103,(0),null);var inst_9105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9103,(1),null);var inst_9106 = inst_9103;var state_9128__$1 = (function (){var statearr_9135 = state_9128;(statearr_9135[(9)] = inst_9105);
(statearr_9135[(7)] = inst_9106);
(statearr_9135[(10)] = inst_9104);
return statearr_9135;
})();var statearr_9136_9155 = state_9128__$1;(statearr_9136_9155[(2)] = null);
(statearr_9136_9155[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9129 === (11)))
{var inst_9120 = (state_9128[(2)]);var inst_9106 = inst_9120;var state_9128__$1 = (function (){var statearr_9137 = state_9128;(statearr_9137[(7)] = inst_9106);
return statearr_9137;
})();var statearr_9138_9156 = state_9128__$1;(statearr_9138_9156[(2)] = null);
(statearr_9138_9156[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9129 === (9)))
{var state_9128__$1 = state_9128;var statearr_9139_9157 = state_9128__$1;(statearr_9139_9157[(2)] = null);
(statearr_9139_9157[(1)] = (10));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9129 === (5)))
{var inst_9110 = (state_9128[(8)]);var inst_9113 = in_range(inst_9110);var state_9128__$1 = state_9128;if(inst_9113)
{var statearr_9140_9158 = state_9128__$1;(statearr_9140_9158[(1)] = (8));
} else
{var statearr_9141_9159 = state_9128__$1;(statearr_9141_9159[(1)] = (9));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_9129 === (10)))
{var inst_9118 = (state_9128[(2)]);var state_9128__$1 = (function (){var statearr_9142 = state_9128;(statearr_9142[(11)] = inst_9118);
return statearr_9142;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9128__$1,(11),drawing_chan);
} else
{if((state_val_9129 === (8)))
{var inst_9110 = (state_9128[(8)]);var inst_9115 = perfection.core.draw_point(selector,color,inst_9110,offset);var state_9128__$1 = state_9128;var statearr_9143_9160 = state_9128__$1;(statearr_9143_9160[(2)] = inst_9115);
(statearr_9143_9160[(1)] = (10));
return cljs.core.constant$keyword$31;
} else
{return null;
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
});})(c__5708__auto__,offset,width,height,in_range))
;return ((function (switch__5693__auto__,c__5708__auto__,offset,width,height,in_range){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_9147 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9147[(0)] = state_machine__5694__auto__);
(statearr_9147[(1)] = (1));
return statearr_9147;
});
var state_machine__5694__auto____1 = (function (state_9128){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_9128);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e9148){if((e9148 instanceof Object))
{var ex__5697__auto__ = e9148;var statearr_9149_9161 = state_9128;(statearr_9149_9161[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_9128);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e9148;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__9162 = state_9128;
state_9128 = G__9162;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_9128){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_9128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,offset,width,height,in_range))
})();var state__5710__auto__ = (function (){var statearr_9150 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_9150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_9150;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,offset,width,height,in_range))
);
return c__5708__auto__;
});
var selector_9215 = "#js-draw";var drawing_chan_9216 = perfection.core.draw_chan(selector_9215);var c__5708__auto___9217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto___9217,selector_9215,drawing_chan_9216){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___9217,selector_9215,drawing_chan_9216){
return (function (state_9196){var state_val_9197 = (state_9196[(1)]);if((state_val_9197 === (9)))
{var inst_9171 = (state_9196[(7)]);var inst_9190 = (state_9196[(2)]);var inst_9191 = (inst_9171 + (1));var inst_9170 = inst_9190;var inst_9171__$1 = inst_9191;var state_9196__$1 = (function (){var statearr_9198 = state_9196;(statearr_9198[(7)] = inst_9171__$1);
(statearr_9198[(8)] = inst_9170);
return statearr_9198;
})();var statearr_9199_9218 = state_9196__$1;(statearr_9199_9218[(2)] = null);
(statearr_9199_9218[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9197 === (8)))
{var inst_9185 = (state_9196[(2)]);var state_9196__$1 = state_9196;var statearr_9200_9219 = state_9196__$1;(statearr_9200_9219[(2)] = inst_9185);
(statearr_9200_9219[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9197 === (7)))
{var inst_9188 = (state_9196[(2)]);var state_9196__$1 = (function (){var statearr_9201 = state_9196;(statearr_9201[(9)] = inst_9188);
return statearr_9201;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9196__$1,(9),drawing_chan_9216);
} else
{if((state_val_9197 === (6)))
{var state_9196__$1 = state_9196;var statearr_9202_9220 = state_9196__$1;(statearr_9202_9220[(2)] = null);
(statearr_9202_9220[(1)] = (7));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9197 === (5)))
{var inst_9171 = (state_9196[(7)]);var inst_9179 = [cljs.core.constant$keyword$65,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67];var inst_9180 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9179,null));var inst_9181 = cljs.core.mod(inst_9171,(3));var inst_9182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9180,inst_9181);var inst_9183 = perfection.core.draw_points(selector_9215,drawing_chan_9216,inst_9182);var state_9196__$1 = state_9196;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9196__$1,(8),inst_9183);
} else
{if((state_val_9197 === (4)))
{var inst_9194 = (state_9196[(2)]);var state_9196__$1 = state_9196;return cljs.core.async.impl.ioc_helpers.return_chan(state_9196__$1,inst_9194);
} else
{if((state_val_9197 === (3)))
{var inst_9170 = (state_9196[(8)]);var inst_9174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9170,(0),null);var inst_9175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9170,(1),null);var inst_9176 = console.log(inst_9174);var inst_9177 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$60,inst_9174);var state_9196__$1 = (function (){var statearr_9203 = state_9196;(statearr_9203[(10)] = inst_9176);
(statearr_9203[(11)] = inst_9175);
return statearr_9203;
})();if(inst_9177)
{var statearr_9204_9221 = state_9196__$1;(statearr_9204_9221[(1)] = (5));
} else
{var statearr_9205_9222 = state_9196__$1;(statearr_9205_9222[(1)] = (6));
}
return cljs.core.constant$keyword$31;
} else
{if((state_val_9197 === (2)))
{var inst_9167 = (state_9196[(2)]);var inst_9168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9167,(0),null);var inst_9169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9167,(1),null);var inst_9170 = inst_9167;var inst_9171 = (0);var state_9196__$1 = (function (){var statearr_9206 = state_9196;(statearr_9206[(12)] = inst_9169);
(statearr_9206[(7)] = inst_9171);
(statearr_9206[(13)] = inst_9168);
(statearr_9206[(8)] = inst_9170);
return statearr_9206;
})();var statearr_9207_9223 = state_9196__$1;(statearr_9207_9223[(2)] = null);
(statearr_9207_9223[(1)] = (3));
return cljs.core.constant$keyword$31;
} else
{if((state_val_9197 === (1)))
{var state_9196__$1 = state_9196;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9196__$1,(2),drawing_chan_9216);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__5708__auto___9217,selector_9215,drawing_chan_9216))
;return ((function (switch__5693__auto__,c__5708__auto___9217,selector_9215,drawing_chan_9216){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_9211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9211[(0)] = state_machine__5694__auto__);
(statearr_9211[(1)] = (1));
return statearr_9211;
});
var state_machine__5694__auto____1 = (function (state_9196){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_9196);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$31))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e9212){if((e9212 instanceof Object))
{var ex__5697__auto__ = e9212;var statearr_9213_9224 = state_9196;(statearr_9213_9224[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_9196);
return cljs.core.constant$keyword$31;
} else
{if(cljs.core.constant$keyword$6)
{throw e9212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$31))
{{
var G__9225 = state_9196;
state_9196 = G__9225;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_9196){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_9196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___9217,selector_9215,drawing_chan_9216))
})();var state__5710__auto__ = (function (){var statearr_9214 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_9214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___9217);
return statearr_9214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto___9217,selector_9215,drawing_chan_9216))
);
