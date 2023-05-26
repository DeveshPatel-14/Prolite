import ManagefacultyContext from "./managefacultyContext.js";
import { useState } from "react";

const ManagefacultyState = (props) => {
    const host = "http://localhost:5001"
    const faculty = []
    const [faculties, setFaculties] = useState(faculty)

  const Getfaculty = async () => {
    // API Call 
    const response = await fetch(`${host}/managefaculty/getfaculty`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const json = await response.json() 
    setFaculties(json)
  }


    const addfaculty = async (teacherName) => {
      // TODO: API Call
      // API Call 
      const response = await fetch(`${host}/managefaculty/addfaculty`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({teacherName})
      });
  
      const faculty = await response.json();
      setFaculties(faculties.concat(faculty))
    }
  
   const editFaculty = async (id,teachername) => {

    // API Call 

    const response = await fetch(`${host}/managefaculty/updatefaculty/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id,teachername})
    });
    
    const json = await response.json();

    let newFaculties = JSON.parse(JSON.stringify(faculties))
    
    // Logic to edit in client
    for (let index = 0; index < newFaculties.length; index++) {
      const element = newFaculties[index];
      if (element._id === id) {
        newFaculties[index].teacherName = teachername;
        break; 
      }
    }  


    setFaculties(newFaculties);
  }

  const deleteFaculty = async (id) => {
    // API Call
    const response = await fetch(`${host}/managefaculty/deletefaculty/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const json = response.json(); 
    const newFaculty = faculties.filter((faculty) => { return faculty._id !== id })
    setFaculties(newFaculty)
  }
  
  
    
    return (
      <ManagefacultyContext.Provider value={{faculty,editFaculty, addfaculty, deleteFaculty, Getfaculty}}>
          {props.children}

      </ManagefacultyContext.Provider>
    )
  
  }
  export default ManagefacultyState;