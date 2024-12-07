import React from "react";

const Skill = () => {
  return (
    <div className="flex-1 p-4 mx-12">
      <h2 className="text-center text-3xl text-sky-700 font-extrabold mb-6">My Skill</h2>
      <p className="text-2xl text-center mb-6">
        Here's a breakdown of the technologies and tools I have experience with:
      </p>

      <div className="flex justify-around items-stretch gap-6">
        {/* Framework Section */}
        <div className="flex-1 bg-sky-100 shadow-lg rounded-md p-6 flex flex-col">
          <h3 className="text-sky-700 text-xl font-bold mb-4">Framework</h3>
          <ul className="font-bold flex-1">
            <li className="my-2">Next.js</li>
            <li className="my-2">React</li>
      
            <li className="my-2">React Native</li>
            <li className="my-2">Tailwind CSS</li>
          </ul>
        </div>

        {/* Language Section */}
        <div className="flex-1 bg-sky-200 shadow-lg rounded-md p-6 flex flex-col">
          <h3 className="text-sky-700 text-xl font-bold mb-4">Language</h3>
          <ul className="font-bold flex-1">
            <li className="my-2">Python </li>
            <li className="my-2">HTML</li>
            <li className="my-2">CSS</li>
            <li className="my-2">JavaScript</li>
            <li className="my-2">C#</li>
            <li className="my-2">Java</li>
          </ul>
        </div>

        {/* Other Technical Skills Section */}
        <div className="flex-1 bg-sky-300 shadow-lg rounded-md p-6 flex flex-col">
          <h3 className="text-sky-700 text-xl font-bold mb-4">Other technical skill</h3>
          <ul className="font-bold flex-1">
            <li className="my-2">Git/GitHub</li>
            <li className="my-2">PL/SQL</li>
            <li className="my-2">Figma </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
