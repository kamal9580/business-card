import Card, { PersonPropsTypes } from "./components/Card";

const persons: PersonPropsTypes[] = [
  {
    name: "Nilesh",
    intrests: ["coding", "dev", "sports"],
    job: "student",
    socials: [
      { socialName: "github", url: "https://github.com/kamal9580" },
      {
        socialName: "LinkedIn",
        url: "https://www.linkedin.com/in/nilesh-kumar-kamal-655957213/",
      },
    ],
  },
];

function App() {
  return (
    <div className="w-full h-screen bg-slate-800 text-white p-3">
      {persons.map((person, index) => {
        return (
          <Card
            key={index}
            intrests={person.intrests}
            job={person.job}
            name={person.name}
            socials={person.socials}
          />
        );
      })}
    </div>
  );
}

export default App;
