import React, {Suspense} from 'react';
import { Skeleton } from 'antd';

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
		return (
			<Suspense fallback={<SkeletonComp />}>
				<Main />
			</Suspense>
		)
	}
}