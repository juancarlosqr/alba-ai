export function CallToAction() {
  return (
    <section aria-labelledby="cause-heading">
      <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501117716987-c8c394bb29df?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-50"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2
            id="cause-heading"
            className="text-3xl font-medium tracking-tight text-white sm:text-4xl"
          >
            Enhance Your Guests Experience
          </h2>
          <p className="mt-3 text-xl text-white">
            Personalization is key in the hospitality industry. Guests are
            looking to have unique and exclusive experiences, tailored to their
            wants and needs.
            <br />
            Our AI-Powered Concierge Bot can help you deliver this experience
            24/7.
          </p>
          <a
            href="https://cal.com/moonside/alba"
            className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
