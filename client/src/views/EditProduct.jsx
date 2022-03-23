import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom'

const EditProduct = () => {

    const { id } = useParams() // get id
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                const product = res.data
                setTitle(product.title)
                setDescription(product.description)
                setPrice(product.price)
            })
            .catch(err => console.log(err))
    }, [id])


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {title, description, price})
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) { // key = "petname"
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr)
            })
    }


    return (
        
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title</label>
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
                <button> Submit</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}>{err}</p>
                ))
            }
        </div>
        
    )
}

export default EditProduct