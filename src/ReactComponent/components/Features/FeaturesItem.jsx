import Style from "./Features.module.scss";

const FeaturesItem = ({ img, alt, title, text }) => {
  return (
    <div className={Style["feature-item"]}>
      <h2 className="sr-only">Features</h2>
      <img src={img} alt={alt} className={Style["feature-icon"]} />
      <h3 className={Style["feature-item-title"]}>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeaturesItem;
