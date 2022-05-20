export default function Header({handlePrint}) {
    return(
        <>
        {/* Header */}
       <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
         <div>
           <h2 className="font-bold uppercase tracking-wide text-4xl
           mb-3">Invoice</h2>
         </div>

        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li><button onClick={handlePrint}
            className="bg-gray-500 text-white-font-bold py-2 px-8 rounded shadow
            border-2 border-gray-500 hover:bg-transparent 
            transition-all duration-300 
            hover:text-gray-500">
              Print</button></li>
            <li className="mx-2">
              <button className="bg-blue-500 text-white-font-bold py-2 px-8 rounded shadow
          border-2 border-blue-500 hover:bg-transparent 
          transition-all duration-300 
          hover:text-blue-500">
              Download</button></li>
            <li><button className="bg-green-500 text-white-font-bold py-2 px-8 rounded shadow
          border-2 border-green-500 hover:bg-transparent 
          transition-all duration-300 
          hover:text-green-500" >Send</button></li>
          </ul>
        </div>

       </header>
        </>
    )
}