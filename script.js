fetch('medicines.json')
  .then(res => res.json())
  .then(data => {
    const searchInput = document.getElementById('searchInput');
    const list = document.getElementById('medicineList');

    function renderList(filter = '') {
      list.innerHTML = '';
      data.filter(item => item.name.includes(filter)).forEach(med => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <strong>${med.name}</strong><br>
          <img src="${med.image}" alt="รูปยา" class="drug"><br>
          ${med.usage}
        `;
        card.onclick = () => {
          window.location.href = `detail.html?name=${med.name}`;
        };
        list.appendChild(card);
      });
    }

    searchInput.addEventListener('input', e => {
      renderList(e.target.value.trim());
    });

    renderList();
  });
