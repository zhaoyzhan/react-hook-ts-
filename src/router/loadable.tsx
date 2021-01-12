import React, {Suspense} from 'react';
import { Skeleton } from 'antd';
// import { CSSTransition } from 'react-transition-group';

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
		// const [flag, setF] = React.useState<boolean>(false)
		// React.useEffect(() => {
		// 	setF(true)
		// 	return () => {
		// 		setF(false)
		// 	}
		// }, [])
		return (
			<Suspense fallback={<SkeletonComp />}>
				<Main />
			</Suspense>
		)
	}
}