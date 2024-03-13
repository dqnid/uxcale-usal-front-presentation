const API_URL = 'http://localhost:3000/api/users'

export async function fetchUsers() {
    const response = await fetch(API_URL, { method: 'GET' })
    return response.json()
}
