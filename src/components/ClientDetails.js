export default function ClientDetails({clientName, clientAddress }) {
    return(
        <>
        {/* client section */}
       <section className="mt-5">
         <h2 className="text-xl uppercase"><span className="font-bold">client's name:</span>  {clientName}</h2>
         <p><span className="font-bold">client's address:</span> {clientAddress}</p>
       </section>
        </>
    )
}



       

