'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

const users = [
  {
    name: 'Alice',
    email: 'alice.smith@doe.io',
    id: 'recRkwwkxhyZTqj0c',
  },
  {
    name: 'Bob',
    email: 'bob.smith@doe.io',
    id: 'recRTuXErPMYt5DKV',
  },
]

export default function Login() {
  const [selected, setSelected] = useState(users[0])

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-32 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action={`/auth/login/${selected.id}`}
            method="GET"
          >
            <fieldset aria-label="Server size">
              <RadioGroup
                value={selected}
                onChange={setSelected}
                className="space-y-4"
              >
                {users.map((plan) => (
                  <Radio
                    key={plan.name}
                    value={plan}
                    aria-label={plan.name}
                    aria-description={plan.email}
                    className={({ focus }) =>
                      clsx(
                        focus ? 'border-olive-600 ring-2 ring-olive-600' : '',
                        !focus ? 'border-gray-300' : '',
                        'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
                      )
                    }
                  >
                    {({ checked, focus }) => (
                      <>
                        <span className="flex items-center">
                          <span className="flex flex-col text-sm">
                            <span className="font-medium text-gray-900">
                              {plan.name}
                            </span>
                            <span className="text-gray-500">
                              <span className="block sm:inline">
                                {plan.email}
                              </span>
                            </span>
                          </span>
                        </span>
                        <span
                          className={clsx(
                            checked ? 'border-olive-600' : 'border-transparent',
                            focus ? 'border' : 'border-2',
                            'pointer-events-none absolute -inset-px rounded-lg'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-olive-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-olive-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
