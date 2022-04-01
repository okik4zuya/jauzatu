import { useState } from "react";
import { LoveJourneyItem } from "../../../";

export default function LoveJourneyList({ data, dataLoveJourney }) {
  return (
    <>
      <div className="px-4">
        {dataLoveJourney.map((item) => (
          <LoveJourneyItem
            data={data}
            dataLoveJourney={dataLoveJourney}
            id={item._id}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </>
  );
}
