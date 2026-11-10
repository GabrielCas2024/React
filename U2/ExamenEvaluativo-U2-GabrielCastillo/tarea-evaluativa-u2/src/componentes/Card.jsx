export const Card = ({ nombre, genero, imagen }) => {
    return (
        <div className="card">
            <img src={imagen} alt={nombre} />
            <h2>{nombre}</h2>
            <p>Género: {genero}</p>
        </div>
    );
};