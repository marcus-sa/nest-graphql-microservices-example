# TS compile
load("@npm_bazel_typescript//:index.bzl", "ts_library")

package(default_visibility = ["//visibility:public"])

ts_library(
    name = "prisma",
    srcs = glob(
        include = ["**/*.ts"],
        exclude = ["**/*spec.ts"],
    ),
    module_name = "@ngme/prisma",
    deps = [
        "@npm//prisma-client-lib",
        "@npm//@nestjs",
        "@npm//@types",
        "@npm//tslib",
    ],
)
