export type Severity = 'success' | 'info' | 'warn' | 'error' | 'multiple';

export class Message {
  constructor(public summary: string, public detail: string, public severity: Severity = 'info') { }
}
