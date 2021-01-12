import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.scss'

export default (Main: any) => {
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
        classNames="alert"
        timeout={500}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Main />
      </CSSTransition>
		)
	}
}