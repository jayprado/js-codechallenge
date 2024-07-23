declare module "currency-codes/data" {
  interface CurrencyItem {
    code: string;
    number: string;
    digits: number;
    currency: string;
    countries: string[];
  }
  const currencyCodesData: CurrencyItem[];
  export default currencyCodesData;
}
