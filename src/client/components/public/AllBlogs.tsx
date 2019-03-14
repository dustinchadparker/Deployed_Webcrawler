import * as React from "react";
import puppeteer from "puppeteer";
import BlogPreviewCard from "./BlogPreviewCard";

export default class Alldata extends React.Component<
  IAlldataProps,
  IAlldataState
> {
  constructor(props: IAlldataProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      pages: ""
    };
  }

  async componentDidMount() {}

  onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    //GOTTA CHANGE THIS TO FETCH THE DATAAA

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
        <section className="row my-3">
          <BlogPreviewCard
            index={i}
            price={price[i]}
            comment={comment[i]}
            time={time[i]}
          />
        </section>;
      }
      pageStartNums++;
    }

    //closes page; change page to 'browser' if you want it to close browser when done
    browser.close();
  };

  render() {
    return (
      <main className="container">
        <form
          className="form-group mt-5 border border-primary rounded p-3 shadow-lg bg-info"
          onSubmit={this.onSubmit}
        >
          <label>Email For Site</label>
          <input
            type="text"
            value={this.state.email}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ email: e.target.value })
            }
          />
          <label>Password For Site</label>
          <input
            type="text"
            value={this.state.password}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ password: e.target.value })
            }
          />
          <label>Pages To Mine</label>
          <input
            type="number"
            value={this.state.pages}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ pages: e.target.value })
            }
          />
          <button className="btn btn-secondary mt-2 shadow">Email Me!</button>
        </form>
      </main>
    );
  }
}

interface IAlldataProps {}

interface IAlldataState {
  password: string;
  email: string;
  pages: string;
}
