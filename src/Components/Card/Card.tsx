import scales from '../../assets/icons/scales.svg';
import basket from '../../assets/icons/basket.svg';

const Card = ({
    img,
    items,
    name,
    price,
    link,
}: {
    img: string;
    items: number;
    name: string;
    price: number;
    link: string;
}) => {
    return (
        <div className="card">
            <img src={scales} alt="scales" className="card__scales" />
            <a href={link}>
                <img src={img} alt={name} className="card__main-img" />
            </a>
            <div className="card_bottom">
                <div className="card_bottom_top">
                    <a href="#">
                        <h3 className="card__name">{name}</h3>
                    </a>
                    <h4 className="card__availability">{items ? 'в наявності' : 'немає в наявності'}</h4>
                </div>
                <div className="card_bottom_bottom">
                    <div className="card_right">
                        <h3 className="card__price">{price} грн</h3>
                        <h4 className="card__availabil-items">{items} шт.</h4>
                    </div>
                    <button className="button_circle button_circle_white button_circle_card">
                        <img src={basket} alt="basket" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
