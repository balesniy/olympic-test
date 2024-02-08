document.addEventListener('DOMContentLoaded', () => {

  const slides = [...document.querySelectorAll(".carousel-item")];
  let activeSlide = document.querySelector(".carousel-item.active");
  const prev = document.querySelector(".btn.prev");
  const next = document.querySelector(".btn.next");
  const pagination = document.querySelector(".pagination");
  const n = slides.length;
  if (n === 1) {
    prev.style.display = 'none'
    next.style.display = 'none'
  }

  if (n < 3) {
    pagination.style.display = 'none'
    prev.disabled = true
  }

  const isShort = n === 2
  slides.forEach((slide, index) => (slide.dataset.slide = index));
  const bullets = slides.map((el, index) => {
    const button = document.createElement("button");
    button.className = "btn btn-xs";
    if (index === 0) {
      button.classList.add("btn-neutral");
    }
    button.dataset.slide = index;
    button.textContent = `${index + 1}`;
    button.onclick = () => {
      setActive(index)
    };
    return button;
  });
  pagination.append(...bullets);

  prev.onclick = () => {
    console.log('prev clicked')
    const nextSlide = (((Number(activeSlide.dataset.slide) - 1) % n) + n) % n;
    next.disabled = false
    if (isShort && nextSlide === 0) {
      prev.disabled = true
    }
    setActive(nextSlide)
  };

  next.onclick = () => {
    console.log('next clicked')
    const nextSlide = (((Number(activeSlide.dataset.slide) + 1) % n) + n) % n;
    prev.disabled = false
    if (isShort && nextSlide === n - 1) {
      next.disabled = true
    }
    setActive(nextSlide)
  };

  const setActive = (next) => {
    const nextSlide = slides[next];
    activeSlide.classList.remove("active");
    nextSlide.classList.add("active");
    activeSlide = nextSlide;
    const activeButton = document.querySelector(".btn-neutral");
    activeButton.classList.remove("btn-neutral");
    bullets[next].classList.add("btn-neutral");
  }
});
