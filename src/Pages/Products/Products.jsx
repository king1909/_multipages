/* import { useState } from 'react'; */

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Products.css'




function Products({ products, carts, setCarts }) {


    return ( 
        <div className="products-container">
            <div className='products-itemps-container'>
                {products.map((product) => {

                    /* const [imgSrc, setImgSrc] = useState(product.thumbnailUrl); */

                    return (
                        <Card key={product.id} style={{ width: '18rem' }}>
                            <Card.Img 
                            variant="top" 
                            src={product.thumbnailUrl} 
                            loading="lazy" 
                            /* src={imgSrc} 
                                onError={() => setImgSrc('/path/to/placeholder-image.jpg')} // เปลี่ยนไปใช้รูป placeholder เมื่อไม่สามารถโหลด
                                loading="lazy"  */
                            />

                            <Card.Body>

                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    <b>${product.price.toFixed(2)}</b>
                                </Card.Text>
                                
                                {/* แจ้งว่าAddcartแล้ว  */}
                                {carts.find( (cart) =>  cart.id === product.id ) ? (
                                    <span className='badge bg-danger'>Added</span>
                                ) : (

                                    <Button variant="outline-primary" onClick={ () => {
                                    setCarts([...carts,product])
                                    }}>
                                    Add to Cart
                                    </Button>                    
                                )}


                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;