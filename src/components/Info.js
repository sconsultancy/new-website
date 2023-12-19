"use client";

import React, { useState } from "react";
function Info() {
  const [readMore, setReadMore] = useState(false);
  const handleInfoClick = (e) => {
    e.preventDefault();
    setReadMore(!readMore);
  };

  return (
    <div
      id="info"
      className="flex justify-evenly items-center max-lg:flex-col max-lg:space-y-16 py-[100px]"
    >
      <div className="info_content_image_backgound">
        <img src="/assets/info_image.png" alt="" />
      </div>
      <div className="flex flex-col items-start">
        <span className=" white max-w-[500px] pb-6 text-[22px] max-sm:text-lg max-sm:max-w-[75vw]">
          {readMore ? (
            <span>
              <p>
                I am happy to be back with the Zee TV family with Serial
                &quot;MITHAI&quot; currently on - aired. I was last seen in
                ZeeTV Show MANMOHINI. In MITHAI i am playing an integral part
                and prominent role of Animesh Mishra. My son will be married to
                the lead boy&apos;s sister.
              </p>
              <p className=" mt-6">
                I am making a comeback to TV after my stint with Manmohini. This
                is my first work after the Covid breakout. I am grateful to the
                channel for giving me this opportunity. Producer/ Director
                Arvind Babbal Sir and Casting Director Darpan Srivastavji have
                given me a very delightful role, and I look forward to this
                stint. Mine will be a positive character. One of my sons is
                married to the main lead&apos;s sister. My other son is on the
                verge of getting married to the other daughter from the same
                house.So this family of mine will play a huge part in the
                narrative.
              </p>
              <p className=" mt-6">
                RECENTLY I have done a serial MANMOHINI (Zeetv). I did a
                Prominent and Continuity role as a GIRIJA SHANKAR for around 8
                months. I played many shades of comedy and did a Prominent and
                Continuity role as a GIRIJA SHANKAR for around 8 months. In
                serial, I played many shades like comedy, negative, serious,
                Settled, etc.
              </p>
              <p className=" mt-6">
                You can consider me in any kind of Role. Thanks.🙂
              </p>
            </span>
          ) : (
            <span>
              <p>
                I am happy to be back with the Zee TV family with Serial
                &quot;MITHAI&quot; currently on - aired. I was last seen in
                ZeeTV Show MANMOHINI. In MITHAI i am playing an integral part
                and prominent role of Animesh Mishra. My son will be married to
                the lead boy&apos;s sister.
              </p>
              <p className=" mt-6">
                I am making a comeback to TV after my stint...
              </p>
            </span>
          )}
        </span>
        <button className="info_readMore" onClick={handleInfoClick}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default Info;
