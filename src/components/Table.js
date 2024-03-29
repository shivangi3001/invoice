export default function Table({description, quantity,
    price,
    amount

}) {
    return (
        <>
        {/* table */}
        <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        
        <tbody>
        <tr>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{amount}</td>
        </tr>
        </tbody>
        


        {/* {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))} */}
      </table>
        </>
    )
}

