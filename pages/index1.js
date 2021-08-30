import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/reducer/counter";
export default function Home() {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {/* <span>{count}</span> */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by 22"
          onClick={() => dispatch(incrementByAmount(22))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
