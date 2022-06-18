import Card from "components/card/Card";
import Button from "../button/Button";

const Hit = (props) => {
  return (
    <div>
      <Card>
        <div>
          <img
            width="80vw"
            height="80vh"
            src={props.hit.image}
            alt={props.hit.name}
          />
        </div>
        <div>
          <p>{props.hit.name}</p>
        </div>
        <div>
          <p>${props.hit.salePrice}</p>
        </div>
        <Button
          productName={props.hit.name}
          productPrice={props.hit.salePrice}
          productID={props.hit.objectID}
        />
      </Card>
    </div>
  );
};

export default Hit;
