import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOptions';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {  useDataLayerValue} from './DataLayer';

function Sidebar({spotify}) {
    const [{playlist}]=useDataLayerValue();

    console.log('id');
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
            <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__option">PLAYLISTS</strong>
      <hr />
    {playlist?.items?.map((playlists)=>(
         <SidebarOption option={playlists.name} id={playlists.id} spotify={spotify}/>
    ))}
    
        </div>
    )
}

export default Sidebar
