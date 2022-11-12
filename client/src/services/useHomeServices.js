import { useParams } from "react-router-dom";
import axios from 'axios';
import { useGlobalContext } from "../context/useGlobal";
import { useHomeContext } from "../context/useHome";
import { calcMaxPage } from "../helpers/calcMaxPage";

export const useHomeServices = () => {
    const { global, setGlobal } = useGlobalContext();
    const { home, setHome } = useHomeContext();
    const param = useParams();
    const idParam = parseInt(param.id) || 1;


    const goPageHome = async (num, limit = 4) => {

        let payload = { carousel: { ...home.carousel, list: [], maxPage: 2, actualPage: 1 } };
        const category = global.filtersCarousel.category;

        const configPetition = (number) => {
            let petition = `http://localhost:3001/mugs?_page=${number}&_limit=${limit}`;

            if (category && category !== "all mugs") petition += `&category2=${category}`;

            return petition;
        }

        await axios(configPetition(num))
            .then((resp) => {
                payload.carousel.list = resp.data;
                payload.carousel.actualPage = num;
                payload.carousel.maxPage = calcMaxPage(parseInt(resp.headers["x-total-count"]),limit);
            })
            .catch((e) => console.log(e));

        setHome(payload);
    };



    const getItemById = async () => {
        let item = { itemById: {} };
        await axios(`http://localhost:3001/${nameApi}/${idParam}`)
            .then((response) => {
                item.itemById = response.data;
            })
            .catch((e) => console.log(e));

        setDetails({ ...item, openEdit: false });
    };

    const deleteItemById = async () => {
        await axios({
            method: 'delete',
            url: `http://localhost:3001/${nameApi}/${idParam}`,
        }).catch((e) => console.log(e));
        redirectPage(1);
    };

    const editItemById = async (itemEdit) => {
        await axios({
            method: 'patch',
            url: `http://localhost:3001/${nameApi}/${idParam}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(itemEdit)
        }).catch((e) => console.log(e));
        setTimeout(() => {
            getItemById(idParam);
        }, 500);
    };

    const addItem = async (itemEdit) => {
        await axios({
            method: 'post',
            url: `http://localhost:3001/${nameApi}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(itemEdit)
        }).catch((e) => console.log(e));
        setTimeout(() => {
            redirectPage(1);
            goPage(1)
        }, 200);

    };

    const selecteApi = (api) => {
        setChange({ nameApi: api });
        setTimeout(() => {
            redirectPage(1);
            goPage(1)
        }, 200);
    }


    const resetDB = async () => {
        const pass = prompt('Password Admin :');
        await axios(`http://localhost:3001/reset?pass=${pass}`)
            .then(() => {
                alert("Reseting database, OK to continue...")
                setTimeout(() => {
                    redirectPage(1);
                    window.location.reload();
                }, 1000);
            })
            .catch((e) => alert("Error to input password(?)..."));
    };


    return { goPageHome, idParam, global, home };
}