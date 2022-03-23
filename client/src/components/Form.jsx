import React, { useState } from 'react'
import axios from "axios"

const Form = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/products`, {title, description, price})
            .then(res=>{
                props.reload()
                clearForm()
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors
                const errorArr =[]
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr)
            })

    }

    const clearForm = () =>{
        setTitle("")
        setPrice(0)
        setDescription("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label > Title</label>
                    <input type="text" name="title" value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label> Price</label>
                    <input type="number" name="price" value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label> Description </label>
                    <input type="text" name="description" value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button className='btn btn-primary'> Submit</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
        </div>
    )
}

export default Form