import Link from "next/link";
import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
import ReactMarkdown from 'react-markdown';
import ClinicCard from "@/components/Clinic/ClinicCard";


const Clinics = (props) => {

	const {name, type, richText, text, description, nameadress, worktime, services, } = props.data.attributes;

	// console.log("tags", tags)
	// console.log("tags2", props.data.attributes)

	return (
		<div>
			<ClinicCard

				type={type}
				name={name}
				description={description}
				nameadress={nameadress}
				worktime={worktime}
				services={services}
			/>
			<div>
				<ReactMarkdown
					children={richText}
					remarkPlugins={[remarkGfm]}
				/>
			</div>
		</div>
	);
};
export default Clinics;

export async function getStaticProps(context) {
  const res = await fetch(
	// `${process.env.API_URL}/blogs?filters[slug][$eq]=${context.params.slug}&populate[0]=tags&populate[1]=authors.image.media&populate[2]=image`

    `${process.env.API_URL}/clinics?filters[slug][$eq]=${context.params.slug}&populate=*`
  );
  const response = await res.json();

  return {
    props: { data: response.data[0] }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {

  const res = await fetch(`${process.env.API_URL}/clinics/`);
  const data = await res.json();

  return {
    paths: data.data.map(({ attributes }) => ({
      params: {
        slug: attributes.slug,
      },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

