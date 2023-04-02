import Image from "next/image";
import remarkGfm from 'remark-gfm';
import Link from "next/link";
import ReactMarkdown from 'react-markdown';


const BlogCard = (props) => {
	console.log(props.stars)
	return (

	<div className="color">

	<div className="blog">
		<div className="container blog__container">
			<div className="blog__blog">
				{/* <img src={props.image} alt={props.title}/> */}
				
				<div className="blog__text">
						<ReactMarkdown
					children={props.blogText}
					remarkPlugins={[remarkGfm]}
				/>
				</div>
			</div>
		</div>
	</div>

</div>
)}
export default BlogCard;
