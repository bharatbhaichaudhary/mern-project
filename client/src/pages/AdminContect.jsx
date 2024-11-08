import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const AdminContect = () => {
  const [contectData, setContectData] = useState([]);

  const { AuthorizationToken } = useAuth();

  const getContectData = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/admin/contect",{
        method:"GET",
        headers:{
          Authorization: AuthorizationToken,
        }
      })
      const conData = await response.json()
      setContectData(conData)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContectById = async (id) =>{
    try {
      const response = await fetch(`http://localhost:9000/api/admin/contects/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization: AuthorizationToken,
        }
      })
      if(response.ok){
        getContectData();
        toast.success("contect deleted successfuly ")
      }else{
        toast.error(" not contect deleted successfuly  ")
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getContectData();
  }, []);
  return(
  <section>
     <div>
    <h1>Admin Cintect Data</h1>
    {
      contectData.map((e, i)=>{
        return(
          <div key={i}>
            <p>{e.username}</p>
            <p>{e.email}</p>
            <p>{e.message}</p>
            <button onClick={()=> deleteContectById(e._id)}>Delete</button>
          </div>
        )
      })
    }
  </div>;
  </section>
  )
};

export default AdminContect;
