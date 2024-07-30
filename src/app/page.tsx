
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <>
      <div
        className="flex min-h-screen flex-col items-center justify-between p-24 bg-center bg-cover"
        style={{
          backgroundImage: 'url("stock.png")',
        }}
      >
        <div className="flex-col text-center text-white ">
          <h1 className="text-5xl font-bold text-sky-600">
            Volunteer<span className="text-sky-300">.</span>
            <br /> Support Projects<span className="text-sky-300">.</span>
            <br />
            Fund Social Initiatives<span className="text-sky-300">.</span>
          </h1>
        </div>
      </div>

      <div>
        <section className="bg-green-100">
          <div className="-z-50 mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src="voul2.png"
                    className="absolute  rounded-2xl  inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Discover Volunteer Opportunities
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Browse, apply, and start making an impact. Connect with
                    neighbors and create positive change.
                  </p>

                  <a
                    href="/volunteering"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Explore now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="mt-0 bg-sky-100">
          <div className="-z-50 mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src="funding1.png"
                    className="absolute rounded-2xl  inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Empower Initiatives with Your Contributions
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Browse campaigns, learn about goals, and contribute. Every
                    dollar builds a stronger community.
                    <br /> Track progress, get updates, and see your impact
                    firsthand
                  </p>

                  <a
                    href="/crowdfunding"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Make a Difference
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
