import { useAppDispatch } from "store";
import { resetControls } from "./controls-slice";

export const useReset = () => {
    const dispatch = useAppDispatch();
    const onResetControls = () => {
        dispatch(resetControls());
    }

    return onResetControls;
}
