import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.frankfurter.dev/v2/rates?base=${currency.toUpperCase()}`)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;