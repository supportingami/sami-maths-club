**Update**

- [x] ng core 11->18
- [x] mat 11->16
- [x] mat 16->18
- [ ] sentry
- [x] ngx-markdown
- [ ] capacitor
- [ ] yarn
- [ ] misc deps
- [ ] nx

**Content**

- [ ] control flow migration
- [ ] signals
- [ ] mat component

**Actions**

- [ ] ....

**Functions**

- [ ] ...

**Docs**

- [ ] pre-requisites

**Test**

- [ ] animations
- [ ] scroll restoration
- [x] markdown (katex)
- [ ] web build
- [ ] android build
- [ ] ios build

**Refactor**

- [ ] all components standalone
- [ ] typography
- [ ] provide sentry error handler (see legacy app module)
- [ ] lazy-load component routes
- [ ] problems standalone repo (?)
- [ ] material module imports to components (if standalone in mat 18)
- [ ] async pipe -> signals
- [ ] Dynamic links (deprecated?)
- [ ] Lint rules (enforce control-flow, ordered imports)
- [ ] Weekly problem

Sentry and http client

```ts
providers: [
  {
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({
      showDialog: false,
    }),
  },
  provideHttpClient(withInterceptorsFromDi()),
],
```
