import Link from "next/link";
import Navbar from "@/components/Navbar";
import Info from "@/components/Info";
import Gallery from "@/components/Gallery";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  const iconLink = {
    facebook: "https://bit.ly/3L5UC9s",
    linkedIn: "https://bit.ly/3D5iuY2",
    instagram: "http://instagram.com/rajeshganeshsharmaa",
    youtube: "https://www.youtube.com/channel/UCAiWW0hs-PxqMZScGaY5piw",
    imdb: "https://imdb.to/3JF1IkZ",
    twitter: "https://bit.ly/3JCiZvl",
  };

  return (
    <div>
      <div
        id="home"
        className=" relative flex flex-col justify-between justify-items-stretch pt-10 min-h-screen bg-gradient-to-t from-[rgba(6, 44, 48, 0.53)] to-[rgba(6, 44, 48, 0.53)]"
        //  Place ID - hero_bg
        style={{
          backgroundImage:
            "linear-gradient(rgba(6, 44, 48, 0.53),rgba(6, 44, 48, 0.53)),url(assets/hero/Home_background.png)",
        }}
      >
        {/* PlaceID hero_img */}
        <img
          src="assets/hero/home_heroImage.png"
          alt=""
          className="hero_image"
        />
        <div className="home_content">
          <div className="home_right">
            <div className="home_content_header">
              <h1 className="white">RAJESH GANESH SHARMA</h1>
            </div>
            <div className="logos white ">
              <div className="home_logos">
                <div className="flex bottom-14 space-x-8 mt-8 justify-center">
                  <Link href={iconLink.facebook}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 fill-[#fff]   hover:fill-orange-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </Link>
                  <Link href={iconLink.youtube}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 fill-[#fff]   hover:fill-orange-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </Link>
                  <Link href={iconLink.twitter}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 fill-[#fff]   hover:fill-orange-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>

                  <Link href={iconLink.instagram}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 fill-[#fff]   hover:fill-orange-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                  <Link href={iconLink.imdb} className="imdbIcon">
                    <svg
                      className="w-9 fill-[#fff]   hover:fill-orange-300"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>imdb</title>
                      <path d="M22.231 11.348v9.159h2.134l0.143-0.581c0.173 0.219 0.386 0.397 0.63 0.526l0.011 0.005c0.246 0.107 0.533 0.169 0.835 0.169 0.003 0 0.006 0 0.009-0h-0c0.016 0.001 0.035 0.001 0.054 0.001 0.344 0 0.662-0.111 0.921-0.299l-0.005 0.003c0.246-0.166 0.43-0.407 0.52-0.691l0.003-0.009c0.071-0.327 0.112-0.702 0.112-1.087 0-0.048-0.001-0.096-0.002-0.144l0 0.007v-2.572c0.001-0.055 0.002-0.121 0.002-0.186 0-0.315-0.016-0.626-0.048-0.932l0.003 0.038c-0.033-0.198-0.107-0.375-0.214-0.527l0.003 0.004c-0.136-0.181-0.315-0.323-0.523-0.411l-0.008-0.003c-0.23-0.091-0.496-0.144-0.775-0.144-0.015 0-0.030 0-0.045 0l0.002-0c-0.307 0.001-0.599 0.060-0.868 0.165l0.016-0.006c-0.249 0.127-0.459 0.294-0.63 0.496l-0.002 0.003v-2.986zM25.309 18.29c0.003 0.049 0.004 0.107 0.004 0.165 0 0.237-0.026 0.468-0.076 0.69l0.004-0.021c-0.041 0.118-0.236 0.177-0.379 0.177-0.007 0.001-0.016 0.001-0.024 0.001-0.114 0-0.211-0.069-0.253-0.167l-0.001-0.002c-0.052-0.185-0.081-0.397-0.081-0.616 0-0.056 0.002-0.112 0.006-0.168l-0 0.007v-2.422c-0.003-0.048-0.005-0.103-0.005-0.16 0-0.219 0.026-0.431 0.076-0.634l-0.004 0.018c0.043-0.091 0.134-0.153 0.24-0.153 0.011 0 0.021 0.001 0.032 0.002l-0.001-0c0.143 0 0.337 0.051 0.387 0.177 0.051 0.181 0.080 0.39 0.080 0.605 0 0.051-0.002 0.102-0.005 0.152l0-0.007zM18.916 20.508c0.048 0.001 0.104 0.002 0.16 0.002 0.394 0 0.78-0.034 1.154-0.1l-0.040 0.006c0.273-0.050 0.513-0.166 0.711-0.331l-0.002 0.002c0.198-0.163 0.341-0.386 0.403-0.641l0.002-0.008c0.084-0.415 0.132-0.893 0.132-1.381 0-0.093-0.002-0.185-0.005-0.277l0 0.013v-3.213c0.003-0.091 0.004-0.197 0.004-0.304 0-0.508-0.035-1.009-0.103-1.498l0.006 0.057c-0.054-0.312-0.192-0.584-0.39-0.802l0.001 0.001c-0.243-0.257-0.559-0.442-0.915-0.521l-0.012-0.002c-0.546-0.106-1.173-0.167-1.815-0.167-0.136 0-0.271 0.003-0.405 0.008l0.019-0.001h-1.772v9.159zM18.942 13.001c0.093 0.053 0.159 0.144 0.176 0.251l0 0.002c0.030 0.184 0.048 0.395 0.048 0.611 0 0.067-0.002 0.134-0.005 0.2l0-0.009v3.551c0.006 0.072 0.009 0.155 0.009 0.24 0 0.312-0.047 0.612-0.134 0.896l0.006-0.022c-0.076 0.143-0.287 0.211-0.624 0.211v-6.014c0.028-0.003 0.061-0.004 0.094-0.004 0.155 0 0.303 0.033 0.437 0.092l-0.007-0.003zM15.239 11.348v9.159h-2.066v-6.182l-0.835 6.182h-1.476l-0.869-6.047-0.008 6.047h-2.075v-9.159h3.070c0.093 0.557 0.186 1.206 0.287 1.957l0.337 2.328 0.548-4.285zM7.108 11.348v9.159h-2.37v-9.159zM28.978 1.691c0.785 0.060 1.4 0.711 1.4 1.506 0 0.001 0 0.003 0 0.004v-0 25.598c0 0.001 0 0.002 0 0.003 0 0.787-0.6 1.433-1.368 1.507l-0.006 0h-25.868c-0.74-0.067-1.322-0.658-1.375-1.395l-0-0.005v-25.809c0.049-0.754 0.646-1.355 1.395-1.408l0.005-0zM28.978 1.074h-25.817c-1.076 0.063-1.936 0.911-2.015 1.977l-0 0.007-0.001 25.851c0.054 1.063 0.881 1.917 1.927 2.013l0.008 0.001c0.016 0.002 0.034 0.003 0.052 0.003 0.001 0 0.003 0 0.004-0h25.868q0.027 0 0.054-0.003c1.089-0.109 1.932-1.018 1.936-2.125v-25.598c-0.004-1.119-0.866-2.035-1.963-2.124l-0.008-0c-0.013-0.002-0.029-0.002-0.045-0.002-0 0-0.001 0-0.001 0h0z"></path>
                    </svg>
                  </Link>
                  <Link href={iconLink.linkedIn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 fill-[#fff]   hover:fill-orange-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </Link>
                </div>
                <Link href={iconLink.facebook}>
                  <i className="fa-brands fa-facebook-f home_icon "></i>
                </Link>
                <Link href={iconLink.linkedIn}>
                  <i className="fa-brands fa-linkedin-in home_icon"></i>
                </Link>
                <Link href={iconLink.instagram}>
                  <i className="fa-brands fa-instagram home_icon"></i>
                </Link>
                <Link href={iconLink.youtube}>
                  <i className="fa-brands fa-youtube home_icon"></i>
                </Link>
                <Link href={iconLink.imdb}>
                  <i className="fa-brands fa-imdb home_icon imdbIcon"></i>
                </Link>
                <Link href={iconLink.twitter}>
                  <i className="fa-brands fa-twitter home_icon"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="home_bottom"
          // Place ID = hero_svg
          style={{ backgroundImage: "url(assets/hero/home_Vector.svg)" }}
        ></div>
      </div>
      <Navbar></Navbar>
      <Info></Info>
      <Gallery></Gallery>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
{
  /*
  -> Create Gallery
  -> Create Tiktok Like Short imported from YT
-> Create List of Images
-> Devide them in sections
-> Create place ID
-> Add all images through database
-> How to add images
-> How to change Image
-> How to Delete Image
-> How to finalize and post it on github




->Correct Navbar
->Correct Gallery
-> Correct Footer
-> Check Responsivenesss


After Deploy
->Optimize Images

*/
}
