export function getItems() {
    return JSON.parse(localStorage.getItem('cart_audiophile')) || []
}

export function setItems(item) {
    const setItems = localStorage.setItem('cart_audiophile', JSON.stringify(item));
    return setItems;
}
