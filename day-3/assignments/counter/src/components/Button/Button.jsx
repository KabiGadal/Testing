

export const Button = ({ handlebtn }) => {
    
    const handle = (int) => {
    handlebtn(int)
}

    return (
        <div>
            <button onClick = {()=>handle(5)}>Add</button>
            <button onClick = {()=>handle(-5)}>Reduce</button>
        </div>
    )
}