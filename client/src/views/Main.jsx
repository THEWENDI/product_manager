import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from "./../components/Form"
import List from "./../components/List"

const Main = () => {
    const [products, setProducts] = useState()
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    const reload = ()=>{
        setRefresh(!refresh)
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <Form reload={reload}/>
            {
                products &&
                <List products={products} reload={reload}/>
            }
        </div>
    )
}

export default Main