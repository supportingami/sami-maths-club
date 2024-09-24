## 2024-09 - Update List

**Dependencies**

- [x] ng core 11->18
- [x] mat 11->16
- [x] mat 16->18
- [x] sentry
- [x] ngx-markdown
- [x] capacitor
- [x] yarn
- [x] misc deps

**Content**

- [x] control flow migration
- [x] signals
- [x] mat components
- [x] Weekly problem
- [x] route subscriptions signals

**Actions**

- [x] pr preview
- [ ] production deploy
- [ ] screenshots
- [ ] release drafter

**Functions**

- [x] Upgrade to v2 SEOHost
- [ ] Used pinned tags to [colocate hosting and function assets](https://firebase.google.com/docs/hosting/functions#direct-requests-to-function)
- [ ] Consider using predeploy to ensure index.html copied over
- [ ] Update source files uploaded to contain bare minimum
      https://console.cloud.google.com/run/detail/europe-west1/seohost2/source
- [ ] Fix web deployment action

**Docs**

- [x] pre-requisites

**Test**

- [x] animations
- [x] scroll restoration
- [x] markdown (katex)
- [x] web
- [x] android
- [ ] ios

**Android**

- [ ] Splash screen
- [ ] Notch
- [ ] Deep Links
- [ ] Add crashlytics

**IOS**

- [ ] Configure plist for status bar: https://capacitorjs.com/docs/apis/status-bar#ios-note
- [ ] Notch
- [ ] Analytics
- [ ] Enable push notification https://capacitorjs.com/docs/apis/push-notifications#ios
- [ ] Check all other plugin notes
- [ ] Splash screen
- [ ] Universal links

**Refactor**

- [x] all components standalone
- [x] provide sentry error handler (see legacy app module)
- [x] lazy-load component routes
- [x] async pipe -> signals
- [ ] Dynamic links (deprecated?)
- [ ] Lint rules (enforce control-flow, ordered imports)
- [ ] Run prettier (write) `yarn prettier --write "**/*.{ts}"`
- [ ] problems standalone repo (?)
- [ ] Add nx
- [ ] Add esbuild

**Misc**

- [x] Improve typography
- [x] Fix mat-card shadow
- [x] notch fixes and layout

**Content**

- [ ] Separate out into standalone git repo and add as submodule to app repo
