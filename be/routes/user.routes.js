import express from 'express';
const userRouter = express.Router();
import {getUsers,addUser,getUserByID,editUser,deleteUser} from '../controller/user.controller.js'


userRouter.get('/',getUsers);
userRouter.post('/add',addUser); // Need to append add in url as to navigate to Home Screen after creating user on Create screen at Client Level [19/9/2023 NMO]
userRouter.get('/:id', getUserByID);
userRouter.put('/:id', editUser);
userRouter.delete('/:id', deleteUser);



export default userRouter