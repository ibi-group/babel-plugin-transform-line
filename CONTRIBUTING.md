# Contributing to Isotropic

We'd love for you to contribute to our source code and to make Isotropic even better than it is today!

## Code of Conduct

As contributors and maintainers of the Isotropic project, we pledge to respect everyone who contributes by posting issues, updating documentation, submitting pull requests, providing feedback in comments, and any other activities.

Communication through any of Isotropic's channels (GitHub, IRC, mailing lists, etc.) must be constructive and never resort to personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.

We promise to extend courtesy and respect to everyone involved in this project regardless of gender, gender identity, sexual orientation, disability, age, race, ethnicity, religion, or level of experience. We expect anyone contributing to the Isotropic project to do the same.

If any member of the community violates this code of conduct, the maintainers of the Isotropic project may take actions that include, but are not limited to, removing issues, comments, and pull requests, or blocking accounts as deemed appropriate.

## Found an Issue?
If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to our GitHub repositories. Even better, you can submit a pull request with a fix!

**Please see the Submission Guidelines below**.

## Want a Feature?
You can request a new feature by submitting an issue to our GitHub repositories. If you would like to implement a new feature, then please consider what kind of change it is:

- **Major Changes** that you wish to contribute to the project should be discussed first on our [dev mailing list][isotropicjs-dev] so that we can better coordinate our efforts, prevent duplication of work, and help you to craft the change so that it is successfully accepted into the project.
- **Minor Changes** can be drafted and submitted to the GitHub repositories as pull requests.

## Submission Guidelines

### Submitting an Issue
Before you submit your issue, search the archive! It's possible your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize the effort we can spend fixing issues and adding new features by *not* reporting duplicate issues.

Providing the following information will increase the changes of your issue being dealt with in a timely manner:

- **Overview of the Issue**: if an error is being thrown, a full stack trace helps
- **Motivation for the Use Case**: explain why this is a bug for you
- **Isotropic Version(s)**: is the issue a regression?
- **Reproduce the Error**: provide a live example using JSFiddle or an unambiguous set of steps
- **Related Issues**: has a similar issue been reported before?
- **Suggest a Fix**: if you can't fix the bug yourself, perhaps you can point to what might be causing the problem (e.g. a line of code or specific commit)

**Cultivate good karma: if you get help, pay it forward and help others!**

### Submitting a Pull Request
Before you submit your pull request, consider the following guidelines:

- Search GitHub for an open or closed pull request that relates to your submission. Try not to duplicate effort!

- Make your changes in a new git branch:
```shell
git checkout -b my-fix-branch develop
```

- Create your patch, **including the appropriate tests**

- Ensure your code follows our ESLint rules

- Run the full Isotropic test suit and ensure that all tests pass:
```shell
npm test --coverage
```

- Commit your changes using a descriptive commit message that follows our commit message conventions.

- Push your branch to GitHub:
```shell
git push origin my-fix-branch
```

- In GitHub, send a pull request to `isotropic:develop`

- If we suggest changes, then:
    - Make the required updates
    - Re-run the Isotropic test suite to ensure tests are still passing
    - Commit your changes to your branch (e.g. `my-fix-branch`)
    - Push the changes to your GitHub repository, which will update your pull request

If the pull request gets too outdated, we may ask you to merge upstream changes.

That's it! Thank you for your contribution!

#### After your pull request is merged
You may safely delete your branch and pull the changes from the main (upstream) repository:

- Delete the removed branch on GitHub, either through the GitHub web UI or your local shell as follows:
```shell
git push origin --delete my-fix-branch
```

- Check out the develop branch:
```shell
git checkout develop -f
```

- Delete the local branch:
```shell
git branch -D my-fix-branch
```

- Update your repo with the latest upstream version:
```shell
git pull -ff upstream develop
```

## Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you work on Isotropic:

- All features or bug-fixes **must be tested** by one or more unit tests.
- (Add more as we need them)

## Git Commit Guidelines
Structure your commit messages like this:

> Short (50 chars or less) summary of changes
>
> More detailed explanatory text, if necessary. Wrap it to about 72
> characters or so. In some contexts, the first line is treated as the
> subject of an email and the rest of the text as the body. The blank
> line separating the summary from the body is critical (unless you
> omit the body entirely); tools like rebase can get confused if you
> run the two together.
>
> Further paragraphs come after blank lines.

### DO
- Write the summary and description of what you have done in the imperative mode, i.e. as if you were commanding someone. Start the line with "Fix", "Add", "Change" instead of "Fixed", "Added", "Changed"
- Always leave the second line blank
- Line break the commit message (to make the message readable without having to scroll horizontally in some tools)

### DON'T
- Don't end the summary with a period - it is a title and titles don't end with a period

### Tips
- If it seems difficult to summarize what your commit does, it may be because it includes several logical changes or bug fixes. Attempt to split them up into several commits via `git add -p`

[isotropicjs-dev]: https://groups.google.com/forum/#!forum/isotropicjs-dev
