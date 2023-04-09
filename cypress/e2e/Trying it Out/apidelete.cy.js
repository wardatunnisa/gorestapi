describe('API Automation Test', () => {
    const baseUrl = 'https://gorest.co.in/public/v2/users'
    const accessToken = '62bbe198bc00bb6a6c73f64ae59fa12dcd60494af3925bc0a44db80ce7d7a66d'

it('deletes a user', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/813607`,
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((response) => {
      expect(response.status).to.eq(204)
    })
  })
})