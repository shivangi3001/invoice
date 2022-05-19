

function App() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
     <main>
       <header>
         <div>
           <h2>Invoice</h2>
         </div>

        <div>
          <ul>
            <li><button onClick={handlePrint}>Print</button></li>
            <li>Download</li>
            <li>Send</li>
          </ul>
        </div>

       </header>

       <section>
        {/* <input type="text" name="text" id="text" placeholder="your name"
        required /> */}
        <h2> Shivangi Chaurasia </h2>
        <p>your address</p>
       </section>

       {/* client section */}
       <section>
         <h2>name of client</h2>
         <p>client's address</p>
       </section>

{/* dates */}
       <articles>
         <ul>
           <li>Invoice number: </li>
           <li>Invoice date: </li>
           <li>Due date: </li>
         </ul>
       </articles>

{/* table */}



{/* Notes */}
        <section>
          <p> Notes to the client</p>
        </section>



        {/* Footer */}
        <footer>
          <ul>
            <li>Your name</li>
            <li>Your email</li>
            <li>Phone number</li>
            <li>Bank</li>
            <li>Account Number</li>
          </ul>
        </footer>

     </main>

    </>
  );
}

export default App;
