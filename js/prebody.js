var loader = new resLoader({
    resources: ["static/css/main.min.css", "static/js/jquery-3.1.0.min.js", "static/js/main.min.js", "static/src/pic/BG.png", "static/src/pic/homepage/Design-Assistor.png", "static/src/pic/homepage/PM-Assistor.png", "static/src/pic/homepage/android-Assistor.png", "static/src/pic/homepage/iOS-Assistor.png", "static/src/pic/homepage/nomove.png", "static/src/pic/homepage/Web-Assistor.png", "static/src/pic/homepage/Lab-Assistor.png", "static/src/pic/homepage/game-Assistor.png", "static/src/pic/homepage/come-Assistor.png", "static/src/pic/homepage/uniquelogo.png"],
    onStart: function(o) {},
    onProgress: function(o, t) {
        var e = o / t * 100,
            n = 50 - e / 2,
            r = $("#progress").width() * e / 100;
        $("#progressbar").css({
            left: n + "%",
            width: r + "px"
        })
    },
    onComplete: function() {
        $("#main_body").ready(function() {
            $("#fullpage").fullpage({
                resize: !0,
                menu: "#navbar_menu",
                anchors: ["home_page", "intro_page", "groups_page", "events_page", "works_page", "contact_page", "footer_page"],
                slidesNavigation: !0,
                slidesNavPosition: "bottom",
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 500,
                scrollBar: !1,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                touchSensitivity: 15,
                keyboardScrolling: !0,
                animateAnchor: !1,
                recordHistory: !1,
                controlArrows: !0,
                slideControlArrows: !0,
                verticalCentered: !0,
                fixedElements: "#navbar",
                sectionSelector: ".page",
                slideSelector: ".page .slide",
                afterRender: function() {
                    $("#works .fp-slidesNav").css("opacity", "0"),
                    $("#events .fp-slidesNav").css("opacity", "0"),
                    $("#home #home_join").click(function() {
                        $.fn.fullpage.moveTo("contact_page")
                    }),
                    $("#home #home_web").click(function() {
                        $.fn.fullpage.moveTo("groups_page", 0)
                    }),
                    $("#home #home_lab").click(function() {
                        $.fn.fullpage.moveTo("groups_page", 1)
                    }),
                    $("#home #home_design").click(function() {
                        $.fn.fullpage.moveTo("groups_page", 2)
                    }),
                    $("#home #home_pm").click(function() {
                        $.fn.fullpage.moveTo("groups_page", 3)
                    }),
                    $("#home #home_android").click(function() {
                        $.fn.fullpage.moveTo("groups_page", 4)
                    }),
                    $("#home #home_apple").click(function() {
                        $.fn.fullpage.moveTo("groups_page", 5)
                    }),
                    $("#home #home_game").click(function() {
                        $.fn.fullpage.moveTo("groups_page", 6)
                    })
                },
                afterResize: function() {
                    drawCircle(),
                    $("#navbar_btn").mouseover(function() {
                        navbar_draw()
                    }),
                    $("#main_body").move_bg(),
                    $screenW = $(window).width(),
                    $screenH = $(window).height(),
                    $("#events #event-years #yearLabels .yearLabel").remove(),
                    drawYears(),
                    drawHomeDash()
                },
                onSlideLeave: function(o, t, e, n, r) {
                    if (4 == t) {
                        var i = $("#events #event-details .imgContent >img:eq(" + e + ")");
                        i.css({
                            transform: "scale3d(0.7,0.7,0.7)",
                            opacity: "0"
                        })
                    }
                },
                afterSlideLoad: function(o, t, e, n) {
                    if (4 == t) {
                        var r = $("#events #event-details .imgContent >img:eq(" + n + ")");
                        r.css({
                            opacity: "1",
                            transform: "scale3d(1,1,1)"
                        })
                    }
                }
            }),
            $("#main_body").move_bg(),
            $("#navbar_btn").click(function(o) {
                $("#navbar_menu li").css("display", "inline-block")
            })
        }),
        $("#main_body").css("display", "block"),
        $(".pre_body_arrow").animate({
            opacity: 1
        }, 200).click(function() {
            $("#pre_body").css({
                transform: "scale3d(0.1,0.1,0.1)"
            });
            setTimeout(function() {
                $("#pre_body").remove()
            }, 250)
        }),
        $("img.lazy").each(function(o, t) {
            $(this).attr("src", $(this).data("original"))
        }),
        $("img.lazy2").each(function(o, t) {
            $(this).attr("src", $(this).data("original"))
        })
    }
});
loader.start();
