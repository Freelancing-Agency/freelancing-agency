import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div className="flex justify-center flex-col ">
          <Image width={500} height={400} className=" self-center rounded-md" src={image} alt={name} />
          <h3 className="mb-1 text-metatitle3 text-black dark:text-white pt-1">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;


