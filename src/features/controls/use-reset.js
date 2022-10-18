import { useDispatch } from "react-redux";
import { resetControls } from "./controls-slice";

export const useReset = () => {
    const dispatch = useDispatch();
    const onResetControls = () => {
        dispatch(resetControls());
    }

    return onResetControls;
}
