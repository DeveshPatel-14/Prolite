import GroupmanageContext from "./groupmanageContext.js";
import { useState } from "react";

const GroupmanageState = (props) => {
    const host = "http://localhost:5001"
    const groupsInitial = []
    const [groups, setGroups] = useState(groupsInitial)
  
    
  
    const addGroup = async (prjName, prjMember1, prjMember2, prjMember3, prjMember4) => {
      // TODO: API Call
      // API Call 
      const response = await fetch(`${host}/groupmanage/addgroups`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({prjName, prjMember1, prjMember2, prjMember3, prjMember4})
      });
  
      const group = await response.json();
      setGroups(groups.concat(group))
    }
  
    
    return (
      <GroupmanageContext.Provider value={{groups,addGroup}}>
              {props.children}

      </GroupmanageContext.Provider>
    )
  
  }
  export default GroupmanageState;