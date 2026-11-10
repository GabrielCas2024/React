import styled from 'styled-components';
export const Boton = styled.button`
    background: blue;
    color: white;
    padding:10px;`;

const BotonGrande = styled.button`
    font-size: 48px;
    background: blue;
    color: white;
    padding:10px;`;

export const BotonStyleGrande = () => {
    return <BotonGrande className={`BotonGrande`}>Mi Boton</BotonGrande>
}