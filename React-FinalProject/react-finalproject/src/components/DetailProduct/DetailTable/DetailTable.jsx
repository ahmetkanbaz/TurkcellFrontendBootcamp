import PropTypes from 'prop-types'
const DetailTable = ({detailProduct}) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>Id</td>
          <td>: #{detailProduct.id}</td>
        </tr>
        <tr>
          <td>Category</td>
          <td>: {detailProduct.category}</td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>: {detailProduct.rating?.rate}</td>
        </tr>
        <tr>
          <td>Count</td>
          <td>: {detailProduct.rating?.count}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>
            : {detailProduct.description}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

DetailTable.propTypes = {
  detailProduct: PropTypes.object
}

export default DetailTable;
