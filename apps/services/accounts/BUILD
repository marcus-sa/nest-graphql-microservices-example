# TODO move these into different build files

load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@io_bazel_rules_docker//container:container.bzl", "container_push")
load("@npm_bazel_typescript//:index.bzl", "ts_library")

package(default_visibility = ["//visibility:public"])

ts_library(
    name = "accounts_service",
    srcs = glob(
        include = ["**/*.ts"],
        exclude = ["**/*spec.ts"],
    ),
    deps = [
        "//libs/prisma",
        "@npm//graphql",
        "@npm//prisma-client-lib",
        "@npm//@nestjs",
        "@npm//@types",
        "@npm//tslib",
    ],
)

nodejs_binary(
    name = "accounts_service_server",
    data = [":accounts_service"],
    entry_point = ":src/main.ts",
)

nodejs_image(
    name = "accounts_service_image",
    data = [":accounts_service"],
    entry_point = ":src/main.ts",
)

# bazel run --define push_tag=${IMAGE_TAG} --define push_repository=${REPOSITORY} //apps/api/gateway/src:api_gateway_container
container_push(
    name = "accounts_service_container",
    format = "Docker",
    image = ":accounts_service_image",
    registry = "gcr.io",
    repository = "$(push_repository)",
    tag = "$(push_tag)",
)
