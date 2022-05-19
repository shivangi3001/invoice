export default function MainDetails({name, address}) {
    return(
        <>
        <section className="flex flex-col items-end justify-end">
        {/* <input type="text" name="text" id="text" placeholder="your name"
        required /> */}
        <h2 className="font-bold text-xl uppercase md:text-4xl" > {name} </h2>
        <p>{address}</p>
       </section>
        </>
    )
}