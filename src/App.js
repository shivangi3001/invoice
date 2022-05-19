import {useState } from "react"
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import Table from "./components/Table"
import Header from "./components/Header"
import MainDetails from "./components/MainDetails"
import ClientDetails from "./components/ClientDetails"
import Dates from "./components/Dates"

function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  // const [description, setDescription] = useState("")
  // const [quantity, setQuantity] = useState("")
  // const [price, setPrice] = useState("")
  // const [amount, setAmount] = useState("")
  // const [list, setList] = useState([])
  // const [total, setTotal] = useState(0)
  // const [width] = useState(641)


  const handlePrint = () => {
    window.print()
  }

  return (
    <>
     <main className="m-5 p-5 rounded shadow xl:max-w-4xl xl:mx-auto bg-white">
      {showInvoice ? ( <div>
        <Header handlePrint={handlePrint}/>
        <MainDetails />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer />

        <button onClick={() => setShowInvoice(false)} className="bg-blue-500 text-white-font-bold py-2 px-8 rounded shadow
          border-2 border-blue-500 hover:bg-transparent 
          transition-all duration-300 mt-5
          hover:text-blue-500" >Edit Information</button>
       </div>
       ) : (
        <>
        {/* name, address, email, phone, bank name,
        bank account number, website, client name, 
        client address, invoice number, invoice date,
        due date, notes */}
        <div className="flex flex-col justify-center">
          <input type="text" name="text" id="text" placeholder="Enter your name"
          autoComplete="off" />
         
          <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white-font-bold py-2 px-8 rounded shadow
          border-2 border-blue-500 hover:bg-transparent 
          transition-all duration-300
          hover:text-blue-500">
            Preview Invoice
          </button>
        </div>
         
        </>
       )}
      
       

     </main>

    </>
  );
}

export default App;
