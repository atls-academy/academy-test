const encoded = 'T3NoaWJrYSB2aXp2YW5hIG5hcm9jaG5vLCBlZSBiaXQgbmUgZG9semhubywgdWJlcml0ZSBlZQ=='

type Atob = (arg: string) => string

export const getMessage = ({ atob }: { atob: Atob }): string => atob(encoded)
