import MyForm from "components/AnnouncementForm.jsx";
import AnnouncementContext from "./announcementContext.js";
import { useState } from "react";
import Popup from "components/Popup.jsx";

const AnnouncementState = (props) => {
    const host = "http://localhost:5001"
    const announcementInitial = []
    const [announcements, setAnnouncement] = useState(announcementInitial)
  
    
  
    // Add a Note
    const addAnnouncement = async (titles, names, emails, messages) => {
      // TODO: API Call
      // API Call 
      const response = await fetch(`${host}/announcement/addannouncement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({titles, names, emails, messages})
      });
  
      const announcement = await response.json();
      setAnnouncement(announcements.concat(announcement))
    }
  
    
    return (
      <AnnouncementContext.Provider value={{announcements,addAnnouncement}}>
              {props.children}

      </AnnouncementContext.Provider>
    )
  
  }
  export default AnnouncementState;