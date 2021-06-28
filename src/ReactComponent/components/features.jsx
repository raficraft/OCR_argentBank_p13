import "../../css/components/features.scss";

const Features = (props) => {
  console.log(props);

  return (
    <div class="feature-item">
      <img src={props.img} alt={props.alt} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Features;
