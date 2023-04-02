import ClinicCard from "@/components/Clinic/ClinicCard";
import GallerySlider from "@/components/Clinic/GallerySlider";
import Doctor from "@/components/Clinic/Doctor";
import Accordion from "@/components/Accordion/Accordion";



const Clinics = (props) => {

	const {name, map2, adress, type, response, services, text, description, worktime, webSite, raiting, aboutClinic } = props.data.attributes;
	const tags = props.data.attributes.tags.data;
	const logo = props.data.attributes.logo.data[0].attributes.url;
	const  gallery = props.data.attributes.gallery;
	const doctors = props.data.attributes.doctors.data;
	const doctors2 = props.data.attributes.doctors.data[1];
	const doctors3 = props.data.attributes.doctors.data[0].attributes;
	console.log("doctors", doctors)
	console.log("doctors2", doctors2)
	console.log("doctors3", doctors3)
	const accordions = props.data.attributes;

	return (
		<div className="container">
			<ClinicCard
				map={map2}
				logo={logo}
				type={type}
				name={name}
				adress={adress}
				description={description}
				worktime={worktime}
				services={services}
				text={text}
				raiting={raiting}
				tags={tags}
				webSite={webSite}
				gallery={gallery}
				aboutClinic={aboutClinic}
				response={response}
				doctors={doctors}
			/>

			{doctors.map(({id, attributes}) => (
				<div className='doctor' key={id}>
				<Doctor
				image={attributes.imageDoctor.data.attributes.url}
				name={attributes.nameDoctor}
				type={attributes.typeDoctor}
				category={attributes.category}
				price={attributes.price}
				/>
				</div>
			))}
{/*
			{accordions.map(({id, attributes}) => (
				<div className='accordion' key={id}>
				<Accordion
				title={attributes.title}
				/>
				</div>
			))} */}

			<GallerySlider
				gallery={gallery}
			/>
		</div>
	);
};
export default Clinics;

export async function getStaticProps(context) {
const res = await fetch(
    `${process.env.API_URL}/clinics?filters[slug][$eq]=${context.params.slug}&populate[0]=tags&populate[1]=logo.media&populate[2]=gallery.media&populate[3]=doctors&populate[4]=doctors.imageDoctor.media`
);

const response = await res.json();

return {
    props: { data: response.data[0] }, // will be passed to the page component as props
};
}

export async function getStaticPaths() {

const res = await fetch(`${process.env.API_URL}/clinics/`);
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

