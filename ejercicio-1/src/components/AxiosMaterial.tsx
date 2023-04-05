import { useState } from "react";
import { getChiste } from "../services/axiosService";
import { Button } from "@mui/material";

interface Chuck { icon_url: string; value: string; }
interface AxiosResponse { data: Chuck; status: number; }

const AxiosMaterial = () => {
    const [chiste, setChiste] = useState<Chuck | null>(null);
    const [votosPositivos, setVotosPositivos] = useState(0);
    const [votosNegativos, setVotosNegativos] = useState(0);
    const [disablePlus, setDisablePlus] = useState(false);
    const [disableMin, setDisableMin] = useState(false);

    const obtainChiste = () => {
        getChiste().then((response: AxiosResponse) => {
                if (response.status === 200) {
                    setChiste(response.data);
                    setDisablePlus(false);
                    setDisableMin(false);
                }
            })
            .catch((error: Error) => alert(`Something went wrong: ${error}`));
    };

    const handlePositiveClick = () => {
        if (disablePlus) return;
        setVotosPositivos(votosPositivos + 1);
        setDisablePlus(true);
        if (disableMin) {
            setVotosNegativos(votosNegativos - 1);
            setDisableMin(false);
        }
    };

    const handleNegativeClick = () => {
        if (disableMin) return;
        setVotosNegativos(votosNegativos + 1);
        setDisableMin(true);
        if (disablePlus) {
            setVotosPositivos(votosPositivos - 1);
            setDisablePlus(false);
        }
    };

    return (
        <div>
            <h1>Chuck Norris</h1>
            {chiste != null ? (
                <div>
                    <img alt="avatar" src={chiste.icon_url} />
                    <h2>{chiste.value}</h2>
                    <Button onClick={handlePositiveClick} disabled={disablePlus}>Me gusta</Button>
                    <Button onClick={handleNegativeClick} disabled={disableMin}>No me gusta</Button>
                </div>
            ) : (
                <div><p>Generando un nuevo chiste</p></div>
            )}
            <Button onClick={obtainChiste}>Chiste Random</Button>
            <p>Votos Positivos: {votosPositivos}</p>
            <p>Votos Negativos: {votosNegativos}</p>
        </div>
    );
};

export default AxiosMaterial;