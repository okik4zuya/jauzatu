import moment from "moment";
import "moment/locale/id";

export default function UcapanReply({ replyName, replyText, createdAt }) {
  return (
    <>
      {replyName || replyText ? (
        <div className="relative w-[90%] bg-white rounded-t-xl rounded-b-xl overflow-hidden  mt-2 mb-2 ml-6 ">
          <div className="py-2 px-4">
            <div className="font-bold">{replyName}</div>
            <div className="mb-2">{replyText}</div>
          </div>
          <div className="bg-gray-50 py-2 px-4 text-gray-600 text-sm">
            {moment(createdAt).fromNow()}
          </div>
        </div>
      ) : null}
    </>
  );
}
