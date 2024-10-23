import { Link } from "react-router-dom";
import "./Navber.css";

function Navber({products, carts, tab, setTab }) {
  return (
    <div className="navber-container">

    {/* สร้างปุ่ม HOME และlinkหน้าเพื่อกด */}
    <Link to = {'/home'}>
      <button
        className={
          "btn " + (tab === "home" ? "btn-primary" : "btn-outline-primary")
        }
        onClick={() => {setTab('home')}}
      >
        Home
      </button>
      </Link>

      {/* เปิดปิด ฟังก์ฟันตาทRole
        {role !== 'user' &&(

        )} */}
    {/* สร้างปุ่ม calculator */}
      <Link to = {'/calculator'}>
      <button className={
          "btn " + (tab === "calculator" ? "btn-primary" : "btn-outline-primary")
        }
        onClick={() => {setTab('calculator')}}
      >Calculator
      </button>
      </Link>

    {/* สร้างปุ่ม animation */}
    <Link to = {'/animation'}>
      <button className={
          "btn " + (tab === "animation" ? "btn-primary" : "btn-outline-primary")
        }
        onClick={() => {setTab('animation')}}
      >Animation
      </button>
      </Link>

    {/* สร้างปุ่ม components */}
      <Link to = {'/components'}>
      <button className={
          "btn " + (tab === "components" ? "btn-primary" : "btn-outline-primary")
        }
        onClick={() => {setTab('components')}}
      >Components
      </button>
      </Link>

    {/* สร้างปุ่ม todo */}
      <Link to = {'/todo'}>
      <button className={
          "btn " + (tab === "todo" ? "btn-primary" : "btn-outline-primary")
        }
        onClick={() => {setTab('todo')}}
      >Todo
      </button>
      </Link>

      {/* สร้างปุ่ม products */}
      <Link to = {'/products'}>
      <button className={
          "btn " + (tab === "products" ? "btn-primary" : "btn-outline-primary")
        }
        onClick={() => {setTab('products')}}
      >Products ({products.length})
      </button>
      </Link>

      {/* สร้างปุ่ม Carts */}
      <Link to={'/carts'}>
        <button  className={ 
          "position-relative btn " + (tab === "carts" ? "btn-primary" : "btn-outline-primary")
        }
          onClick={() => { setTab('carts') }}
        >
          <i className="bi bi-cart3"></i> {/* เพิ่มไอคอนที่นี่ */}
          Carts 
          {carts.length > 0 && ( // แสดง badge เฉพาะเมื่อมีรายการในรถเข็น
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length} {/* แสดงจำนวนที่แท้จริง */}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

    


    </div>
  );
}

export default Navber;
