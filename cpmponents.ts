template spec
should display a list of citiespassed
should display textpassed
should download filepassed
should toggle dropdown list when clickedpassed
should display list of cities when dropdown is openpassed
should update the current value when a city is selectedfailed
BEFORE EACH
1
visit/transport
TEST BODY
1
get[data-test="dropdown-btn"]
2
click
3
get.dropdown__item
5
4
first
5
click
(uncaught exception)TypeError: $setup.viewModel.selectCity is not a function
TypeError
The following error originated from your application code, not from Cypress.



  > $setup.viewModel.selectCity is not a function



When Cypress detects uncaught errors originating from your application it will automatically fail the current test.



This behavior is configurable, and you can choose to turn this off by listening to the uncaught:exception event.Learn more
View stack trace
 Print to console
at _createVNode.onSelectCity._cache.<computed>._cache.<computed> (http://127.0.0.1:5173/src/views/transport/transport.component.vue:51:78)
at callWithErrorHandling (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-J6475X5X.js?v=9d92fb66:1565:18)
at callWithAsyncErrorHandling (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-J6475X5X.js?v=9d92fb66:1573:17)
at emit (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-J6475X5X.js?v=9d92fb66:2074:5)
at Proxy.<anonymous> (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-J6475X5X.js?v=9d92fb66:8817:45)
at _createVNode.onOnSelect._cache.<computed>._cache.<computed> (http://127.0.0.1:5173/src/views/transport/components/filters-panel/filters-panel.component.vue?t=1693988781450:41:66)
at callWithErrorHandling (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-J6475X5X.js?v=9d92fb66:1565:18)
at callWithAsyncErrorHandling (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-J6475X5X.js?v=9d92fb66:1573:17)
at emit (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-J6475X5X.js?v=9d92fb66:2074:5)
at <unknown> (http://127.0.0.1:5173/node_modules/.vite/deps/chunk-J6475X5X.js?v=9d92fb66:8817:45)
