import Link from "next/link";
import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
import ReactMarkdown from 'react-markdown';
import ClinicCard from "@/components/Blog/BlogCard";


const Blog = (props) => {


	const { title, richText } = props.data.attributes;
	// const {url} = props.data.attributes.image.data[0].attributes.formats.thumbnail;
	// const {name} = props.data.attributes.authors.data[0].attributes;
	const {name} = props.data.attributes.name;
	const {description} = props.data.attributes;
	const tags = props.data.attributes.tags.data;
	const {date} = props.data.attributes;
	const {image} = props.data.attributes.image;
	const {raiting} = props.data.attributes;
	const {rewiew} = props.data.attributes;
	const {stars} = props.data.attributes;




	console.log("tags", tags)
	console.log("tags2", props.data.attributes)
	console.log(props.stars)
	return (
		<div>
			<ClinicCard
				title={title}
				name={name}
				date={date}
				// image={url}
				image={image}
				description={description}
				tags={tags}
				raiting={raiting}
				stars={stars}
				rewiew={rewiew}
			/>
			<div className="container">
				<ReactMarkdown
					children={richText}
					remarkPlugins={[remarkGfm]}
				/>
			</div>
		</div>
	);
};
export default Blog;



export async function getStaticProps(context) {
  const res = await fetch(
	// `${process.env.API_URL}/blogs?filters[slug][$eq]=${context.params.slug}&populate[0]=tags&populate[1]=authors.image.media&populate[2]=image`

    `${process.env.API_URL}/blogs?filters[slug][$eq]=${context.params.slug}&populate=*`
  );
  const response = await res.json();

  return {
    props: { data: response.data[0] }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {

  const res = await fetch(`${process.env.API_URL}/blogs/`);
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

