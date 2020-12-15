# eslint-config-amo

[![CircleCI](https://circleci.com/gh/mozilla/eslint-config-amo.svg?style=svg)](https://circleci.com/gh/mozilla/eslint-config-amo) [![npm version](https://badge.fury.io/js/eslint-config-amo.svg)](https://badge.fury.io/js/eslint-config-amo)

Shared eslint config for all amo related JS projects.

## Versioning

This project follows the [semantic versioning](https://semver.org/) specification.

In order to release a new version, please follow these steps:

1. Make sure your local `master` branch is up-to-date.
2. Run the following command from the `master` branch to (1) bump the version accordingly and (2) create a commit and a tag for the release:

   ```
   npm version minor
   ```

   Note: change `minor` to `patch` or `major` depending on the release (but `minor` is the most frequent).

3. Push to the main repository (denoted `upstream` below):

   ```
   git push upstream master --tag
   ```

4. Create a GitHub Release for the new tag: https://github.com/mozilla/eslint-config-amo/releases (you can either select the tag itself or create a new "draft"). Please add a short description of the changes (see the other releases for inspiration).
