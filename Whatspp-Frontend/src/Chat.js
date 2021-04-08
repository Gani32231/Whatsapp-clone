import React from 'react'
import './Chat.css'
import { Avatar,IconButton } from "@material-ui/core"
import {SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic";
function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h2>Srujay</h2>
                    <p>Last seen</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <div className="chat__message">
                <p>
                    <span className="chat__name">Ganesh</span>
                    Hiii
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                </div>
                <div className="chat__message chat__reciever">
                <p>
                    <span className="chat__name">Srujay</span>
                    Hi
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                </div>
                <div className="chat__message">
                <p>
                    <span className="chat__name">Ganesh</span>
                    How are you
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                </div>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a Message" type="text"/>
                    <button type="submit">Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
