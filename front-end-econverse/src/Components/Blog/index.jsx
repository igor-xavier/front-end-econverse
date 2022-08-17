import imgBlog1 from "./images/imgBlog1.png";
import imgBlog2 from "./images/imgBlog2.png";
import imgBlog3 from "./images/imgBlog3.png";
import imgBlog4 from "./images/imgBlog4.png";
function Blog() {
  return (
    <>
      <h5>Confira nosso Blog</h5>
      <div>
        <div>
          <img src={imgBlog1} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatum.
          </span>
          <button>LER ARTIGO</button>
        </div>
        <div>
          <img src={imgBlog2} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatum.
          </span>
          <button>LER ARTIGO</button>
        </div>
        <div>
          <img src={imgBlog3} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatum.
          </span>
          <button>LER ARTIGO</button>
        </div>
        <div>
          <img src={imgBlog4} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            voluptatum.
          </span>
          <button>LER ARTIGO</button>
        </div>
      </div>
    </>
  );
}
export default Blog;
