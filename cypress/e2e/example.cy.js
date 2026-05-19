describe('Sample Test', () => {
  it('Open site', () => {
    cy.visit('https://data.autoentry-uat.com/invoices/680565/purchases/inbox');
    
    cy.get('div.AuthBox-Normal').click();
    cy.get('#idp7 div.AuthBoxRow--name').click();
    // Page title changed. The page title changed to 'AutoEntry'
    cy.title()
      .should('eq', 'Sign in ・ Cloudflare Access')
    
  });
});
