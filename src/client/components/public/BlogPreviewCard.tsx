import * as React from "react";

export default class BlogPreviewCard extends React.Component<
  IBlogPreviewCardProps,
  IBlogPreviewCardState
> {
  render() {
    const { price, comment, time, index } = this.props;

    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">{index}</span>
          <span className="input-group-text">{price}</span>
        </div>
        <span className="input-group-text">{comment}</span>
        <span className="input-group-text">{time}</span>
      </div>
    );
  }
}

interface IBlogPreviewCardProps {
  price: string;
  comment: string;
  time: string;
  index: number;
}

interface IBlogPreviewCardState {}
