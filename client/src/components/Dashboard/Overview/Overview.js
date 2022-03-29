import { useDispatch, useSelector } from "react-redux";
import { FrameDashboard, BuatUndangan, InfoUndangan } from "../../";
import { FaUserCircle } from "react-icons/fa";

export default function Overview({ data }) {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard);
  const { isCreated, active } = layout;

  const screen = window.screen.width;
  return (
    <>
      <FrameDashboard title="Overview">
        <div className="flex">
          <div
            className={` h-[160px] rounded-lg shadow-md w-full sm:w-[49%] mb-2 "
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="relative top-6">
                <FaUserCircle className="h-[40px] w-[40px] text-gray-300" />
              </div>
              <div className="relative top-6 text-center">duck@duck.go</div>
              <div className="relative top-6 badge bg-yellow-200 text-gold">
                Akun: Gold
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col items-center bg-white shadow-md rounded-lg h-[160px] w-full sm:w-[49%] text-sm p-1 "
            }`}
          >
            <div className="w-3/4 relative top-4 text-center ">
              Saat ini anda berada dalam paket Silver. Untuk upgrade akun
              silahkan hubungi kami.
            </div>
            <div className="mt-6 grid place-items-center">
              <button type="button" class="secondary__button">
                Info Paket
              </button>
              <button type="button" class="primary__button">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </FrameDashboard>
    </>
  );
}
