
    // ─── SEARCH FILTER ───
    function filterShops(value) {
      const cards = document.querySelectorAll('.shop-card');
      const q = value.toLowerCase().trim();
      cards.forEach(card => {
        const area = card.dataset.area || '';
        const text = card.innerText.toLowerCase();
        card.style.display = (!q || text.includes(q) || area.includes(q)) ? '' : 'none';
      });
    }

    function triggerSearch() {
      const val = document.getElementById('locationInput').value;
      filterShops(val);
      document.getElementById('shops').scrollIntoView({ behavior: 'smooth' });
    }
c
    // ─── MODAL ───
    function openModal(shopName) {
      document.getElementById('modalShopName').textContent = '🏪 ' + shopName;
      document.getElementById('bookingForm').style.display = 'block';
      document.getElementById('successMsg').classList.remove('show');
      document.getElementById('bDate').min = new Date().toISOString().split('T')[0];
      document.getElementById('bookingModal').classList.add('open');
    }

    function closeModal() {
      document.getElementById('bookingModal').classList.remove('open');
    }

    document.getElementById('bookingModal').addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });

    function submitBooking() {
      const name = document.getElementById('bName').value.trim();
      const phone = document.getElementById('bPhone').value.trim();
      const product = document.getElementById('bProduct').value;
      if (!name || !phone || !product) {
        alert('Please fill Name, Phone, and select a Product to continue.');
        return;
      }
      document.getElementById('bookingForm').style.display = 'none';
      document.getElementById('successMsg').classList.add('show');
      setTimeout(closeModal, 3500);
    }

    function sendContact(btn) {
      btn.textContent = '✅ Message Sent!';
      btn.style.background = 'linear-gradient(135deg, #4caf50, #1a3a1f)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '📤 Send Message';
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    }
