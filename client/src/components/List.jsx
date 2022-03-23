import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./style.css"

const List = (props) => {
    const { products } = props

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(res=>{
                props.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='row justify-content-md-center'>
            
            <table >
                <thead>
                    <tr>
                        <th> Title</th>
                        <th colSpan={2}> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i)=>(
                            <tr key={i}>
                                <td> <Link to={`/products/${product._id}`}>{product.title}</Link></td>
                                <td> <Link to={`/products/${product._id}/edit`} >Edit </Link></td>
                                <td> <button  onClick={()=>handleDelete(product._id)}> Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </div>
    )
}

export default List