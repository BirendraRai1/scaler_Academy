1>difference between package.json and package-lock.json
    Version Control: package.json specifies version ranges, while package-lock.json locks them to specific versions for exact reproduction.
    Updates: When installing a new package or updating a dependency, package.json and package-lock.json are both updated, but only package-lock.json records the entire dependency tree.
    Use Case: package.json is for project configuration and package specifications, whereas package-lock.json ensures stability across environments.


2>difference between tilde and carat in package.json while installing dependencies
    1. Tilde (~)
            Syntax: ~major.minor.patch
            Behavior: Allows updates to the patch version (the last number) but not to the minor or major versions.
            Example: ~1.2.3 will accept updates to versions like 1.2.4, 1.2.5, etc., but it will not update to 1.3.0 or 2.0.0.
            Use Case: Ideal for cases where you want to limit updates to bug fixes and small changes, reducing the chance of compatibility issues due to feature changes in minor updates.
    2. Caret (^)
    Syntax: ^major.minor.patch
    Behavior: Allows updates to the minor and patch versions but not to the major version.
    Example: ^1.2.3 will accept updates to any version 1.x.x (like 1.3.0, 1.4.5, etc.), but it won’t update to 2.0.0.
    Use Case: Useful when you want to allow non-breaking updates (minor and patch versions) but want to avoid major updates, which could introduce breaking changes.



3>why we should add package-lock.json inside the git repository
    Including package-lock.json in your Git repository is highly recommended for the following reasons:

    Consistency Across Environments:

    The package-lock.json file records the exact versions of dependencies (and sub-dependencies) installed in your project. Committing it ensures that every developer, CI/CD pipeline, and production environment installs the same versions, reducing bugs caused by version discrepancies.


    Faster Installations:

    With package-lock.json present, npm can quickly resolve the exact dependency tree without needing to query the npm registry to determine compatible versions, leading to faster npm install times.
    Security and Stability:

Locking dependency versions helps prevent unintentional updates that might introduce breaking changes or security vulnerabilities. Without the lock file, dependencies could vary slightly with each install, potentially introducing issues.
Accurate Dependency Trees:

For complex projects, dependency trees can become intricate, with many nested dependencies. package-lock.json preserves this entire tree, meaning if any sub-dependency needs to be pinned or fixed due to an issue, this is explicitly recorded, ensuring predictable builds.
Visibility into Changes:

Changes to package-lock.json allow you to easily see when dependencies are updated, making it clear if a new version or vulnerability fix has been applied. This is useful in code reviews, especially for spotting unintended upgrades.
Avoids Issues with Version Ranges:

If package.json uses semver ranges (like ^1.0.0 or ~1.0.0), npm will look for the latest compatible versions within those ranges, which could differ between installs. The lock file ensures everyone uses the exact versions installed during the initial npm install

4>Difference between JS object and JSON
5>First the database should be connected and then we should listen to the server