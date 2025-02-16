// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Button } from '@material-tailwind/react';

export default function Form({updateData, highCalPercentage, setHighCalPercentage, totalCal, setTotalCal, calPerWeek, restDays, setTableRow, setcalPerWeek, setRestDays }) {

  const inputs = {
    "cal-per-day" : "Calories Per Week",
    "rest-days" : "Rest Days"
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Calories Per Week:", calPerWeek);
    console.log("Rest Days:", restDays);

    updateData()
  }

  return (
    <form className='flex-col' onSubmit={handleSubmit}>
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
                  value={input === 'cal-per-day' ? calPerWeek : restDays}
                  onChange={(e) => input === "cal-per-day" ? setcalPerWeek(e.target.value)  : setRestDays(e.target.value )}
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center my-10'>
        <Button type='submit'>Enter</Button>
      </div>
    </form>
  );
  
}


