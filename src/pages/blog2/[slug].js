import Link from "next/link";
import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
import ReactMarkdown from 'react-markdown';
import BlogList from "@/components/Blog/BlogList";


const Blog = (props) => {


	const { title, richText } = props.data.attributes;
	// const {url} = props.data.attributes.image.data[0].attributes.formats.thumbnail;
	// const {name} = props.data.attributes.authors.data[0].attributes;
	const {name} = props.data.attributes.name;
	const {description} = props.data.attributes.description;
	const tags = props.data.attributes.tags.data;
	const {date} = props.data.attributes;
	const {image} = props.data.attributes.image;

	console.log("tags", tags)
	console.log("tags2", props.data.attributes)

	return (
		<div>
			<BlogList
				title={title}
				name={name}
				date={date}
				// image={url}
				// image={image}
				description={description}
				tags={tags}
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

