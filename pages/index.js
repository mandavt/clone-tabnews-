import React from 'react'

function Home() {
    const [name, setName] = React.useState('')

    return <>
        <h1>Let's bora?</h1>
        <Input />
        <Button>Aoba</Button>

        {/* <input type="text" value={name} onChange={event => setName(event.target.value)} /> */}
    </>

}

export function Button(props) {
    return <button>{props.children}</button>
}

export function Input() {
    return <input type="text" />
}

export default Home;