export default {
  getAllWines: () => '/api/wines',
  getYearBreakdown: (lotCode) => `/api/wines/${lotCode}/getYearBreakdown`,
  getVarietyBreakdown: (lotCode) => `/api/wines/${lotCode}/getVarietyBreakdown`,
  getRegionBreakdown: (lotCode) => `/api/wines/${lotCode}/getRegionBreakdown`,
  getYearAndVarietyBreakdown: (lotCode) =>
    `/api/wines/${lotCode}/getYearAndVarietyBreakdown`,
};
