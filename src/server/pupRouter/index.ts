import * as express from "express";
import puppeteer from "puppeteer";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //launches a new browser window
    const browser = await puppeteer.launch({
      headless: false
    });
    let pageStartNums = 0;

    const page = await browser.newPage(); //creates new page

    //LOGS IN with username/password
    await page.type("#username", req.query.username, { delay: 10 });
    await page.type("#password", req.query.password, { delay: 10 });
    page.click("input.button1");

    await page.waitForNavigation({ waitUntil: "domcontentloaded" });

    let data:any = {
      price: [],
      comment: [],
      time: [],
      index: []
    };
    //loops through pages
    while (pageStartNums < parseInt(req.query.pages)) {
      //navigates to page and waits for DOMContent
      await page.goto(
        `https://forum.median-xl.com/tradegold.php?sort_id=0&start=${pageStartNums *
          25}`,
        {
          waitUntil: "domcontentloaded"
        }
      );
      //wait time just in case. 1 second seems to be enough. Uncomment if program fails
      // await page.waitFor(1000);

      //gets all prices
      let price = await page.$$eval("div.coins.coins-embed", el =>
        el.map(i => i.innerText)
      );

      //gets all comments
      let comment = await page.$$eval("tr > td:nth-last-of-type(2)", el =>
        el.map(i => i.innerText)
      );

      let time = await page.$$eval("td:nth-child(5)", el =>
        el.map(i => i.innerText)
      );

      //Will cycle through arrays of data and store in stringData
      for (let i = 0; i < price.length; i++) {
        data.index.push([i]);
        data.comment.push(comment[i]);
        data.price.push(price[i]);
        data.time.push(time[i]);
      }
      pageStartNums++;
    }

    //closes page; change page to 'browser' if you want it to close browser when done
    browser.close();
    return data;
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
