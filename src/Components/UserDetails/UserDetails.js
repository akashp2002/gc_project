import "./UserDetails.css";
import CustomButton from "../../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import Details from "../Details/Details";
function UserDetails() {
  return (
    <div className="flex w-full  h-full">
      <div className="w-1/5 bg-blue-500 flex flex-wrap flex-col gap-4 items-start px-8 py-16">
        <h6 className="text-sidebar">Dashboard</h6>
        <h6 className="text-sidebar">Dashboard</h6>
        <h6 className="text-sidebar">Country Management</h6>
        <h6 className="text-sidebar">Store Management</h6>
        <h6 className="text-sidebar">Catagory Management</h6>
        <h6 className="text-sidebar">Product Management</h6>
        <h6 className="text-sidebar">Dashboard</h6>
        <h6 className="text-sidebar">Dashboard</h6>
        <h6 className="text-sidebar">Dashboard</h6>
      </div>
      <div className="w-full flex flex-col gap-3 justify-center items-center py-2 px-8">
        <div className="Banner_btn flex flex-wrap ">
          <Link to="/banner">
            <CustomButton btn_text="Add Banner" bgColor="bg-green-600" />
          </Link>
        </div>
        <div className="Card">
          <div className="Card_head">
            <div className="Card_head_content">
              <h5 class="text-white font-bold mt-1.5">User Details</h5>
              <h5 class="font-bold mt-1.5">Store Details</h5>
            </div>
          </div>
          <div className="flex flex-col gap-8 p-6">
            <div className="flex flex-wrap justify-evenly mt-8 gap-2">
              <CustomButton btn_text="Details" bgColor="bg-blue-600"  />

              <CustomButton btn_text="History" bgColor="bg-blue-600" />

              <CustomButton btn_text="Orders" bgColor="bg-blue-600" />

              <CustomButton  btn_text="Review/Report" bgColor="bg-blue-600" />
            </div>
            <Details/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserDetails;
