import React from 'react';
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Srujay</h2>
                <p>How are you</p>
            </div>
        </div>
    )
}

export default SidebarChat
