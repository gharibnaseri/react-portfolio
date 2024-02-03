import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        {/* {sidebar} */}
        <div className="wrapper">
            <span>Mojtaba Gharib Naseri</span>
            <div className="social">
                <a href=""><img src="facebook.png" alt="" /></a>
                <a href=""><img src="instagram.png" alt="" /></a>
                <a href=""><img src="youtube.png" alt="" /></a>
                <a href=""><img src="dribbble.png" alt="" /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
