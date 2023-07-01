/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
const CartStock = ({ product, onUpdateStock }) => {
  const [stock, setStock] = useState(product.stock);

  useEffect(() => {
    // Kullanıcının sepete giriş yaptığında stok adedini güncelle
    if (product.stock !== stock) {
      setStock(product.stock);
      onUpdateStock(product.id, product.stock);
    }
  }, [product, stock, onUpdateStock]);

  const handleBuyClick = () => {
    if (stock > 0) {
      setStock(stock - 1);
      onUpdateStock(product.id, stock - 1);
    }
  };
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Stok Adedi: {stock}</p>
      <button onClick={handleBuyClick} disabled={stock === 0}>
        Satın Al
      </button>
    </div>
  );
}

export default CartStock