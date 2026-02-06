export type PostType = {
    id: string,
    title: string,
    dateTime: string,
    body: string,
}

export type NavBarProps = {
    searchInput: string,
    setSearchInput: (val: string) => void,
}

export type PostsContainerProps = {
    searchInput: string,
    setPosts: (posts: PostType[] | ((prev: PostType[]) => PostType[])) => void,
}

export type PostProps = {
    info: PostType,
    setPosts: (posts: PostType[] | ((prev: PostType[]) => PostType[])) => void,
    areButtonsDisplayed: boolean,
}

export type UpdateDBSectionProps = {
    posts: PostType[],
    setPosts: (posts: PostType[] | ((prev: PostType[]) => PostType[])) => void,
    title?: string,
    body?: string,
    children: string,
}

export type ButtonProps = {
    className: string,
    onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children: string,
}