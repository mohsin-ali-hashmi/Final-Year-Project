import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./message.css";




const Message = () => {
    const [yourID, setYourID] = useState();

    const [messages, setMessages] = useState([]);

    const [message, setMessage] = useState("");

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect();

        socketRef.current.on("your id", id => {
            setYourID(id);
            console.log("idddd", id)
        })

        socketRef.current.on("message", (message) => {
            console.log("here");
            receivedMessage(message);
        })
    }, []);

    function receivedMessage(message) {
        setMessages(oldMsgs => [...oldMsgs, message]);
    }

    function sendMessage(e) {
        e.preventDefault();
        const messageObject = {
            body: message,
            id: yourID,
        };
        setMessage("");
        socketRef.current.emit("send message", messageObject);
    }

    function handleChange(e) {
        setMessage(e.target.value);
    }

    return ( 
        
        <div className = "m" >
        <div className = "message-container content" >
        <div class = "card-header" > Chat </div> 
        <div className = "message-container " > {
            messages.map((message, index) => {

                if (message.id === yourID) {
                    return ( 
                        <div className = "myrow"
                        key = { index } >
                        <p className = "mymessage" > { message.body } 
                        </p>	

                        </div>
                    )
                }

                return (

                    <div className = "partnerRow"
                    key = { index } >
                    <p className = "partnermessage" > { message.body } </p> 
                    </div>
                )
            })
        } </div> 
        <form onSubmit = { sendMessage } >
        <textarea className = "textArea"
        value = { message }
        onChange = { handleChange }
        placeholder = "Say something..." />
        <button className = "button" > Send </button> 
        </form> 
        </div> 
        </div>
    );
};

export default Message;