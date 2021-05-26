describe("baidu", function() {
  beforeEach(() => {
    cy.visit('http://www.baidu.com')
  })
  it('百度输入的测试名', function() {
    // 定位到输入框，输入111，然后进行断言
    cy.get('#kw').type('111').should('have.value', '111')
      // 对输入框进行清空，在进行断言判断是否符合
      .clear().should('have.value', '')
  })
})