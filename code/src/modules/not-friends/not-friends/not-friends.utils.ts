export const fetchFriends = async () => {
    const serverResponse = await fetch('http://localhost:3000/api/users', {
        method: 'GET',
    })

    if (serverResponse.status < 200 || serverResponse.status >= 400) return null
    const friendList = await serverResponse.json()

    return friendList
}
