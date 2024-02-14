import Link from "next/link";

const categories = [
  {
    name: "All",
    value: "",
  },
  {
    name: "Full Stack (Mern)",
    value: "mern",
  },
  {
    name: "Frontend (React)",
    value: "react",
  },
  {
    name: "DOM",
    value: "dom",
  },
  {
    name: "Basic",
    value: "basic",
  },
  {
    name: "JavaScript Game/App",
    value: "javascript",
  },
];

const CategoryTab = ({
  category,
  totalData,
}: {
  category: any;
  totalData: number;
}) => {
  return (
    <div
      className="tabs !flex flex-wrap tabs-boxed w-fit mx-auto mb-8 justify-center"
      data-aos="zoom-in"
      data-aos-delay={300}
    >
      {categories.map((item) => (
        <Link
          href={`/portfolio${item.value ? `?category=${item.value}` : ""}`}
          key={item.name}
          className={`tab ${item.value === category ? "tab-active" : ""}`}
        >
          {item.name}{" "}
          {item.value === category && (
            <div className="ml-2 badge badge-sm badge-secondary badge-outline">
              {totalData}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default CategoryTab;
