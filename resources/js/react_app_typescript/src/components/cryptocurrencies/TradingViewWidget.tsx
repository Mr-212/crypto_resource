import React from "react";
import TradingViewWidget,  { Themes }  from 'react-tradingview-widget'

export const WidgetTradingView = ({cryptoSymbol='BTCUSDT', exchange='BINANCE'}) =>{
  const currency = `${exchange}:${cryptoSymbol}`;
  // return null;
  return(
      <TradingViewWidget
        symbol={currency}
        theme={Themes.DARK}
        locale="en"
        autosize
    />
      )
}