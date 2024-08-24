import styles from './Profile.module.css'

const Profile = ({ image, tag, location, name, stats }) => { 
    return (
      <div className={styles.container}>
      <div className={styles.profileInfo}>
          <img className={styles.profileImage}
            src={image}
          alt="User avatar"
          />
          <p className={styles.profileName}>{name}</p>
          <p className={styles.profileTag}>{`@${tag}`}</p>
          <p className={styles.profileLocation}>{location}</p>
      </div>       
    
      <ul className={styles.statistic}>
        <li className={styles.statisticItem}>
          <span className={styles.statisticItemHeader}>Followers</span>
            <span className={styles.statisticItemValue}>{stats.followers}</span>
        </li>
        <li className={styles.statisticItem}>
          <span className={styles.statisticItemHeader}>Views</span>
            <span className={styles.statisticItemValue}>{stats.views}</span>
        </li>
        <li className={styles.statisticItem}> 
          <span className={styles.statisticItemHeader}>Likes</span>
            <span className={styles.statisticItemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
    )
    
}

export default Profile
 