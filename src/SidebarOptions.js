import React from 'react'
import './SidebarOptions.css';
import {  useDataLayerValue} from './DataLayer';

function SidebarOptions({option,Icon,id,spotify}) {

    const [{ playlistid}, dispatch] = useDataLayerValue();

    const setPlaylist=()=>{
        console.log('idd',id);
      dispatch({
          type:"SET_PLAYLISTID",
          playlistid:id
      })  
      spotify.getPlaylist(id).then((response) =>
      {
    dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly:response
      })
    }
    );
      console.log(playlistid);  
    };

    return (
        <div className="sidebarOption" onClick={(option!=='New Playlist')?setPlaylist:null}>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon?<h4>{option}</h4>:<p>{option}</p>}
        </div>
    )
}

export default SidebarOptions;
