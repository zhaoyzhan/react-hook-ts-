import React from 'react';

export const StepState = (props: any) => {
  React.useEffect(() => {
    console.log('child', props)
  })
  return (
    <div { ...props }>
      {props.children}
    </div>
  )
}