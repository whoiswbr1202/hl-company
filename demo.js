const selectSwap = document.querySelector('.select-swap');
const select = selectSwap.querySelector('.select-swap__select');
const swapItems = selectSwap.querySelectorAll('.select-swap__swap-item');

// Khi một swap item được click, chọn option tương ứng và kích hoạt active class
swapItems.forEach(item => {
  item.addEventListener('click', () => {
    const value = item.innerText;
    const option = select.querySelector(`option[value="${value}"]`);
    select.value = option.value;
    swapItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});

// Khi select thay đổi, đặt active class cho swap item tương ứng
select.addEventListener('change', () => {
  const value = select.value;
  swapItems.forEach(item => item.classList.remove('active'));
  const activeItem = selectSwap.querySelector(`.select-swap__swap-item:nth-child(${parseInt(value) + 1})`);
  activeItem.classList.add('active');
});
