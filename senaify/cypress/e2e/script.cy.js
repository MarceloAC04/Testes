describe('template spec', () => {
  before(() => {
    cy.visit('/')
  })
  it('Verificar se o header esta visivel', () => {
    // capturar o elemento title, e ver se ele esta visivel
    cy.get("[aria-label='title-head']").should("be.visible")
    cy.get("[aria-label='title-head']").should("contain", 'Good morning')
  });

  it('Verificar se as playlists estão visíveis', () => {
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  });

  it("Clicar no primeiro item da lista e verifica a lista de músicas", () => {
    cy.wait(2000)
    cy.get('[aria-label="playlist-item"]').first().click();

    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
  });

  it("Clicar na primeira musica e executar o audio", () => {
    cy.wait(2000)
    cy.get('[aria-label="music-item"]').eq(0).click();
  });

  it('Volta a tela home', () => {
    cy.wait(2000)
    cy.visit('/');
  });

  it("Clicar no segundo item da lista e verifica a lista de músicas", () => {
    cy.wait(2000);
    cy.get('[aria-label="playlist-item"]').eq(1).click();

    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
  });

  it("Clicar na primeira musica e executar o audio", () => {
    cy.wait(2000)
    cy.get('[aria-label="music-item"]').eq(0).click();
  });

  it('Redirecionar a minha tela para a tela de busca', () => {
    cy.wait(2000)
    cy.get("[href='/Search']").click()

    cy.scrollTo("top")
  });

  it('Procurar uma música e verifica se retorna uma lista de ', () => {
    cy.wait(2000)
    cy.get("[data-testid='campoBusca']").type("Roots Bloody Roots")
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)

    cy.scrollTo("top")
  });

  it('Toca a primeira música da lista de busca', () => {
    cy.get("[aria-label='music-item']").filter(':contains("Roots Bloody Roots")', { matchCase: true }).first().click()
    cy.wait(10000)
  });

  it('Clicar no botao de curtir', async () => {
    cy.wait(2000)
    cy.get("[aria-label='music-item']").filter(":contains('Roots Bloody Roots')").first().then(async (item) => {
      cy.wrap(item).find("[data-testid='icon-button']").click()
    });
  });

  it('Redirecionar a minha tela para a tela de favoritos', () => {
    cy.get("[href='/Favorites']").click()
    cy.scrollTo("top")
  });

  it('verifica a lista de música e toca a musica favoritada', () => {
    cy.wait(2000)
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    cy.get('[aria-label="music-item"]').eq(0).click({ force: true });
    cy.scrollTo("top")
  });

})