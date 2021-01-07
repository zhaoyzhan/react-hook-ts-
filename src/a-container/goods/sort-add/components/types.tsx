export const operat = {
    ADD: 'ADD',
    TWOADD: 'TWOADD',
    UP: 'UP',
    DOWN: 'DOWN',
    EDIT: 'EDIT',
    DEL: 'DEL'
}

export interface dateI {
    id: number,
    shopImg: string,
    num: number,
    key: number,
    name: string,
}
export interface dataS {
    id: number,
    shopImg: string,
    num: number,
    key: number,
    name: string,
    children?: dateI[]
}