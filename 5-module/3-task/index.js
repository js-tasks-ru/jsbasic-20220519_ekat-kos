function initCarousel() {

  const inner = document.querySelector(".carousel__inner");
  const slides = document.querySelectorAll(".carousel__slide");
  const slideWidth = document.querySelector(".carousel__slide").offsetWidth;
  const leftBtn = document.querySelector(".carousel__arrow_left");
  const rightBtn = document.querySelector(".carousel__arrow_right");

  let position = 0;
  let i = 0;

  leftBtn.style.display = "none";

  leftBtn.addEventListener("click", () => {
    i--;
    rightBtn.style.display = "";

    if (0 == i) {
      leftBtn.style.display = "none";
    }

    position -= slideWidth;
    position = Math.max(position, 0);
    inner.style.transform = `translateX(${-position}px)`;

  }
  );

  rightBtn.addEventListener("click", () => {
    i++;
    leftBtn.style.display = "";

    if (slides.length - 1 == i) {
      rightBtn.style.display = "none";
    }

    position += slideWidth;
    position = Math.min(position, (slideWidth * slides.length));
    inner.style.transform = `translateX(${-position}px)`;

  }
  );
}
