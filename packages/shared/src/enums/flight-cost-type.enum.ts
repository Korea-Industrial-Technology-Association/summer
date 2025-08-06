export enum FlightCostType {
    ADULT = 'ADULT',
    SENIOR = 'SENIOR',
    CHILD = 'CHILD'
}

export const FlightCostTypeDescription = {
    [FlightCostType.ADULT]: '성인',
    [FlightCostType.SENIOR]: '시니어',
    [FlightCostType.CHILD]: '아동'
} as const;

// 유틸리티 함수 - 나이에 따른 항공료 타입 매칭
export const matchFlightCostType = (age: number): FlightCostType => {
    if (age >= 65) {
        return FlightCostType.SENIOR;
    } else if (age >= 14) {
        return FlightCostType.ADULT;
    } else {
        return FlightCostType.CHILD;
    }
};
