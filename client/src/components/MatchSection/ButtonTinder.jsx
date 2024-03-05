// import React from "react";
import { Heart, ChevronRight, X } from "lucide-react";

const ButtonTinder = () => {
  return (
    <div className="min-w-full m-auto flex justify-between p-6">
      <button className="btn btn-circle btn-outline text-red-600 bg-[#0000007a] size-12 hover:bg-[#ffffffb7] hover:text-red-600 hover:border-red-600">
        <X />
      </button>
      <button className="btn btn-circle btn-outline text-pink-600 size-12 bg-[#0000007a] hover:bg-[#ffffffb7] hover:text-pink-600 hover:border-pink-600">
        <Heart />
      </button>
      <button className="btn btn-circle btn-outline text-green-600 size-12 bg-[#0000007a] hover:bg-[#ffffffb7] hover:text-green-600 hover:border-green-600">
        <ChevronRight />
      </button>
    </div>
  );
};

export default ButtonTinder;
