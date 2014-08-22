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
perfection.core.xy_message = (function xy_message(ch,msg_name,xy_obj){return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),xy_obj.pageX,new cljs.core.Keyword(null,"y","y",-1757859776),xy_obj.pageY], null)], null));
});
perfection.core.touch_xy_message = (function touch_xy_message(ch,msg_name,xy_obj){return perfection.core.xy_message.call(null,ch,msg_name,(xy_obj.originalEvent.touches[(0)]));
});
perfection.core.mousemove_handler = (function mousemove_handler(in_chan,jqevent){if((jqevent.which > (0)))
{return perfection.core.xy_message.call(null,in_chan,new cljs.core.Keyword(null,"draw","draw",1358331674),jqevent);
} else
{return cljs.core.async.put_BANG_.call(null,in_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawend","drawend",-1823283592)], null));
}
});
perfection.core.draw_event_capture = (function draw_event_capture(in_chan,selector){var end_handler = (function (_){return cljs.core.async.put_BANG_.call(null,in_chan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawend","drawend",-1823283592)], null));
});jayq.core.bind.call(null,jayq.core.$.call(null,selector),"mousemove",((function (end_handler){
return (function (p1__22498_SHARP_){return perfection.core.mousemove_handler.call(null,in_chan,p1__22498_SHARP_);
});})(end_handler))
);
jayq.core.bind.call(null,jayq.core.$.call(null,selector),"mousedown",((function (end_handler){
return (function (p1__22499_SHARP_){return perfection.core.xy_message.call(null,in_chan,new cljs.core.Keyword(null,"draw","draw",1358331674),p1__22499_SHARP_);
});})(end_handler))
);
jayq.core.bind.call(null,jayq.core.$.call(null,selector),"mouseup",end_handler);
jayq.core.bind.call(null,jayq.core.$.call(null,selector),"touchmove",((function (end_handler){
return (function (p1__22500_SHARP_){return perfection.core.touch_xy_message.call(null,in_chan,new cljs.core.Keyword(null,"draw","draw",1358331674),p1__22500_SHARP_);
});})(end_handler))
);
return jayq.core.bind.call(null,jayq.core.$.call(null,selector),"touchend",end_handler);
});
perfection.core.get_drawing = (function get_drawing(input_chan,out_chan){var c__9795__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9795__auto__){
return (function (){var f__9796__auto__ = (function (){var switch__9780__auto__ = ((function (c__9795__auto__){
return (function (state_22553){var state_val_22554 = (state_22553[(1)]);if((state_val_22554 === (8)))
{var inst_22545 = (state_22553[(2)]);var inst_22538 = inst_22545;var state_22553__$1 = (function (){var statearr_22555 = state_22553;(statearr_22555[(7)] = inst_22538);
return statearr_22555;
})();var statearr_22556_22571 = state_22553__$1;(statearr_22556_22571[(2)] = null);
(statearr_22556_22571[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22554 === (7)))
{var inst_22549 = (state_22553[(2)]);var state_22553__$1 = state_22553;var statearr_22557_22572 = state_22553__$1;(statearr_22557_22572[(2)] = inst_22549);
(statearr_22557_22572[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22554 === (6)))
{var state_22553__$1 = state_22553;var statearr_22558_22573 = state_22553__$1;(statearr_22558_22573[(2)] = null);
(statearr_22558_22573[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22554 === (5)))
{var state_22553__$1 = state_22553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22553__$1,(8),input_chan);
} else
{if((state_val_22554 === (4)))
{var inst_22551 = (state_22553[(2)]);var state_22553__$1 = state_22553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22553__$1,inst_22551);
} else
{if((state_val_22554 === (3)))
{var inst_22538 = (state_22553[(7)]);var inst_22540 = cljs.core.async.put_BANG_.call(null,out_chan,inst_22538);var inst_22541 = cljs.core.first.call(null,inst_22538);var inst_22542 = cljs.core._EQ_.call(null,inst_22541,new cljs.core.Keyword(null,"draw","draw",1358331674));var state_22553__$1 = (function (){var statearr_22559 = state_22553;(statearr_22559[(8)] = inst_22540);
return statearr_22559;
})();if(inst_22542)
{var statearr_22560_22574 = state_22553__$1;(statearr_22560_22574[(1)] = (5));
} else
{var statearr_22561_22575 = state_22553__$1;(statearr_22561_22575[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22554 === (2)))
{var inst_22537 = (state_22553[(2)]);var inst_22538 = inst_22537;var state_22553__$1 = (function (){var statearr_22562 = state_22553;(statearr_22562[(7)] = inst_22538);
return statearr_22562;
})();var statearr_22563_22576 = state_22553__$1;(statearr_22563_22576[(2)] = null);
(statearr_22563_22576[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22554 === (1)))
{var state_22553__$1 = state_22553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22553__$1,(2),input_chan);
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
});})(c__9795__auto__))
;return ((function (switch__9780__auto__,c__9795__auto__){
return (function() {
var state_machine__9781__auto__ = null;
var state_machine__9781__auto____0 = (function (){var statearr_22567 = [null,null,null,null,null,null,null,null,null];(statearr_22567[(0)] = state_machine__9781__auto__);
(statearr_22567[(1)] = (1));
return statearr_22567;
});
var state_machine__9781__auto____1 = (function (state_22553){while(true){
var ret_value__9782__auto__ = (function (){try{while(true){
var result__9783__auto__ = switch__9780__auto__.call(null,state_22553);if(cljs.core.keyword_identical_QMARK_.call(null,result__9783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9783__auto__;
}
break;
}
}catch (e22568){if((e22568 instanceof Object))
{var ex__9784__auto__ = e22568;var statearr_22569_22577 = state_22553;(statearr_22569_22577[(5)] = ex__9784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22578 = state_22553;
state_22553 = G__22578;
continue;
}
} else
{return ret_value__9782__auto__;
}
break;
}
});
state_machine__9781__auto__ = function(state_22553){
switch(arguments.length){
case 0:
return state_machine__9781__auto____0.call(this);
case 1:
return state_machine__9781__auto____1.call(this,state_22553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9781__auto____0;
state_machine__9781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9781__auto____1;
return state_machine__9781__auto__;
})()
;})(switch__9780__auto__,c__9795__auto__))
})();var state__9797__auto__ = (function (){var statearr_22570 = f__9796__auto__.call(null);(statearr_22570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9795__auto__);
return statearr_22570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9797__auto__);
});})(c__9795__auto__))
);
return c__9795__auto__;
});
perfection.core.draw_chan = (function draw_chan(selector){var input_chan = cljs.core.async.chan.call(null);var out_chan = cljs.core.async.chan.call(null);perfection.core.draw_event_capture.call(null,input_chan,selector);
var c__9795__auto___22673 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9795__auto___22673,input_chan,out_chan){
return (function (){var f__9796__auto__ = (function (){var switch__9780__auto__ = ((function (c__9795__auto___22673,input_chan,out_chan){
return (function (state_22653){var state_val_22654 = (state_22653[(1)]);if((state_val_22654 === (9)))
{var inst_22648 = (state_22653[(2)]);var inst_22633 = inst_22648;var state_22653__$1 = (function (){var statearr_22655 = state_22653;(statearr_22655[(7)] = inst_22633);
return statearr_22655;
})();var statearr_22656_22674 = state_22653__$1;(statearr_22656_22674[(2)] = null);
(statearr_22656_22674[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22654 === (8)))
{var inst_22643 = (state_22653[(2)]);var state_22653__$1 = state_22653;var statearr_22657_22675 = state_22653__$1;(statearr_22657_22675[(2)] = inst_22643);
(statearr_22657_22675[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22654 === (7)))
{var inst_22646 = (state_22653[(2)]);var state_22653__$1 = (function (){var statearr_22658 = state_22653;(statearr_22658[(8)] = inst_22646);
return statearr_22658;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22653__$1,(9),input_chan);
} else
{if((state_val_22654 === (6)))
{var state_22653__$1 = state_22653;var statearr_22659_22676 = state_22653__$1;(statearr_22659_22676[(2)] = null);
(statearr_22659_22676[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22654 === (5)))
{var inst_22633 = (state_22653[(7)]);var inst_22640 = cljs.core.async.put_BANG_.call(null,out_chan,inst_22633);var inst_22641 = perfection.core.get_drawing.call(null,input_chan,out_chan);var state_22653__$1 = (function (){var statearr_22660 = state_22653;(statearr_22660[(9)] = inst_22640);
return statearr_22660;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22653__$1,(8),inst_22641);
} else
{if((state_val_22654 === (4)))
{var inst_22651 = (state_22653[(2)]);var state_22653__$1 = state_22653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22653__$1,inst_22651);
} else
{if((state_val_22654 === (3)))
{var inst_22633 = (state_22653[(7)]);var inst_22636 = cljs.core.nth.call(null,inst_22633,(0),null);var inst_22637 = cljs.core.nth.call(null,inst_22633,(1),null);var inst_22638 = cljs.core._EQ_.call(null,inst_22636,new cljs.core.Keyword(null,"draw","draw",1358331674));var state_22653__$1 = (function (){var statearr_22661 = state_22653;(statearr_22661[(10)] = inst_22637);
return statearr_22661;
})();if(inst_22638)
{var statearr_22662_22677 = state_22653__$1;(statearr_22662_22677[(1)] = (5));
} else
{var statearr_22663_22678 = state_22653__$1;(statearr_22663_22678[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22654 === (2)))
{var inst_22630 = (state_22653[(2)]);var inst_22631 = cljs.core.nth.call(null,inst_22630,(0),null);var inst_22632 = cljs.core.nth.call(null,inst_22630,(1),null);var inst_22633 = inst_22630;var state_22653__$1 = (function (){var statearr_22664 = state_22653;(statearr_22664[(11)] = inst_22632);
(statearr_22664[(12)] = inst_22631);
(statearr_22664[(7)] = inst_22633);
return statearr_22664;
})();var statearr_22665_22679 = state_22653__$1;(statearr_22665_22679[(2)] = null);
(statearr_22665_22679[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22654 === (1)))
{var state_22653__$1 = state_22653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22653__$1,(2),input_chan);
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
});})(c__9795__auto___22673,input_chan,out_chan))
;return ((function (switch__9780__auto__,c__9795__auto___22673,input_chan,out_chan){
return (function() {
var state_machine__9781__auto__ = null;
var state_machine__9781__auto____0 = (function (){var statearr_22669 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22669[(0)] = state_machine__9781__auto__);
(statearr_22669[(1)] = (1));
return statearr_22669;
});
var state_machine__9781__auto____1 = (function (state_22653){while(true){
var ret_value__9782__auto__ = (function (){try{while(true){
var result__9783__auto__ = switch__9780__auto__.call(null,state_22653);if(cljs.core.keyword_identical_QMARK_.call(null,result__9783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9783__auto__;
}
break;
}
}catch (e22670){if((e22670 instanceof Object))
{var ex__9784__auto__ = e22670;var statearr_22671_22680 = state_22653;(statearr_22671_22680[(5)] = ex__9784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22681 = state_22653;
state_22653 = G__22681;
continue;
}
} else
{return ret_value__9782__auto__;
}
break;
}
});
state_machine__9781__auto__ = function(state_22653){
switch(arguments.length){
case 0:
return state_machine__9781__auto____0.call(this);
case 1:
return state_machine__9781__auto____1.call(this,state_22653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9781__auto____0;
state_machine__9781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9781__auto____1;
return state_machine__9781__auto__;
})()
;})(switch__9780__auto__,c__9795__auto___22673,input_chan,out_chan))
})();var state__9797__auto__ = (function (){var statearr_22672 = f__9796__auto__.call(null);(statearr_22672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9795__auto___22673);
return statearr_22672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9797__auto__);
});})(c__9795__auto___22673,input_chan,out_chan))
);
return out_chan;
});
perfection.core.draw_point = (function draw_point(selector,color,coord,p__22682){var map__22684 = p__22682;var map__22684__$1 = ((cljs.core.seq_QMARK_.call(null,map__22684))?cljs.core.apply.call(null,cljs.core.hash_map,map__22684):map__22684);var left = cljs.core.get.call(null,map__22684__$1,new cljs.core.Keyword(null,"left","left",-399115937));var top = cljs.core.get.call(null,map__22684__$1,new cljs.core.Keyword(null,"top","top",-1856271961));return jayq.core.append.call(null,jayq.core.$.call(null,selector),crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))),new cljs.core.Keyword(null,"style","style",-496642736),("top: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((coord.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) - top) - (5)))+"px;left: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((coord.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) - left) - (5)))+"px;")], null)], null)));
});
perfection.core.draw_points = (function draw_points(selector,drawing_chan,color){var offset = jayq.core.offset.call(null,jayq.core.$.call(null,selector));var width = (jayq.core.$.call(null,selector).width() + offset.call(null,new cljs.core.Keyword(null,"left","left",-399115937)));var height = (jayq.core.$.call(null,selector).height() + offset.call(null,new cljs.core.Keyword(null,"top","top",-1856271961)));var in_range = ((function (offset,width,height){
return (function (p1__22685_SHARP_){return (((offset.call(null,new cljs.core.Keyword(null,"top","top",-1856271961)) < p1__22685_SHARP_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)))) && ((p1__22685_SHARP_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) < height))) && (((offset.call(null,new cljs.core.Keyword(null,"left","left",-399115937)) < p1__22685_SHARP_.call(null,new cljs.core.Keyword(null,"x","x",2099068185)))) && ((p1__22685_SHARP_.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) < width)));
});})(offset,width,height))
;var c__9795__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9795__auto__,offset,width,height,in_range){
return (function (){var f__9796__auto__ = (function (){var switch__9780__auto__ = ((function (c__9795__auto__,offset,width,height,in_range){
return (function (state_22767){var state_val_22768 = (state_22767[(1)]);if((state_val_22768 === (7)))
{var inst_22763 = (state_22767[(2)]);var state_22767__$1 = state_22767;var statearr_22769_22790 = state_22767__$1;(statearr_22769_22790[(2)] = inst_22763);
(statearr_22769_22790[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22768 === (1)))
{var state_22767__$1 = state_22767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22767__$1,(2),drawing_chan);
} else
{if((state_val_22768 === (4)))
{var inst_22765 = (state_22767[(2)]);var state_22767__$1 = state_22767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22767__$1,inst_22765);
} else
{if((state_val_22768 === (6)))
{var state_22767__$1 = state_22767;var statearr_22770_22791 = state_22767__$1;(statearr_22770_22791[(2)] = null);
(statearr_22770_22791[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22768 === (3)))
{var inst_22745 = (state_22767[(7)]);var inst_22748 = cljs.core.nth.call(null,inst_22745,(0),null);var inst_22749 = cljs.core.nth.call(null,inst_22745,(1),null);var inst_22750 = cljs.core._EQ_.call(null,inst_22748,new cljs.core.Keyword(null,"draw","draw",1358331674));var state_22767__$1 = (function (){var statearr_22771 = state_22767;(statearr_22771[(8)] = inst_22749);
return statearr_22771;
})();if(inst_22750)
{var statearr_22772_22792 = state_22767__$1;(statearr_22772_22792[(1)] = (5));
} else
{var statearr_22773_22793 = state_22767__$1;(statearr_22773_22793[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22768 === (2)))
{var inst_22742 = (state_22767[(2)]);var inst_22743 = cljs.core.nth.call(null,inst_22742,(0),null);var inst_22744 = cljs.core.nth.call(null,inst_22742,(1),null);var inst_22745 = inst_22742;var state_22767__$1 = (function (){var statearr_22774 = state_22767;(statearr_22774[(9)] = inst_22744);
(statearr_22774[(7)] = inst_22745);
(statearr_22774[(10)] = inst_22743);
return statearr_22774;
})();var statearr_22775_22794 = state_22767__$1;(statearr_22775_22794[(2)] = null);
(statearr_22775_22794[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22768 === (11)))
{var inst_22759 = (state_22767[(2)]);var inst_22745 = inst_22759;var state_22767__$1 = (function (){var statearr_22776 = state_22767;(statearr_22776[(7)] = inst_22745);
return statearr_22776;
})();var statearr_22777_22795 = state_22767__$1;(statearr_22777_22795[(2)] = null);
(statearr_22777_22795[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22768 === (9)))
{var state_22767__$1 = state_22767;var statearr_22778_22796 = state_22767__$1;(statearr_22778_22796[(2)] = null);
(statearr_22778_22796[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22768 === (5)))
{var inst_22749 = (state_22767[(8)]);var inst_22752 = in_range.call(null,inst_22749);var state_22767__$1 = state_22767;if(inst_22752)
{var statearr_22779_22797 = state_22767__$1;(statearr_22779_22797[(1)] = (8));
} else
{var statearr_22780_22798 = state_22767__$1;(statearr_22780_22798[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22768 === (10)))
{var inst_22757 = (state_22767[(2)]);var state_22767__$1 = (function (){var statearr_22781 = state_22767;(statearr_22781[(11)] = inst_22757);
return statearr_22781;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22767__$1,(11),drawing_chan);
} else
{if((state_val_22768 === (8)))
{var inst_22749 = (state_22767[(8)]);var inst_22754 = perfection.core.draw_point.call(null,selector,color,inst_22749,offset);var state_22767__$1 = state_22767;var statearr_22782_22799 = state_22767__$1;(statearr_22782_22799[(2)] = inst_22754);
(statearr_22782_22799[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__9795__auto__,offset,width,height,in_range))
;return ((function (switch__9780__auto__,c__9795__auto__,offset,width,height,in_range){
return (function() {
var state_machine__9781__auto__ = null;
var state_machine__9781__auto____0 = (function (){var statearr_22786 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22786[(0)] = state_machine__9781__auto__);
(statearr_22786[(1)] = (1));
return statearr_22786;
});
var state_machine__9781__auto____1 = (function (state_22767){while(true){
var ret_value__9782__auto__ = (function (){try{while(true){
var result__9783__auto__ = switch__9780__auto__.call(null,state_22767);if(cljs.core.keyword_identical_QMARK_.call(null,result__9783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9783__auto__;
}
break;
}
}catch (e22787){if((e22787 instanceof Object))
{var ex__9784__auto__ = e22787;var statearr_22788_22800 = state_22767;(statearr_22788_22800[(5)] = ex__9784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22767);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22787;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22801 = state_22767;
state_22767 = G__22801;
continue;
}
} else
{return ret_value__9782__auto__;
}
break;
}
});
state_machine__9781__auto__ = function(state_22767){
switch(arguments.length){
case 0:
return state_machine__9781__auto____0.call(this);
case 1:
return state_machine__9781__auto____1.call(this,state_22767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9781__auto____0;
state_machine__9781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9781__auto____1;
return state_machine__9781__auto__;
})()
;})(switch__9780__auto__,c__9795__auto__,offset,width,height,in_range))
})();var state__9797__auto__ = (function (){var statearr_22789 = f__9796__auto__.call(null);(statearr_22789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9795__auto__);
return statearr_22789;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9797__auto__);
});})(c__9795__auto__,offset,width,height,in_range))
);
return c__9795__auto__;
});
var selector_22854 = "#js-draw";var drawing_chan_22855 = perfection.core.draw_chan.call(null,selector_22854);var c__9795__auto___22856 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9795__auto___22856,selector_22854,drawing_chan_22855){
return (function (){var f__9796__auto__ = (function (){var switch__9780__auto__ = ((function (c__9795__auto___22856,selector_22854,drawing_chan_22855){
return (function (state_22835){var state_val_22836 = (state_22835[(1)]);if((state_val_22836 === (9)))
{var inst_22810 = (state_22835[(7)]);var inst_22829 = (state_22835[(2)]);var inst_22830 = (inst_22810 + (1));var inst_22809 = inst_22829;var inst_22810__$1 = inst_22830;var state_22835__$1 = (function (){var statearr_22837 = state_22835;(statearr_22837[(8)] = inst_22809);
(statearr_22837[(7)] = inst_22810__$1);
return statearr_22837;
})();var statearr_22838_22857 = state_22835__$1;(statearr_22838_22857[(2)] = null);
(statearr_22838_22857[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22836 === (8)))
{var inst_22824 = (state_22835[(2)]);var state_22835__$1 = state_22835;var statearr_22839_22858 = state_22835__$1;(statearr_22839_22858[(2)] = inst_22824);
(statearr_22839_22858[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22836 === (7)))
{var inst_22827 = (state_22835[(2)]);var state_22835__$1 = (function (){var statearr_22840 = state_22835;(statearr_22840[(9)] = inst_22827);
return statearr_22840;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22835__$1,(9),drawing_chan_22855);
} else
{if((state_val_22836 === (6)))
{var state_22835__$1 = state_22835;var statearr_22841_22859 = state_22835__$1;(statearr_22841_22859[(2)] = null);
(statearr_22841_22859[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22836 === (5)))
{var inst_22810 = (state_22835[(7)]);var inst_22818 = [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)];var inst_22819 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_22818,null));var inst_22820 = cljs.core.mod.call(null,inst_22810,(3));var inst_22821 = cljs.core.get.call(null,inst_22819,inst_22820);var inst_22822 = perfection.core.draw_points.call(null,selector_22854,drawing_chan_22855,inst_22821);var state_22835__$1 = state_22835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22835__$1,(8),inst_22822);
} else
{if((state_val_22836 === (4)))
{var inst_22833 = (state_22835[(2)]);var state_22835__$1 = state_22835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22835__$1,inst_22833);
} else
{if((state_val_22836 === (3)))
{var inst_22809 = (state_22835[(8)]);var inst_22813 = cljs.core.nth.call(null,inst_22809,(0),null);var inst_22814 = cljs.core.nth.call(null,inst_22809,(1),null);var inst_22815 = console.log(inst_22813);var inst_22816 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),inst_22813);var state_22835__$1 = (function (){var statearr_22842 = state_22835;(statearr_22842[(10)] = inst_22815);
(statearr_22842[(11)] = inst_22814);
return statearr_22842;
})();if(inst_22816)
{var statearr_22843_22860 = state_22835__$1;(statearr_22843_22860[(1)] = (5));
} else
{var statearr_22844_22861 = state_22835__$1;(statearr_22844_22861[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22836 === (2)))
{var inst_22806 = (state_22835[(2)]);var inst_22807 = cljs.core.nth.call(null,inst_22806,(0),null);var inst_22808 = cljs.core.nth.call(null,inst_22806,(1),null);var inst_22809 = inst_22806;var inst_22810 = (0);var state_22835__$1 = (function (){var statearr_22845 = state_22835;(statearr_22845[(12)] = inst_22808);
(statearr_22845[(8)] = inst_22809);
(statearr_22845[(13)] = inst_22807);
(statearr_22845[(7)] = inst_22810);
return statearr_22845;
})();var statearr_22846_22862 = state_22835__$1;(statearr_22846_22862[(2)] = null);
(statearr_22846_22862[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22836 === (1)))
{var state_22835__$1 = state_22835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22835__$1,(2),drawing_chan_22855);
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
});})(c__9795__auto___22856,selector_22854,drawing_chan_22855))
;return ((function (switch__9780__auto__,c__9795__auto___22856,selector_22854,drawing_chan_22855){
return (function() {
var state_machine__9781__auto__ = null;
var state_machine__9781__auto____0 = (function (){var statearr_22850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22850[(0)] = state_machine__9781__auto__);
(statearr_22850[(1)] = (1));
return statearr_22850;
});
var state_machine__9781__auto____1 = (function (state_22835){while(true){
var ret_value__9782__auto__ = (function (){try{while(true){
var result__9783__auto__ = switch__9780__auto__.call(null,state_22835);if(cljs.core.keyword_identical_QMARK_.call(null,result__9783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9783__auto__;
}
break;
}
}catch (e22851){if((e22851 instanceof Object))
{var ex__9784__auto__ = e22851;var statearr_22852_22863 = state_22835;(statearr_22852_22863[(5)] = ex__9784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22864 = state_22835;
state_22835 = G__22864;
continue;
}
} else
{return ret_value__9782__auto__;
}
break;
}
});
state_machine__9781__auto__ = function(state_22835){
switch(arguments.length){
case 0:
return state_machine__9781__auto____0.call(this);
case 1:
return state_machine__9781__auto____1.call(this,state_22835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9781__auto____0;
state_machine__9781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9781__auto____1;
return state_machine__9781__auto__;
})()
;})(switch__9780__auto__,c__9795__auto___22856,selector_22854,drawing_chan_22855))
})();var state__9797__auto__ = (function (){var statearr_22853 = f__9796__auto__.call(null);(statearr_22853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9795__auto___22856);
return statearr_22853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9797__auto__);
});})(c__9795__auto___22856,selector_22854,drawing_chan_22855))
);

//# sourceMappingURL=core.js.map