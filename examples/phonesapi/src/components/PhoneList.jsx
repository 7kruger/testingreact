import React from "react";
import PhoneItem from "./PhoneItem";

function PhoneList({ phones, remove }) {
    return (
        <div>
            <h3>Phones</h3>
            {phones.map(phone =>
                <PhoneItem phone={phone} key={phone.id} remove={remove} />
            )}
        </div>
    )
}

export default PhoneList;