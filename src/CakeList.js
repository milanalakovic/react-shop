import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import ShoppingCart from "./ShoppingCart.js";



const CakeList = ({ cakes }) => {
    const [searchValue, setSearchValue] = useState('');
    const [selectState, setSelectState] = useState("");
    const [cartsVisibilty, setCartsVisiblity] = useState(false);
    const [cakesInCart, setCakesInCart] = useState([]);


    const addToCart = (cake) => {
        const newCake = { ...cake, count: 1 };
        const CakeExist = cakesInCart.find(
            (item) => item.id === cake.id);
        if (CakeExist) {
            alert("Item is already in cart")
        } else {
            setCakesInCart([
                ...cakesInCart,
                newCake
            ]);
        }
    }

    function handleSelect(value) {
        if (value === "title") {
            cakes.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                }
                else if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });

        } else if (value === "price") {
            cakes.sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                }
                else if (a.price > b.price) {
                    return 1;
                }
                return 0;
            });

        } else if (value === "--") {
            cakes.sort((a, b) => {
                if (a.id < b.id) {
                    return -1;
                }
                else if (a.id > b.id) {
                    return 1;
                }
                return 0;
            });
        }
    }


    const onProductRemove = (cake) => {
        setCakesInCart((oldState) => {
            const productsIndex =
                oldState.findIndex(
                    (item) =>
                        item.id === cake.id
                );
            if (productsIndex !== -1) {
                oldState.splice(productsIndex, 1);
            }
            return [...oldState];
        });
    };


    return (

        <div className="allCakes">
            <ShoppingCart
                visibilty={cartsVisibilty}
                cakes={cakesInCart}
                onClose={() =>
                    setCartsVisiblity(false)
                }
                onProductRemove={onProductRemove}
            />


            <button
                className="btn shopping-cart-btn"
                onClick={() => setCartsVisiblity(true)}>
                <IoIosCart size={25} />
                {cakesInCart.length > 0 && (
                    <span className="product-count">
                        {cakesInCart.length}
                    </span>
                )}
            </button>




            <div className="cakesHeader">
                <h1 className="cakesTitle">Cakes</h1>
                <div className="sortAndFilter">
                    <label className="labelForSort" htmlFor="sort">Sort:</label>
                    <div className="selectContainer">
                        <select className="sortCakes" name="sortCakes" value={selectState} onChange={(e) => {
                            const slectedValue = e.target.value;
                            setSelectState(slectedValue)
                            handleSelect(slectedValue);
                        }}>
                            <option value="--">--</option>
                            <option value="title">By Title</option>
                            <option value="price">By Price</option>
                        </select >
                    </div>
                    <input className="searchCakes" type="text" placeholder="Search..." onChange={e => setSearchValue(e.target.value)} />
                </div>
            </div>

            <div className="cakeContainer">
                {cakes.filter((cake) => cake.title.toLowerCase().includes(searchValue)).map((cake) => (
                    <div className="cakesInfo" key={cake.id}>
                        <div className="cakeImgContainer">
                            <img className="cakeImg" src={cake.image} />
                        </div>

                        <h2 className="cakeTitle">{cake.title}</h2>
                        <p className="previewDescription">{cake.previewDescription}</p>

                        <p className="cakePrice">${cake.price}</p>

                        <Link to={`/cakes/${cake.id}`}>
                            <button className="cakeBtn">Read More</button>
                        </Link>
                        <div className="addBtnWrapper">
                            <button className="btn addToCartBtn"
                                onClick={() =>
                                    addToCart(cake)}>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default CakeList;