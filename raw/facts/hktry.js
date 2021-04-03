let puppeteer = require("puppeteer");
let { codes } = require("./code");
let { email, password } = require("./secrets");
let browserPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
})
let gtab;
browserPromise
    .then(function(browser) {
        let newtabPromise = browser.newPage();
        return newtabPromise;
    })
    .then(function(npage) {
        gtab = npage;
        let gotoHackerRankLogInPromise = gtab.goto("https://www.hackerrank.com/auth/login");
        return gotoHackerRankLogInPromise;
    })
    .then(() => {
        let EmailWillTypedPromise = gtab.type('input[placeholder="Your username or email"]', email);
        EmailWillTypedPromise.then(() => {
            let passwordWillBeTypedPromise = gtab.type('input[placeholder="Your password"]', password);
            passwordWillBeTypedPromise.then(() => {
                let EnterWillBePressedPromise = gtab.keyboard.press("Enter")
                return EnterWillBePressedPromise;
            })
        })
    })
    .then(function() {
        let ipkitWillBeClicked = waitandclick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
        return ipkitWillBeClicked;
    })
    .then(function() {
        let seechalangeWillBeClicked = waitandclick(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-primary.ui-btn-link.ui-btn-styled");
        return seechalangeWillBeClicked;

    })
    .then(function() {
        let url = gtab.url();
        return url;
    }).then(function(url) {
        let quesobj = codes[0];
        let questionWillBeSolvedPromise = questionSolver(quesUrl, quesobj.qname, quesobj.soln)


    })

function waitandclick(selector) {
    return new Promise(function(resolve, reject) {

        let waitforselector = gtab.waitForSelector(selector);
        waitforselector.then(function() {
            let elementclickedPromise = gtab.click(selector);
            elementclickedPromise.then(function() {
                resolve("clicked");
            })

        })
    })
}

function questionSolver(url, ques, code) {
    return new Promise(function(resolve, request) {

    })
}