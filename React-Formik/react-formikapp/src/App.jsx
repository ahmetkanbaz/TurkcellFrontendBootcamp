import FormikForm from "./FormikForm";
import Top from "./components/Top";
import ProductSlider from "./components/Slider/ProductSlider";
import Rate from "./components/Rate/Rate";

function App() {
  const productImages = [
    'https://picsum.photos/200/300',
    'https://cdn.pazarium.com.tr/ip-detayli-beli-lastikli-dar-paca-siyah-pantolon-kadin-pantolon-sumeyye-tekstil-390959-66-O.jpg',
    'https://picsum.photos/200/300'
  ];
  return (
    <>
      <Top />
      <FormikForm />
      <Rate rate={3.5}/>
      <Rate rate={4.5}/>
      <ProductSlider images={productImages} />
    </>
  );
}

export default App;
