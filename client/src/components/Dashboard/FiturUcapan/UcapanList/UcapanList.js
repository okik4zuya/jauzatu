import { FaFly } from "react-icons/fa";
import { UcapanItem, UcapanForm } from "../../../";

export default function UcapanList({ data, dataUcapan }) {
  // console.log(
  //   dataUcapan.sort(function (a, b) {
  //     return new Date(b.createdAt) - new Date(a.createdAt);
  //   })
  // );

  return (
    <>
      <div className="px-4 py-4 ">
        {/* <UcapanForm data={data} /> */}
        {dataUcapan
          .sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
          .map((item) => (
            <UcapanItem
              id={item._id}
              data={data}
              dataUcapan={dataUcapan}
              name={item.name}
              text={item.text}
              replyName={item.replyName}
              replyText={item.replyText}
              reply={item.reply}
              like={item.like}
              createdAt={item.createdAt}
            />
          ))}
      </div>
    </>
  );
}
