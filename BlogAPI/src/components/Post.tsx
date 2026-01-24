import type { PostProps } from "../lib/types";
import '../styles/post.css'

export function Post({ info }: PostProps){
    return (
        <div className="post" data-id={info.id}>
            <h2 className="post-title">{info.title}</h2>
            <span className="post-dateTime">{info.dateTime}</span>
            <p className="post-body">{info.body}</p>
        </div>
    )
}