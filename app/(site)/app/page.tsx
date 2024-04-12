import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Integration from "@/components/Integration/app";
import Contact2 from "@/components/Contact2";

export const metadata: Metadata = {
  title: "About the app services",
  description: "This is About the app services",
  icons: "/images/favicon.ico",
  // other metadata
};

export default function App() {
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
                <h1>App Development Services</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  At Opemic, we specialize in providing comprehensive app development services, catering to the diverse needs of businesses and entrepreneurs. Whether you require a native app for iOS or Android or a cross-platform solution, we have the expertise to transform your ideas into high-performing, user-friendly applications.
                </p>

                <h4>What We Offer : </h4>
                <br />
                <ul style={{ listStyleType: 'disc' }}>
                  <li>
                    <strong>Native App Development:</strong> Crafting feature-rich, native applications for both iOS and Android platforms, optimized for performance and user experience.
                  </li>
                  <li>
                    <strong>Android App Development:</strong> Building robust and scalable Android applications tailored to your specific requirements, designed to engage and delight users.
                  </li>
                  <li>
                    <strong>Cross-Platform Development:</strong> Leveraging technologies such as React Native to develop cross-platform apps that run seamlessly on multiple devices, reducing time and cost.
                  </li>
                </ul>

                <h4>Tools We Use : </h4>
                <br />
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Our team utilizes a wide range of cutting-edge tools and technologies to develop innovative and robust mobile applications. Some of the key tools we employ include:
                </p>
                <ul style={{ listStyleType: 'disc' }}>
                  <li>Java</li>
                  <li>Kotlin</li>
                  <li>React Native</li>
                  <li>Jetpack Compose</li>
                  <li>Firebase</li>
                </ul>
                <Integration />
                <br></br>
                <br></br>
                <section className="why-choose-us">
                  <h4>Why Choose Us?</h4>
                  <br />
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>
                      <strong>Extensive Experience:</strong> With years of experience in app development, our team has the knowledge and expertise to tackle even the most complex projects.
                    </li>
                    <li>
                      <strong>Customized Solutions:</strong> We understand that every app project is unique, and we work closely with our clients to deliver tailored solutions that meet their specific requirements.
                    </li>
                    <li>
                      <strong>User-Centric Design:</strong> We prioritize user experience and design, ensuring that our apps are intuitive, engaging, and visually appealing.
                    </li>
                    <li>
                      <strong>Quality Assurance:</strong> Our rigorous testing process ensures that every app we develop is of the highest quality, free from bugs and glitches.
                    </li>
                    <li>
                      <strong>Timely Delivery:</strong> We understand the importance of deadlines, and we are committed to delivering projects on time and within budget, without compromising on quality.
                    </li>
                  </ul>
                </section>

                <p>
                  Whether you're looking to develop a native app for a specific platform or a cross-platform solution to reach a wider audience, our freelancing agency has the skills and expertise to bring your app ideas to life. Partner with us and let's build something extraordinary together.
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
