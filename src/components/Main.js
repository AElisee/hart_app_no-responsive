import React from "react";
import { NavLink } from "react-router-dom";

const Main = () => {
  const scrollLeft = () => {
    const slide = document.querySelector(".scroll-item-container");
    slide.scrollLeft = slide.scrollLeft - 500;
  };

  const scrollRight = () => {
    const slide = document.querySelector(".scroll-item-container");
    slide.scrollLeft = slide.scrollLeft + 500;
  };

  // to top circle display

  window.addEventListener("scroll", () => {
    const toTopBtn = document.getElementById("toTopBtn");
    let scrollValue =
      (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.7) {
      toTopBtn.style.visibility = "visible";
    } else {
      toTopBtn.style.visibility = "hidden";
    }
  });

  return (
    <main>
      <section className="section-1">
        <div className="title">
          <h3>Categories</h3>
        </div>
        <div className="items-container">
          <div className="item item-1">
            <div className="item-text">
              <h3>
                Bussiness & <br /> Marketing
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item-img"></div>
          </div>
          <div className="item item-2">
            <div className="item-text">
              <h3>
                Teach & <br /> Programming
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="item-img"></div>
          </div>
          <div className="item item-3">
            <div className="item-text">
              <h3>
                Health & <br /> Fitness
              </h3>
              <p> Fitness Lorem ipsum, dolor elit.</p>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className="item-img"></div>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="title">
          <h3>Factured courses</h3>
          <NavLink to="/">
            see all courses <i className="fa-solid fa-arrow-right-long"></i>
          </NavLink>
        </div>
        <div className="scroll-item-container">
          <div className="item item-1">
            <div className="img"></div>
            <div className="item-text">
              <p>lorem 1</p>
              <div className="desc">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="tp">
                <div className="teacher">
                  <span className="teacher-img"></span>
                  <h4 className="teacher-name">Teacher of lorem</h4>
                </div>
                <div className="price">
                  <span>119€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="item item-2">
            <div className="img"></div>
            <div className="item-text">
              <p>lorem 2</p>
              <div className="desc">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="tp">
                <div className="teacher">
                  <span className="teacher-img"></span>
                  <h4 className="teacher-name">Teacher lorem 2</h4>
                </div>
                <div className="price">
                  <span>119€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item item-3">
            <div className="img"></div>
            <div className="item-text">
              <p>lorem 3</p>
              <div className="desc">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="tp">
                <div className="teacher">
                  <span className="teacher-img"></span>
                  <h4 className="teacher-name">Teacher lorem 3</h4>
                </div>
                <div className="price">
                  <span>119€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item item-4">
            <div className="img"></div>
            <div className="item-text">
              <p>lorem 4</p>
              <div className="desc">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="tp">
                <div className="teacher">
                  <span className="teacher-img"></span>
                  <h4 className="teacher-name">Teacher lorem 4</h4>
                </div>
                <div className="price">
                  <span>119€</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item item-5">
            <div className="img"></div>
            <div className="item-text">
              <p>lorem 5</p>
              <div className="desc">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="tp">
                <div className="teacher">
                  <span className="teacher-img"></span>
                  <h4 className="teacher-name">Teacher lorem 4</h4>
                </div>
                <div className="price">
                  <span>119€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <div className="btn-container">
            <div className="left-btn" onClick={scrollLeft}>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="right-btn" onClick={scrollRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="container">
          <div className="text-container">
            <div>
              <h3>Get 20% of your first courses</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> Natus iusto harum
                omnis
              </p>
              <div className="subscribe">
                <input type="text" placeholder="your mail address" />
                <input type="submit" value="subscribe" />
              </div>
            </div>
          </div>
          <div className="img"></div>
        </div>
      </section>

      <section className="section-4">
        <div className="title">
          <h3>All courses</h3>
          <NavLink to="/">
            see all courses <i className="fa-solid fa-arrow-right-long"></i>
          </NavLink>
        </div>
        <div className="container">
          <div className="item item-1">
            <div className="img"></div>
            <div className="item-text">
              <p>lorem 1</p>
              <div className="desc">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="tp">
                <div className="teacher">
                  <span className="teacher-img"></span>
                  <h4 className="teacher-name">Teacher name</h4>
                </div>
                <div className="price">
                  <span>119€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="item item-2">
            <div className="img"></div>
            <div className="item-text">
              <p>lorem 2</p>
              <div className="desc">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="tp">
                <div className="teacher">
                  <span className="teacher-img"></span>
                  <h4 className="teacher-name">Teacher name</h4>
                </div>
                <div className="price">
                  <span>119€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="item item-3">
            <div className="img"></div>
            <div className="item-text">
              <p>lorem 3</p>
              <div className="desc">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="tp">
                <div className="teacher">
                  <span className="teacher-img"></span>
                  <h4 className="teacher-name">Teacher name</h4>
                </div>
                <div className="price">
                  <span>119€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="item item-4">
            <div className="img"></div>
            <div className="item-text">
              <p>lorem 4</p>
              <div className="desc">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="tp">
                <div className="teacher">
                  <span className="teacher-img"></span>
                  <h4 className="teacher-name">Teacher name</h4>
                </div>
                <div className="price">
                  <span>119€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <span id="toTopBtn" onClick={() => window.scrollTo(0, 0)}>
        <i class="fa-solid fa-arrow-up"></i>
      </span>
    </main>
  );
};

export default Main;
