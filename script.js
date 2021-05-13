const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('keyup', (e)=>{
  const letters = e.target.value.length;
  const blur = scale(letters, 0, 10, 20, 0);
  background.style.filter = `blur(${blur < 0 ? 0 : blur}px)`;
})


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}