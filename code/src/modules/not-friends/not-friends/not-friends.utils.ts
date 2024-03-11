import { User } from 'src/app/api/users/users.types'

const API_LOCAL = 'http://localhost:3000'

export const fetchFriends = async () => {
    const serverResponse = await fetch(`${API_LOCAL}/api/users`, {
        method: 'GET',
    })

    if (serverResponse.status < 200 || serverResponse.status >= 400) return null
    const friendList = await serverResponse.json()

    return friendList
}

export const fetchFriend = async (id: string) => {
    const serverResponse = await fetch(`${API_LOCAL}/api/users/${id}`, {
        method: 'GET',
    })

    if (serverResponse.status < 200 || serverResponse.status >= 400) return null
    const friend = await serverResponse.json()

    return friend.data
}

export const postFriend = async (newFriend: User) => {
    const serverResponse = await fetch(`${API_LOCAL}/api/users`, {
        method: 'POST',
        body: JSON.stringify(newFriend),
    })
    if (serverResponse.status < 200 || serverResponse.status >= 400)
        return false
    else return true
}
