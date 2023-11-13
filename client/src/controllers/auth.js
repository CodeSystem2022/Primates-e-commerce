import { AUTH } from "../constants/constants";
import * as api from "../api";

export const login =
    (formData, navigate, setLoginError) => async (dispatch) => {
        try {
            const { data } = await api.logIn(formData);

            dispatch({ type: AUTH, payload: data });
            navigate("/");
        } catch (error) {
            setLoginError(true);
            console.log(error);
            return false;
        }
    };
export const reg = (formData, navigate) => async (dispatch) => {
    try {
        console.log(formData);

        const { data } = await api.register(formData);

        console.log(data);

        await dispatch({ type: AUTH, payload: data });

        navigate("/");
    } catch (error) {
        console.log(error);
    }
};
