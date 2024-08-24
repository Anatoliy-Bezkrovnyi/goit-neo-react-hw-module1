import FriendListItem from "../FriendListItem/FriendListItem"
import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    
    return (
        <ul className={styles.friendList}>
           {friends.map(card=><FriendListItem key={card.id} avatar={card.avatar} name={card.name} isOnline={card.isOnline}/>)}
        </ul>
    )
}

export default FriendList