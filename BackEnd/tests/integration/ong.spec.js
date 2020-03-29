const request = require('supertest')
const app = require('../../src')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it( 'should be the to create a new ONG' , async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "NomeONG",
	            email: "ExemploDeONG@ongs.com.br",
	            whatsapp: "1144758569",
	            city: "Rio Grande do Sul",
	            uf: "SC"
            })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})
