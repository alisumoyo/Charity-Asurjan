import Link from "next/link"

const CommonSocialIcon = () => {
   return (
      <>
         <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
         <Link href="https://twitter.com/login"><i className="fab fa-twitter"></i></Link>
         <Link href="https://support.google.com/answer/2451065?hl=en"><i className="flaticon-google-plus-logo"></i></Link>
         <Link href="https://linkedin.com/login"><i className="flaticon-linkedin"></i></Link>
      </>
   )
}

export default CommonSocialIcon

