import { Metadata } from "next";
import connectToMongo from "@/config/db.config";
import { SkillModel } from "@/models/skill.model";

export const metadata: Metadata = {
  title: "Skills",
  description: "Learn more about my skills in web development.",
};

const Skills = async () => {
  await connectToMongo();
  const skills = await SkillModel.find().exec();

  const frontendSkills = skills.filter((skill) => skill.type === "frontend");
  const backendSkills = skills.filter((skill) => skill.type === "backend");
  // const otherSkills = skills.filter((skill) => skill.type === "other");

  return (
    <div className="container mx-auto px-8 py-12 overflow-hidden relative">
      <h1
        className="font-bold text-4xl md:text-5xl text-center text-white mb-8 md:mb-12"
        data-aos="zoom-in"
      >
        My <span className="text-gradient-primary">Skills</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 md:mb-4">
        <div className="space-y-4" data-aos="fade-right">
          <div className="w-fit py-1 px-4 bg-white/5 rounded-md mb-8 mx-auto">
            <span className="font-medium text-lg text-gradient-primary">
              Frontend:
            </span>
          </div>
          {frontendSkills.map((skill) => (
            <div key={skill._id}>
              <h3 className="text-base font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <div className="flex items-center gap-4">
                <h3>{skill.percentage}%</h3>
                <progress
                  className="progress progress-gradient w-3/4 bg-white/10"
                  value={skill.percentage}
                  max="100"
                ></progress>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4" data-aos="fade-left" data-aos-delay="300">
          <div className="w-fit py-1 px-4 bg-white/5 rounded-md mb-8 mx-auto">
            <span className="font-medium text-lg text-gradient-primary">
              Backend:
            </span>
          </div>
          {backendSkills.map((skill) => (
            <div key={skill._id}>
              <h3 className="text-base font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <div className="flex items-center gap-4">
                <h3>{skill.percentage}%</h3>
                <progress
                  className="progress progress-gradient w-3/4 bg-white/10"
                  value={skill.percentage}
                  max="100"
                ></progress>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
