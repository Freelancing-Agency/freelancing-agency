import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
  description: "This is About page of Opemic.",
  icons: "/images/favicon.ico",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>About Us</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Opemic is a passionate team of experienced freelancers dedicated to empowering small businesses and startups with cutting-edge digital solutions. We understand the unique challenges faced by emerging companies, and we're here to bridge the gap between your vision and reality.
                </p>

                <ul style={{ listStyleType: 'disc'}}>
                  <li>Our team consists of web developers, mobile app developers (iOS & Android), cloud implementation experts, and AI specialists.</li>
                  <li>We've honed our skills across 50+ real-world projects, successfully delivering on 10+ client projects and attracting a global audience of over 25,000 visitors.</li>
                </ul>

                <p>
                  In short, Opemic is your one-stop shop for all your digital needs. We believe in open communication, collaborate closely with you, and deliver high-caliber solutions at competitive rates.
                </p>


                {/* <p className="text-body-color dark:text-body-color-dark text-base">
                  Please visit:{" "}
                  <b>
                    <a href="https://nextjstemplates.com/docs">
                      nextjstemplates.com/docs
                    </a>
                  </b>{" "}
                  to check out the real docs, setup guide and even video
                  instructions
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


