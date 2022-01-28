const faker = require('faker');
const boom = require('@hapi/boom');
const getConnection =  require('../libs/postgres');

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

    async find() {
        const client = await getConnection();
        const response = await client.query('SELECT * FROM tasks');
        return response.rows;
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
