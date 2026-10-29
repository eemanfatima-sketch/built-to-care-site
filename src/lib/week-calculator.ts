export const TASKS = [
  { id: 'scheduling', label: 'Scheduling and filling shifts', description: 'Building the schedule, call-outs, finding cover', defaultHours: 20 },
  { id: 'documentation', label: 'Documentation and compliance', description: 'Care plans, notes, survey prep, training records', defaultHours: 10 },
  { id: 'claims', label: 'Claims, denials and chasing payment', description: 'Submitting, reworking, following up on what went unpaid', defaultHours: 9 },
  { id: 'authorizations', label: 'Authorizations and re-auths', description: 'Tracking units, renewals, chasing approvals', defaultHours: 8 },
  { id: 'evv', label: 'Visit verification and EVV exceptions', description: 'Missed clock-ins, manual corrections, reconciling visits', defaultHours: 6 },
  { id: 'intake', label: 'Intake and referrals', description: 'Taking the referral, eligibility, getting someone started', defaultHours: 5 },
] as const;

export type TaskId = typeof TASKS[number]['id'];
export type WeekInputs = Record<TaskId | 'hourlyRate', string>;
export const DEFAULT_INPUTS: WeekInputs = {
  scheduling: '20', documentation: '10', claims: '9', authorizations: '8', evv: '6', intake: '5', hourlyRate: '28',
};

export function validNumber(value: string): number {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : 0;
}

export function calculateWeek(inputs: WeekInputs) {
  const tasks = TASKS.map(task => ({ ...task, hours: validNumber(inputs[task.id]) }));
  const weeklyHours = tasks.reduce((sum, task) => sum + task.hours, 0);
  const annualHours = weeklyHours * 52;
  const annualCost = annualHours * validNumber(inputs.hourlyRate);
  const breakdown = [...tasks].sort((a, b) => b.hours - a.hours);
  const largest = breakdown[0];
  const share = weeklyHours > 0 && largest ? largest.hours / weeklyHours * 100 : 0;
  const taskName = largest ? largest.label.charAt(0).toLowerCase() + largest.label.slice(1) : '';
  const sentence = weeklyHours === 0
    ? 'Add the hours above to see what they come to.'
    : share >= 30
      ? `Nearly ${Math.round(share)}% of it is ${taskName} alone.`
      : `The biggest single piece is ${taskName}, at ${Math.round(share)}%.`;
  return { weeklyHours, annualHours, annualCost, fte: weeklyHours / 40, breakdown, sentence };
}