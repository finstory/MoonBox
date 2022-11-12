import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDetailsContext } from "../context/useDetalis";


export const useDetailsServices = () => {
    const { details, setDetails } = useDetailsContext();
    const param = useParams();
    const idParam = parseInt(param.id) || 1;

    const getItemById = () => {
        axios(`http://localhost:3001/mugs/${idParam}`)
            .then((resp) => {
                const item = resp.data;
                setDetails({item});
            })
            .catch((e) => console.log(e));
    }
    return { getItemById, idParam, details };
}