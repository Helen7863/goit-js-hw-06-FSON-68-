function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color')
}

refs.btn.addEventListener('click', onClick)

function onClick(){
  const value = getRandomHexColor();
  refs.span.textContent = value;
  document.body.style.backgroundColor = value;
}
