// Importing necessary dependencies and styles
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import "../CSS/Calculators.css"; // Assuming this file contains specific styles for the Calculators component

import Home from "../Assets/Home Icon.jpg";

// Calculator component
function Calculators() {
  // React Router's navigation hook
  const Navigate = useNavigate();

  // Refs to DOM elements for dynamic updates
  const calculator = useRef();
  const content = useRef();
  const title = useRef();
  const addMoreButton = useRef();
  const calculateButton = useRef();
  const toggleButton = useRef();

  // State to manage the calculator mode (CGPA or GPA)
  const [inCGPA, setInCGPA] = useState(true);

  // Navigation function to go back to the main page
  function handleHomeNavigation() {
    Navigate("/mainpage");
  }

  // Function to handle adding more subjects or semesters
  function handleAddMore() {
    // Implementation for adding more subjects or semesters
  }

  // Function to handle deleting a row (subject or semester)
  function handleDeleteRow(e) {
    const row = e.target.parentElement;
    row.parentElement.remove();
  }

  // Function to toggle between CGPA and GPA modes
  function handleToggle() {
    // Dynamically update UI based on the selected mode
    if (inCGPA) {
      // GPA mode
      toggleButton.current.style.justifyContent = "flex-end";
      calculator.current.innerText = "GPA calculator";
      content.current.innerText = "GPA";
      title.current.innerText = "Subject 1";
      addMoreButton.current.innerText = "Add More Subjects";
      calculateButton.current.innerText = `calculate GPA`;
      setInCGPA(false);
    } else {
      // CGPA mode
      toggleButton.current.style.justifyContent = "flex-start";
      calculator.current.innerText = "CGPA calculator";
      content.current.innerText = "Grade";
      title.current.innerText = "Semester 1";
      addMoreButton.current.innerText = "Add More Semesters";
      calculateButton.current.innerText = `calculate CGPA`;
      setInCGPA(true);
    }
  }

  // JSX structure for the Calculators component
  return (
    <>
      <div className="calculators-container">
        {/* Top navigation bar */}
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>
        </div>

        {/* Filters and toggle for CGPA/GPA */}
        <div className="filters">
          <div className="leftSide"></div>
          <div className="rightSide">
            <div className="toggle">
              <p>CGPA</p>
              <div
                className="toggle-btn"
                ref={toggleButton}
                onClick={handleToggle}
              >
                <div className="btn"></div>
              </div>
              <p>GPA</p>
            </div>
          </div>
        </div>

        {/* Calculator section */}
        <div className="calculator">
          {/* Table for displaying subjects or semesters */}
          <table className="calculator-table">
            <thead>
              <tr>
                <th ref={calculator}>CGPA Calculator</th>
                <th ref={content}>GPA</th>
                <th>Credits</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr id="row">
                <td ref={title}>Semester 1</td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  {/* Delete row icon */}
                  <Icon
                    icon="carbon:close-filled"
                    width="20"
                    height="20"
                    onClick={(e) => {
                      handleDeleteRow(e);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Buttons for adding more subjects and calculating CGPA */}
          <button
            className="add-more-btn"
            ref={addMoreButton}
            onClick={handleAddMore}
          >
            Add More Subjects
          </button>
          <button className="calculate-btn" ref={calculateButton}>
            Calculate {inCGPA ? "CGPA" : "GPA"}
          </button>
        </div>
      </div>
    </>
  );
}

// Exporting the Calculators component
export default Calculators;
