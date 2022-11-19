import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <nav class="bg-slate-200 ">
            <div class="mx-auto ">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                    
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a href="#" class="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                            <a href="#" class="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

                            <a href="#" class="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                            <a href="#" class="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pt-2 pb-3">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar