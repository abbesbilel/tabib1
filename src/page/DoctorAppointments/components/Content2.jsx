import Appointments from '../../../components/Appointments';
import Head from '../../../components/Head';

function Content() {
  return (
    <>
      <div className="contentt w-full">
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