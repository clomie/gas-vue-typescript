# UTF-8, LF
MAKEFLAGS += --warn-undefined-variables
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := help

# all targets are phony
.PHONY: $(shell egrep -o ^[a-zA-Z_-]+: $(MAKEFILE_LIST) | sed 's/://')

help: ## Print this help
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install-frontend:
	cd ./frontend ; npm install

install-script:
	cd ./script ; npm install

install: install-frontend install-script ## Install dependencies

lint-frontend:
	cd ./frontend ; npm run lint

lint-script:
	cd ./script ; npm run lint

lint: lint-frontend lint-script ## Lint codes

build-frontend:
	cd ./frontend ; npm run build

build-script:
	cd ./script ; npm run build

build: build-frontend build-script ## Build application

test-workflow-lint:
	act push -j lint -P ubuntu-latest=nektos/act-environments-ubuntu:18.04

test-workflow:
	VUE_APP_PICKER_DEVELOPER_KEY=`grep VUE_APP_PICKER_DEVELOPER_KEY ./frontend/.env.local | cut -d= -f2` \
	CLASPRC_JSON=`cat ~/.clasprc.json` \
	CLASP_JSON=`cat .clasp.json` \
	act push -j deploy -P ubuntu-latest=nektos/act-environments-ubuntu:18.04 -s VUE_APP_PICKER_DEVELOPER_KEY -s CLASPRC_JSON -s CLASP_JSON
