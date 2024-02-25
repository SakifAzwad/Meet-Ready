/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../../app/globals.css";
import { FaPhone, FaPrint } from "react-icons/fa6";

const PublicProfileForm = ({ data }) => {
  console.log(data);
  const handlePrint = () => {
    const printButton = document.getElementById("print-button");
    printButton.style.display = "none";
    window.print();
    printButton.style.display = "";
  };

  // download function

  const handleDownloadPdf = (downloadLink) => {
    try {
      const link = document.createElement("a");
      link.href = downloadLink;
      const filename = downloadLink.substring(
        downloadLink.lastIndexOf("/") + 1
      );

      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const handleDownloadVideo = (link) => {
    try {
      const anchor = document.createElement("a");
      anchor.href = link;
      anchor.download = true;
      anchor.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <>
      <button id="print-button" className="flex items-center justify-center sticky top-0 z-10" onClick={handlePrint}>
        <span className="flex items-center gap-2 border-2 border-black rounded-lg p-1 hover:bg-black hover:text-white"><FaPrint /> Print Profile</span>
      </button>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-20">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">{data?.name}</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  {data?.skill} Developer
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-20 h-20 rounded-full"
                  src={data?.image}
                  alt="Name"
                />
              </div>
            </div>
            <hr className="bg-purple-500 h-[3px] rounded-3xl" />
            <div className="grid grid-cols-3">
              <div className="col-span-1 border w-full px-2 pb-2">
                <h1 className="text-xl font-bold ">Contact</h1>
                <hr className="bg-purple-500 h-[2px] rounded-3xl mb-4" />
                <div className="text-xs font-semibold text-wrap">
                  <span className="font-bold text-base underline">Email:</span> <br />
                  <span
                    className="text-blue-700 link-hover"
                    style={{ width: "150px", wordWrap: "break-word" }}
                  >
                    {data?.loginEmail}
                  </span>
                </div>

                <p className="text-sm font-semibold">
                  <span className=" font-bold text-base underline">Phone:</span> <br />{" "}
                  <span className="flex items-center gap-2 text-xs">
                    <FaPhone /> {data?.phone}
                  </span>
                </p>
                <p className="text-xs font-semibold mb-8">
                  <span className=" font-bold text-base underline">Address:</span> <br />{" "}
                  {data?.address}
                </p>
                <h1 className="text-xl font-bold">Education</h1>
                <hr className="bg-purple-500 h-[2px] rounded-3xl  mb-24" />
                <h1 className="text-xl font-bold">Expertise</h1>
                <hr className="bg-purple-500 h-[2px] rounded-3xl mb-4" />
                <p className="text-xs font-semibold">- {data?.skill}</p>
                <h1 className="text-xl font-bold mt-12">Language</h1>
                <hr className="bg-purple-500 h-[2px] rounded-3xl mb-4" />
                <ul className="text-xs font-semibold flex flex-col mb-20">
                  <li>- English</li>
                  <li>- Bangla</li>
                  <li>- Hindi</li>
                </ul>
                <div className="flex gap-2 flex-col">
                  {/* Download Intro Video */}
                  <button
                    onClick={() => handleDownloadVideo(data?.introVideo)}
                    className="bg-purple-500 text-white text-[11px] p-2 rounded-md hover:bg-purple-600"
                  >
                    Download Intro Video
                  </button>
                  {/* Download Resume */}
                  <button
                    onClick={() => handleDownloadPdf(data?.resume)}
                    className="bg-purple-500 text-white p-2 text-xs rounded-md hover:bg-purple-600"
                  >
                    Download Resume
                  </button>
                </div>
              </div>
              <div className=" col-span-2 border">
                <div className=" px-2">
                  {/* Objective */}
                  <div className="pb-2">
                    <h2 className="text-xl font-semibold text-gray-900 underline">
                      Objective
                    </h2>
                    <p className="text-xs text-black text-justify font-semibold">
                      A dedicated and resourceful professional seeking a
                      challenging position where my{" "}
                      <span
                        style={{
                          color: "rgb(147 51 234)",
                        }}
                      >
                        {data?.skill}
                      </span>{" "}
                      can be utilized to contribute to the success and growth of
                      the organization. With a strong background in{" "}
                      <span
                        style={{
                          color: "rgb(147 51 234)",
                        }}
                      >
                        {data?.skill}
                      </span>
                      , I am eager to apply my expertise and drive for
                      excellence to make meaningful contributions to a dynamic
                      team.
                    </p>
                  </div>
                  <div className="text-xs">
                    <section className="experience">
                      <h2 className="text-lg font-bold">Experience</h2>
                      <hr className="bg-purple-500 h-[2px] rounded-3xl mb-2" />
                      <div className="experience-item ">
                        <h3 className="text-sm font-bold">Junior Software Engineer</h3>
                        <p className="text-[10px]">ABC Tech, 20XX-Present</p>
                        <ul className="text-xs font-semibold text-justify">
                          <li className=" list-disc ml-4">
                            Lead a team of 5 developers in designing and
                            implementing scalable web applications.
                          </li>
                          <li className=" list-disc ml-4">
                            Developed new features and optimized existing
                            codebase to improve performance.
                          </li>
                          <li className=" list-disc ml-4">
                            Collaborated with product managers and designers to
                            deliver high-quality software solutions.
                          </li>
                        </ul>
                      </div>
                      <hr className="bg-black h-[2px] rounded-3xl" />
                      <div className="experience-item ">
                        <h3 className="text-sm font-bold mt-2">Web Developer</h3>
                        <p className="text-[10px]">XYZ Company, 2016-2018</p>
                        <ul className="text-xs font-bold text-justify">
                          <li className=" list-disc ml-4">
                          Contributed to the development of a customer
                            management system using React.js and Node.js.
                          </li>
                          <li className=" list-disc ml-4">
                          Participated in code reviews and provided
                            constructive feedback to team members.
                          </li>
                          <li className=" list-disc ml-4">
                          Resolved technical issues and performed debugging
                            tasks to ensure smooth operation of applications.
                          </li>
                        </ul>
                      </div>
                    </section>

                    <section className="skills px-2 mt-4">
                    <h2 className="text-lg font-bold">Skills</h2>
                      <hr className="bg-purple-500 h-[2px] rounded-3xl mb-2" />
                      <ul className="">
                        <li className="list-disc ml-4">JavaScript (ES6+)</li>
                        <li className="list-disc ml-4">React.js</li>
                        <li className="list-disc ml-4">Node.js</li>
                        <li className="list-disc ml-4">HTML5 & CSS3</li>
                        <li className="list-disc ml-4">SQL & NoSQL Databases</li>
                        <li className="list-disc ml-4">RESTful APIs</li>
                        <li className="list-disc ml-4">Git & Version Control</li>
                        <li className="list-disc ml-4">Agile Development Methodologies</li>
                      </ul>
                    </section>

                    <footer className="mt-4">
                      <p>References available upon request</p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicProfileForm;
