import React from 'react';
import { FaUsers } from "react-icons/fa";

import { IoIosSettings } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { AiFillPieChart } from "react-icons/ai";
import { HiViewList } from "react-icons/hi";



function Header() {
    return (
        <>
            <div className="header">
                <p className="leantaste">Lean<span>Taste</span></p>

                <div className="middle-leantaste">
                    <p><HiViewList size="1.5em" /> Overview</p>
                    <p>< AiFillPieChart /> Clients</p>
                    <p>< FaUsers size="1.5em" /> Users</p>
                </div>


                <div className="last-leantaste">
                    <p><IoIosSettings size="1.5em" /> Settings</p>
                    <p><VscAccount size="1.5em" /> My Account</p>

                    <div className="header-below">

                    </div>

                </div>


            </div>
        </>
    );


}

export default Header;