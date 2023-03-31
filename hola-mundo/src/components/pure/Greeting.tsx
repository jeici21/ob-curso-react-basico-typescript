import { Component } from 'react'

interface GreetingProps { name: string }
interface GreetingState { age: number }

export default class Greeting extends Component<GreetingProps, GreetingState> {
    constructor(props: GreetingProps) {
        super(props)
        this.state = {
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>¡HOLA {this.props.name}!</h1>
                <h2>Tu edad es de: {this.state.age}</h2>
                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        )
    }

    birthday = () => {
        this.setState(prevState => (
            { age: prevState.age + 1 }
        ))
    }
}
