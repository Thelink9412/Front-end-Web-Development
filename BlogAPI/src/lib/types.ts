export type PostType = {
    id: number,
    title: string,
    dateTime: string,
    body: string,
}

export type NavBarProps = {
    searchInput: string,
    setSearchInput: (val: string) => void,
}

export type PostsContainerProps = {
    posts: PostType[],
    searchInput: string,
}

export type PostProps = {
    info: PostType,
}
export type CreatePostSectionProps = {
    posts: PostType[],
    setPosts: (posts: PostType[]) => void,
}

export type ButtonProps = {
    className: string,
    onClick: () => void,
    children: string,
}