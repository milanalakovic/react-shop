import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './CakeDetails.css';
import { useState } from "react";



const CakeDetails = () => {
    const { id } = useParams();
    const { data: cake, isPending } = useFetch('http://localhost:8000/cakes/' + id);



    return (
        <div className="cake-details">
            {isPending && <div>Loading...</div>}
            {cake && (
                <article className="detailsArticle">

                    <div className="imgBox">
                        <img className="detailsImg" src={cake.image} alt="cake" />
                    </div>
                    <div className="details">
                        <h2 className="detailsTitle">{cake.title}</h2>
                        <p className="detailsDesc">{cake.detailDescription}</p>
                    </div>
                </article>
            )}
        </div>
    );

}

export default CakeDetails;