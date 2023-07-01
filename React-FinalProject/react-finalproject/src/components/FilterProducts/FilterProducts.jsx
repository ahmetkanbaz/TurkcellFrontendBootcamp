import Button from "../../common/Button/Button";
import SingleProduct from "../Products/SingleProduct/SingleProduct";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FilterProductsStyle } from "./FilterProductsStyle";
import { useEffect } from "react";
import {
  setFilterOptions,
  setSortOption,
  setFilteredProducts,
} from "../../redux/slices/filterSlice/filterSlice";
import {fetchAllProducts} from '../../utils/request'

const FilterProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const searchQuery = useSelector((state) => state.filter.searchQuery);
  const sortOption = useSelector((state) => state.filter.sortOption);
  const filterOptions = useSelector((state) => state.filter.filterOptions);
  const filteredProducts = useSelector(
    (state) => state.filter.filteredProducts
  );

  const handleSort = (selectedItem) => {
    dispatch(setSortOption(selectedItem));
  };

  const handleFilter = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    dispatch(
      setFilterOptions(
        checked
          ? [...filterOptions, value]
          : filterOptions.filter((option) => option !== value)
      )
    );
  };
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [])

  useEffect(() => {
    let tempFilteredProducts = [...allProducts];
    if (searchQuery) {
      tempFilteredProducts = tempFilteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterOptions?.length > 0) {
      tempFilteredProducts = tempFilteredProducts.filter((product) =>
        filterOptions.includes(product.category)
      );
    }

    switch (sortOption) {
      case "Title A-Z":
        tempFilteredProducts = tempFilteredProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "Title Z-A":
        tempFilteredProducts = tempFilteredProducts.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
      case "Category A-Z":
        tempFilteredProducts = tempFilteredProducts.sort((a, b) =>
          a.category.localeCompare(b.category)
        );
        break;
      case "Category Z-A":
        tempFilteredProducts = tempFilteredProducts.sort((a, b) =>
          b.category.localeCompare(a.category)
        );
        break;
      case "Price Rising":
        tempFilteredProducts = tempFilteredProducts.sort(
          (a, b) => a.price - b.price
        );
        break;
      case "Price Decreasing":
        tempFilteredProducts = tempFilteredProducts.sort(
          (a, b) => b.price - a.price
        );
        break;
      default:
        break;
    }
    dispatch(setFilteredProducts(tempFilteredProducts));
  }, [searchQuery, sortOption, filterOptions]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>There is an error</div>;
  }
  return (
    <FilterProductsStyle>
      <div className="container py-4">
        <div className="row pb-5">
          <div className="col-md-3 sticky-lg-top">
            <h4 className="pb-3 fw-bold">Filter</h4>
            <div className="border-bottom py-3 filterCategory">
              <h6 className="fw-bold">Category</h6>
              <div>
                <input
                  type="checkbox"
                  id="electronicsCheckbox"
                  value="electronics"
                  checked={filterOptions?.includes("electronics")}
                  onChange={(e) => handleFilter(e)}
                />
                <label htmlFor="electronicsCheckbox">Electronics</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="jeweleryCheckbox"
                  value="jewelery"
                  checked={filterOptions?.includes("jewelery")}
                  onChange={(e) => handleFilter(e)}
                />
                <label htmlFor="jeweleryCheckbox">Jewelery</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="mensClothingCheckbox"
                  value="men's clothing"
                  checked={filterOptions?.includes("men's clothing")}
                  onChange={(e) => handleFilter(e)}
                />
                <label htmlFor="mensClothingCheckbox">Men`s Clothing</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="womensClothingCheckbox"
                  value="women's clothing"
                  checked={filterOptions?.includes("women's clothing")}
                  onChange={(e) => handleFilter(e)}
                />
                <label htmlFor="womensClothingCheckbox">Women`s Clothing</label>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-between pb-3 align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <h4 className="fw-bold">Products</h4>
                <span>{filteredProducts.length} puppies</span>
              </div>
              <div className="dropdown">
                <Button
                  padding="0.25rem 0.625rem"
                  className="dropdown-toggle"
                  backgroundcolor="transparent"
                  color="#667479"
                  fontSize="0.875rem"
                  icon={<AiOutlineDown size="1.1rem" />}
                  buttonText="Sort by: Popular"
                  iconPosition="right"
                  dataBsToggle="dropdown"
                />
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("default")}
                    >
                      Default
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Title A-Z")}
                    >
                      Title A-Z
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Title Z-A")}
                    >
                      Title Z-A
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Category A-Z")}
                    >
                      Category A-Z
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Category Z-A")}
                    >
                      Category Z-A
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Price Rising")}
                    >
                      Price Rising
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Price Decreasing")}
                    >
                      Price Decreasing
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center g-3">
              {filteredProducts.map((singleProduct) => (
                <SingleProduct
                  key={singleProduct.id}
                  singleProduct={singleProduct}
                  columnSize="col-lg-4 col-md-6 col-6"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FilterProductsStyle>
  );
};

export default FilterProducts;
