import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { forOne, forTwo } from '../../../a-actions/check';
import { IStoreState } from '../../../a-types';

interface stateT { testNum: number } 

const mapStateToProps = (state: IStoreState): stateT => ({
    testNum: state.test.testNum
})

const Index = ({ dispatch, testNum }: { dispatch: Dispatch } & stateT) => {
  React.useEffect(() => {
    console.log('child', dispatch)
  })
  const testOne = () => {
    dispatch(forOne)
  }
  const testTwo = () => {
    dispatch(forTwo(123333333))
  }
  return (
    <div style={{
      background: '#fff',
      padding: 30
    }}>
      <h2>one</h2>
      <Button onClick={ testOne }>test-one</Button>
      <br/>
      <span>{ testNum }</span>
      <br/>
      <Button onClick={ testTwo }>test-two</Button>
    </div>
  )
}

export default connect(mapStateToProps)(Index)