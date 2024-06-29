class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    render() {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${this.name}</h3>
            <p>${this.description}</p>
            <p>Preço: R$${this.price.toFixed(2)}</p>
            <button onclick="addToCart('${this.name}', ${this.price})">Adicionar ao Carrinho</button>
        `;
        return productDiv;
    }
}

const products = [
    new Product('TV Samsung', 'Smart TV 50" 4K', 2799.99),
    new Product('Notebook Dell', 'Notebook Dell Inspiron 15', 3499.99),
    new Product('Smartphone Apple', 'iPhone 12 64GB', 4999.99),
    new Product('Console Sony', 'PlayStation 5', 4599.99),
    new Product('Smartwatch Samsung', 'Galaxy Watch 4', 1199.99),
    new Product('Fone de Ouvido JBL', 'JBL Tune 500BT', 299.99),
    new Product('Câmera Canon', 'Câmera DSLR Canon EOS Rebel', 2999.99),
    new Product('Impressora HP', 'Impressora Multifuncional HP', 699.99),
    new Product('Monitor LG', 'Monitor LED 24" Full HD', 899.99),
    new Product('Teclado Mecânico', 'Teclado Mecânico RGB', 349.99),
    new Product('Mouse Gamer', 'Mouse Gamer Logitech', 249.99),
    new Product('Caixa de Som', 'Caixa de Som Bluetooth', 199.99),
    new Product('Tablet Samsung', 'Tablet Samsung Galaxy', 1999.99),
    new Product('Cadeira Gamer', 'Cadeira Gamer DXRacer', 1199.99),
    new Product('Roteador TP-Link', 'Roteador Wi-Fi 6', 399.99),
    new Product('HD Externo', 'HD Externo 1TB', 399.99),
    new Product('Smart TV LG', 'Smart TV LG 55" 4K', 3299.99),
    new Product('Geladeira Brastemp', 'Geladeira Brastemp Frost Free', 3999.99),
    new Product('Micro-ondas Electrolux', 'Micro-ondas Electrolux 20L', 499.99),
];
