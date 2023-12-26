import React from "react";
import CustomButton from '../../../CustomButton/CustomButton'
import './Banner.css'
function Banner() {
  return (
    <div p-3>
      <div className="flex flex-col  justify-center items-center py-8 gap-7">
        <h1 className="text-4xl"> Add Banner</h1>
        <div class="file_input flex items-center justify-center">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-[13rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  "
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="banner_img w-11 h-11 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg> 
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <div className="mb-4 w-full flex flex-col justify-center items-center ">
          <div className="flex pr-[52rem]">
        <label
          htmlFor="heading"
          className=" text-xl font-medium text-gray-600"
        >
          Heading
        </label>
        </div>
        <input
          type="text"
          id="heading"
          className="heading_input  mt-1 p-2  border rounded-md"
        />
      </div>
      <div className="mb-4  w-full flex flex-col justify-center items-center">
      <div className="flex pr-[51rem]">
        <label
          htmlFor="description"
          className=" text-xl font-medium  text-gray-600"
        >
          Description
        </label>
        </div>
        <textarea
          id="description"
          rows="3"
          className="desc_input mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <CustomButton btn_text="Save Banner" bgColor="bg-blue-800" />
      </div>
    </div>
  );
}

export default Banner;
