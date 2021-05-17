(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"scrollBarMargin":2,"paddingBottom":0,"id":"rootPlayer","overflow":"hidden","paddingLeft":0,"toolTipHorizontalAlign":"center","propagateClick":false,"children":["this.MainViewer","this.SplitViewer_7DF94A1B_7309_4C41_4166_9ADD184FBAF5"],"backgroundOpacity":1,"gap":10,"verticalAlign":"top","paddingRight":0,"defaultVRPointer":"laser","scrollBarWidth":10,"mediaActivationMode":"window","start":"this.init()","horizontalAlign":"left","borderSize":0,"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"downloadEnabled":false,"vrPolyfillScale":0.75,"mobileMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"layout":"absolute","width":"100%","height":"100%","class":"Player","minHeight":20,"scrollBarColor":"#000000","minWidth":20,"borderRadius":0,"shadow":false,"contentOpaque":false,"definitions": [{"playbackBarHeadHeight":15,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressRight":0,"id":"ViewerAreaLabeled_7C32FE4E_7308_C4C3_41D8_238973C19BA7","toolTipShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarProgressBorderColor":"#000000","right":0,"subtitlesFontWeight":"normal","progressOpacity":1,"playbackBarHeadBorderSize":0,"toolTipFontWeight":"normal","width":"100%","subtitlesPaddingLeft":5,"playbackBarHeadBorderRadius":0,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowHorizontalLength":1,"subtitlesPaddingRight":5,"borderSize":0,"subtitlesBottom":50,"playbackBarHeadOpacity":1,"playbackBarHeadShadowVerticalLength":0,"progressBackgroundColorRatios":[0],"progressBorderRadius":0,"subtitlesTop":0,"playbackBarHeadShadow":true,"playbackBarProgressOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","toolTipBorderRadius":3,"class":"ViewerArea","height":"100%","surfaceReticleColor":"#FFFFFF","subtitlesFontSize":"3vmin","firstTransitionDuration":0,"progressLeft":0,"playbackBarBorderSize":0,"toolTipPaddingBottom":4,"surfaceReticleOpacity":0.6,"playbackBarOpacity":1,"shadow":false,"progressBarBackgroundColorDirection":"vertical","toolTipShadowHorizontalLength":0,"subtitlesBackgroundOpacity":0.2,"subtitlesEnabled":true,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"displayTooltipInTouchScreens":true,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","toolTipDisplayTime":600,"playbackBarBottom":5,"paddingTop":0,"paddingBottom":0,"playbackBarBackgroundOpacity":1,"progressBarBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"toolTipTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","transitionMode":"blending","toolTipFontColor":"#606060","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeight":10,"progressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"paddingLeft":0,"playbackBarHeadBackgroundColorDirection":"vertical","show":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_7C2C38D8_765D_F902_41DC_E13C5B5F0AD7); this.ViewerAreaLabeled_7C32FE4E_7308_C4C3_41D8_238973C19BA7.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7C35982E_765D_F91E_41D1_C92C2DE01F56.set('selectedIndex', -1); }, this); this.playList_7C35982E_765D_F91E_41D1_C92C2DE01F56.set('selectedIndex', 0)","toolTipHorizontalAlign":"center","subtitlesTextDecoration":"none","toolTipBorderSize":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"paddingRight":0,"transitionDuration":500,"subtitlesTextShadowBlurRadius":0,"toolTipFontSize":"1.11vmin","displayTooltipInSurfaceSelection":true,"toolTipPaddingTop":4,"playbackBarBackgroundColorDirection":"vertical","progressBorderColor":"#000000","toolTipShadowSpread":0,"progressBarBackgroundColor":["#3399FF"],"top":0,"toolTipBorderColor":"#767676","playbackBarRight":0,"toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesShadow":false,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"toolTipOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionColor":"#FF6600","vrPointerColor":"#FFFFFF","minHeight":50,"vrPointerSelectionTime":2000,"subtitlesOpacity":1,"progressBarOpacity":1,"minWidth":100,"progressBottom":0,"borderRadius":0,"toolTipShadowVerticalLength":0,"subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","progressHeight":10,"doubleClickAction":"toggle_fullscreen","subtitlesHorizontalAlign":"center","progressBorderSize":0,"subtitlesVerticalAlign":"bottom","playbackBarLeft":0,"toolTipFontFamily":"Arial","progressBarBorderRadius":0,"toolTipPaddingRight":6,"data":{"name":"RightViewer"},"toolTipFontStyle":"normal","playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"subtitlesBorderSize":0,"propagateClick":false,"toolTipBackgroundColor":"#F6F6F6"},{"toolTipHorizontalAlign":"center","scrollBarMargin":2,"paddingBottom":0,"id":"SplitViewer_7DF94A1B_7309_4C41_4166_9ADD184FBAF5","left":"0%","children":["this.Container_7C26FE4A_7308_C4C3_419A_B045D7879532","this.Container_7C33CE4B_7308_C4C1_41B6_06646B663A63","this.Container_7C070E5D_7308_C4C1_41B5_BCB0670019D6"],"overflow":"scroll","paddingLeft":0,"propagateClick":false,"backgroundOpacity":0.3,"gap":10,"verticalAlign":"top","paddingRight":0,"scrollBarWidth":10,"horizontalAlign":"left","borderSize":0,"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"top":"0%","init":"this._initSplitViewer(event.source)","backgroundColor":[],"layout":"absolute","width":"100%","height":"100%","class":"Container","minHeight":20,"scrollBarColor":"#000000","minWidth":20,"borderRadius":0,"shadow":false,"contentOpaque":false,"backgroundColorDirection":"vertical","data":{"name":"SplitViewer"},"paddingTop":0,"backgroundColorRatios":[]},{"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressRight":0,"id":"MainViewer","toolTipShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesFontWeight":"normal","progressOpacity":1,"toolTipFontWeight":"normal","width":"100%","subtitlesPaddingLeft":5,"playbackBarHeadBorderRadius":0,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowHorizontalLength":1,"subtitlesPaddingRight":5,"borderSize":0,"subtitlesBottom":50,"playbackBarHeadOpacity":1,"playbackBarHeadShadowVerticalLength":0,"progressBackgroundColorRatios":[0],"progressBorderRadius":0,"subtitlesTop":0,"playbackBarHeadShadow":true,"playbackBarProgressOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","toolTipBorderRadius":3,"class":"ViewerArea","height":"100%","surfaceReticleColor":"#FFFFFF","subtitlesFontSize":"3vmin","firstTransitionDuration":0,"progressLeft":0,"playbackBarBorderSize":0,"toolTipPaddingBottom":4,"surfaceReticleOpacity":0.6,"playbackBarOpacity":1,"shadow":false,"progressBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowHorizontalLength":0,"subtitlesBackgroundOpacity":0.2,"subtitlesEnabled":true,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"displayTooltipInTouchScreens":true,"progressBarBorderColor":"#000000","toolTipDisplayTime":600,"playbackBarBottom":5,"paddingTop":0,"paddingBottom":0,"playbackBarBackgroundOpacity":1,"progressBarBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"toolTipShadowColor":"#333333","toolTipShadowBlurRadius":3,"toolTipTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","transitionMode":"blending","toolTipFontColor":"#606060","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeight":10,"progressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"paddingLeft":0,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","subtitlesTextDecoration":"none","toolTipBorderSize":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"paddingRight":0,"transitionDuration":500,"subtitlesTextShadowBlurRadius":0,"toolTipFontSize":"1.11vmin","displayTooltipInSurfaceSelection":true,"toolTipPaddingTop":4,"playbackBarBackgroundColorDirection":"vertical","progressBorderColor":"#000000","toolTipShadowSpread":0,"progressBarBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","playbackBarRight":0,"toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesShadow":false,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"toolTipOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionColor":"#FF6600","vrPointerColor":"#FFFFFF","minHeight":50,"vrPointerSelectionTime":2000,"subtitlesOpacity":1,"progressBarOpacity":1,"minWidth":100,"progressBottom":0,"borderRadius":0,"toolTipShadowVerticalLength":0,"subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","progressHeight":10,"doubleClickAction":"toggle_fullscreen","subtitlesHorizontalAlign":"center","progressBorderSize":0,"subtitlesVerticalAlign":"bottom","playbackBarLeft":0,"toolTipFontStyle":"normal","progressBarBorderRadius":0,"toolTipPaddingRight":6,"data":{"name":"Main Viewer"},"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"subtitlesBorderSize":0,"propagateClick":false,"toolTipFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6"},{"playbackBarHeadHeight":15,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressRight":0,"id":"ViewerAreaLabeled_7C327E4D_7308_C4C1_41B2_05370C5F2FB9","left":0,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderColor":"#FFFFFF","toolTipShadowOpacity":1,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesFontWeight":"normal","progressOpacity":1,"progressBarBorderSize":0,"toolTipFontWeight":"normal","width":"100%","subtitlesPaddingLeft":5,"playbackBarHeadBorderRadius":0,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowHorizontalLength":1,"subtitlesPaddingRight":5,"borderSize":0,"subtitlesBottom":50,"playbackBarHeadOpacity":1,"playbackBarHeadShadowVerticalLength":0,"progressBackgroundColorRatios":[0],"progressBorderRadius":0,"subtitlesTop":0,"playbackBarHeadShadow":true,"playbackBarProgressOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","toolTipBorderRadius":3,"class":"ViewerArea","height":"100%","surfaceReticleColor":"#FFFFFF","subtitlesFontSize":"3vmin","firstTransitionDuration":0,"progressLeft":0,"playbackBarBorderSize":0,"toolTipPaddingBottom":4,"surfaceReticleOpacity":0.6,"playbackBarOpacity":1,"shadow":false,"progressBarBackgroundColorDirection":"vertical","toolTipShadowHorizontalLength":0,"subtitlesBackgroundOpacity":0.2,"subtitlesEnabled":true,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"displayTooltipInTouchScreens":true,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","toolTipDisplayTime":600,"playbackBarBottom":5,"paddingTop":0,"paddingBottom":0,"playbackBarBackgroundOpacity":1,"progressBarBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"toolTipShadowColor":"#333333","toolTipHorizontalAlign":"center","toolTipTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","transitionMode":"blending","toolTipFontColor":"#606060","playbackBarHeadShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"toolTipTextShadowBlurRadius":3,"playbackBarHeight":10,"progressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"paddingLeft":0,"playbackBarHeadBackgroundColorDirection":"vertical","show":"this.setPanoramaCameraWithSpot(this.playList_7C34682E_765D_F91E_41A4_718341DF1FAB, this.PanoramaPlayListItem_7C2CC8D7_765D_F90E_41B8_5A76B5174502, -138.9705882352939, 32.21393034825868, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.ViewerAreaLabeled_7C327E4D_7308_C4C1_41B2_05370C5F2FB9.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_7C34682E_765D_F91E_41A4_718341DF1FAB.set('selectedIndex', -1); }, this); this.playList_7C34682E_765D_F91E_41A4_718341DF1FAB.set('selectedIndex', 0)","subtitlesTextDecoration":"none","toolTipBorderSize":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"paddingRight":0,"transitionDuration":500,"subtitlesTextShadowBlurRadius":0,"toolTipFontSize":"1.11vmin","displayTooltipInSurfaceSelection":true,"toolTipPaddingTop":4,"playbackBarBackgroundColorDirection":"vertical","progressBorderColor":"#000000","toolTipShadowSpread":0,"progressBarBackgroundColor":["#3399FF"],"top":0,"toolTipBorderColor":"#767676","playbackBarRight":0,"toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesShadow":false,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"toolTipOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionColor":"#FF6600","vrPointerColor":"#FFFFFF","minHeight":50,"vrPointerSelectionTime":2000,"subtitlesOpacity":1,"progressBarOpacity":1,"minWidth":100,"progressBottom":0,"borderRadius":0,"toolTipShadowVerticalLength":0,"subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","progressHeight":10,"doubleClickAction":"toggle_fullscreen","subtitlesHorizontalAlign":"center","progressBorderSize":0,"subtitlesVerticalAlign":"bottom","playbackBarLeft":0,"toolTipFontFamily":"Arial","progressBarBorderRadius":0,"toolTipPaddingRight":6,"data":{"name":"LeftViewer"},"toolTipFontStyle":"normal","playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"subtitlesBorderSize":0,"propagateClick":false,"toolTipBackgroundColor":"#F6F6F6"},{"hfovMin":"150%","vfov":180,"label":trans('panorama_792DE64D_7309_44C6_41DC_333E787734EC.label'),"id":"panorama_792DE64D_7309_44C6_41DC_333E787734EC","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_792DE64D_7309_44C6_41DC_333E787734EC_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_792DE64D_7309_44C6_41DC_333E787734EC_0/{face}/0/{row}_{column}.jpg","colCount":24,"tags":"ondemand","height":2048,"width":12288,"rowCount":4,"class":"TiledImageResourceLevel"},{"url":"media/panorama_792DE64D_7309_44C6_41DC_333E787734EC_0/{face}/1/{row}_{column}.jpg","colCount":12,"tags":"ondemand","height":1024,"width":6144,"rowCount":2,"class":"TiledImageResourceLevel"},{"url":"media/panorama_792DE64D_7309_44C6_41DC_333E787734EC_0/{face}/2/{row}_{column}.jpg","colCount":6,"tags":["ondemand","preload"],"height":512,"width":3072,"rowCount":1,"class":"TiledImageResourceLevel"},{"url":"media/panorama_792DE64D_7309_44C6_41DC_333E787734EC_0/{face}/vr/0.jpg","colCount":6,"tags":"mobilevr","height":1536,"width":9216,"rowCount":1,"class":"TiledImageResourceLevel"}]}}],"partial":false,"overlays":["this.panorama_9EC2BD4C_BF54_DCEC_41C4_AA538ED08C08_tcap0"],"thumbnailUrl":"media/panorama_792DE64D_7309_44C6_41DC_333E787734EC_t.jpg","pitch":0,"hfovMax":130,"data":{"label":"LYLH0258"},"hfov":360},{"manualRotationSpeed":632,"initialPosition":{"yaw":167.7,"class":"PanoramaCameraPosition","pitch":-6.09},"initialSequence":"this.sequence_7A870BEB_7309_43C2_41D3_27643300F34C","id":"panorama_7A77270F_7309_4442_41CA_5017C3046C80_camera","automaticZoomSpeed":10,"class":"PanoramaCamera"},{"scrollBarMargin":2,"paddingBottom":10,"id":"HTMLText_7C04EE5A_7308_C4C3_41D8_B60D01E5731F","width":100,"paddingLeft":10,"toolTipHorizontalAlign":"center","right":20,"backgroundOpacity":0.6,"paddingRight":10,"scrollBarWidth":10,"propagateClick":false,"borderSize":0,"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"top":20,"init":"eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);');","height":70,"backgroundColor":["#FFFFFF"],"class":"HTMLText","minHeight":0,"scrollBarColor":"#000000","minWidth":0,"borderRadius":0,"shadow":false,"html":trans('HTMLText_7C04EE5A_7308_C4C3_41D8_B60D01E5731F.html'),"backgroundColorDirection":"vertical","data":{"name":"RightDescription"},"paddingTop":10,"backgroundColorRatios":[0]},{"toolTipHorizontalAlign":"center","scrollBarMargin":2,"paddingBottom":0,"id":"Container_7C070E5D_7308_C4C1_41B5_BCB0670019D6","left":"47%","children":["this.Container_7C074E5E_7308_C4C3_41D7_EEBE6AB17364"],"overflow":"scroll","paddingLeft":0,"propagateClick":false,"backgroundOpacity":0.3,"gap":10,"verticalAlign":"top","paddingRight":0,"scrollBarWidth":10,"horizontalAlign":"left","borderSize":0,"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"top":0,"backgroundColor":[],"layout":"absolute","bottom":0,"class":"Container","minHeight":20,"scrollBarColor":"#000000","minWidth":20,"borderRadius":0,"shadow":false,"width":"6%","contentOpaque":true,"backgroundColorDirection":"vertical","data":{"name":"Separator"},"paddingTop":0,"backgroundColorRatios":[],"cursor":"hand"},{"surfaceSelectionEnabled":false,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"surfaceSelectionEnabled":false,"zoomEnabled":true,"id":"ViewerAreaLabeled_7C327E4D_7308_C4C1_41B2_05370C5F2FB9PanoramaPlayer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","viewerArea":"this.ViewerAreaLabeled_7C327E4D_7308_C4C1_41B2_05370C5F2FB9","displayPlaybackBar":true,"touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"items":["this.PanoramaPlayListItem_7C2C38D8_765D_F902_41DC_E13C5B5F0AD7"],"id":"playList_7C35982E_765D_F91E_41D1_C92C2DE01F56","class":"PlayList"},{"toolTipHorizontalAlign":"center","scrollBarMargin":2,"paddingBottom":10,"id":"HTMLText_7C351E4F_7308_C4C1_417F_2F057277954C","left":20,"width":100,"paddingLeft":10,"propagateClick":false,"backgroundOpacity":0.6,"paddingRight":10,"scrollBarWidth":10,"borderSize":0,"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"top":20,"init":"eval('event.source.set(\\'width\\', undefined);event.source.set(\\'height\\', undefined);');","height":70,"backgroundColor":["#FFFFFF"],"class":"HTMLText","minHeight":0,"scrollBarColor":"#000000","minWidth":0,"borderRadius":0,"shadow":false,"html":trans('HTMLText_7C351E4F_7308_C4C1_417F_2F057277954C.html'),"backgroundColorDirection":"vertical","data":{"name":"LeftDescription"},"paddingTop":10,"backgroundColorRatios":[0]},{"surfaceSelectionEnabled":false,"zoomEnabled":true,"id":"ViewerAreaLabeled_7C32FE4E_7308_C4C3_41D8_238973C19BA7PanoramaPlayer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","viewerArea":"this.ViewerAreaLabeled_7C32FE4E_7308_C4C3_41D8_238973C19BA7","displayPlaybackBar":true,"touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"initialPosition":{"yaw":-138.97,"class":"PanoramaCameraPosition","pitch":32.21},"initialSequence":"this.sequence_7A809BE9_7309_43CE_41D8_DD4EF836E488","id":"panorama_792DE64D_7309_44C6_41DC_333E787734EC_camera","automaticZoomSpeed":10,"class":"PanoramaCamera"},{"items":[{"media":"this.panorama_792DE64D_7309_44C6_41DC_333E787734EC","camera":"this.panorama_792DE64D_7309_44C6_41DC_333E787734EC_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"media":"this.panorama_7A77270F_7309_4442_41CA_5017C3046C80","end":"this.trigger('tourEnded')","camera":"this.panorama_7A77270F_7309_4442_41CA_5017C3046C80_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"toolTipHorizontalAlign":"center","scrollBarMargin":2,"paddingBottom":0,"id":"Container_7C26FE4A_7308_C4C3_419A_B045D7879532","left":0,"children":["this.ViewerAreaLabeled_7C327E4D_7308_C4C1_41B2_05370C5F2FB9","this.HTMLText_7C351E4F_7308_C4C1_417F_2F057277954C"],"overflow":"hidden","paddingLeft":0,"propagateClick":false,"backgroundOpacity":0.3,"gap":10,"verticalAlign":"top","paddingRight":0,"scrollBarWidth":10,"horizontalAlign":"left","borderSize":0,"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"top":0,"backgroundColor":[],"layout":"absolute","bottom":0,"class":"Container","minHeight":20,"scrollBarColor":"#000000","minWidth":20,"borderRadius":0,"shadow":false,"width":"50%","contentOpaque":false,"backgroundColorDirection":"vertical","data":{"name":"LeftContainer"},"paddingTop":0,"backgroundColorRatios":[]},{"hfovMin":"150%","vfov":180,"label":trans('panorama_7A77270F_7309_4442_41CA_5017C3046C80.label'),"id":"panorama_7A77270F_7309_4442_41CA_5017C3046C80","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_7A77270F_7309_4442_41CA_5017C3046C80_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_7A77270F_7309_4442_41CA_5017C3046C80_0/{face}/0/{row}_{column}.jpg","colCount":24,"tags":"ondemand","height":2048,"width":12288,"rowCount":4,"class":"TiledImageResourceLevel"},{"url":"media/panorama_7A77270F_7309_4442_41CA_5017C3046C80_0/{face}/1/{row}_{column}.jpg","colCount":12,"tags":"ondemand","height":1024,"width":6144,"rowCount":2,"class":"TiledImageResourceLevel"},{"url":"media/panorama_7A77270F_7309_4442_41CA_5017C3046C80_0/{face}/2/{row}_{column}.jpg","colCount":6,"tags":["ondemand","preload"],"height":512,"width":3072,"rowCount":1,"class":"TiledImageResourceLevel"},{"url":"media/panorama_7A77270F_7309_4442_41CA_5017C3046C80_0/{face}/vr/0.jpg","colCount":6,"tags":"mobilevr","height":1536,"width":9216,"rowCount":1,"class":"TiledImageResourceLevel"}]}}],"partial":false,"overlays":["this.panorama_9EC2BD4C_BF54_DCEC_41C4_AA538ED08C08_tcap0"],"thumbnailUrl":"media/panorama_7A77270F_7309_4442_41CA_5017C3046C80_t.jpg","pitch":0,"hfovMax":130,"data":{"label":"RVXB3999"},"hfov":360},{"scrollBarMargin":2,"paddingBottom":0,"id":"Container_7C33CE4B_7308_C4C1_41B6_06646B663A63","children":["this.ViewerAreaLabeled_7C32FE4E_7308_C4C3_41D8_238973C19BA7","this.HTMLText_7C04EE5A_7308_C4C3_41D8_B60D01E5731F"],"overflow":"hidden","paddingLeft":0,"toolTipHorizontalAlign":"center","right":0,"backgroundOpacity":0.3,"gap":10,"verticalAlign":"top","paddingRight":0,"scrollBarWidth":10,"horizontalAlign":"left","propagateClick":false,"borderSize":0,"scrollBarVisible":"rollOver","scrollBarOpacity":0.5,"top":0,"backgroundColor":[],"layout":"absolute","bottom":0,"class":"Container","minHeight":20,"scrollBarColor":"#000000","minWidth":20,"borderRadius":0,"shadow":false,"width":"50%","contentOpaque":false,"backgroundColorDirection":"vertical","data":{"name":"RightContainer"},"paddingTop":0,"backgroundColorRatios":[]},{"toolTipHorizontalAlign":"center","paddingBottom":0,"id":"Container_7C074E5E_7308_C4C3_41D7_EEBE6AB17364","left":"46%","scrollBarMargin":2,"width":"8%","overflow":"scroll","paddingLeft":0,"shadowColor":"#000000","backgroundOpacity":1,"gap":10,"verticalAlign":"top","paddingRight":0,"shadowOpacity":0.3,"shadowBlurRadius":10,"horizontalAlign":"left","scrollBarWidth":10,"borderSize":0,"scrollBarVisible":"rollOver","shadowHorizontalLength":0,"scrollBarOpacity":0.5,"top":0,"backgroundColor":["#FFFFFF"],"maxWidth":6,"bottom":0,"shadowVerticalLength":0,"layout":"absolute","class":"Container","minHeight":20,"scrollBarColor":"#000000","minWidth":2,"borderRadius":0,"shadow":true,"contentOpaque":false,"backgroundColorDirection":"vertical","data":{"name":"SeparatorVisible"},"shadowSpread":1,"backgroundColorRatios":[0],"paddingTop":0,"cursor":"hand","propagateClick":true},{"items":["this.PanoramaPlayListItem_7C2CC8D7_765D_F90E_41B8_5A76B5174502"],"id":"playList_7C34682E_765D_F91E_41A4_718341DF1FAB","class":"PlayList"},{"rotate":false,"inertia":false,"angle":0,"id":"panorama_9EC2BD4C_BF54_DCEC_41C4_AA538ED08C08_tcap0","class":"TripodCapPanoramaOverlay","distance":50,"image":"this.res_7CFBF6C5_7309_45C6_41B5_1CF77822328F","useHandCursor":false,"hfov":45},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_7A870BEB_7309_43C2_41D3_27643300F34C","class":"PanoramaCameraSequence"},{"media":"this.panorama_7A77270F_7309_4442_41CA_5017C3046C80","player":"this.ViewerAreaLabeled_7C32FE4E_7308_C4C3_41D8_238973C19BA7PanoramaPlayer","id":"PanoramaPlayListItem_7C2C38D8_765D_F902_41DC_E13C5B5F0AD7","class":"PanoramaPlayListItem","camera":"this.panorama_7A77270F_7309_4442_41CA_5017C3046C80_camera"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"id":"sequence_7A809BE9_7309_43CE_41D8_DD4EF836E488","class":"PanoramaCameraSequence"},{"media":"this.panorama_792DE64D_7309_44C6_41DC_333E787734EC","player":"this.ViewerAreaLabeled_7C327E4D_7308_C4C1_41B2_05370C5F2FB9PanoramaPlayer","id":"PanoramaPlayListItem_7C2CC8D7_765D_F90E_41B8_5A76B5174502","class":"PanoramaPlayListItem","camera":"this.panorama_792DE64D_7309_44C6_41DC_333E787734EC_camera"},{"id":"res_7CFBF6C5_7309_45C6_41B5_1CF77822328F","class":"ImageResource","levels":[{"url":"media/res_7CFBF6C5_7309_45C6_41B5_1CF77822328F_0.png","width":842,"class":"ImageResourceLevel","height":842}]}],"backgroundColorDirection":"vertical","scripts":{"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"mixObject":TDV.Tour.Script.mixObject,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"clone":TDV.Tour.Script.clone,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setValue":TDV.Tour.Script.setValue,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getComponentByName":TDV.Tour.Script.getComponentByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPixels":TDV.Tour.Script.getPixels,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"init":TDV.Tour.Script.init,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"setLocale":TDV.Tour.Script.setLocale,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getKey":TDV.Tour.Script.getKey,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"openLink":TDV.Tour.Script.openLink,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"historyGoForward":TDV.Tour.Script.historyGoForward,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizFinish":TDV.Tour.Script.quizFinish,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playAudioList":TDV.Tour.Script.playAudioList,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showWindow":TDV.Tour.Script.showWindow,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"existsKey":TDV.Tour.Script.existsKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"isPanorama":TDV.Tour.Script.isPanorama,"registerKey":TDV.Tour.Script.registerKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupImage":TDV.Tour.Script.showPopupImage,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumePlayers":TDV.Tour.Script.resumePlayers,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupMedia":TDV.Tour.Script.showPopupMedia},"data":{"name":"Player541","textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"rate":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"}},"backgroundColorRatios":[0],"backgroundPreloadEnabled":true,"desktopMipmappingEnabled":false,"mouseWheelEnabled":true,"paddingTop":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.9.js.map
//Generated with v2021.0.9, Sun May 16 2021