import Image from "next/image";

const BlogCard = (props) => (
	<div className="color">

	<div className="blog">
		<div className="container blog__container">
			<div className="blog__blog">
				<div className="blog__card-author">
					{props.name}
					{props.date}
				</div>
				<div className="blog__blog-title">
					{props.title}
				</div>
				<div className="blog__blog-description">
					{props.description}
				</div>
				{/* <div className="blog__blog-tags">
				{props.tags.map(({id, attributes}) => (
                <div className='tag' key={id}>{attributes.name}</div>
        ))}
				</div> */}
				<img src={props.image} alt={props.title} />
			</div>
		</div>
	</div>

</div>
)
export default BlogCard;