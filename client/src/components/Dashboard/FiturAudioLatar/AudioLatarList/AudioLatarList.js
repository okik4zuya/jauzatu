import React from "react";
import { AudioLatarItem } from "../../../";

export default function AudioLatarList({ data, dataAudioLatar, musicList }) {
  console.log(dataAudioLatar);
  console.log(musicList);
  return (
    <>
      <div className="px-4">
        {data.dataFitur.isAudioLatarCustom ? (
          <AudioLatarItem
            data={data}
            dataAudioLatar={data.dataFitur.audioLatar}
            title="Custom"
            artist="Custom"
            url="Custom"
          />
        ) : (
          <div>
            {musicList.map((item) => (
              <AudioLatarItem
                data={data}
                dataAudioLatar={data.dataFitur.audioLatar}
                title={item.title}
                artist={item.artist}
                url={item.url}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
