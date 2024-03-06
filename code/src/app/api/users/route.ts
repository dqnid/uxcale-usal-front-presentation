import { userList } from './user-list.mock'

export async function GET() {
    return Response.json({ data: { friends: userList } })
}

export async function POST() {
    const positivePOST = {
        messages: [
            {
                code: 'GOOD_REQUEST',
                message: 'Friend created',
                type: 'SUCCESS',
                description: 'All parameters were provided correctly.',
            },
        ],
    }

    const negativePOST = {
        messages: [
            {
                code: 'BAD_REQUEST',
                message: 'Invalid Parameter',
                type: 'ERROR',
                description: 'A parameter has not been provided correctly.',
            },
        ],
    }

    return Response.json(positivePOST, { status: 200 })
}
