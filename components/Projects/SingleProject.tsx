import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleProject = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-white p-6 pt-7 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7 flex align-middle justify-center border-b border-stroke pb-6 dark:border-strokedark ">
        <div className="">
          <Image width={400} height={400} className=" self-center rounded-md" src={image} alt={name} />
          <h3 className="mb-1 text-metatitle3 text-black dark:text-white pt-2">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default SingleProject;


