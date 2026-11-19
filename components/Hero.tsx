import React from 'react'
import Image from 'next/image'
import '../app/globals.css'
import Counter from "./counter";


const Hero = () => {

    return (
      <div className="relative z-10 flex flex-col  lg:flex-row justify-between bg-[var(--background)] overflow-hidden">
            {/* <div className="shape"></div> */}
            {/* <div
                className="absolute bg-blue-400 opacity-20 w-240 h-164 -right-[20%] -top-10"
                style={{
                    clipPath:
                    "polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0% 50%)",
                    }}
                    ></div> */}
                    <div
                        className="lg:hidden block top-20 Clockwise absolute bg-blue-600 right-[12%] opacity-25"
                        style={{
                            width: "320px",
                            height: "320px",
                            borderRadius: "58% 42% 35% 65% / 40% 35% 65% 60%",
                        }}
                    ></div>
                    <div
                        className="lg:hidden block top-20 AntiClockwise absolute bg-blue-600 right-[12%] opacity-25"
                        style={{
                            width: "320px",
                            height: "320px",
                            borderRadius: "42% 58% 60% 40% / 55% 35% 65% 45%",
                        }}
                    ></div>
            <div
                className="hidden lg:block Clockwise absolute bg-blue-600 right-[30%] opacity-20"
                style={{
                    width: "580px",
                    height: "580px",
                    borderRadius: "58% 42% 35% 65% / 40% 35% 65% 60%",
                }}
            ></div>
            <div
                className="hidden lg:block AntiClockwise absolute bg-blue-600 right-[30%] opacity-25"
                style={{
                    width: "580px",
                    height: "580px",
                    borderRadius: "42% 58% 60% 40% / 55% 35% 65% 45%",
                }}
            ></div>
            <div
                className="hidden lg:block absolute right-[-120px] top-10 opacity-20 animate-slow-rotate"
                style={{
                    width: "580px",
                    height: "580px",
                    background: "#2563EB",
                    borderRadius: "58% 42% 35% 65% / 40% 35% 65% 60%",
                }}
            ></div>
            <div
                className="absolute bg-[#0974f7] z-40 hidden lg:block right-36 top-72 opacity-50 AntiClockwis"
                style={{
                    width: "220px",
                    height: "220px",
                    borderRadius: "72% 28% 47% 53% / 37% 62% 38% 63%",
                }}

                >
                <div className='absolute top-7 left-15 opacity-100 '>
                  <Image
                                src="/Images/24-7.png"
                                alt="Logo"
                                width={100}
                                height={100}
                                className='opacity-100'
                            />
                            <span className='text-red-950 font-bold text-lg absolute left-5'>Emergency   Services</span>
                </div>

                </div>
            <div
                className="absolute bg-[#0974f7] z-40 lg:hidden right-36 bottom-0 opacity-70 AntiClockwis"
                style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "72% 28% 47% 53% / 37% 62% 38% 63%",
                }}

                >
                <div className='absolute top-7 left-15 opacity-100 '>
                  <Image
                                src="/Images/24-7.png"
                                alt="Logo"
                                width={70}
                                height={70}
                                className='opacity-100'
                            />
                            <span className='text-red-950 font-bold text-lg absolute left-5'>Emergency   Services</span>
                </div>

                </div>
            <div
                className="absolute bg-[#0077ff] left-[-80px] top-20 rounded-full opacity-80 blur-3xl"
                style={{
                    width: "220px",
                    height: "220px",
                }}
            ></div>
            <div
                className="block lg:hidden absolute bg-[#0077ff] right-[-80px] top-20 rounded-full opacity-80 blur-3xl"
                style={{
                    width: "220px",
                    height: "220px",
                }}
            ></div>
            <div
                className="hidden sm:block absolute top-24 right-16 rounded-full border-4 border-blue-300 opacity-20"
                style={{
                    width: "80px",
                    height: "80px",
                }}
            ></div>
            <div
                className="block sm:hidden absolute left-20 bottom-36 AntiClockwise rounded-xl border-2 border-blue-300 opacity-30"
                style={{
                    width: "55px",
                    height: "55px",
                }}
            ></div>
            <div className=" absolute top-16 right-52 grid grid-cols-6 gap-3 opacity-10">
                {Array.from({length: 42}).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                ))}
            </div>
            <div className="z-10 block sm:hidden absolute top-165 left-0 grid grid-cols-24 gap-3 opacity-25">
                {Array.from({length: 560}).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                ))}
            </div>
            <div
                className="block lg:hidden absolute top-185 right-10 rounded-full border-4 border-blue-500 opacity-25"
                style={{
                    width: "80px",
                    height: "80px",
                }}
            ></div>
            <div
                className="hidden sm:block absolute left-20 bottom-36 AntiClockwise rounded-xl border-2 border-blue-300 opacity-30"
                style={{
                    width: "55px",
                    height: "55px",
                }}
            ></div>
            <div className="hidden sm:block absolute left-1/2 top-24 text-7xl text-blue-600 opacity-25 animate-bounce">
                +
            </div>
            <div className="block lg:hidden absolute left-[5%] bottom-95 z-50 text-7xl text-blue-600 opacity-30 animate-bounce">
                +
            </div>
            {/* <div className="absolute bottom-0 z-30 left-0 h-40 w-full bg-gradient-to-b from-transparent to-[var(--box)]"></div> */}
            <div
                className="absolute bottom-0 left-0 w-full"
                style={{
                    height: "120px",
                    clipPath: "ellipse(70% 100% at 40% 100%)",
                    background: "#DBEAFE",
                }}
            ></div>

            <div className="absolute  w-130 h-130 rounded-full bg-blue-400 top-[20%] left-[0%] blur-3xl opacity-30"></div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-15 lg:pl-20 text-center lg:text-left">
                <div className=' flex items-center '>
                    <div className=' flex lg:items-start items-center bg-[var(--surface-secondary)] py-1 px-4 rounded-2xl gap-2 text-[var(--primary)] font-bold'>
                        <span>
                            <Image
                                src="/verified.png"
                                alt="Logo"
                                width={15}
                                height={15}
                                className='blue-icon'
                            />
                        </span>
                        <span className=''>
                            WE CARE FOR YOUR HEALTH
                        </span>
                    </div>
                </div>
                <div className="text-[var(--text)] pt-4 grid gap-2 font-bold text-4xl sm:text-5xl lg:text-7xl">
                    <span>Your Health,</span>
                    <span className='text-[var(--primary)]'> Our Priority</span>
                </div>
                <div className=" text-base sm:text-lg font-medium max-w-md mx-auto lg:mx-0 text-[var(--text-secondary)]">
                    <span>
                        We provides world-class healthcare services with compassion,advance technology and
                        experienced doctors you can trust.</span>
                </div>
                <div className="flex items-center mt-5 flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className='mx-10 lg:mx-0 w-50 lg:w-auto flex gap-2 text-white font-bold py-2 px-2.5 rounded-lg transition bg-[var(--primary)] hover:bg-[var(--primary-hover)]'>
                        <Image className='invert'
                            src="/appointment-icon.png"
                            alt="Book Appointment"
                            width={20}
                            height={20}
                        />Book Appointment</button>

                    <button className=" mx-10 lg:mx-0 w-50 lg:w-auto relative overflow-hidden border-2 border-[var(--primary)] flex items-center gap-2 text-[var(--primary)] font-bold py-2 px-2.5 rounded-lg group">

                        <span className="absolute inset-0 w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full"></span>

                        <span className="relative  flex items-center gap-2 group-hover:text-white">
                            Learn More
                            <Image
                                className="blue-icon invert group-hover:invert-0"
                                src="/right-arrow.png"
                                alt="Learn More"
                                width={20}
                                height={20}
                            />
                        </span>
                    </button>
                </div>
                <div className="relative lg:absolute mt-12 lg:mt-10 opacity-90 z-40 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-1 grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-xl">
                    <div className='grid justify-items-center border-[var(--border)] border-r-1 px-4'>
                        <Image
                            src="/experts.png"
                            width={30}
                            height={30}
                            alt='pic'
                        />
                        <span className='text-2xl font-bold p-2'>
                            <Counter target={50} />+
                        </span>
                        <span >
                            Expert Doctors
                        </span>
                    </div>
                    <div className='grid justify-items-center border-[var(--border)] border-r-1 px-4'>
                        <Image
                            src="/building.png"
                            width={30}
                            height={30}
                            alt='pic'
                        />
                        <span className='text-2xl font-bold p-2'>
                            <Counter target={25} />+

                        </span>
                        <span >
                            Departments
                        </span>
                    </div>
                    <div className='grid justify-items-center border-[var(--border)] border-r-1 px-4'>
                        <Image
                            src="/happiness.png"
                            width={30}
                            height={30}
                            alt='pic'
                        />
                        <span className='text-2xl font-bold p-2'>
                            <Counter target={10000} />+

                        </span>
                        <span >
                            Happy Patients
                        </span>
                    </div>
                    <div className='grid justify-items-center px-4'>
                        <Image
                            src="/expertise.png"
                            width={30}
                            height={30}
                            alt='pic'
                        />
                        <span className='text-2xl font-bold p-2'>
                            <Counter target={50} />+
                        </span>
                        <span >
                            Years Experience
                        </span>
                    </div>
                </div>

            </div>
            {/* <div className='emergency bg-white rounded-full grid justify-between items-center'>
                 <div className="gird  items-center">
                <Image
                    src="/Images/24-7.png"
                    alt="Logo"
                    width={60}
                    height={60}
                />
                <div className='grid justify-between items-center'>
                <span>Emergency </span>
                <span>Services</span>
                
                </div>
            </div>
            </div> */}
                <div
                    className="z-20 lg:hidden block bottom-20 Clockwise absolute bg-blue-600 right-[12%] opacity-35"
                    style={{
                        width: "320px",
                        height: "320px",
                        borderRadius: "58% 42% 35% 65% / 40% 35% 65% 60%",
                    }}
                ></div>
                <div
                    className="z-20 lg:hidden block bottom-20 AntiClockwise absolute bg-blue-600 right-[12%] opacity-35"
                    style={{
                        width: "320px",
                        height: "320px",
                        borderRadius: "42% 58% 60% 40% / 55% 35% 65% 45%",
                    }}
                ></div>
                <div
                    className="lg:hidden block bottom-10 absolute right-[-80px]  opacity-20 animate-slow-rotate"
                    style={{
                        width: "240px",
                        height: "450px",
                        background: "#2563EB",
                        borderRadius: "58% 42% 35% 65% / 40% 35% 65% 60%",
                    }}
                ></div>
            <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:-mt-5">
                <Image
                    className=' lg:-mr-30 z-30 relative bg-transparent'
                    src="/Images/Doctor-image.png"
                    alt="Logo"
                    width={560}
                    height={560}
                />
            </div>
        </div>
    )
}

export default Hero