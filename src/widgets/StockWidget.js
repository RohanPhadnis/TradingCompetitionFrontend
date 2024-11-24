import React from 'react'
import "./StockWidget.css";
import sampleStockWidgetData from "../SampleData/sampleStockWidgetData.json";

const StockWidget = ({ ticker }) => {
  const stock = sampleStockWidgetData.find(stock => stock.ticker === ticker);

  if (!stock) {
    return <div>Stock not found</div>; 
  }

  const { price, percentageChange, change } = stock;
  const isPositivePercent = percentageChange.includes("+");
  const isPositiveDollar = change.includes("+");

  return (
    <div className="stock-widget">
      <div className="stock-header">
        <span className="ticker">{stock.ticker}</span>
        <span className={`percentage-change ${isPositivePercent ? "positive" : "negative"}`}>
          {percentageChange}
        </span>
      </div>
      <div className="stock-details">
        <span className="price">{price}</span>
        <span className={`percentage-change ${isPositiveDollar ? "positive" : "negative"}`}> ({change})</span>
      </div>
    </div>
  );
};

export default StockWidget;
