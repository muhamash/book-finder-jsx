import './App.css';
import Footer from './components/Footer';
import HeaderTitle from './components/HeaderTitle';
import Nav from './components/Nav';
import SearchField from './components/SearchField';
import SelectField from './components/SelectField';
import ShopCard from './components/ShopCard';

function App() {
  return (
    // main body
    <div className='relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]'>
      {/* nav */ }
      <div className='py-6'>
        <Nav />
      </div>

      {/* header */ }
      <div className='my-10 lg:my-14'>
        <div className='mb-8 lg:mb-10 mx-auto max-w-7xl'>
          <div className='mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4'>
            <div>
              <HeaderTitle />
              <SearchField/>
            </div>
            {/* select items for sorting */ }
            <div className='flex items-stretch space-x-3'>
              <SelectField/>
            </div>
          </div>
        </div>
      </div>

      {/* shop cards */ }
      <div className='container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
        <ShopCard/>
      </div>

      {/* footer */ }
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
