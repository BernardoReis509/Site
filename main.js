const cartItems = {};
let cartCount = 0;

function addToCart(productName, productPrice) {
    if (cartItems[productName]) {
        cartItems[productName].quantity++;
    } else {
        cartItems[productName] = { price: productPrice, quantity: 1 };
    }
    cartCount++;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    for (const [name, item] of Object.entries(cartItems)) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${name} - R$${item.price.toFixed(2)}</span>
            <div class="cart-item-controls">
                <button onclick="changeQuantity('${name}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity('${name}', 1)">+</button>
            </div>
        `;
        cartList.appendChild(li);
    }
    const cartCountBadge = document.getElementById('cart-count');
    if (cartCount > 0) {
        cartCountBadge.style.display = 'flex';
        cartCountBadge.textContent = cartCount;
    } else {
        cartCountBadge.style.display = 'none';
    }
}

function changeQuantity(productName, delta) {
    const item = cartItems[productName];
    item.quantity += delta;
    if (item.quantity === 0) {
        showModal(productName);
    } else {
        cartCount += delta;
        updateCart();
    }
}

function showModal(productName) {
    const modal = document.getElementById('confirmationModal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <p>Deseja remover este produto do carrinho?</p>
        <button class="modal-button" onclick="confirmRemove('${productName}', true)">Sim</button>
        <button class="modal-button" onclick="confirmRemove('${productName}', false)">Não</button>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

function confirmRemove(productName, remove) {
    if (remove) {
        delete cartItems[productName];
        cartCount--;
    } else {
        cartItems[productName].quantity = 1;
    }
    closeModal();
    updateCart();
}

function toggleCart() {
    document.getElementById('cart').classList.toggle('expanded');
}

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        productList.appendChild(product.render());
    });
    updateCart(); // Atualiza o carrinho ao carregar a página, se necessário
});
