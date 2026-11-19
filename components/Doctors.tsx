import Image from "next/image";

export default function Doctors() {

  const doctors = [
    {
      image: "/Doctors/doctor1.png",
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      experience: "12 Years Experience",
    },
    {
      image: "/Doctors/doctor2.jpg",
      name: "Dr. Emily Watson",
      specialty: "Neurologist",
      experience: "10 Years Experience",
    },
    {
      image: "/Doctors/doctor3.jpg",
      name: "Dr. Michael Brown",
      specialty: "Orthopedic Surgeon",
      experience: "15 Years Experience",
    },
    {
      image: "/Doctors/doctor4.jpg",
      name: "Dr. Sarah Wilson",
      specialty: "Pediatrician",
      experience: "8 Years Experience",
    },
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <span className="text-[var(--primary)] uppercase font-semibold">
            Our Doctors
          </span>

          <h1 className="text-5xl font-bold mt-3 text-[var(--text)]">
            Meet Our Medical Experts
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-[var(--text-secondary)]">
            Our experienced doctors are committed to providing
            compassionate, personalized and world-class healthcare.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {doctors.map((doctor, index) => (

            <div
              key={index}
              className="bg-[var(--card)] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <Image
                src={doctor.image}
                alt={doctor.name}
                width={400}
                height={450}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold text-[var(--text)]">
                  {doctor.name}
                </h2>

                <p className="mt-2 text-[var(--primary)] font-semibold">
                  {doctor.specialty}
                </p>

                <p className="mt-2 text-[var(--text-secondary)]">
                  {doctor.experience}
                </p>

                <button className="mt-6 w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-3 rounded-xl font-semibold transition">
                  Book Appointment
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}