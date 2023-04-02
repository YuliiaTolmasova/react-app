const PriceTable = (props) => {

	return (
        <table>
        <tr>
            <th>Column 1 Header {props.header}</th>
            <th>Column 2 Header</th>
        </tr>
        <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
        </tr>
        <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
        </tr>
        <tr>
            <td>Row 3, Column 1</td>
            <td>Row 3, Column 2</td>
        </tr>
        </table>
)}
export default PriceTable;