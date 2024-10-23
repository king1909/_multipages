import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Carts.css'

function Carts({carts, setCarts}) {
    return ( 
        <div className="carts-container">
             <div className='carts-itemps-container'>
                {carts.map((cart) => {

                    /* const [imgSrc, setImgSrc] = useState(cart.thumbnailUrl); */

                    return (
                        <Card key={cart.id} style={{ width: '18rem' }}>
                            <Card.Img 
                            variant="top" 
                            src={cart.thumbnailUrl} 
                            loading="lazy" 
                            />

                            <Card.Body>

                                <Card.Title>
                                    {cart.title}
                                </Card.Title>

                                <Card.Text>
                                    <b>${cart.price.toFixed(2)}</b>
                                </Card.Text>

                               

                                <Button 
                                variant="outline-danger" 
                                onClick={ (() => setCarts(carts.filter((c) => c.id !== cart.id)))}>
                                    Remove from Carts
                                </Button>

                            </Card.Body>
                        </Card>
                    );
                })}
            </div>

            <h4>
                Items: 
                    <button className="btn btn-secondary" disabled>
                        {carts.length} items
                    </button> 
                    &nbsp;- 
                Total Price: 
                    <button className="btn btn-primary" disabled>
                        ${carts.reduce((prev, cart) => prev + cart.price, 0).toFixed(2)}
                    </button>
            </h4>

                <button className='btn btn-success' > 
                    <i className='bi bi-cash-coin'></i>
                    &nbsp;Checkout
                    </button>

        </div>
     );
}

export default Carts;