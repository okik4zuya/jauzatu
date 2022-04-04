import { GaleriItem } from "../../../";

export default function GaleriList({ data, dataGaleri }) {
  console.log(data);
  console.log(dataGaleri);
  return (
    <>
      <div className="px-4">
        {dataGaleri.map((item) => (
          <GaleriItem
            key={item._id}
            id={item._id}
            image={item.image}
            data={data}
            dataGaleri={dataGaleri}
          />
        ))}
      </div>
    </>
  );
}
