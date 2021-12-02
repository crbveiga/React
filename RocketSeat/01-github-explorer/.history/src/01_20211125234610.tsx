type User = {
name: string
email: string
address: {
    city: string
    state?: string
}

}


function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-amail is ${user.email}. Your city is ${user.city} and your state is ${user.state}`;

}

showWelcomeMessage ({
    name: 'John Doe',
    email: 'john@doe.com',
    address: " "
})