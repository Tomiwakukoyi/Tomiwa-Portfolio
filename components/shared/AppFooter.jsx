import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import AppFooterCopyright from "./AppFooterCopyright";

const socialLinks = [
  {
    id: 2,
    icon: <FiGithub />,
    name: "GitHub",
    url: "https://github.com/tomiwakukoyi",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    name: "Twitter",
    url: "https://twitter.com/tommyk_dev",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tomiwakukoyi",
  },
];

function AppFooter() {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className=" flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="font-general-regular text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
          <div className=" flex items-center justify-evenly gap-5 md:gap-10 mt-1 ml-3 font-sans font-normal text-white">
            <text>{socialLinks[0].name}</text>
            <text>{socialLinks[1].name}</text>
            <text>{socialLinks[2].name}</text>
          </div>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
}

export default AppFooter;
