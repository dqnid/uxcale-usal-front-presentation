import React, { useEffect, useState } from 'react'
import styles from './user-list.module.css'
import { User } from 'src/app/api/users/users.types'
import { fetchUsers } from '../users.utils'
import { UserDetail } from '../user/user.component'

export type UserListProps = {}

export function UserList(props: UserListProps) {
    const [userList, setUserList] = useState<User[]>([])

    useEffect(() => {
        fetchUsers()
            .then((usersResponse) => {
                setUserList(usersResponse.data.friends)
            })
            .catch((e) => console.log(e))
    }, [])

    return (
        <div data-testid="user-list" className={styles.container}>
            <h1 className={styles.title}>Lista de usuarios</h1>
            <div className={styles.userlist}>
                {userList?.map((user) => {
                    return (
                        <UserDetail
                            key={user._id}
                            username={user.username}
                            mail={user.email}
                            name={user.firstName}
                            picture={user.picture}
                        />
                    )
                })}
            </div>
        </div>
    )
}
