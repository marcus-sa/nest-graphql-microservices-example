# TS compile
load("@npm_bazel_typescript//:index.bzl", "ts_library")

package(default_visibility = ["//visibility:public"])

ts_library(
    name = "api_gateway",
    srcs = glob(
        include = ["**/*.ts"],
        exclude = ["**/*spec.ts"],
    ),
    deps = [
        "@npm//@nestjs",
        "@npm//@types",
        "@npm//tslib",
    ],
)
