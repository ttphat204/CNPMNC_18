import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = ({ categoryId }) => {
    const [product, setProduct] = useState({ name: '', description: '', price: 0, imageUrl: '', quantity: 0, categoryId });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const createProduct = () => {
        axios.post('http://localhost:3005/product/themSP', product)
            .then(res => console.log('Product created:', res.data))
            .catch(err => console.error('Error creating product:', err));
    };

    return (
        <div>
            <h1>Create Product</h1>
            <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" />
            <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" />
            <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" />
            <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} placeholder="Image URL" />
            <input type="number" name="quantity" value={product.quantity} onChange={handleChange} placeholder="Quantity" />
            <button onClick={createProduct}>Create Product</button>
        </div>
    );
};

export default CreateProduct;
