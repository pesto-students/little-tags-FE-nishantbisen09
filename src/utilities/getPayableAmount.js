export default function getPayableAmount(
  cart = [],
  options = {
    TAX_RATE: 0.18,
    shippingCost: 40,
  }
) {
  function subtotal(items) {
    return items
      .map(({ price, quantity }) => price.current_price * quantity)
      .reduce((sum, i) => sum + i, 0);
  }

  const invoiceSubtotal = subtotal(cart);
  const baseCost = invoiceSubtotal + options.shippingCost;
  const tax = baseCost * options.TAX_RATE;
  const total = baseCost + tax;
  return {
    subTotal: invoiceSubtotal,
    amount: total * 100,
    tax,
    currency: 'INR',
    taxPercent: options.TAX_RATE * 100,
  };
}
