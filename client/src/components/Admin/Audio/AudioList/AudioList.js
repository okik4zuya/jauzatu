import React from "react";
import { AudioItem } from "../../../";

export default function AudioList({ audioList }) {
  console.log(audioList);
  return (
    <>
      <div>
        {audioList.map((item) => (
          <AudioItem
            key={item._id}
            id={item._id}
            title={item.title}
            artist={item.artist}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
}
