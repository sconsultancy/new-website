import React from "react";

function Resume() {
  return (
    <div id="resume" className=" mt-16">
      <div className=" flex justify-evenly max-lg:flex-col  max-lg:items-center ">
        {/* Resume Left */}
        <div>
          <h3 className="resume_content_header max-lg:mb-24">Feature Work</h3>
        </div>
        {/* Resume Right */}
        <div className=" flex flex-col text-center space-y-14 items-center ">
          <div className=" flex  min-[700px]:space-x-24 max-[700px]:flex-col   max-[700px]:max-w-[85vw]  max-[700px]:items-center   max-[700px]:space-y-4 ">
            <div className="resume_data_header">
              <h3 className=" min-w-[10rem] text-2xl font-black">
                Trideviyaan
              </h3>
              <p className=" mt-1 font-medium">2018</p>
            </div>
            <div className=" text-2xl max-w-[325px] max-[700px]:max-w-[65vw] min-[700px]:text-left">
              <p className="">Full House Entertainment. Sony Sabtv.</p>
              <p className=" mt-1 ">
                Did Prominent and Continuity Role Name - Sunder, Brother of
                Veteran Actor Ranjeet Ji for 8 months.
              </p>
            </div>
          </div>
          <div className=" flex  min-[700px]:space-x-24 max-[700px]:flex-col   max-[700px]:max-w-[85vw]  max-[700px]:items-center   max-[700px]:space-y-4 ">
            <div className="resume_data_header">
              <h3 className=" min-w-[10rem] font-semibold">Manmohini</h3>
              <p className=" mt-1 font-medium">2019</p>
            </div>
            <p className="text-2xl max-w-[325px] max-[700px]:max-w-[65vw] min-[700px]:text-left">
              I did a Prominent and Continuity role as a GIRIJA SHANKAR for
              around 8 months. In serial, I played many shades like comedy,
              negative, serious, Settled, etc.
            </p>
          </div>
          <div className=" flex  min-[700px]:space-x-24 max-[700px]:flex-col   max-[700px]:max-w-[85vw]  max-[700px]:items-center   max-[700px]:space-y-4 ">
            <div className="resume_data_header">
              <h3 className=" min-w-[10rem] font-semibold">Mithai </h3>
              <p className=" mt-1 font-medium">2022</p>
            </div>
            <p className="text-2xl max-w-[325px] max-[700px]:max-w-[65vw] min-[700px]:text-left">
              I am happy to be back with the Zee TV family with Serial
              &quot;MITHAI &quot; currently on-aired. In MITHAI i am playing an
              prominent role of Animesh Mishra. Mine will be a positive
              character.This family of mine will play a huge part in the
              narrative.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
