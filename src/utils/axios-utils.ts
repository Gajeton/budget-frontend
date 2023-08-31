import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { AxiosContext } from "../components/AxiosInstanceProvider";

export const useAxios = (url: string, method: string, payload: any) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const contextInstance = useContext(AxiosContext);
    const instance = useMemo(() => {
        return contextInstance || axios;
    }, [contextInstance]);

    useEffect(() => {
        (async () => {
            try {
                const response = await instance.request({
                    data: payload,
                    method,
                    url,
                });

                setData(response.data);
            } catch (error : any) {
                setError(error.message);
            } finally {
                setLoaded(true);
            }
        })();
    }, [data]);

    return { data, error, loaded };
};
