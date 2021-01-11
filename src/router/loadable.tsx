import React, {Suspense} from 'react';
import { Skeleton } from 'antd';
import { CSSTransition } from 'react-transition-group';
import './transition.scss'

export const SkeletonComp = () => {
	return <div className="skeleton" style={{
		padding: 30,
		width: '100%'
	}}>
		<Skeleton active />
	</div>
}

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
			<Suspense fallback={<SkeletonComp />}>
				{/* <Main /> */}
				<CSSTransition
          in={flag}
          classNames="card"
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Main />
        </CSSTransition>
			</Suspense>
		)
	}
}