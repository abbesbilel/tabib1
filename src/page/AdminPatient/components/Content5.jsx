import Head from '../../../components/Head';
import Wrapper from '../../../components/Wrapper';

function Content() {
  return (
    <>
      <div className="contentt w-full">
        {/* Start Head */}
        <Head title="admin"/>
        {/* End Head */}

        {/* Wrapper Component */}
        <Wrapper title="admin" deleteeed="true"/>
      </div>
    </>
  );
}

export default Content;