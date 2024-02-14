import CategoryTab from "@/components/Portfolio/CategoryTab";
import Projects from "@/components/Portfolio/Projects";
import connectToMongo from "@/config/db.config";
import { ProjectModel } from "@/models/project.model";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore my portfolio and discover the projects I have worked on using the MERN stack, JavaScript, HTML & CSS.",
};

const PortfolioPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const category = searchParams.category || "";
  await connectToMongo();
  const projects = category
    ? await ProjectModel.find({ category })
        .exec()
        .then((projects) =>
          projects.map((project) => ({
            ...project._doc,
            _id: project._id.toString(),
          }))
        )
    : await ProjectModel.find()
        .exec()
        .then((projects) =>
          projects.map((project) => ({
            ...project._doc,
            _id: project._id.toString(),
          }))
        );

  return (
    <div className="container mx-auto px-8 py-12 mb-12 overflow-hidden relative">
      <h1
        className="font-bold text-4xl md:text-5xl text-center text-white mb-8 md:mb-12"
        data-aos="zoom-in"
      >
        Port<span className="text-gradient-primary">folios</span>
      </h1>

      <CategoryTab category={category} totalData={projects.length} />

      <div>
        <Projects projects={projects} />
      </div>
    </div>
  );
};

export default PortfolioPage;
