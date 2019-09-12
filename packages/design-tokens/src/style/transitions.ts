export interface Transitions {
  durationComplex: string
  durationIntricate: string
  durationModerate: string
  durationQuick: string
  durationRapid: string
  durationSimple: string
}

// tslint:disable:object-literal-sort-keys
export const transitions: Transitions = {
  durationRapid: '100ms',
  durationQuick: '150ms',
  durationSimple: '200ms',
  durationModerate: '300ms',
  durationComplex: '300ms',
  durationIntricate: '500ms',
}
