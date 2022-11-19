import './App.css';
import TopicsBox from './components/topicsBox';

function Company() {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-[#EFB5A2] to-[#EE7AA0]'>
      <div className="flex items-center justify-center h-screen">
        <TopicsBox/>
      </div>
    </div>

  );
}

export default Company;
