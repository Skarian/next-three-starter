import CanvasExample from '@components/canvas/example';
import type { CustomPage } from '@components/utils/types/page';
import DomExample from '@components/dom/example';

const Home: CustomPage = () => {
	return <DomExample />;
};

Home.r3f = () => (
	<>
		<CanvasExample href="/cube" shape="torus" />
	</>
);

export default Home;
