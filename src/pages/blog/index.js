import { useRouter } from "next/router";
import Link from "next/link";

import BlogCard from "@/components/Blog/BlogCard";


const BlogList = (props) => {
	const router = useRouter()
	const ListBlog = props.data.data;
	console.log(props.data);
	console.log(ListBlog);

	return (
		<>
			<BlogCard />
			{ListBlog.map(({ id, attributes }) => (
				<Link href={'/blog/' + id} key={id}>
					<BlogCard name={attributes.name} />
				</Link>
			))}
		</>
	)
}
export default BlogList;

// const PostBlog = (props) => {
// 	const router = useRouter()
// 	const ListBlog = props.data.data;
// 	console.log(props.data);
// 	console.log(ListBlog);

// 	return (
// 		<>
// 			<BlogPost />
// 			{PostListBlog.map(({ id, attributes }) => (
// 				<Link href={'/blog/' + id} key={id}>
// 					<BlogPost name={attributes.name} />
// 				</Link>
// 			))}
// 		</>
// 	)
// }
// export default PostBlog;

export async function getStaticProps(context) {
	const res = await fetch(`http://localhost:1337/api/blogs/`)
	const data = await res.json()

	return {
		props: { data }, // will be passed to the page component as props
	}
}