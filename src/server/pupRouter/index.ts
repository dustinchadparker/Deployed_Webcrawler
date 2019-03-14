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
      await page.type("#username", this.state.email, { delay: 10 });
      await page.type("#password", this.state.password, { delay: 10 });
      page.click("input.button1");
  
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
  
      let stringData = "";
      //loops through pages
      while (pageStartNums < parseInt(this.state.pages)) {
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
  
      let time = await page.$$eval(
        "td:nth-child(5)",
        el => el.map(i => i.innerText)
      );
      
        //Will cycle through arrays of data and store in stringData
        for (let i = 0; i < price.length; i++) {
            stringData +=
            "\n\n" +
            i +
            ":::" +
            "\n" +
            "Coins: " +
            price[i] +
            "\n" +
            "Comment: " +
            comment[i] +
            "\n" +
            "Time: " +
            time[i];
        }
        pageStartNums++;
      }
  
      //closes page; change page to 'browser' if you want it to close browser when done
      browser.close();
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
