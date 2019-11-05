const puppet = require('puppeteer');
const fs = require('fs');
const _ = require('lodash')

let links = []

let scraped = [];

let startUrl = '';

let browser = false;

let start = async (link) => {

    if(link.includes('?')){
        return;
    }

    if(link.includes('#')){
        return;
    }

    if(link.indexOf(startUrl) === -1){
        return;
    }

    if(link.indexOf('mailto') > -1 || scraped.includes(link)){
        return
    }

    scraped.push(link)

    if(link.indexOf('set-') > -1) {
        return;
    }

    if(link.indexOf('words/') > -1) {
        return;
    }

    if(link.indexOf('blog/') > -1) {
        return;
    }

    if(link.indexOf('/meanings/') > -1) {
        return;
    }

    if(!browser) {
        browser = await puppet.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    }

    const page = await browser.newPage();

    await page.goto(link, {
        waitUntil: 'networkidle2'
    });

    let results = await page.$$eval('a', as => as.map(a => {
        return a.href;
    }));

    page.close();

    let timer = 1;

    results.map(a=>{
        timer++;
        setTimeout(()=>{
            start(a)
        }, timer*500)
    })

    scraped.sort()

    return links;
}

module.exports = (url) => {
    startUrl = url
    start(url)
}

setInterval(()=>{
    let unsort = _.uniq(scraped)
    unsort.sort()
    console.log(unsort.length)
    fs.writeFile(__dirname + '/public/sitemap.xml', save(unsort), (err,data)=>{})
}, 5000)

let save = (links) => {
    var map = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    links.forEach(link => {
        map += '<url><loc>' + link + '</loc><priority>0.5</priority></url>\n';
    });

    map += '</urlset>';

    return map;
}