
import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { emptycart, removeFromCart } from '../redux/slices/cartSlice';


function Kart() {
  const cartitems = useSelector((state) => state.cartReducer)
  console.log("=======cartitems======", cartitems);
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  let totalPrice = 0
  cartitems?.forEach(item => {
    totalPrice = totalPrice + item.price
  });
  const navigate = useNavigate()
  const handleCheckout = () => {
    alert("successfully placed the order");
    dispatch(emptycart())
    navigate('/Home')

  }


  return (
    <>
      <button style={{ marginTop: "130px" }} className="btn btn-success ms-5">
        <Link to={'/Home'} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back to Home</Link>
      </button>
      <div className='row w-100 ms-3'>
        <div className='col-lg-6 col-md-6 m-5'>
          <table className='table shadow border'>

            <thead >
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartitems?.length > 0 ?
                  cartitems?.map((item, index) => (
                    <tr >
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img height={"100px"} width={"100px"} src={item.thumbnail} alt="" /></td>
                      <td>&#8377;{item.price}</td>
                      <td><Button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        variant="outline-danger"
                      >
                        <i class="fa-solid fa-trash"></i>
                      </Button></td>
                    </tr>
                  ))
                  :
                  <p className='text-danger'>
                    No items added in Cart
                  </p>

              }

            </tbody>
          </table>
        </div>
        <div className='col-lg-4 col-md-4 d-flex justify-constent-center align-items-center'>
          <div className='border shadow p-5'>
            <h3 className='text-primary'>Cart Summary</h3>
            <h4>Total Number of Products: <span className='fw-bolder text-warning ms-2'>{cartitems?.length}</span></h4>
            <h5>Total Price: <span className='fw-bolder text-warning ms-2'>{totalPrice}</span></h5>
            <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kart