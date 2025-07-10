// Countdown for product details section only
const detailsTarget = new Date('2026-03-28T00:00:00');
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
      document.getElementById('details-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('details-minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('details-seconds').textContent = String(seconds).padStart(2, '0');
    }
}
updateDetailsCountdown();
setInterval(updateDetailsCountdown, 1000);
