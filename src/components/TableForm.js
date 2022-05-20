import React, { useEffect } from "react"
import {v4 as uuidv4}  from "uuid"

export default function TableForm({description,
    setDescription, quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    // total,
    // setTotal,

}) {

      // Submit form function
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount
    }

    setDescription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setList([...list, newItems])
    console.log(list)

// Calculate items amount function
    useEffect(() => {
        const calculateAmount = (amount) => {
            setAmount(price*quantity)
        }

        calculateAmount(amount)
    }, [amount, price, quantity, setAmount])

    

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:mt-15">
            <label htmlFor="description">
                Item description
            </label>
            <input type="text" name="description" id="description"
            placeholder="Item description" value={description}
            onChange={(e) => setDescription(e.target.value)} 
            />
            </div>

            <div className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
            <label htmlFor="quantity">
                Quantity
            </label>
            <input type="text" name="quantity" id="quantity"
            placeholder="Item quantity" value={quantity}
            onChange={(e) => setQuantity(e.target.value)} 
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="price">
            Price
            </label>
            <input type="text" name="price" id="price"
            placeholder="Price " value={price}
            onChange={(e) => setPrice(e.target.value)} 
            />
            </div>

            <div className="flex flex-col">
            <label htmlFor="amount">
                Amount
            </label>
            <p>
                {amount}
            </p>
            </div>

        </div>
        <button type="submit"
        className="bg-blue-500 text-white-font-bold py-2 px-8 rounded shadow
        border-2 border-blue-500 hover:bg-transparent 
        transition-all duration-300 mb-9
        hover:text-blue-500">Add Items</button>
    </form>

    {/* Teble items */}
    <ul>
        {list.map(({id, description, quantity, price, amount}) => (
            <>
                <li key={id}>{description}</li>
                <li key={id}>{price}</li>
                <li key={id}>{quantity}</li>
                <li key={id}>{amount}</li>
            </>
            
        ))}
    </ul>


    </>
    )
}