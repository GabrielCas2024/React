import style from '../estilos/Card.module.css';
export const Card = () => {
    return (
        <div className={style.card}>
            <div>
                <h2 className={style.titulo}>Mi primera Card</h2>
            </div>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus aliquid perferendis, qui, quae, ad unde commodi ea nemo eligendi quaerat molestias sit dolor atque minima neque odit ex eaque. Corrupti.</p>
            </div>
        </div>
    )
}