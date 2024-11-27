import React from "react";
import { StockList } from "../components/StockList";
import { AutoComplete } from "../components/AutoComplete";
export const StockOverviewPage = () => {
  return (
    <div>
      <StockList />
      <AutoComplete />
    </div>
  );
};
