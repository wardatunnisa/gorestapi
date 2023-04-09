describe('API Automation Test', () => {
    const baseUrl = 'https://gorest.co.in/public/v2/users'
    const accessToken = '62bbe198bc00bb6a6c73f64ae59fa12dcd60494af3925bc0a44db80ce7d7a66d'

it('updates user details', () => {
    cy.request({
        method: 'PUT',
        url: `${baseUrl}/480`,
        headers: { Authorization: `Bearer ${accessToken}` },
        body: { name: 'Gov. Navin Khatri Updated' },
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
  })
})