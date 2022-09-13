import React from "react";

function PhoneItem(props) {
    return (        
        <div className="post">
            <div className="post__content">
                <h3><strong>{props.post.id}</strong> {props.post.title}</h3>
                <p>{props.post.body}</p>
            </div>
            <div className="post__btns">
                <button onClick={() => props.remove(props.post)}>
                    Удалить
                </button>
            </div>
        </div>
    );
}

export default PhoneItem;