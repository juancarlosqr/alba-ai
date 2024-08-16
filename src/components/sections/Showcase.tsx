'use client'

import ReactPlayer from 'react-player'

export function Showcase() {
  return (
    <section aria-labelledby="showcase-heading" className="bg-gray-50">
      <div className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2
            id="showcase-heading"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Live Showcase
          </h2>
          <section className="mt-10">
            <ReactPlayer url="https://www.youtube.com/watch?v=lUkVHBDI2q8" />
          </section>
        </div>
      </div>
    </section>
  )
}
