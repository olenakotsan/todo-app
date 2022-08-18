import React from "react";

function Container({ children }) {
  return (
    <div className="bg-purple-300 rounded-3xl text-zinc-600 max-w-[650px] w-5/6 mx-auto my-20 p-4">
      {children}
    </div>
  );
}

export default Container;
