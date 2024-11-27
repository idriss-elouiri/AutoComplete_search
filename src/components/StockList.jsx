import React, { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";

export const StockList = () => {
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);
  useEffect(() => {
    const fetchData = async () => {
      const responses = [];

      try {
        Promise.all(
          finnHub.get("/quote", {
            params: {
              symbol: "GOOGL",
            },
          }),
          finnHub.get("/quote", {
            params: {
              symbol: "MSFT",
            },
          }),
          finnHub.get("/quote", {
            params: {
              symbol: "AMZN",
            },
          })
        );
      } catch (err) {}
    };
  });
  return <div>StockList</div>;
};
