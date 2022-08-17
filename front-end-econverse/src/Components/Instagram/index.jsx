import insta1 from "./images/insta1.png";
import insta2 from "./images/insta2.png";
import insta3 from "./images/insta3.png";
import insta4 from "./images/insta4.png";
import insta5 from "./images/insta5.png";

function Instagram() {
  return (
    <div>
      <h6>Instagram</h6> <a href="">+Seguir</a>
      <div>
        <img src={insta1} alt="" />
        <img src={insta2} alt="" />
        <img src={insta3} alt="" />
        <img src={insta4} alt="" />
        <img src={insta5} alt="" />
      </div>
    </div>
  );
}
export default Instagram;
