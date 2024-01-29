import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Utensil = () => {

    const [setProduct] = useState([]);

    const { category } = useParams();

    const fetchShowpieceproduct = async () => {

        const res = await fetch("http://localhost:5000/product/getbypcategory/utensil");
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        if (category) {
            setProduct(data.filter((x) => x.category === category));
        } else {
            setProduct(data);
        }
    }

    useEffect(() => { 
        fetchShowpieceproduct();
    }, []);

    return (
        <>

            <div>

                {fetchShowpieceproduct()};
            </div>


        </>
    )
}

export default Utensil