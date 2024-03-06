export type User = {
    _id: string
    picture: string // to show wrong api management

    username: string
    firstName: string
    lastName: string
    lastName2: string
    email: string
    phone: string
    userStatus: 'online' | 'offline' | 'busy' | 'away'
    identification: {
        value: string
        type: 'NIF' | 'NIE' | 'DNI'
    }
}
