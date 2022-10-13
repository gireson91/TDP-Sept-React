function Person() {
    const me = {
        name: "Jordan",
        age: 28
      }
    return (
        <div>
            <p>Name: {me.name}</p>
            <p>Age {me.age}</p>
        </div>
    )
}

export default Person;