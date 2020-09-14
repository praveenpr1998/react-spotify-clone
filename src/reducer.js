export const initialState={
    user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  playlistid:`37i9dQZEVXbMDoHDwVN2tF`
    //token:'BQDelBrzBktmCsz5siusGK_NdJ3bbmqEq9NycvwLZJDd59U_i-8NVmB56Ehdyq03oKfDpo3gWTye74oKKxUUZ20Fo-_3IFA4WBxwdzv-T0hI59eey5C52G049bdhm2oDmjhuuFRO48t6_ONmy36IMLTlRCFfesLnnQoVTNVcsi-ahIFG'
};

const reducer=(state,action)=>{
    switch(action.type){
        case "SET_USER":
            return {
              ...state,
              user: action.user,
            };
      
          case "SET_PLAYING":
            return {
              ...state,
              playing: action.playing,
            };
      
          case "SET_ITEM":
            return {
              ...state,
              item: action.item,
            };
      
          case "SET_DISCOVER_WEEKLY":
            return {
              ...state,
              discover_weekly: action.discover_weekly,
            };
      
          case "SET_TOP_ARTISTS":
            return {
              ...state,
              top_artists: action.top_artists,
            };
      
          case "SET_TOKEN":
            return {
              ...state,
              token: action.token,
            };
      
          case "SET_SPOTIFY":
            return {
              ...state,
              spotify: action.spotify,
            };
      
          case "SET_PLAYLISTS":
            return {
              ...state,
              playlist: action.playlist,
            };
            case "SET_PLAYLISTID":
              return {
                ...state,
                playlistid: action.playlistid,
              };
        
            default:return state
    }
}
export default reducer;