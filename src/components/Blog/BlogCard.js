const BlogCard = (props) => (
    <div>
        <img src={props.image} alt={props.name}/>
        <div>{props.author}</div>

        <h2>{props.name}</h2>
        <div>{props.PostText}</div>

        {props.tags.map(({id, attributes}) => (
                <div className='tag' key={id}>{attributes.name}</div>
        ))}
    </div>
)
export default BlogCard;