CypressError
cy.visit() failed trying to load:



http://127.0.0.1:5173/



We attempted to make an http request to this URL but the request failed without a response.



We received this error at the network level:



  > Error: connect ECONNREFUSED 127.0.0.1:5173



Common situations why this would fail:

  - you don't have internet access

  - you forgot to run / boot your web server

  - your web server isn't accessible

  - you have weird network configuration settings on your computer
alser.dispatcherworkplaceui/cypress/e2e/project.cy.ts:4:1
  2 | describe('template spec', () => {
  3 |     it('passes', () => {
> 4 |         cy.visit('http://127.0.0.1:5173');
    | ^
  5 |     });
  6 | });
  7 | //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5jeS5qcyIsInNvdXJjZ
