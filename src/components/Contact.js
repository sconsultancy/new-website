import Link from "next/link";
import React from "react";
const iconLink = {
  facebook: "https://bit.ly/3L5UC9s",
  linkedIn: "https://bit.ly/3D5iuY2",
  instagram: "http://instagram.com/rajeshganeshsharmaa",
  youtube: "https://www.youtube.com/channel/UCAiWW0hs-PxqMZScGaY5piw",
  imdb: "https://imdb.to/3JF1IkZ",
  twitter: "https://bit.ly/3JCiZvl",
};

function Contact() {
  return (
    <div id="contact" className=" mt-32">
      <div className=" flex max-lg:flex-col max-lg:items-center max-lg:space-y-16">
        {/* Contact left */}
        <div className=" flex   items-center  justify-end max-lg:justify-center w-[50vw] max-lg:w-full">
          <div className=" flex  items-end max-[440px]:flex-col-reverse max-[440px]:items-center">
            <div className="flex  min-[440px]:flex-col bottom-14 min-[440px]:space-y-[15px] max-[440px]:space-x-[15px] py-[20px] p-[10px] justify-center bg-[#0D2427]">
              <Link href={iconLink.facebook}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 fill-[#fff]   hover:fill-orange-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link href={iconLink.youtube}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 fill-[#fff]   hover:fill-orange-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
              <Link href={iconLink.instagram}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 fill-[#fff]   hover:fill-orange-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href={iconLink.linkedIn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 fill-[#fff]   hover:fill-orange-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </div>
            {/* Place ID - Contact_Img */}
            <img
              src="assets/contact/contact_image.png"
              alt=""
              className="footer_image  max-[440px]:w-4/5"
            />
          </div>
        </div>
        {/* Contact Right */}
        <div className=" flex flex-col items-center bg-orange-300 footer_content w-[50vw] max-lg:w-full py-[200px] max-lg:py-[100px]">
          <div className=" max-w-[400px] max-[500px]:max-w-3/5">
            <p className=" text-2xl font-semibold my-3">Contact Me</p>
            <h2 className=" text-4xl font-bold my-3">Get In Touch</h2>
            <div className="flex max-[400px]:flex-col my-1 mt-4">
              <h3 className="text-xl font-medium">Contact No:</h3>
              <p className=" text-xl">+91-9820476993</p>
            </div>
            <div className="flex max-[400px]:flex-col  my-1">
              <h3 className="text-xl font-medium">Email Id:</h3>
              <p className=" text-xl">Rajeshsharma9284@gmail.com</p>

              {/* <p>Rajeshsharma9284@gmail.com</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
