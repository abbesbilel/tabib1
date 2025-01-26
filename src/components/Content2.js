import Appointments from './Appointments';
import Head from './Head';

function Content() {
  return (
    <>
      <div className="content w-full">
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