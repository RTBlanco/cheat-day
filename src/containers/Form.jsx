import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Button } from '@material-tailwind/react';

export default function Form() {

  const inputs = {
    "cal-per-day" : "Calories Per Day",
    "rest-days" : "Rest Days"
  }

  return (
    <form className='flex-col'>
      <div className='flex justify-center'>
        {Object.keys(inputs).map((input, index) => (
          <div key={index} className='mx-25'>
            <label htmlFor={input} className="block text-sm font-medium text-gray-900">
              {inputs[input]}
            </label>
            <div className="mt-2">
              <div className="flex w-24 items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name={input}
                  id={input}
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center my-10'>
        {/* <button
          type="submit"
          className="w-64  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enter
        </button> */}
        <Button>Button</Button>
      </div>
    </form>
  );
  
}
