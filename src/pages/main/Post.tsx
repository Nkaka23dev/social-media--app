import { Post as Ipost } from "./Home"
import { AiTwotoneLike } from 'react-icons/ai'
interface Props {
    post: Ipost
}
export default function Post(props: Props) {
    const { post } = props

    return (
        <div className="mt-5 hover:cursor-pointer shadow-md p-5 grid w-full">
            <div className="flex justify-between items-baseline underline">
                <p className="text-2xl capitalize font-semibold text-gray-800">{post.title}</p>
                <p className="text-sm font-bold ">@<span className="text-sky-600">{post.username}</span></p>
            </div>
            <p className="max-w-3xl text-gray-900 mt-2">{post.description}</p>
            <div className="ml-auto flex gap-4 items-center">
                <div className="mt-1 flex gap-1 items-center">
                    {/* <p className="text-lg ">0</p> */}
                    <p>comments</p>
                </div>
                <div className="flex gap-1 items-center">
                    {/* <p className="text-lg mt-2">0</p> */}
                    <AiTwotoneLike className="text-pink-800 text-2xl" />
                </div>
            </div>
        </div>
    )
}
