import { Seller } from "../models/User";
// import { Filters } from "./Filters";
import { UserCard } from "./userCard";

interface Props {
  users: Seller[]
}

export const UserList = ({ users }: Props) => {
  return (
    <section>
      <h1 className='userCard-title' data-testid="cy-card-title">List of sellers</h1>
      {
        users.map((user, index) => {
          return (
            <UserCard user={user} index={index} key={index}/>
          )
        })
      }
    </section>
  );
}
