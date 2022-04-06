import React from "react";
import PojokHadiahItem from "./PojokHadiahItem/PojokHadiahItem";

export default function PojokHadiahList({ data, dataPojokHadiah }) {
  return (
    <>
      <div className="px-4">
        {dataPojokHadiah.map((item) => (
          <PojokHadiahItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            address={item.address}
            contact={item.contact}
            channelType={item.channelType}
            channelName={item.channelName}
            channelNameLainnya={item.channelNameLainnya}
            data={data}
            dataPojokHadiah={dataPojokHadiah}
          />
        ))}
      </div>
    </>
  );
}
