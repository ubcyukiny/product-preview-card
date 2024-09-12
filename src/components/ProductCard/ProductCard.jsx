import pictureMobile from "../../assets/images/image-product-mobile.jpg";
import pictureDesktop from "../../assets/images/image-product-desktop.jpg";
import pictureCart from "../../assets/images/icon-cart.svg";
import "../../App.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-img">
        <picture>
          <source srcSet={pictureDesktop} media="(min-width: 60rem)" />
          <img src={pictureMobile} alt="product-picture-mobile" />
        </picture>
      </div>
      <div className="product-content">
        <hgroup className="product-title-group">
          <p className="montserrat-500">perfume</p>
          <h2 className="fraunces-700">Gabrielle Essence Eau De Parfum</h2>
        </hgroup>
        <p className="montserrat-500">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <p className="product-prices">
          <span className="fraunces-700">$149.99</span>
          <s className="montserrat-500">$169.99</s>
        </p>
        <button className="product-add-to-cart">
          <img src={pictureCart} alt=""/>
          <span className="montserrat-700">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
