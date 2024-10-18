import { Seller } from "../models/User";

interface Props {
  user: Seller,
  index: number,
}

export const UserCard = ({ user, index }: Props) => {
  return (
    <div className="userCard" data-testid={`cy-usercard-${index}`}>
      <header className="userCard-header" data-testid="cy-card-header">
        <img
          className="userCard-avatar"
          alt="avatar"
          src={`https://unavatar.io/${user.id}`}
          data-testid="cy-card-avatar"
        />
        <div className="userCard-info">
          <strong data-testid="cy-card-info">{user.name}</strong>
          <span className="userCard-infoUserName" data-testid="cy-card-location">{user.location}</span>
        </div>
      </header>
      <aside>
        <strong className="userCard-tag" data-testid="cy-card-tag">
          {user.status}
        </strong>
      </aside>
    </div>
  );
};
