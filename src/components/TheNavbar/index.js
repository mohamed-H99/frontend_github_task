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
          <div className="navbar">
            <div className="navbar-wrapper">
              {/* controllers */}
              <div className="controllers">
                <div className="controllers-wrapper">
                  <button>
                    <ChevronLeftIcon />
                  </button>
                  <button>
                    <ChevronRightIcon />
                  </button>
                  <button>
                    <XIcon />
                  </button>
                  <button>
                    <HomeIcon />
                  </button>
                </div>
              </div>
              {/* search form */}
              <form onSubmit={handleSearch} className="search-form">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search for..."
                  onChange={handleChange}
                  value={searchVal}
                />
                <SearchIcon className="search-icon" aria-hidden="true" />
              </form>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
