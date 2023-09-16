import React from "react";
import { SocialIcons } from "../data/dummy";
import profile from "../data/profile.png";
import { styles } from "../data/styles";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className={`${styles.flexCenter} flex-col`}>
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="flex-1 text-right">
          <span className="block py-2">مرحبًا👋، أنا سعيد، مطور ويب.</span>
          <h1 className="text-6xl font-medium text-teal-500 dark:text-teal-400 md:text-6xl">
            سعيد التوت
          </h1>
          <h3 className="py-2 text-2xl dark:text-white md:text-3xl">
            مبرمج & مصمم.
          </h3>
          <p className="py-3 pt-8 mx-auto text-lg leading-loose text-gray-800 w-69 dark:text-gray-200">
            <span className="block py-2">
              أعمل على تحويل الأفكار إلى تطبيقات ومواقع ويب مبتكرة وفعالة. لدي
              خبرة واسعة في لغات البرمجة المختلفة مثل HTML، CSS و JavaScript.
              أستخدم أطر العمل الشهيرة مثل ReactJS و NextJS لبناء واجهات مستخدم
              حديثة ومتطورة. كما أنني ملم بقواعد البيانات والاستفسارات المختلفة
              مثل MySQL و MongoDB.
            </span>
          </p>
          <div
            className={`flex items-center justify-center lg:justify-start mt-5 gap-5 text-3xl text-teal-500 dark:text-gray-200 `}
          >
            {SocialIcons.map((icon) => (
              <Link to={icon.href} key={icon.id} className="cursor-pointer ">
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative mx-auto mt-12 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96">
          <img
            src={profile}
            alt="Developer"
            className="object-contain mx-auto w-80 h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
