declare module "currency-codes/data" {
  type Currency = {
    code: string;
    number: string;
    digits: number;
    currency: string;
    countries: string[];
  };
  const currencyCodesData: Currency[];
  export default currencyCodesData;
}
