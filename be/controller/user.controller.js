
import User from '../model/user.model.js';
// var bcrypt = require('bcryptjs');


export const getUsers = async (request, response) => {
    try {
        const users = await User.find();
        return response.status(200).json(users);
    }
    catch (error) {
        return response.status(404).json({ message: error.message })
    }
}

export const addUser = async (request, response) => {
    const user = request.body;

    try {

        const newUser = new User(user);

        await newUser.save();

        return response.status(201).json(newUser);
    }
    catch(error) {
        return response.status(409).json({ message: error.message })
    }
}


export const getUserByID = async (request, response) => {

    const Id = request.params.id;

    try {

        const user = await User.findById(Id)

        return response.status(200).json(user);
    }
    catch(error) {
        return response.status(404).json({ message: error.message })
    }
}

export const editUser = async (request, response) => {

    const Id = request.params.id

    const user = request.body; 

    try {

       // const edituser = new User(user)

        const editeduser= await User.findByIdAndUpdate( { _id: Id },{...user},{new:true})

        return response.status(201).json(editeduser);
    }
    catch(error) {
        return response.status(409).json({ message: error.message })
    }
}


export const deleteUser = async (request, response) => {
    const Id = request.params.id
    try {

        const deleteuser=  await User.findByIdAndDelete(Id)

        return response.status(200).json(deleteuser);
    }
    catch(error) {
        return response.status(409).json({ message: error.message })
    }
}

// exports.getAll = (req, res) => {
//     User.find()
//         .then(users => {
//             res.send(users);
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || "Something went wrong !!"
//             });
//         });
// }


// exports.findOne = (req, res) => {
//     User.findById(req.params.id)
//         .then(user => {
//             if (!user) {
//                 return res.status(500).send({
//                     message: `User Not found with id ${req.params.id}`
//                 });
//             }
//             res.send(user);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(500).send({
//                     message: err.message || "Something went wrong !!"
//                 });
//             }
//             return res.status(500).send({
//                 message: `Error getting user with id ${req.params.id}`
//             });
//         });
// }

// exports.save = (req, res) => {
//     if (!req.body) {
//         return res.status(400).send({
//             message: `Please enter all required fileds`
//         });
//     }
//     const user = new User({
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         phone: req.body.phone
//     });
//     user.save()
//         .then(data => {
//             res.send(data);
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || "Something went wrong while adding Users!!"
//             });
//         })
// }

// exports.update = (req, res) => {
//     if (!req.body) {
//         return res.status(400).send({
//             message: `Please enter all required fileds`
//         });
//     }
//     User.findByIdAndUpdate(req.params.id, {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         phone: req.body.phone
//     }, {
//         new: true
//     }).then(user => {
//         if (!user) {
//             return res.status(404).send({
//                 message: `User Not found with id ${req.params.id}`
//             });
//         }
//         res.send(user);
//     }).catch(err => {
//         if (err.kind === 'ObjectId') {
//             return res.status(500).send({
//                 message: `User Not found with id ${req.params.id}`
//             });
//         }
//         return res.status(500).send({
//             message: `Error While Updating user with id ${req.params.id}`
//         });
//     })
// }
// exports.updatefileds = (req, res) => {
//     if (!req.body) {
//         return res.status(400).send({
//             message: `Please enter all required fileds`
//         });
//     }
//     User.findByIdAndUpdate(req.params.id, { ...req.body }, {
//         new: true
//     }).then(user => {
//         if (!user) {
//             return res.status(404).send({
//                 message: `User Not found with id ${req.params.id}`
//             });
//         }
//         res.send(user);
//     }).catch(err => {
//         if (err.kind === 'ObjectId') {
//             return res.status(500).send({
//                 message: `User Not found with id ${req.params.id}`
//             });
//         }
//         return res.status(500).send({
//             message: `Error While Updating user with id ${req.params.id}`
//         });
//     })
// }
// exports.delete = (req, res) => {
//     User.findByIdAndDelete(req.params.id)
//         .then(user => {
//             if (!user) {
//                 return res.status(404).send({
//                     message: `User Not found with id ${req.params.id}`
//                 });
//             }
//             res.send({ message: "User deleted successfully !!" });
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(500).send({
//                     message: `User Not found with id ${req.params.id}`
//                 });
//             }
//             return res.status(500).send({
//                 message: `Error While Deleting user with id ${req.params.id}`
//             });
//         })
// }

