describe('API Automation Test', () => {
    const baseUrl = 'https://gorest.co.in/public/v2';
    const token = '62bbe198bc00bb6a6c73f64ae59fa12dcd60494af3925bc0a44db80ce7d7a66d'; // masukkan token yang didapatkan dari website
  
    it('Creates a post comment', () => {
      const commentData = {
        name: 'Test Comment',
        email: 'test4234@test.com',
        body: 'This is a test comment'
      };
  
      cy.request({
        method: 'POST',
        url: `${baseUrl}/posts/481/comments`,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: commentData
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });