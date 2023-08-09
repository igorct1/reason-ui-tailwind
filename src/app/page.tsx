import { SettingsTabs } from '@/components/SettingsTabs'
import {
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  LogOut,
  Mail,
} from 'lucide-react'
import { Select } from '@/components/Form/Select'
import * as Input from '../components/Input'
import * as FileInput from '../components/Form/FileInput'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b  border-zinc-200 pb-5 ">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-small text-zinc-500">
              Update your photos and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm
                font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50
              "
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-small font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="First name" />
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl defaultValue="Last name" />
              </Input.InputRoot>
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-small font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Input.InputPrefix>
              <Input.InputControl
                id="email"
                defaultValue="lorem@ipsum.com"
                type="email"
              />
            </Input.InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-small font-medium text-zinc-700 "
            >
              Your photos
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5 ">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="role"
              className="text-small font-medium text-zinc-700"
            >
              Role
            </label>
            <Input.InputRoot>
              <Input.InputControl id="role" defaultValue="Frontend Developer" />
            </Input.InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="Country"
              className="text-small font-medium text-zinc-700 "
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem text="United States" value="us" />
              <SelectItem text="Brazil" value="br" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-small font-medium text-zinc-700 "
            >
              Timezone
            </label>
            <Select placeholder="Timezone">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-8:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-3:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="bio"
              className="text-small font-medium text-zinc-700 "
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short description.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    text="Normal text"
                    defaultChecked
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <TextArea defaultValue="I'm a Front-end Developer based in São Paulo - SP. I've a little experience with react/nextjs and node.js" />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-small font-medium text-zinc-700 "
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippers of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="submit"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm
                font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50
              "
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
