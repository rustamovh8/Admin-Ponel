import img from "../../assets/img/div.MuiStack-root (1).png";
import img1 from "../../assets/img/div.MuiStack-root (2).png";
import img2 from "../../assets/img/div.MuiStack-root.png";
import img3 from "../../assets/img/div.MuiBox-root.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 600 },
  { month: "Apr", value: 800 },
  { month: "May", value: 700 },
  { month: "Jun", value: 900 },
  { month: "Jul", value: 600 },
  { month: "Aug", value: 400 },
  { month: "Sep", value: 500 },
  { month: "Oct", value: 300 },
  { month: "Nov", value: 200 },
  { month: "Dec", value: 400 },
];
import image from "../../assets/Bitmap.svg"

const Home = () => {
  return (
    <div className="p-[28px] flex flex-col gap-[40px] sm:gap-[24px] sm:w-[400px]">
      <h1 className="text-[#111927] text-[24px] font-[700] sm:text-[20px]">Dashboard</h1>
      <div className="flex items-start gap-[16px] sm:flex-col">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-start gap-[12px] sm:flex-wrap">
            <img className="sm:w-[150px]" src={img2} alt="" />
            <img className="sm:w-[150px]" src={img} alt="" />
            <img className="sm:w-[150px]" src={img1} alt="" />
          </div>
          <div className="border-[2px] rounded-[4px] p-[13px_20px] flex flex-col gap-[10px] sm:hidden">
            <h1 className="text-[#111927] text-[24px] font-[600] pl-[20px]">
              Sales Revenue
            </h1>
            <LineChart width={650} height={320} data={data}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Line
                type="linear"
                dataKey="value"
                stroke="#1E5EFF"
                strokeWidth={3}
              />
            </LineChart>
          </div>
          <div className="hidden sm:border-[2px] sm:rounded-[4px] sm:p-[14px_30px_14px_0px] sm:flex sm:flex-col sm:gap-[10px]">
            <h1 className="text-[#111927] text-[16px] font-[600] pl-[20px]">
              Sales Revenue
            </h1>
            <LineChart width={320} height={170} data={data}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="linear"
                dataKey="value"
                stroke="#1E5EFF"
                strokeWidth={3}
              />
            </LineChart>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] p-[12px_16px_20px_16px] items-center rounded-[4px] w-[311px] border-[2px] sm:w-[353px]">
          <div className="flex justify-between gap-[50px] items-center">
            <h1 className="text-[#111927] text-[16px] font-[600] ">Top selling products</h1>
            <h1 className="text-[#111927] text-[13px] font-[600] ">See All</h1>
          </div>
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">
                  Healthcare Erbology
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  Accessories
                </h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">
                  13,153
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  in sales
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">
                  Healthcare Erbology
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  Accessories
                </h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">
                  13,153
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  in sales
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">
                  Healthcare Erbology
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  Accessories
                </h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">
                  13,153
                </h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">
                  in sales
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">Healthcare Erbology</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">Accessories</h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">13,153</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">in sales</h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">Healthcare Erbology</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">Accessories</h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">13,153</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">in sales</h1>
              </div>
            </div>
            <div className="flex items-center gap-[12px] self-stretch">
              <img src={img3} alt="" />
              <div className="flex flex-col gap-[2px] items-start">
                <h1 className="text-[#111927] text-[14px] font-[500]">Healthcare Erbology</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">Accessories</h1>
              </div>
              <div className="flex flex-col justify-center items-end">
                <h1 className="text-[#10B981] text-[14px] font-[500]">13,153</h1>
                <h1 className="text-[#6C737F] text-[14px] font-[400]">in sales</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center sm:items-start sm:flex-col sm:gap-[24px]">
        <div className="w-[48%] border-[2px] rounded-[4px] p-[20px] sm:w-[353px]">
          <h1 className="text-[24px] font-sans font-[500] sm:text-[20px]">
            Recent Transactions
          </h1>
          <table className="">
            <thead>
              <tr className="border-b-[2px]">
                <th className="p-[14px_0px] text-[18px] text-[gray] font-[400] text-start sm:text-[16px]">
                  Name
                </th>
                <th className="p-[14px_0px] text-[18px] text-[gray] font-[400] text-center sm:text-[16px]">
                  Date
                </th>
                <th className="p-[14px_0px] text-[18px] text-[gray] font-[400] text-right sm:text-right sm:text-[16px]">
                  Amount
                </th>
                <th className="p-[14px_0px] text-[18px] text-[gray] font-[400] text-right sm:text-right sm:text-[16px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[18px] font-[500] p-[14px_0px] w-[24%] sm:w-[100%] sm:text-[14px]">
                  Jagarnath S.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%] sm:text-[14px]">
                  24.05.2023
                </td>
                <td className="text-[18px] font-[500] text-right p-[0px_15px] sm:text-[14px]">
                  $124.97 
                </td>
                <td className=" text-right">
                  <button className="text-[#06A561] p-[2px_8px] w-[70px] bg-[#C4F8E2] rounded-md">
                    Paid
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%] sm:text-[14px]">
                  Anand G.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%] sm:text-[14px]">
                  23.05.2023
                </td>
                <td className="text-[18px] font-[500] p-[0px_15px] text-right sm:text-[14px]">
                  $55.42
                </td>
                <td className="text-right w-[30%]">
                  <button className="bg-[#E6E9F4] w-[70px] p-[2px_8px] text-[#5A607F] rounded-md">
                    Pending
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%] sm:text-[14px]">
                  Kartik S.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%] sm:text-[14px]">
                  23.05.2023
                </td>
                <td className="text-[18px] font-[500] text-right sm:text-[14px] p-[0px_15px]">
                  $89.90
                </td>
                <td className="text-right w-[30%]">
                  <button className="bg-[#E6E9F4] w-[70px] p-[2px_8px] text-[#5A607F] rounded-md">
                    Pending
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%] sm:text-[14px]">
                  Rakesh S.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%] sm:text-[14px]">
                  22.05.2023
                </td>
                <td className="text-[18px] font-[500] text-right sm:text-[14px] p-[0px_15px]">
                  $144.94
                </td>
                <td className="text-right w-[30%]">
                  <button className="bg-[#E6E9F4] w-[70px] p-[2px_8px] text-[#5A607F] rounded-md">
                    Pending
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[48%] border-[2px] rounded-[4px] p-[20px] sm:w-[353px]">
          <h1 className="text-[24px] font-sans font-[500] sm:text-[20px]">
            Top Products by Units Sold
          </h1>
          <table className="">
            <thead>
              <tr className="border-b-[2px]">
                <th className="p-[14px_0px] text-[18px] text-[gray] font-[400] text-start sm:text-[14px]">
                  Name
                </th>
                <th className="p-[14px_0px] text-[18px] text-[gray] font-[400] text-center sm:text-[14px]">
                  Price

                </th>
                <th className="p-[14px_0px] text-[18px] text-[gray] font-[400] text-center sm:text-[14px]">
                  Units
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%] sm:w-[55%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500] sm:text-[14px]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%] sm:text-[14px]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500] sm:text-[14px]">
                  204
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%] ">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500] sm:text-[14px]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%] sm:text-[14px]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500] sm:text-[14px]">
                  204
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500] sm:text-[14px]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%] sm:text-[14px]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500] sm:text-[14px]  ">
                  204
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500] sm:text-[14px]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%] sm:text-[14px]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500] sm:text-[14px]">
                  204
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
