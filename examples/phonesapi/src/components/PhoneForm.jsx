import React, { useState } from "react";

function PhoneForm({create}) {

    const [phone, setPhone] = useState({model: "", price: 0});

    function createPhone() {
        create(phone);
        setPhone({model: "", price: 0});
    }

    return (
        <div>
            <div>
                <input
                    value={phone.model}
                    onChange={event => setPhone({...phone, model: event.target.value})}
                    type="text" 
                    placeholder="phone model"
                />
                <input
                    value={phone.price}
                    onChange={event => setPhone({...phone, price: event.target.value})}
                    type="number"
                />
                <button onClick={() => createPhone()}>Add phone</button>
            </div>
        </div>
    )
}

export default PhoneForm;