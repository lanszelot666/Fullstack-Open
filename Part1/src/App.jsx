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

    // Define objects as constant array without Component and use them directly as props
    const friends = [
        {name: 'John', age: 15},
        {name: 'Jane', age: 21}
    ]

    // Arrays can be rendered unlik components
    const friendArray = [ 'Peter', 'Maya']
    
    return (
        <div>
            <h1>Hello world / Greetings</h1>
            <Hello name='George'/>
            <Hello name='Something'/>
            <Hello name='Maya' age={26 + 10} />
            <Hello name={name} age={age} />
            <Hello/>
            <p>{friends[0].name} is {friends[0].age} years old</p>
            <p>{friends[1].name} is {friends[1].age} years old</p>
            <p>{friendArray[0]} and {friendArray[1]} are rendered properly</p>
        </div>
    )
}

export default App