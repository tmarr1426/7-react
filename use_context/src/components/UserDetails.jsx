import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

const UserDetails = () => {
  const [userName] = useContext(UserContext)

  return (
    <div>
      <h3>My Username is:</h3>
      <p>{userName}</p>
    </div>
  )
}

export default UserDetails;