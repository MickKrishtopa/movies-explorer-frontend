import "./Alert.css";

import { useEffect } from "react";

export default function Alert({ alert, setAlert }) {
    const closeAlert = () => {
        setAlert("");
    };

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 4000);
        return () => {
            clearTimeout(timerId);
        };
    }, [alert]);

    return (
        <div id='toast-container'>
            <div className='toast'>{alert} </div>
        </div>
    );
}
