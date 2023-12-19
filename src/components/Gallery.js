import React from "react";

function Gallery() {
  const tempArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div id="gallery">
        <div className=" grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-[680px]:grid-cols-1 gap-12 w-4/5 ">
          {tempArray.map((e, i) => {
            return (
              <div key={i} className=" flex justify-center">
                <img
                  src={`/assets/gallery/gallery_pic${e}.png`}
                  className="gallery_image items-center"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="gallery_bottom">
        <img
          src={"/assets/gallery/gallery_vector.svg"}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Gallery;
