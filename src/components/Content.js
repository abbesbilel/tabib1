import Head from './Head';
import Wrapper from './Wrapper';

function Content() {
  return (
    <>
      <div className="content w-full">
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