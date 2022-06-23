import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../components/redux/action/index";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  let [cartBtn, setCartBtn] = useState("Add To Cart");

  const dispatch = useDispatch();
  const addProduct = (product) => {
    if (cartBtn === "Add To Cart") {
      dispatch(addCart(product));
      setCartBtn("Remove From Cart")
    } else {
      dispatch(delCart(product));
      setCartBtn("Add To Cart")
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6" style={{lineHeight:2}}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{marginLeft:6}} />

      </div>
      </>
    );
  };

  const ShowProduct = () => {
      return (
          <>
            <div className="col-md-6" key={product.id}>
                <img src={product.image} alt={product.title}
                height="400" width="400"/>
            </div>
            <div className="col-md-6 ms-1">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h2 className="display-5">{product.title}</h2>
                <p className="lead my-2">Rating {product.rating && product.rating.rate}
                  <i className="fa fa-star ms-2"></i>
                </p>
                <h3 className="display-6 fw-bold my-3">$ {product.price}</h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark my-2 px-3" onClick={() => addProduct(product)}>{cartBtn}</button>
                <NavLink to="/cart" className="btn btn-dark my-2 ms-2 px-3">Go to cart</NavLink>
            </div>
          </>
        )
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;