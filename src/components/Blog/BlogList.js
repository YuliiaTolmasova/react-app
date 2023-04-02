const BlogList = (props) => (
	<div className="container">
		<div className="blog-list-item">
			<img src={props.image} alt={props.title}/>
			<div className="blog-list">
				<div className="blog-head">
					<div className="blog-title-name-section">
						<div className="blog-list__news-title">
							{props.news}
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
						<div className="blog__list-author">
							{props.name}<br/>
							{props.date}
						</div>
					</div>
						</div>
				<div className="blog-list__description" style={{ maxWidth: '100%' }}>
					{props.description}
				</div>
				{/* <div className="blog-list__tags">
					{props.tags.map(({id, attributes}) => (
					<div className='tag' key={id}>{attributes.name}</div>
			))}
				</div> */}
			</div>
		</div>
</div>
)
export default BlogList;











// import Image from "next/image";

// const BlogCard = (props) => (
// 	<div className="color">

// 	<div className="blog">
// 		<div className="container blog__container">
// 			<div className="blog__blog">
// 				<div className="blog__card-author">
// 					{props.name}
// 					{props.date}
// 				</div>
// 				<div className="blog__blog-title">
// 					{props.title}
// 				</div>
// 				<div className="blog__blog-description">
// 					{props.description}
// 				</div>
// 				{/* <div className="blog__blog-tags">
// 				{props.tags.map(({id, attributes}) => (
//                 <div className='tag' key={id}>{attributes.name}</div>
//         ))}
// 				</div> */}
// 				{/* <div className="blog-list__tags">
// 					{props.tags}
// 				</div> */}
// 				<img src={props.image} alt={props.title} />
// 				<div className="raiting">
// 					{props.raiting}
// 				</div>
// 				<div className="rewiew">
// 					{props.rewiew}
// 				</div>
// 			</div>
// 		</div>
// 	</div>

// </div>
// )
// export default BlogCard;



