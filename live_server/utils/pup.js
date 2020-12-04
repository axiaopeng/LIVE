const puppeteer = require('puppeteer')

let scrape = async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://tiyu.baidu.com/match/%E8%8B%B1%E8%B6%85/tab/%E8%B5%9B%E7%A8%8B');

    const result = await page.evaluate(() => {
        let data = []; // 初始化空数组来存储数据
        let elements = document.querySelectorAll('.wa-tiyu-rank-football-record'); // 获取所有书籍元素

        for (var element of elements) { // 循环
            let arr = []
            let childs = element.childNodes
            childs.forEach(item => {
                arr.push(item.innerHTML)
            })

            data.push(arr); // 存入数组
        }

        return data; // 返回数据
    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});