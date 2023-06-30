import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import {useFormik} from 'formik'
import updateProductSchema from "../../../schemas/updateProductSchema";
import FormError from "../../../common/FormError/FormError";

function UpdateProduct({ detailProduct, handleClose, show }) {
  const productsCategories = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ];
  const {handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting} = useFormik({
    initialValues: {
      modalProductName: detailProduct.title,
      modalProductDescription: detailProduct.description,
      modalProductImage: detailProduct.image,
      modalProductPrice: detailProduct.price,
      modalProductStock: detailProduct.rating.count,
      modalProductRate: detailProduct.rating.rate,
      modalProductCategory: detailProduct.category
    },
    validationSchema: updateProductSchema,
    onSubmit: async (values, bag) => {
      console.log(values)
      bag.resetForm()
    }
  })
  return (
    <>
      <Modal show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="modalProductName">Name:</label>
              <input
                type="text"
                className="form-control shadow-none border-secondary"
                id="modalProductName"
                name="modalProductName"
                value={values.modalProductName}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
              {
                touched.modalProductName && errors.modalProductName && (
                  <FormError message={errors.modalProductName} />
                )
              }
            </div>
            <div>
              <label htmlFor="modalProductDescription">Description:</label>
              <textarea
                type="text"
                className="form-control shadow-none border-secondary"
                id="modalProductDescription"
                name="modalProductDescription"
                value={detailProduct.description}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="modalProductImage">Image Url:</label>
              <input
                type="url"
                className="form-control shadow-none border-secondary"
                id="modalProductImage"
                name="modalProductImage"
                value={detailProduct.image}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div>
                  <label htmlFor="modalProductPrice">Price:</label>
                  <input
                    type="text"
                    className="form-control shadow-none border-secondary"
                    id="modalProductPrice"
                    name="modalProductPrice"
                    value={detailProduct.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div>
                  <label htmlFor="modalProductStock">Stock Count:</label>
                  <input
                    type="text"
                    className="form-control shadow-none border-secondary"
                    id="modalProductStock"
                    name="modalProductStock"
                    value={detailProduct.stock}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div>
                  <label htmlFor="modalProductRate">Rate:</label>
                  <input
                    type="text"
                    className="form-control shadow-none border-secondary"
                    id="modalProductRate"
                    name="modalProductRate"
                    value={detailProduct.rating.rate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div>
                  <label htmlFor="modalProductCategory">Category:</label>
                  <select
                    className="form-control shadow-none border-secondary"
                    id="modalProductCategory"
                    name="modalProductCategory"
                    value={detailProduct.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  >
                    <option value={detailProduct.category}>
                      {detailProduct.category.charAt(0).toUpperCase() +
                        detailProduct.category.substring(1)}
                    </option>
                    {productsCategories.map(
                      (category, i) =>
                        category.toLowerCase() !=
                          detailProduct.category.toLowerCase() && (
                          <option key={i}>{category}</option>
                        )
                    )}
                  </select>
                </div>
              </div>
            </div>
          <Button variant="primary" type="submit">Kaydet</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

UpdateProduct.propTypes = {
  detailProduct: PropTypes.object,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
};

export default UpdateProduct;
