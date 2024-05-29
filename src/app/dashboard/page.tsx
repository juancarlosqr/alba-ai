import { Reservations } from '@/components/sections/Reservations'

export default function DashboardHome() {
  return (
    <>
      <p className="mt-8 text-xl">Reservations</p>
      <div>
        <Reservations />
      </div>
    </>
  )
}
