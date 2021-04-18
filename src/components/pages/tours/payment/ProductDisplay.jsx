import { Button } from "semantic-ui-react";
import "./ProductDisplay.scss";

const ProductDisplay = ({ handleClick, tour, disabled, loading }) => (
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

        <Button
            positive
            loading={loading}
            disabled={disabled}
            role="link"
            onClick={handleClick}
        >
            Checkout
        </Button>
    </section>
);

export default ProductDisplay;
