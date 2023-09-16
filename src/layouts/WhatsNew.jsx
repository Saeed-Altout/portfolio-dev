import { dataThinkCommunity } from "../data/dummy";
import { NewFeatures } from "../components/index";
const WhatsNew = () => (
  <section className="py-20" id="testimonials">
    <h2 className="mb-5 text-3xl font-semibold dark:text-white md:text-4xl">
      Testimonials
    </h2>
    <p className="mb-3 text-lg leading-loose text-gray-800 dark:text-gray-200">
      What's dose
      <span className="font-medium text-teal-500"> community </span>
      think of me?
    </p>

    <div className="flex flex-col gap-5 mt-10 md:flex-row">
      {dataThinkCommunity.map((comment) => (
        <NewFeatures key={comment.id} {...comment} />
      ))}
    </div>
  </section>
);

export default WhatsNew;
