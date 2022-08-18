import "./styles.css";
import imgBlog1 from "./images/imgBlog1.png";
import imgBlog2 from "./images/imgBlog2.png";
import imgBlog3 from "./images/imgBlog3.png";
import imgBlog4 from "./images/imgBlog4.png";
function Blog() {
  return (
    <>
      <h5>Confira nosso Blog</h5>
      <div className="blog__div">
        <div className="blog__cards">
          <img src={imgBlog1} alt="" />
          <p className="blog__cardsTitle">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <span className="blog__cardsContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatum.
          </span>
          <button className="bt">LER ARTIGO</button>
        </div>
        <div className="blog__cards">
          <img src={imgBlog2} alt="" />
          <p className="blog__cardsTitle">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <span className="blog__cardsContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatum.
          </span>
          <button className="bt">LER ARTIGO</button>
        </div>
        <div className="blog__cards">
          <img src={imgBlog3} alt="" />
          <p className="blog__cardsTitle">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <span className="blog__cardsContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatum.
          </span>
          <button className="bt">LER ARTIGO</button>
        </div>
        <div className="blog__cards">
          <img src={imgBlog4} alt="" />
          <p className="blog__cardsTitle">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <span className="blog__cardsContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatum.
          </span>
          <button className="bt">LER ARTIGO</button>
        </div>
      </div>
    </>
  );
}
export default Blog;
