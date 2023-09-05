
transport:1 Access to fetch at 'http://rabbitmq.next.local/api/queues/%2F/TmsQueue/get' from origin 'http://127.0.0.1:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
transport.viewmodel.ts:27     POST http://rabbitmq.next.local/api/queues/%2F/TmsQueue/get net::ERR_FAILED
readFromQueue @ transport.viewmodel.ts:27
TransportComponentViewModel @ transport.viewmodel.ts:8
setup @ transport.component.vue:53
callWithErrorHandling @ runtime-core.esm-bundler.js:158
setupStatefulComponent @ runtime-core.esm-bundler.js:7236
setupComponent @ runtime-core.esm-bundler.js:7197
mountComponent @ runtime-core.esm-bundler.js:5599
processComponent @ runtime-core.esm-bundler.js:5565
patch @ runtime-core.esm-bundler.js:5040
componentUpdateFn @ runtime-core.esm-bundler.js:5773
run @ reactivity.esm-bundler.js:178
instance.update @ runtime-core.esm-bundler.js:5814
callWithErrorHandling @ runtime-core.esm-bundler.js:158
flushJobs @ runtime-core.esm-bundler.js:357
Promise.then (async)
queueFlush @ runtime-core.esm-bundler.js:270
queuePostFlushCb @ runtime-core.esm-bundler.js:290
queueEffectWithSuspense @ runtime-core.esm-bundler.js:1603
scheduler @ runtime-core.esm-bundler.js:1773
triggerEffect @ reactivity.esm-bundler.js:373
triggerEffects @ reactivity.esm-bundler.js:363
triggerRefValue @ reactivity.esm-bundler.js:974
(anonymous) @ reactivity.esm-bundler.js:1135
triggerEffect @ reactivity.esm-bundler.js:373
triggerEffects @ reactivity.esm-bundler.js:358
triggerRefValue @ reactivity.esm-bundler.js:974
(anonymous) @ reactivity.esm-bundler.js:1135
triggerEffect @ reactivity.esm-bundler.js:373
triggerEffects @ reactivity.esm-bundler.js:358
triggerRefValue @ reactivity.esm-bundler.js:974
set value @ reactivity.esm-bundler.js:1018
finalizeNavigation @ vue-router.mjs:3355
(anonymous) @ vue-router.mjs:3220
Promise.then (async)
pushWithRedirect @ vue-router.mjs:3187
push @ vue-router.mjs:3112
navigate @ vue-router.mjs:2201
callWithErrorHandling @ runtime-core.esm-bundler.js:158
callWithAsyncErrorHandling @ runtime-core.esm-bundler.js:166
invoker @ runtime-dom.esm-bundler.js:278
Show 35 more frames
Show less
transport.viewmodel.ts:45 Error: TypeError: Failed to fetch
    at TransportComponentViewModel.readFromQueue (transport.viewmodel.ts:27:5)
    at new TransportComponentViewModel (transport.viewmodel.ts:8:10)
    at setup (transport.component.vue:53:3)
    at callWithErrorHandling (runtime-core.esm-bundler.js:158:18)
    at setupStatefulComponent (runtime-core.esm-bundler.js:7236:25)
    at setupComponent (runtime-core.esm-bundler.js:7197:36)
    at mountComponent (runtime-core.esm-bundler.js:5599:7)
    at processComponent (runtime-core.esm-bundler.js:5565:9)
    at patch (runtime-core.esm-bundler.js:5040:11)
    at ReactiveEffect.componentUpdateFn [as fn] (runtime-core.esm-bundler.js:5773:9)
