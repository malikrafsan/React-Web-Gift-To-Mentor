import { Link } from "react-router-dom";

const Navbar = () => {
  const handleDisclaimer = () => {
    alert("Maaf kak kalo website saya rada kurang rapi wkwk, soalnya kejar tayang dan baru di-develop tanggal 3 malem abis ngechat kak Alam wkwk sama baru belajar react gara gara challenge wawancaranya kakak tempo hari");
  }

  return (
    <div className="navbar animate-top">
      <nav>
        <Link to="/" className="navbar-button home all-btn">Home</Link>
        <button onClick={handleDisclaimer} className="navbar-button disclaimer all-btn">Disclaimer</button>
      </nav>
    </div>
  );
}
 
export default Navbar;