import React, { useState } from 'react';
import './Product.css';
import { productData } from './OrderData';


function Product() {
  const [products, setProducts] = useState(productData);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stockQuantity: '' });
  const [showInputFields, setShowInputFields] = useState(false);
  const [editProductId, setEditProductId] = useState(null);

  const handleAddProduct = () => {

    if (!newProduct.name || !newProduct.category || !newProduct.price || !newProduct.stockQuantity) {
      alert('Please fill in all fields.');
      return;
    }

    const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
    setProducts(updatedProducts);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
    setShowInputFields(false);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (product) => {
    setEditProductId(product.id);
    setNewProduct({ ...product });
    setShowInputFields(true); 
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editProductId ? { ...newProduct } : product
    );
    setProducts(updatedProducts);
    setNewProduct({ name: '', category: '', price: '', stockQuantity: '' });
    setEditProductId(null);
    setShowInputFields(false);
  };

  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow-md">
      <h2 className="text-3xl mb-6 text-gray-700 text-center">Product List</h2>
     
      <div className="mb-[22px]">
        <h2 className="text-lg mb-4 text-gray-700">Add New Product</h2>
        {showInputFields && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="w-full box-border p-[10px] mb-3 border boroder-[#ccc] rounded-sm box-si"
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="w-full box-border p-[10px] mb-3 border boroder-[#ccc] rounded-sm box-si"
            />
            <input
              type="text"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="w-full box-border p-[10px] mb-3 border boroder-[#ccc] rounded-sm box-si"
            />
            <input
              type="text"
              placeholder="Stock Quantity"
              value={newProduct.stockQuantity}
              onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: e.target.value })}
              className="w-full box-border p-[10px] mb-3 border boroder-[#ccc] rounded-sm box-si"
            />
          </>
        )}
        { !showInputFields && <button onClick={() => setShowInputFields(true)} className="w-full py-2 px-4 bg-orange-500 text-white rounded-md cursor-pointer">Add Product</button>}
        {showInputFields && <button onClick={handleAddProduct} className="w-full py-2 px-4 bg-orange-500 text-white rounded-md cursor-pointer">Save</button>}
      </div>


      <div className="product-table">
        <div className="product-header">
          <div className="product-cell">Product Name</div>
          <div className="product-cell">Category</div>
          <div className="product-cell">Price</div>
          <div className="product-cell">Stock Quantity</div>
          <div className="product-cell">Actions</div>
        </div>
        {products.map(product => (
          <div key={product.id} className="product-row">
            <div className="product-cell">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              ) : (
                product.name
              )}
            </div>
            <div className="product-cell">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                />
              ) : (
                product.category
              )}
            </div>
            <div className="product-cell">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              ) : (
                product.price
              )}
            </div>
            <div className="product-cell">
              {editProductId === product.id ? (
                <input
                  type="text"
                  value={newProduct.stockQuantity}
                  onChange={(e) => setNewProduct({ ...newProduct, stockQuantity: e.target.value })}
                />
              ) : (
                product.stockQuantity
              )}
            </div>
            <div className="product-cell">
              {editProductId === product.id ? (
                <button className="bg-red-500" onClick={handleUpdateProduct}>Save</button>
              ) : (
                <button  className='bg-lime-500' onClick={() => handleEditProduct(product)}>Edit</button>
              )}
              <button className='bg-red-500' onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
