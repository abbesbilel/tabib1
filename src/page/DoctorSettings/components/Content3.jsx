import Head from '../../../components/Head';
import Settings from '../../../components/Settings';

function Content() {
  return (
    <>
      <div className="contentt w-full">
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