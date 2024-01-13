import axios from "axios"
import { useState } from "react"
import {updateUser } from "./redux/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"


    function UpdateUser() {
        const {id} = useParams()
        const users = useSelector(state => state.users.users)
        const user = users.find(u => u.id === id)
        console.log(user)
        const [name, setName] = useState(user.name)
        const[email, setEmail] = useState(user.email)
        const [age, setAge] = useState(user.age)

        const dispatch = useDispatch()

        const navigate = useNavigate()

        const handleUpdate = (e) => {
            e.preventDefault()
            axios.put('http://localhost:3001/update/'+id, {name, email, age})
            .then(() => {
                dispatch(updateUser({id, name, email, age}))
                navigate('/')
            })
            .catch(err => {console.log(err)})
        }
        return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
            <h2>Update User</h2>
            <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
                type="text"
                placeholder="Enter Age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            </div>
            <button className="btn btn-success">Update</button>
        </form>  
        </div>
    </div>
    )
    }

export default UpdateUser;