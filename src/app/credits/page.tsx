import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/sections/Header'

const photos = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageCredit:
      'https://unsplash.com/photos/a-large-swimming-pool-surrounded-by-palm-trees-_pPHgeHz1uk',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageCredit:
      'https://unsplash.com/photos/white-and-brown-concrete-building-CepDpEiALqM',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageCredit:
      'https://unsplash.com/photos/blue-body-of-water-in-front-of-building-near-trees-during-nighttime-M7GddPqJowg',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageCredit:
      'https://unsplash.com/photos/brown-wooden-table-and-chairs-on-brown-wooden-deck-near-body-of-water-during-daytime-TAgGZWz6Qg8',
  },
  {
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageCredit:
      'https://unsplash.com/photos/an-interior-of-modern-bedroom-suite-in-luxury-hotel-yIZt9YW5gN0',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageCredit:
      'https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageCredit:
      'https://unsplash.com/photos/gray-and-black-throw-pillow-on-bed-YMOHw3F1Hdk',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1501117716987-c8c394bb29df?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageCredit:
      'https://unsplash.com/photos/sea-viewed-inside-the-room-IQKuHc2lils',
  },
]

export default function Credits() {
  return (
    <div className="bg-white">
      <Header />

      <main className="mt-8">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-3xl">Photo Credits</h1>
          <p className="mt-4 text-sm text-gray-400">
            Click on the photo to see author and original photo
          </p>

          <div className="mt-24 flex items-center space-x-6 lg:space-x-8">
            <div className="grid flex-shrink-0 grid-cols-4 gap-6 lg:gap-8">
              {photos.map((photo) => (
                <div
                  className="h-64 w-64 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                  key={photo.imageCredit}
                >
                  <a
                    href={photo.imageCredit}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img
                      src={photo.imageUrl}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
