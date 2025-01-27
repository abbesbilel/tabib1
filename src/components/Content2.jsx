import Appointments from './Appointments';
import Head from './Head';

function Content() {
  return (
    <>
      <div className="contentt w-full h-full">
        {/* Start Head */}
        <Head />
        {/* End Head */}

        {/* Wrapper Component */}
        <Appointments />
      </div>
    </>
  );
}

export default Content;