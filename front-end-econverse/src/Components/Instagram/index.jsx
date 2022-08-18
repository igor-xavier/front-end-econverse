import "./styles.css";
import insta1 from "./images/insta1.png";
import insta2 from "./images/insta2.png";
import insta3 from "./images/insta3.png";
import insta4 from "./images/insta4.png";
import insta5 from "./images/insta5.png";

function Instagram() {
  return (
    <>
      <div className="insta__top">
        <h6>Instagram</h6>{" "}
        <a href="" className="insta__link">
          +Seguir
        </a>
      </div>
      <div className="insta__imgs">
        <img src={insta1} alt="" />
        <img src={insta2} alt="" />
        <img src={insta3} alt="" />
        <img src={insta4} alt="" />
        <img src={insta5} alt="" />
      </div>
    </>
  );
}
export default Instagram;
