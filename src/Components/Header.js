export default function Header() {
  return (
    <header>
      <div className="container grid-header">
        <div className="content-box">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi
            eaque placeat suscipit assumenda dolor nostrum minus consequatur,
            accusamus sint debitis eos, incidunt eligendi reiciendis asperiores
            rerum doloremque quisquam corrupti.
          </p>
          <a href="#" className="btn-cta">
            Reserve a table
          </a>
        </div>
        <div className="img-box">
          <img src="./icons_assets/restauranfood.jpg" alt="hero" />
        </div>
      </div>
    </header>
  );
}
