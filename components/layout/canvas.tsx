import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import useStore from '@components/utils/store';
import { useEffect, useRef } from 'react';

const LControl = () => {
	const dom = useStore((state) => state.dom);
	const control = useRef(null);

	useEffect(() => {
		if (control.current) {
			const originalTouchAction = dom?.getAttribute('style');
			dom?.setAttribute('style', 'touch-action: none');

			return () => {
				dom?.setAttribute('style', `${originalTouchAction}`);
			};
		}
	}, [dom, control]);
	return <OrbitControls ref={control} domElement={dom} />;
};

const LCanvas = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const dom = useStore((state) => state.dom);

	return (
		<Canvas
			style={{
				position: 'absolute',
				top: 0,
			}}
			onCreated={(state) => state.events.connect?.(dom)}
		>
			<LControl />
			<Preload all />
			{children}
		</Canvas>
	);
};

export default LCanvas;
