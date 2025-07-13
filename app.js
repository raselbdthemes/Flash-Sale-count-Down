// Countdown for product list (first timer)
const countdownTarget = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 15 * 60 * 1000); // 15 days, 14 hours, 15 minutes from now
function updateCountdown() {
    const now = new Date();
    let diff = countdownTarget - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    if(document.getElementById('days')) {
      document.getElementById('days').textContent = String(days).padStart(3, '0');
      document.getElementById('hours').textContent = hours === 0 ? '' : String(hours);
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Countdown for product details section (second timer)
const detailsTarget = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 15 * 60 * 1000); // 15 days, 14 hours, 15 minutes from now
function updateDetailsCountdown() {
    const now = new Date();
    let diff = detailsTarget - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    if(document.getElementById('details-days')) {
      document.getElementById('details-days').textContent = String(days).padStart(3, '0');
      document.getElementById('details-hours').textContent = hours === 0 ? '' : String(hours);
      document.getElementById('details-minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('details-seconds').textContent = String(seconds).padStart(2, '0');
    }
}
updateDetailsCountdown();
setInterval(updateDetailsCountdown, 1000);
