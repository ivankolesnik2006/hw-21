// Виклик функції showCategories при завантаженні сторінки
window.addEventListener('DOMContentLoaded', showCategories);

function submitOrder(categoryId, productId) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const city = document.getElementById('city').value;
  const postOffice = document.getElementById('postOffice').value;
  const paymentMethod = document.getElementById('paymentMethod').value;
  const quantity = document.getElementById('quantity').value;
  const comment = document.getElementById('comment').value;

  if (!fullName || !city || !postOffice || !paymentMethod || !quantity) {
    alert("Будь ласка, заповніть всі обов'язкові поля.");
    return;
  }

  const selectedCategory = data.find(category => category.key === categoryId);
  const selectedProduct = selectedCategory.products.find(product => product.id == productId);

  const orderInfo = `
    <h2>Інформація про замовлення</h2>
    <p><strong>Товар:</strong> ${selectedProduct.name}</p>
    <p><strong>Ціна:</strong> ${selectedProduct.price}</p>
    <p><strong>ПІБ покупця:</strong> ${fullName}</p>
    <p><strong>Місто:</strong> ${city}</p>
    <p><strong>Склад Нової пошти:</strong> ${postOffice}</p>
    <p><strong>Спосіб оплати:</strong> ${paymentMethod}</p>
    <p><strong>Кількість:</strong> ${quantity}</p>
    <p><strong>Коментар:</strong> ${comment}</p>
  `;

  const info = document.getElementById('info');
  info.innerHTML = orderInfo;

  clearOrderForm();
}

function clearOrderForm() {
  document.getElementById('checkoutForm').reset();
}
