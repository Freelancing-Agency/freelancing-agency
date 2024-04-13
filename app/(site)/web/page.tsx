import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Integration from "@/components/Integration";
import Contact2 from "@/components/Contact2";

export const metadata: Metadata = {
  title: "Web Services",
  description: "This is About the Opemic Web services",
  icons: "/images/favicon.ico",
  // other metadata
};

export default function Web() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto ">
          <div className=" flex flex-wrap ">
            {/* <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div> */}

            <div className="w-full px-4 lg:w-[100%] ">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Website Development Services</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  At Opemic, we specialize in providing comprehensive web development services tailored to the unique needs of small businesses, start-ups, and college-level projects. Whether you require a brand new website, an e-commerce platform, a website redesign, or modifications to your existing site, we have the expertise to bring your vision to life.
                </p>

                <h4>What We Offer : </h4>
                <br></br>
                <ul style={{ listStyleType: 'disc' }}>
                  <li>
                    <strong>Website Development</strong> : We build robust, user-friendly
                    websites from the ground up. Our process is collaborative, ensuring
                    your website reflects your unique brand identity and resonates with your
                    target audience.
                  </li>
                  <li>
                    <strong>Ecommerce Development</strong> : Turn your passion into profit with
                    a custom-built online store. We create seamless shopping experiences that
                    drive conversions and boost your sales.
                  </li>
                  <li>
                    <strong>Website Redesign</strong> : Breathe new life into your existing
                    website. We'll update outdated designs, enhance functionality, and
                    optimize for search engines, ensuring your online presence remains
                    competitive.
                  </li>
                  <li>
                    <strong>Website Modification</strong> : Need to adapt your website? We
                    offer flexible modification services to accommodate your evolving needs,
                    whether it's adding new features, streamlining navigation, or integrating
                    third-party applications.
                  </li>
                  <li>
                    <strong>Websites for Startups and Small Businesses</strong> : We
                    understand the challenges faced by startups and small businesses. Our
                    cost-effective solutions get you online quickly and efficiently, without
                    compromising on quality or functionality.
                  </li>
                </ul>

                <h4>Tools We Use : </h4>
                <br></br>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We leverage a powerful combination of cutting-edge technologies to deliver exceptional results. Here's a glimpse into our development toolkit.
                </p>
                <ul style={{ listStyleType: 'disc' }}>
                  <li><b>Front-End Development</b> : Next.js, React.js, HTML, CSS, Bootstrap, Tailwind CSS</li>
                  <li><b>Back-End Development</b> : Node.js, Express.js</li>
                  <li><b>Databases</b> : Firebase, MongoDB</li>
                  <li><b>Cloud Services</b> : Google Cloud, AWS</li>
                </ul>
                <Integration />
                <br></br>
                <br></br>
                <section className="why-choose-us">
                  <h4>Why Choose Us?</h4>
                  <br></br>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li><b>Proven Track Record</b> : We have a wealth of experience crafting successful websites for small businesses and startups across diverse industries.</li>
                    <li><b>Unwavering Commitment to Quality</b> : We deliver exceptional results, period. Our team is passionate about creating websites that not only look great but also perform exceptionally well.</li>
                    <li><b>Client-Centric Approach</b> : We collaborate closely with you throughout the entire development process, ensuring your vision is translated into a website that exceeds expectations.</li>
                    <li><b>Scalability and Future-Proofing</b> : We build websites with an eye toward the future, ensuring they can adapt and grow alongside your business.</li>
                    <li><b>Competitive Rates</b> : We offer cost-effective solutions that fit your budget without sacrificing quality.</li>
                  </ul>
                </section>

                <p>
                  With our expertise, dedication, and commitment to excellence, choosing our freelancing agency for your web development needs is a decision you won't regret. Let us help you bring your vision to life and take your online presence to new heights.
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
                <Contact2/>
      </section>
    </>
  );
}
