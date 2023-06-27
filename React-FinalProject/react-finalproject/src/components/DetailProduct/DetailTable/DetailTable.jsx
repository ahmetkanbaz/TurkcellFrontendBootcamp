import PropTypes from 'prop-types'
const DetailTable = ({id}) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>Id</td>
          <td>: #{id}</td>
        </tr>
        <tr>
          <td>Category</td>
          <td>: Mens Clothing</td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>: 3 Yıldız</td>
        </tr>
        <tr>
          <td>Count</td>
          <td>: 120</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>
            : Pure breed Shih Tzu. Good body structure. With MKA cert and
            microchip. Father from champion lineage.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

DetailTable.propTypes = {
  id: PropTypes.string
}

export default DetailTable;
