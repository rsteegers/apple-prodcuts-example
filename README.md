# Apple Products Example
Test project that showcases frontend abilities: https://apple-products-test-baff9.web.app/. If nothing happens when clicking the registration button in the Chrome browser, then open a Chrome browser incognito or access this link: https://apple-products-test-baff9.web.app/security/register

## Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
## Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.
## Configurations
Firebase authentication is used to manage security. Firebase Config are in environment.ts
## Structure
The project is structured in several individual modules, a core module, few guards to control routing access and shared utilities, like common components:
+app
    + core
        + models
        + services
        + store
    + guards
    + shared
        + components
    + modules
        + product
            + models
            + components
        + security
            + components
            + store
The idea behind this architecture is to embrace modularity, while keeping it simple.
# Core Module
Core Module contains common things, like a shared kernel. It containts Models considered as common for the whole project, and can not belong to a sigle module. Also, this module contain Services, necessary for communication with external services. Last, there is a Ngrx Store, which handle navigation and common states, if needed.
# Product Module
This module encapsulated all pieces related with products, which includes models, components, layouts.., all about products. Each product page is represented by a smart product-container component (e.g. iphone-container) that use several dubm components (e.g. custom-card in shared module) followin Smart & Dumb Components pattern. Each module also handle it's own routing, so this module has product-routing.module.ts, which serves as an entry point.
# Security Module
Security Module handle authentication logic, and also registration. It is also meant to be the place to handle authorizations, role management and others regarding to security. This module could be considered as core module, but it was built in a way that can be dispossed if it's not necessary in the future, thats why is a isolated module.
