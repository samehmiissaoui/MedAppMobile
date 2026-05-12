/**
 * Format a date as a localized French string.
 *
 * @param {Date|string} input - Date object or ISO string
 * @returns {string} Formatted date like "12 mai 2026" or empty string if invalid
 */
export function formatDate(input) {
  if (!input) return '';

  const date = input instanceof Date ? input : new Date(input);

  if (Number.isNaN(date.getTime())) return '';

  const months = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
