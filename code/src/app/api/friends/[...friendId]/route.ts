import { friendList } from '../friend-list.mock'

export async function GET(
    request: Request,
    route: { params: { friendId: string } }
) {
    const id = route.params.friendId[0]

    const friend = friendList.find((friend) => friend._id === id)

    if (friend) {
        return Response.json(
            {
                url: request.url,
                data: friendList.find((friend) => friend._id === id),
            },
            { status: 200 }
        )
    }

    return Response.json(
        {
            url: request.url,
            data: 'NOT FOUND',
        },
        { status: 404 }
    )
}
