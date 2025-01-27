import Head from '../../../components/Head';
import Wrapper from '../../../components/Wrapper';

function Content() {
  return (
    <>
      <div className="contentt w-full h-full">
        {/* Start Head */}
        <Head />
        {/* End Head */}

        {/* Wrapper Component */}
        <Wrapper />
      </div>
    </>
  );
}

export default Content;