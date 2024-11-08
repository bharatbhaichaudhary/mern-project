import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa";
import { FaMessage } from 'react-icons/fa6';
import { useAuth } from '../../store/Auth';
import './adminLayout.css'

const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  console.log(user.isAdmin);
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/" />
  }
  return (
    <>
    <section className='admin'>
    <header className='admin_header'>
        <div className='admin_main'>
            <nav className='admin_nav'>
                <ul>
                    <li><NavLink className="admin_link" to="/admin/user"><FaUser /> User</NavLink></li>
                    <li><NavLink className="admin_link" to="/admin/contects"><FaMessage /> Contect</NavLink></li>
                    <li><NavLink className="admin_link" to="/servise"><FaRegListAlt /> Servise</NavLink></li>
                    <li><NavLink className="admin_link" to="/"><FaHome /> Home</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    </section>
    </>
  )
}

export default AdminLayout
