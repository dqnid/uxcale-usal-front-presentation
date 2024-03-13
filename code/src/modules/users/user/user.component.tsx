import React from 'react'
import styles from './user.module.css'

export type UserProps = {
    username: string
    name: string
    mail: string
    picture?: string
}

export function UserDetail(props: UserProps) {
    const { username, name, mail, picture } = props

    return (
        <div data-testid="user" className={styles.container}>
            <img src={picture} alt={username} />
            <div className={styles.username}>{username}</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.mail}>{mail}</div>
        </div>
    )
}
