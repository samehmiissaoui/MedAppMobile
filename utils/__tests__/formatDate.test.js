import { formatDate } from '../formatDate';

describe('formatDate', () => {
  it('formats a Date object correctly', () => {
    const date = new Date('2026-05-12');
    expect(formatDate(date)).toBe('12 mai 2026');
  });

  it('formats an ISO string correctly', () => {
    expect(formatDate('2026-01-01')).toBe('1 janvier 2026');
  });

  it('formats a date with double-digit day and month', () => {
    expect(formatDate('2026-12-25')).toBe('25 décembre 2026');
  });

  it('returns empty string for null input', () => {
    expect(formatDate(null)).toBe('');
  });

  it('returns empty string for undefined input', () => {
    expect(formatDate(undefined)).toBe('');
  });

  it('returns empty string for empty string input', () => {
    expect(formatDate('')).toBe('');
  });

  it('returns empty string for invalid date string', () => {
    expect(formatDate('not-a-date')).toBe('');
  });
});
