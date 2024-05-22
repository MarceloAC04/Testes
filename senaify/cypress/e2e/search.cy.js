describe('Teste da tela de pesquisa', () => {
  before(() => {
    cy.visit('/')
  });

  it('Redirecionar a minha tela para a tela de busca', () => {
    cy.get("[href='/Search']").click()

    cy.scrollTo("top")
  });

  it('Procurar uma música', () => {
    cy.get("[data-testid='campoBusca']").type("Roots Bloody Roots")
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)

    // cy.get("[aria-label='music-item']").filter(':contains("Roots Bloody Roots")',   { matchCase: true }).click()
    cy.scrollTo("top")
  });

  it('Clicou no botao de curtir', async () => {
    cy.wait(1500)

    cy.get("[aria-label='music-item']").filter(":contains('Roots Bloody Roots')").then(async (item) => {
      cy.wrap(item).find("[data-testid='icon-button']").click()
    });
  });

  
})