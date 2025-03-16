import React from "react";

function Footer() {
  return (
    <div className="py-5">
      <div className="h-[1px] w-full bg-gray-700"></div>
      <div className="flex flex-col items-center justify-center opacity-70 mt-3">
        <h1 className="text-white">
          Designed and Developed by{" "}
          <span className="text-yellow-300">Nguyen Quoc Hung</span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
