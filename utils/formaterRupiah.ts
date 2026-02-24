export const formatRupiah = (value: number | string) => {
  const numberValue = typeof value === "string"
    ? Number(value)
    : value;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(numberValue);
};