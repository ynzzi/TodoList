import React from "react";
import dayjs from 'dayjs';

function Header(){
    const Date = dayjs().format('YYYY / MM / DD dddd');
    return(
        <div className="Header">
            <h1>{Date}</h1>
        </div>
    )
}

export default Header;