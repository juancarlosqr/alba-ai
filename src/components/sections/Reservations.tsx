const reservations = [
  {
    id: 1,
    name: 'Deluxe',
    category: 'From May 21 to May 31',
    href: '#',
    price: '$1890',
    imageSrc:
      'https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: '',
  },
  // More Reservations...
]

export function Reservations() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10">
      {reservations.map((reservations) => (
        <div key={reservations.id} className="group relative">
          <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={reservations.imageSrc}
              alt={reservations.imageAlt}
              className="object-cover object-center"
            />
          </div>
          <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
            <h3>
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                {reservations.name}
              </a>
            </h3>
            <p>{reservations.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{reservations.category}</p>
        </div>
      ))}
    </div>
  )
}
