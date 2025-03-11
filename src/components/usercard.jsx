// write the component code here
const Usercard = () => {
    const profilePhoto = "https://c.wallhere.com/photos/d2/c1/Modi_narendra_modi_India_Prime_Minister-1588429.jpg!d";
    const name = "Narendra MOdi ";
    const email = "narendramodi@india.com";
    const phone = "+91 234 567 890";
    const address = "123 Main St, Anytown, Delhi";
  
    // Inline styles (optional)
    const cardStyle = {
      width: "300px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      padding: "16px",
      textAlign: "center",
      margin: "16px auto",
    };
  
    const imageStyle = {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
    };
  
    return (
      <div style={cardStyle}>
        <img src={profilePhoto} alt="Profile" style={imageStyle} />
        <h2>{name}</h2>
        <p>
          <strong>Email: </strong>
          {email}
        </p>
        <p>
          <strong>Phone: </strong>
          {phone}
        </p>
        <p>
          <strong>Address: </strong>
          {address}
        </p>
      </div>
    );
  };
  
  export default Usercard;