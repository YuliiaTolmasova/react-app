import Link from "next/link";
import { infoPageData } from "./infoPageData";

const InfoPage = () => {
    return (
        <section>
            {infoPageData.map(blog => {
                    const {img, author, title, description, tags, id} = blog;
                    return (
                    <div className="info-page" key={id}>
                        <div className="container info-page__container">
                            <div className="info-page__card">
                                <div className="info-page__card-author">
                                    {author}
                                </div>
                                <div className="info-page__card-title">
                                    {title}
                                </div>
                                <div className="info-page__card-description">
                                    {description}
                                </div>
                                <div className="info-page__card-tags">
                                    {tags.map(item => {
                                        return <span className={`tag ${item.toLowerCase()}`}>{item}</span>
                                    })}
                                </div>
                                <img src={img} alt={title}/>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </section>
    )
    }
export default InfoPage;

