import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function report() {
  return (
    <>
      <div className="report">
        <ul className="records">
          <p>Say Restaurant</p>
          <p className="color">Updated 1 day ago</p>
        </ul>

        <ul className="record1">
          <p>242534523 Frw</p>
          <p className="color">on 23.24.2022</p>
        </ul>

        <ul className="record2">
          <p>
            <AiFillEye color="#0B6041" />
          </p>
        </ul>

        <ul className="record3">
          <button>RESTO</button>
          <BsThreeDotsVertical color="#746F6F" />
        </ul>
      </div>
    </>
  );
}

export default report;
