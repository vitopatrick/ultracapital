import { Box } from "@mui/material";
import React from "react";
import { AdvancedChart, Ticker } from "react-tradingview-embed";

const TradingViews = () => {
  // symbols to display in the Ticker Tap
  const symbol = [
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      description: "Rune",
      proName: "BINANCE:RUNEUSDT",
    },
    {
      description: "Shiba",
      proName: "BINANCE:SHIBUSDT",
    },
    {
      description: "Doge",
      proName: "BINGX:DOGEUSDT",
    },
  ];

  return (
    <div>
      <Box sx={{ my: 2 }}>
        <Ticker
          widgetProps={{
            symbols: symbol,
          }}
        />
      </Box>

      <Box>
        <AdvancedChart
          widgetProps={{
            theme: "dark",
            height: "500px",
            allow_symbol_change: "true",
            symbol: "BINANCE:BTCUSDT",
          }}
        />
      </Box>
    </div>
  );
};

export default TradingViews;
