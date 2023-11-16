import "./index.css";
import Heading from "../heading";
import Box from "../box";
import { Fragment } from "react";

export default function Reviews({ list }) {
  return (
    <div className="reviews__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="reviews__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
    return (
        <Box shadow>
            <div className="reviews">
              
            <span className="reviews__title">{guestName}</span>
            <span className="reviews__rating">Рейтінг: {rating}</span>
            </div>
            <p className="reviews__info"> {review} </p>
            
        </Box>
    );
}
