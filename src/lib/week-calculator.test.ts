import { describe, expect, test } from 'bun:test';
import { calculateWeek, DEFAULT_INPUTS, TASKS, validNumber } from './week-calculator';

describe('Office week calculator', () => {
  test('Uses the six specified hour defaults and $28 rate', () => {
    expect(TASKS.map(task => Number(DEFAULT_INPUTS[task.id]))).toEqual([20, 10, 9, 8, 6, 5]);
    expect(DEFAULT_INPUTS.hourlyRate).toBe('28');
  });
  test('Calculates 52 weeks per year and 40 hours per full-time worker', () => {
    const result = calculateWeek(DEFAULT_INPUTS);
    expect(result.weeklyHours).toBe(58);
    expect(result.annualHours).toBe(3016);
    expect(result.annualCost).toBe(84448);
    expect(result.fte.toFixed(1)).toBe('1.4');
  });
  test('Accepts values above the slider maximum of 40', () => {
    const result = calculateWeek({ ...DEFAULT_INPUTS, scheduling: '80' });
    expect(result.weeklyHours).toBe(118);
    expect(Math.min(validNumber('80'), 40)).toBe(40);
  });
  test('Treats blank, invalid, negative and infinite numbers as zero', () => {
    for (const value of ['', 'abc', '-2', 'Infinity']) expect(validNumber(value)).toBe(0);
  });
  test('Selects sentence branch using the unrounded 30 percent threshold', () => {
    const inputs = { scheduling: '30', documentation: '20', claims: '20', authorizations: '10', evv: '10', intake: '10', hourlyRate: '28' };
    expect(calculateWeek(inputs).sentence.startsWith('Nearly 30%')).toBe(true);
    expect(calculateWeek({ ...inputs, scheduling: '29' }).sentence.startsWith('The biggest single piece')).toBe(true);
  });
  test('Returns zero totals when every task is zero', () => {
    const result = calculateWeek({ scheduling: '', documentation: '0', claims: '0', authorizations: '0', evv: '0', intake: '0', hourlyRate: '28' });
    expect(result.annualCost).toBe(0);
    expect(result.sentence).toBe('Add the hours above to see what they come to.');
  });
  test('Re-sorts tasks largest first after a value changes', () => {
    const result = calculateWeek({ ...DEFAULT_INPUTS, intake: '35' });
    expect(result.breakdown[0]?.id).toBe('intake');
    expect(result.breakdown.map(task => task.hours)).toEqual([35, 20, 10, 9, 8, 6]);
  });
});