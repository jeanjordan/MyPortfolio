$(document).ready(function() {

    //random gradient banner
    var bgNum = Math.floor((Math.random() * 3) + 1);
    $('#bg-banner').addClass('e-bg-gradient' + bgNum);

    //animation intro
    TweenMax.to(".c-banner__photo--me", 1.5, {
        scale: '1',
        ease: Elastic.easeOut.config(1, 0.9)
    });

    TweenMax.staggerFrom(".js-up-to-bottom", .7, {
        y: "-50",
        opacity: 0
    }, 0.4);

    TweenMax.from(".c-banner-square1", 1.5, {
        y: "-160",
        ease: Power2.easeOut
    });

    TweenMax.from(".c-banner-square2", 1.5, {
        y: "190",
        ease: Power2.easeOut
    });

    

    //scrollMaginPlugin
    var controller = new ScrollMagic.Controller();


    //projects animation SECTION 1

    var tweenProject = new TimelineMax()
        .from(".js-img-project", .5, {
            opacity: "0",
        }).staggerFrom(['.js-title-project', '.js-description-project', '.js-btn-project'], .7, {
            y: "-50",
            opacity: 0
        }, .3);


    var scene = new ScrollMagic.Scene({
            triggerElement: ".js-animate-project",
            reverse: false

        })
        .setTween(tweenProject)
        /*.addIndicators({
            name: "2 (duration: 0)"
        }) //add indicators (requires plugin)*/
        .addTo(controller);


    //projects animation SECTION 2

    var tweenProject2 = new TimelineMax()
        .from(".js-img-project2", .5, {
            opacity: "0",
        }).staggerFrom(['.js-title-project2', '.js-description-project2', '.js-btn-project2'], .7, {
            y: "-50",
            opacity: 0
        }, .3);


    var scene = new ScrollMagic.Scene({
            triggerElement: ".js-animate-project2",
            reverse: false

        })
        .setTween(tweenProject2)
        /*.addIndicators({
            name: "3 (duration: 0)"
        }) //add indicators (requires plugin)*/
        .addTo(controller);


    //projects animation SECTION 3

    var tweenProject3 = new TimelineMax()
        .from(".js-img-project3", .5, {
            opacity: "0",
        }).staggerFrom(['.js-title-project3', '.js-description-project3', '.js-btn-project3'], .7, {
            y: "-50",
            opacity: 0
        }, .3);


    var scene = new ScrollMagic.Scene({
            triggerElement: ".js-animate-project3",
            reverse: false

        })
        .setTween(tweenProject3)
        /*.addIndicators({
            name: "4 (duration: 0)"
        }) //add indicators (requires plugin)*/
        .addTo(controller);

    //projects animation SECTION 4

    var tweenProject4 = new TimelineMax()
        .from(".js-img-project4", .5, {
            opacity: "0",
        }).staggerFrom(['.js-title-project4', '.js-description-project4', '.js-btn-project4'], .7, {
            y: "-50",
            opacity: 0
        }, .3);


    var scene = new ScrollMagic.Scene({
            triggerElement: ".js-animate-project4",
            reverse: false

        })
        .setTween(tweenProject4)
        /*.addIndicators({
            name: "5 (duration: 0)"
        }) //add indicators (requires plugin)*/
        .addTo(controller);

    //projects animation SECTION 5

    var tweenProject5 = new TimelineMax()
        .from(".js-img-project5", .5, {
            opacity: "0",
        }).staggerFrom(['.js-title-project5', '.js-description-project5'], .7, {
            y: "-50",
            opacity: 0
        }, .3).staggerFrom('.e-icon-skill', .3, {
            scale: '0',
            y: "40",
            ease: Elastic.easeOut.config(1, 0.5)
        }, .2)
        .from('.js-btn-project5', .7, {
            y: "-50",
            opacity: 0
        });


    var scene = new ScrollMagic.Scene({
            triggerElement: ".js-animate-project5",
            reverse: false

        })
        .setTween(tweenProject5)
        /*.addIndicators({
            name: "5 (duration: 0)"
        }) //add indicators (requires plugin)*/
        .addTo(controller);


    // build tween
    var tweenfloating = TweenMax.staggerFromTo(".js-floating", 1, {
        y: -5,
        ease: Circ.easeInOut
    }, {
        y: 0,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut
    }, .5);

    // build scene
    var scene2 = new ScrollMagic.Scene({
            triggerElement: ".js-animate-project5",
            offset: -50
        })
        .setTween(tweenfloating)
        //.addIndicators({name: "loop"}) // add indicators (requires plugin)
        .addTo(controller);

    //slider sections

 


});