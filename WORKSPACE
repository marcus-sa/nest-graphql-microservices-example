# Bazel workspace created by @bazel/create 0.35.0
# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/master/build-ref.html#workspace
workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "nest_graphql_microservices_example",
    # Map the @npm bazel workspace to the node_modules directory.
    # This lets Bazel use the same node_modules as other local tooling.
    managed_directories = {"@npm": ["node_modules"]},
)

# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "6625259f9f77ef90d795d20df1d0385d9b3ce63b6619325f702b6358abb4ab33",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.35.0/rules_nodejs-0.35.0.tar.gz"],
)

# The yarn_install rule runs yarn anytime the package.json or yarn.lock file changes.
# It also extracts and installs any Bazel rules distributed in an npm package.
load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")

yarn_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

# Install any Bazel rules which were extracted earlier by the yarn_install rule.
load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "e513c0ac6534810eb7a14bf025a0f159726753f97f74ab7863c650d26e01d677",
    strip_prefix = "rules_docker-0.9.0",
    urls = ["https://github.com/bazelbuild/rules_docker/archive/v0.9.0.tar.gz"],
)

load(
    "@io_bazel_rules_docker//repositories:repositories.bzl",
    container_repositories = "repositories",
)

container_repositories()

load(
  "@io_bazel_rules_docker//nodejs:image.bzl",
    nodejs_image_repositories = "repositories",
)

nodejs_image_repositories()

git_repository(
    name = "com_github_tmc_rules_helm",
    tag = "0.4.0",
    remote = "https://github.com/tmc/rules_helm.git",
)

load(
    "@com_github_tmc_rules_helm//:repos.bzl",
    "helm_repositories"
)

helm_repositories()

# Istio example
ISTIO_REF="cd4a148f37dc386986d6a6d899778849e686beea" # 1.2.2
ISTIO_SHA256="a30b152094f0c80887de7f342e3549903e8852a2a6949e2d3e99cf447c5e1afb"
http_archive(
    name = "com_github_istio_istio",
    build_file = "@//charts/istio:BUILD.istio",
    sha256 = ISTIO_SHA256,
    strip_prefix = "istio-%s" % ISTIO_REF,
    url = "https://github.com/istio/istio/archive/%s.zip" % ISTIO_REF,
)
