export const fetchPopulation = async () => {
  const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
  return res.json();
}
export const fetchPrices = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  return res.json();
}