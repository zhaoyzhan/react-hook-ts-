import { Dispatch } from 'redux';

export interface actionT {
  type: string,
  value: number
}

export const checkOne = (value: number): any => (dispatch: Dispatch): any => dispatch(testT('check_one', value))

export const testT = (type: string, value: any): actionT => ({
    type,
    value
})