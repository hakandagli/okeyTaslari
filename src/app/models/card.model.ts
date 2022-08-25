export interface card {
    id:number,
    color:colorType,
    value:number,
    existingState:existingStateType
}

export enum colorType {
    red,
    blue,
    yellow,
    black
}

export enum existingStateType {
    none,
    solo,
    double
}
  
  