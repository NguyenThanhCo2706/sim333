(function() {
    "use strict";
    var t = {
            4644: function(t, s, e) {
                var i = e(144),
                    r = e(2970),
                    n = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", {
                            class: "c-" + t.colourScheme,
                            attrs: {
                                id: "app"
                            }
                        }, [s("b-navbar", {
                            attrs: {
                                toggleable: "lg",
                                type: "light",
                                variant: "light",
                                sticky: ""
                            }
                        }, [s("b-navbar-brand", [s("a", {
                            attrs: {
                                href: t.links[0].href,
                                target: "_blank"
                            }
                        }, [s("img", {
                            attrs: {
                                src: t.logoURL,
                                id: "logo"
                            }
                        })]), t._v(" " + t._s(t.appTitle) + " ")]), s("b-navbar-toggle", {
                            attrs: {
                                target: "nav_collapse"
                            }
                        }), s("b-collapse", {
                            attrs: {
                                "is-nav": "",
                                id: "nav_collapse"
                            }
                        }, [s("b-navbar-nav", {
                            staticClass: "ml-auto"
                        }, [t._l(t.topNavLinks, (function(e) {
                            return s("b-nav-item", {
                                key: e.href,
                                attrs: {
                                    href: e.href,
                                    target: "_blank"
                                }
                            }, [t._v(t._s(e.title) + " "), s("img", {
                                attrs: {
                                    src: "extLink.svg"
                                }
                            })])
                        })), t.showManual ? t._e() : s("b-nav-item", {
                            on: {
                                click: function(s) {
                                    t.showManual = !t.showManual
                                }
                            }
                        }, [t._v(t._s(t.strings["showMan"]))]), t.showManual ? s("b-nav-item", {
                            on: {
                                click: function(s) {
                                    t.showManual = !t.showManual
                                }
                            }
                        }, [t._v(t._s(t.strings["hideMan"]))]) : t._e(), s("b-nav-item-dropdown", {
                            attrs: {
                                text: t.strings["colSwitch"],
                                right: ""
                            }
                        }, [s("b-dropdown-item", {
                            attrs: {
                                active: "def" == t.colourScheme
                            },
                            on: {
                                click: function(s) {
                                    t.colourScheme = "def"
                                }
                            }
                        }, [t._v(t._s(t.strings["colour-NV"]))]), s("b-dropdown-item", {
                            attrs: {
                                active: "alt1" == t.colourScheme
                            },
                            on: {
                                click: function(s) {
                                    t.colourScheme = "alt1"
                                }
                            }
                        }, [t._v(t._s(t.strings["colour-Deuteranomaly"]))]), s("b-dropdown-item", {
                            attrs: {
                                active: "alt2" == t.colourScheme
                            },
                            on: {
                                click: function(s) {
                                    t.colourScheme = "alt2"
                                }
                            }
                        }, [t._v(t._s(t.strings["colour-Protanomaly"]))]), s("b-dropdown-item", {
                            attrs: {
                                active: "alt3" == t.colourScheme
                            },
                            on: {
                                click: function(s) {
                                    t.colourScheme = "alt3"
                                }
                            }
                        }, [t._v(t._s(t.strings["colour-Protanopia"]))]), s("b-dropdown-item", {
                            attrs: {
                                active: "alt4" == t.colourScheme
                            },
                            on: {
                                click: function(s) {
                                    t.colourScheme = "alt4"
                                }
                            }
                        }, [t._v(t._s(t.strings["colour-Deuteranopia"]))]), s("b-dropdown-item", {
                            attrs: {
                                active: "alt5" == t.colourScheme
                            },
                            on: {
                                click: function(s) {
                                    t.colourScheme = "alt5"
                                }
                            }
                        }, [t._v(t._s(t.strings["colour-Tritanopia"]))]), s("b-dropdown-item", {
                            attrs: {
                                active: "alt6" == t.colourScheme
                            },
                            on: {
                                click: function(s) {
                                    t.colourScheme = "alt6"
                                }
                            }
                        }, [t._v(t._s(t.strings["colour-Tritanomaly"]))]), s("b-dropdown-item", {
                            attrs: {
                                active: "alt7" == t.colourScheme
                            },
                            on: {
                                click: function(s) {
                                    t.colourScheme = "alt7"
                                }
                            }
                        }, [t._v(t._s(t.strings["colour-Achromatopsia"]))])], 1), t.languages.length > 1 ? s("b-nav-item-dropdown", {
                            attrs: {
                                text: "Language Selection",
                                right: ""
                            }
                        }, t._l(t.languages, (function(e) {
                            return s("b-dropdown-item", {
                                key: e.abbr,
                                attrs: {
                                    active: t.selLanguage == e.abbr
                                },
                                on: {
                                    click: function(s) {
                                        return t.changeLanguage(e.abbr)
                                    }
                                }
                            }, [t._v(t._s(e.name))])
                        })), 1) : t._e()], 2)], 1)], 1), s("b-container", {
                            attrs: {
                                fluid: ""
                            }
                        }, [s("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.showManual,
                                expression: "showManual"
                            }],
                            staticStyle: {
                                width: "100%"
                            }
                        }, [s("manual", {
                            attrs: {
                                sections: t.sections,
                                manual: t.manual
                            }
                        })], 1), s("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.showManual,
                                expression: "!showManual"
                            }]
                        }, [s("b-row", [0 === t.tabIndex ? s("b-col", {
                            attrs: {
                                md: "6"
                            }
                        }, [s("questions", {
                            ref: "questions",
                            attrs: {
                                sections: t.sections,
                                strings: t.questionsStrings
                            },
                            on: {
                                updateQuestion: t.updateQuestion
                            }
                        })], 1) : t._e(), s("b-col", {
                            class: {
                                sidebar: 0 === t.tabIndex
                            },
                            staticStyle: {
                                "margin-top": "15px"
                            }
                        }, [s("b-row", {
                            attrs: {
                                cols: 0 === t.tabIndex ? 1 : 2
                            }
                        }, [s("b-col", [t.urlError ? t._e() : s("div", [s("h3", {
                            staticStyle: {
                                display: "inline"
                            }
                        }, [t._v(t._s(t.strings["yourURLtitle"]))]), t.url ? s("b-button", {
                            staticClass: "mr-1",
                            staticStyle: {
                                float: "right"
                            },
                            attrs: {
                                variant: "primary"
                            },
                            on: {
                                click: function(s) {
                                    return t.copyURLToClipboard()
                                }
                            }
                        }, [t._v(t._s(t.strings["copyButton"]))]) : t._e()], 1), t.url ? s("div", [t.urlError ? t._e() : s("span", {
                            staticClass: "noprint"
                        }, [t._v(t._s(t.strings["bookmarkAdvice"])), s("br")]), t.urlError ? s("p", {
                            staticStyle: {
                                color: "red"
                            }
                        }, [t._v(t._s(t.strings["wrongURL"]))]) : t._e(), t.urlError ? t._e() : s("a", {
                            staticStyle: {
                                "vertical-align": "-moz-middle-with-baseline"
                            },
                            attrs: {
                                href: t.url,
                                id: "urlCopySection"
                            }
                        }, [t._v(t._s(t.url))])]) : t._e(), t.url ? t._e() : s("p", [t._v(t._s(t.strings["noLink"]))])]), s("b-col", [s("b-row", {
                            staticClass: "noprint"
                        }, [s("b-col", [s("div", [t._v(t._s(t.strings["profileChoice"]))])])], 1), s("b-row", {
                            staticClass: "noprint"
                        }, [s("b-col", [s("b-button-toolbar", [s("b-button-group", [t.features.showMembership ? s("b-button", {
                            staticClass: "mr-1",
                            attrs: {
                                variant: 0 === t.targetLevel ? "primary" : ""
                            },
                            on: {
                                click: function(s) {
                                    t.targetLevel = 0, t.calcOpenTasks()
                                }
                            }
                        }, [t._v(t._s(t.strings["statMembBase"]))]) : t._e(), s("b-button", {
                            staticClass: "mr-1",
                            attrs: {
                                variant: 1 === t.targetLevel ? "primary" : ""
                            },
                            on: {
                                click: function(s) {
                                    t.targetLevel = 1, t.calcOpenTasks()
                                }
                            }
                        }, [t._v(t._s(t.strings["statBasic"]))]), s("b-button", {
                            staticClass: "mr-1",
                            attrs: {
                                variant: 2 === t.targetLevel ? "primary" : ""
                            },
                            on: {
                                click: function(s) {
                                    t.targetLevel = 2, t.calcOpenTasks()
                                }
                            }
                        }, [t._v(t._s(t.strings["statInter"]))]), s("b-button", {
                            staticClass: "mr-1",
                            attrs: {
                                variant: 3 === t.targetLevel ? "primary" : ""
                            },
                            on: {
                                click: function(s) {
                                    t.targetLevel = 3, t.calcOpenTasks()
                                }
                            }
                        }, [t._v(t._s(t.strings["statAdvan"]))]), s("b-button", {
                            staticClass: "mr-1",
                            attrs: {
                                variant: 4 === t.targetLevel ? "primary" : ""
                            },
                            on: {
                                click: function(s) {
                                    t.targetLevel = 4, t.calcOpenTasks()
                                }
                            }
                        }, [t._v(t._s(t.strings["statTICert"]))])], 1)], 1)], 1)], 1)], 1)], 1), t.tabIndex > 0 && 3 != t.tabIndex ? s("b-row", [s("b-col", [s("hr"), s("p", [s("b", [t._v(t._s(t.strings["currStat"]) + ": ")]), t._v(" "), s("u", [t._v(t._s(t.reachedProfileDescription))]), t._v(" " + t._s(t.strings["reached"]) + " "), s("u", [t._v(t._s(t.strings["statTICert"]))]), t._v(" " + t._s(t.tiPossibleDescription) + ". ")]), t.openActions > 0 ? s("p", [t._v(t._s(t.strings["descOpenActions"]) + " " + t._s(t.openActions) + " " + t._s(t.strings["descOpenActions2"]) + ". ")]) : t._e()])], 1) : t._e(), s("b-row", [s("b-col", [s("b-tabs", {
                            staticStyle: {
                                "margin-top": "15px"
                            },
                            attrs: {
                                card: ""
                            },
                            model: {
                                value: t.tabIndex,
                                callback: function(s) {
                                    t.tabIndex = s
                                },
                                expression: "tabIndex"
                            }
                        }, [t.features.radar ? s("b-tab", {
                            attrs: {
                                title: t.strings["menuToggleSpiderChart"]
                            }
                        }, [s("p", {
                            staticClass: "noprint help"
                        }, [t._v(t._s(t.strings["descRadarPie"]))]), s("div", {
                            attrs: {
                                id: "radarChartExport"
                            }
                        }, [s("radar-pie", {
                            attrs: {
                                sections: t.sections,
                                targetLevel: t.targetLevel,
                                targetLevels: t.targetLevels,
                                visible: 0 === t.tabIndex,
                                powered: t.features.radarPowered
                            },
                            on: {
                                questionClick: t.questionClicked,
                                sectionClick: t.sectionClicked
                            }
                        })], 1)]) : t._e(), t.features.resultTable ? s("b-tab", {
                            attrs: {
                                title: t.strings["menuResultTable"]
                            }
                        }, [s("result-table", {
                            attrs: {
                                sections: t.sections,
                                targetLevel: t.targetLevel,
                                targetLevels: t.targetLevels,
                                strings: t.resultTableStrings,
                                enableExport: t.features.resultTableExport
                            }
                        })], 1) : t._e(), t.openActionsEnabled ? s("b-tab", {
                            attrs: {
                                title: t.titleOpenActions
                            }
                        }, [s("open-actions", {
                            attrs: {
                                sections: t.sections,
                                targetLevel: t.targetLevel,
                                pref: t.taskIdentifierPref,
                                suff: t.taskIdentifierSuff,
                                defTaskDesc: t.defaultTaskDescription,
                                openActions: t.openActions,
                                reachedProfileDescription: t.reachedProfileDescription,
                                reachedLevels: t.reachedLevels,
                                strings: t.openActionsStrings,
                                enableExport: t.features.openActionsExport
                            },
                            on: {
                                questionClick: t.questionClicked,
                                updateQuestion: t.updateQuestion
                            }
                        })], 1) : t._e(), t.comparisonEnabled ? s("b-tab", {
                            attrs: {
                                title: t.strings["menuComparison"]
                            }
                        }, [s("comparison", {
                            attrs: {
                                sections: t.sections,
                                url: t.url,
                                targetLevel: t.targetLevel,
                                targetLevels: t.targetLevels,
                                strings: t.comparisonStrings,
                                statusCompRadioButton: t.statusCompRadioButton
                            }
                        })], 1) : t._e()], 1)], 1)], 1)], 1)], 1)], 1), s("b-row", {
                            staticStyle: {
                                "background-color": "#f8f9fa",
                                "margin-left": "0px",
                                "padding-top": "0.5em"
                            },
                            attrs: {
                                variant: "light"
                            }
                        }, [s("div", [s("div", {
                            staticStyle: {
                                display: "inline"
                            }
                        }, [s("b", [t._v(t._s(t.strings["version"]) + ": " + t._s(t.version) + " / " + t._s(t.jsonMeta.version) + " (" + t._s(t.jsonMeta.language) + ") ")])]), t._l(t.footerURL, (function(e) {
                            return s("div", {
                                key: e.href,
                                staticStyle: {
                                    display: "inline"
                                }
                            }, [e.href.length > 0 ? s("p", {
                                staticStyle: {
                                    display: "inline"
                                }
                            }, [s("b", [t._v(" | "), s("a", {
                                attrs: {
                                    href: e.href,
                                    target: "_blank"
                                }
                            }, [t._v(t._s(e.title))])])]) : t._e()])
                        }))], 2)])], 1)], 1)
                    },
                    a = [],
                    o = (e(7658), e(8433)),
                    l = e(8206),
                    c = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", [s("b-card", {
                            staticClass: "questionnaire",
                            attrs: {
                                "no-body": ""
                            }
                        }, [s("b-tabs", {
                            attrs: {
                                card: ""
                            },
                            model: {
                                value: t.tabIndex,
                                callback: function(s) {
                                    t.tabIndex = s
                                },
                                expression: "tabIndex"
                            }
                        }, t._l(t.sections, (function(e) {
                            return s("b-tab", {
                                key: e.key,
                                attrs: {
                                    "no-body": "",
                                    title: e.label
                                }
                            }, [s("b-card-body", [s("h2", {
                                staticClass: "print"
                            }, [t._v(t._s(e.label))]), e.intro_html ? s("div", {
                                staticClass: "card-text",
                                domProps: {
                                    innerHTML: t._s(e.intro_html)
                                }
                            }) : t._e(), s("p", {
                                staticClass: "section-tools noprint"
                            }, [s("a", {
                                attrs: {
                                    href: "#"
                                },
                                on: {
                                    click: function(s) {
                                        return t.toggleCollapse(!1)
                                    }
                                }
                            }, [t._v(t._s(t.strings["expand"]))]), t._v(" / "), s("a", {
                                attrs: {
                                    href: "#"
                                },
                                on: {
                                    click: function(s) {
                                        return t.toggleCollapse(!0)
                                    }
                                }
                            }, [t._v(t._s(t.strings["collapse"]))])])]), s("b-list-group", {
                                attrs: {
                                    flush: ""
                                }
                            }, t._l(e.questions, (function(e) {
                                return s("b-list-group-item", {
                                    key: e.id,
                                    staticClass: "question",
                                    attrs: {
                                        id: "question-" + e.id,
                                        tabindex: "0"
                                    }
                                }, [s("div", {
                                    directives: [{
                                        name: "b-toggle",
                                        rawName: "v-b-toggle",
                                        value: e.id,
                                        expression: "question.id"
                                    }],
                                    staticClass: "section-label"
                                }, [t._v(t._s(e.id) + ": " + t._s(e.label))]), s("b-collapse", {
                                    attrs: {
                                        visible: !1 !== t.visible[e.id],
                                        id: e.id
                                    }
                                }, [e.description ? s("div", {
                                    staticClass: "card-text",
                                    domProps: {
                                        innerHTML: t._s(e.description)
                                    }
                                }) : t._e(), e.minimum ? s("div", {
                                    staticClass: "card-text",
                                    staticStyle: {
                                        "margin-top": "2 px",
                                        "margin-bottom": "3px"
                                    },
                                    attrs: {
                                        display: "inline"
                                    }
                                }, [s("b", [t._v(t._s(t.strings["requirement"]) + ": ")]), t._v(" "), s("span", {
                                    attrs: {
                                        display: "inline"
                                    },
                                    domProps: {
                                        innerHTML: t._s(e.minimum)
                                    }
                                })]) : t._e(), s("answer", {
                                    attrs: {
                                        question: e
                                    },
                                    on: {
                                        input: function(s) {
                                            return t.updateAnswer(e.id, s)
                                        }
                                    }
                                })], 1)], 1)
                            })), 1)], 1)
                        })), 1)], 1)], 1)
                    },
                    u = [],
                    h = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", {
                            staticClass: "answer-opts",
                            attrs: {
                                tabindex: "0"
                            },
                            on: {
                                focus: t.onFocusQuestion,
                                blur: t.onBlurQuestion
                            }
                        }, t._l(t.question.options, (function(e) {
                            return s("div", {
                                key: e[0],
                                ref: "options",
                                refInFor: !0,
                                staticClass: "opt",
                                class: {
                                    selected: t.question.value == e[0]
                                },
                                on: {
                                    click: function(s) {
                                        return t.chooseAnswer(e[0])
                                    }
                                }
                            }, [-1 === e[0] ? s("span", [s("span", {
                                attrs: {
                                    title: "Not applicable"
                                }
                            }, [t._v("N/A")])]) : s("span", [t._v(t._s(e[0]))]), s("div", [t._v(t._s(e[1]))])])
                        })), 0)
                    },
                    d = [];

                function p(t, s) {
                    return (t % s + s) % s
                }

                function v(t) {
                    const s = 80;
                    let e = t.getBoundingClientRect();
                    e.top < s ? window.scrollBy(0, e.top - s) : e.bottom > window.innerHeight && window.scrollBy(0, e.bottom - window.innerHeight)
                }
                var g = {
                        name: "Answer",
                        props: ["question"],
                        methods: {
                            chooseAnswer(t) {
                                this.$emit("input", t)
                            },
                            onFocusQuestion() {
                                window.addEventListener("keydown", this.onKeyDown)
                            },
                            onBlurQuestion() {
                                window.removeEventListener("keydown", this.onKeyDown)
                            },
                            onKeyDown(t) {
                                let s;
                                switch (t.key) {
                                    case "ArrowDown":
                                        s = 1;
                                        break;
                                    case "ArrowUp":
                                        s = -1;
                                        break;
                                    default:
                                        return
                                }
                                t.stopPropagation(), t.preventDefault();
                                let e = p(this.question.idx + s, this.question.options.length);
                                this.$emit("input", this.question.options[e]), v(this.$refs.options[e])
                            }
                        }
                    },
                    f = g,
                    m = e(1001),
                    b = (0, m.Z)(f, h, d, !1, null, null, null),
                    _ = b.exports;

                function w() {
                    return {
                        visible: {},
                        tabIndex: 0
                    }
                }
                const L = {
                    updateAnswer(t, s) {
                        this.$emit("updateQuestion", t, parseInt(s, 10))
                    },
                    toggleCollapse(t) {
                        var s = this.sections[this.tabIndex];
                        for (var e of s.questions) this.$set(this.visible, e.id, !t)
                    },
                    activateTab(t) {
                        var s = this.sections.findIndex((s => s.key === t));
                        s >= 0 && (this.tabIndex = s), window.scroll(0, 0)
                    },
                    showQuestion(t) {
                        var s = t.split("-")[0],
                            e = this.sections.findIndex((t => t.key === s));
                        e >= 0 && (this.tabIndex = e), this.$set(this.visible, t, !0), this.$nextTick((function() {
                            var s = document.getElementById("question-" + t);
                            s.scrollIntoView(), window.scrollBy(0, -60)
                        }))
                    }
                };
                var x = {
                        name: "Questions",
                        props: ["sections", "strings"],
                        components: {
                            Answer: _
                        },
                        methods: L,
                        data: w
                    },
                    y = x,
                    k = (0, m.Z)(y, c, u, !1, null, null, null),
                    S = k.exports,
                    C = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", {
                            ref: "radarpie",
                            attrs: {
                                id: "radarpie"
                            }
                        }, [s("svg", {
                            attrs: {
                                preserveAspectRatio: "xMinYMin meet",
                                viewBox: "0 0 1000 1000"
                            }
                        }, [s("defs", [s("pattern", {
                            attrs: {
                                id: "pattern-stripe",
                                width: "8",
                                height: "8",
                                patternUnits: "userSpaceOnUse",
                                patternTransform: "rotate(45)"
                            }
                        }, [s("rect", {
                            attrs: {
                                width: "2",
                                height: "8",
                                transform: "translate(0,0)",
                                fill: "#aaa"
                            }
                        })])]), s("g", {
                            attrs: {
                                transform: "translate(500, 500)",
                                id: "graph"
                            }
                        })]), t.powered ? s("p", {
                            staticStyle: {
                                float: "right",
                                "padding-right": "35%"
                            }
                        }, [s("img", {
                            staticStyle: {
                                height: "20px",
                                width: "20px"
                            },
                            attrs: {
                                src: "logovncert.png"
                            }
                        }), t._v(" được cung cấp bởi VNCERT/CC")]) : t._e()])
                    },
                    q = [],
                    R = e(5818),
                    A = e(7847),
                    T = e(1615),
                    I = {
                        arc: R.Z,
                        pie: A.Z,
                        select: T.Z
                    };
                const P = {
                    yellowblue: {
                        fail_primary: "darkblue",
                        fail_secondary: "lightblue",
                        success_primary: "orange",
                        success_secondary: "yellow",
                        mute_primary: "darkgrey",
                        mute_secondary: "lightgrey"
                    }
                };

                function O() {
                    return {
                        initialized: !1,
                        colours: P["redgreen"]
                    }
                }
                const E = {
                    pieQuestions() {
                        var t = this.sections.reduce(((t, s) => t.concat(s.questions, [{}])), []),
                            s = I.pie().sort(null).value(1);
                        return s(t)
                    },
                    pieSections() {
                        var t = [],
                            s = I.pie().sort(null).value((t => t.questions ? t.questions.length : 1));
                        for (var e of this.sections) t = t.concat([e, {}]);
                        return s(t)
                    },
                    targetLevelLine1() {
                        return this.targetLevels[this.targetLevel][0]
                    },
                    targetLevelLine2() {
                        return this.targetLevels[this.targetLevel][1]
                    },
                    maxAnswers() {
                        var t = 0;
                        for (var s of this.sections)
                            for (var e of s.questions)
                                if (e) {
                                    var i = e.options.map((t => t[0] >= 0 ? 1 : 0)).reduce(((t, s) => t + s), 0);
                                    t = Math.max(t, i)
                                }
                        return t
                    },
                    questionThickness() {
                        return (D / 2 - M - B - U) / this.maxAnswers
                    }
                };
                var D = 1e3,
                    M = 150,
                    U = 50,
                    B = 20;
                const N = {
                    isTargetReached() {
                        return this.sections.reduce(((t, s) => t && s.reached[this.targetLevel]), !0)
                    },
                    questionClicked(t, s) {
                        this.$emit("questionClick", s.data.id)
                    },
                    initializeLevels() {
                        for (var t = 3; t >= 0; t--)
                            for (var s = 0; s < this.maxAnswers; s++) {
                                let e = I.arc().innerRadius(M + B + s * this.questionThickness).outerRadius(M + B + (s + 1) * this.questionThickness),
                                    i = this.svg.append("g").attr("class", "l" + t + " l" + t + "a" + s);
                                i.selectAll("path").data(this.pieQuestions).enter().append("path").attr("d", e).attr("opacity", "1").attr("stroke-width", "2px").attr("stroke", "white")
                            }
                    },
                    initializeGraph() {
                        if (this.sections && this.sections.length && !this.initialized) {
                            this.svg = I.select("#graph");
                            var t = this.svg.append("g").attr("class", "level");
                            t.append("circle").attr("cx", 0).attr("cy", 0).attr("r", M), t.append("text").text((() => this.targetLevelLine1)).attr("class", "target-level-line1").attr("fill", "white").attr("text-anchor", "middle").attr("font-size", 30).attr("transform", "translate(0, -30)"), t.append("text").text((() => this.targetLevelLine2)).attr("class", "target-level-line2").attr("fill", "white").attr("text-anchor", "middle").attr("font-size", 30).attr("transform", "translate(0, 0)"), t.append("text").text("not reached").attr("class", "target-level-reached").attr("fill", "white").attr("text-anchor", "middle").attr("font-size", 30).attr("transform", "translate(0, 30)");
                            for (var s = 0; s < this.maxAnswers; s++) {
                                let t = I.arc().innerRadius(M + B + s * this.questionThickness).outerRadius(M + B + (s + 1) * this.questionThickness),
                                    e = this.svg.append("g").attr("class", "user questions-" + s).attr("opacity", 1);
                                e.selectAll("path").data(this.pieQuestions).enter().append("path").attr("d", t).attr("stroke-width", "2px").attr("stroke", "white").on("click", this.questionClicked)
                            }
                            let e = I.arc().innerRadius(D / 2 - U).outerRadius(D / 2),
                                i = this.svg.append("g").attr("class", "question-labels");
                            i.selectAll("text").data(this.pieQuestions).enter().append("text").text((t => t.data.id ? t.data.id : "")).attr("transform", (function(t) {
                                return "translate(" + e.centroid(t) + ")"
                            })).attr("fill", (t => t.data.id ? "black" : "white")).attr("text-anchor", "middle").attr("font-size", 20), this.updateGraph(), this.resizeRadarPie(), this.initialized = !0
                        }
                    },
                    resizeRadarPie() {
                        var t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                            s = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            e = null;
                        this.powered ? s > 768 ? (e = this.$refs.radarpie.getBoundingClientRect().top, this.$refs.radarpie.style.height = t - e - 15 + "px") : this.$refs.radarpie.style.height = "97%" : s > 768 ? (e = this.$refs.radarpie.getBoundingClientRect().top, this.$refs.radarpie.style.height = t - e + "px") : this.$refs.radarpie.style.height = "100%"
                    },
                    updateGraph() {
                        for (var t = this.isTargetReached(), s = 0; s <= this.maxAnswers; s++) {
                            let t = this.svg.select(".questions-" + s);
                            t.selectAll("path").data(this.pieQuestions).join("path").attr("class", (t => {
                                if (!t.data.options) return "hide";
                                if (t.data.options.length - 1 < s) return "hide";
                                let e = t.data.levels[this.targetLevel],
                                    i = t.data.options.findIndex((t => t[0] >= e)),
                                    r = -1 === t.data.options[0][0] ? s + 1 : s;
                                return 0 === t.data.idx && -1 === t.data.options[0][0] ? r > t.data.options.length - 1 ? "white" : "mute-primary" : t.data.idx >= i ? r > t.data.idx ? r > t.data.options.length - 1 ? "white" : "mute-secondary" : r <= i ? "success-primary" : "success-secondary" : r > i ? r > t.data.options.length - 1 ? "white" : "mute-secondary" : r <= t.data.idx ? "fail-secondary" : "fail-primary"
                            }))
                        }
                        this.svg.select("circle").attr("class", (() => t ? "success-primary" : "fail-primary")), this.svg.select(".level").select(".target-level-line1").text((() => this.targetLevelLine1)), this.svg.select(".level").select(".target-level-line2").text((() => this.targetLevelLine2)), this.svg.select(".level").select(".target-level-reached").text((() => t ? "reached" : "not reached"))
                    }
                };
                var z = {
                        props: ["sections", "targetLevel", "targetLevels", "powered", "visible"],
                        data: O,
                        methods: N,
                        computed: E,
                        mounted() {
                            this.initializeGraph(), window.addEventListener("resize", this.resizeRadarPie), setTimeout(this.resizeRadarPie, 100)
                        },
                        destroyed() {
                            window.removeEventListener("resize", this.resizeRadarPie)
                        },
                        watch: {
                            sections: {
                                handler() {
                                    this.initializeGraph(), this.updateGraph(), this.resizeRadarPie()
                                },
                                deep: !0
                            },
                            targetLevel() {
                                this.resizeRadarPie(), this.initializeGraph(), this.updateGraph()
                            },
                            visible(t, s) {
                                t && !s && this.resizeRadarPie()
                            }
                        }
                    },
                    $ = z,
                    Q = (0, m.Z)($, C, q, !1, null, null, null),
                    Z = Q.exports,
                    j = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", [s("b-table-simple", {
                            staticStyle: {
                                "text-align": "middle"
                            },
                            attrs: {
                                hover: "",
                                border: "1px solid black"
                            }
                        }, [s("b-thead", [s("b-tr", [s("b-th", [t._v(t._s(t.strings["id"]))]), s("b-th", [t._v(t._s(t.strings["desc"]))]), s("b-th", {
                            staticStyle: {
                                "text-align": "center"
                            }
                        }, [t._v(t._s(t.strings["selfLevel"]))]), t._l(t.targetLevels, (function(e) {
                            return s("b-th", {
                                key: e.join(),
                                staticStyle: {
                                    "text-align": "center"
                                }
                            }, [t._v(t._s(e[0] + " " + e[1]))])
                        })), s("b-th", {
                            staticStyle: {
                                "text-align": "center"
                            }
                        }, [t._v(t._s(t.strings["maturityText"]) + " "), s("br"), t._v(" " + t._s(t.targetLevels[t.targetLevel][0] + " " + t.targetLevels[t.targetLevel][1]))])], 2)], 1), t._l(t.sections, (function(e) {
                            return s("b-tbody", {
                                key: e.label
                            }, [s("b-tr", [s("b-td", {
                                attrs: {
                                    colspan: "9"
                                }
                            }, [t._v(t._s(e.label))])], 1), t._l(e.questions, (function(e) {
                                return s("b-tr", {
                                    key: e.id
                                }, [s("b-td", [t._v(t._s(e.id))]), s("b-td", [t._v(t._s(e.label))]), s("b-td", {
                                    staticStyle: {
                                        "font-weight": "bold",
                                        "text-align": "center"
                                    }
                                }, [t._v(t._s(e.options[e.idx][0]))]), t._l(t.targetLevels, (function(i, r) {
                                    return s("b-td", {
                                        key: i.join(),
                                        class: {
                                            selected: r == t.targetLevel
                                        },
                                        staticStyle: {
                                            "text-align": "center"
                                        }
                                    }, [t._v(t._s(e.levels[r]))])
                                })), -1 == e.options[e.idx][0] ? s("b-td", {
                                    staticClass: "tableNA"
                                }, [t._v(t._s(t.strings["na"]))]) : 0 == e.options[e.idx][0] && 0 == e.levels[t.targetLevel] ? s("b-td", {
                                    staticClass: "tableNA"
                                }, [t._v(t._s(t.strings["notConsidered"]))]) : 0 == e.options[e.idx][0] ? s("b-td", {
                                    staticClass: "tableImprovement"
                                }, [t._v(t._s(t.strings["improvement"]))]) : e.options[e.idx][0] > 0 && e.options[e.idx][0] < e.levels[t.targetLevel] ? s("b-td", {
                                    staticClass: "tableFurthImprovement"
                                }, [t._v(t._s(t.strings["furthImprov"]))]) : e.options[e.idx][0] == e.levels[t.targetLevel] ? s("b-td", {
                                    staticClass: "tableCompliant"
                                }, [t._v(t._s(t.strings["compl"]))]) : s("b-td", {
                                    staticClass: "tableBetter"
                                }, [t._v(t._s(t.strings["better"]))])], 2)
                            }))], 2)
                        }))], 2), t.enableExport ? s("b-button", {
                            staticClass: "mr-1",
                            attrs: {
                                variant: "primary"
                            },
                            on: {
                                click: function(s) {
                                    return t.csvExport()
                                }
                            }
                        }, [t._v(t._s(t.strings["export"]))]) : t._e()], 1)
                    },
                    H = [],
                    F = {
                        props: ["sections", "targetLevel", "targetLevels", "strings", "enableExport"],
                        watch: {
                            sections: {
                                handler() {},
                                deep: !0
                            },
                            targetLevel() {}
                        },
                        methods: {
                            csvExport() {
                                for (var t = this.strings["id"] + "\t" + this.strings["desc"] + "\t" + this.strings["selfLevel"] + "\t", s = 0; s < this.targetLevels.length; s++) t += this.targetLevels[s][0] + " " + this.targetLevels[s][1] + "\t";
                                t += this.strings["maturityText"] + " " + this.targetLevels[this.targetLevel][0] + " " + this.targetLevels[this.targetLevel][1], t += "\n";
                                for (var e = 0; e < this.sections.length; e++) {
                                    t += "\n" + this.sections[e].label + "\n";
                                    for (var i = 0; i < this.sections[e].questions.length; i++) {
                                        t += this.sections[e].questions[i].id + "\t", t += this.sections[e].questions[i].label + "\t", t += this.sections[e].questions[i].options[this.sections[e].questions[i].idx][0] + "\t";
                                        for (var r = 0; r < this.sections[e].questions[i].levels.length; r++) t += this.sections[e].questions[i].levels[r] + "\t"; - 1 == this.sections[e].questions[i].options[this.sections[e].questions[i].idx][0] ? t += this.strings["na"] : 0 == this.sections[e].questions[i].options[this.sections[e].questions[i].idx][0] && 0 == this.sections[e].questions[i].levels[this.targetLevel] ? t += this.strings["notConsidered"] : 0 == this.sections[e].questions[i].options[this.sections[e].questions[i].idx][0] ? t += this.strings["improvement"] : this.sections[e].questions[i].options[this.sections[e].questions[i].idx][0] > 0 && this.sections[e].questions[i].options[this.sections[e].questions[i].idx][0] < this.sections[e].questions[i].levels[this.targetLevel] ? t += this.strings["furthImprov"] : this.sections[e].questions[i].options[this.sections[e].questions[i].idx][0] == this.sections[e].questions[i].levels[this.targetLevel] ? t += this.strings["compl"] : t += this.strings["better"], t += "\n"
                                    }
                                }(0, l.Z)(t), this.$toasted.show("Export to Clipboard successful!")
                            }
                        }
                    },
                    G = F,
                    V = (0, m.Z)(G, j, H, !1, null, null, null),
                    J = V.exports,
                    K = function() {
                        var t = this,
                            s = t._self._c;
                        return t.openActions <= 0 ? s("div", [s("h2", [t._v(t._s(t.strings["congrat"]))]), s("p", [t._v(t._s(t.strings["noChange"]) + t._s(t.reachedProfileDescription) + t._s(t.TIStatus) + ". ")])]) : s("div", [t._l(t.sections, (function(e) {
                            return s("div", {
                                key: e.key
                            }, [s("h3", [t._v(t._s(e.label))]), s("p", [t._v(" " + t._s(t.amountChanges(e.questions, t.targetLevel)) + " " + t._s(t.strings["of"]) + " " + t._s(e.questions.length) + " " + t._s(t.strings["improvementNeeded"]))]), t.amountChanges(e.questions, t.targetLevel) > 0 ? s("b-table-simple", {
                                attrs: {
                                    hover: "",
                                    border: "1px solid black"
                                }
                            }, [s("b-thead", [s("b-tr", [s("b-th", [t._v(t._s(t.strings["desState"]))]), s("b-th", [t._v(t._s(t.strings["taskId"]))]), s("b-th", [t._v(t._s(t.strings["taskDesc"]))]), s("b-th", [t._v(t._s(t.strings["taskCompl"]))])], 1)], 1), s("b-tbody", [t._l(e.questions, (function(e) {
                                return [e.options[e.idx][0] < e.levels[t.targetLevel] && e.options[e.idx][0] >= 0 ? s("b-tr", {
                                    key: e.id,
                                    attrs: {
                                        variant: "secondary"
                                    }
                                }, [s("b-td", {
                                    attrs: {
                                        colspan: "6"
                                    }
                                }, [t._v(t._s(e.id + " " + e.label))])], 1) : t._e(), t._l(t.filterQuestionArray(e.levels, e.options[e.idx][0], e.levels[t.targetLevel]), (function(i, r, n) {
                                    return s("b-tr", {
                                        key: n
                                    }, [s("b-td", [t._v(t._s(i - 1 + " → " + i))]), s("b-td", [t._v(t._s(("" != t.pref[i - 1][1] ? t.pref[i - 1][1] : "") + e.id + ("" != t.suff[i - 1][1] ? t.suff[i - 1][1] : e.improvement[i - 1][0])))]), s("b-td", [t._v(t._s("" == e.improvement[i - 1][1] ? "" != t.defTaskDesc[i - 1][1] ? t.defTaskDesc[i - 1][1] : t.strings["apply"] + e.options[i - 1][1] : e.improvement[i - 1][1]))]), s("b-td", [e.options[e.idx][0] + 1 >= i ? s("b-button", {
                                        staticClass: "mr-1",
                                        attrs: {
                                            variant: "primary",
                                            title: "Task completed"
                                        },
                                        on: {
                                            click: function(s) {
                                                return t.$emit("updateQuestion", e.id, i)
                                            }
                                        }
                                    }, [t._v(t._s(t.strings["compl-btn"]))]) : t._e()], 1)], 1)
                                }))]
                            }))], 2)], 1) : t._e(), s("hr")], 1)
                        })), t.enableExport ? s("b-button", {
                            staticClass: "mr-1",
                            attrs: {
                                variant: "primary"
                            },
                            on: {
                                click: function(s) {
                                    return t.csvExport()
                                }
                            }
                        }, [t._v(t._s(t.strings["export"]))]) : t._e()], 2)
                    },
                    W = [],
                    X = {
                        props: ["sections", "targetLevel", "pref", "suff", "defTaskDesc", "openActions", "reachedProfileDescription", "reachedLevels", "enableExport", "strings"],
                        methods: {
                            amountChanges(t, s) {
                                var e = 0;
                                for (var i of t) i.options[i.idx][0] < i.levels[s] && i.options[i.idx][0] >= 0 && (e += 1);
                                return e
                            },
                            filterQuestionArray(t, s, e) {
                                let i = Array.from(Array(5), ((t, s) => s + 1));
                                return i.filter((t => t > s && t <= e && s >= 0))
                            },
                            csvExport() {
                                for (var t = "", s = 0; s < this.sections.length; s++)
                                    if (t += this.sections[s].label + "\n", t += this.amountChanges(this.sections[s].questions, this.targetLevel) + " " + this.strings["of"] + " " + this.sections[s].questions.length + " " + this.strings["improvementNeeded"] + "\n\n", this.amountChanges(this.sections[s].questions, this.targetLevel) > 0) {
                                        t += this.strings["desState"] + "\t" + this.strings["taskId"] + "\t" + this.strings["taskDesc"] + "\n";
                                        for (var e = 0; e < this.sections[s].questions.length; e++) {
                                            var i = this.filterQuestionArray(this.sections[s].questions[e].levels, this.sections[s].questions[e].options[this.sections[s].questions[e].idx][0], this.sections[s].questions[e].levels[this.targetLevel]);
                                            if (i.length > 0) {
                                                t += this.sections[s].questions[e].id + ": " + this.sections[s].questions[e].label + "\t\n";
                                                for (var r = 0; r < i.length; r++) {
                                                    var n = i[r] - 1;
                                                    t += n + " -> " + (n + 1) + "\t", t += this.pref[n][1] + this.sections[s].questions[e].id + this.suff[n][1] + this.sections[s].questions[e].improvement[n][0] + "\t", "" == this.sections[s].questions[e].improvement[n][1] ? "" != this.defTaskDesc[n][1] ? t += this.defTaskDesc[n][1] : t += this.strings["standardImprov"] + this.sections[s].questions[e].options[n][1] : t += this.sections[s].questions[e].improvement[n][1], t += "\n"
                                                }
                                                t += "\n"
                                            }
                                        }
                                    } else t += "\n";
                                (0, l.Z)(t), this.$toasted.show(this.strings["succExpClipboard"])
                            }
                        },
                        computed: {
                            TIStatus() {
                                return this.reachedLevels[4] ? this.strings["alsoTI"] : ""
                            }
                        }
                    },
                    Y = X,
                    tt = (0, m.Z)(Y, K, W, !1, null, null, null),
                    st = tt.exports,
                    et = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", [s("div", {
                            staticClass: "noprint"
                        }, [t.resultComparison && !(t.warning.length > 0 || t.message.length > 0) ? s("a", {
                            attrs: {
                                href: "#",
                                variant: "primary"
                            },
                            on: {
                                click: function(s) {
                                    s.preventDefault(), t.showForm = !t.showForm
                                }
                            }
                        }, [t._v(t._s(t.strings["hideForm"]))]) : t._e(), t.showForm || t.warning.length > 0 || t.message.length > 0 ? s("div", {
                            staticStyle: {
                                "padding-top": "5px"
                            }
                        }, [s("div", [s("div", {
                            staticStyle: {
                                width: "48%",
                                display: "inline-block"
                            }
                        }, [s("p", [t._v(t._s(t.strings["oldStat"]) + ": ")]), s("b-form-group", [s("span", {
                            on: {
                                click: function(s) {
                                    t.selectedOld = "URL"
                                }
                            }
                        }, [s("b-form-radio", {
                            attrs: {
                                value: "URL"
                            },
                            model: {
                                value: t.selectedOld,
                                callback: function(s) {
                                    t.selectedOld = s
                                },
                                expression: "selectedOld"
                            }
                        }, [s("p", [t._v(t._s(t.strings["useURL"]) + ": ")])]), s("b-form-input", {
                            attrs: {
                                type: "text",
                                placeholder: t.strings["oldStat"]
                            },
                            model: {
                                value: t.textfeld[0],
                                callback: function(s) {
                                    t.$set(t.textfeld, 0, s)
                                },
                                expression: "textfeld[0]"
                            }
                        })], 1), s("br"), s("p", [s("b-form-radio", {
                            attrs: {
                                disabled: "undefined" === typeof this.url || !t.statusCompRadioButton,
                                value: "Curr"
                            },
                            model: {
                                value: t.selectedOld,
                                callback: function(s) {
                                    t.selectedOld = s
                                },
                                expression: "selectedOld"
                            }
                        }, [t._v(t._s(t.strings["useStat"]) + ": "), s("u", [t._v(t._s(t.url))])])], 1)])], 1), s("div", {
                            staticStyle: {
                                width: "48%",
                                float: "right",
                                display: "inline-block"
                            }
                        }, [s("p", [t._v(t._s(t.strings["newStat"]) + ":")]), s("b-form-group", [s("span", {
                            on: {
                                click: function(s) {
                                    t.selectedNew = "URL"
                                }
                            }
                        }, [s("b-form-radio", {
                            attrs: {
                                value: "URL"
                            },
                            model: {
                                value: t.selectedNew,
                                callback: function(s) {
                                    t.selectedNew = s
                                },
                                expression: "selectedNew"
                            }
                        }, [s("p", [t._v(t._s(t.strings["useURL"]) + ": ")])]), s("b-form-input", {
                            attrs: {
                                type: "text",
                                placeholder: t.strings["newStat"]
                            },
                            model: {
                                value: t.textfeld[1],
                                callback: function(s) {
                                    t.$set(t.textfeld, 1, s)
                                },
                                expression: "textfeld[1]"
                            }
                        })], 1), s("br"), s("p", [s("b-form-radio", {
                            attrs: {
                                disabled: "undefined" === typeof this.url || !t.statusCompRadioButton,
                                value: "Curr",
                                active: !0
                            },
                            model: {
                                value: t.selectedNew,
                                callback: function(s) {
                                    t.selectedNew = s
                                },
                                expression: "selectedNew"
                            }
                        }, [t._v(t._s(t.strings["useStat"]) + ": "), s("u", [t._v(t._s(t.url))])])], 1)])], 1)]), s("p"), s("b-button", {
                            staticClass: "mr-1",
                            attrs: {
                                variant: "primary"
                            },
                            on: {
                                click: function(s) {
                                    t.compareProcedure(t.textfeld[0], t.textfeld[1], t.selectedOld, t.selectedNew), t.showForm = !t.showForm || t.warning.length > 0 || t.message.length > 0
                                }
                            }
                        }, [t._v(t._s(t.strings["compare"]))]), s("p"), 0 != t.warning.length ? s("p", {
                            staticClass: "tableImprovement",
                            staticStyle: {
                                color: "white"
                            }
                        }, [t._v(t._s(t.warning))]) : t._e(), 0 != t.message.length ? s("p", {
                            staticClass: "tableFurthImprovement"
                        }, [t._v(t._s(t.message))]) : t._e()], 1) : t._e()]), t.resultComparison ? s("div", {
                            attrs: {
                                id: "resultComparison"
                            }
                        }, [s("hr"), s("h4", [t._v("Comparison")]), s("div", {
                            attrs: {
                                id: "stats"
                            }
                        }), s("b-table-simple", {
                            staticStyle: {
                                "text-align": "center"
                            },
                            attrs: {
                                bordered: ""
                            }
                        }, [s("b-row", [s("b-col", [s("p", [t._v(t._s(t.strings["decr"]) + ": ")]), s("p", [t._v(t._s(t.compareResult[2]))])]), s("b-col", [s("p", [t._v(t._s(t.strings["neutr"]) + ": ")]), s("p", [t._v(t._s(t.compareResult[1]))])]), s("b-col", [s("p", [t._v(t._s(t.strings["impr"]) + ": ")]), s("p", [t._v(t._s(t.compareResult[0]))])])], 1)], 1), s("hr"), s("div", {
                            attrs: {
                                id: "table"
                            }
                        }, [s("b-table-simple", [s("b-thead", [s("b-tr", {
                            staticClass: "text-center"
                        }, [s("b-th", {
                            staticClass: "text-left"
                        }, [t._v(t._s(t.strings["id"]))]), s("b-th", {
                            staticClass: "text-left"
                        }, [t._v(t._s(t.strings["desc"]))]), s("b-th", [t._v(t._s(t.strings["selfLevelBef"]))]), s("b-th", [t._v("-4")]), s("b-th", [t._v("-3")]), s("b-th", [t._v("-2")]), s("b-th", [t._v("-1")]), s("b-th", [t._v(t._s(t.strings["delta"]))]), s("b-th", [t._v("+1")]), s("b-th", [t._v("+2")]), s("b-th", [t._v("+3")]), s("b-th", [t._v("+4")]), s("b-th", [t._v(t._s(t.strings["selfLevelAft"]))]), s("b-th", [t._v(t._s(t.strings["maturityText"]) + " "), s("br"), t._v(" " + t._s(t.targetLevels[t.targetLevel][0] + " " + t.targetLevels[t.targetLevel][1]))])], 1)], 1), t._l(t.sections, (function(e, i) {
                            return s("b-tbody", {
                                key: e.label,
                                attrs: {
                                    border: "2px solid black"
                                }
                            }, [s("b-tr", [s("b-td", {
                                attrs: {
                                    colspan: "13"
                                }
                            }, [t._v(t._s(e.label))])], 1), t._l(e.questions, (function(e, r) {
                                return s("b-tr", {
                                    key: e.id,
                                    staticClass: "text-center"
                                }, [s("b-th", {
                                    staticClass: "text-left"
                                }, [t._v(t._s(e.id))]), s("b-th", {
                                    staticClass: "text-left"
                                }, [t._v(t._s(e.label))]), s("b-th", [t._v(t._s(e.options[t.decodedStatus[0].answers[t.calcArrIDStatus(i, r)]][0]))]), s("b-th", {
                                    class: t.compareResult[t.arrLength + i][r] <= -4 ? "diagramRed" : ""
                                }), s("b-th", {
                                    class: t.compareResult[t.arrLength + i][r] <= -3 ? "diagramRed" : ""
                                }), s("b-th", {
                                    class: t.compareResult[t.arrLength + i][r] <= -2 ? "diagramRed" : ""
                                }), s("b-th", {
                                    class: t.compareResult[t.arrLength + i][r] <= -1 ? "diagramRed" : ""
                                }), s("b-th", {
                                    style: 0 == t.compareResult[t.arrLength + i][r] ? "background-color: lightgrey" : ""
                                }, [t._v(" " + t._s(t.compareResult[t.arrLength + i][r]))]), s("b-th", {
                                    class: t.compareResult[t.arrLength + i][r] >= 1 ? "diagramGreen" : ""
                                }), s("b-th", {
                                    class: t.compareResult[t.arrLength + i][r] >= 2 ? "diagramGreen" : ""
                                }), s("b-th", {
                                    class: t.compareResult[t.arrLength + i][r] >= 3 ? "diagramGreen" : ""
                                }), s("b-th", {
                                    class: t.compareResult[t.arrLength + i][r] >= 4 ? "diagramGreen" : ""
                                }), s("b-th", [t._v(t._s(e.options[t.decodedStatus[1].answers[t.calcArrIDStatus(i, r)]][0]))]), -1 == e.options[t.decodedStatus[1].answers[t.calcArrIDStatus(i, r)]][0] ? s("b-td", {
                                    staticClass: "tableNA"
                                }, [t._v(t._s(t.strings["na"]))]) : 0 == e.options[t.decodedStatus[1].answers[t.calcArrIDStatus(i, r)]][0] && 0 == e.levels[t.targetLevel] ? s("b-td", {
                                    staticClass: "tableNA"
                                }, [t._v(t._s(t.strings["notConsidered"]))]) : 0 == e.options[t.decodedStatus[1].answers[t.calcArrIDStatus(i, r)]][0] ? s("b-td", {
                                    staticClass: "tableImprovement"
                                }, [t._v(t._s(t.strings["improvement"]))]) : e.options[t.decodedStatus[1].answers[t.calcArrIDStatus(i, r)]][0] > 0 && e.options[t.decodedStatus[1].answers[t.calcArrIDStatus(i, r)]][0] < e.levels[t.targetLevel] ? s("b-td", {
                                    staticClass: "tableFurthImprovement"
                                }, [t._v(t._s(t.strings["furthImprov"]))]) : e.options[t.decodedStatus[1].answers[t.calcArrIDStatus(i, r)]][0] == e.levels[t.targetLevel] ? s("b-td", {
                                    staticClass: "tableCompliant"
                                }, [t._v(t._s(t.strings["compl"]))]) : s("b-td", {
                                    staticClass: "tableBetter"
                                }, [t._v(t._s(t.strings["better"]))])], 1)
                            }))], 2)
                        }))], 2)], 1)], 1) : t._e(), t.resultComparison ? s("b-button", {
                            staticClass: "mr-1",
                            attrs: {
                                variant: "primary"
                            },
                            on: {
                                click: function(s) {
                                    return t.csvExport()
                                }
                            }
                        }, [t._v(t._s(t.strings["export"]))]) : t._e()], 1)
                    },
                    it = [];

                function rt(t, s) {
                    for (var e = [], i = 0; i < t.length; i += s) e.push(t.slice(i, i + s));
                    return e
                }

                function nt(t) {
                    if (0 === t) return "0";
                    var s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                        e = "";
                    while (t > 0) e = s[t % s.length] + e, t = parseInt(t / s.length, 10);
                    return e
                }

                function at(t) {
                    for (var s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", e = 0, i = 0; i < t.length; i++) {
                        var r = s.indexOf(t[i]);
                        if (r < 0) return NaN;
                        e += r * Math.pow(s.length, t.length - i - 1)
                    }
                    return e
                }

                function ot(t, s) {
                    var e = rt(s, 15),
                        i = [];
                    for (var r of e) {
                        var n = r.reduce(((t, s) => t + s), "" + t),
                            a = parseInt(n, 10),
                            o = nt(a);
                        i.push(o)
                    }
                    return i.join("-")
                }

                function lt(t) {
                    var s = [],
                        e = 0;
                    if (t) {
                        var i = t.split("-");
                        for (var r of i) {
                            var n = at(r),
                                a = "" + n,
                                o = a.split("").map((t => parseInt(t, 10))),
                                l = parseInt(o.shift());
                            if (!e && l) e = l;
                            else if (e !== l) return console.warn("Version mismatch in encoded answers!"), {
                                version: 0,
                                answers: []
                            };
                            s = s.concat(o)
                        }
                    }
                    return 1 === e && 44 === s.length && (s.splice(5, 0, 0), e = 2), (e < 0 || e > 2) && (e = 0), {
                        version: e,
                        answers: s
                    }
                }
                var ct = {
                        props: ["sections", "url", "targetLevel", "targetLevels", "strings", "statusCompRadioButton"],
                        data: function() {
                            return {
                                arrLength: 0,
                                compareResult: [0, 0, 0],
                                decodedStatus: [],
                                mappedArray: [],
                                resultComparison: !1,
                                showForm: !0,
                                statuscode: [],
                                textfeld: ["", ""],
                                TICert: [
                                    [],
                                    []
                                ],
                                warning: "",
                                message: "",
                                countTIA: 0,
                                countTIB: 0,
                                selectedOld: "",
                                selectedNew: "",
                                bufferTextfeld: ["", ""]
                            }
                        },
                        methods: {
                            calcArrIDStatus(t, s) {
                                for (var e = 0, i = 0; i < t; i++) e += this.sections[i].questions.length;
                                return e += s, e
                            },
                            csvExport() {
                                var t = this.strings["id"] + "\t" + this.strings["desc"] + "\t" + this.strings["selfLevelBef"] + "\t";
                                t += this.strings["delta"] + "\t", t += this.strings["selfLevelAft"] + "\t", t += this.strings["maturityText"] + " " + this.targetLevels[this.targetLevel][0] + " " + this.targetLevels[this.targetLevel][1], t += "\r\n";
                                for (var s = 0; s < this.sections.length; s++) {
                                    t += this.sections[s].label + "\n";
                                    for (var e = 0; e < this.sections[s].questions.length; e++) t += this.sections[s].questions[e].id + "\t", t += this.sections[s].questions[e].label + "\t", t += this.sections[s].questions[e].options[this.decodedStatus[0].answers[this.calcArrIDStatus(s, e)]][0] + "\t", t += this.compareResult[this.arrLength + s][e] + "\t", t += this.sections[s].questions[e].options[this.decodedStatus[1].answers[this.calcArrIDStatus(s, e)]][0] + "\t", -1 == this.sections[s].questions[e].options[this.decodedStatus[1].answers[this.calcArrIDStatus(s, e)]][0] ? t += this.strings["na"] : 0 == this.sections[s].questions[e].options[this.decodedStatus[1].answers[this.calcArrIDStatus(s, e)]][0] && 0 == this.sections[s].questions[e].levels[this.targetLevel] ? t += this.strings["notConsidered"] : 0 == this.sections[s].questions[e].options[this.decodedStatus[1].answers[this.calcArrIDStatus(s, e)]][0] ? t += this.strings["improvement"] : this.sections[s].questions[e].options[this.decodedStatus[1].answers[this.calcArrIDStatus(s, e)]][0] > 0 && this.sections[s].questions[e].options[this.decodedStatus[1].answers[this.calcArrIDStatus(s, e)]][0] < this.sections[s].questions[e].levels[this.targetLevel] ? t += this.strings["furthImprov"] : this.sections[s].questions[e].options[this.decodedStatus[1].answers[this.calcArrIDStatus(s, e)]][0] == this.sections[s].questions[e].levels[this.targetLevel] ? t += this.strings["compl"] : t += this.strings["better"], t += "\n";
                                    t += "\n"
                                }(0, l.Z)(t), this.$toasted.show(this.strings["expSucc"])
                            },
                            testLinks() {
                                return this.decodedStatus[0] = lt(this.statuscode[0]), this.decodedStatus[1] = lt(this.statuscode[1]), this.decodedStatus[0].version && this.decodedStatus[1].version ? 0 : this.decodedStatus[0].version ? 2 : 1
                            },
                            compareLinks() {
                                this.compareResult = [0, 0, 0];
                                for (var t = 0; t < this.decodedStatus[0].answers.length; t++) this.mappedArray[t] = this.decodedStatus[1].answers[t] - this.decodedStatus[0].answers[t], 0 == this.mappedArray[t] ? this.compareResult[1]++ : this.mappedArray[t] > 0 ? this.compareResult[0]++ : this.compareResult[2]++;
                                this.arrLength = this.compareResult.length
                            },
                            partitionateStatus() {
                                var t = 0;
                                this.countTIA = 0, this.countTIB = 0;
                                for (var s = 0; s < this.sections.length; s++) {
                                    this.compareResult[this.arrLength + s] = [], this.TICert[0][s] = [], this.TICert[1][s] = [];
                                    for (var e = 0; e < this.sections[s].questions.length; e++) this.compareResult[this.arrLength + s][e] = this.mappedArray[t], this.TICert[0][s][e] = this.sections[s].questions[e].levels[4] <= this.sections[s].questions[e].options[this.decodedStatus[0].answers[this.calcArrIDStatus(s, e)]][0], this.TICert[1][s][e] = this.sections[s].questions[e].levels[4] <= this.sections[s].questions[e].options[this.decodedStatus[1].answers[this.calcArrIDStatus(s, e)]][0], this.TICert[0][s][e] && this.countTIA++, this.TICert[1][s][e] && this.countTIB++, t++
                                }
                            },
                            compareProcedure(t, s, e, i) {
                                if ("Curr" == e && (t = JSON.parse(JSON.stringify(this.url))), "Curr" == i && (s = JSON.parse(JSON.stringify(this.url))), this.message = "", "" == t && "" == s) this.resultComparison = !1, this.warning = this.strings["inputErrorA"];
                                else if (0 == t.length) this.resultComparison = !1, this.warning = this.strings["inputErrorB"];
                                else if (0 == s.length) this.resultComparison = !1, this.warning = this.strings["inputErrorC"];
                                else {
                                    -1 != t.indexOf("/") ? this.statuscode[0] = t.split("/").pop() : this.statuscode[0] = t, -1 != s.indexOf("/") ? this.statuscode[1] = s.split("/").pop() : this.statuscode[1] = s, this.statuscode[0] == this.statuscode[1] && (this.message = this.strings["messageA"]), this.textfeld = this.statuscode;
                                    let e = this.testLinks();
                                    0 == e ? (this.compareLinks(), this.partitionateStatus(), this.warning = "", this.resultComparison = !0, this.selectedOld = "URL", this.selectedNew = "URL") : 1 == e ? (this.resultComparison = !1, this.warning = this.strings["inputErrorE"]) : 2 == e ? (this.resultComparison = !1, this.warning = this.strings["inputErrorF"]) : (this.resultComparison = !1, this.warning = this.strings["inputErrorG"]), this.$forceUpdate()
                                }
                            }
                        },
                        mounted() {
                            this.textfeld[1] = "", "undefined" != typeof this.url || null != this.url ? (this.selectedOld = "URL", this.selectedNew = "Curr") : (this.selectedOld = "URL", this.selectedNew = "URL")
                        },
                        watch: {
                            sections: {
                                handler() {},
                                deep: !0
                            },
                            statusCompRadioButton() {
                                0 == this.statusCompRadioButton ? (this.selectedOld = "URL", this.selectedNew = "URL") : (this.selectedOld = "URL", this.selectedNew = "Curr")
                            }
                        }
                    },
                    ut = ct,
                    ht = (0, m.Z)(ut, et, it, !1, null, null, null),
                    dt = ht.exports,
                    pt = function() {
                        var t = this,
                            s = t._self._c;
                        return s("div", {
                            staticClass: "container mt-4"
                        }, [s("h3", [t._v(t._s(t.manual.sub_title))]), s("div", {
                            staticClass: "version"
                        }, [s("div", {
                            domProps: {
                                innerHTML: t._s(t.manual.version)
                            }
                        }), s("div", {
                            domProps: {
                                innerHTML: t._s(t.manual.author)
                            }
                        })]), s("h6", [t._v(t._s(t.manual.abstract_head))]), s("div", {
                            domProps: {
                                innerHTML: t._s(t.manual.abstract)
                            }
                        }), s("h6", [t._v(t._s(t.manual.acknowledgement_head))]), s("div", {
                            domProps: {
                                innerHTML: t._s(t.manual.acknowledgement)
                            }
                        }), s("h4", [t._v(t._s(t.manual.introduction_head))]), s("div", {
                            domProps: {
                                innerHTML: t._s(t.manual.introduction)
                            }
                        }), s("h4", [t._v(t._s(t.manual.quadrants_head))]), s("div", {
                            domProps: {
                                innerHTML: t._s(t.manual.quadrants)
                            }
                        }), s("h4", [t._v(t._s(t.manual.scoring_head))]), s("div", {
                            domProps: {
                                innerHTML: t._s(t.manual.scoring)
                            }
                        }), t._l(t.sections, (function(e) {
                            return s("div", {
                                key: e.key
                            }, [s("h3", [t._v(t._s(e.key) + " - " + t._s(e.label))]), s("div", {
                                domProps: {
                                    innerHTML: t._s(e.intro_html)
                                }
                            }), t._l(e.questions, (function(e) {
                                return s("div", {
                                    key: e.id,
                                    staticClass: "mt-4"
                                }, [s("h6", [s("span", {
                                    staticClass: "question-id"
                                }, [t._v(t._s(e.id))]), t._v(" " + t._s(e.label))]), s("div", {
                                    staticClass: "question-notes",
                                    domProps: {
                                        innerHTML: t._s(e.standard)
                                    }
                                }), s("div", {
                                    staticClass: "question-description",
                                    domProps: {
                                        innerHTML: t._s(e.description)
                                    }
                                })])
                            }))], 2)
                        })), s("h5", [t._v(t._s(t.manual.copyright_head))]), s("div", {
                            domProps: {
                                innerHTML: t._s(t.manual.copyright)
                            }
                        })], 2)
                    },
                    vt = [],
                    gt = {
                        name: "manual",
                        props: ["sections", "manual"]
                    },
                    ft = gt,
                    mt = (0, m.Z)(ft, pt, vt, !1, null, "1114f155", null),
                    bt = mt.exports;
                const _t = {
                    copyURLToClipboard() {
                        (0, l.Z)(this.url), this.$toasted.show(this.strings["copyURLSucc"])
                    },
                    changeLanguage(t) {
                        this.selLanguage = t, Promise.all([this.loadStrings(), this.loadContent()]).then((() => {
                            this.calculateReachedLevels();
                            var t = lt(this.$route.params.answers);
                            this.setAnswers(t.answers)
                        }))
                    },
                    loadContent() {
                        return o.Z.get("contentJSONs/" + this.selLanguage + ".json").then((t => {
                            var s = t.data,
                                e = s.questions;
                            for (var i of (this.manual = s.manual[0], this.taskIdentifierSuff = s.taskDescSuff, this.taskIdentifierPref = s.taskDescPref, this.defaultTaskDescription = s.defaultTaskDescription, this.jsonMeta = s.JSONMetadata, this.links = s.links, this.footerURL = s.footerURL, this.targetLevels = s.targetLevels, e)) {
                                for (var r of i.questions) - 1 === r.options[0][0] ? (r.value = r.options[1][0], r.idx = 1) : (r.value = r.options[0][0], r.idx = 0), r.level = -1;
                                i.level = -1
                            }
                            this.sections = e, this.calculateReachedLevels(), this.calcOpenTasks()
                        }))
                    },
                    loadStrings() {
                        return o.Z.get("structureJSONs/" + this.selLanguage + ".json").then((t => {
                            var s = t.data;
                            this.strings = s.App, this.comparisonStrings = s.Comparison, this.resultTableStrings = s.ResultTable, this.openActionsStrings = s.OpenActions, this.questionsStrings = s.Questions
                        }))
                    },
                    questionClicked(t) {
                        this.$refs.questions.showQuestion(t)
                    },
                    sectionClicked(t) {
                        this.$refs.questions.activateTab(t)
                    },
                    updateQuestion(t, s) {
                        for (var e of this.sections)
                            for (var i of e.questions)
                                if (i.id == t) {
                                    i.value = s;
                                    for (var r = 0; r < i.options.length; r++)
                                        if (i.options[r][0] === s) {
                                            i.idx = r;
                                            break
                                        }
                                }
                        this.calculateReachedLevels(), this.updateRoute(), this.calcOpenTasks(), this.urlError = !1
                    },
                    loadFaviconURL() {
                        document.querySelector("#favicon").href = this.faviconURL
                    },
                    setAnswers(t) {
                        var s = 0;
                        for (var e of this.sections)
                            for (var i of e.questions) {
                                var r = t[s++];
                                r > i.options.length - 1 || (i.idx = r, i.value = i.options[r][0])
                            }
                        this.calculateReachedLevels(), this.calcOpenTasks()
                    },
                    calculateReachedLevels() {
                        let t = [!0, !0, !0, !0, !0];
                        for (var s of this.sections) {
                            for (var e of (s.reached = [!0, !0, !0, !0, !0], s.questions)) {
                                e.reached = e.levels.map((t => -1 === e.value || e.value >= t)), e.sectionReached = s.reached;
                                for (var i = 0; i < 5; i++) s.reached[i] = s.reached[i] && e.reached[i]
                            }
                            for (var r = 0; r < t.length; r++) t[r] = t[r] && s.reached[r]
                        }
                        return this.reachedLevels = t, t
                    },
                    updateRoute() {
                        var t = [];
                        for (var s of this.sections)
                            for (var e of s.questions) t.push(e.idx);
                        this.$router.push({
                            name: "answers",
                            params: {
                                answers: ot(2, t)
                            }
                        }), this.url = window.location.href
                    },
                    loadConfig() {
                        return o.Z.get("config.json").then((t => {
                            var s = t.data;
                            this.features = s.featureActivation, this.languages = s.languages, this.logoURL = s.logoURL, this.faviconURL = s.faviconURL, this.faviconURL.match(this.REGEX_URL_VAL) && this.loadFaviconURL(), this.features.showMembership ? this.targetLevel = 0 : this.targetLevel = 1
                        }))
                    },
                    calcOpenTasks() {
                        for (var t of (this.openActions = 0, this.sections))
                            for (var s of t.questions) s.options[s.idx][0] >= 0 && (this.openActions += Math.max.apply(Math, [s.levels[this.targetLevel] - s.options[s.idx][0], 0]))
                    },
                    initiateBasisState() {
                        var t = 0;
                        for (var s of this.sections)
                            for (var e of s.questions) {
                                for (var i = 0; i < e.options.length; i++) 0 === e.options[i][0] && (this.basisState[t] = i);
                                t += 1
                            }
                    }
                };

                function wt() {
                    return {
                        REGEX_URL_VAL: RegExp("(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$", "i"),
                        colourScheme: "def",
                        features: [],
                        defaultTaskDescription: {},
                        links: [""],
                        footerURL: [],
                        faviconURL: "",
                        languages: [],
                        logoURL: "",
                        manual: [],
                        jsonMeta: [],
                        targetLevels: [],
                        openActions: 0,
                        returnToComparison: ["", ""],
                        sections: [],
                        selLanguage: "en-gb",
                        showManual: !1,
                        strings: {},
                        resultTableStrings: {},
                        openActionsStrings: {},
                        questionsStrings: {},
                        tabIndex: 0,
                        targetLevel: 0,
                        taskIdentifierSuff: "",
                        taskIdentifierPref: "",
                        lastValid: [],
                        url: void 0,
                        urlError: !1,
                        basisState: [],
                        statusCompRadioButton: !1,
                        reachedLevels: [!1, !1, !1, !1, !1]
                    }
                }
                var Lt = {
                        name: "app",
                        data: wt,
                        methods: _t,
                        components: {
                            Questions: S,
                            RadarPie: Z,
                            OpenActions: st,
                            ResultTable: J,
                            Comparison: dt,
                            Manual: bt
                        },
                        mounted() {
                            this.selLanguage = "en-gb", Promise.all([this.loadContent(), this.loadStrings(), this.loadConfig()]).then((() => {
                                this.initiateBasisState(), this.calculateReachedLevels(), this.url = this.$route.params.answers;
                                var t = lt(this.$route.params.answers);
                                this.url && (t.version ? (this.urlError = !1, this.setAnswers(t.answers), this.lastValid = t.answers, this.url = window.location.href, this.statusCompRadioButton = !0) : (this.setAnswers(this.basisState), this.urlError = !0, this.lastValid = this.basisState, this.statusCompRadioButton = !1)), this.calculateReachedLevels()
                            }))
                        },
                        watch: {
                            $route: function() {
                                var t = lt(this.$route.params.answers);
                                t.version ? (this.urlError && this.lastValid != this.basisState && this.setAnswers(this.lastValid), this.setAnswers(t.answers), this.url = window.location.href, this.lastValid = t.answers, this.urlError = !1, this.statusCompRadioButton = !0) : this.url && !this.urlError && (this.setAnswers(this.basisState), this.urlError = !0, this.statusCompRadioButton = !1)
                            }
                        },
                        computed: {
                            appTitle() {
                                return this.showManual ? this.manual["title"] : this.strings["titel"]
                            },
                            reachedProfileDescription() {
                                var t = this.reachedLevels;
                                if (this.features.showMembership) {
                                    if (t[3]) return "Profile " + this.strings["statAdvan"];
                                    if (t[2]) return "Profile " + this.strings["statInter"];
                                    if (t[1]) return "Profile " + this.strings["statBasic"];
                                    if (t[0]) return "Profile " + this.strings["statMembBase"]
                                } else {
                                    if (t[2]) return "Profile " + this.strings["statAdvan"];
                                    if (t[1]) return "Profile " + this.strings["statInter"];
                                    if (t[0]) return "Profile " + this.strings["statBasic"]
                                }
                                return this.strings["noProfile"]
                            },
                            tiPossibleDescription() {
                                return this.reachedLevels[4] ? this.strings["possible"] : this.strings["notPossible"]
                            },
                            titleOpenActions: function() {
                                return this.strings["menuOpenActions"] + " [" + this.openActions + "]"
                            },
                            version() {
                                return "2.0.1"
                            },
                            topNavLinks() {
                                return this.links.filter((t => "" !== t.href && "" !== t.title))
                            },
                            comparisonEnabled() {
                                return this.features.comparison && !0
                            },
                            openActionsEnabled() {
                                return this.features.openActions && !0
                            }
                        }
                    },
                    xt = Lt,
                    yt = (0, m.Z)(xt, n, a, !1, null, null, null),
                    kt = yt.exports,
                    St = e(8345),
                    Ct = e(9665),
                    qt = e.n(Ct);
                e(7024);
                i["default"].config.productionTip = !1, i["default"].use(r.ZPm), i["default"].use(St.ZP), i["default"].use(qt(), {
                    duration: 1350,
                    position: "bottom-right",
                    action: {
                        onClick: (t, s) => {
                            s.goAway(0)
                        }
                    }
                });
                const Rt = new St.ZP({
                    routes: [{
                        path: "/v1/:answers",
                        name: "v1"
                    }, {
                        path: "/a/:answers",
                        name: "answers"
                    }, {
                        path: "/",
                        name: "reset"
                    }]
                });
                new i["default"]({
                    render: t => t(kt),
                    router: Rt
                }).$mount("#app")
            }
        },
        s = {};

    function e(i) {
        var r = s[i];
        if (void 0 !== r) return r.exports;
        var n = s[i] = {
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, e), n.exports
    }
    e.m = t,
        function() {
            var t = [];
            e.O = function(s, i, r, n) {
                if (!i) {
                    var a = 1 / 0;
                    for (u = 0; u < t.length; u++) {
                        i = t[u][0], r = t[u][1], n = t[u][2];
                        for (var o = !0, l = 0; l < i.length; l++)(!1 & n || a >= n) && Object.keys(e.O).every((function(t) {
                            return e.O[t](i[l])
                        })) ? i.splice(l--, 1) : (o = !1, n < a && (a = n));
                        if (o) {
                            t.splice(u--, 1);
                            var c = r();
                            void 0 !== c && (s = c)
                        }
                    }
                    return s
                }
                n = n || 0;
                for (var u = t.length; u > 0 && t[u - 1][2] > n; u--) t[u] = t[u - 1];
                t[u] = [i, r, n]
            }
        }(),
        function() {
            e.n = function(t) {
                var s = t && t.__esModule ? function() {
                    return t["default"]
                } : function() {
                    return t
                };
                return e.d(s, {
                    a: s
                }), s
            }
        }(),
        function() {
            e.d = function(t, s) {
                for (var i in s) e.o(s, i) && !e.o(t, i) && Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: s[i]
                })
            }
        }(),
        function() {
            e.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            e.o = function(t, s) {
                return Object.prototype.hasOwnProperty.call(t, s)
            }
        }(),
        function() {
            e.r = function(t) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            var t = {
                143: 0
            };
            e.O.j = function(s) {
                return 0 === t[s]
            };
            var s = function(s, i) {
                    var r, n, a = i[0],
                        o = i[1],
                        l = i[2],
                        c = 0;
                    if (a.some((function(s) {
                            return 0 !== t[s]
                        }))) {
                        for (r in o) e.o(o, r) && (e.m[r] = o[r]);
                        if (l) var u = l(e)
                    }
                    for (s && s(i); c < a.length; c++) n = a[c], e.o(t, n) && t[n] && t[n][0](), t[n] = 0;
                    return e.O(u)
                },
                i = self["webpackChunksim3"] = self["webpackChunksim3"] || [];
            i.forEach(s.bind(null, 0)), i.push = s.bind(null, i.push.bind(i))
        }();
    var i = e.O(void 0, [998], (function() {
        return e(4644)
    }));
    i = e.O(i)
})();
//# sourceMappingURL=app.c301f120.js.map