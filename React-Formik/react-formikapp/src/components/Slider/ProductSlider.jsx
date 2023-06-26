/* eslint-disable react/prop-types */

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductSlider = ({ images }) => {
  const imageItems = images.map((image, index) => ({
    original: image,
    thumbnail: image,
    originalAlt: `Product Image ${index}`,
    thumbnailAlt: `Thumbnail ${index}`,
  }));

  const renderItem = (item) => {
    return (
      <div className="image-gallery-image">
        <img
          src={item.original}
          alt={item.originalAlt}
          style={{ borderRadius: "42px", height: "auto" }}
        />
      </div>
    );
  };

  const renderThumbInner = (item) => {
    return (
      <div className="image-gallery-thumbnail-inner">
        <img
          src={item.thumbnail}
          alt={item.thumbnailAlt}
          style={{ width: "100%", height: "auto", borderRadius: "12px" }}
        />
      </div>
    );
  };

  return (
    <div>
      <ImageGallery
        items={imageItems}
        renderItem={renderItem}
        renderThumbInner={renderThumbInner}
        showNav={true}
      />
    </div>
  );
};

export default ProductSlider;
