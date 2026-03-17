import React from "react";

const projects = [
  {
    title: "NAME",
    desc: "Full-width rectangle",
    colSpanClass: "col-span-2 lg:col-span-2",
    rowSpanClass: "row-span-1",
  },
  {
    title: "IMPORTANT TITLES I HAVE?",
    desc: "Square card",
    colSpanClass: "col-span-2 lg:col-span-3",
    rowSpanClass: "row-span-1",
  },
  {
    title: "ABOUT ME",
    desc: "Tall rectangle",
    colSpanClass: "col-span-1 lg:col-span-1",
    rowSpanClass: "row-span-1",
  },
  {
    title: "COOL PICTURE",
    desc: "Square card",
    colSpanClass: "col-span-1 lg:col-span-1",
    rowSpanClass: "row-span-1",
  },
  {
    title: "ACTUAL PROJECTS",
    desc: "Wide rectangle",
    colSpanClass: "col-span-2 lg:col-span-4",
    rowSpanClass: "row-span-3",
  },
    {
    title: "CONTACT",
    desc: "Wide rectangle",
    colSpanClass: "col-span-1 lg:col-span-1",
    rowSpanClass: "row-span-2",
  },
  {
    title: "MAIN SKILLS",
    desc: "Wide rectangle",
    colSpanClass: "col-span-1 lg:col-span-1",
    rowSpanClass: "row-span-2",
  },
    {
    title: "PRETTY PICTURE",
    desc: "Wide rectangle",
    colSpanClass: "col-span-2 lg:col-span-1",
    rowSpanClass: "row-span-1",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12 overflow-auto lg:overflow-hidden flex flex-col items-center">

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full auto-rows-[150px] md:auto-rows-[180px]">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`bg-white shadow-md rounded-lg p-3 md:p-4 lg:p-6 flex flex-col justify-between 
                        hover:scale-105 hover:shadow-xl transition-all duration-300 
                        ${project.colSpanClass} ${project.rowSpanClass}`}
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 flex-1">{project.desc}</p>
            <a
              href="#"
              className="mt-4 text-blue-500 font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}