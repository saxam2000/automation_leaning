let puppeteer = require("puppeteer");
let browserPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
});
let gtab;
browserPromise.then(function(browser) {
        let newTabPromise = browser.newPage();
        return newTabPromise;
    }).then(function(newTab) {
        gtab = newTab;
        let gotohackerrankloginpromise = newTab.goto("https://www.hackerrank.com/auth/login");
        return gotohackerrankloginpromise
    }).then(function() {
        let emailIdTypedPromise = gtab.type('input[placeholder="Your username or email"]', "tajec29313@dwgtcm.com", { delay: 10 })
        return emailIdTypedPromise

    }).then(function() {
        let passwordinputPromise = gtab.type('input[placeholder="Your password"]', "Shaktimaan1234@", { delay: 10 })
        return passwordinputPromise;
    }).then(function() {
        let enterWillBePressed = gtab.keyboard.press("Enter");
        let getnextelementpromise = gtab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled", { visible: true });
        let p1 = Promise.all([enterWillBePressed, getnextelementpromise]);
        return p1;

    })
    .then(function() {
        let getnextelementpromise = gtab.waitForSelector(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled", { visible: true })
        let ipkitWillBeClicked = gtab.click(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
        let p2 = Promise.all([ipkitWillBeClicked, getnextelementpromise, gtab.waitForNavigation({ waitUntil: "domcontentloaded" })]);
        return p2;
    })
    .then(function() {
        let seechalangeWillBeClicked = gtab.click(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
        let getnextelementpromise = gtab.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled", { visible: true })
        let p3 = Promise.all([seechalangeWillBeClicked, gtab.waitForNavigation({ waitUntil: "domcontentloaded" }), getnextelementpromise]);
        return p3;

    })
    // .catch(function(err) {
    //     console.log()
    // })
    .then(function() {
        let SolveChallengeWillBeClickedPromise = gtab.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
        return SolveChallengeWillBeClickedPromise;
    })
    .then(function() {
        console.log("ques reached");
    })