import { useParams } from "react-router-dom";
import axios from 'axios';
import { useGlobalContext } from "../context/useGlobal";
import { useHomeContext } from "../context/useHome";
import { calcMaxPage } from "../helpers/calcMaxPage";
import { useManagerText } from "../hooks/useManagerText";

export const useHomeServices = () => {
    const { firsUpperCase } = useManagerText();
    const { global, setGlobal } = useGlobalContext();
    const { home, setHome } = useHomeContext();
    const param = useParams();
    const idParam = parseInt(param.id) || 1;


    const goPageHome = async (num, limit = 4) => {

        const { filtersHome: { material, category, price, type, search } } = home;
        let payload = { carousel: { ...home.carousel, list: [], maxPage: 2, actualPage: 1 } };
        const categoryCarousel = global.filtersCarousel.category;

        const configPetition = (number) => {
            let petition = `http://localhost:3001/mugs?_page=${number}&_limit=${limit}`;

            if (categoryCarousel && categoryCarousel !== "all mugs") petition += `&category2=${categoryCarousel}`;

            if (category && category !== "show all") petition += `&category1=${category}`;

            if (type && type !== "show all") petition += `&type=${firsUpperCase(type)}`;

            if (search && search !== "") petition += `&name_like=${search}`;

            if (price && price !== "none")
                switch (price) {
                    case "low to higth":
                        petition += `&_order=asc&_sort=price`;
                        break;
                    default:
                        petition += `&_order=desc&_sort=price`;
                        break;
                }

            return petition;
        }

        await axios(configPetition(num))
            .then((resp) => {
                payload.carousel.list = resp.data;
                payload.carousel.actualPage = num;
                payload.carousel.maxPage = calcMaxPage(parseInt(resp.headers["x-total-count"]), limit);
            })
            .catch((e) => console.log(e));

        setHome(payload);
    };

    const resetFilters = () => {
        setHome({
            filtersHome: {
                material: "show all",
                category: "show all",
                price: "none",
                type: "show all",
                search: ""
            }
        });
    }

    const switchFullView = (cond) => {
        // const {activeFullView} = home;
        setHome({ activeFullView: cond });
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


    return { goPageHome, switchFullView, resetFilters, idParam, global, home };
}