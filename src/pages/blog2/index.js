import {useRouter} from "next/router";
import Link from "next/link";

import BlogCard from "@/components/Blog/BlogCard";

const BlogPage = (props) => {
    const router = useRouter()
    console.log(props.data);

    const serviceData = props.data.data;

    console.log(serviceData);
    return <div className="container">

        {serviceData.map(({id, attributes }) => (
            <Link key={id} href={'/blog2/' + attributes.slug}>
                
                <BlogCard tags={attributes.tags.data} name={attributes.Name} image={attributes.image.data.attributes.formats.thumbnail.url} author={attributes.author} PostText={attributes.PostText}/>{attributes.Name}</Link>
        ))}

    </div>

}
export default BlogPage;


export async function getStaticProps(context) {
    const res = await fetch(`${process.env.API_URL}/blogs?populate=*`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, // will be passed to the page component as props
    }
}
