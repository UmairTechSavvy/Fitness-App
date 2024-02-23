import React, { useState, useEffect } from "react";
import ExercisesData from "./Ex.json";
import "./App.css";

const Exercises = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [filteredData1, setFilteredData1] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = filteredData1.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredData1.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    setData(ExercisesData.exercises);
    setFilteredData1(ExercisesData.exercises);
  }, []);

  const handleSearchFunctionality = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchMuscleFunctionality = (e) => {
    setSearch1(e.target.value);
  };

  const handleClickFunctionality = () => {
    const filtered = data.filter((exercise) =>
      exercise.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData1(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  const handleMuscleTypeFunctionality = () => {
    const filtered1 = data.filter((exercise) =>
      exercise.muscleGroups.some((group) =>
        group.toLowerCase().includes(search1.toLowerCase())
      )
    );
    setFilteredData1(filtered1);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container21">
      <div className="exercise-container">
        <input
          style={{
            color: "wheat",
            backgroundColor: "rgba(148 , 158 , 171 , 0.04",
          }}
          id="search"
          type="text"
          className="form-control1"
          placeholder="Search"
          autoComplete="off"
          value={search}
          onChange={handleSearchFunctionality}
        />
        <button className="button1" onClick={handleClickFunctionality}>
          Seacrh
        </button>
        <input
          style={{
            color: "wheat",
            backgroundColor: "rgba(148 , 158 , 171 , 0.04",
          }}
          id="search-muscle"
          type="text"
          className="form-control2"
          placeholder="Search by Muscle Group"
          autoComplete="off"
          value={search1}
          onChange={handleSearchMuscleFunctionality}
        />
        <button className="button2" onClick={handleMuscleTypeFunctionality}>
          Search
        </button>
        <h1 className="head1">Exercises</h1>
        <ul>
          {records.map((exercise, index) => (
            <li key={index} className="list">
              <h2 className="nameee">{exercise.name}</h2>
              <p>Description: {exercise.description}</p>
              <p>Muscle Groups: {exercise.muscleGroups.join(", ")}</p>
              <p>
                Video Link:{" "}
                <a
                  className="link"
                  href={exercise.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <nav>
  <ul className="pagination">
    {currentPage > 1 && (
      <li className="pages">
        <a href="#" className="pages-link" onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; Prev
        </a>
      </li>
    )}
    {numbers.map((num, index) => (
      ((num >= currentPage - 2 && num <= currentPage + 2) || num === 1 || num === npage) && (
        <li className="pages2" key={index}>
          <a href="#" className="l1" onClick={() => setCurrentPage(num)}>
            Page {num}
          </a>
        </li>
      )
    ))}
    {currentPage < npage && (
      <li className="pages">
        <a href="#" className="pages-link" onClick={() => setCurrentPage(currentPage + 1)}>
          Next &gt;
        </a>
      </li>
    )}
  </ul>
</nav>


    </div>
  );
};

export default Exercises;
