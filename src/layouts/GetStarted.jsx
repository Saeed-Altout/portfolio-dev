import { startSteps } from "../data/dummy";
import { StartSteps } from "../components/index";
const GetStarted = () => (
  <section className="py-20" id="get started">
    <h2 className="mb-5 text-3xl font-semibold dark:text-white md:text-4xl">
      Get started
    </h2>
    <p className="mb-3 text-lg leading-loose text-gray-800 dark:text-gray-200">
      Get started with
      <span className="font-medium text-teal-500 "> Saeed Dev</span> just do a
      few clicks
    </p>

    <div className="flex flex-col items-center justify-center gap-10 mt-10 lg:flex-row lg:justify-between">
      <div className="flex flex-col w-full gap-5 p-5 bg-white shadow-2xl basis-3/5 dark:bg-slate-900 lg:w-fit rounded-xl">
        {startSteps.map((step, index) => (
          <StartSteps
            key={step}
            number={`${index < 10 ? "0" : ""} ${index + 1}`}
            text={step}
          />
        ))}
      </div>
    </div>
  </section>
);

export default GetStarted;
