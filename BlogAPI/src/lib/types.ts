export type PostType = {
    id: string,
    title: string,
    dateTime: string,
    body: string,
}

export type PostProps = {
    info: PostType,
    areButtonsDisplayed: boolean,
}

export type UpdateDBSectionProps = {
    title?: string,
    body?: string,
    children: string,
}

export type ButtonProps = {
    className: string,
    onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    children: string,
}