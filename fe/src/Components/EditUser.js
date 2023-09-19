import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { editUser , getUsers } from '../Service/Api'

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  phone: ''
}

const EditUser = () => {
  const [user, setUser] = useState(initialValues)

  const { firstname, lastname, email, phone } = user;

  const { id } = useParams()


  let navigate = useNavigate();

  useEffect(()=>{
    loadUserDetails()
  },[])

  const loadUserDetails = async() =>{
      const response = await getUsers(id);
      setUser(response.data)
  } 

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const editUserDetails = async (e) => {
    e.preventDefault();
    await editUser(id,user);
    navigate("/allusers")
  }
  return (
    <div className='container'>
      <div className='mb-3 mt-3'>
        {/* <NavLink to='/' style={{marginTop:6,marginBottom:6}}>Home</NavLink> */}
        <button className='btn btn-primary backtohome' onClick={() => navigate("/allusers")}>Back to Home</button>
      </div>
      <form>
        <div className='row'>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">First Name</label>
            <input type="text" value={firstname} onChange={onValueChange} name="firstname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">Last Name</label>
            <input type="text" value={lastname} onChange={onValueChange} name="lastname" className="form-control" id="exampleInputPassword1" />
          </div>
        </div>
        <div className='row'>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" value={email} onChange={onValueChange} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">Phone No</label>
            <input type="number" value={phone} onChange={onValueChange} name="phone" className="form-control" id="exampleInputPassword1" />
          </div>
        </div>


        <button type="submit" onClick={editUserDetails} className="btn btn-primary addusersubmitbutton">Submit</button>
      </form>
    </div>
  )
}

export default EditUser