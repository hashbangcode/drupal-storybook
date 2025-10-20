########
# Help #
########

## Colors
COLOR_RESET   = \033[0m
COLOR_INFO    = \033[32m
COLOR_COMMENT = \033[33m

help: ## Display this help message
	@printf "${COLOR_COMMENT}Usage:${COLOR_RESET}\n"
	@printf " make [target]\n\n"
	@printf "${COLOR_COMMENT}Available targets:${COLOR_RESET}\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; { \
		printf " ${COLOR_INFO}%-30s${COLOR_RESET} %s\n", $$1, $$2 \
	}'

.PHONY: storybook
storybook: ## Run storybook from inside DDEV.
	@ddev exec "cd tests && npm run storybook"

.PHONY: storybook-build
storybook-build: ## Build storybook from inside DDEV.
	@ddev exec "cd tests && npm run build-storybook"

.PHONY: storybook-install
storybook-install: ## Install storybook inside DDEV.
	@ddev exec "cd tests && npm install"

.PHONY: generate-stories
generate-stories: ## Generate all stories.
	@ddev drush storybook:generate-all-stories --uri=https://drupal-storybook.ddev.site/

.PHONY: drupal-install
drupal-install: ## Install Drupal using built in config.
	@ddev drush sql-drop --yes
	@ddev drush si --existing-config --yes --account-name=admin --account-pass=admin
	@ddev drush cr
	@ddev drush cim -y
