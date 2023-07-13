import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />

      <AppBanner />

      <ProjectsGrid />

      {/* <div className="sm:top-[21rem]  md:mt-40 absolute top-72 ml-20  md:-ml-1 ">
        <div className="font-general-medium w-[14.33rem] px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
          <Link
            href="https://github.com/tomiwakukoyi"
            aria-label="My GitHub"
            passHref
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer" aria-label="My GitHub">
              <Button title="My Github Portfolio" />
            </a>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
