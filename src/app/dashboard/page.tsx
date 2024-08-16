import { Reservations } from '@/components/sections/Reservations'

export default function DashboardHome() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between sm:flex-row">
        <section className="flex-1">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Dashboard
          </h1>
          <p className="mt-8 text-xl">Reservations</p>
          <Reservations />
        </section>

        <section
          className="h-[575px] w-[400px] border border-olive-100"
          id="chatbot"
        />
      </div>
    </div>
  )
}
