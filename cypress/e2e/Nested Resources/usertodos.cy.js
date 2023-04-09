describe('API Automation Test', () => {
    const baseUrl = 'https://gorest.co.in/public/v2';
    const token = '62bbe198bc00bb6a6c73f64ae59fa12dcd60494af3925bc0a44db80ce7d7a66d';
it('Retrieves user todos', () => { 
    cy.request({
        method: 'GET',
        url: `${baseUrl}/users/481/todos`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        
      });
    });
});