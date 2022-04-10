export default function StatCard({ title, value }) {
  return (
    <>
      <div className="w-[45%] sm:w-[30%]">
        <div className=" rounded-lg shadow-lg overflow-hidden m-2">
          <div className="bg-gray-100 px-4 py-2 text-center font-bold text-sm">
            {title}
          </div>
          <div className="flex bg-gray-50 items-center justify-center w-full">
            <div className="text-4xl font-bold  px-4 py-2">{value}</div>
          </div>
        </div>
      </div>
    </>
  );
}
