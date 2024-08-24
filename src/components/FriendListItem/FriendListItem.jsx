import styles from './FriendListItem.module.css'
import clsx from 'clsx'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.friendCard}>
            <img className={styles.friendImage} src={avatar} alt="Avatar"/>
            <p className={styles.friendName}>{name}</p>
            <p className={clsx(styles.friendStatus, isOnline ? styles.online : styles.offline)}>{isOnline ? "Online" : "Offline"}</p>
        </li>
    )
}

export default FriendListItem