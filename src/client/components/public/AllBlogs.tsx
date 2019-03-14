import * as React from "react";
import BlogPreviewCard from "./BlogPreviewCard";

export default class Alldata extends React.Component<
  IAlldataProps,
  IAlldataState
> {
  constructor(props: IAlldataProps) {
    super(props);
    this.state = {
      price: [],
      index: [],
      comment: [],
      time: [],

      username: "",
      password: "",
      pages: ""
    };
  }

  async componentDidMount() {}

  onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(
      `/pupRouter/?username=${this.state.username}&password=${
        this.state.password
      }&pages=${this.state.pages}`
    )
      .then(response => response.json())
      .then(data => {
        data.index.forEach((item: string, index: number) => {
          this.setState({ index: [item] });
          this.setState({ price: [data.price[index]] });
          this.setState({
            comment: [data.comment[index]]
          });
          this.setState({ time: [data.time[index]] });
        });
      });
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

        {this.state.index.forEach((item: string, index: number) => {
          console.log(this.state.price[index]);
          return (
          <BlogPreviewCard
            index={item}
            price={this.state.price[index]}
            comment={this.state.comment[index]}
            time={this.state.time[index]}
          />
          );
        })}
      </main>
    );
  }
}

interface IAlldataProps {}

interface IAlldataState {
  password: string;
  username: string;
  index: Array<string>;
  comment: Array<string>;
  price: Array<string>;
  time: Array<string>;
  pages: string;
}
