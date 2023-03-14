import {useRouter} from "next/router";
import Link from "next/link";

import ClinicList from "@/components/Clinic/ClinicList";

const ClinicPage = (props) => {
    const router = useRouter()
    console.log(props.data);
console.log(props.data.attributes)

    const serviceData = props.data.data;

    console.log(serviceData);
    return <div className="container">

        {serviceData.map(({id, attributes }) => (
            <Link key={id} href={'/clinic/' + attributes.slug}>
            <ClinicList
                            type={attributes.type}
                            name={attributes.name}
                            nameadress={attributes.nameadress}
                            description={attributes.description}
                            raiting={attributes.raiting}
                            />
            </Link>
        ))}

    </div>

}
export default ClinicPage;


export async function getStaticProps(context) {
    const res = await fetch(`${process.env.API_URL}/clinics?populate=*`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, // will be passed to the page component as props
    }
}