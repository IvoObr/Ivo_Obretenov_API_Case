const axioshttps = require('axios');

(async () => {
    
describe('GET /countries',  () => {

  it('should return countries without any parameters', async () => {

        const res = (await axioshttps.get('http://localhost:3000/countries')).data
        expect(res.length).toBeGreaterThan(240)
    });

    it('should return countries with filter', async () => {
        const res = (await axioshttps.get('http://localhost:3000/countries?filter=Bu')).data

        console.log(res)
        expect(res.length).toBe(4)
    });

    it('should return countries with sort', async () => {
        const res = (await axioshttps.get('http://localhost:3000/countries?sort=descend')).data

        expect(res[0].name.common).toBe('Zimbabwe')

    });

    it('should return countries with limit', async () => {
        const res = (await axioshttps.get('http://localhost:3000/countries?limit=40')).data

        expect(res.length).toBe(40)

    });


    it('should return countries with population below 80 million', async () => {
        const res = (await axioshttps.get('http://localhost:3000/countries?population=8')).data

        expect(res.length).toBe(149)

    });
    
    });
})()