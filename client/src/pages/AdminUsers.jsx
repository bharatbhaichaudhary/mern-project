import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { Link } from "react-router-dom";
import "./adminUser.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const respons = await fetch(
        `http://localhost:9000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await respons.json();
      console.log(data);
    } catch (error) {
      console.log(`user Dlete ${error}`);
    }
    console.log(id);

    getAllUsersData();
  };
  useEffect(() => {
    getAllUsersData();
    console.log(users);
  }, []);

  return (
    <>
      <section>
        <table className="adminUserTeable">
          <thead>
            <tr className="authr">
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody className="autb">
            {users.map((curUser, index) => {
              return (
                <tr key={index}>
                  <td className="adminUserTd">{curUser.username}</td>
                  <td className="adminUserTd">{curUser.email}</td>
                  <td className="adminUserTd">{curUser.phone}</td>
                  <td className="adminUserTd">
                    <Link className="adminUserEdit" to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                  </td>
                  <td className="adminUserTd">
                    <button className="adminUserBut" onClick={() => deleteUser(curUser._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AdminUsers;
