class Student extends User{
    constructor(login, password, name){
        super(login, password)
        this.name = name
    }
    showCheckPass() {
        return this.checkPass() ? 'прошел' : 'не прошел'
    }
    render(){
        const body = document.body
        // const node = document.createElement('a');
        // node.href = "#"
        // node.innerHTML = this.name;
        // node.onclick = this.showCheckPass()
        const node = `<a class='test' href='#'>${this.name}</a>`
        body.innerHTML = node;
        const elem = document.querySelector('.test')
        // node.addEventListener('click', () => this.showCheckPass())
        elem.addEventListener('click', () => console.log(this.showCheckPass()))
        console.log(node)
        // body.prepend(node);
    }
}

const student = new Student('VasyaLogin', '1234', "Petya")
student.render()