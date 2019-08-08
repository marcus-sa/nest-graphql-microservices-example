load("@com_github_tmc_rules_helm//helm:helm.bzl", "helm_release")

package(default_visibility = ["//visibility:public"])

helm_release(
    name = "istio_init",
    chart = "@com_github_istio_istio//:istio_init",
    namespace = "istio-system",
    release_name = "istio-init",
    values_yaml = ":values.yaml",
)

helm_release(
    name = "istio",
    chart = "@com_github_istio_istio//:istio",
    namespace = "istio-system",
    release_name = "istio",
    values_yaml = ":values.yaml",
)
