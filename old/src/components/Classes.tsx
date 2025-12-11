const schedule = [
  {
    day: "Monday",
    classes: [
      { name: "Beginners Boxing", time: "18:00 – 19:00" },
      { name: "Conditioning & Cardio", time: "19:00 – 20:00" },
      { name: "Advanced Sparring", time: "20:00 – 21:00" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { name: "Technical Training", time: "18:00 – 19:00" },
      { name: "Bag Work & Drills", time: "19:00 – 20:00" },
      { name: "Fitness Boxing", time: "20:00 – 21:00" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { name: "Beginners Boxing", time: "18:00 – 19:00" },
      { name: "Strength Training", time: "19:00 – 20:00" },
      { name: "Competition Team", time: "20:00 – 21:00" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { name: "Footwork & Defense", time: "18:00 – 19:00" },
      { name: "Heavy Bag Session", time: "19:00 – 20:00" },
      { name: "Sparring Practice", time: "20:00 – 21:00" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { name: "All Levels Boxing", time: "18:00 – 19:00" },
      { name: "Conditioning Circuit", time: "19:00 – 20:00" },
      { name: "Open Gym", time: "20:00 – 22:00" },
    ],
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Group Class Schedule</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Join our structured classes designed for all skill levels
        </p>

        {/* Desktop Schedule */}
        <div className="hidden lg:block max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full border-2 border-border">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                {schedule.map((day) => (
                  <th key={day.day} className="p-4 text-left font-bold uppercase tracking-wider border border-border">
                    {day.day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2].map((classIndex) => (
                <tr key={classIndex} className="border-b border-border">
                  {schedule.map((day) => (
                    <td key={day.day} className="p-4 border border-border bg-background">
                      {day.classes[classIndex] && (
                        <div>
                          <div className="font-bold text-sm mb-1">{day.classes[classIndex].name}</div>
                          <div className="text-sm text-muted-foreground">{day.classes[classIndex].time}</div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Schedule */}
        <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
          {schedule.map((day, index) => (
            <div
              key={day.day}
              className="bg-background border-2 border-border rounded-lg overflow-hidden shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="font-bold text-xl uppercase tracking-wider">{day.day}</h3>
              </div>
              <div className="p-4 space-y-3">
                {day.classes.map((cls, idx) => (
                  <div key={idx} className="border-b border-border last:border-0 pb-3 last:pb-0">
                    <div className="font-bold">{cls.name}</div>
                    <div className="text-sm text-muted-foreground">{cls.time}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium">
            All classes require advance booking. Contact us to reserve your spot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Classes;
