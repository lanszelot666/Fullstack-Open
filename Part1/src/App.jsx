const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old </p>
        </div>
    )
}

const App = () => {

    // Console related variables
    const now = new Date()
    const a = 10
    const b = 20

    console.log('Hello from component')
    console.log(now, a + b)

    // Trying out to use props from components
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1>Hello world / Greetings</h1>
            <Hello name='George'/>
            <Hello name='Something'/>
            <Hello name='Maya' age={26 + 10} />
            <Hello name={name} age={age} />
            <Hello/>
        </div>
    )
}

export default App