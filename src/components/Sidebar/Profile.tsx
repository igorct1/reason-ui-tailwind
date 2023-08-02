import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <picture>
        <img
          src="https://github.com/igorct1.png"
          className="h-10 w-10 rounded-full"
          alt=""
        />
      </picture>
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Igor Tozetti
        </span>
        <span className="max-w-xs truncate text-sm text-zinc-500">
          igorzetti1@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
