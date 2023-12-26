import React, { useState, useEffect } from "react";
import CustomButton from "../../CustomButton/CustomButton";
import img from "../../Assets/user.jpg";
function Details() {
    const [details, setDetails] = useState([]);
    useEffect(() => {
      setDetails([
        {
          Name: "Akash",
          User_Name: "akash123",
          email: "akash123",
          phone: "+91 9876543456",
          id: "Adhar",
          id_Number: "5645555655566",
          address: [
            {
              house_Name: "house",
              place: "kannur",
              State: "kannur,kerala",
              pin: "670112",
            },
          ],
        },
      ]);
    }, []);
  return (
    <div className="flex flex-col gap-4 w-full">
    <div className="flex flex-wrap gap-8 w-full">
      <img src={img} alt="alt" className="img-profile"></img>
      {details.map((item) => (
        <div className="flex flex-col gap-2">
          <h4 className="text-div">Name :{item.Name}</h4>
          <h4 className="text-div">User : {item.User_Name}</h4>
          <h4 className="text-div">gmail : {item.email}</h4>
          <h4 className="text-div">Phone :{item.phone}</h4>
        </div>
      ))}
      <CustomButton btn_text="Block" bgColor="bg-red-600" />
    </div>
    <div className="flex flex-col gap-4">
      {details.map((item) => (
        <div key={item.User_Name} className="flex flex-col gap-2">
          <h4 className="text-div text-bold mb-1">Verification :</h4>
          <h4 className="text-div">ID Type : {item.id}</h4>
          <h4 className="text-div">ID Number : {item.id_Number}</h4>
        </div>
      ))}
      {details.map((item) => (
        <div key={item.User_Name} className="flex flex-col gap-2">
          <h4 className="text-div text-bold mb-1">Address :</h4>
          {item.address.map((addressItem, index) => (
            <div key={index}>
              <h4 className="text-div">{addressItem.place}</h4>
              <h4 className="text-div">{addressItem.State}</h4>
              <h4 className="text-div"> {addressItem.pin}</h4>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Details