import * as React from "react";
import BlogPreviewCard from "./BlogPreviewCard";

export default class Alldata extends React.Component<
  IAlldataProps,
  IAlldataState
> {
  constructor(props: IAlldataProps) {
    super(props);
    this.state = {
      data: {
        price: [],
        index: [],
        comment: [],
        time: []
      },
      username: "",
      password: "",
      pages: ""
    };
  }

  async componentDidMount() {}

  onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = await fetch(
      `/pupRouter/?username=${this.state.username}?password=${this.state.password}?pages=${
        this.state.pages
      }`
    );
    console.log("HEY");
      console.log(JSON.stringify(data));

    //Will cycle through arrays of data and store in stringData
    for (let i = 0; i < this.state.data.price.length; i++) {
      <section className="row my-3">
        <BlogPreviewCard
          index={this.state.data.index[i]}
          price={this.state.data.price[i]}
          comment={this.state.data.comment[i]}
          time={this.state.data.time[i]}
        />
      </section>;
    }
  };

  render() {
    return (
      <main className="container">
        <form
          className="form-group mt-5 border border-primary rounded p-3 shadow-lg bg-info"
          onSubmit={this.onSubmit}
        >
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ username: e.target.value })
            }
          />
          <label>Password</label>
          <input
            type="password"
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
          <button className="btn btn-secondary mt-2 shadow">Go Mining!</button>
        </form>
      </main>
    );
  }
}

interface IAlldataProps {}

interface IAlldataState {
  password: string;
  username: string;
  data: {
    index: Array<string>;
    comment: Array<string>;
    price: Array<string>;
    time: Array<string>;
  };
  pages: string;
}
