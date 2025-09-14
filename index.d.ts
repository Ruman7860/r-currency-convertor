declare module "r-currency-convertor" {
    /**
     * Convert currency using FreeCurrencyAPI
     * @param fromCurrency - The 3-letter currency code to convert from (e.g., "USD")
     * @param toCurrency - The 3-letter currency code to convert to (e.g., "INR")
     * @param units - The amount of currency to convert
     * @returns A Promise that resolves to the converted amount (number)
     */
    export default function convertCurrency(
        fromCurrency: string,
        toCurrency: string,
        units: number
    ): Promise<number>;
}
