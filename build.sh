#!/bin/bash
# Exit in case of error
set -e

# Install Ruby gems
bundle install

# Build the static site, assuming Jekyll
bundle exec jekyll build
