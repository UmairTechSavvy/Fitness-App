import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./App.css"; // Don't forget to import your CSS file if you have one

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((crumb) => crumb !== "");

  let currentLink = "";

  const crumbs = pathnames.map((crumb, index) => {
    currentLink += `/${crumb}`;
    const isLast = index === pathnames.length;

    return (
      <div key={index} className="bread-crumb">
        {isLast ? (
          <span>{crumb}</span>
        ) : (
          <Link to={currentLink}>{crumb}</Link>
        )}
      </div>
    );
  });

  return <div className="bc">{crumbs}</div>;
};

export default BreadCrumbs;
