import React from 'react';
import icons from '../ultis/icons';


const { BsSearch } = icons
const Search = () => {
    return (
        <div className='w-full flex items-center'>
            <span className='h-10 px-3 flex rounded-l-[20px] bg-[#dde4e4] items-center justify-center text-gray-500'>
                <BsSearch size={20} />
            </span>
            <input
                type="text"
                className=' outline-none bg-[#dde4e4] pr-4 py-2 placeholder:text-red-500 text-gray-500 rounded-r-[20px] h-[40px] w-full'
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
            />
        </div>
    )
}

export default Search
