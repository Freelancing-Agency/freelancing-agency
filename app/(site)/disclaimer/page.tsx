import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Integration from "@/components/Integration/ai";
import Contact2 from "@/components/Contact2";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "This is About the Opemic Disclaimer",
  icons: "/images/favicon.ico",
  // other metadata
};

export default function Disclaimer() {
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
                <h1>Disclaimer</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                 Opemic Disclaimer
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


<p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at contact@opemic.com.</p>

<h2>Disclaimers for opemic</h2>

<p>All the information on this website - https://www.opemic.com/ - is published in good faith and for general information purpose only. opemic does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (opemic), is strictly at your own risk. opemic will not be liable for any losses and/or damages in connection with the use of our website.</p>

<p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>

<p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>

<h2>Consent</h2>

<p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

<h2>Update</h2>

<p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
              </div>
            </div>
          </div>
        </div>
        <Contact2/>
      </section>
    </>
  );
}
