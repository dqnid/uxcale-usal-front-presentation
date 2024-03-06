import { userList } from '../user-list.mock'

export async function GET(
    request: Request,
    route: { params: { userId: string } }
) {
    const id = route.params.userId[0]

    const user = userList.find((user) => user._id === id)

    if (user) {
        return Response.json(
            {
                url: request.url,
                data: userList.find((user) => user._id === id),
            },
            { status: 200 }
        )
    }

    return Response.json(
        {
            messages: [
                {
                    code: 'resourcesNotFound',
                    type: 'ERROR',
                    message: 'Resources request were not found',
                    description: 'The user with given id was not found',
                },
            ],
        },
        { status: 404 }
    )
}
