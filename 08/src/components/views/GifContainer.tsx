import * as React from "react";

interface PropTypes {
  gif: Gif;
}

const GifContainer = ({ gif }: PropTypes): JSX.Element => {
  return (
    <div>
      <img src={gif.images.fixed_width_downsampled.url} />
      <p>{gif.title}</p>
    </div>
  );
};

export default GifContainer;
