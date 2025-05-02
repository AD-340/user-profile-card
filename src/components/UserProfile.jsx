function UserProfile(props) {
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <img src={props.photo} alt="User Photo" className="photo" />
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <a href={`mailto:${props.email}`}>Send Email</a>
    </div>
  );
}

export default UserProfile;
