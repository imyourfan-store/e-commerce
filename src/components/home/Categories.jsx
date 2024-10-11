import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);

  const handleCategory = (id) => {
    setCategory(id);
  };

  useEffect(() => {
    const URL = 'http://localhost:8000/api/categories';
    axios
      .get(URL)
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <ul>
        <li onClick={() => handleCategory('')}>All products</li>
        {categories.map((category) => (
          <li onClick={() => handleCategory(category.id)} key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
