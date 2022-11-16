import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "./theme-selectors";
import {setTheme, Theme} from "./theme-slice";

export const useTheme = (): [Theme, () => void] => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const onToggleTheme = () => {
        dispatch(setTheme(theme === "light" ? "dark" : "light"));
    };

    return [theme, onToggleTheme];
}

