import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex h-3/5 flex-col justify-center items-center text-center">
      <div className="max-w-96">
        <p className="text-bold text-2xl mb-4">Loading...</p>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </div>
  );
}

export default Loading;
