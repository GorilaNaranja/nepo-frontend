import { Seller } from "../models/User";

interface Props {
  user: Seller
}

export const UserCard = ({ user }: Props) => {
  return (
    <section className="userCard">
      <header className="userCard-header">
        <img
          className="userCard-avatar"
          alt="avatar"
          src={`https://unavatar.io/${user.id}`}
        />
        <div className="userCard-info">
          <strong>{user.name}</strong>
          <span className="userCard-infoUserName">{user.location}</span>
        </div>
      </header>
      <aside>
        <strong className="userCard-tag">
          {user.status}
        </strong>
      </aside>
    </section>
  );
};
