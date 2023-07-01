import FormikForm from "./FormikForm";
import Top from "./components/Top";
import ProductSlider from "./components/Slider/ProductSlider";
import Rate from "./components/Rate/Rate";
import { useState } from "react";
import CartStock from "./components/CartStock/CartStock";

function App() {
  const productImages = [
    'https://picsum.photos/200/300',
    'https://cdn.pazarium.com.tr/ip-detayli-beli-lastikli-dar-paca-siyah-pantolon-kadin-pantolon-sumeyye-tekstil-390959-66-O.jpg',
    'https://picsum.photos/200/300'
  ];
  const [products, setProducts] = useState([
    { id: 1, name: 'Ürün 1', stock: 5 },
    { id: 2, name: 'Ürün 2', stock: 3 },
    { id: 3, name: 'Ürün 3', stock: 2 },
  ]);

  const onUpdateStock = (productId, newStock) => {
    // Ürün listesini güncelle
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, stock: newStock };
      }
      return product;
    });

    setProducts(updatedProducts);
    alert('Ürün stok adedi güncellendi!');
  };


  return (
    <>
      <Top />
      <FormikForm />
      <Rate rate={3.5}/>
      <Rate rate={4.5}/>
      <ProductSlider images={productImages} />
      <h1>Ürün Listesi</h1>
      {products.map((product) => (
        <CartStock key={product.id} product={product} onUpdateStock={onUpdateStock} />
      ))}
    </>
  );
}

export default App;
