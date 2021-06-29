import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import {
  HomeIcon,
  XIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline'
import './styles.css'

export default function TheNavbar() {
  const [searchVal, setSearchVal] = useState('')

  const handleChange = e => {
    setSearchVal(e.target.value)
  }

  const handleSearch = e => {
    e.preventDefault()
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center flex-col-reverse sm:flex-row min-h-0 py-3">
              {/* controllers */}
              <div className="flex-1 flex items-center  justify-start sm:items-stretch self-center mt-16 sm:mt-0">
                <div className="flex-shrink-0 flex items-center gap-2">
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <ChevronLeftIcon className="h-6 w-6 text-gray-50" />
                  </button>
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <ChevronRightIcon className="h-6 w-6 text-gray-50" />
                  </button>
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <XIcon className="h-6 w-6 text-gray-50" />
                  </button>
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <HomeIcon className="h-6 w-6 text-gray-50" />
                  </button>
                </div>
              </div>
              {/* search form */}
              <form
                onSubmit={handleSearch}
                className="absolute inset-y-0 right-auto flex items-start justify-center mt-3 sm:mt-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mx-auto self-center">
                <input
                  className="bg-gray-50 pr-9 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  placeholder="Search for..."
                  onChange={handleChange}
                  value={searchVal}
                />
                <SearchIcon
                  className="h-6 w-6 pl-1 text-gray-800 absolute right-3 top-2 sm:top-5"
                  aria-hidden="true"
                />
              </form>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
