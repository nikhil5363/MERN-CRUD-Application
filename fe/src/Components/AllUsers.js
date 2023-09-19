import React, { useEffect, useState, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getUsers, deleteUser, editUser } from '../Service/Api'
import { addData, updateData, delData } from '../Context/ContextProvider'



const AllUsers = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState([])

    const { udata, setUdata } = useContext(addData);  // For Adding

    const { updata, setUPdata } = useContext(updateData);

    const { dltdata, setDLTdata } = useContext(delData);


    useEffect(() => {
        getAllUsers()
    }, [])


    const getAllUsers = async (id) => {
        let response = await getUsers();
        setUsers(response.data)
    }



    const deleteUserData = async (id) => {
        console.log(id);
        const deleteduser = await deleteUser(id);
        setDLTdata(deleteduser);
        getAllUsers();
    }

    const editUserData = async (id) => {
        await editUser();
        navigate('/')
    }


    return (
        <>
            {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.firstname}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </>
                    : ""

            }
            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.firstname}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </>
                    : ""
            }
            {
                dltdata ?
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>{dltdata.firstname}</strong>  deleted succesfully!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    : ""
            }
            <div className='mt-5'>
                <h1>All Users</h1>
                <div className='container'>
                    <div className='add_btn mt-2'>
                        {/* <button className='btn btn-primary btn-lg'> <NavLink to='/adduser' style={{marginTop:6,marginBottom:6}}>Add User</NavLink></button> */}
                        <button className='btn btn-primary btn-lg adduseronalluser' onClick={() => navigate('/adduser')}> Add User</button>
                    </div>
                    <div>
                        <table className="table mt-1">
                            <thead>
                                <tr className='table-dark'>
                                    <th scope="col">#</th>
                                    <th scope="col">firstname</th>
                                    <th scope="col">lastname</th>
                                    <th scope="col">email</th>
                                    <th scope="col">phone no:</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((val, i) => {
                                    return (
                                        <tr key={val._id}>
                                            <th scope="row">1</th>
                                            <td>{val.firstname}</td>
                                            <td>{val.lastname}</td>
                                            <td>{val.email}</td>
                                            <td>{val.phone}</td>
                                            <td className='d-flex justify-content-between'>
                                                <button className='btn btn-success' onClick={() => navigate(`/getUsers/${val._id}`)}>Read</button>
                                                <button className='btn btn-success' onClick={() => navigate(`/edituser/${val._id}`)}>Update</button>
                                                <button className='btn btn-danger' onClick={() => deleteUserData(val._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>

    )
}

export default AllUsers