const ClinicCard = (props) => {
	console.log(props.stars)
	return (

	<div className="clinic">
		<div className="container clinic__container">
			<div className="clinic__main-card">
				<img src={props.image} alt={props.title}/>

				<div className="clinic__clinic-title">
					{props.name}<br/>
					{props.type}
				</div>
				<div className="clinic__clinic-description">
					{props.description}
				</div>
			</div>
				{/* <div className="clinic__clinic-tags">
				{props.tags.map(({id, attributes}) => (
                <div className='tag' key={id}>{attributes.name}</div>
        ))}
				</div> */}
				{/* <div className="clinic-list__tags">
					{props.tags}
				</div> */}


				{/* <div className="raiting">
					{props.raiting}
				</div>
				<div className="stars">
					{props.stars}
				</div>
				<div className="rewiew">
					{props.rewiew}
				</div> */}


			<div className="clinic__clinic-section">
				<div className="clinic-section__name-adress">
					{props.nameadress}
				</div>
				<div className="clinic-section__tags">
					{props.tags}
				</div>
				<div className="clinic-section__services">
					{props.services}
				</div>
				<div className="clinic-section__client-field">
					<div className="clinic-section__work-time">
						{props.worktime}
					</div>
					<div className="clinic-section__button">
						<button>Записатися</button>
					</div>
					<div className="clinic-section__text">
						{props.richText}
					</div>
				</div>
			</div>

		</div>
	</div>

)}
export default ClinicCard;







// const BlogList = (props) => (
// 	<div className="container">
// 		<article className="blog-list-item">
// 			<img src={props.image} alt={props.title}/>
// 			<div className="blog-list">
// 				<div className="blog-head">
// 					<div className="blog-title-name-section">
// 						<div className="blog-list__title">
// 							{props.title}
// 							{/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
// 							<path d="M1 11L11 1M11 1H1M11 1V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
// 							</svg> */}
// 						</div>
// 						<div className="blog__list-author">
// 							{props.name}
// 							{props.date}
// 						</div>
// 					</div>
// 					<div className="blog-rewiew-section">
// 						<div className="raiting">
// 							{props.raiting}
// 						</div>
// 						<div className="stars">
// 						<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
// 							<path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z" fill="#FFC531" stroke="#FFC531" stroke-width="1.2"/>
// 						</svg>
// 						<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
// 							<path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z" fill="#FFC531" stroke="#FFC531" stroke-width="1.2"/>
// 						</svg>
// 						<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
// 							<path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z" fill="#FFC531" stroke="#FFC531" stroke-width="1.2"/>
// 						</svg>
// 						<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
// 							<path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z" fill="#FFC531" stroke="#FFC531" stroke-width="1.2"/>
// 						</svg>
// 						<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
// 							<path d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z" fill="#FFC531" stroke="#FFC531" stroke-width="1.2"/>
// 						</svg>
// 						</div>
// 						<div className="rewiew">
// 						{props.rewiew}
// 						</div>
// 					</div>
// 				</div>
// 				<div className="blog-list__description" style={{ maxWidth: '100%' }}>
// 					{props.description}
// 				</div>
// 				{/* <div className="blog-list__tags">
// 					{props.tags.map(({id, attributes}) => (
// 					<div className='tag' key={id}>{attributes.name}</div>
// 			))}
// 				</div> */}
// 				{/* <div className="blog-list__tags">
// 					{props.tags}
// 				</div> */}
// 			</div>
// 		</article>
// </div>
// )
// export default BlogList;



