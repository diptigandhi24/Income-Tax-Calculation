import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TaxCalcForm from '../TaxFormUI/taxCalcForm';
import { UserContext } from '../context/globalState';
import { getData } from '../Indexdb/indexdb';
import Taxcards from './Taxcards';
import { calculateTax } from '../TaxCalculator/taxCalculator';
import './dashboard.css';
interface GetDataId {
  id: number;
}
import { Link } from 'react-router-dom';
export default function DashBoard() {
  const location = useLocation<GetDataId>();
  const id = location.state.id;
  const [cardData, updateCardData] = useState<Array<string>>([]);

  function onTaxResultsReceived(taxResults: any[]) {
    console.log('Data received till now is', taxResults);
    updateCardData(taxResults);
  }
  useEffect(() => {
    getData(id, onTaxResultsReceived);
  }, []);

  return (
    <UserContext.Provider value={id}>
      {/* <TaxCalcForm /> */}
      <div className="headerWrapper">
        <h2>Last Four calculated Taxes are</h2>
        <Link to="/tax-calculation-form">
          <button>Calculate new Taxes </button>
        </Link>
      </div>
      <div className="card-Container">{cardData.length > 0 ? cardData.map(tax => <Taxcards {...tax} />) : <p>waiting</p>}</div>
    </UserContext.Provider>
  );
}
