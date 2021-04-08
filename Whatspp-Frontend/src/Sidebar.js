import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon  from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat'
function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src='F:\image\Vai\Photos\Mylove(43).jpg'/>
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
               

                </div>
            </div>
            <div className="sidebar__search">
               <div className="sidebar__searchcontainer">
                   <SearchOutlined/>
                   <input placeholder="Search or start a new chat" type="text" />
                   </div> 
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default sidebar
