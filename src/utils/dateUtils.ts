/* 
Converts a date like 1987-06-04 to a reader friendly Jun 2024
*/
export const formatDateForDisplay = (isoDate: string | null): string => {
  if (!isoDate) return 'Present';
  
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
};

/*
 * Format date range for display
 * Example: "2021-06-01", "2023-12-31" → "Jun 2021 – Dec 2023"
 */
export const formatDateRange = (startDate: string, endDate: string | null): string => {
  return `${formatDateForDisplay(startDate)} – ${formatDateForDisplay(endDate)}`;
};