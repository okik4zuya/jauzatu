import React from "react";
import { AudioLatarItem, AudioLatarItemCustom } from "../../../";

export default function AudioLatarList({ data, dataAudioLatar, musicList }) {
  return (
    <>
      <div className="text-center font-bold">
        {data.dataFitur.isAudioLatarCustom ? "Set Custom Audio" : "Pilih Audio"}
      </div>
      <div className="px-4">
        {data.dataFitur.isAudioLatarCustom ? (
          <AudioLatarItemCustom
            data={data}
            dataAudioLatar={data.dataFitur.audioLatar}
            title={data.dataFitur.audioLatar.title}
            artist={data.dataFitur.audioLatar.artist}
            url={data.dataFitur.audioLatar.url}
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
