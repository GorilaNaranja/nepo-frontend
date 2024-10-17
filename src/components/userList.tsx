import { Seller } from "../models/User";
import { UserCard } from "./userCard";

interface Props {
  users: Seller[]
}

export const UserList = ({ users }: Props) => {
  return (
    <section>
      {
        users.map((user, index) => {
          return (
            <UserCard user={user} key={index}/>
          )
        })
      }
    </section>
  );
}
