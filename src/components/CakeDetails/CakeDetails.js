import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import './CakeDetails.css';




const CakeDetails = () => {
    const { id } = useParams();
    const { data: cakes, isPending } = useFetch('http://localhost:8000/cakes/' + id);



    return (
        <div className="detailsWrapper">
            <div className="cake-details">
                {isPending && <div>Loading...</div>}
                {cakes && (
                    <article className="detailsArticle">
                        <div className="imgBox">
                            <img className="detailsImg" src={cakes.image} alt="cake" />
                        </div>
                        <div className="details">
                            <h2 className="detailsTitle">{cakes.title}</h2>
                            <p className="detailsDesc">{cakes.detailDescription}</p>
                        </div>
                    </article>
                )}
            </div>
        </div>
    );

}

export default CakeDetails;