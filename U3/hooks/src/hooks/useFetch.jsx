import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [datos, setDatos] = useState(null);
    const [carga, setCarga] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setCarga(true);
        fetch(url).then((respuesta => respuesta.json()))
            .then(setDatos)
            .catch(setError)
            .finally(() => {
                setCarga(false);
            })
    }, [url]);

    return { datos, carga, error };

}