import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminUpdete = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const { AuthorizationToken } = useAuth();
  const params = useParams();
  const naviget = useNavigate();

  const getSingleUserData = async () => {
    try {
      const ref = await fetch(
        `http://localhost:9000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const userData = await ref.json();
      setData(userData);
    } catch (error) {
      console.log(`user data update ${error}`);
    }
  };
  useEffect(() => {
    getSingleUserData();
  }, []);

  const hendelChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const hendelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:9000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Update Successfuly ");
        naviget("/admin/user");
      } else {
        toast.error("not Update Successfuly ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={hendelSubmit}>
        <div>
          <label htmlFor="username">USERNAME:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={hendelChange}
          />
        </div>

        <div>
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={hendelChange}
          />
        </div>

        <div>
          <label htmlFor="phone">MOBILE NO:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={hendelChange}
          />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </section>
  );
};

export default AdminUpdete;
