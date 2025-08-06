export enum FlightWay {
  ONE_WAY = 'ONE_WAY',
  ROUND_TRIP = 'ROUND_TRIP'
}

export const FlightWayDescription = {
  [FlightWay.ONE_WAY]: '편도',
  [FlightWay.ROUND_TRIP]: '왕복'
} as const;

