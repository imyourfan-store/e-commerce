import React, { useEffect, useState } from 'react';
import { getConfig } from '../utils/configAxios';
import PurchaseCard from '../components/purchases/PurchaseCard';
import axios from 'axios';
import './styles/Purchases.css';

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:8000/api/purchases';
    axios
      .get(URL, getConfig())
      .then((res) => {
        setPurchases(res.data.purchases);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="purchases">
      <h2>My purchases</h2>
      <section className="purchases__list">
        {purchases.map((purchase) => (
          <PurchaseCard key={purchase.id} purchase={purchase} />
        ))}
      </section>
    </main>
  );
};

export default Purchases;
