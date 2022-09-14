import React from "react";

function PhoneItem({phone, remove}) {

    return (
        <div className="phone__item">
            <p>{phone.model}</p>
            {console.log("phone")}
            <button onClick={() => remove(phone)}>Delete</button>
        </div>
    );
}

export default PhoneItem;