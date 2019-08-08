load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")
load("@io_bazel_rules_docker//container:container.bzl", "container_push")

package(default_visibility = ["//visibility:public"])

nodejs_binary(
    name = "api_gateway_server",
    data = [
        "//src/app:api_gateway",
        "@npm//@nestjs/common",
        "@npm//@nestjs/core",
        "@npm//@nestjs/platform-express",
        "@npm//@nestjs/graphql",
    ]
    entry_point = ":src/main.ts",
)

nodejs_image(
    name = "api_gateway_image",
    data = [
        "//src/app:api_gateway",
        "@npm//@nestjs/common",
        "@npm//@nestjs/core",
        "@npm//@nestjs/platform-express",
        "@npm//@nestjs/graphql",
    ],
    entry_point = ":src/main.ts",
)


# bazel run --define push_tag=${IMAGE_TAG} --define push_repository=${REPOSITORY} //apps/api/gateway/src:api_gateway_container
container_push(
    name = "api_gateway_container",
    format = "Docker",
    image = ":api_gateway_image",
    registry = "gcr.io",
    repository = "$(push_repository)",
    tag = "$(push_tag)",
)
