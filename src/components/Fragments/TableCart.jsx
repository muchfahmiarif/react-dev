const TableCart = () => {
  return (
    <table className="text-left table-auto border-separate border-spacing-x-5 ">
      <thead>
        <tr>
          <th>Product</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((items) => {
            const product = products.find((item) => item.id === items.id);
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{items.qty}</td>
                <td>{product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                <td>{(items.qty * product.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
              </tr>
            );
          })}
        <tr ref={totalPriceRef}>
          <td colSpan="3">
            <b>Total</b>
          </td>
          <td>
            <b>
              {totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
