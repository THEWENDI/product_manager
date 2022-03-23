import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"

const OneProduct = () => {
    const { id } = useParams() // destructure the id from params
    const [product, setProduct] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            
            {
                product ?
                    <div>
                        <h3> {product.title}</h3>
                        <h3>  {product.price}</h3>
                        <h3>  {product.description}</h3>
                    </div> :
                    <h1> Loading...</h1>
            }
        </div>
    )
}

export default OneProduct