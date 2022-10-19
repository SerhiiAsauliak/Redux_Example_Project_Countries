import { useDispatch, useSelector } from "react-redux";
import {selectSerch, setSearch} from "./controls-slice";

export const useSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector(selectSerch);
    const handleSearch = (e) => {
        dispatch(setSearch(e.target.value))
    }

    return [search, handleSearch];
}