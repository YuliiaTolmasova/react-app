import {useRouter} from "next/router";
import Link from "next/link";
import BlogList from "@/components/Blog/BLogList";

const BlogPage = (props) => {
    const router = useRouter()
    console.log(props.data);
    console.log(props.data.attributes)
    const serviceData = props.data.data;
    console.log(serviceData);
    console.log('image',serviceData[0].attributes.image);

    return <div className="container">
        {serviceData.map(({id, attributes }) => (
            <Link key={id} href={'/blog/' + attributes.slug}>
                <BlogList
                    news={attributes.newsTitle}
                    image={attributes.image.data.attributes.url}
                    date={attributes.date}
                    description={attributes.description}
                />
            </Link>
        ))}
    </div>
}
export default BlogPage;

export async function getStaticProps(context) {
    const res = await fetch(`${process.env.API_URL}/blogs?populate[0]=tags&populate[1]=star&populate[2]=image.media`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, // will be passed to the page component as props
    }
}