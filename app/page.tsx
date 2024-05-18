import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      <nav className="w-full flex items-center justify-between">
        <p className="text-[#043C21] font-bold text-xl">FuelPro</p>

        <div className="hidden md:flex items-center justify-between gap-8">
          <p>Home</p>
          <p>Our values</p>
          <p>Our services</p>
          <p>Pricings</p>
          <p>Contact us</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button className="text-[#043C21]">Login</button>
          <button className="px-4 py-2 rounded-xl bg-[#043C21] text-white">
            Sign Up
          </button>
        </div>
      </nav>

      <div className="flex items-center justify-between gap-8 py-8">
        <div className="h-full flex flex-col items-start justify-between gap-4">
          <p className="font-bold text-[#043C21] text-3xl">
            Track, Manage, Monitor oil-based products (PMS, AGO, LPG, DPK) with
            FuelPro
          </p>
          <p className="text-slate-800 leading-6">
            FuelPro is a fuel management application that helps in handling
            end-to-end monitoring and management of oil-based products (PMS,
            AGO, LPG, DPK) sold at fuel stations
          </p>

          <div className="w-full flex items-center justify-center md:justify-start gap-4">
            <button className="px-4 py-2 rounded-xl bg-[#043C21] hover:bg-white hover:text-[#043C21] hover:border hover:border-[#043C21] text-white">
              Get Started
            </button>
            <button className="px-4 py-2 rounded-xl text-[#043C21] hover:bg-[#043C21] hover:text-white border border-[#043C21]">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/station.svg"
            width={1000}
            height={700}
            className="hidden md:block"
            alt="Image of a fuel station"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <p>Our Values</p>
        <p>Efficient Resource Management for Sustainable Energy Solutions</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between py-8">
        <div className="flex flex-col items-center justify-between gap-4">
          <Image
            src="/monitor.svg"
            width={250}
            height={250}
            alt="image of two people shaking hands from within a cellphone"
          />
          <p className="font-semibold">Real-time Monitoring</p>
          <p>
            We provide real-time monitoring of fuel levels, sales transactions,
            and inventory across all fuel stations.{" "}
          </p>
          <button className="px-4 py-2 rounded-xl text-[#043C21] hover:bg-[#043C21] hover:text-white border border-[#043C21]">
            Learn More
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-4">
          <Image
            src="/security.svg"
            width={250}
            height={250}
            alt="image of two security men protecting a computer"
          />
          <p className="font-semibold">Security and Access Control</p>
          <p>
            We Implement robust security measures to prevent unauthorized
            access, theft, of fuel supplies.
          </p>
          <button className="px-4 py-2 rounded-xl text-[#043C21] hover:bg-[#043C21] hover:text-white border border-[#043C21]">
            Learn More
          </button>
        </div>

        <div className="flex flex-col items-center justify-between gap-4">
          <Image
            src="/collab.svg"
            width={250}
            height={250}
            alt="image of three people demonstrating teamwork"
          />
          <p className="font-semibold">Team work and Collaboration</p>
          <p>
            We foster the spirit of team work and collaborations to achieve our
            goals more efficiently
          </p>
          <button className="px-4 py-2 rounded-xl text-[#043C21] hover:bg-[#043C21] hover:text-white border border-[#043C21]">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <p className="text-[#043C21]">Our Services</p>
        <p className="font-bold text-2xl">
          Where <span>technology</span> helps with your daily management
        </p>
      </div>

      <div className="flex flex-col items-center justify-between gap-12">
        <div className="w-10/12 p-8 rounded-2xl flex items-center justify-between bg-[#043C21] relative">
          <div className="md:w-8/12 flex flex-col items-start justify-between gap-4">
            <p className="text-white text-2xl">Station Attendants</p>
            <p className="text-white">
              Effortlessly onboard station attendants with our seamless
              registration process. Our intuitive form simplifies the journey,
              enabling swift entry of essential details. Once registered,
              assigning them to a pump is just as seamless.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="py-2 px-4 rounded-2xl bg-white">
                Form registration
              </p>
              <p className="py-2 px-4 rounded-2xl bg-white">Pump assignment</p>
              <p className="py-2 px-4 rounded-2xl bg-white">Track assignment</p>
            </div>
          </div>

          <Image
            src="/man.svg"
            width={250}
            height={300}
            alt="image of a man holding a fuel dispenser"
            className="hidden md:block absolute right-0"
          />
        </div>

        <div className="w-10/12 p-8 rounded-2xl flex items-center justify-end bg-[#54D2F5] relative">
          <Image
            src="/pump.svg"
            width={250}
            height={300}
            alt="image of a petrol pump"
            className="hidden md:block absolute left-0"
          />

          <div className="md:w-8/12 flex flex-col items-end justify-between gap-4">
            <p className="text-[#043C21] text-2xl">Petrol Pump Management</p>
            <p className="text-[#043C21]">
              Lorem ipsum dolor sit amet consectetur. Enim volutpat porttitor in
              sit quis sed erat. Enim odio arcu egestas aliquet maecenas. Est ac
              urna nulla in integer. Sed lorem integer enim ornare massa
              consectetur id dolor nisl. Viverra commodo adipiscing nibh mi
              mattis dui posuere dui. Gravida vestibulum sit pharetra enim ipsum
              rhoncus id aenean velit.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="py-2 px-4 rounded-2xl bg-[#043C21] text-white">
                Lorem ipsum
              </p>
              <p className="py-2 px-4 rounded-2xl bg-[#043C21] text-white">
                Lorem ipsum
              </p>
              <p className="py-2 px-4 rounded-2xl bg-[#043C21] text-white">
                Lorem ipsum
              </p>
            </div>
          </div>
        </div>

        <div className="w-10/12 p-8 rounded-2xl flex items-center justify-between bg-[#043C21] relative">
          <div className="md:w-8/12 flex flex-col items-start justify-between gap-4">
            <p className="text-white text-2xl">Petrol Tank Management</p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur. Enim volutpat porttitor in
              sit quis sed erat. Enim odio arcu egestas aliquet maecenas. Est ac
              urna nulla in integer. Sed lorem integer enim ornare massa
              consectetur id dolor nisl. Viverra commodo adipiscing nibh mi
              mattis dui posuere dui. Gravida vestibulum sit pharetra enim ipsum
              rhoncus id aenean velit.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="py-2 px-4 rounded-2xl bg-white">Lorem ipsum</p>
              <p className="py-2 px-4 rounded-2xl bg-white">Lorem ipsum</p>
              <p className="py-2 px-4 rounded-2xl bg-white">Lorem ipsum</p>
            </div>
          </div>

          <Image
            src="/tank.svg"
            width={400}
            height={450}
            alt="image of a man holding a fuel dispenser"
            className="hidden md:block absolute right-0"
          />
        </div>
      </div>

      <footer className="pt-16 md:w-10/12 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-5/12 flex flex-col gap-8">
          <p className="text-[#043C21] font-bold text-xl">FuelPro</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet massa semper integer
            urna varius ornare pellentesque porttitor. Sit aliquam quam sed amet
            at tempus. Sit senectus et fermentum sed. Neque arcu ut ligula magna
            in ultrices proin. Quis imperdiet faucibus proin diam tellus vivamus
            egestas.
          </p>
          <div className="flex items-center justify-between gap-6">
            {/* social media icons */}
          </div>
        </div>

        <div className="w-full md:w-5/12 flex items-center justify-around">
          <div className="flex flex-col items-start justify-between gap-6">
            <p className="font-semibold">Useful Links</p>
            <p>Home</p>
            <p>Our values</p>
            <p>Our services</p>
            <p>Pricings</p>
          </div>

          <div className="flex flex-col items-start justify-between gap-6">
            <p className="font-semibold">Our Services</p>
            <p>Home</p>
            <p>Our values</p>
            <p>Our services</p>
            <p>Pricings</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
