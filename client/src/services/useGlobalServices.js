import { useParams } from "react-router-dom";
import axios from 'axios';
import { useHomeContext } from "../context/useHome";
import { useLoginContext } from "../context/useLogin";
import { useGlobalContext } from "../context/useGlobal";

export const useGlobalServices = () => {
    const { global, setGlobal } = useGlobalContext();
    const { home, setHome } = useHomeContext();
    const { login, setLogin } = useLoginContext();
    const param = useParams();
    const id = parseInt(param.id) || 1;

    const getAllMugsLimited = async () => {
        await axios(`http://localhost:3001/mugs?type=Limited`)
            .then(resp =>
                setGlobal({ gameAdv: { ...global.gameAdv, listGifs: resp.data } }))
            .catch(err => {
                alert("Error in connection, try again later.");
                location.reload();
            });
    }

    const getAllCategories = async () => {
        await axios("http://localhost:3001/categories")
            .then((resp) => {
                setGlobal({ listCategories: resp.data });
            })
            .catch((e) => console.log(e));
    };

    const switchModalProfile = (string) => {
        const { modalProfile } = global;
        if (!modalProfile.active) {
            setGlobal({
                modalProfile: { ...modalProfile, mode: string, active: true }
            })
        }
        else if (modalProfile.mode === string) setGlobal({
            modalProfile: { ...modalProfile, active: !modalProfile.active },
        });
        else
            setGlobal({
                modalProfile: { ...modalProfile, mode: string }
            })
    }

    //* Manager Cart.

    // setGlobal({ cart: { listCart: resp.data[0] ,totalPrice: resp.data[0].price} });

    const getCart = async () => {
        const { user: { userId } } = login;
        let payload = { id: 0, cartList: [], listCart: [], totalPrice: 0 };
        await axios(`http://localhost:3001/cart?id_user=${userId}`)
            .then((resp) => {
                const data = resp.data[0];
                payload.totalPrice = data.price;
                payload.listItemId = data.items;
                payload.id = data.id;
            })
            .catch((e) => console.log("your cart is not available or has nothing"));

        const { listItemId } = payload;

        if (listItemId)
            for (let i = 0; i < listItemId.length; i++) {
                await axios(`http://localhost:3001/mugs?id=${listItemId[i].id}`)
                    .then((resp) => {
                        const data = resp.data[0];
                        payload.totalPrice = data.price;
                        payload.listCart.push({ ...data, amount: listItemId[i].amount })
                    })
                    .catch((e) => console.log(e));
            }
        setGlobal({ cart: { ...payload, totalPrice: calcTotalPrice(payload.listCart) } });

    }

    const editAmountItemInCart = async (idItem, amount) => {
        const { cart: { id = 1, listItemId, listCart } } = global;

        const updateItemId = listItemId.map(item => {
            if (item.id === idItem) return { ...item, amount };
            else return item;
        });

        const updatelistCart = listCart.map(item => {
            if (item.id === idItem) return { ...item, amount };
            else return item;
        });

        const data = JSON.stringify({ "items": updateItemId });
        const config = {
            method: 'patch',
            url: `http://localhost:3001/cart/${id}`,
            headers: { 'Content-Type': 'application/json' },
            data
        };

        axios(config)
            .then((response) => {
                setGlobal({ cart: { totalPrice: calcTotalPrice(updatelistCart), listCart: updatelistCart, listItemId: updateItemId } });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const deleteItemInCart = async (idItem) => {
        const { cart: { id = 1, listItemId, listCart } } = global;
        const updateItemId = listItemId.filter(item => (item.id !== idItem));
        const updateListCart = listCart.filter(item => (item.id !== idItem));

        const data = JSON.stringify({ "items": updateItemId });
        const config = {
            method: 'patch',
            url: `http://localhost:3001/cart/${id}`,
            headers: { 'Content-Type': 'application/json' },
            data
        };

        axios(config)
            .then((response) => {
                setGlobal({ cart: { totalPrice: calcTotalPrice(updateListCart), listCart: updateListCart, listItemId: updateItemId } });
            })
            .catch((error) => { console.log(error) });
    }

    const addItemInCart = async (idItem) => {
        const { cart: { id = 1, listItemId, listCart } } = global;
        let payload = { listItemId, listCart, totalPrice: 0 };
        const itemExists = listItemId.filter(item => (item.id === idItem));
        if (itemExists && itemExists.length) return;
        else payload.listItemId.push({ id: idItem, amount: 1 });

        const data = JSON.stringify({ "items": payload.listItemId });
        const config = {
            method: 'patch',
            url: `http://localhost:3001/cart/${id}`,
            headers: { 'Content-Type': 'application/json' },
            data
        };

        await axios(config)
            .then(async (response) => {

                await axios(`http://localhost:3001/mugs?id=${idItem}`)
                    .then((resp) => {
                        const data = resp.data[0];
                        payload.listCart.push({ ...data, amount: 1 })
                    })
                    .catch((e) => console.log(e));

                setGlobal({ cart: { ...payload, totalPrice: calcTotalPrice(payload.listCart) } });
            })
            .catch((error) => {
                console.log(error);
            });

    }



    const calcTotalPrice = (listCart) => {
        let priceTotal = 0;
        for (let i = 0; i < listCart.length; i++)
            priceTotal += parseFloat(listCart[i].price) * listCart[i].amount;
        return priceTotal.toFixed(2);
    }

    //$ Manager Cart.

    //* Manager Favorites.

    const getFavorites = async () => {
        const { user: { userId } } = login;
        let payload = { id: 0, listFavorites: [], listItemId: [] };
        await axios(`http://localhost:3001/favorites?id_user=${userId}`)
            .then((resp) => {
                const data = resp.data[0];
                payload.id = data.id;
                payload.listItemId = data.items;
            })
            .catch((e) => console.log("your cart is not available or has nothing"));

        const { listItemId } = payload;

        if (listItemId)
            for (let i = 0; i < listItemId.length; i++) {
                await axios(`http://localhost:3001/mugs?id=${listItemId[i].id}`)
                    .then((resp) => {
                        const data = resp.data[0];
                        payload.totalPrice = data.price;
                        payload.listFavorites.push(data);
                    })
                    .catch((e) => console.log(e));
            }
        setGlobal({ favorites: { ...payload } });

    }

    const deleteItemInFavorites = async (idItem) => {
        const { favorites: { id = 1, listItemId, listFavorites } } = global;
        const updateItemId = listItemId.filter(item => (item.id !== idItem));
        const updateListFav = listFavorites.filter(item => (item.id !== idItem));

        const data = JSON.stringify({ "items": updateItemId });
        const config = {
            method: 'patch',
            url: `http://localhost:3001/favorites/${id}`,
            headers: { 'Content-Type': 'application/json' },
            data
        };

        axios(config)
            .then((response) => {
                setGlobal({ favorites: { listFavorites: updateListFav, listItemId: updateItemId } });
            })
            .catch((error) => { console.log(error) });
    }

    const itemExistsInFavorites = (idItem) => {
        const { favorites: { listItemId, listFavorites } } = global;
        const foundItem = listItemId.filter(item => (item.id === idItem));
        if (foundItem.length) return true; else return false;
    }

    const addItemInFavorites = async (idItem) => {
        const { favorites: { id = 1, listItemId, listFavorites } } = global;
        let payload = { listItemId, listFavorites };
        const itemExists = listItemId.filter(item => (item.id === idItem));
        if (itemExists && itemExists.length) return;
        else payload.listItemId.push({ id: idItem });

        const data = JSON.stringify({ "items": payload.listItemId });
        const config = {
            method: 'patch',
            url: `http://localhost:3001/favorites/${id}`,
            headers: { 'Content-Type': 'application/json' },
            data
        };

        await axios(config)
            .then(async (response) => {

                await axios(`http://localhost:3001/mugs?id=${idItem}`)
                    .then((resp) => {
                        const data = resp.data[0];
                        payload.listFavorites.push(data)
                    })
                    .catch((e) => console.log(e));

                setGlobal({ favorites: { ...payload } });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    //$ Manager Favorites.

    //* Manager Game.
    const searchItemLimited = async (name) => {
        let id = 0;
        await axios(`http://localhost:3001/mugs?id_limited=${name}`)
            .then((resp) => {
                id = resp.data[0].id;
            })
            .catch((e) => console.log("Mugs not Found."));
        return id;
    }

    //$ Manager Game.

    return { getAllMugsLimited, getAllCategories, switchModalProfile, getCart, editAmountItemInCart, deleteItemInCart, addItemInCart, searchItemLimited, getFavorites, deleteItemInFavorites, addItemInFavorites,itemExistsInFavorites, global, home };
}