const faker = require('faker');
class UserService {
    constructor() {
        this.users = [];
        this.generate();
    }

    generate() {
        const limit = 10;
        for (let index = 0; index < limit; index++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.name.findName(),
                email: faker.internet.email(),
            });
        }
    }

    create() {

    }

    find() {
        return this.users;
    }

    findOne(id) {
        return this.users.find(item => item.id === id);
    }

    update() {

    }

    delete() {

    }
}

module.exports = UserService;