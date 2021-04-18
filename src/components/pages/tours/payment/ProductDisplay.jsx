import "./ProductDisplay.scss";

const ProductDisplay = ({ handleClick, tour }) => (
    <section className="checkout">
        <div className="product">
            <img
                className="product__img"
                src={tour.imageCover}
                alt={`The cover of ${tour.name}`}
            />
            <div className="product__description">
                <h3 className="product__title">{tour.name}</h3>
                <h5 className="product__price">${tour.price}</h5>
            </div>
        </div>
        <button
            type="button"
            id="checkout-button"
            role="link"
            onClick={handleClick}
        >
            Checkout
        </button>
    </section>
);

export default ProductDisplay;
