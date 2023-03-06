import Link from "next/link";
// import remarkGfm from 'remark-gfm';
import { useRouter } from "next/router";
import ReactMarkdown from 'react-markdown';
import BlogList from "@/components/Blog/BlogList";
import BlogCard from "@/components/Blog/BlogCard";

const Blog = (props) => {

	const { title, description, richtext } = props.data.attributes;
	// const {url} = props.data.attributes.image.data[0].formats.thumbnail.attributes;
	// const {name, desc } = props.data.attributes.authors.data[0].attributes;
	const {tags} = props.data.attributes;
	const {date} = props.data.attributes;
	// const {image} = props.data.attributes.authors.data[0].attributes;

	return (
		<div>
			<BlogCard
				title={title}
				// name={name}
				date={date}
				// image={url}
				description={description}
				tags={tags.data}
			/>
			<div className="container">
				<ReactMarkdown
					children={richtext}
					// remarkPlugins={[remarkGfm]}
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

