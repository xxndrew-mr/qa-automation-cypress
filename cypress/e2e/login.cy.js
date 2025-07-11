describe('Login Form Test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/login.html');
  });

  it('Login berhasil dengan data valid', () => {
    cy.get('#email').type('admin@mail.com');
    cy.get('#password').type('123456');
    cy.get('button').click();
    cy.get('#msg').should('contain', 'Login success!');
  });

  it('Login gagal dengan data salah', () => {
    cy.get('#email').type('salah@mail.com');
    cy.get('#password').type('salah');
    cy.get('button').click();
    cy.get('#msg').should('contain', 'Invalid credentials');
  });
});
