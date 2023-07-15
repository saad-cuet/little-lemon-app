export default function Main() {
  return (
    <main>
      <section className="section-menu">
        <div className="menu__title">
          <h1>This Weeks Specials!</h1>
          <a href="#" className="btn-cta">
            Online Order
          </a>
        </div>
        <div className="card__container">
          <div className="menu__card">
            <img src="./icons_assets/greek salad.jpg" alt="" />
            <div className="card__title">
              <h3>Greek Salad</h3>
              <span>$12.09</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tenetur expedita, molestias rerum voluptas sed aspernatur quidem
              quibusdam corrupti aperiam voluptate totam facere veritatis veniam
              ex similique corporis necessitatibus natus!
            </p>
            <a href="#">Order a delivery</a>
          </div>
          <div className="menu__card">
            <img src="./icons_assets/bruchetta.svg" alt="" />
            <div className="card__title">
              <h3>Bruchetta</h3>
              <span>$14.99</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tenetur expedita, molestias rerum voluptas sed aspernatur quidem
              quibusdam corrupti aperiam voluptate totam facere veritatis veniam
              ex similique corporis necessitatibus natus!
            </p>
            <a href="#">Order a delivery</a>
          </div>
          <div className="menu__card">
            <img src="./icons_assets/lemon_dessert.png" alt="" />
            <div className="card__title">
              <h3>Lemon Dessert</h3>
              <span>$10.99</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              tenetur expedita, molestias rerum voluptas sed aspernatur quidem
              quibusdam corrupti aperiam voluptate totam facere veritatis veniam
              ex similique corporis necessitatibus natus!
            </p>
            <a href="#">Order a delivery</a>
          </div>
        </div>
      </section>

      <section className="section-testimonials">
        <h1>Testimonials</h1>
        <div className="container grid-4-col">
          <div className="testimonial">
            <div className="testimonial__rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon-star w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span>4.5</span>
            </div>
            <div className="testimonial__user">
              <img src="./icons_assets/helen.png" alt="user1" />
              <span>Helen</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="testimonial">
            <div className="testimonial__rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon-star w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span>4</span>
            </div>
            <div className="testimonial__user">
              <img src="./icons_assets/lisa.png" alt="user2" />
              <span>Helen</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="testimonial">
            <div className="testimonial__rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon-star w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span>5</span>
            </div>
            <div className="testimonial__user">
              <img src="./icons_assets/Arefin.png" alt="user3" />
              <span>Helen</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="testimonial">
            <div className="testimonial__rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon-star w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span>4.5</span>
            </div>
            <div className="testimonial__user">
              <img src="./icons_assets/Habib.png" alt="user4" />
              <span>Helen</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>

      <section className="section-about">
        <div className="container grid-about">
          <div className="about-content-box">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quasi eaque placeat suscipit assumenda dolor nostrum minus
              consequatur, accusamus sint debitis eos, incidunt eligendi
              reiciendis asperiores rerum doloremque quisquam corrupti.
            </p>
          </div>
          <div className="about-img-box">
            <img
              className="img-1"
              src="./icons_assets/Mario and Adrian A.jpg"
              alt="maria and adrian"
            />
            <img
              className="img-2"
              src="./icons_assets/Mario and Adrian b.jpg"
              alt="maria and adrian"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
