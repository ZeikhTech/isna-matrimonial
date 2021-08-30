export default function About() {
  return (
    <div>
      <div className="page-title">
        <h1>About us</h1>{" "}
      </div>
      <div className="about-us-img">
        {" "}
        <img
          src="/assets/images/about-us.png"
          className="img-fluid"
          alt=""
        />{" "}
      </div>
      <section className="about-us-latest-artical pt">
        <div className="container">
          <h1>Latest Articles</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </section>
      <section className="prodect-service mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 ">
              <div className="card text-center">
                <div className="card-img">
                  {" "}
                  <img
                    src="/assets/images/Advance-Search-Icon.png"
                    className="img-fluid"
                    alt=""
                  />{" "}
                </div>
                <h5>Perform Advance Search</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tempor sed nisl sed porttitor. Maecenas luctus, ex ac
                  lobortis euismod, diam arcu pellentesque nibh, sed placerat
                  dolor metus vitae velit.
                </p>
                <div className="bottom-img">
                  {" "}
                  <img
                    src="/assets/images/Pink-Flower.png"
                    className="img-fluid "
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="card text-center">
                <div className="card-img">
                  {" "}
                  <img
                    src="/assets/images/Matched-Profile-Icon.png"
                    className="img-fluid"
                    alt=""
                  />{" "}
                </div>
                <h5>View Matched Profile</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tempor sed nisl sed porttitor. Maecenas luctus, ex ac
                  lobortis euismod, diam arcu pellentesque nibh, sed placerat
                  dolor metus vitae velit.
                </p>
                <div className="bottom-img">
                  {" "}
                  <img
                    src="/assets/images/Pink-Flower.png"
                    className="img-fluid "
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6 mx-auto">
              <div className="card text-center">
                <div className="card-img">
                  {" "}
                  <img
                    src="/assets/images/Message-Icon.png"
                    className="img-fluid"
                    alt=""
                  />{" "}
                </div>
                <h5>Send Message to any Profile</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tempor sed nisl sed porttitor. Maecenas luctus, ex ac
                  lobortis euismod, diam arcu pellentesque nibh, sed placerat
                  dolor metus vitae velit.
                </p>
                <div className="bottom-img">
                  {" "}
                  <img
                    src="/assets/images/Pink-Flower.png"
                    className="img-fluid "
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
