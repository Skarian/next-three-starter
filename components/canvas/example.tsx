import useStore from '@components/utils/store';
import { useEffect, useState } from 'react';

const CanvasExample = ({
	href,
	shape,
}: {
	href: string;
	shape: 'cube' | 'torus';
}) => {
	const router = useStore((state) => state.router);
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto';
	}, [hovered]);

	return (
		<mesh
			onClick={() => router?.push(href)}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			scale={hovered ? 1.1 : 1}
		>
			{shape === 'cube' ? <boxBufferGeometry /> : <torusBufferGeometry />}
			<meshStandardMaterial />
		</mesh>
	);
};

export default CanvasExample;
