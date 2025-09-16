# r-currency-convertor

A lightweight and simple JavaScript/TypeScript package to convert currencies using the [FreeCurrencyAPI](https://freecurrencyapi.com/). Convert between any two currencies with ease, complete with TypeScript support and async/await functionality.

[![npm version](https://img.shields.io/npm/v/r-currency-convertor.svg)](https://www.npmjs.com/package/r-currency-convertor)
[![License](https://img.shields.io/npm/l/r-currency-convertor.svg)](LICENSE)


## Installation

Install the package using npm or yarn:

```bash
npm install r-currency-convertor
# or
yarn add r-currency-convertor
```

## Usage

### Basic Example

```javascript
import convertCurrency from "r-currency-convertor";

async function convert() {
  try {
    // const amount = await convertCurrency(fromCurrency, toCurrency, units);
    const amount = await convertCurrency("USD", "INR", 100);
    console.log(`100 USD = ${amount} INR`);
  } catch (error) {
    console.error("Error converting currency:", error.message);
  }
}

convert();
```
