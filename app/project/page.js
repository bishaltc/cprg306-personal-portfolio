import Link from "next/link";
import React from "react";


const Project = () => {
  return (
    <div className="flex-1 p-4 mx-12">
      <h2 className="text-center text-3xl text-sky-700 font-extrabold mb-6">
        My Projects
      </h2>
      <p className="text-2xl text-center mb-6">
        Here are some of the projects I’ve worked on:
      </p>

      <div className="flex flex-col gap-8">
        {/* Project 1 */}
        <div className="bg-sky-100 shadow-md rounded-md p-6">
          <h3 className="text-sky-700 text-xl font-bold mb-4">
            Modern Appliances Management System
          </h3>
          <p className="mb-4">
            A C# application for managing appliance data, including
            functionalities like checking out appliances, searching by brand,
            and displaying appliance types.
          </p>
          <h4 className="text-sky-700 text-lg font-semibold mb-2">
            Technologies Used:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>C#</li>
            <li>OOP</li>
            <li>Visual Studio</li>
          </ul>
          <Link
            href="https://github.com/bishaltc/Opp2_Assignment1" 
            className="text-sky-700 font-bold underline"
          >
            View Project
          </Link>
        </div>

        {/* Project 2 */}
        <div className="bg-sky-100 shadow-md rounded-md p-6">
          <h3 className="text-sky-700 text-xl font-bold mb-4">
            Recipe app
          </h3>
          <p className="mb-4">
            A React Native application designed for recipe where it display the  random recipe .
          </p>
          <h4 className="text-sky-700 text-lg font-semibold mb-2">
            Technologies Used:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>React Native</li>
            <li> VS code</li>
            <li>CSS</li>
          </ul>
          <Link
            href="https://github.com/bishaltc/recipe-rnative" 
            className="text-sky-700 font-bold underline"
          >
            View Project
          </Link>
        </div>

        {/* Project 3 */}
        <div className="bg-sky-100 shadow-md rounded-md p-6">
          <h3 className="text-sky-700 text-xl font-bold mb-4">
          To do app
          </h3>
          <p className="mb-4">
            A react-native based app where user can add the activity and remove it.
          </p>
          <h4 className="text-sky-700 text-lg font-semibold mb-2">
            Technologies Used:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>React-native</li>
            <li> CSS</li>
            <li>Vs code</li>
          </ul>
          <Link
            href="https://github.com/bishaltc/todolist-lab4" // Use Link for internal routing (for now, it's an external link)
            className="text-sky-700 font-bold underline"
          >
            View Project
          </Link>
        </div>

        {/* Project 4 */}
        <div className="bg-sky-100 shadow-md rounded-md p-6">
          <h3 className="text-sky-700 text-xl font-bold mb-4">
            Dog DayCare
          </h3>
          <p className="mb-4">
            A Web application based on HTML, Css, JavaScript where you user can book the daycare for their dog and also can calculate the price.
          </p>
          <h4 className="text-sky-700 text-lg font-semibold mb-2">
            Technologies Used:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>VS Code</li>
          </ul>
          <Link
            href="https://github.com/bishaltc/REPO-Bishal" 
            className="text-sky-700 font-bold underline"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
