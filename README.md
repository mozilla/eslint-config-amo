# eslint-config-amo

[![Build Status](https://travis-ci.org/mozilla/eslint-config-amo.svg?branch=master)](https://travis-ci.org/mozilla/eslint-config-amo)
[![npm version](https://badge.fury.io/js/eslint-config-amo.svg)](https://badge.fury.io/js/eslint-config-amo)

Shared eslint config for all amo related JS projects.

## Versioning

This project follows the [semantic versioning](https://semver.org/) specification.

In order to release a new version, please follow these steps:

1. make sure your local `master` branch is up-to-date
2. run the following command to bump the version accordingly and create a commit and a tag for the release:

    ```
    npm version minor
    ```
    
    Note: change `minor` to `patch` or `major` depending on the release (but `minor` is the most frequent).
    
3. push to the main repository (denoted `upstream` below):

    ```
    git push upstream master --tag
    ```
    
4. create a GitHub Release for the new tag: https://github.com/mozilla/eslint-config-amo/releases
