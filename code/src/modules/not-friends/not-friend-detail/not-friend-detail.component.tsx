import React, { useEffect, useState } from 'react'
import styles from './not-friend-detail.module.css'
import { useParams } from 'next/navigation'
import { fetchFriend } from '../not-friends/not-friends.utils'

export type NotFriendDetailProps = {}

export function NotFriendDetail(props: NotFriendDetailProps) {
    const params = useParams<{ id: string }>()
    const [friendInfo, setFriendInfo] = useState({})

    useEffect(() => {
        fetchFriend(params.id).then((friend) => {
            setFriendInfo(friend)
        })
    }, [])

    return (
        <div data-testid="not-friend-detail" className={styles.container}>
            {JSON.stringify(friendInfo)}
        </div>
    )
}
