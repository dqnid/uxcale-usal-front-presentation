import { userList } from './user-list.mock'

let tempUserList = userList

export async function GET() {
    return (Response as any).json({ data: { friends: tempUserList } })
}

export async function POST(request: Request) {
    const res = await request.json()
    tempUserList.push({
        ...res,
        _id: (Math.random() * 123) / 99999,
    })
    return (Response as any).json(
        {
            messages: [
                {
                    code: 'GOOD_REQUEST',
                    message: 'Friend created',
                    type: 'SUCCESS',
                    description: 'All parameters were provided correctly.',
                },
            ],
        },
        { status: 200 }
    )
}
