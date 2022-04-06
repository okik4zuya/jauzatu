import { RSVPItem, RSVPForm } from "../../../";

export default function RSVPList({ data, dataRSVP }) {
  return (
    <>
      <div className="shadow-lg rounded-lg overflow-hidden ">
        <div className="bg-gray-200  flex text-md text-gray-800 items-center px-4 py-4 font-bold">
          <div className="w-[50%]">Nama</div>
          <div className="w-[30%] text-center">Jumlah Hadir</div>
          <div className="w-[20%] text-center">Aksi</div>
        </div>
        <div>
          {dataRSVP
            .sort(function (a, b) {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .map((item) => (
              <RSVPItem
                id={item._id}
                data={data}
                dataRSVP={dataRSVP}
                name={item.name}
                confirmation={item.confirmation}
                attendees={item.attendees}
                createdAt={item.createdAt}
              />
            ))}
        </div>
        <div className="bg-gray-200  flex text-md text-gray-800 items-center px-4 py-4 font-bold">
          <div className="w-[50%]">Nama</div>
          <div className="w-[30%] text-center">Jumlah Hadir</div>
          <div className="w-[20%] text-center">Aksi</div>
        </div>
      </div>
    </>
  );
}
