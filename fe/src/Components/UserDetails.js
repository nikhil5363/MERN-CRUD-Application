import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getUsers } from '../Service/Api'

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
}

const UserDetails = () => {
    const [user, setUser] = useState(initialValues)

    const { firstname, lastname, email, phone } = user;

    const { id } = useParams()


    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails()
    }, [])

    const loadUserDetails = async () => {
        const response = await getUsers(id);
        setUser(response.data)
    }

    return (
        <div className='container  userdetailsection' style={{ marginTop:'100px',width:'600px'}} >
            <h1 style={{ textAlign: 'center',marginTop:'20px',whiteSpace:'nowrap', overflow: 'visible',marginBottom:'30px'  }}> This is {firstname} Details </h1>
            <div className="card cardboardstyle" style={{width:'500px'}}>
            <div class="card-body" style={{textAlign:'center'}}>
                    <h3>First Name : <span>{firstname}</span></h3>
                    <h3>Last Name : <span>{lastname}</span></h3>
                    <h3>Email Id : <span>{email}</span></h3>
                    <h3>Phone Number : <span>{phone}</span></h3>
                    <button type='submit' className='btn btn-success' onClick={()=>navigate('/allusers')}>Back to Home</button>
            </div>

            
            </div>
        </div>

    )
}

export default UserDetails