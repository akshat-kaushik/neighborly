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
            Volunteer<span className="text-sky-500">.</span>
            <br /> Support Projects<span className="text-sky-500">.</span>
            <br />
            Fund Social Initiatives<span className="text-sky-500">.</span>
          </h1>
        </div>
      </div>

      <div className="bg-sky-100 min-h-screen flex">
        <div>
          <img src="voul2.png" alt="" />
          <img src="voul2.png" alt="" />
          <img src="voul2.png" alt="" />
        </div>
        <div className="flex-col">
          <h1>
            At Neighbourly, we believe in the power of community and
            volunteerism. Find roles that match your skills and schedule
          </h1>
          <h1>
            Explore various roles from tutoring to gardening. Join a group or
            volunteer individually.
          </h1>
          <h1>Browse, apply, and start making an impact</h1>
        </div>
      </div>

      <div className="bg-sky-100 min-h-screen flex">
        <div>
          <img src="voul2.png" alt="" />
          <img src="voul2.png" alt="" />
          <img src="voul2.png" alt="" />
        </div>
        <div>
          <h1>
            Neighbourly connects you with projects needing community support
          </h1>
          <h1>
            "Browse campaigns, learn about goals, and contribute. Every dollar
            builds a stronger community.
          </h1>
          <h1>Track progress, get updates, and see your impact firsthand.</h1>
        </div>
      </div>
    </>
  );
}
