export default function Footer({
  name,
  email,
  address,
  website
  // phone,
  // bankAccount,
  // bankName,
}) {
    return (
        <>
        {/* Footer */}
        <footer className="footer border-t-2 border-gray-300 pt-5">
          <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your name:</span> {name}
          </li>
          <li>
            <span className="font-bold">Your email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Phone number:</span> 72822298
            {/* {phone} */}
          </li>
          <li>
            <span className="font-bold">Bank:</span> jdnnjdj
            {/* {bankName} */}
          </li>
          <li>
            <span className="font-bold">Account holder:</span> {name}
          </li>
          <li>
            <span className="font-bold">Account number:</span> bnk acnt
            {/* {bankAccount} */}
          </li>
          <li>
            <span className="font-bold">Website:</span>{" "}
            <a href={website} target="_blank" rel="noopenner noreferrer">
              {website}
            </a>
          </li>
          </ul>
        </footer>
        </>
    )
}