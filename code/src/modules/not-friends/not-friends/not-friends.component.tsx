import React, { useEffect, useState } from 'react'
import styles from './not-friends.module.css'
import { fetchFriends } from './not-friends.utils'

export type NotFriendsProps = {}

export function NotFriends(props: NotFriendsProps) {
    const [friendList, setFriendList] = useState([])

    useEffect(() => {
        fetchFriends().then((friends) => {
            if (friends) setFriendList(friends)
            else setFriendList([])
        })
    }, [])

    return (
        <div data-testid="not-friends" className={styles.container}>
            These are not my friends:
            {JSON.stringify(friendList)}
        </div>
    )
}
