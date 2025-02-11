let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 2000);

spinBtn.onclick = function() {
  wheel.style.transform = "rotate(" + value+ "deg)";
  value += Math.ceil(Math.random() * 1000);
}