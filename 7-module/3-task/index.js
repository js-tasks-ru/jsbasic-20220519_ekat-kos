export default class StepSlider {

  constructor({ steps, value = 0 }) {

    this.steps = steps;
    this.value = value;
    this.elem = document.createElement("div");
    this.elem.className = "slider";
    this.segment = steps - 1;

    this.render();
  }

  render() {

    this.elem.innerHTML = this.#template();
    this.#onClick();
    const firstStep = this.elem.querySelector(".slider__steps").firstChild;
    firstStep.classList.add("slider__step-active");
  }

  #template() {
    return `
<div class="slider__thumb">
<span class="slider__value">${this.value}</span>
</div>

<div class="slider__progress"></div>

<div class="slider__steps">${`<span></span>`.repeat(this.steps)}</div>`;
  }

  #onClick() {
    this.elem.addEventListener("click", (event) => {

      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let currentLeft = left / this.elem.offsetWidth;

      let currentStep = Math.round(currentLeft * this.segment);
      this.value = currentStep;

      const sliderSteps = this.elem.querySelector(".slider__steps").children;

      Array.from(sliderSteps).forEach(item => {
        item.classList.remove("slider__step-active");
      });

      sliderSteps[currentStep].classList.add("slider__step-active");
      this.elem.querySelector(".slider__value").textContent = this.value;

      this.#isPosition();

      let customEvent = new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true
      });
      this.elem.dispatchEvent(customEvent);
    });

  }

  #isPosition() {

    const thumb = this.elem.querySelector(".slider__thumb");
    const progress = this.elem.querySelector(".slider__progress");

    const position = this.value / this.segment * 100;

    thumb.style.left = `${position}%`;
    progress.style.width = `${position}%`;

  }

}



