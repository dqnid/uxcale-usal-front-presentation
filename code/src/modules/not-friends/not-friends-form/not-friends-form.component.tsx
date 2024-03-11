import React, { FormEvent, useState } from 'react'
import styles from './not-friends-form.module.css'
import { User } from 'src/app/api/users/users.types'
import { postFriend } from '../not-friends/not-friends.utils'
import { useRouter } from 'next/navigation'

export type NotFriendsFormProps = {}

export function NotFriendsForm() {
    const [postResult, setPostResult] = useState<
        'pending' | 'error' | 'success'
    >('pending')
    const [friendUsername, setFriendUsername] = useState<string>()
    const [friendFirstName, setFriendFirstName] = useState<string>()
    const [friendMail, setFriendMail] = useState<string>()

    const router = useRouter()

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (friendUsername && friendMail && friendFirstName) {
            const newFriend: User = {
                username: friendUsername,
                firstName: friendFirstName,
                email: friendMail,
            }
            postFriend(newFriend).then((result) => {
                if (result) {
                    setPostResult('success')
                } else {
                    setPostResult('error')
                }
            })
            router.push('/not-friends')
        }
    }
    if (postResult === 'error') {
        return <>Error!</>
    }
    return (
        <div data-testid="not-friends-form" className={styles.container}>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(event) => {
                        setFriendFirstName(event.target.value)
                    }}
                />
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(event) => {
                        setFriendUsername(event.target.value)
                    }}
                />
                <label htmlFor="username">Nombre de usuario</label>
                <input
                    type="email"
                    name="mail"
                    id="mail"
                    onChange={(event) => {
                        setFriendMail(event.target.value)
                    }}
                />
                <label htmlFor="mail">Mail</label>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}
