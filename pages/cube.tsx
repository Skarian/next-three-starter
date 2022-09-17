import type { CustomPage } from '@components/utils/types/page';
import CanvasExample from '@components/canvas/example';
import DomExample from '@components/dom/example';

const Cube: CustomPage = () => {
	return <DomExample />;
};

Cube.r3f = () => (
	<>
		<CanvasExample href="/" shape="cube" />
	</>
);

export default Cube;
