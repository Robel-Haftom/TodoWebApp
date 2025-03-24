import { Link } from "react-router-dom";
import { calendar } from "../assets/assets";
import { useRef, useState } from "react";

const AddNewTask = () => {
  const [selectedImage, setSelectedImage] = useState();
  const fileInputRef = useRef();

  const handleSelectedImage = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className="p-4 w-full mt-8">
      <div className="flex flex-col justify-evenly gap-4 shadow-2xl border border-gray-500 px-8 py-4 rounded-md">
        <div className="flex items-center justify-between py-1">
          <p>Add new task</p>
          <Link to="/">
            <p>Go Back</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2 shadow-2xl border border-gray-500 px-8 py-3  rounded-md">
          <p className="font-semibold">Title</p>
          <input
            type="text"
            className="focus:outline-none px-4 max-w-6/10 border border-gray-400  rounded-sm py-1"
          />
          <p className="font-semibold">Date</p>
          <input
            type="date"
            className="focus:outline-none px-4 max-w-6/10 border border-gray-400  rounded-sm py-1"
          />
          <p className="font-semibold">Priorities</p>
          <div className="max-w-6/10 flex items-center justify-start gap-8">
            <div className="flex gap-2 items-center ">
              <p>* Extreme</p>
              <input type="checkbox" className="scale-120 px-4" />
            </div>
            <div className="flex gap-2 items-center ">
              <p>Moderate</p>
              <input type="checkbox" className="scale-120 px-4" />
            </div>
            <div className="flex gap-2 items-center ">
              <p>Low</p>
              <input type="checkbox" className="scale-120 px-4" />
            </div>
          </div>
          <div className="flex gap-12 w-full items-center">
            <div className=" flex-1 flex flex-col gap-2 ">
              <p className="font-semibold">Task Description</p>
              <textarea
                className="focus:outline-none px-4 border border-gray-400  rounded-sm py-1"
                cols="30"
                rows="8"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 px-4 ">
              <p className="font-semibold">Upload Image</p>
              <div className="flex flex-col items-center justify-center">
                {selectedImage ? (
                  <div className="flex flex-col items-center justify-between gap-2 border border-gray-300 cursor-pointer px-4 py-1 rounded-lg">
                    <img src={selectedImage} className="w-40 h-40" />
                    <button
                      onClick={() => fileInputRef.current.click()}
                      className="border border-black px-2 py-1 rounded-lg cursor-pointer hover:opacity-50"
                    >
                      Change Image
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="imageLoader"
                    className="border border-gray-300 cursor-pointer p-4 rounded-lg"
                  >
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <img src={calendar} alt="image loader" className="w-20" />
                      <p>Drag and drop files here</p>
                      <button className="border border-black px-4 py-2 rounded-lg cursor-pointer hover:opacity-50">
                        Browse
                      </button>
                    </div>
                  </label>
                )}
              </div>
              <input
                id="imageLoader"
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => handleSelectedImage(e)}
              />
            </div>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <button className="rounded bg-teal-300 text-white font-semibold px-5 py-2 hover:text-teal-300 hover:bg-white hover:shadow-md border-teal-300 border transition-all cursor-pointer">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTask;
