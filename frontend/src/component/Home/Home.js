import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="REWEAR" />

          <div className="banner">
            <p>Welcome to Rewear Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
           {[
  {
    _id: "1",
    name: "Cotton T-Shirt",
    price: 499,
    images: [{ url: "https://m.media-amazon.com/images/I/81S8gRxjoIL._AC_UL1500_.jpg" }],
    ratings: 4.5,
    numOfReviews: 34,
  },
  {
    _id: "2",
    name: "Blue Denim Jacket",
    price: 1499,
    images: [{ url: "https://m.media-amazon.com/images/I/71r1vD6Uo8L._AC_UL1500_.jpg" }],
    ratings: 4.8,
    numOfReviews: 21,
  },
  {
    _id: "3",
    name: "Sneakers",
    price: 1999,
    images: [{ url: "https://m.media-amazon.com/images/I/61m9rNsz1sL._AC_UL1500_.jpg" }],
    ratings: 4.2,
    numOfReviews: 18,
  },
  {
    _id: "4",
    name: "Black Hoodie",
    price: 899,
    images: [{ url: "https://m.media-amazon.com/images/I/61CXDkx+k8L._AC_UL1500_.jpg" }],
    ratings: 4.4,
    numOfReviews: 25,
  },
  {
    _id: "5",
    name: "Leather Boots",
    price: 2499,
    images: [{ url: "https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_UL1500_.jpg" }],
    ratings: 4.7,
    numOfReviews: 29,
  },
  {
    _id: "6",
    name: "Formal Shirt",
    price: 999,
    images: [{ url: "https://m.media-amazon.com/images/I/61XK2ZCJ9jL._AC_UL1500_.jpg" }],
    ratings: 4.1,
    numOfReviews: 11,
  },
  {
    _id: "7",
    name: "Track Pants",
    price: 699,
    images: [{ url: "https://m.media-amazon.com/images/I/61U03Vd82DL._AC_UL1500_.jpg" }],
    ratings: 4.3,
    numOfReviews: 17,
  },
  {
    _id: "8",
    name: "Winter Jacket",
    price: 2999,
    images: [{ url: "https://m.media-amazon.com/images/I/71BkWdCBWXL._AC_UL1500_.jpg" }],
    ratings: 4.6,
    numOfReviews: 30,
  },
  {
    _id: "9",
    name: "Casual Kurta",
    price: 849,
    images: [{ url: "https://m.media-amazon.com/images/I/51l26XMbZLL._AC_UL1500_.jpg" }],
    ratings: 4.0,
    numOfReviews: 10,
  },
  {
    _id: "10",
    name: "Joggers",
    price: 799,
    images: [{ url: "https://m.media-amazon.com/images/I/71fB5gUjEnL._AC_UL1500_.jpg" }],
    ratings: 4.2,
    numOfReviews: 19,
  },
].map((product) => (
  <ProductCard key={product._id} product={product} />
))}

          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
