# Contribution Guide

Thank you for your interest in hardhat-dependency-injector, and your will to contribute to it.
This document will help you with the guidelines, tips, and advises on how to contribute into the project.

This guide is intended for both the Public/Community Contributors and core team,
though the levels of access and processes may slightly differ between these types.
This will be noted where possible.

## Index

-  [Reporting Issues](#reporting-issues)
-  [Contributing to the Source Code](#contributing-to-the-source-code)
   -  [Pull Requests](#pull-requests)
   -  [Commit Policy and Code Review Guideline](#commit-policy-and-code-review-guideline)
   -  [Style Guides](#style-guides)

## Reporting Issues

Please open an issue in [GitHub](https://github.com/vgorin/solidity-template) if you find a bug or have a feature request.

Before submitting a bug report or feature request, double check and make sure it hasn't been submitted already.

The more detailed your report is, the faster it can be resolved.
If you report a bug, please provide steps to reproduce it and source code revision number where this bug reproduces.

## Contributing to the Source Code

If you would like to contribute to the code to fix a bug, add a new feature, enhance documentation,
or otherwise improve the project, pull requests are most welcome.

Any code is committed to `develop`, `main`, or `master` branches through pull requests.

The code should comply with [Style Guides](docs/style_guides.md), [Design Principles](#design-principles),
[Frameworks and Tooling Conventions](#frameworks-and-tooling-conventions).

Our pull request template contains a [checklist](docs/pull_request_template.md)
of acceptance criteria for your pull requests.
Please read it before you start contributing and make sure your contributions adhere to the checklist.

### Pull Requests

The pull request process has a number of goals:

-  Maintain the project quality and security levels
-  Allow users to fix problems or add features that they find beneficial
-  Engage the community in working toward the best possible code
-  Enable a sustainable system for core team to review and facilitate public contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Verify that your pull request contain only the changes related to the issue it solves;
   if you find the opposite, split it into separate pull requests, so that each of them
   corresponds to exactly one issue or feature
2. Make sure you follow the [Style Guides](docs/style_guides.md), and
   [Commit Policy](docs/commit_policy.md)
3. Ensure that all existing tests pass, and that code coverage has not diminished
4. Write any new tests to cover your added functionality
   1. Test coverage must not be formal, but functional
   2. Pay attention to all possible corner cases, flowing from the requirements
   3. Don't hesitate to implement parameterized tests which are then run several times using different inputs
5. Check if deployment scripts, hardhat tasks, other supporting scripts, etc. require modifications, or if
   new scripts must be introduced to support the code and functionality added
6. Ensure the code submitted includes a comprehensive documentation
   1. Tests should have brief explanation in the file headers regarding what they apply to
   2. Tests should be minimalistic (1-2 lines of code per test) and self-explanatory:
      1. A failing test should point to the problem without a need to open and read test case code
      2. Self-explanatory test cases doesn't require additional documentation
   3. Check if root [README](README.md), or other documentation files require update(s)

The reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be
ultimately accepted.
Public submission of features may not always be approved if they do not align with the product goals of the core team.

### Commit Policy and Code Review Guideline

This section describes in detail branch and commit naming, opening a pull request, reviewing it, merging, and other
topics related to the development workflow.

It is available as a separate document [Where and How to Commit Your Work](docs/commit_policy.md)

### Style Guides

This section describes in detail programming conventions, style, and best practices for writing code, tests, etc..

It is available as a separate document [Style Guides](docs/style_guides.md)

## About

Prepared by Basil Gorin
