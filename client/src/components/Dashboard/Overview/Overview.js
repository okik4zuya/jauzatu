import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FrameDashboard, BuatUndangan, InfoUndangan } from "../../";
import { FaUserCircle } from "react-icons/fa";

export default function Overview({ data }) {
  const dispatch = useDispatch();
  const [color, setColor] = useState({
    bgPrimary: "bg-zinc-100",
    bgSecondary: "bg-zinc-200",
    text: "text-zinc-800",
  });
  const layout = useSelector((state) => state.dashboard);
  const { isCreated, active } = layout;

  const { userInfo } = useSelector((state) => state.userLogin);

  console.log(userInfo.accountType);

  useEffect(() => {
    if (userInfo.accountType === "Silver") {
      setColor({
        bgPrimary: "bg-zinc-100",
        bgSecondary: "bg-zinc-200",
        text: "text-zinc-500",
      });
    } else if (userInfo.accountType === "Gold") {
      setColor({
        bgPrimary: "bg-yellow-300",
        bgSecondary: "bg-gold",
        text: "text-white",
      });
    } else if (userInfo.accountType === "Platinum") {
      setColor({
        bgPrimary: "bg-zinc-100",
        bgSecondary: "bg-zinc-200",
        text: "text-zinc-100",
      });
    }
  }, []);

  console.log(userInfo);

  const screen = window.screen.width;
  return (
    <>
      <FrameDashboard title="Overview">
        <div className="flex">
          <div
            className={` ${color.bgPrimary} h-[160px] rounded-lg shadow-md w-full mb-2 "
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="relative top-6">
                <FaUserCircle className="h-[40px] w-[40px] text-gray-300" />
              </div>
              <div className="relative top-6 text-center">duck@duck.go</div>
              <div
                className={`relative top-6 badge ${color.bgSecondary} ${color.text}`}
              >
                {userInfo.accountType}
              </div>
            </div>
          </div>
        </div>
      </FrameDashboard>
    </>
  );
}
