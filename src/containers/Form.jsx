import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Form() {
  return (
    <form>
      <div>
        <label for="cal-per-day" class="block text-sm/6 font-medium text-gray-900">Calories Per Day</label>
        <div class="mt-2">
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input type="text" name="cal-per-day" id="cal-per-day" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
          </div>
        </div>
      </div>
    </form>
  )
}
