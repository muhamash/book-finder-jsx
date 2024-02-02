import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import HeaderTitle from './components/HeaderTitle';
import Nav from './components/Nav';
import SearchField from './components/SearchField';
import SelectField from './components/SelectField';
import ShopCard from './components/ShopCard';
import data from './components/dataBase/Data.json';

console.log( data )

function App ()
{
  const [state, setState] = useState({
    searchItems: '',
    sortItems: '',
  } )

  const handleSort = ( sort ) =>
  {
    setState( ( prevState ) => ( {
      ...prevState,
      sortItems: sort,
    } ) )
  }

  const handleSearch = ( items ) =>
  {
    setState( ( prevState ) => ( {
      ...prevState,
      searchItems: items,
    } ) )
  }

  const filterAndSortData = () =>
  {
    return data
      .filter( ( item ) => item.name.toLowerCase().includes( state.searchItems.toLowerCase() ) )
      .sort( ( a, b ) =>
      {
        if ( state.sortItems === 'name_asc' )
        {
          return a.name.localeCompare( b.name );
        } else if ( state.sortItems === 'name_desc' )
        {
          return b.name.localeCompare( a.name );
        }
        return 0;
      } )
  }
  
  return (
    // main body
    <div className='relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px] px-3'>
      {/* nav */ }
      <div className='py-6'>
        <Nav />
      </div>

      {/* header */ }
      <div className='my-10 lg:my-14 py-[10px]'>
        <div className='mb-8 lg:mb-10 mx-auto max-w-7xl'>
          <div className='mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4'>
            <div>
              <HeaderTitle />
              <SearchField onSearchSubmit={ handleSearch } />
            </div>
            {/* select items for sorting */ }
            <div className='flex items-stretch space-x-3'>
              <SelectField onSortChange={ handleSort } />
            </div>
          </div>
        </div>
      </div>

      {/* shop cards */ }
      <div className='container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        { filterAndSortData().map( ( datum, index ) =>
        (
          <React.Fragment
            key={ index }
          >
            <ShopCard
              name={ datum.name }
              author={ datum.author }
              price={ datum.price }
              image={ datum.image }
            />
          </React.Fragment>
        ) ) }
      </div>

      {/* footer */ }
      <div className='pt-20'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
