jQuery(document).ready(function(n){n(document).foundation();var e=new Date,t=e.getMonth()+1,o=e.getDate();10>t&&(t="0"+t),10>o&&(o="0"+o);var a=e.getFullYear()+"-"+t+"-"+o;n("#calendar").val(a),n("#calendar2").val(a),n(window).load(function(){n("#calendar").glDatePicker(),n("#calendar2").glDatePicker()}),n(document).mouseup(function(e){var t=n(".shopping-info"),o=n(".content .menu");t.is(e.target)||0!==t.has(e.target).length||(t.fadeOut(350),o.fadeOut(350))}),n(".left-cat-menu").on({mouseenter:function(){var e="#f5f5f5";n(this).find("li.first").css("background-color",e),n(this).find("li.second").css("background-color",e),n(this).find("li.third").css("background-color",e)},mouseleave:function(){n(this).find("li.first").css("background-color","white"),n(this).find("li.second").css("background-color","white"),n(this).find("li.third").css("background-color","white")}}),n(".content").on("click",function(){n(".content .menu").stop().fadeToggle("fast")}),n(".shopping-cart").on("click",function(){n(".shopping-info").stop().fadeToggle(350)}),n(function(n){!function(){var e=n(".recommended-row");e.children("ul").eq(0),e.parent();e.sly({horizontal:1,itemNav:"basic",smart:1,activateOn:"click",mouseDragging:1,touchDragging:1,releaseSwing:1,startAt:0,activatePageOn:"click",speed:200,elasticBounds:1,easing:"easeOutExpo",dragHandle:1,dynamicHandle:1,clickBar:1,moveBy:800})}()})});
