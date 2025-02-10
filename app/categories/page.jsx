import React from "react";

const CategoriesPage = () => {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home & Garden" },
    { id: 4, name: "Sports" },
    { id: 5, name: "Toys" },
  ];

  return (
    <div className="container mt-10 px-4  py-40">
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
