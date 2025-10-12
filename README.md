# Storybook Drupal Example

An example Drupal install with Storybook to previews of Single Directory
Components.

## Set Up

Add the following rules to the web/sites/development.services.yml file.

```yml
parameters:
  storybook.development: true
  cors.config:
    enabled: true
    allowedHeaders: [ '*' ]
    allowedMethods: [ '*' ]
    allowedOrigins: [ '*' ]
    exposedHeaders: false
    maxAge: false
    supportsCredentials: true
```

## Make Commands

- drupal-install - Install Drupal using built in config.
- generate-stories - Generate all stories.
- storybook-build - Build storybook from inside DDEV.
- storybook - Run storybook from inside DDEV
