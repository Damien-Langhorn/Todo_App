export function Header(props) {
    const { todos } = props
    const todoslength = todos.length
    const isTaskPlural = todoslength != 1 
    const taskPlural = isTaskPlural ? 'tasks' : 'task'

    return (
        <header>
    <h1 className="text-gradient">You have {todoslength} open {taskPlural}.</h1>
        </header>
    )
}