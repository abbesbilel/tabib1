import Head from './Head';
import Settings from './Settings';

function Content() {
  return (
    <>
      <div className="contentt w-full h-full">
        {/* Start Head */}
        <Head />
        {/* End Head */}

        {/* Wrapper Component */}
        <Settings />
      </div>
    </>
  );
}

export default Content;