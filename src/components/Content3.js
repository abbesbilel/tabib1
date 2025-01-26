import Head from './Head';
import Settings from './Settings';

function Content() {
  return (
    <>
      <div className="content w-full">
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