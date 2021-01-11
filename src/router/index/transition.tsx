import React from 'react';
import { CSSTransition } from 'react-transition-group';
export default (WrappedComponent: any) => {
    return () => {
      const [flag, setF] = React.useState<boolean>(false)
      React.useEffect(() => {
        setF(true)
        return () => {
          setF(false)
        }
      }, [])
      return (
        <CSSTransition
          in={flag}
          classNames="card"
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComponent />
        </CSSTransition>
      )
    }
}