describe('Login Form Test with Fixture', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/login.html');
    cy.fixture('users').as('users'); 
  });

  it('Login berhasil dengan data valid', function () {
    cy.get('#email').type(this.users.validUser.email);
    cy.get('#password').type(this.users.validUser.password);
    cy.get('button').click();
    cy.get('#msg').should('contain', 'Login success!');
  });

  it('Login gagal dengan data salah', function () {
    cy.get('#email').type(this.users.invalidUser.email);
    cy.get('#password').type(this.users.invalidUser.password);
    cy.get('button').click();
    cy.get('#msg').should('contain', 'Invalid credentials');
  });
});
