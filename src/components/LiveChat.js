import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../chatSlice";
import { generateRandomMessage, generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage,setLiveMessage]= useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(10),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="ml-2 px-4 bg-slate-100 border border-black rounded-lg w-full h-[400px] overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
    <form className="border border-black w-full p-2 ml-2" onSubmit={(e)=>{
    e.preventDefault();
    console.log(liveMessage)
    dispatch(addMessage({
      name:"Ankit",
      message:liveMessage,
    }))
    setLiveMessage("")
    }}>
      <input className="px-2 w-96" type="text"  value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
      <button className="px-2 mx-2 bg-gray-200">Send</button>
    </form>
    </>
  );
};

export default LiveChat;
