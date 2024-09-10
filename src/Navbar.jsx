import './index.css';

const Navbar = () => {
  return (
    <>
      <div className="nav">
        {/* <p className='logo'>Cake Kart</p> */}
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Orders</li>
        <li>Contact</li>
        <li>
          <button type="button">Log Out</button>
        </li>
      </div>
    </>
  );
};

export default Navbar;
